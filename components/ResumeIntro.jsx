"use client";

import { Component, useCallback, useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { Button, Modal } from "react-bootstrap";
import { FaFilePdf } from "react-icons/fa";
import GenjiIntro from "./GenjiIntro";

const RESUME_URL = "/Junho-Jeon-Resume.pdf";
const ResumeViewer = dynamic(() => import("./ResumeViewer"), {
  ssr: false,
  loading: () => <p role="status" className="text-center p-3">Loading resume…</p>,
});

class ViewerBoundary extends Component {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  render() {
    return this.state.failed
      ? <p role="alert" className="text-center p-3">The preview could not load. Use Open PDF or Download above.</p>
      : this.props.children;
  }
}

export default function ResumeIntro() {
  const [phase, setPhase] = useState("closed");
  const [muted, setMuted] = useState(false);
  const phaseRef = useRef("closed");
  const revealTimer = useRef(null);
  const openLinkRef = useRef(null);
  const skipRef = useRef(null);
  const focusViewerRef = useRef(false);
  const show = phase !== "closed";
  const viewing = phase === "viewing";

  const transition = useCallback(next => {
    phaseRef.current = next;
    setPhase(next);
  }, []);

  const closeIntro = useCallback(() => {
    clearTimeout(revealTimer.current);
    transition("closed");
  }, [transition]);

  const showResume = useCallback(() => {
    if (phaseRef.current === "closed" || phaseRef.current === "viewing") return;
    focusViewerRef.current = document.activeElement === skipRef.current || document.activeElement?.dataset.introMute === "true";
    clearTimeout(revealTimer.current);
    transition("viewing");
  }, [transition]);

  const revealResume = useCallback(() => {
    if (phaseRef.current !== "playing") return;
    transition("revealing");
    revealTimer.current = setTimeout(showResume, 450);
  }, [transition, showResume]);

  useEffect(() => {
    if (!show) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const changed = event => { if (event.matches) showResume(); };
    preference.addEventListener("change", changed);
    return () => {
      clearTimeout(revealTimer.current);
      preference.removeEventListener("change", changed);
    };
  }, [show, showResume]);

  useEffect(() => {
    if (viewing && focusViewerRef.current) openLinkRef.current?.focus();
  }, [viewing]);

  function handleClick(event) {
    if (event.defaultPrevented || event.button !== 0 || event.metaKey ||
      event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    if (phaseRef.current !== "closed") return;
    setMuted(false);
    transition(window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "viewing" : "playing");
  }

  return (
    <>
      <a href={RESUME_URL} onClick={handleClick}
        className="btn btn-outline-dark btn-lg d-inline-flex align-items-center gap-2 fw-bold">
        <FaFilePdf aria-hidden="true" /> Resume
      </a>
      <Modal show={show} onHide={closeIntro} fullscreen animation={false} backdrop="static"
        backdropClassName="resume-intro-backdrop" aria-labelledby="resume-intro-title"
        className="resume-intro" data-phase={phase}>
        <Modal.Header className="flex-wrap gap-3">
          <Modal.Title id="resume-intro-title" className="fs-5">
            {viewing ? "Resume" : "Resume incoming"}
          </Modal.Title>
          <div className="d-flex flex-wrap gap-2 ms-auto">
            {viewing ? (
              <>
                <a ref={openLinkRef} className="btn btn-dark" href={RESUME_URL}>Open PDF</a>
                <a className="btn btn-outline-dark" href={RESUME_URL} download>Download</a>
              </>
            ) : (
              <>
                <Button variant="outline-dark" data-intro-mute="true" onClick={() => setMuted(value => !value)}>
                  {muted ? "Unmute" : "Mute"}
                </Button>
                <Button ref={skipRef} variant="dark" onClick={showResume} autoFocus>Skip to resume</Button>
              </>
            )}
            <Button variant="outline-dark" onClick={closeIntro}>Close</Button>
          </div>
        </Modal.Header>
        <Modal.Body className="resume-intro-stage p-0">
          <div className="resume-reveal" inert={!viewing} aria-hidden={!viewing}>
            <div className="resume-scroll" tabIndex={viewing ? 0 : -1} role="region" aria-label="Resume pages">
              {show && <ViewerBoundary><ResumeViewer file={RESUME_URL} /></ViewerBoundary>}
            </div>
          </div>
          {show && !viewing && <GenjiIntro onSlash={revealResume} onSkip={showResume}
            muted={muted} onMuteChange={setMuted} />}
          <span className="visually-hidden" role="status">{viewing ? "Resume viewer open." : ""}</span>
        </Modal.Body>
      </Modal>
    </>
  );
}
