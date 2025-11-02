"use client";

import Hero3D from "@/components/Hero3D.jsx";
import { ReactTyped } from "react-typed";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { FaEnvelope } from "react-icons/fa";
import FadeInSection from "@/components/hooks/FadeInSection";

export default function Hero() {
  return (
    <>
      <Container className="d-flex flex-column justify-content-center align-items-center min-vh-100 text-center">
        <h3>Move me!</h3>
        <Hero3D />
        <h2 className="text-center display-4 mt-2">
          <ReactTyped
            startWhenVisible
            strings={[
              ` Hi,<span style="color:red;"> Jun</span> here</span>.^1000`,
            ]}
            typeSpeed={80}
            html={true}
            smartBackspace
          />
        </h2>
        <FadeInSection>
          <h3 className="text-center hero-subtitle fs-2">
            i can create random stuff
          </h3>
          <Row className="justify-content-center">
            <Col xs={12} md={8} lg={6} className="text-center">
              <p className="mt-2">
                I’m a software engineer from South Korea/Toronto, fascinated by
                the science of machine learning. I thrive on building, training,
                and testing models that turn ideas into real-world solutions.
              </p>
            </Col>
          </Row>
          <Button
            className="self-center border border-green-400 rounded px-8 py-2  font-extrabold text-[22px] flex items-center gap-2 cursor-pointer bg-transparent mt-4 fade-up"
            variant=""
            size="lg"
          >
            <FaEnvelope className="mb-1" /> Email Me
          </Button>
        </FadeInSection>
      </Container>
    </>
  );
}
