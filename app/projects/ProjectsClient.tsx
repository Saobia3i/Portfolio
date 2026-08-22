"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Briefcase, Code, Mail } from "lucide-react";
import Nav from "../Nav";
import ProjectCard from "./ProjectCard";
import { PROJECTS } from "./projects-data";

const NAV_LINKS = [
  { href: "/#about", label: "About" },
  { href: "/#tech", label: "Tech" },
  { href: "/#projects", label: "All Projects" },
  { href: "/#experience", label: "Experience" },
  { href: "/certificates", label: "Certificates" },
  { href: "/#contact", label: "Contact" },
];

const FILTERS = [
  { value: "all", label: "All Projects" },
  { value: "ai", label: "AI / Agents" },
  { value: "cv", label: "Computer Vision" },
  { value: "iot", label: "IoT" },
  { value: "fullstack", label: "Full Stack" },
  { value: "fun", label: "Fun / Creative" },
];

export default function ProjectsClient() {
  const [activeFilter, setActiveFilter] = useState("all");

  return (
    <>
      <Nav links={NAV_LINKS} logoHref="/" />
      {/* Page Header */}
      <header className="page-header">
        <div className="page-header-inner">
          <Link href="/#projects" className="back-btn">
            <ArrowLeft size={16} />
            {" "}
            Back to Portfolio
          </Link>
          <h1>
            Featured
            {" "}
            <span>
              Projects
            </span>
          </h1>
          <p>
            A deep dive into AI agents, computer vision, IoT dashboards, and full-stack web applications.
          </p>
        </div>
      </header>
      <div className="filter-bar">
        {FILTERS.map((f) => (
          <button
            key={f.value}
            className={`filter-btn ${activeFilter === f.value ? "active" : ""}`.trim()}
            data-filter={f.value}
            onClick={() => setActiveFilter(f.value)}
          >
            {f.label}
          </button>
        ))}
      </div>
      {/* Projects Grid */}
      <main className="projects-section">
        <p className="section-label">
          ✦ Highlighted Work — 2024 / 2025
        </p>
        <div className="projects-grid-full" id="projects-grid">
          {PROJECTS.map((project) => {
            const hidden = activeFilter !== "all" && activeFilter !== project.category;
            return <ProjectCard key={project.id} project={project} hidden={hidden} />;
          })}
        </div>
        {/* /projects-grid-full */}
      </main>
      <footer>
        <div className="footer-inner">
          <div className="footer-brand">
            <span className="footer-logo">Saobia Islam Tinni</span>
            <p>Full Stack Developer building secure, AI-integrated web platforms.</p>
          </div>
          <nav className="footer-links" aria-label="Footer navigation">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
          <div className="footer-contact">
            <span className="footer-contact-label">Contact</span>
            <div className="footer-socials">
              <a href="mailto:islamsaobia@gmail.com" aria-label="Email">
                <Mail size={20} />
              </a>
              <a href="https://github.com/Saobia3i" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Code size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/saobia-islam-1b173b284/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Briefcase size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Saobia Islam Tinni. All rights reserved.</p>
          <p>Built with passion and dedication to excellence.</p>
        </div>
      </footer>
    </>
  );
}
