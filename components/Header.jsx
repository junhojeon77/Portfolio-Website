"use client";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaLinkedin, FaInstagram, FaGithub, FaEnvelope } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <Navbar expand="lg" className="nav_collapse" fixed="top">
      <Container>
        <Navbar.Brand href="#home" className="fs-6 ps-2">
          Junho Jeon
        </Navbar.Brand>


        {/* Toggle for mobile */}
        <Navbar.Toggle aria-controls="main-navbar" />

        {/* Navbar Links */}
        <Navbar.Collapse id="main-navbar" className="nav_collapse text-center">
          <Nav className="mask-left">
            <Nav.Link className="fs-8" href="#home">
              Home
            </Nav.Link>
            <Nav.Link className="fs-8" href="#about">
              About
            </Nav.Link>
            <Nav.Link className="fs-8" href="#experience">
              Experience
            </Nav.Link>
            <Nav.Link className="fs-8" href="#projects">
              Projects
            </Nav.Link>
          </Nav>

          {/* Logos */}
          <Nav className="ms-auto pe-2">
            <ThemeToggle />
            <Nav.Link
              href="mailto:junhojeon88@gmail.com"
              className="fs-8"
              aria-label="Email me"
            >
              <FaEnvelope size={20} aria-hidden="true" />
            </Nav.Link>
            <Nav.Link
              href="https://github.com/junhojeon77"
              target="_blank"
              rel="noopener noreferrer"
              className="fs-8"
              aria-label="GitHub profile"
            >
              <FaGithub size={20} aria-hidden="true" />
            </Nav.Link>
            <Nav.Link
              href="https://www.linkedin.com/in/junho-jeon-a08060252"
              target="_blank"
              rel="noopener noreferrer"
              className="fs-8"
              aria-label="LinkedIn profile"
            >
              <FaLinkedin size={20} aria-hidden="true" />
            </Nav.Link>
            <Nav.Link
              href="https://www.instagram.com/_jjun.ho/"
              target="_blank"
              rel="noopener noreferrer"
              className="fs-8"
              aria-label="Instagram profile"
            >
              <FaInstagram size={20} aria-hidden="true" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
