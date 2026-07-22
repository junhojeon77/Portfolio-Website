// components/ProjectCarousel.jsx
"use client";
import Carousel from "react-bootstrap/Carousel";
import Image from "next/image";
import { FaGithub, FaExternalLinkSquareAlt } from "react-icons/fa";

export default function ProjectCarousel({ items }) {
  return (
    <Carousel className="carousel">
      {items.map((item) => (
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
  );
}
