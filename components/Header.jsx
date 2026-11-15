"use client";

import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaLinkedin, FaInstagram, FaGithub, FaEnvelope } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";

const sections = ["home", "about", "experience", "projects"];

export default function Header() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    let frame = null;
    const update = () => {
      frame = null;
      let current = "home";
      const marker = window.innerHeight * 0.25;
      for (const id of sections) {
        const section = document.getElementById(id);
        if (section && section.getBoundingClientRect().top <= marker) current = id;
      }
      setActiveSection(current);
    };
    const scheduleUpdate = () => {
      if (frame === null) frame = requestAnimationFrame(update);
    };
    scheduleUpdate();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      if (frame !== null) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <Navbar expand="lg" className="nav_collapse" fixed="top" collapseOnSelect>
      <Container>
        <Navbar.Brand href="#home" className="fs-6 ps-2">
          Junho Jeon
        </Navbar.Brand>


        {/* Toggle for mobile */}
        <Navbar.Toggle aria-controls="main-navbar" />

        {/* Navbar Links */}
        <Navbar.Collapse id="main-navbar" className="nav_collapse text-center">
          <Nav className="mask-left section-nav">
            {sections.map((id) => (
              <Nav.Link
                key={id}
                className="fs-8"
                href={`#${id}`}
                active={activeSection === id}
                aria-current={activeSection === id ? "location" : undefined}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </Nav.Link>
            ))}
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
