"use client";

import { Code, Eye, ExternalLink, FileText, Mail, Briefcase } from "lucide-react";
import Nav from "./Nav";
import HeroCanvas from "./HeroCanvas";
import FloatingParticles from "./FloatingParticles";
import Reveal from "./Reveal";
import { CertificateLightboxProvider } from "./CertificateLightbox";
import CertificateCarousel from "./CertificateCarousel";
import { CERTIFICATES } from "./certificates-data";

const PROJECT_LINK_ICONS = {
  visibility: Eye,
  code: Code,
  open_in_new: ExternalLink,
} as const;

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#tech", label: "Tech" },
  { href: "/projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#certificates", label: "Certificates" },
  { href: "#contact", label: "Contact" },
];

const RESUME_URL =
  "https://drive.google.com/file/d/1zdMf2vobxcGwUyGajNZN8jahZxus2YZh/view?usp=drive_link";

const TECH_GROUPS = [
  {
    title: "Languages",
    items: [
      { icon: "devicon-javascript-plain", label: "JavaScript" },
      { icon: "devicon-typescript-plain", label: "TypeScript" },
      { icon: "devicon-python-plain", label: "Python" },
      { icon: "devicon-csharp-plain", label: "C#" },
      { icon: "devicon-php-plain", label: "PHP" },
      { icon: "devicon-html5-plain", label: "HTML" },
      { icon: "devicon-css3-plain", label: "CSS" },
    ],
  },
  {
    title: "Frontend",
    items: [
      { icon: "devicon-react-original", label: "React" },
      { icon: "devicon-nextjs-original", label: "Next.js" },
      { icon: "devicon-tailwindcss-plain", label: "Tailwind CSS" },
      { icon: "devicon-bootstrap-plain", label: "Bootstrap" },
      { icon: "devicon-materialui-plain", label: "MUI" },
      { icon: "devicon-react-original", label: "Ant Design" },
      { icon: "devicon-react-original", label: "Shadcn" },
      { icon: "devicon-react-original", label: "Framer Motion" },
    ],
  },
  {
    title: "Backend",
    items: [
      { icon: "devicon-nodejs-plain", label: "Node.js" },
      { icon: "devicon-express-original", label: "Express.js" },
      { icon: "devicon-dot-net-plain", label: "ASP.NET Core" },
      { icon: "devicon-laravel-original", label: "Laravel" },
      { icon: "devicon-jinja-plain", label: "Jinja2" },
      { icon: "devicon-postman-plain", label: "REST API" },
    ],
  },
  {
    title: "Databases",
    items: [
      { icon: "devicon-mongodb-plain", label: "MongoDB" },
      { icon: "devicon-postgresql-plain", label: "PostgreSQL" },
      { icon: "devicon-mysql-plain", label: "MySQL" },
      { icon: "devicon-firebase-plain", label: "Firebase" },
    ],
  },
  {
    title: "DevOps & Version Control",
    items: [
      { icon: "devicon-git-plain", label: "Git" },
      { icon: "devicon-github-original", label: "GitHub" },
      { icon: "devicon-docker-plain", label: "Docker" },
      { icon: "devicon-vercel-original", label: "Vercel" },
      { icon: "devicon-railway-original", label: "Railway" },
      { icon: "devicon-render-plain", label: "Render" },
    ],
  },
  {
    title: "Design & Tooling",
    items: [
      { icon: "devicon-figma-plain", label: "Figma" },
      { icon: "devicon-n8n-plain", label: "n8n" },
      { icon: "devicon-wordpress-plain", label: "WordPress" },
      { icon: "devicon-vscode-plain", label: "VS Code" },
      { icon: "devicon-microsoftsqlserver-plain", label: "MS Office" },
    ],
  },
];

interface ProjectLink {
  href: string;
  label: string;
  icon: keyof typeof PROJECT_LINK_ICONS;
  variant: "btn-live" | "btn-github";
}

interface ProjectCardData {
  title: string;
  description: string;
  tags: string[];
  links: ProjectLink[];
}

