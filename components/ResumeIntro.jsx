"use client";

import { Component, useState } from "react";
import dynamic from "next/dynamic";
import { Button, Modal } from "react-bootstrap";
import { FaFilePdf } from "react-icons/fa";

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
  const [show, setShow] = useState(false);
  const close = () => setShow(false);

  function handleClick(event) {
    // let modified clicks (new tab, download) fall through to the plain link
    if (event.defaultPrevented || event.button !== 0 || event.metaKey ||
      event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    setShow(true);
  }

  return (
    <>
      <a href={RESUME_URL} onClick={handleClick}
        className="btn btn-outline-dark btn-lg d-inline-flex align-items-center gap-2 fw-bold">
        <FaFilePdf aria-hidden="true" /> Resume
      </a>
      <Modal show={show} onHide={close} fullscreen animation={false} backdrop="static"
        backdropClassName="resume-intro-backdrop" aria-labelledby="resume-intro-title"
        className="resume-intro">
        <Modal.Header className="flex-wrap gap-3">
          <Modal.Title id="resume-intro-title" className="fs-5">Resume</Modal.Title>
          <div className="d-flex flex-wrap gap-2 ms-auto">
            <a className="btn btn-dark" href={RESUME_URL}>Open PDF</a>
            <a className="btn btn-outline-dark" href={RESUME_URL} download>Download</a>
            <Button variant="outline-dark" onClick={close}>Close</Button>
          </div>
        </Modal.Header>
        <Modal.Body className="resume-intro-stage p-0">
          <div className="resume-scroll" tabIndex={0} role="region" aria-label="Resume pages">
            <ViewerBoundary><ResumeViewer file={RESUME_URL} /></ViewerBoundary>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
