import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import FadeInSection from "./hooks/FadeInSection";
import AvailabilityBadge from "./AvailabilityBadge";

export default function About() {
  return (
    <Container>
      <Row className="align-items-center">
        {/* Text Column */}
        <Col xs={12} md={7}>
          <FadeInSection>
            <h2 className="mb-3 fs-1">/ about</h2>
            <AvailabilityBadge className="mb-4" />
            <p className="fs-6">
              I&apos;m a full-stack developer finishing my Advanced Diploma in{" "}
              <strong className="accent">Computer Programming & Analysis</strong>{" "}
              at <strong className="accent">Seneca Polytechnic</strong> this
              August, and looking for{" "}
              <strong className="accent">junior full-stack roles in the GTA</strong>.
              I&apos;ve already shipped production work for two paying clients — a
              React and TypeScript storefront for a Toronto café, and a Flutter
              app for a school in Korea — and I&apos;m currently contracting on
              backend scaling and security architecture for an early-stage
              product.
            </p>
            <p>Technologies I work with most:</p>
            <Row>
              <Col xs={6}>
                <ul className="list-unstyled">
                  <li>
                    {" "}
                    <span className="accent" aria-hidden="true">*</span> TypeScript
                  </li>
                  <li>
                    {" "}
                    <span className="accent" aria-hidden="true">*</span> React & Next.js
                  </li>
                  <li>
                    {" "}
                    <span className="accent" aria-hidden="true">*</span> Node.js
                  </li>
                </ul>
              </Col>
              <Col xs={6}>
                <ul className="list-unstyled">
                  <li>
                    {" "}
                    <span className="accent" aria-hidden="true">*</span> Python
                  </li>
                  <li>
                    {" "}
                    <span className="accent" aria-hidden="true">*</span> Flutter & Dart
                  </li>
                  <li>
                    {" "}
                    <span className="accent" aria-hidden="true">*</span> AWS & Docker
                  </li>
                </ul>
              </Col>
            </Row>
            <p>
              Away from the keyboard, I&apos;m usually on a basketball court or
              in a video game.
            </p>
            <a
              href="/Junho-Jeon-Resume.pdf"
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
              src="/me.jpeg"
              alt="Portrait of Jun Ho Jeon"
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