const PROJECTS: ProjectCardData[] = [
  {
    title: "Tensor Security Academy (TSA)",
    description:
      "I independently built and maintain the TSA platform using Next.js, focusing on scalable architecture, strong security practices, and production-ready performance. I also integrated n8n-powered service booking automation with PostgreSQL for reliable data management.",
    tags: ["Next.js", "n8n", "PostgreSQL", "Security"],
    links: [
      { href: "https://www.tensorsecurityacademy.com/", label: "View Live", icon: "visibility", variant: "btn-live" },
      { href: "https://github.com/Saobia3i/TSA1.1", label: "GitHub", icon: "code", variant: "btn-github" },
    ],
  },
  {
    title: "Arelix Labs — AI & Software Platform",
    description:
      "Full-stack AI agency and software engineering platform built with Next.js App Router, Prisma ORM, PostgreSQL, Groq AI SDK integration, NextAuth authentication, and server-side automation.",
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Groq AI", "NextAuth"],
    links: [
      { href: "/projects#arelix-labs", label: "Details", icon: "open_in_new", variant: "btn-live" },
      { href: "https://github.com/Saobia3i/Arelix-Labs", label: "GitHub", icon: "code", variant: "btn-github" },
    ],
  },
  {
    title: "SSRN Transfer — US Car Rental Platform",
    description:
      "Project-based frontend development for SSRN Transfer, a US-based car rental platform. Engineered fast, clean, and responsive user interface templates using Jinja2, HTML5, CSS3, and JavaScript.",
    tags: ["Jinja2", "HTML5", "CSS3", "JavaScript", "Car Rental UI"],
    links: [{ href: "https://ssrn-app.netlify.app/", label: "View Live", icon: "visibility", variant: "btn-live" }],
  },
  {
    title: "AUST Robotics Club Website",
    description:
      "As Director of the Web Team, I led and coordinated the development team while actively coding and implementing the core features of this official club website (dynamic Notice Boards, educational course trackers, searchable events, project showroom, and secure admin panel).",
    tags: ["React", "TypeScript", "Vite", "Firebase Firestore", "Firebase Auth", "ImageKit CDN"],
    links: [
      { href: "https://www.austrc.com/", label: "View Live", icon: "visibility", variant: "btn-live" },
      { href: "/projects#aust-robotics-club", label: "Details", icon: "open_in_new", variant: "btn-live" },
    ],
  },
  {
    title: "AUST Rover Challenge (ARC) Portal",
    description:
      "I served as Director and Lead Developer for the official national event portal powering the AUST Rover Challenge (which hosts LFR, Soccer Bot, Rover Run, and Hackathons). Personally coded and engineered the portal's core systems driven by our custom Universal Competition System (UCS) engine (live analytics, real-time leaderboards, automated certificate generators, and a secure admin command center).",
    tags: ["React", "TypeScript", "Node.js", "Firebase", "Real-time DB", "Admin Panel"],
    links: [
      { href: "https://arc.austrc.com/aust-rover-challenge-2-0/", label: "View Live", icon: "visibility", variant: "btn-live" },
      { href: "/projects#arc-portal", label: "Details", icon: "open_in_new", variant: "btn-live" },
    ],
  },
  {
    title: "AUSTCAIC Official Website",
    description:
      "Official web platform for AUST Cybersecurity and AI Club (austcaic.com). Engineered full web deployment, live debugging, and cloud hosting infrastructure.",
    tags: ["Deployment", "Debugging", "Hosting", "Web Engineering"],
    links: [
      { href: "https://austcaic.com/", label: "View Live", icon: "visibility", variant: "btn-live" },
      { href: "/projects#austcaic-website", label: "Details", icon: "open_in_new", variant: "btn-live" },
    ],
  },
  {
    title: "AUSTCAIC Poster Generator",
    description:
      "Internal graphics web app for the AUSTCAIC Graphics Team. Generates 300 DPI print-ready PNG posters with fixed brand guidelines, Satori rendering engine, and Groq LLaMA 3.3 + Pinecone AI notes assistant.",
    tags: ["Next.js 15", "React 19", "Satori", "Groq LLaMA 3.3", "Pinecone", "Tailwind CSS v4"],
    links: [{ href: "/projects#austcaic-poster-generator", label: "Details", icon: "open_in_new", variant: "btn-live" }],
  },
  {
    title: "Lead Capture & AI-Qualification System",
    description:
      "Full-stack lead capture system with AI-powered qualification (Groq lead scoring), n8n workflow webhook automation, Slack alerts, Sheets CRM logging, and automated personalized email generation.",
    tags: ["n8n", "Groq API", "Slack", "SMTP", "Sheets"],
    links: [
      { href: "https://lead-generation1.vercel.app", label: "View Live", icon: "visibility", variant: "btn-live" },
      { href: "/projects#lead-capture-ai", label: "Details", icon: "open_in_new", variant: "btn-live" },
    ],
  },
  {
    title: "Linear AI - AI Automation Store",
    description:
      "I designed and built Linear AI as a full-stack automation commerce platform, with a React frontend and ASP.NET Core Web API backend powering product catalogs, admin-controlled offers, vouchers, discounts, order fulfillment, delivery of n8n templates/setup guides, product requests, and moderated user feedback.",
    tags: ["React.js", "ASP.NET Core Web API", "n8n", "Render"],
    links: [
      { href: "https://linearai.onrender.com", label: "View Live", icon: "visibility", variant: "btn-live" },
      { href: "https://github.com/Saobia3i/LinearAi_v1", label: "GitHub", icon: "code", variant: "btn-github" },
    ],
  },
  {
    title: "Robomania 2.0",
    description: "Event website for AUST Robotics Club's flagship robotics competition with team collaboration.",
    tags: ["React.js", "Shadcn", "Aceternity UI"],
    links: [
      { href: "https://www.robomania.austrc.com/", label: "View Live", icon: "visibility", variant: "btn-live" },
      { href: "https://github.com/Saobia3i/Robomania-2.0", label: "GitHub", icon: "code", variant: "btn-github" },
    ],
  },
  {
    title: "QuoteVerse - Quote Generator",
    description: "A minimal, responsive React app that fetches and displays random quotes to keep you inspired.",
    tags: ["React.js", "Ant Design", "MUI"],
    links: [
      { href: "https://quote-verse-psi.vercel.app/", label: "View Live", icon: "visibility", variant: "btn-live" },
      { href: "https://github.com/Saobia3i/Quote-Verse", label: "GitHub", icon: "code", variant: "btn-github" },
    ],
  },
  {
    title: "iCanteen - Smart Canteen Management",
    description: "Full-stack smart canteen system streamlining ordering, menu management, and staff operations.",
    tags: ["React.js", "Laravel", "MySQL", "Ant Design", "Tailwind css"],
    links: [
      { href: "https://i-canteen.vercel.app/", label: "View Live", icon: "visibility", variant: "btn-live" },
      { href: "https://github.com/Saobia3i/iCanteen1", label: "GitHub", icon: "code", variant: "btn-github" },
    ],
  },
  {
    title: "Frontend Development Assignment",
    description: "Responsive frontend project demonstrating modern web design principles (CSE-3100).",
    tags: ["HTML", "CSS", "JavaScript"],
    links: [{ href: "https://github.com/Saobia3i/cse-3100", label: "GitHub", icon: "code", variant: "btn-github" }],
  },
  {
    title: "Green Gadgets - E-commerce website",
    description: "Collaborative eco-friendly gadget marketplace with multiple features and team contributions.",
    tags: ["MERN Stack", "MongoDB", "Express.js"],
    links: [
      { href: "https://github.com/tahmidkhanshuvo/Green-Gadgets", label: "GitHub", icon: "code", variant: "btn-github" },
    ],
  },
  {
    title: "AI Sales Lead Research & Outreach Agent",
    description:
      "Advanced multi-agent AI system for B2B sales intelligence. Takes a company name or URL, performs real-time web research, synthesizes a company intelligence profile, drafts a personalized cold email, and runs a strict fact-verification pass to ensure zero hallucinations.",
    tags: ["LangGraph", "Python", "FastAPI", "Next.js", "Groq LLaMA 3.3", "Docker"],
    links: [
      { href: "/projects#ai-sales-agent", label: "Details", icon: "open_in_new", variant: "btn-live" },
      {
        href: "https://github.com/Saobia3i/AI-Sales-Lead-Research-Outreach-Agent",
        label: "GitHub",
        icon: "code",
        variant: "btn-github",
      },
    ],
  },
  {
    title: "SmartAir Mouse Pro",
    description:
      "Portfolio-grade computer vision app that turns hand gestures into lag-free virtual mouse controls. Features a 2D Kalman Filter, transparent AR desktop overlay with neon cursor trails, click-physics particle explosions, real-time HUD, and a Gradio browser sandbox.",
    tags: ["Python", "OpenCV", "MediaPipe", "Kalman Filter", "Gradio", "Windows"],
    links: [
      { href: "/projects#smartair-mouse", label: "Details", icon: "open_in_new", variant: "btn-live" },
      { href: "https://github.com/Saobia3i/SmartAir-Mouse-Pro", label: "GitHub", icon: "code", variant: "btn-github" },
    ],
  },
  {
    title: "My Cutie Mood Mirror",
    description:
      "A charming real-time mood detection application that uses your webcam to recognize facial expressions and reflect your emotional state as a fun, animated visual mirror — mapping detected emotions to cute animated characters with dynamic color-coded feedback.",
    tags: ["Python", "Computer Vision", "Emotion Detection", "Real-time"],
    links: [
      { href: "/projects#mood-mirror", label: "Details", icon: "open_in_new", variant: "btn-live" },
      { href: "https://github.com/Saobia3i/my-cutie-mood-mirror", label: "GitHub", icon: "code", variant: "btn-github" },
    ],
  },
  {
    title: "ResearchMind",
    description:
      "Full-stack AI research system featuring 4 modes: Quick Research, ReAct Agent, Team Research (LangGraph pipeline), and Deep Consensus — a cost-aware multi-model workflow with claim-level verification, model disagreement mapping, and live token/cost tracking.",
    tags: ["LangGraph", "Gemini", "Groq", "Pinecone", "FastAPI", "Python"],
    links: [
      { href: "/projects#researchmind", label: "Details", icon: "open_in_new", variant: "btn-live" },
      { href: "https://github.com/Saobia3i/researchMind", label: "GitHub", icon: "code", variant: "btn-github" },
    ],
  },
  {
    title: "WattWatch — IoT Digital Twin",
    description:
      "Production-ready, event-driven digital twin for monitoring & optimizing office electrical consumption. Features a 2D interactive floorplan, real-time SSE device updates, 15 controllable devices, a Gemini-powered Discord AI bot, and ESP32 hardware integration.",
    tags: ["Next.js", "Python", "SQLite + SSE", "Discord.py", "Gemini Flash", "ESP32"],
    links: [
      { href: "https://wattwatch-f099.onrender.com", label: "View Live", icon: "visibility", variant: "btn-live" },
      { href: "https://github.com/Saobia3i/WattWatch", label: "GitHub", icon: "code", variant: "btn-github" },
    ],
  },
];

