"use client";

import AsciiArt from "@/components/AsciiArt.jsx";
import { ReactTyped } from "react-typed";
import { Container, Row, Col } from "react-bootstrap";
import { FaEnvelope } from "react-icons/fa";
import FadeInSection from "@/components/hooks/FadeInSection";

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
            I build apps so I never have to do it twice
          </p>
          <Row className="justify-content-center">
            <Col xs={12} md={8} lg={6} className="text-center">
              <p className="mt-3 fs-6 card-subtitle">
                I build end-to-end solutions with React and TypeScript, with a
                strong focus on code quality and things people actually use.
              </p>
            </Col>
          </Row>

          <a
            href="mailto:junhojeon88@gmail.com"
            className="btn btn-outline-dark btn-lg d-inline-flex align-items-center gap-2 mt-4 fade-up fw-bold"
          >
            <FaEnvelope aria-hidden="true" /> Email Me
          </a>
        </FadeInSection>
      </Container>
    </>
  );
}
