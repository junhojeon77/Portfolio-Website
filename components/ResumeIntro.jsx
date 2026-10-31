"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { FaFilePdf } from "react-icons/fa";

const RESUME_URL = "/Junho-Jeon-Resume.pdf";
// Add public/videos/doomfist-intro.mp4, then set this to "/videos/doomfist-intro.mp4".
const VIDEO_SRC = "";

export default function ResumeIntro() {
  const [show, setShow] = useState(false);
  const [muted, setMuted] = useState(false);
  const activeRef = useRef(false);
  const videoRef = useRef(null);
  const timerRef = useRef(null);

  const closeIntro = useCallback(() => {
    activeRef.current = false;
    clearTimeout(timerRef.current);
    videoRef.current?.pause();
    setShow(false);
  }, []);

  const openResume = useCallback(() => {
    if (!activeRef.current) return;
    closeIntro();
    window.location.assign(RESUME_URL);
  }, [closeIntro]);

  useEffect(() => {
    if (!show) return;

    let cancelled = false;
    const video = videoRef.current;
    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleMotionChange = (event) => {
      if (event.matches) openResume();
    };
    motionPreference.addEventListener("change", handleMotionChange);
    timerRef.current = setTimeout(openResume, VIDEO_SRC ? 5000 : 2000);

    async function playVideo() {
      if (!video) return;
      try {
        await video.play();
      } catch {
        if (cancelled || !activeRef.current) return;
        video.muted = true;
        try {
          await video.play();
        } catch {
          if (!cancelled) openResume();
        }
      }
    }
    playVideo();

    return () => {
      cancelled = true;
      clearTimeout(timerRef.current);
      video?.pause();
      motionPreference.removeEventListener("change", handleMotionChange);
    };
  }, [show, openResume]);

  function handleClick(event) {
    if (
      event.defaultPrevented || event.button !== 0 || event.metaKey ||
      event.ctrlKey || event.shiftKey || event.altKey
    ) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    event.preventDefault();
    if (activeRef.current) return;
    activeRef.current = true;
    setMuted(false);
    setShow(true);
  }

  function toggleMute() {
    const video = videoRef.current;
    if (video) video.muted = !video.muted;
  }

  return (
    <>
      <a
        href={RESUME_URL}
        onClick={handleClick}
        className="btn btn-outline-dark btn-lg d-inline-flex align-items-center gap-2 fw-bold"
      >
        <FaFilePdf aria-hidden="true" /> Resume
      </a>
      <Modal
        show={show}
        onHide={closeIntro}
        fullscreen
        animation={false}
        backdrop="static"
        aria-labelledby="resume-intro-title"
        className="resume-intro"
      >
        <Modal.Header className="flex-wrap gap-3">
          <Modal.Title id="resume-intro-title" className="fs-5">
            Resume incoming
          </Modal.Title>
          <div className="d-flex flex-wrap gap-2 ms-auto">
            {VIDEO_SRC && (
              <Button variant="outline-dark" onClick={toggleMute}>
                {muted ? "Unmute" : "Mute"}
              </Button>
            )}
            <Button variant="dark" onClick={openResume} autoFocus>
              Skip to resume
            </Button>
            <Button variant="outline-dark" onClick={closeIntro}>
              Close
            </Button>
          </div>
        </Modal.Header>
        <Modal.Body className="resume-intro-stage p-0">
          {VIDEO_SRC ? (
            <video
              ref={videoRef}
              src={VIDEO_SRC}
              playsInline
              preload="auto"
              className="resume-intro-video"
              aria-label="Doomfist jumping toward the viewer"
              onEnded={openResume}
              onError={openResume}
              onVolumeChange={(event) => setMuted(event.currentTarget.muted)}
            />
          ) : (
            <div className="resume-intro-placeholder" aria-hidden="true">
              <span className="resume-intro-ripple" />
              <span className="resume-intro-word font-code">Incoming!</span>
            </div>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
}
