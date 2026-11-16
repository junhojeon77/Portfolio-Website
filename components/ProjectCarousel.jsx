"use client";

import Carousel from "react-bootstrap/Carousel";
import Image from "next/image";
import { FaGithub, FaExternalLinkSquareAlt } from "react-icons/fa";

export default function ProjectCarousel({ items }) {
  return (
    <Carousel className="project-carousel">
      {items.map((item) => {
        const demoLabel = item.demoLabel || "Live demo";

        return (
          <Carousel.Item key={item.id}>
            <div style={{ position: "relative", width: "100%", height: "600px" }}>
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 1200px) 100vw, 1200px"
                style={{ objectFit: "cover" }}
              />
              <div className="carousel-scrim" aria-hidden="true" />
            </div>
            <Carousel.Caption>
              <h3>{item.title}</h3>
              <p className="project-description mb-2">{item.desc}</p>
              <p className="carousel-tech mb-3">{item.tech}</p>
              <div className="d-flex flex-wrap justify-content-center gap-3">
                {item.github && (
                  <a
                    href={item.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-light d-inline-flex align-items-center gap-2"
                    aria-label={`View code for ${item.title}`}
                  >
                    <FaGithub aria-hidden="true" /> View code
                  </a>
                )}
                {item.website && (
                  <a
                    href={item.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-light d-inline-flex align-items-center gap-2"
                    aria-label={`${demoLabel}: ${item.title}`}
                  >
                    <FaExternalLinkSquareAlt aria-hidden="true" /> {demoLabel}
                  </a>
                )}
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}
