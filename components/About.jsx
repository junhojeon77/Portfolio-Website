import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import FadeInSection from "./hooks/FadeInSection";
import AvailabilityBadge from "./AvailabilityBadge";

export default function About() {
  return (
    <Container className="my-5">
      <Row className="align-items-center">
        {/* Text Column */}
        <Col xs={12} md={7}>
          <FadeInSection>
            <h1 className="mb-3 fs-1">/ about</h1>
          </FadeInSection>
          <FadeInSection>
            <AvailabilityBadge className="mb-4" />
          </FadeInSection>
          <FadeInSection>
            <p className="fs-6">
              I&apos;m a Freelance Software Developer specializing in{" "}
              <strong style={{ color: "red" }}>Full Stack Development</strong>, with an interest in AI/ML. 
              Currently a Software Developer Student in my last year of
              Computer Programming & Analysis at{" "}
              <strong style={{ color: "red" }}>Seneca Polytechnic</strong>.
            </p>
          </FadeInSection>
          <FadeInSection>
            <p>Here are some technologies I have been working with:</p>
          </FadeInSection>
          <FadeInSection>
            <Row>
              <Col xs={6}>
                <ul className="list-unstyled">
                  <li>
                    {" "}
                    <span style={{ color: "red" }}>*</span> Node.js
                  </li>
                  <li>
                    {" "}
                    <span style={{ color: "red" }}>*</span> React
                  </li>
                  <li>
                    {" "}
                    <span style={{ color: "red" }}>*</span> TypeScript
                  </li>
                </ul>
              </Col>
              <Col xs={6}>
                <ul className="list-unstyled">
                  <li>
                    {" "}
                    <span style={{ color: "red" }}>*</span> Python
                  </li>
                  <li>
                    {" "}
                    <span style={{ color: "red" }}>*</span> Go
                  </li>
                  <li>
                    {" "}
                    <span style={{ color: "red" }}>*</span> C/C++
                  </li>
                </ul>
              </Col>
            </Row>
          </FadeInSection>
          <FadeInSection>
            <p>
              Outside of programming, I play a lot of Sports (mostly baseketball). I also play a lot
              of video games.
            </p>
          </FadeInSection>
          <FadeInSection>
            <a
              href="/Jeon's Resumee.pdf"
              download
              className="btn btn-dark d-inline-flex align-items-center gap-2 mt-2 hover-animate"
              aria-label="Download my resume as a PDF"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
                aria-hidden="true"
              >
                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
              </svg>
              Download Resume
            </a>
          </FadeInSection>
        </Col>

        {/* Image Column */}

        <Col xs={12} md={5} className="d-none d-md-block">
          <FadeInSection>
            <Image
              src="/junho.jpeg"
              alt="Profile"
              width={800}
              height={1000}
              className="rounded-4 shadow"
              style={{
                width: "100%",
                height: "auto",
                aspectRatio: "4 / 5",
                objectFit: "cover",
              }}
            />
          </FadeInSection>
        </Col>
      </Row>
    </Container>
  );
}
