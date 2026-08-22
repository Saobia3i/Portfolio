"use client";

import Link from "next/link";

export default function CvClient() {
  return (
    <>
      {/* Actions Bar */}
      <div className="actions-bar">
        <Link href="/" className="btn-action">
          <i className="fa-solid fa-arrow-left"></i>
          {" "}
          Back to Portfolio
        </Link>
        <button className="btn-action" onClick={() => window.print()}>
          <i className="fa-solid fa-print"></i>
          {" "}
          Print / Save as PDF
        </button>
      </div>
      {/* Curriculum Vitae (CV) Document */}
      <div className="cv-container">
        {/* HEADER */}
        <header className="cv-header">
          <div className="header-top">
            <h1>
              Saobia Islam
            </h1>
            <h2>
              Full-Stack Developer
            </h2>
          </div>
          <div className="contact-grid">
            <a href="mailto:islamsaobia@gmail.com" className="contact-item">
              <i className="fa-solid fa-envelope"></i>
              {" "}
              islamsaobia@gmail.com
            </a>
            <a href="https://islamsaobia.vercel.app" target="_blank" rel="noopener noreferrer" className="contact-item">
              <i className="fa-solid fa-globe"></i>
              {" "}
              islamsaobia.vercel.app
            </a>
            <a href="https://github.com/Saobia3i" target="_blank" rel="noopener noreferrer" className="contact-item">
              <i className="fa-brands fa-github"></i>
              {" "}
              github.com/Saobia3i
            </a>
            <a href="https://linkedin.com/in/saobia-islam-1b173b284" target="_blank" rel="noopener noreferrer" className="contact-item">
              <i className="fa-brands fa-linkedin"></i>
              {" "}
              LinkedIn Profile
            </a>
            <div className="contact-item">
              <i className="fa-solid fa-location-dot"></i>
              {" "}
              Dhaka, Bangladesh
            </div>
          </div>
        </header>
        {/* PROFESSIONAL SUMMARY */}
        <section className="cv-section">
          <h3 className="section-title">
            Professional Summary
          </h3>
          <p className="summary-text">
            Results-driven
            {" "}
            <strong>
              Full-Stack Developer
            </strong>
            {" "}
            and Computer Science student at
            {" "}
            <strong>
              Ahsanullah University of Science and Technology (AUST)
            </strong>
            , with proven production-level experience across MERN, Next.js, Laravel, and .NET stacks. Independently architected and shipped the
            {" "}
            <strong>
              Tensor Security Academy
            </strong>
            {" "}
            platform; integrating n8n workflow automation and PostgreSQL for a live cybersecurity training business. Experienced in leading development teams, owning full project lifecycles, and shipping scalable, secure web applications under real-world deadlines. Actively deepening expertise in Next.js, AI-driven automation, and cybersecurity.
          </p>
        </section>
        {/* TECHNICAL SKILLS */}
        <section className="cv-section">
          <h3 className="section-title">
            Technical Skills
          </h3>
          <div className="skills-container">
            <div className="skill-category">
              <strong>
                Languages:
              </strong>
              {" "}
              JavaScript, TypeScript, Python, C#, PHP, HTML5, CSS3
            </div>
            <div className="skill-category">
              <strong>
                Frontend Frameworks:
              </strong>
              {" "}
              React.js, Next.js
            </div>
            <div className="skill-category">
              <strong>
                Styling &amp; UI:
              </strong>
              {" "}
              Tailwind CSS, Shadcn UI, MUI, Ant Design, Bootstrap, Framer Motion
            </div>
            <div className="skill-category">
              <strong>
                Backend &amp; APIs:
              </strong>
              {" "}
              Node.js, Express.js, Laravel, .NET Core, REST APIs, Jinja2
            </div>
            <div className="skill-category">
              <strong>
                Databases:
              </strong>
              {" "}
              PostgreSQL, MongoDB, MySQL, Firebase
            </div>
            <div className="skill-category">
              <strong>
                DevOps &amp; Cloud:
              </strong>
              {" "}
              Docker, Vercel, Railway, Git, GitHub CI/CD
            </div>
            <div className="skill-category">
              <strong>
                AI &amp; Automation:
              </strong>
              {" "}
              n8n workflow automation, AI Integration, Prompt Engineering
            </div>
            <div className="skill-category">
              <strong>
                Tools &amp; Platforms:
              </strong>
              {" "}
              Figma, WordPress, Google Sites, Overleaf
            </div>
          </div>
        </section>
        {/* WORK EXPERIENCE */}
        <section className="cv-section">
          <h3 className="section-title">
            Work Experience
          </h3>
          <div className="timeline-list">
            {/* <div class="timeline-item">
                <div class="item-header">
                  <div>
                    <span class="item-title">Co-Founder &amp; CTO</span>
                    <span class="item-meta"> | <strong>Arelix Labs</strong> <span>· Early-Stage Venture · Dhaka / Remote</span></span>
                  </div>
                  <span class="item-date">Aug 2026 – Present</span>
                </div>
                <ul class="item-bullets">
                  <li>Co-founded Arelix Labs in its early launch phase — steering foundational technical direction, system architecture, and technology roadmaps for digital and physical hardware products.</li>
                  <li>Bootstrapping core engineering workflows spanning full-stack web/mobile apps, custom multi-layer PCB design, embedded RTOS C/C++ firmware, and edge AI integration.</li>
                  <li>Architecting foundational hardware-to-cloud pipelines, secure telemetry streams, and high-availability cloud APIs for upcoming deployment milestones.</li>
                </ul>
              </div> */}
            <div className="timeline-item">
              <div className="item-header">
                <div>
                  <span className="item-title">
                    Solo Software Engineer
                  </span>
                  <span className="item-meta">
                    |
                    {" "}
                    <strong>
                      Tensor Security Academy (TSA)
                    </strong>
                    <span>
                      · Remote
                    </span>
                  </span>
                </div>
                <span className="item-date">
                  2025 – Present
                </span>
              </div>
              <ul className="item-bullets">
                <li>
                  Sole developer — designed, built, and currently maintain the TSA production platform in
                  {" "}
                  <strong>
                    Next.js
                  </strong>
                  , focusing on scalable architecture and security-hardened deployment.
                </li>
                <li>
                  Engineered an
                  {" "}
                  <strong>
                    n8n-powered service booking automation pipeline
                  </strong>
                  , eliminating manual coordination and improving booking reliability.
                </li>
                <li>
                  Architected and managed all data operations on
                  {" "}
                  <strong>
                    PostgreSQL
                  </strong>
                  , including schema design, query optimization, and data integrity.
                </li>
                <li>
                  Applied security best practices throughout the stack, directly aligned with the platform&apos;s cybersecurity mission.
                </li>
              </ul>
            </div>
            <div className="timeline-item">
              <div className="item-header">
                <div>
                  <span className="item-title">
                    Frontend Developer (Project-Based)
                  </span>
                  <span className="item-meta">
                    |
                    {" "}
                    <strong>
                      SSRN Transfer
                    </strong>
                    <span>
                      · Remote (US-Based client)
                    </span>
                  </span>
                </div>
                <span className="item-date">
                  Jan 2026 – Jun 2026
                </span>
              </div>
              <ul className="item-bullets">
                <li>
                  Built and maintained UI templates using
                  {" "}
                  <strong>
                    Jinja2
                  </strong>
                  {" "}
                  for a US-based car rental client, ensuring fast, consistent user experiences.
                </li>
                <li>
                  Collaborated remotely to deliver frontend updates on schedule, adapting to client-driven requirements and feedback cycles.
                </li>
              </ul>
            </div>
            <div className="timeline-item">
              <div className="item-header">
                <div>
                  <span className="item-title">
                    Founding Panel Member &amp; Joint Secretary
                  </span>
                  <span className="item-meta">
                    |
                    {" "}
                    <strong>
                      AUST Cybersecurity and AI Club (AUSTCAIC)
                    </strong>
                    <span>
                      · Dhaka, Bangladesh
                    </span>
                  </span>
                </div>
                <span className="item-date">
                  2024 – Present
                </span>
              </div>
              <ul className="item-bullets">
                <li>
                  Founding panel member — co-built the club from scratch, establishing foundational guidelines, team structures, and operational workflows.
                </li>
                <li>
                  Leading and monitoring cross-functional teams (technical, management, digital output), directing overall club technology and brand strategy.
                </li>
                <li>
                  Engineered, debugged, and managed full-stack deployment and cloud hosting infrastructure for the official club portal (
                  <strong>
                    austcaic.com
                  </strong>
                  ).
                </li>
              </ul>
            </div>
            <div className="timeline-item">
              <div className="item-header">
                <div>
                  <span className="item-title">
                    Director — Website &amp; App Development Team
                  </span>
                  <span className="item-meta">
                    |
                    {" "}
                    <strong>
                      AUST Robotics Club
                    </strong>
                    <span>
                      · Dhaka, Bangladesh
                    </span>
                  </span>
                </div>
                <span className="item-date">
                  2023 – June 2024
                </span>
              </div>
              <ul className="item-bullets">
                <li>
                  Led the web development team: managed sprint planning, code reviews, task delegation, and production deployments for all club properties.
                </li>
                <li>
                  Delivered the
                  {" "}
                  <strong>
                    AUST Robotics Club main website
                  </strong>
                  {" "}
                  using React.js and Firebase backend.
                </li>
                <li>
                  Delivered the
                  {" "}
                  <strong>
                    Robomania 2.0
                  </strong>
                  {" "}
                  event site (React.js, Shadcn, Aceternity UI) and Rover Challenge 2.0 site on tight, non-negotiable event deadlines.
                </li>
                <li>
                  Recognized with the
                  {" "}
                  <strong>
                    Best Panel Member award
                  </strong>
                  {" "}
                  for exceptional technical leadership within the website team.
                </li>
              </ul>
            </div>
            <div className="timeline-item">
              <div className="item-header">
                <div>
                  <span className="item-title">
                    IT Specialist (Volunteer)
                  </span>
                  <span className="item-meta">
                    |
                    {" "}
                    <strong>
                      Multiple Non-Profit Organizations
                    </strong>
                    <span>
                      · Bangladesh
                    </span>
                  </span>
                </div>
                <span className="item-date">
                  2021 – 2022
                </span>
              </div>
              <ul className="item-bullets">
                <li>
                  Delivered IT support, graphic design, and digital tooling solutions for student clubs and community organizations across multiple engagements.
                </li>
              </ul>
            </div>
          </div>
        </section>
        {/* KEY PROJECTS */}
        <section className="cv-section">
          <h3 className="section-title">
            Key Projects
          </h3>
          <div className="timeline-list">
            <div className="timeline-item">
              <div className="item-header">
                <div>
                  <span className="item-title">
                    Tensor Security Academy (TSA)
                  </span>
                  <span className="item-meta">
                    |
                    {" "}
                    <em>
                      Next.js, n8n, PostgreSQL, Vercel, Hostinger
                    </em>
                  </span>
                </div>
                <a href="https://www.tensorsecurityacademy.com/" target="_blank" rel="noopener noreferrer" className="contact-item item-date">
                  Live Link
                  {" "}
                  <i className="fa-solid fa-up-right-from-square"></i>
                </a>
              </div>
              <ul className="item-bullets">
                <li>
                  Sole developer — designed, built, and maintain the TSA production platform in Next.js.
                </li>
                <li>
                  Engineered an n8n-powered service booking automation pipeline integrated with PostgreSQL.
                </li>
              </ul>
            </div>
            <div className="timeline-item">
              <div className="item-header">
                <div>
                  <span className="item-title">
                    Arelix Labs — AI &amp; Software Platform
                  </span>
                  <span className="item-meta">
                    |
                    {" "}
                    <em>
                      Next.js 16, Prisma ORM, PostgreSQL, Groq AI SDK, NextAuth
                    </em>
                  </span>
                </div>
                <a href="https://github.com/Saobia3i/Arelix-Labs" target="_blank" rel="noopener noreferrer" className="contact-item item-date">
                  GitHub
                  {" "}
                  <i className="fa-solid fa-up-right-from-square"></i>
                </a>
              </div>
              <ul className="item-bullets">
                <li>
                  Full-stack AI agency platform built with Next.js App Router, Prisma ORM, PostgreSQL, and NextAuth.
                </li>
                <li>
                  Engineered automated AI content pipelines and client service workflows using Groq AI SDK.
                </li>
              </ul>
            </div>
            <div className="timeline-item">
              <div className="item-header">
                <div>
                  <span className="item-title">
                    SSRN Transfer — US Car Rental Platform
                  </span>
                  <span className="item-meta">
                    |
                    {" "}
                    <em>
                      Jinja2, HTML5, CSS3, JavaScript, Netlify
                    </em>
                  </span>
                </div>
              </div>
              <ul className="item-bullets">
                <li>
                  Project-based frontend development for a US car rental client. Built responsive interface templates using Jinja2.
                </li>
              </ul>
            </div>
            <div className="timeline-item">
              <div className="item-header">
                <div>
                  <span className="item-title">
                    AUST Robotics Club Website
                  </span>
                  <span className="item-meta">
                    |
                    {" "}
                    <em>
                      React.js, TypeScript, Vite, Firebase
                    </em>
                  </span>
                </div>
                <a href="https://www.austrc.com/" target="_blank" rel="noopener noreferrer" className="contact-item item-date">
                  Live Link
                  {" "}
                  <i className="fa-solid fa-up-right-from-square"></i>
                </a>
              </div>
              <ul className="item-bullets">
                <li>
                  Official web portal with dynamic notice board, course trackers, searchable events, and admin panel.
                </li>
              </ul>
            </div>
            <div className="timeline-item">
              <div className="item-header">
                <div>
                  <span className="item-title">
                    The Event Management Portal (Universal Competition System)
                  </span>
                  <span className="item-meta">
                    |
                    {" "}
                    <em>
                      React.js, Node.js, Firebase, Tailwind CSS
                    </em>
                  </span>
                </div>
                <a href="https://arc.austrc.com/aust-rover-challenge-2-0/" target="_blank" rel="noopener noreferrer" className="contact-item item-date">
                  Live Link
                  {" "}
                  <i className="fa-solid fa-up-right-from-square"></i>
                </a>
              </div>
              <ul className="item-bullets">
                <li>
                  Developed a high-performance competition management engine powering national robotics championships.
                </li>
                <li>
                  Implemented real-time match leaderboards, live analytics dashboards, and automated digital certificate generation.
                </li>
                <li>
                  Built a full admin command center to orchestrate registrations, users, teams, and active contest segments.
                </li>
              </ul>
            </div>
            <div className="timeline-item">
              <div className="item-header">
                <div>
                  <span className="item-title">
                    AUSTCAIC Official Website
                  </span>
                  <span className="item-meta">
                    |
                    {" "}
                    <em>
                      Deployment, Hosting, Live Debugging, Web Infrastructure
                    </em>
                  </span>
                </div>
                <a href="https://austcaic.com/" target="_blank" rel="noopener noreferrer" className="contact-item item-date">
                  Live Link
                  {" "}
                  <i className="fa-solid fa-up-right-from-square"></i>
                </a>
              </div>
              <ul className="item-bullets">
                <li>
                  Managed end-to-end web deployment, server configuration, DNS setup, and cloud hosting for austcaic.com.
                </li>
                <li>
                  Executed live debugging, performance tuning, and runtime stability enhancements for the official club website.
                </li>
              </ul>
            </div>
            <div className="timeline-item">
              <div className="item-header">
                <div>
                  <span className="item-title">
                    AUSTCAIC Poster Generator 🎨⚡
                  </span>
                  <span className="item-meta">
                    |
                    {" "}
                    <em>
                      Next.js 15, React 19, Satori, Groq LLaMA 3.3, Pinecone, Tailwind v4
                    </em>
                  </span>
                </div>
              </div>
              <ul className="item-bullets">
                <li>
                  Engineered an internal graphics web app for AUSTCAIC Graphics Team to generate 300 DPI print-ready PNG posters.
                </li>
                <li>
                  Integrated Satori &amp; resvg-js rendering engine with Groq SDK and Pinecone AI assistant for auto-generating poster copy.
                </li>
              </ul>
            </div>
            <div className="timeline-item">
              <div className="item-header">
                <div>
                  <span className="item-title">
                    AI Sales Lead Research &amp; Outreach Agent
                  </span>
                  <span className="item-meta">
                    |
                    {" "}
                    <em>
                      LangGraph, Groq LLaMA 3.3, FastAPI, Next.js
                    </em>
                  </span>
                </div>
                <a href="https://github.com/Saobia3i/AI-Sales-Lead-Research-Outreach-Agent" target="_blank" rel="noopener noreferrer" className="contact-item item-date">
                  GitHub
                  {" "}
                  <i className="fa-solid fa-up-right-from-square"></i>
                </a>
              </div>
              <ul className="item-bullets">
                <li>
                  Architected a multi-agent AI system designed to automate B2B sales intelligence and personalized outreach.
                </li>
                <li>
                  Integrated web research agents to autonomously compile target company profiles and qualify leads.
                </li>
                <li>
                  Built an LLM verification node to cross-check drafted emails against researched facts, preventing hallucinations.
                </li>
              </ul>
            </div>
            <div className="timeline-item">
              <div className="item-header">
                <div>
                  <span className="item-title">
                    ResearchMind — Multi-Agent AI System
                  </span>
                  <span className="item-meta">
                    |
                    {" "}
                    <em>
                      LangGraph, Pinecone, Gemini, Groq, OpenRouter
                    </em>
                  </span>
                </div>
                <a href="https://github.com/Saobia3i/researchMind" target="_blank" rel="noopener noreferrer" className="contact-item item-date">
                  GitHub
                  {" "}
                  <i className="fa-solid fa-up-right-from-square"></i>
                </a>
              </div>
              <ul className="item-bullets">
                <li>
                  Built a full-stack research automation platform supporting Quick, ReAct Loop, Team, and Deep Consensus modes.
                </li>
                <li>
                  Implemented claim-level factual verification tags and vector database integrations using Pinecone.
                </li>
                <li>
                  Designed a dashboard to monitor API consumption costs, token usage, and pipeline latency.
                </li>
              </ul>
            </div>
            <div className="timeline-item">
              <div className="item-header">
                <div>
                  <span className="item-title">
                    WattWatch — IoT Digital Twin &amp; Smart Office
                  </span>
                  <span className="item-meta">
                    |
                    {" "}
                    <em>
                      Next.js, Python, Server-Sent Events, SQLite, ESP32
                    </em>
                  </span>
                </div>
                <a href="https://wattwatch-f099.onrender.com" target="_blank" rel="noopener noreferrer" className="contact-item item-date">
                  Live Link
                  {" "}
                  <i className="fa-solid fa-up-right-from-square"></i>
                </a>
              </div>
              <ul className="item-bullets">
                <li>
                  Designed an event-driven digital twin to monitor electrical consumption in real-time.
                </li>
                <li>
                  Created an interactive 2D floorplan showing live power telemetry updated instantly via Server-Sent Events (SSE).
                </li>
                <li>
                  Integrated hardware sensors with a Discord bot to query energy analytics using natural language commands.
                </li>
              </ul>
            </div>
            <div className="timeline-item">
              <div className="item-header">
                <div>
                  <span className="item-title">
                    Lead Capture &amp; AI-Qualification System
                  </span>
                  <span className="item-meta">
                    |
                    {" "}
                    <em>
                      n8n, Groq API, Slack, Google Sheets, Gmail SMTP
                    </em>
                  </span>
                </div>
                <a href="https://lead-generation1.vercel.app" target="_blank" rel="noopener noreferrer" className="contact-item item-date">
                  Live Link
                  {" "}
                  <i className="fa-solid fa-up-right-from-square"></i>
                </a>
              </div>
              <ul className="item-bullets">
                <li>
                  Built a webhook-triggered lead generation workflow qualifying prospects programmatically.
                </li>
                <li>
                  Utilized Groq LLaMA 3.3 to qualify leads based on intent, scoring them and triggering Slack alerts.
                </li>
                <li>
                  Automated CRM logging on Google Sheets and drafted personalized follow-up emails via SMTP in under one minute.
                </li>
              </ul>
            </div>
          </div>
        </section>
        {/* EDUCATION */}
        <section className="cv-section">
          <h3 className="section-title">
            Education
          </h3>
          <div className="education-block">
            <div>
              <span className="edu-title">
                B.Sc. in Computer Science &amp; Engineering (CSE)
              </span>
              <div className="edu-meta">
                Ahsanullah University of Science and Technology (AUST)
                {" "}
                <span>
                  · Dhaka, Bangladesh
                </span>
              </div>
              <div className="edu-meta" style={{ fontStyle: "italic" }}>
                Focus: Web Engineering · Cybersecurity · Database Systems · Software Architecture
              </div>
            </div>
            <span className="item-date">
              Currently Enrolled
            </span>
          </div>
        </section>
        {/* ACHIEVEMENTS & LEADERSHIP */}
        <section className="cv-section">
          <h3 className="section-title">
            Achievements &amp; Leadership
          </h3>
          <ul className="simple-list">
            <li>
              <strong>
                Founding Panel Member &amp; Joint Secretary
              </strong>
              {" "}
              — AUST Cybersecurity and AI Club (AUSTCAIC) (Co-built club from scratch &amp; led team operations).
            </li>
            <li>
              <strong>
                Former Director
              </strong>
              {" "}
              — Website &amp; App Development Team, AUST Robotics Club (Term completed in June 2024).
            </li>
            <li>
              <strong>
                Best Panel Member Award
              </strong>
              {" "}
              — Website Team, AUST Robotics Club (recognition for technical leadership and output quality).
            </li>
            <li>
              <strong>
                Senior Sub Executive
              </strong>
              {" "}
              — Website Team, AUST Robotics Club.
            </li>
            <li>
              <strong>
                Champion
              </strong>
              {" "}
              — Video Editing Course Certification.
            </li>
            <li>
              <strong>
                Best House In-charge
              </strong>
              {" "}
              — Leadership Recognition Award.
            </li>
            <li>
              <strong>
                Active Open-Source Contributor
              </strong>
              {" "}
              — tracked via WakaTime: wakatime.com/@Saobia
            </li>
          </ul>
        </section>
      </div>
    </>
  );
}