interface ExperienceEntry {
  role: string;
  company: string;
  period: string;
  description: string;
  projects?: { href: string; label: string }[];
}

const EXPERIENCE: ExperienceEntry[] = [
  {
    role: "Solo Software Engineer",
    company: "Tensor Security Academy (TSA)",
    period: "Current",
    description:
      "Independently built and currently maintain the official TSA website in Next.js with a focus on scalability and security. Integrated n8n automation for service booking workflows and managed data operations with PostgreSQL.",
    projects: [{ href: "https://www.tensorsecurityacademy.com/", label: "TSA website" }],
  },
  {
    role: "Frontend Developer (Project-Based)",
    company: "SSRN Transfer",
    period: "2026 (Completed)",
    description:
      "Completed project-based frontend development for SSRN Transfer, a US-based car rental company. Building and maintaining interface templates using Jinja2 to deliver fast and consistent user experiences.",
    projects: [{ href: "https://ssrn-app.netlify.app/", label: "SSRN Transfer Live" }],
  },
  {
    role: "Founding Panel Member & Joint Secretary",
    company: "AUST Cybersecurity and AI Club (AUSTCAIC)",
    period: "Current",
    description:
      "Founding panel member and current Joint Secretary. Co-built the club from scratch, structuring operational workflows, leading cross-functional teams, and directing technical strategy. Architected and managed the full web infrastructure for the official club portal (austcaic.com), handling deployment pipelines, server hosting, live debugging, and internal digital tooling.",
    projects: [
      { href: "https://austcaic.com/", label: "austcaic.com" },
      { href: "/projects#austcaic-poster-generator", label: "Poster Generator" },
    ],
  },
  {
    role: "Director - Website & App Development Team",
    company: "AUST Robotics Club",
    period: "2023 – June 2024 (Completed)",
    description: "Led the software development team, managing full-stack website projects and team coordination.",
    projects: [
      { href: "https://www.austrc.com/", label: "AUST RC Website" },
      { href: "https://www.robomania.austrc.com/", label: "Robomania 2.0" },
      { href: "https://arc.austrc.com/aust-rover-challenge-2-0/", label: "Rover Challenge 2.0" },
    ],
  },
  {
    role: "IT Specialist",
    company: "Various Non-Profit Organizations",
    period: "2021 - Present",
    description: "Providing IT support, graphic design, and digital solutions for multiple clubs and organizations.",
  },
];

