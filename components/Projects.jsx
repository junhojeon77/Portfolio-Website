// components/Projects.jsx
"use client";
import { Container, Row, Col, Card } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import projectsData from "../components/Projects.json";
import CarouselData from "../components/CarouselCard.json";
import Carousel from "react-bootstrap/Carousel";
import Image from "next/image";
import { FaGithub, FaExternalLinkSquareAlt } from "react-icons/fa";
import FadeInSection from "./hooks/FadeInSection";

export default function Projects() {
  const data = projectsData;
  const carouseldata = CarouselData || [];

  return (
    <>
      <section className="project-section py-5">
        <Container>
          <FadeInSection>
            <h2 className="mb-5 fs-1"> / projects </h2>
            <Carousel className="carousel d-none d-md-block ">
              {carouseldata.map((item) => (
                <Carousel.Item key={item.id}>
                  <div style={{ position: "relative", width: "100%", height: "600px" }}>
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 1200px) 100vw, 1200px"
                      style={{ opacity: 0.9, objectFit: "cover" }}
                    />
                  </div>
                  <Carousel.Caption className="caption-top-left">
                    <Card style={{opacity: 0.95, backgroundColor: "var(--surface)", border: "1px solid var(--border)", padding: "0.4rem"}}>
                      <h3 className="text-dark">{item.title}</h3>
                      <p style={{ whiteSpace: "pre-line" }}>{item.desc}</p>
                      <p className="accent">{item.tech}</p>

                    <div className="d-flex justify-content-center">
                    <a
                      href={item.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn "
                      aria-label={`${item.title} on GitHub`}
                    >
                      <FaGithub size={27} className="text-dark" aria-hidden="true" />
                    </a>
                    {item.website && (
                      <a
                        href={item.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn "
                        aria-label={`${item.title} live site`}
                      >
                        <FaExternalLinkSquareAlt
                          size={27}
                          className="text-dark"
                          aria-hidden="true"
                        />
                      </a>

                    )}
                    </div>
                    </Card>
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>
          </FadeInSection>

          <FadeInSection>
            <Row xs={1} md={2} lg={3} className="g-4 mt-5">
              {data.map((data) => (
                <Col key={data.id}>
                  <ProjectCard project={data} />
                </Col>
              ))}
            </Row>
          </FadeInSection>
        </Container>
      </section>
    </>
  );
}
