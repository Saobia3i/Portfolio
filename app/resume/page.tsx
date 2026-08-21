import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume",
};

const styles = `
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --navy:       #0A1F44;
    --navy-mid:   #1A3A6B;
    --navy-light: #EBF0FA;
    --sky:        #38BDF8;
    --sky-light:  #E0F5FF;
    --yellow:     #FFD700;
    --yellow-bg:  #FFFBE6;
    --black:      #0D0D0D;
    --ink:        #1A1A2E;
    --body:       #2C2C3E;
    --muted:      #5A6070;
    --rule:       #D0D8E8;
    --white:      #FFFFFF;
    --sidebar-w:  205px;
    --page-w:     210mm;
  }

  @media print {
    body { -webkit-print-color-adjust: exact; print-color-adjust: exact; background: #fff; padding: 0; }
    .page { box-shadow: none; border-radius: 0; width: 210mm; height: 297mm; }
    @page { margin: 0; size: A4; }
    .sidebar { padding: 24px 16px 24px 18px; gap: 18px; }
    .main { padding: 22px 24px 22px 22px; }
    .main-header { margin-bottom: 14px; padding-bottom: 12px; }
    .section { margin-bottom: 12px; }
    .section-head { margin-bottom: 9px; }
    .summary-box { padding: 9px 12px; }
    .exp-item { margin-bottom: 10px; }
    .projects-grid { gap: 7px; }
    .project-card { padding: 8px 10px; }
    .edu-block { padding: 10px 12px; }
    .main-header h2 { font-size: 28px; }
    .summary-box p { font-size: 9.8px; line-height: 1.65; }
    .exp-title { font-size: 11px; }
    .exp-org { font-size: 9.5px; margin-bottom: 4px; }
    .exp-org span { font-size: 9px; }
    .exp-bullets li { font-size: 9.3px; line-height: 1.5; }
    .project-name { font-size: 9.8px; }
    .project-desc { font-size: 8.8px; line-height: 1.45; }
    .edu-degree { font-size: 10.5px; }
    .edu-uni { font-size: 9px; }
    .edu-focus { font-size: 8px; }
  }

  body {
    background: #D6DCE8;
    font-family: 'DM Sans', sans-serif;
    color: var(--body);
    display: flex;
    justify-content: center;
    padding: 0 16px 64px;
    min-height: 100vh;
  }

  .page {
    width: var(--page-w);
    min-height: 297mm;
    background: var(--white);
    display: grid;
    grid-template-columns: var(--sidebar-w) 1fr;
    box-shadow: 0 24px 64px rgba(10,31,68,.18), 0 4px 16px rgba(10,31,68,.10);
    border-radius: 6px;
    overflow: hidden;
    border-top: 5px solid var(--navy);
  }

  /* ════════════════════════════════
     SIDEBAR — white bg, navy accents
  ════════════════════════════════ */
  .sidebar {
    background: var(--white);
    border-right: 1.5px solid var(--rule);
    padding: 22px 14px 22px 16px;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  /* Avatar initials circle */
  .avatar-wrap { display: flex; justify-content: center; }
  .avatar {
    width: 68px; height: 68px;
    border-radius: 50%;
    background: var(--navy);
    display: flex; align-items: center; justify-content: center;
    font-family: 'DM Serif Display', serif;
    font-size: 24px;
    color: var(--white);
    letter-spacing: 1px;
    border: 3px solid var(--yellow);
    flex-shrink: 0;
  }

  .s-name { text-align: center; }
  .s-name h1 {
    font-family: 'DM Serif Display', serif;
    font-size: 16px;
    color: var(--navy);
    letter-spacing: .3px;
    line-height: 1.3;
  }
  .s-name .s-role {
    font-size: 9px;
    font-weight: 600;
    letter-spacing: 1.2px;
    text-transform: uppercase;
    color: var(--muted);
    margin-top: 4px;
  }

  .s-divider {
    height: 1.5px;
    background: var(--rule);
    flex-shrink: 0;
  }

  .s-section-title {
    font-size: 8px;
    font-weight: 700;
    letter-spacing: 1.8px;
    text-transform: uppercase;
    color: var(--navy);
    margin-bottom: 8px;
    display: flex;
    align-items: center;
    gap: 6px;
  }
  .s-section-title::after {
    content: '';
    flex: 1;
    height: 1.5px;
    background: var(--navy);
    opacity: .15;
  }

  /* Contact */
  .contact-list { list-style: none; display: flex; flex-direction: column; gap: 6px; }
  .contact-list li { display: flex; align-items: flex-start; gap: 6px; }
  .c-icon {
    width: 16px; height: 16px;
    background: var(--navy-light);
    border-radius: 4px;
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0; margin-top: 1px;
  }
  .c-icon svg { width: 9px; height: 9px; fill: var(--navy); }
  .contact-list a, .contact-list span {
    font-size: 9px;
    color: var(--body);
    text-decoration: none;
    line-height: 1.45;
    word-break: break-all;
  }
  .contact-list a:hover { color: var(--navy); text-decoration: underline; }

  /* Skill tags */
  .skill-group { margin-bottom: 8px; }
  .skill-group:last-child { margin-bottom: 0; }
  .skill-group-label {
    font-size: 8px;
    font-weight: 600;
    color: var(--navy-mid);
    letter-spacing: .7px;
    text-transform: uppercase;
    margin-bottom: 4px;
  }
  .skill-tags { display: flex; flex-wrap: wrap; gap: 3px; }
  .skill-tag {
    font-size: 8.5px;
    font-weight: 500;
    color: var(--navy);
    background: var(--navy-light);
    border: 1px solid #C0CDE6;
    border-radius: 3px;
    padding: 1px 5px;
    line-height: 1.5;
  }
  /* Highlight top skills with sky blue */
  .skill-tag.hl {
    background: var(--sky-light);
    border-color: var(--sky);
    color: #0369A1;
    font-weight: 600;
  }

  /* Achievements */
  .cert-list { list-style: none; display: flex; flex-direction: column; gap: 5px; }
  .cert-list li {
    font-size: 9px;
    color: var(--body);
    padding-left: 11px;
    position: relative;
    line-height: 1.4;
  }
  .cert-list li::before {
    content: '';
    position: absolute; left: 0; top: 5px;
    width: 5px; height: 5px;
    background: var(--yellow);
    border-radius: 2px;
    border: 1.5px solid #C8A000;
  }


  /* ════════════════════════════════
     MAIN COLUMN
  ════════════════════════════════ */
  .main {
    background: var(--white);
    padding: 22px 24px 20px 22px;
    display: flex;
    flex-direction: column;
  }

  /* Name block at top */
  .main-header {
    margin-bottom: 12px;
    padding-bottom: 10px;
    border-bottom: 1.5px solid var(--rule);
  }
  .main-header .label {
    font-size: 8.5px;
    font-weight: 700;
    letter-spacing: 2.2px;
    text-transform: uppercase;
    color: var(--sky);
    margin-bottom: 2px;
  }
  .main-header h2 {
    font-family: 'DM Serif Display', serif;
    font-size: 28px;
    color: var(--navy);
    line-height: 1.1;
    letter-spacing: -.3px;
  }
  .main-header .tagline {
    font-size: 10px;
    color: var(--muted);
    margin-top: 4px;
    font-style: italic;
    line-height: 1.4;
  }

  /* Section */
  .section { margin-bottom: 12px; }
  .section:last-child { margin-bottom: 0; }

  .section-head {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 8px;
  }
  .section-head .s-dot {
    width: 8px; height: 8px;
    background: var(--yellow);
    border-radius: 2px;
    border: 1.5px solid #C8A000;
    flex-shrink: 0;
  }
  .section-head h3 {
    font-size: 9px;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: var(--navy);
    white-space: nowrap;
  }
  .section-head::after {
    content: '';
    flex: 1;
    height: 1.5px;
    background: linear-gradient(90deg, var(--navy) 0%, var(--rule) 100%);
    opacity: .4;
  }

  /* Summary */
  .summary-box {
    background: var(--navy-light);
    border-left: 3px solid var(--navy);
    border-radius: 0 5px 5px 0;
    padding: 8px 12px;
  }
  .summary-box p {
    font-size: 9.8px;
    line-height: 1.65;
    color: var(--ink);
  }
  .summary-box strong { color: var(--navy); font-weight: 700; }

  /* Experience */
  .exp-item { margin-bottom: 8px; }
  .exp-item:last-child { margin-bottom: 0; }

  .exp-top {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 6px;
    margin-bottom: 1px;
  }
  .exp-title {
    font-size: 11px;
    font-weight: 700;
    color: var(--black);
    line-height: 1.3;
  }
  .exp-date {
    font-size: 8.5px;
    color: var(--navy);
    background: var(--sky-light);
    border: 1px solid var(--sky);
    border-radius: 20px;
    padding: 1px 7px;
    white-space: nowrap;
    font-weight: 600;
    flex-shrink: 0;
    margin-top: 1px;
  }
  .exp-org {
    font-size: 9.5px;
    color: var(--navy-mid);
    font-weight: 600;
    margin-bottom: 4px;
  }
  .exp-org span { color: var(--muted); font-weight: 400; font-size: 9px; }

  .exp-bullets { list-style: none; display: flex; flex-direction: column; gap: 2.5px; }
  .exp-bullets li {
    font-size: 9.3px;
    color: var(--body);
    padding-left: 11px;
    position: relative;
    line-height: 1.45;
  }
  .exp-bullets li::before {
    content: '';
    position: absolute; left: 0; top: 6px;
    width: 4px; height: 4px;
    background: var(--sky);
    border-radius: 50%;
    border: 1px solid #0284C7;
  }
  .exp-bullets li strong { color: var(--navy); font-weight: 600; }

  /* Projects grid */
  .projects-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 7px;
  }
  .project-card {
    border: 1.5px solid var(--rule);
    border-radius: 6px;
    padding: 6px 10px;
    position: relative;
    overflow: hidden;
    background: var(--white);
  }
  .project-card::before {
    content: '';
    position: absolute; top: 0; left: 0;
    width: 100%; height: 3px;
    background: var(--navy);
  }
  /* Alternate highlight colour on 2nd and 4th card */
  .project-card.hl-sky::before { background: var(--sky); }

  .project-name {
    font-size: 10px;
    font-weight: 700;
    color: var(--navy);
    margin-bottom: 2px;
    margin-top: 2px;
  }
  .project-stack {
    font-size: 8px;
    color: #0369A1;
    font-weight: 600;
    letter-spacing: .2px;
    margin-bottom: 3px;
    background: var(--sky-light);
    display: inline-block;
    padding: 1px 5px;
    border-radius: 3px;
  }
  .project-desc {
    font-size: 8.8px;
    color: var(--body);
    line-height: 1.4;
  }

  /* Education */
  .edu-block {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    background: var(--yellow-bg);
    border: 1.5px solid #F0D000;
    border-left: 4px solid var(--yellow);
    border-radius: 5px;
    padding: 8px 12px;
  }
  .edu-degree {
    font-size: 11.5px;
    font-weight: 700;
    color: var(--navy);
    margin-bottom: 3px;
  }
  .edu-uni {
    font-size: 10px;
    color: var(--body);
    margin-bottom: 2px;
  }
  .edu-focus {
    font-size: 9px;
    color: var(--muted);
    font-style: italic;
  }
  .edu-badge {
    font-size: 9px;
    font-weight: 700;
    color: var(--white);
    background: var(--navy);
    border-radius: 20px;
    padding: 4px 12px;
    white-space: nowrap;
    flex-shrink: 0;
  }

`;

