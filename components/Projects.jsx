// components/Projects.jsx
"use client";
import { Container, Row, Col } from "react-bootstrap";
import { FaGithub } from "react-icons/fa";
import ProjectCard from "./ProjectCard";
import ProjectCarousel from "./ProjectCarousel";
import data from "./Projects.json";
import FadeInSection from "./hooks/FadeInSection";

export default function Projects() {
  const featured = data.filter((p) => p.featured);
  const rest = data.filter((p) => !p.featured);

  return (
    <Container>
      <FadeInSection>
        <div className="d-flex flex-wrap gap-3 justify-content-between align-items-center mb-4">
          <h2 className="fs-1 mb-0">/ projects</h2>
          <a
            href="https://github.com/junhojeon77?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-dark btn-sm d-inline-flex align-items-center gap-2 hover-animate"
          >
            <FaGithub aria-hidden="true" /> More on GitHub
          </a>
        </div>
      </FadeInSection>
      <div className="d-none d-md-block">
        <FadeInSection>
          <ProjectCarousel items={featured} />
        </FadeInSection>
      </div>
      <Row xs={1} className="d-md-none g-4 project-grid">
        {data.map((project) => (
          <Col key={project.id}>
            <FadeInSection>
              <ProjectCard project={project} sizes="100vw" />
            </FadeInSection>
          </Col>
        ))}
      </Row>
      {rest.length > 0 && (
        <div className="d-none d-md-block">
          <h3 className="fs-4 mt-5 mb-4">Other projects</h3>
          <Row xs={1} md={2} lg={3} className="g-4 project-grid">
            {rest.map((project) => (
              <Col key={project.id}>
                <FadeInSection>
                  <ProjectCard project={project} />
                </FadeInSection>
              </Col>
            ))}
          </Row>
        </div>
      )}
    </Container>
  );
}
