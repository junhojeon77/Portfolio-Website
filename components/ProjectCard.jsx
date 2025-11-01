"use client";

import { Card } from "react-bootstrap";
import { FaGithub, FaFolder, FaExternalLinkSquareAlt } from "react-icons/fa";
import FadeInSection from "./hooks/FadeInSection";

export default function ProjectCard({ project }) {
  return (
    <FadeInSection>
      <Card className="project-item border-0 bg-black shadow-sm hover-animate">
        <div className="project-image">
          <Card.Img variant="top" src={project.image} alt={project.title} />
          <div className="project-overlay">
            <div className="d-flex justify-content-between align-items-center ms-3">
              <FaFolder size={25} />
              <div className="d-flex me-3">
                <Card.Link href={project.github}>
                  <FaGithub size={20}></FaGithub>
                </Card.Link>

                <Card.Link href={project.website} target="_blank">
                  <FaExternalLinkSquareAlt size={20} />
                </Card.Link>
              </div>
            </div>
            <Card.Body className="project-info">
              <Card.Title as="h3">{project.title}</Card.Title>
              <Card.Subtitle className="mb-2 text-secondary">
                {project.desc}sd
              </Card.Subtitle>
              <Card.Subtitle className="mb-2 text-danger">
                {project.tech}wdwd
              </Card.Subtitle>
            </Card.Body>
          </div>
        </div>
      </Card>
    </FadeInSection>
  );
}
