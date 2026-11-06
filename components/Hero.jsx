"use client";

import AsciiArt from "@/components/AsciiArt.jsx";
import { ReactTyped } from "react-typed";
import { Container, Row, Col } from "react-bootstrap";
import { FaEnvelope } from "react-icons/fa";
import FadeInSection from "@/components/hooks/FadeInSection";
import ResumeIntro from "@/components/ResumeIntro";

export default function Hero() {
  return (
    <>
      <Container className="d-flex flex-column justify-content-center align-items-center text-center">
        <AsciiArt />
        <p className="text-secondary fs-8 mt-1">
          (psst — touch me!)
        </p>
        <h1 className="text-center mt-2 display-4">
          <ReactTyped
            startWhenVisible
            strings={[` Hi, I'm<span class="accent"> Jun</span>.`]}
            typeSpeed={80}
            html={true}
            smartBackspace
          />
        </h1>
        <FadeInSection>
          <p className="text-center card-subtitle fs-3 mt-2">
            I build apps that make everyday life easier
          </p>
          <Row className="justify-content-center">
            <Col xs={12} md={8} lg={6} className="text-center">
              <p className="mt-3 fs-6 card-subtitle">
                I&apos;m a software developer in Toronto working on web and mobile
                apps, backend APIs, and AI integrations. I like finding simple
                solutions to complex problems.
              </p>
            </Col>
          </Row>

          <div className="d-flex flex-wrap justify-content-center gap-3 mt-4">
            <a
              href="mailto:junhojeon88@gmail.com"
              className="btn btn-outline-dark btn-lg d-inline-flex align-items-center gap-2 fw-bold"
            >
              <FaEnvelope aria-hidden="true" /> Email Me
            </a>
            <ResumeIntro />
          </div>
        </FadeInSection>
      </Container>
    </>
  );
}
