"use client";

import { Card } from "react-bootstrap";
import Image from "next/image";
import { FaGithub, FaFolder, FaExternalLinkSquareAlt } from "react-icons/fa";

export default function ProjectCard({ project }) {
  return (
      <Card
        className="project-item shadow-sm hover-animate"
        style={{
          backgroundColor: "var(--surface)",
          border: "1px solid var(--border)",
        }}
      >
        <div className="project-image">
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
              sizes="(max-width: 768px) 100vw, (max-width: 992px) 50vw, 33vw"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="project-overlay">
            <div className="d-flex justify-content-between align-items-center ms-3">
              <FaFolder size={25} />
              <div className="d-flex me-3">
                <Card.Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.title} on GitHub`}
                >
                  <FaGithub size={20} aria-hidden="true" />
                </Card.Link>

                {project.website && (
                  <Card.Link
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} live site`}
                  >
                    <FaExternalLinkSquareAlt size={20} aria-hidden="true" />
                  </Card.Link>
                )}
              </div>
            </div>
            <Card.Body className="project-info">
              <Card.Title as="h3">{project.title}</Card.Title>
              <Card.Subtitle className="mb-2 text-secondary">
                {project.desc}
              </Card.Subtitle>
              <Card.Subtitle className="mb-2 accent">
                {project.tech}
              </Card.Subtitle>
            </Card.Body>
          </div>
        </div>
      </Card>
  );
}
