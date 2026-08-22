"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Briefcase, Code, Mail, Search, X, RotateCcw } from "lucide-react";
import Nav from "../Nav";
import ProjectCard from "./ProjectCard";
import { PROJECTS, type ProjectData } from "./projects-data";

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

function getNodeText(node: React.ReactNode): string {
  if (!node) return "";
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(getNodeText).join(" ");
  if (typeof node === "object" && "props" in node && node.props) {
    const props = node.props as { children?: React.ReactNode };
    return getNodeText(props.children);
  }
  return "";
}

export default function ProjectsClient() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const normalizedQuery = searchQuery.trim().toLowerCase();

  const isProjectVisible = (project: ProjectData) => {
    // 1. Check Category
    const categories = Array.isArray(project.category)
      ? project.category
      : [project.category];
    const matchesCategory =
      activeFilter === "all" || categories.includes(activeFilter as any);

    if (!matchesCategory) return false;

    // 2. Check Search Query
    if (!normalizedQuery) return true;

    const titleText = getNodeText(project.title).toLowerCase();
    const subtitleText = getNodeText(project.subtitle).toLowerCase();
    const descText = getNodeText(project.desc).toLowerCase();
    const tagsText = project.tags.join(" ").toLowerCase();

    return (
      titleText.includes(normalizedQuery) ||
      subtitleText.includes(normalizedQuery) ||
      descText.includes(normalizedQuery) ||
      tagsText.includes(normalizedQuery) ||
      project.id.toLowerCase().includes(normalizedQuery)
    );
  };

  const visibleCount = PROJECTS.filter(isProjectVisible).length;

  const resetFilters = () => {
    setActiveFilter("all");
    setSearchQuery("");
  };

  return (
    <>
      <Nav links={NAV_LINKS} logoHref="/" />
      {/* Page Header */}
      <header className="page-header">
        <div className="page-header-inner">
          <Link href="/#projects" className="back-btn">
            <ArrowLeft size={16} /> Back to Portfolio
          </Link>
          <h1>
            Featured <span>Projects</span>
          </h1>
          <p>
            A deep dive into AI agents, computer vision, IoT dashboards, and full-stack web applications.
          </p>

          {/* Search Bar */}
          <div className="search-bar-container">
            <div className="search-input-wrapper">
              <Search className="search-icon" size={18} />
              <input
                type="text"
                className="search-input"
                placeholder="Search projects by name, technology (React, Python, OpenCV, LangGraph...)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button
                  className="search-clear-btn"
                  onClick={() => setSearchQuery("")}
                  aria-label="Clear search"
                >
                  <X size={14} />
                </button>
              )}
            </div>
            {(searchQuery || activeFilter !== "all") && (
              <div className="search-meta-info">
                <span>
                  Showing <strong>{visibleCount}</strong> of {PROJECTS.length} projects
                </span>
                {(searchQuery || activeFilter !== "all") && (
                  <button
                    onClick={resetFilters}
                    style={{
                      background: "none",
                      border: "none",
                      color: "var(--secondary)",
                      cursor: "pointer",
                      fontSize: "0.78rem",
                      fontWeight: 600,
                      display: "flex",
                      alignItems: "center",
                      gap: "0.25rem",
                    }}
                  >
                    <RotateCcw size={12} /> Clear all filters
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Filter Tabs */}
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
        <p className="section-label">✦ Highlighted Work — 2024 / 2025</p>

        {visibleCount === 0 ? (
          <div className="no-projects-found">
            <h3>No matching projects found</h3>
            <p>
              We couldn&apos;t find any projects matching &quot;{searchQuery}&quot;
              {activeFilter !== "all" ? ` under the selected category` : ""}.
            </p>
            <button className="reset-search-btn" onClick={resetFilters}>
              <RotateCcw size={15} /> Reset Filters &amp; Search
            </button>
          </div>
        ) : (
          <div className="projects-grid-full" id="projects-grid">
            {PROJECTS.map((project) => {
              const hidden = !isProjectVisible(project);
              return <ProjectCard key={project.id} project={project} hidden={hidden} />;
            })}
          </div>
        )}
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
