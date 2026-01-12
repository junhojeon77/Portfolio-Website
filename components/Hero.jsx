"use client";

import Hero3D from "@/components/Hero3D.jsx";
import { ReactTyped } from "react-typed";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { FaEnvelope } from "react-icons/fa";
import FadeInSection from "@/components/hooks/FadeInSection";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <Container className="d-flex flex-column justify-content-center align-items-center min-vh-100 text-center">
        <h3 className="text-center fs-3 fs-md-2 fs-lg-1">Move me!</h3>
        <Hero3D />
        <h2 className="text-center mt-2 display-4">
          <ReactTyped
            startWhenVisible
            strings={[` Hi,<span style="color:red;"> Jun</span> here</span>.`]}
            typeSpeed={80}
            html={true}
            smartBackspace
          />
        </h2>
        <FadeInSection>
          <h3 className="text-center card-subtitle fs-3 mt-2">
            i can create random stuff
          </h3>
          <Row className="justify-content-center">
            <Col xs={12} md={8} lg={6} className="text-center">
              <p className="mt-3 fs-8 card-subtitle">
                I’m a Freelance Full Stack Developer from South Korea/Toronto,
                bridging web development with AI/ML. engineering scalable solutions
                while actively training models for complex real-world problems.
              </p>
            </Col>
          </Row>

          <Link href="mailto:junhojeon88@gmail.com">
            <Button
              className="self-center border border-green-400 rounded px-8 py-2  font-extrabold text-[22px] flex items-center gap-2 cursor-pointer bg-transparent mt-4 fade-up"
              variant=""
              size="lg"
            >
              <FaEnvelope className="mb-1" /> Email Me
            </Button>
          </Link>
        </FadeInSection>
      </Container>
    </>
  );
}
