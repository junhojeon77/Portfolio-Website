"use client";

import { Card } from "react-bootstrap";
import Image from "next/image";
import { FaGithub, FaExternalLinkSquareAlt } from "react-icons/fa";

export default function ProjectCard({ project, sizes = "(min-width: 992px) 33vw, (min-width: 768px) 50vw, 100vw" }) {
  const demoLabel = project.demoLabel || "Live demo";
  return (
    <Card
      className="h-100 shadow-sm hover-animate"
      style={{
        backgroundColor: "var(--surface)",
        border: "1px solid var(--border)",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          aspectRatio: "16 / 10",
          overflow: "hidden",
          borderTopLeftRadius: "var(--bs-card-inner-border-radius)",
          borderTopRightRadius: "var(--bs-card-inner-border-radius)",
        }}
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes={sizes}
          style={{ objectFit: "cover" }}
        />
      </div>
      <Card.Body className="d-flex flex-column">
        <Card.Title as="h3">{project.title}</Card.Title>
        <Card.Text className="text-secondary project-description">
          {project.desc}
        </Card.Text>
        <Card.Text className="accent small">{project.tech}</Card.Text>
        <div className="d-flex flex-wrap gap-3 mt-auto pt-2">
          {project.github && (
            <Card.Link
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="d-inline-flex align-items-center gap-2 text-decoration-underline"
              aria-label={`View code for ${project.title}`}
            >
              <FaGithub aria-hidden="true" /> View code
            </Card.Link>
          )}

          {project.website && (
            <Card.Link
              href={project.website}
              target="_blank"
              rel="noopener noreferrer"
              className="d-inline-flex align-items-center gap-2 text-decoration-underline ms-0"
              aria-label={`${demoLabel}: ${project.title}`}
            >
              <FaExternalLinkSquareAlt aria-hidden="true" /> {demoLabel}
            </Card.Link>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
