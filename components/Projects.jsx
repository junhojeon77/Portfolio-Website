// components/Projects.jsx
"use client";
import { Container, Row, Col } from "react-bootstrap";
import { FaGithub } from "react-icons/fa";
import ProjectCard from "./ProjectCard";
import projectsData from "../components/Projects.json";
import ProjectCarousel from "./ProjectCarousel";
import FadeInSection from "./hooks/FadeInSection";
import useIsMobile from "./hooks/useIsMobile";

export default function Projects() {
  const data = projectsData;
  const isMobile = useIsMobile();
  const featured = data.filter((p) => p.featured);
  const rest = data.filter((p) => !p.featured);

  return (
    <>
      <section className="py-5">
        <Container>
          <FadeInSection>
            <div className="d-flex justify-content-between align-items-center mb-5">
              <h2 className="fs-1 mb-0">/ projects</h2>
              <a
                href="https://github.com/junhojeon77?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-dark btn-sm d-inline-flex align-items-center gap-2 hover-animate"
              >
                <FaGithub aria-hidden="true" /> See more
              </a>
            </div>

            {/* no carousel on mobile — every project is a card in one column */}
            {isMobile ? (
              <Row xs={1} className="g-4">
                {data.map((project) => (
                  <Col key={project.id}>
                    <ProjectCard project={project} />
                  </Col>
                ))}
              </Row>
            ) : (
              <ProjectCarousel items={featured} />
            )}
          </FadeInSection>

          {!isMobile && (
            <FadeInSection>
              <Row md={2} lg={3} className="g-4 mt-5">
                {rest.map((project) => (
                  <Col key={project.id}>
                    <ProjectCard project={project} />
                  </Col>
                ))}
              </Row>
            </FadeInSection>
          )}
        </Container>
      </section>
    </>
  );
}
