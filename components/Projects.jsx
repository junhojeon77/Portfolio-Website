// components/Projects.jsx
"use client";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import projectsData from "../components/Projects.json";
import CarouselData from "../components/CarouselCard.json";
import Carousel from "react-bootstrap/Carousel";
import { FaGithub, FaExternalLinkSquareAlt } from "react-icons/fa";
import FadeInSection from "./hooks/FadeInSection";

export default function Projects() {
  const data = projectsData;
  const carouseldata = CarouselData || [];

  return (
    <>
      <section className="project-section" style={{ padding: "6rem 0" }}>
        <Container className="mt-5">
          <FadeInSection>
            <h1 className="mb-5 mt-5"> / projects </h1>
          </FadeInSection>
          <FadeInSection>
            <Carousel className="d-none d-md-block">
              {carouseldata.map((carouseldata) => (
                <Carousel.Item key={carouseldata.id}>
                  <img
                    className="d-block w-100"
                    src={carouseldata.image}
                    alt={carouseldata.title}
                    style={{
                      height: "500px",
                      objectFit: "cover",
                    }}
                  />
                  <Carousel.Caption>
                    <h3 className="text-secondary">{carouseldata.title}</h3>
                    <p>{carouseldata.desc}</p>
                    <p className="text-danger">{carouseldata.tech}</p>

                    <a
                      href={carouseldata.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn "
                    >
                      <FaGithub size={27} />
                    </a>
                    <a
                      href={carouseldata.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn "
                    >
                      <FaExternalLinkSquareAlt size={27} />
                    </a>
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>
          </FadeInSection>

          <Row xs={1} md={2} lg={3} className="g-4 mt-5">
            {data.map((data, index) => (
              <Col key={data.id}>
                <ProjectCard project={data} index={index} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
}
