"use client";

import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import FadeInSection from "./hooks/FadeInSection";
import jobs from "./Jobs.json";

export default function Experience() {
  return (
    <Container>
      <FadeInSection>
        <h2 className="mb-5 fs-1">/ experience</h2>
        <Tab.Container defaultActiveKey={jobs[0].key}>
          <Row>
            <Col xs={12} md={3} lg={2}>
              <Nav className="exp-nav flex-md-column mb-4 mb-md-0">
                {jobs.map((job) => (
                  <Nav.Item key={job.key}>
                    <Nav.Link eventKey={job.key}>{job.company}</Nav.Link>
                  </Nav.Item>
                ))}
              </Nav>
            </Col>
            <Col xs={12} md={8} lg={7} className="pe-md-5">
              <Tab.Content className="exp-content">
                {jobs.map((job) => (
                  <Tab.Pane eventKey={job.key} key={job.key}>
                    <h3 className="fs-4 mb-1">
                      {job.role} <span className="accent">@ {job.company}</span>
                    </h3>
                    <p className="text-secondary text-uppercase mb-3">
                      {[job.date, job.location].filter(Boolean).join(" · ")}
                    </p>
                    <ul className="list-unstyled">
                      {job.bullets.map((bullet) => (
                        <li key={bullet} className="d-flex gap-2 mb-2">
                          <span className="accent" aria-hidden="true">
                            ▹
                          </span>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                    <p className="accent mb-2">{job.tech}</p>
                    {job.website && (
                      <a
                        href={job.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-dark btn-sm"
                      >
                        Visit site
                      </a>
                    )}
                  </Tab.Pane>
                ))}
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </FadeInSection>
    </Container>
  );
}