export default function ResumePage() {
  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=DM+Serif+Display:ital@0;1&display=swap" rel="stylesheet" />
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      <div className="page">
        {/* ═══════════ SIDEBAR ═══════════ */}
        <aside className="sidebar">
          <div className="avatar-wrap">
            <div className="avatar">
              SI
            </div>
          </div>
          <div className="s-name">
            <h1>
              Saobia
              <br />
              Islam
            </h1>
            <p className="s-role">
              Full-Stack Developer
            </p>
          </div>
          <div className="s-divider"></div>
          {/* Contact */}
          <div>
            <p className="s-section-title">
              Contact
            </p>
            <ul className="contact-list">
              <li>
                <div className="c-icon">
                  <svg viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                </div>
                <a href="mailto:islamsaobia@gmail.com">
                  islamsaobia@gmail.com
                </a>
              </li>
              <li>
                <div className="c-icon">
                  <svg viewBox="0 0 24 24">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"></path>
                  </svg>
                </div>
                <a href="https://github.com/Saobia3i" target="_blank" rel="noopener noreferrer">
                  github.com/Saobia3i
                </a>
              </li>
              <li>
                <div className="c-icon">
                  <svg viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                  </svg>
                </div>
                <a href="https://linkedin.com/in/saobia-islam-1b173b284" target="_blank" rel="noopener noreferrer">
                  LinkedIn Profile
                </a>
              </li>
              <li>
                <div className="c-icon">
                  <svg viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16A8 8 0 0010 2zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <a href="https://islamsaobia.vercel.app" target="_blank" rel="noopener noreferrer">
                  islamsaobia.vercel.app
                </a>
              </li>
              <li>
                <div className="c-icon">
                  <svg viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <span>
                  Dhaka, Bangladesh
                </span>
              </li>
            </ul>
          </div>
          <div className="s-divider"></div>
          {/* Tech Stack */}
          <div>
            <p className="s-section-title">
              Tech Stack
            </p>
            <div className="skill-group">
              <p className="skill-group-label">
                Frontend & UI
              </p>
              <div className="skill-tags">
                <span className="skill-tag hl">
                  React.js
                </span>
                <span className="skill-tag hl">
                  Next.js
                </span>
                <span className="skill-tag hl">
                  TypeScript
                </span>
                <span className="skill-tag">
                  JavaScript
                </span>
                <span className="skill-tag hl">
                  Tailwind CSS
                </span>
                <span className="skill-tag">
                  Shadcn
                </span>
                <span className="skill-tag">
                  MUI
                </span>
                <span className="skill-tag">
                  Ant Design
                </span>
                <span className="skill-tag">
                  Bootstrap
                </span>
                <span className="skill-tag">
                  Framer Motion
                </span>
              </div>
            </div>
            <div className="skill-group">
              <p className="skill-group-label">
                Backend
              </p>
              <div className="skill-tags">
                <span className="skill-tag hl">
                  Node.js
                </span>
                <span className="skill-tag hl">
                  Express.js
                </span>
                <span className="skill-tag">
                  Laravel
                </span>
                <span className="skill-tag hl">
                  .NET
                </span>
                <span className="skill-tag hl">
                  C#
                </span>
                <span className="skill-tag">
                  REST API
                </span>
                <span className="skill-tag">
                  Jinja2
                </span>
              </div>
            </div>
            <div className="skill-group">
              <p className="skill-group-label">
                Database & Cloud
              </p>
              <div className="skill-tags">
                <span className="skill-tag hl">
                  PostgreSQL
                </span>
                <span className="skill-tag hl">
                  MongoDB
                </span>
                <span className="skill-tag">
                  MySQL
                </span>
                <span className="skill-tag">
                  Firebase
                </span>
                <span className="skill-tag">
                  Docker
                </span>
                <span className="skill-tag hl">
                  Vercel
                </span>
                <span className="skill-tag">
                  Railway
                </span>
                <span className="skill-tag">
                  Git / GitHub CI/CD
                </span>
              </div>
            </div>
            <div className="skill-group">
              <p className="skill-group-label">
                Automation & AI
              </p>
              <div className="skill-tags">
                <span className="skill-tag hl">
                  n8n
                </span>
                <span className="skill-tag hl">
                  AI Integration
                </span>
                <span className="skill-tag">
                  Prompt Engineering
                </span>
              </div>
            </div>
            <div className="skill-group">
              <p className="skill-group-label">
                Tools
              </p>
              <div className="skill-tags">
                <span className="skill-tag">
                  Figma
                </span>
                <span className="skill-tag">
                  WordPress
                </span>
                <span className="skill-tag">
                  Google Sites
                </span>
                <span className="skill-tag">
                  Overleaf
                </span>
                <span className="skill-tag">
                  MS Office
                </span>
              </div>
            </div>
          </div>
          <div className="s-divider"></div>
          {/* Achievements */}
          <div>
            <p className="s-section-title">
              Achievements & Leadership
            </p>
            <ul className="cert-list">
              <li>
                Founding Panel Member &amp; Joint Secretary — AUST Cybersecurity and AI Club (AUSTCAIC)
              </li>
              <li>
                Former Director — Website Team, AUST Robotics Club (Term completed June 2024)
              </li>
              <li>
                Best Panel Member Award — Website Team, AUST Robotics Club
              </li>
              <li>
                Senior Sub Executive — Website Team, AUST Robotics Club
              </li>
              <li>
                Champion — Video Editing Course Certification
              </li>
              <li>
                Best House In-charge — Leadership Recognition Award
              </li>
              <li>
                Active open-source contributor tracked via WakaTime: wakatime.com/@Saobia
              </li>
            </ul>
          </div>
        </aside>
        {/* ═══════════ MAIN ═══════════ */}
        <main className="main">
          {/* Header */}
          <div className="main-header">
            <p className="label">
              Full-Stack Developer · MERN · Next.js · n8n · C#
            </p>
            <h2>
              Saobia Islam
            </h2>
            <p className="tagline">
              Building clean, scalable, and secure web applications — from architecture to production deployment.
            </p>
          </div>
          {/* Summary */}
          <div className="section">
            <div className="section-head">
              <div className="s-dot"></div>
              <h3>
                Professional Summary
              </h3>
            </div>
            <div className="summary-box">
              <p>
                Results-driven Full-Stack Developer and Computer Science student at
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
            </div>
          </div>
          {/* Experience */}
          <div className="section">
            <div className="section-head">
              <div className="s-dot"></div>
              <h3>
                Experience
              </h3>
            </div>
            {/* <div class="exp-item">
              <div class="exp-top">
                <span class="exp-title">Co-Founder &amp; CTO</span>
                <span class="exp-date">Aug 2026 – Present</span>
              </div>
              <div class="exp-org">Arelix Labs <span>· Early-Stage Venture · Dhaka / Remote</span></div>
              <ul class="exp-bullets">
                <li>Co-founded Arelix Labs in its initial startup phase — defining core technology vision, engineering standards, and product architecture for software and hardware solutions.</li>
                <li>Bootstrapping initial technical infrastructure across web, mobile, custom PCB design, embedded C/C++ RTOS firmware, and cloud telemetry integration.</li>
                <li>Leading early-stage R&amp;D and architectural strategy to bridge digital applications and physical hardware under a single engineering handoff.</li>
              </ul>
            </div> */}
            <div className="exp-item">
              <div className="exp-top">
                <span className="exp-title">
                  Solo Software Engineer
                </span>
                <span className="exp-date">
                  2025 – Present
                </span>
              </div>
              <div className="exp-org">
                Tensor Security Academy (TSA)
                {" "}
                <span>
                  · Remote
                </span>
              </div>
              <ul className="exp-bullets">
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
            <div className="exp-item">
              <div className="exp-top">
                <span className="exp-title">
                  Founding Panel Member &amp; Joint Secretary
                </span>
                <span className="exp-date">
                  2024 – Present
                </span>
              </div>
              <div className="exp-org">
                AUST Cybersecurity and AI Club (AUSTCAIC)
                {" "}
                <span>
                  · Dhaka, Bangladesh
                </span>
              </div>
              <ul className="exp-bullets">
                <li>
                  Founding panel member — co-built the club from scratch, establishing organizational structure, team monitoring, and operational guidelines.
                </li>
                <li>
                  Led cross-functional teams, monitored team deliverables, and directed overall club technical and digital strategy.
                </li>
                <li>
                  Engineered, debugged, and managed full-stack deployment and cloud hosting for the official website (
                  <strong>
                    austcaic.com
                  </strong>
                  ) and internal graphics tools.
                </li>
              </ul>
            </div>
            <div className="exp-item">
              <div className="exp-top">
                <span className="exp-title">
                  Frontend Developer (Project-Based)
                </span>
                <span className="exp-date">
                  2026 (Completed)
                </span>
              </div>
              <div className="exp-org">
                SSRN Transfer — US-Based Car Rental Company
                {" "}
                <span>
                  · Remote
                </span>
              </div>
              <ul className="exp-bullets">
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
            <div className="exp-item">
              <div className="exp-top">
                <span className="exp-title">
                  Director — Web &amp; App Development Team
                </span>
                <span className="exp-date">
                  2023 – June 2024
                </span>
              </div>
              <div className="exp-org">
                AUST Robotics Club
                {" "}
                <span>
                  · Dhaka, Bangladesh
                </span>
              </div>
              <ul className="exp-bullets">
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
                  event site (React.js, Shadcn, Aceternity UI) and Rover Challenge 2.0 site on tight event deadlines.
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
            <div className="exp-item">
              <div className="exp-top">
                <span className="exp-title">
                  IT Specialist (Volunteer)
                </span>
                <span className="exp-date">
                  2021 – 2022
                </span>
              </div>
              <div className="exp-org">
                Multiple Non-Profit Organizations
                {" "}
                <span>
                  · Bangladesh
                </span>
              </div>
              <ul className="exp-bullets">
                <li>
                  Delivered IT support, graphic design, and digital tooling solutions for student clubs and community organizations across multiple engagements.
                </li>
              </ul>
            </div>
          </div>
          {/* Projects */}
          <div className="section">
            <div className="section-head">
              <div className="s-dot"></div>
              <h3>
                Key Projects
              </h3>
            </div>
            <div className="projects-grid">
              <div className="project-card">
                <div className="project-name">
                  Tensor Security Academy
                </div>
                <div className="project-stack">
                  Next.js · n8n · PostgreSQL · Vercel · Hostinger
                </div>
                <div className="project-desc">
                  Full cybersecurity training platform covering service catalog, automated bookings, and database layers. Deployed to production.
                </div>
              </div>
              <div className="project-card hl-sky">
                <div className="project-name">
                  Arelix Labs — AI Platform
                </div>
                <div className="project-stack">
                  Next.js 16 · Prisma · PostgreSQL · Groq AI
                </div>
                <div className="project-desc">
                  Full-stack AI agency and software development platform with Prisma ORM, PostgreSQL, Groq AI SDK, and NextAuth.
                </div>
              </div>
              <div className="project-card hl-sky">
                <div className="project-name">
                  SSRN Transfer
                </div>
                <div className="project-stack">
                  Jinja2 · HTML5 · CSS3 · JS · Netlify
                </div>
                <div className="project-desc">
                  Frontend template engineering for US-based car rental platform ensuring fast, consistent user experience.
                </div>
              </div>
              <div className="project-card hl-sky">
                <div className="project-name">
                  AUST Robotics Club Website
                </div>
                <div className="project-stack">
                  React.js · Firebase · Aceternity UI
                </div>
                <div className="project-desc">
                  High-traffic club website for AUST Robotics Club. Delivered collaboratively and deployed on time for live visitor loads.
                </div>
              </div>
              <div className="project-card hl-sky">
                <div className="project-name">
                  AUST Rover Challenge (ARC) Portal
                </div>
                <div className="project-stack">
                  React.js · Node.js · Firebase · UCS Engine
                </div>
                <div className="project-desc">
                  Flagship national robotics competition platform with real-time leaderboards, live analytics, and automated certificate generation.
                </div>
              </div>
              <div className="project-card hl-sky">
                <div className="project-name">
                  AUSTCAIC Official Website
                </div>
                <div className="project-stack">
                  Deployment · Debugging · Hosting · Web Eng.
                </div>
                <div className="project-desc">
                  Official website for AUST Cybersecurity and AI Club (austcaic.com). Engineered full web deployment, debugging, and hosting setup.
                </div>
              </div>
              <div className="project-card hl-sky">
                <div className="project-name">
                  AUSTCAIC Poster Generator
                </div>
                <div className="project-stack">
                  Next.js 15 · Satori · Groq · Pinecone · Tailwind
                </div>
                <div className="project-desc">
                  Internal graphics tool generating 300 DPI print-ready posters with AI content assistance (Groq LLaMA 3.3) and Satori engine.
                </div>
              </div>
              <div className="project-card">
                <div className="project-name">
                  Lead Generation Capture System
                </div>
                <div className="project-stack">
                  n8n · Groq API · Slack · SMTP · Sheets
                </div>
                <div className="project-desc">
                  Full-stack capture with AI-powered qualification (Groq lead scoring), Slack alerts, sheets logging, and automated emails.
                </div>
              </div>
              <div className="project-card">
                <div className="project-name">
                  iCanteen — Smart Canteen
                </div>
                <div className="project-stack">
                  React.js · Laravel · MySQL · Tailwind
                </div>
                <div className="project-desc">
                  Online ordering, dynamic menu, and staff operations system. Demonstrates full CRUD, REST API, and DB modeling.
                </div>
              </div>
              <div className="project-card hl-sky">
                <div className="project-name">
                  Green Gadgets — E-Commerce
                </div>
                <div className="project-stack">
                  MERN Stack · MongoDB · Express.js
                </div>
                <div className="project-desc">
                  Collaborative eco-friendly marketplace with product catalogs, dynamic cart flows, and user authentication on MERN.
                </div>
              </div>
            </div>
          </div>
          {/* Education */}
          <div className="section">
            <div className="section-head">
              <div className="s-dot"></div>
              <h3>
                Education
              </h3>
            </div>
            <div className="edu-block">
              <div>
                <div className="edu-degree">
                  B.Sc. in Computer Science &amp; Engineering (CSE)
                </div>
                <div className="edu-uni">
                  Ahsanullah University of Science and Technology (AUST), Dhaka, Bangladesh
                </div>
                <div className="edu-focus">
                  Focus: Web Engineering · Cybersecurity · Database Systems · Software Architecture
                </div>
              </div>
              <div className="edu-badge">
                Currently Enrolled
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
