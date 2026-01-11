// components/Projects.jsx
"use client";
import { Container, Row, Col, Card } from "react-bootstrap";
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
            <h1 className="mb-5 mt-5 fs-1"> / projects </h1>
          </FadeInSection>
          <FadeInSection>
            <Carousel className="carousel d-none d-md-block " interval={null}>
              {carouseldata.map((item) => (
                <Carousel.Item key={carouseldata.id}>
                  <img
                    className="d-block w-100"
                    src={item.image}
                    alt={item.title}
                    style={{
                      height: "600px",
                      opacity: 0.9,
                      objectFit: "cover",
                    }}
                  />
                  <Carousel.Caption className="caption-top-right">
                    <Card style={{opacity: 0.9 , backgroundColor: "rgb(128, 172, 255)", padding: "1rem"}}>
                      <h3 className="text-dark">{item.title}</h3>
                      <p style={{ whiteSpace: "pre-line" }}>{item.desc}</p>
                      <p className="text-danger">{item.tech}</p>
                    </Card>
                  </Carousel.Caption>
                  <Carousel.Caption>
                    <a
                      href={item.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn "
                    >
                      <FaGithub size={27} className="text-light" />
                    </a>
                    {item.website && (
                      <a
                        href={item.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn "
                      >
                        <FaExternalLinkSquareAlt
                          size={27}
                          className="text-light"
                        />
                      </a>
                    )}
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
