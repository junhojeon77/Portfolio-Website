"use client";

import AsciiArt from "@/components/AsciiArt.jsx";
import { ReactTyped } from "react-typed";
import { Container, Row, Col } from "react-bootstrap";
import { FaEnvelope } from "react-icons/fa";
import FadeInSection from "@/components/hooks/FadeInSection";

export default function Hero() {
  return (
    <>
      <Container className="d-flex flex-column justify-content-center align-items-center min-vh-100 text-center">
        <AsciiArt />
        <p className="text-secondary fs-8 mt-1">
          (psst — run your cursor over me)
        </p>
        <h1 className="text-center mt-2 display-4">
          <ReactTyped
            startWhenVisible
            strings={[` Hi,<span class="accent"> Jun</span> here.`]}
            typeSpeed={80}
            html={true}
            smartBackspace
          />
        </h1>
        <FadeInSection>
          <p className="text-center card-subtitle fs-3 mt-2">
            i can create random stuff
          </p>
          <Row className="justify-content-center">
            <Col xs={12} md={8} lg={6} className="text-center">
              <p className="mt-3 fs-6 card-subtitle">
                I&apos;m a Freelance Full Stack Developer from South
                Korea/Toronto, bridging software development with AI/ML —
                engineering scalable solutions while actively training models
                for complex real-world problems.
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
