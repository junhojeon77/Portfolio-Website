import { Container, Row, Col, Image } from "react-bootstrap";
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
              <strong style={{ color: "red" }}>AI/ML</strong>, and Web
              applications. Currently a Software Developer Student in the
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
                    <span style={{ color: "red" }}>*</span> Typescript
                  </li>
                  <li>
                    {" "}
                    <span style={{ color: "red" }}>*</span> React.js
                  </li>
                  <li>
                    {" "}
                    <span style={{ color: "red" }}>*</span> Next.js{" "}
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
              Outside of programming, I play a lot of Sports. I also play a lot
              of video games.
            </p>
          </FadeInSection>
        </Col>

        {/* Image Column */}

        <Col
          xs={12}
          md={6}
          className="text-center mt-4 mt-md-0 d-none d-md-block"
          style={{ width: "30%" }}
        >
          <FadeInSection>
            <Image
              src="/me.jpeg" // replace with your image path
              alt="Profile"
              className="mt-4 ms-5 "
              rounded
              fluid
            />
          </FadeInSection>
        </Col>
      </Row>
    </Container>
  );
}
