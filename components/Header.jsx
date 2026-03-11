"use client";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaLinkedin, FaInstagram, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Header() {
  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <Navbar expand="lg" className="nav_collapse bg-[rgb(128,172,255)]" fixed="top">
      <Container>
        <Navbar.Brand href="#home" className="fs-6 ps-2">
          Jun Ho Jeon
        </Navbar.Brand>

        {/* Toggle for mobile */}
        <Navbar.Toggle aria-controls="main-navbar" />

        {/* Navbar Links */}
        <Navbar.Collapse id="main-navbar" className="nav_collapse text-center">
          <Nav className="mask-left">
            <Nav.Link
              className="fs-8"
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleScrollTo("home");
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              className="fs-8"
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                handleScrollTo("about");
              }}
            >
              About
            </Nav.Link>

            <Nav.Link
              className="fs-8"
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                handleScrollTo("projects");
              }}
            >
              Projects
            </Nav.Link>
          </Nav>

          {/* Logos */}
          <Nav className="ms-auto pe-2">
            <Nav.Link
              href="mailto:junhojeon88@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="fs-8"
            >
              <FaEnvelope size={20} />
            </Nav.Link>
            <Nav.Link
              href="https://github.com/junhojeon77"
              target="_blank"
              rel="noopener noreferrer"
              className="fs-8"
            >
              <FaGithub size={20} />
            </Nav.Link>
            <Nav.Link
              href="https://www.linkedin.com/in/jun-ho-jeon-a08060252"
              target="_blank"
              rel="noopener noreferrer"
              className="fs-8"
            >
              <FaLinkedin size={20} />
            </Nav.Link>
            <Nav.Link
              href="https://www.instagram.com/_jjun.ho/"
              target="_blank"
              rel="noopener noreferrer"
              className="fs-8"
            >
              <FaInstagram size={20} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
