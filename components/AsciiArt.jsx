"use client";

import { useEffect, useRef } from "react";

const art = `                                          .::~;cmY   .,:  .     :
                                   .-,j= ,it: ,-Yj    ..    .       ,
                                  ,~~;,.  .,           ,      .      .
                                  ,:                    ,                ..
                               ,,,,. .                  ..                 ..
                             j;                          :                   .
                            .-. +     -,                                       .
                           : ,,~        ;                 ,
                           =;:. .  .     :                                        .
                          ,;-;,.  ,   .  ,.                                        ,
                          ~::;: ..   ..             .                               ;
                          -+-::.-. .;~: ..                                           .
                         :lit:,,.. ,i;.. . ..
                         -xOt.:=.:.,i:. ...                        ,
                         :xOz:i::-~::......                                            ,
                          vU0j=,;-j;,,,..,.                                          .
                          =C-cti-i=.,.  . . .
                           =Xi+0=::;-~--;:,.  ..  .
                            -dhU:+xXOlji=i=;:..  ...  .                                ,
                            =wQwO~xOYtci++===~-::,......                               ,
                              Ywxttv.,::~=jjjll+~-;::,,,.                           .  .
                             m0xjjzmQzYCOOUYxxtji+=~~-;:,.     .
                            mQzticY0mmmmmm0UXzvtji+===~;,..  ,:;:,...,::            ,  -
                           UCzcjljYmmmmwwmQUUxcjjiiii+=~;,. ,:~=-,..,,;~+..         .. c
                          cOzxvli+cmwmwpmQUYvcliiliiii+~;:,,~=tj-=,.,:;ljc       .  .. ;
                          XYYYYci+~CmmwmmCXxtlliiiiiiiii~-:-+ccj+..jllljv        . .;..,
                          jl=~vc=~+U000QOUzcjliiiiililllliiltvci~=iiiltx        .... :.
                             UXzXYUCm0QCUzvttllliilllllljljtjj~~=i=+lv;         ..  , ,
                            iQwOQXXXC0OXYxttvvjlllllljjjjjttcjjijl=jt         . ., .;
                            ilvXzYXvxQQXxjtvvYxtllllllljtttcjjtzvcc;,. .      .,   .:
                             -ldp0xi;XCYcttvzXxcjlllllljjjjtcvvxvvl..  .           ~
                            ;0OQYvxzCCOXcctcxzxcjjllllljtcvvvxjj~=+,  c            ,
                             QOYYXXUXUxvcttcvxvctllijljtcvvvxxt=-lj,c=   .       :
                             pwmOOUYzxxxcttctxcjjllliljjtcvvvxxt=-lj,c=   .       :
                            ;dmmQCUxxvxxcjctlttjlllllljtcxcjjcvvvi+vXv=  ,       ,
                            vdmQOUzvxvvcjiljlllilllljjjcccctccctcvzztz,
                            +b0CYctccjliiiiiii++lljjjjttcccjjttcccjcl:,..       :
                             +Cxti+++==+==+i++iiillljtjttjlllllii~+;:,,.        j,
                               ;ti=;;;-~~==+iiliiillilllljllllllll++~:    .    .:~t
                                           +Cctttljllililiiii+ii++=~;:,,,..   ::tjtz=
                                          l..dUxxctljiliilli+i++==~~-;:::,. .-ijltcvvl+
                                         =,,.0wOzxvcjlilijllii+===~---;:::,::=llllljj+-:;;-;-:
                                        j,,. CwmUUXxccjjljtjll+==~~~--;;::;;;il+==+i--~.,,::,:;i=l:
                                     ;;j;,,,.:pmOCXXvvctjtjjjli+=~~~~-;;;-:;---~---;;:,..,,,,,,,:-~++j~
                                ltj+++x~:.,., XO0QUUYxvvttttjii+==~~---;-:,:;;;-:::::,..,,,.,,,,,,:;;-===i.
                           i++jUcj~~;lv-:,,,. .YXUUCUXYzcvcjjl+======+i=-:,::,:::,,,,,...,,.,,,,,,::,:;;--+ll
                      tlvttjijY~=::t,z--;,,,.. ;xYxXYYYzxcvcjl+++==++==~:,,,,,,,,,,,,,,.,,.,,,,,,,,,::,::;---+li
                  ~j=,jcc:ittl,~l:i.tc~-::,,..  ;tvvcccvcvxvvjiiiijji~-;:,,,,,,,,,,,,,,,,,,,,,:,,,,,::,,,,::-~~~ijc
                 Yl:.+tx++xcj::=z: ,Y+;,:,,...    jvcvxxxxxzxtjlltj=+=;;,,,,,,,,,,,,,,,,,,::::,::::;;;,,;;::;::-~=iil~
               ;--c,l~vtit=lt,:t,..j ;-,.,,...,      ,YXYXXYYvvtc=ii==;,,,,,,,,,:,,,,,,,,:;;,::-~-;;::,-;::;~:,;:,--iijz:
              tc.+l~-ccll:iY~,x,..j;  :-;,,,,...              .v-;i+~-:,,,,,:,,:,,,,:,,,;~,,:-~~=~;;;;--::=~:::;-,,-:-+iltY:
             tY-.il-=vv-,~xl=j:..=v     ;:.;,.,,             ;cjii;:    ;,,:::::,,,,,,,-~:,:;~~+=-;;-=;,-i=,:;:-~:,+;,:=~++icU
            icX..ti-vv;,=Yllj=..;xl        :,,:,,           itj+=.        ,::,:,,,,,,,,;-::==~~+=-;;-;;+i:::=~-;:,:+:,,-;+l:.ivt
           jXit..j+xc:.-zij++:.;=v.  .,,..   :::::         :                 :,,,,,,,,,;;:;~===ii~:--~+i:,;-=--:::il-:.::=+;,.,c
          YCjx+, jtv,.;xct=j;.+~c-,::--.:-     ,:,       l,           .........,,,,,,,,-;:~++++=+=::=i+,,:~=;;~=,:++;-..=:~;,,,:
         ivXtY=: lc,.:vjt:jj,.-jtijjct=-tl      ;=     ;~           ..,,.,,,,,,...:,,,,-;;~=+ii++-;+i=,,,---::=i-;j~,,. ~:,,,,,,
        -itXcj ~ j+.,ctl,~x-.:jztjjjjl~=xl.,    =t.   i            ..,,,,,,:,,,,,:,,-.~~;;;+ii~+i+=+~,.,;--;;;+l+~~.....::,..,,,
        -;YYt= = l:,tvc.:tv.;lvcttjjjl==vc,:.   -., i.    .       ,,,::,,:::::;::::;~==-::=i++==ii~;:..:~~-;;-=ll+, ....,:,...,,
       =.:Czx+ j i,:xc:,-zi,jcctjjjjlliivv,..   .,,     ,.      ..,;-~,,:------;;;--++;:;~-++=~+i+~:,.,:~~~;;-=il~. ....,:,.....
      +;.:Yxji j ;:lv,.,vv~~ccttlitjlllitx,..                 .,,;-=+-:==~==~~~~~==++=-:;~~=~~~=+==,,,::==~;-~+li;  ....,::,....
      j..vccxv i .,v;,,+zc-lcctclljjltjijz:.:::,..          ..:;-=+l=;========~~===++~;--;=~=-=+i=-,,.,;-=+--~===:  ...,,,;,....
     x~  zttxv,i .i=..-vxt=cvttlllllljlllx=.:::,..         ..,:-~il+-;~==++=====~====;;;;--~~=~+++:,..,:~++~~~=+,.  ...,,,,.....
    +Y-  xcvcz;=  j:.;tzvllccjllillllliljvt ,:,..         ..,,;-iil=;-==+i+=+====+~~~------~=~~+=-,,...,==+=~~=-,. ...,.,,,..  .`;

