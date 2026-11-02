// Both the video and the reveal use the same contained 16:9 source rectangle.
export function slashLayout(width, height, sourceWidth, sourceHeight) {
  const scale = Math.min(width / sourceWidth, height / sourceHeight);
  const drawWidth = sourceWidth * scale;
  const drawHeight = sourceHeight * scale;
  const x = (width - drawWidth) / 2;
  const y = (height - drawHeight) / 2;
  // Final blade trail measured near source time 5.8s: y=31% to y=64%.
  const slope = (0.64 - 0.31) * drawHeight / drawWidth;
  const left = y + 0.31 * drawHeight - slope * x;
  return { x, y, width: drawWidth, height: drawHeight,
    left: left / height * 100, right: (left + slope * width) / height * 100 };
}

export function createChromaKey(canvas) {
  const gl = canvas.getContext("webgl", { alpha: true, premultipliedAlpha: true });
  if (!gl) throw new Error("WebGL unavailable");
  const shaders = [];
  let program;
  let buffer;
  let texture;
  function dispose() {
    if (texture) gl.deleteTexture(texture);
    if (buffer) gl.deleteBuffer(buffer);
    if (program) gl.deleteProgram(program);
    shaders.forEach(shader => gl.deleteShader(shader));
    gl.clear(gl.COLOR_BUFFER_BIT);
  }
  function compile(type, source) {
    const shader = gl.createShader(type);
    shaders.push(shader);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      throw new Error("Unable to compile video shader");
    }
    return shader;
  }
  try {
    program = gl.createProgram();
    gl.attachShader(program, compile(gl.VERTEX_SHADER, `
      attribute vec2 position;
      varying vec2 uv;
      void main() {
        uv = (position + 1.0) * 0.5;
        gl_Position = vec4(position, 0.0, 1.0);
      }
    `));
    gl.attachShader(program, compile(gl.FRAGMENT_SHADER, `
      precision mediump float;
      uniform sampler2D frame;
      varying vec2 uv;
      void main() {
        vec3 color = texture2D(frame, uv).rgb;
        float green = (color.g - max(color.r, color.b)) / max(color.g, 0.001);
        // Preserve the luminous sword trail and yellow highlights.
        float key = smoothstep(0.25, 0.45, green)
          * (1.0 - smoothstep(0.72, 0.95, color.g));
        float alpha = 1.0 - key;
        color.g = mix(color.g, min(color.g, max(color.r, color.b)), key);
        gl_FragColor = vec4(color * alpha, alpha);
      }
    `));
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) throw new Error("Unable to link video shader");
    gl.useProgram(program);
    buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
    const position = gl.getAttribLocation(program, "position");
    gl.enableVertexAttribArray(position);
    gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);
    texture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
    gl.clearColor(0, 0, 0, 0);
    return {
      draw(video) {
        const width = canvas.clientWidth;
        const height = canvas.clientHeight;
        if (!width || !height || !video.videoWidth) return;
        const ratio = Math.min(window.devicePixelRatio || 1, 2);
        if (canvas.width !== Math.round(width * ratio) || canvas.height !== Math.round(height * ratio)) {
          canvas.width = Math.round(width * ratio);
          canvas.height = Math.round(height * ratio);
        }
        const layout = slashLayout(width, height, video.videoWidth, video.videoHeight);
        canvas.parentElement.style.setProperty("--slash-left", `${layout.left}%`);
        canvas.parentElement.style.setProperty("--slash-right", `${layout.right}%`);
        gl.clear(gl.COLOR_BUFFER_BIT);
        gl.viewport(Math.round(layout.x * ratio), Math.round(layout.y * ratio),
          Math.round(layout.width * ratio), Math.round(layout.height * ratio));
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, video);
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      },
      dispose,
    };
  } catch (error) {
    dispose();
    throw error;
  }
}