// Certificate data lives in ./certificates-data so the home carousel and the
// dedicated /certificates grid page render from a single source of truth.

export default function HomeClient() {
  return (
    <>
      <Nav links={NAV_LINKS} logoHref="#hero-top" />

      {/* Hero Section */}
      <span id="hero-top" style={{ position: "absolute", top: 0 }} />
      <section className="hero">
        <HeroCanvas />
        <FloatingParticles />

        <div className="profile-container">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/profile.png" alt="Saobia Islam" className="profile-img" />
        </div>

        <p className="hero-eyebrow">Full Stack Developer &amp; AI Engineer</p>
        <h1>
          Hi there, I&apos;m <span className="name-highlight">Saobia Islam Tinni</span>
        </h1>
        <p className="bio">
          I build clean, responsive, and user-focused web apps that are secure and scalable. I care about both
          design and functionality, and I&apos;m committed to continuous learning, steady growth, and meaningful
          collaboration.
        </p>
        <div className="cta-buttons">
          <a href="#projects" className="btn btn-primary">
            <Code />
            View Projects
          </a>
          <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
            <FileText />
            Resume
          </a>
          <a href="#contact" className="btn btn-secondary">
            <Mail />
            Get in Touch
          </a>
        </div>
      </section>

      {/* About */}
      <section id="about">
        <h2 className="section-title">About Me</h2>
        <ul className="about-list">
          <li>
            CSE student at <strong>Ahsanullah University of Science and Technology</strong>
          </li>
          <li>
            Building full stack web apps with <strong>MERN</strong> and <strong>Next.js</strong>
          </li>
          <li>
            Focused on <strong>AI-integrated full stack websites</strong> with modern UI and{" "}
            <strong>AI automation</strong> services
          </li>
          <li>
            Learning <strong>AI Automation</strong> and <strong>Machine Learning</strong> to build more intelligent
            products
          </li>
          <li>
            Open to collaborating on <strong>e-commerce</strong>, <strong>edtech</strong>, and other modern web
            projects
          </li>
        </ul>
      </section>

      {/* Tech Stack */}
      <section id="tech">
        <h2 className="section-title">Tech Stack</h2>
        <div className="tech-groups">
          {TECH_GROUPS.map((group) => (
            <div className="tech-group" key={group.title}>
              <div className="tech-head">
                <h3>{group.title}</h3>
              </div>
              <div className="tech-grid">
                {group.items.map((item) => (
                  <span className="tech-pill" key={item.label}>
                    <i className={`${item.icon} colored`} />
                    {item.label}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {PROJECTS.map((project, i) => (
            <Reveal as="div" className="project-card" key={project.title} delayMs={(i % 4) * 110}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-tags">
                {project.tags.map((tag) => (
                  <span className="tech-tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
              <div className="project-links">
                {project.links.map((link) => {
                  const LinkIcon = PROJECT_LINK_ICONS[link.icon];
                  return (
                    <a
                      key={link.href + link.label}
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className={`project-btn ${link.variant}`}
                    >
                      <LinkIcon size={18} />
                      {link.label}
                    </a>
                  );
                })}
              </div>
            </Reveal>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
          <a href="/projects" className="btn btn-primary">
            <ExternalLink />
            View Detailed Project Pages
          </a>
        </div>
      </section>

      {/* Experience */}
      <section id="experience">
        <h2 className="section-title">Experience</h2>
        <div className="experience-grid">
          {EXPERIENCE.map((job, i) => (
            <Reveal as="div" className="experience-card" key={job.role} delayMs={(i % 4) * 110}>
              <h3>{job.role}</h3>
              <p className="company">
                <strong>{job.company}</strong> | {job.period}
              </p>
              <p>{job.description}</p>
              {job.projects && (
                <>
                  <p style={{ marginTop: "1rem" }}>
                    <strong>Key Projects:</strong>
                  </p>
                  <div className="project-links" style={{ marginTop: "0.8rem" }}>
                    {job.projects.map((p) => (
                      <a key={p.href} href={p.href} target="_blank" rel="noopener noreferrer" className="project-btn btn-live">
                        {p.label}
                      </a>
                    ))}
                  </div>
                </>
              )}
            </Reveal>
          ))}
        </div>
      </section>

      <div className="wakatime-section">
        <h3>WakaTime Insights</h3>
        <a href="https://wakatime.com/@Saobia" target="_blank" rel="noopener noreferrer">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://wakatime.com/badge/user/7f0860ba-774e-43d9-8390-34249079bba4.svg"
            alt="WakaTime"
          />
        </a>
        <p style={{ marginTop: "1rem", fontSize: "0.95rem" }}>
          View detailed graphs:{" "}
          <a href="https://wakatime.com/insights?tweet=true" target="_blank" rel="noopener noreferrer">
            WakaTime Insights
          </a>
        </p>
      </div>

      {/* Certificates */}
      <CertificateLightboxProvider>
        <section id="certificates">
          <h2 className="section-title">Certificates &amp; Achievements</h2>
          <CertificateCarousel certificates={CERTIFICATES} />
          <div className="certificates-cta">
            <a href="/certificates" className="btn btn-primary">
              View All Certificates
              <ExternalLink size={16} />
            </a>
          </div>
        </section>
      </CertificateLightboxProvider>

      {/* Contact */}
      <section id="contact">
        <h2 className="section-title">Connect With Me</h2>
        <p style={{ textAlign: "center", fontSize: "1.05rem", marginBottom: "1.5rem", color: "inherit", opacity: 0.65 }}>
          I&apos;m always open to discussing new projects, opportunities, and collaborations.
        </p>
        <div className="contact-grid">
          <a href="mailto:islamsaobia@gmail.com" className="contact-link" aria-label="Email">
            <Mail />
          </a>
          <a href="https://github.com/Saobia3i" target="_blank" rel="noopener noreferrer" className="contact-link" aria-label="GitHub">
            <Code />
          </a>
          <a
            href="https://www.linkedin.com/in/saobia-islam-1b173b284/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
            aria-label="LinkedIn"
          >
            <Briefcase />
          </a>
        </div>
      </section>

      {/* Footer */}
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
          <p>Built with passion and dedication to excellence</p>
        </div>
      </footer>
    </>
  );
}