// hover-repel physics: characters flee the cursor and spring back home
const RADIUS = 40;
const FORCE = 150;
const SPRING = 0.06;
const DAMP = 0.86;
const ENTRANCE_DAMP = 0.94; // looser damping while gathering = more bounce

export default function AsciiArt() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const lines = art.split("\n");
    const cols = Math.max(...lines.map((l) => l.length));
    const rows = lines.length;
    const color = "#57534e"; // warm gray, pencil-sketch feel on the paper bg
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mouse = { x: -9999, y: -9999 };
    let particles = [];

    const setup = (scatter = false) => {
      const maxW = canvas.parentElement.clientWidth;
      const fontSize = Math.max(4, Math.min(7, maxW / (cols * 0.6)));
      const charW = fontSize * 0.6; // Fira Code advance width
      const lineH = fontSize;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = Math.ceil(cols * charW * dpr);
      canvas.height = Math.ceil(rows * lineH * dpr);
      canvas.style.width = `${cols * charW}px`;
      canvas.style.height = `${rows * lineH}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.font = `${fontSize}px "Fira Code", monospace`;
      ctx.textBaseline = "top";
      particles = [];
      lines.forEach((line, r) => {
        for (let c = 0; c < line.length; c++) {
          if (line[c] === " ") continue;
          const hx = c * charW;
          const hy = r * lineH;
          let x = hx;
          let y = hy;
          if (scatter) {
            // start on a ring outside the canvas so the swarm collapses
            // inward through the middle before springing into place
            const angle = Math.random() * Math.PI * 2;
            const dist =
              (0.03 + Math.random() * 0.09) * Math.max(cols * charW, rows * lineH);
            x = hx + Math.cos(angle) * dist;
            y = hy + Math.sin(angle) * dist;
          }
          particles.push({ ch: line[c], hx, hy, x, y, vx: 0, vy: 0 });
        }
      });
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = color;
      for (const p of particles) ctx.fillText(p.ch, p.x, p.y);
    };

    // entrance: start scattered and let the spring gather the portrait
    setup(!reduced);
    draw();

    const onResize = () => {
      setup();
      draw();
    };
    window.addEventListener("resize", onResize);

    if (reduced) {
      // static art only for reduced-motion users
      return () => window.removeEventListener("resize", onResize);
    }

    let wasActive = false;
    let entrance = true; // bouncier damping until the gather settles
    let frameId;
    const tick = () => {
      let active = false;
      for (const p of particles) {
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const d2 = dx * dx + dy * dy;
        if (d2 < RADIUS * RADIUS && d2 > 0.01) {
          const d = Math.sqrt(d2);
          const f = (FORCE * (1 - d / RADIUS)) / d;
          p.vx += dx * f * 0.016;
          p.vy += dy * f * 0.016;
        }
        p.vx += (p.hx - p.x) * SPRING;
        p.vy += (p.hy - p.y) * SPRING;
        const damp = entrance ? ENTRANCE_DAMP : DAMP;
        p.vx *= damp;
        p.vy *= damp;
        p.x += p.vx;
        p.y += p.vy;
        if (
          Math.abs(p.vx) + Math.abs(p.vy) < 0.05 &&
          Math.abs(p.x - p.hx) + Math.abs(p.y - p.hy) < 0.5
        ) {
          p.x = p.hx;
          p.y = p.hy;
          p.vx = 0;
          p.vy = 0;
        } else {
          active = true;
        }
      }
      if (active || wasActive) draw(); // final draw snaps everything home
      if (!active) entrance = false; // settled: back to normal repel feel
      wasActive = active;
      frameId = requestAnimationFrame(tick);
    };
    frameId = requestAnimationFrame(tick);

    const onMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const onLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };
    // pointer events cover mouse, touch, and stylus alike
    canvas.addEventListener("pointermove", onMove);
    canvas.addEventListener("pointerleave", onLeave);

    return () => {
      cancelAnimationFrame(frameId);
      canvas.removeEventListener("pointermove", onMove);
      canvas.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="ascii-art"
      role="img"
      aria-label="ASCII art portrait"
    />
  );
}
