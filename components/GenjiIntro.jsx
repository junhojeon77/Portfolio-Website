"use client";

import { useEffect, useRef } from "react";
import { createChromaKey } from "./resumeChromaKey";

// Source clip 0:03.5–0:06; the final slash arrives at approximately 0:05.8.
const SLASH_TIME = 2.3;

export default function GenjiIntro({ onSlash, onSkip, muted, onMuteChange }) {
  const canvasRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    let renderer;
    let frame;
    let cancelled = false;
    let slashed = false;
    const useVideoFrames = typeof video.requestVideoFrameCallback === "function";
    const timeout = setTimeout(onSkip, 5000);
    function fail() {
      if (!cancelled) onSkip();
    }
    function reveal() {
      if (slashed || cancelled) return;
      slashed = true;
      onSlash();
    }
    function draw() {
      if (cancelled) return;
      try {
        if (video.readyState >= 2) {
          renderer.draw(video);
          if (video.currentTime >= SLASH_TIME) reveal();
        }
        frame = useVideoFrames ? video.requestVideoFrameCallback(draw) : requestAnimationFrame(draw);
      } catch {
        fail();
      }
    }
    function ended() {
      reveal();
      canvas.style.visibility = "hidden";
    }
    function contextLost(event) {
      event.preventDefault();
      fail();
    }
    async function play() {
      try {
        await video.play();
      } catch {
        if (cancelled) return;
        video.muted = true;
        try { await video.play(); } catch { fail(); }
      }
    }
    video.addEventListener("error", fail);
    video.addEventListener("ended", ended);
    canvas.addEventListener("webglcontextlost", contextLost);
    try {
      renderer = createChromaKey(canvas);
      draw();
      play();
    } catch {
      fail();
    }
    return () => {
      cancelled = true;
      clearTimeout(timeout);
      if (useVideoFrames) video.cancelVideoFrameCallback(frame);
      else cancelAnimationFrame(frame);
      video.pause();
      video.removeEventListener("error", fail);
      video.removeEventListener("ended", ended);
      canvas.removeEventListener("webglcontextlost", contextLost);
      renderer?.dispose();
    };
  }, [onSlash, onSkip]);

  return (
    <>
      <video ref={videoRef} src="/genji-resume-intro.mp4" playsInline preload="auto"
        muted={muted} className="resume-intro-source" aria-hidden="true" tabIndex={-1}
        onVolumeChange={event => onMuteChange(event.currentTarget.muted)} />
      <canvas ref={canvasRef} className="resume-intro-canvas" aria-hidden="true" />
    </>
  );
}
