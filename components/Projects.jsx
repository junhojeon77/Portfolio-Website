// components/Projects.jsx
"use client";
import { Container, Row, Col } from "react-bootstrap";
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
      <section className="py-5">
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
                      style={{ objectFit: "cover" }}
                    />
                    {/* gradient scrim so caption text reads over any image */}
                    <div className="carousel-scrim" aria-hidden="true" />
                  </div>
                  <Carousel.Caption>
                    <h3>{item.title}</h3>
                    <p style={{ whiteSpace: "pre-line" }} className="mb-1">
                      {item.desc}
                    </p>
                    <p className="carousel-tech mb-1">{item.tech}</p>

                    <div className="d-flex justify-content-center">
                    {item.github && (
                      <a
                        href={item.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn "
                        aria-label={`${item.title} on GitHub`}
                      >
                        <FaGithub size={27} className="text-white" aria-hidden="true" />
                      </a>
                    )}
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
                          className="text-white"
                          aria-hidden="true"
                        />
                      </a>

                    )}
                    </div>
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
