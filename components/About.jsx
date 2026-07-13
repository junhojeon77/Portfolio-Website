import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import FadeInSection from "./hooks/FadeInSection";

export default function About() {
  return (
    <Container className="my-5">
      <Row className="align-items-center">
        {/* Text Column */}
        <Col xs={12} md={7}>
          <FadeInSection>
            <h1 className="mb-5 fs-1">/ about</h1>
          </FadeInSection>
          <FadeInSection>
            <p className="fs-6">
              I&apos;m a Freelance Software Developer specializing in{" "}
              <strong style={{ color: "red" }}>Full Stack Development</strong>, with an interest in AI/ML. 
              Currently a Software Developer Student in the
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
                    <span style={{ color: "red" }}>*</span> React.js
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
                    <span style={{ color: "red" }}>*</span> Java
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
