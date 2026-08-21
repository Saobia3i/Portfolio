"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Bot,
  Brain,
  Car,
  CircleCheck,
  Code,
  Code2,
  Eye,
  Hand,
  Heart,
  Leaf,
  Mail,
  Network,
  Palette,
  Quote,
  Rocket,
  Shield,
  ShoppingBag,
  Trophy,
  Users,
  Utensils,
  Zap,
} from "lucide-react";
import Nav from "../Nav";
import Reveal from "../Reveal";

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

function cardClassName(category: string, activeFilter: string) {
  const hidden = activeFilter !== "all" && activeFilter !== category;
  return hidden ? "is-hidden" : "";
}

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
          {/* ====== PROJECT 1: AI Sales Lead Agent ====== */}
          <Reveal as="article" className={cardClassName("ai", activeFilter)} data-category="ai" delayMs={0}>
            <div className="card-header-band"></div>
            <div className="card-body">
              <span className="project-badge badge-ai">
                <Bot size={13} />
                {" "}
                AI Agent
              </span>
              <h2 className="card-title">
                AI Sales Lead Research &amp; Outreach Agent
              </h2>
              <p className="card-subtitle">
                Multi-Agent · LangGraph · FastAPI · Next.js
              </p>
              <p className="card-desc">
                An advanced multi-agent AI system designed for B2B sales intelligence. Give it a company name or website URL, and it autonomously researches that company, synthesizes an intelligence profile, writes a highly personalized cold email — then runs a
                {" "}
                <strong>
                  strict fact-verification pass
                </strong>
                {" "}
                to guarantee zero hallucinations before delivering the final output.
              </p>
              <div className="highlight-panel">
                <strong>
                  The Problem Solved:
                </strong>
                {" "}
                Standard AI tools hallucinate freely — a false funding round or wrong HQ city in a cold email instantly destroys credibility. This agent enforces
                {" "}
                <em>
                  verification-before-synthesis
                </em>
                : every factual claim must be traceable to retrieved evidence, or it gets stripped automatically.
              </div>
              <ul className="feature-list">
                <li>
                  <CircleCheck />
                  Company Discovery Agent → Parallel Web Research (Overview, News, Tech/Pain-points)
                </li>
                <li>
                  <CircleCheck />
                  Evidence Relevance Filter removes off-topic chunks before synthesis
                </li>
                <li>
                  <CircleCheck />
                  LLM-powered Outreach Writer crafts personalized cold emails
                </li>
                <li>
                  <CircleCheck />
                  Verification Agent checks every claim — flags or strips unverifiable ones
                </li>
                <li>
                  <CircleCheck />
                  FastAPI + Pydantic strict schema validation; Docker-ready for Render
                </li>
              </ul>
              <div className="tech-tags">
                <span className="tech-tag">
                  LangGraph
                </span>
                <span className="tech-tag">
                  Python
                </span>
                <span className="tech-tag">
                  Groq LLaMA 3.3
                </span>
                <span className="tech-tag">
                  DuckDuckGo Search
                </span>
                <span className="tech-tag">
                  FastAPI
                </span>
                <span className="tech-tag">
                  Next.js
                </span>
                <span className="tech-tag">
                  TypeScript
                </span>
                <span className="tech-tag">
                  TailwindCSS
                </span>
                <span className="tech-tag">
                  Docker
                </span>
                <span className="tech-tag">
                  Vercel
                </span>
              </div>
            </div>
            <div className="card-actions">
              <a href="https://github.com/Saobia3i/AI-Sales-Lead-Research-Outreach-Agent" target="_blank" rel="noopener noreferrer" className="project-btn btn-github">
                <Code size={17} />
                {" "}
                GitHub
              </a>
            </div>
          </Reveal>
          {/* ====== PROJECT 2: SmartAir Mouse Pro ====== */}
          <Reveal as="article" className={cardClassName("cv", activeFilter)} data-category="cv" delayMs={80}>
            <div className="card-header-band"></div>
            <div className="card-body">
              <span className="project-badge badge-cv">
                <Hand size={13} />
                {" "}
                Computer Vision
              </span>
              <h2 className="card-title">
                SmartAir Mouse Pro
              </h2>
              <p className="card-subtitle">
                OpenCV · MediaPipe · Python · Windows Overlay
              </p>
              <p className="card-desc">
                A portfolio-grade computer vision application that turns bare hand gestures into a lag-free virtual mouse using classical computer vision — no wearables required. Features a stunning transparent desktop overlay with glowing neon cursor trails, click-physics particle explosions, a real-time HUD, and an integrated Gradio browser sandbox for live prototyping.
              </p>
              <ul className="feature-list">
                <li>
                  <CircleCheck />
                  Custom 2D Kalman Filter + EMA smoothing + velocity-scaling acceleration
                </li>
                <li>
                  <CircleCheck />
                  AR transparent overlay: neon halo rings, fading trails, click ripples &amp; particles
                </li>
                <li>
                  <CircleCheck />
                  Hysteresis &amp; stabilized gesture recognition — prevents stutter clicking
                </li>
                <li>
                  <CircleCheck />
                  Guided calibration wizard for user-specific finger ratios &amp; arm reach
                </li>
                <li>
                  <CircleCheck />
                  Live session stats dashboard: clicks, distance, FPS, tracking confidence
                </li>
                <li>
                  <CircleCheck />
                  Programmatic WAV sound synthesis for async click audio feedback
                </li>
              </ul>
              <div className="tech-tags">
                <span className="tech-tag">
                  Python 3.11+
                </span>
                <span className="tech-tag">
                  OpenCV
                </span>
                <span className="tech-tag">
                  MediaPipe
                </span>
                <span className="tech-tag">
                  Kalman Filter
                </span>
                <span className="tech-tag">
                  CustomTkinter
                </span>
                <span className="tech-tag">
                  Gradio
                </span>
                <span className="tech-tag">
                  pynput
                </span>
                <span className="tech-tag">
                  pyautogui
                </span>
                <span className="tech-tag">
                  Windows
                </span>
              </div>
            </div>
            <div className="card-actions">
              <a href="https://github.com/Saobia3i/SmartAir-Mouse-Pro" target="_blank" rel="noopener noreferrer" className="project-btn btn-github">
                <Code size={17} />
                {" "}
                GitHub
              </a>
            </div>
          </Reveal>
          {/* ====== PROJECT 3: My Cutie Mood Mirror ====== */}
          <Reveal as="article" className={cardClassName("fun", activeFilter)} data-category="fun" delayMs={160}>
            <div className="card-header-band"></div>
            <div className="card-body">
              <span className="project-badge badge-fun">
                <Heart size={13} />
                {" "}
                Fun / Creative
              </span>
              <h2 className="card-title">
                My Cutie Mood Mirror
              </h2>
              <p className="card-subtitle">
                Emotion Detection · Real-Time Camera · Interactive UI
              </p>
              <p className="card-desc">
                A charming real-time mood detection application that uses your webcam to recognize facial expressions and instantly reflects your emotional state as a fun, animated visual &quot;mirror.&quot; Built as a delightful blend of computer vision and interactive UI design, it maps detected emotions to cute characters and dynamic visual feedback — making sentiment analysis feel playful and personal.
              </p>
              <ul className="feature-list">
                <li>
                  <CircleCheck />
                  Real-time webcam facial expression recognition
                </li>
                <li>
                  <CircleCheck />
                  Maps detected emotions to animated visual representations
                </li>
                <li>
                  <CircleCheck />
                  Smooth, responsive UI with dynamic color-coded mood feedback
                </li>
                <li>
                  <CircleCheck />
                  Interactive and engaging — designed to feel personal and fun
                </li>
              </ul>
              <div className="tech-tags">
                <span className="tech-tag">
                  Python
                </span>
                <span className="tech-tag">
                  Computer Vision
                </span>
                <span className="tech-tag">
                  Emotion Detection
                </span>
                <span className="tech-tag">
                  Real-time
                </span>
                <span className="tech-tag">
                  Interactive UI
                </span>
              </div>
            </div>
            <div className="card-actions">
              <a href="https://github.com/Saobia3i/my-cutie-mood-mirror" target="_blank" rel="noopener noreferrer" className="project-btn btn-github">
                <Code size={17} />
                {" "}
                GitHub
              </a>
            </div>
          </Reveal>
          {/* ====== PROJECT 4: ResearchMind ====== */}
          <Reveal as="article" className={cardClassName("ai", activeFilter)} data-category="ai" delayMs={0}>
            <div className="card-header-band"></div>
            <div className="card-body">
              <span className="project-badge badge-ai">
                <Brain size={13} />
                {" "}
                AI Research
              </span>
              <h2 className="card-title">
                ResearchMind
              </h2>
              <p className="card-subtitle">
                Multi-Model · LangGraph · Pinecone · Deep Consensus
              </p>
              <p className="card-desc">
                A full-stack AI research system that goes beyond &quot;showing sources.&quot; ResearchMind makes the research process fully inspectable: what evidence was retrieved, which model produced which opinion, which claims were verified, where confidence is weak, and exactly how much each run costs. It combats AI hallucination at the architectural level.
              </p>
              <div className="highlight-panel">
                <strong>
                  4 Research Modes:
                </strong>
                {" "}
                Quick Research (fast structured output) · ReAct Agent (Thought→Action→Observation tool-using loop) · Team Research (LangGraph Planner→Researcher→Grader→Writer) ·
                {" "}
                <strong>
                  Deep Consensus
                </strong>
                {" "}
                (cost-aware multi-model cross-verification with disagreement mapping).
              </div>
              <ul className="feature-list">
                <li>
                  <CircleCheck />
                  Claim-level verification: strong / partial / weak / unsupported labels per claim
                </li>
                <li>
                  <CircleCheck />
                  Multi-model consensus: Gemini, Groq, OpenRouter compared side-by-side
                </li>
                <li>
                  <CircleCheck />
                  Model disagreement map — flags where providers conflict
                </li>
                <li>
                  <CircleCheck />
                  Live token &amp; cost tracking with stage-level prompt budgets
                </li>
                <li>
                  <CircleCheck />
                  Pinecone vector KB + DuckDuckGo web search tools for grounded retrieval
                </li>
                <li>
                  <CircleCheck />
                  Evidence deduplication, prompt compaction, early-stop provider routing
                </li>
              </ul>
              <div className="tech-tags">
                <span className="tech-tag">
                  LangGraph
                </span>
                <span className="tech-tag">
                  Python
                </span>
                <span className="tech-tag">
                  Groq
                </span>
                <span className="tech-tag">
                  Gemini
                </span>
                <span className="tech-tag">
                  OpenRouter
                </span>
                <span className="tech-tag">
                  Pinecone
                </span>
                <span className="tech-tag">
                  DuckDuckGo Search
                </span>
                <span className="tech-tag">
                  FastAPI
                </span>
                <span className="tech-tag">
                  Full Stack
                </span>
              </div>
            </div>
            <div className="card-actions">
              <a href="https://github.com/Saobia3i/researchMind" target="_blank" rel="noopener noreferrer" className="project-btn btn-github">
                <Code size={17} />
                {" "}
                GitHub
              </a>
            </div>
          </Reveal>
          {/* ====== PROJECT 5: WattWatch ====== */}
          <Reveal as="article" className={cardClassName("iot", activeFilter)} data-category="iot" delayMs={80}>
            <div className="card-header-band"></div>
            <div className="card-body">
              <span className="project-badge badge-iot">
                <Zap size={13} />
                {" "}
                IoT · Digital Twin
              </span>
              <h2 className="card-title">
                WattWatch
              </h2>
              <p className="card-subtitle">
                Real-Time IoT Digital Twin &amp; AI-Powered Smart Office Console
              </p>
              <p className="card-desc">
                A production-ready, event-driven digital twin for monitoring, analyzing, and optimizing office electrical consumption. Any team member can view live device states, track energy draw in Watts &amp; kWh, receive anomaly alerts, and query office telemetry directly from
                {" "}
                <strong>
                  Discord
                </strong>
                {" "}
                in natural language — all without a page refresh. Live demo available.
              </p>
              <div className="highlight-panel">
                <strong>
                  Live:
                </strong>
                <a href="https://wattwatch-f099.onrender.com" target="_blank" rel="noopener noreferrer" style={{ color: "var(--secondary)" }}>
                  wattwatch-f099.onrender.com
                </a>
                {" "}
                &nbsp;|&nbsp;
                {" "}
                <a href="https://watt-watch-chi.vercel.app" target="_blank" rel="noopener noreferrer" style={{ color: "var(--secondary)" }}>
                  Vercel Mirror
                </a>
                {" "}
                &nbsp;|&nbsp; Discord Bot:
                {" "}
                <em>
                  Smart Circuit Bot
                </em>
                {" "}
                (24/7 active)
              </div>
              <ul className="feature-list">
                <li>
                  <CircleCheck />
                  2D interactive office floorplan — active lights glow, fans animate with CSS keyframes
                </li>
                <li>
                  <CircleCheck />
                  Live device control for 15 devices across 3 rooms, writing instantly to SQLite
                </li>
                <li>
                  <CircleCheck />
                  HTTP SSE (Server-Sent Events) stream pushes updates to web dashboard &amp; Discord bot instantly
                </li>
                <li>
                  <CircleCheck />
                  Gemini 2.5 Flash / Groq LLM translates raw telemetry into conversational office reports
                </li>
                <li>
                  <CircleCheck />
                  Discord commands: !status, !usage, !room, !occupants — all AI-powered
                </li>
                <li>
                  <CircleCheck />
                  ESP32 hardware path: ACS712 current sensors + 5-channel relay modules for physical deployment
                </li>
              </ul>
              <div className="arch-steps">
                <div className="arch-step">
                  <div className="step-num">
                    1
                  </div>
                  <span>
                    Python simulator / ESP32 chips push telemetry to Next.js API endpoints
                  </span>
                </div>
                <div className="arch-step">
                  <div className="step-num">
                    2
                  </div>
                  <span>
                    API writes state updates to SQLite, triggering SSE broadcast
                  </span>
                </div>
                <div className="arch-step">
                  <div className="step-num">
                    3
                  </div>
                  <span>
                    React dashboard + Discord bot receive real-time events simultaneously
                  </span>
                </div>
                <div className="arch-step">
                  <div className="step-num">
                    4
                  </div>
                  <span>
                    LLM converts raw data → friendly conversational reports on demand
                  </span>
                </div>
              </div>
              <div className="tech-tags">
                <span className="tech-tag">
                  Next.js
                </span>
                <span className="tech-tag">
                  Python
                </span>
                <span className="tech-tag">
                  SQLite
                </span>
                <span className="tech-tag">
                  SSE
                </span>
                <span className="tech-tag">
                  Discord.py
                </span>
                <span className="tech-tag">
                  Gemini 2.5 Flash
                </span>
                <span className="tech-tag">
                  Groq
                </span>
                <span className="tech-tag">
                  ESP32
                </span>
                <span className="tech-tag">
                  ACS712
                </span>
                <span className="tech-tag">
                  Render
                </span>
                <span className="tech-tag">
                  Vercel
                </span>
              </div>
            </div>
            <div className="card-actions">
              <a href="https://wattwatch-f099.onrender.com" target="_blank" rel="noopener noreferrer" className="project-btn btn-live">
                <Eye size={17} />
                {" "}
                Live Demo
              </a>
              <a href="https://github.com/Saobia3i/WattWatch" target="_blank" rel="noopener noreferrer" className="project-btn btn-github">
                <Code size={17} />
                {" "}
                GitHub
              </a>
            </div>
          </Reveal>
          {/* ====== PROJECT 6: Tensor Security Academy (TSA) ====== */}
          <Reveal as="article" className={cardClassName("fullstack", activeFilter)} data-category="fullstack" delayMs={0}>
            <div className="card-header-band"></div>
            <div className="card-body">
              <span className="project-badge badge-full">
                <Shield size={13} />
                {" "}
                Full Stack
              </span>
              <h2 className="card-title">
                Tensor Security Academy (TSA)
              </h2>
              <p className="card-subtitle">
                Next.js · n8n Automation · PostgreSQL · Security Architecture
              </p>
              <p className="card-desc">
                Official production web platform built for Tensor Security Academy, focusing on high-performance scalability, strong security practices, and reliable data management.
              </p>
              <div className="highlight-panel">
                <strong>
                  Key Automation:
                </strong>
                {" "}
                Features n8n-powered service booking automation paired with PostgreSQL to handle customer registrations and schedule tasks securely and reliably.
              </div>
              <ul className="feature-list">
                <li>
                  <CircleCheck />
                  Independently built and maintained using Next.js with serverless API route endpoints
                </li>
                <li>
                  <CircleCheck />
                  n8n automation workflow orchestration for dynamic service booking and notifications
                </li>
                <li>
                  <CircleCheck />
                  PostgreSQL database implementation with optimized relational data integrity
                </li>
                <li>
                  <CircleCheck />
                  Secured forms and endpoints with production-ready best practices
                </li>
              </ul>
              <div className="tech-tags">
                <span className="tech-tag">
                  Next.js
                </span>
                <span className="tech-tag">
                  React
                </span>
                <span className="tech-tag">
                  n8n
                </span>
                <span className="tech-tag">
                  PostgreSQL
                </span>
                <span className="tech-tag">
                  Security
                </span>
                <span className="tech-tag">
                  Vercel
                </span>
              </div>
            </div>
            <div className="card-actions">
              <a href="https://www.tensorsecurityacademy.com/" target="_blank" rel="noopener noreferrer" className="project-btn btn-live">
                <Eye size={17} />
                {" "}
                Live Demo
              </a>
              <a href="https://github.com/Saobia3i/TSA1.1" target="_blank" rel="noopener noreferrer" className="project-btn btn-github">
                <Code size={17} />
                {" "}
                GitHub
              </a>
            </div>
          </Reveal>
          {/* ====== PROJECT 7: Arelix Labs ====== */}
          <Reveal as="article" className={cardClassName("fullstack", activeFilter)} data-category="fullstack" delayMs={80}>
            <div className="card-header-band"></div>
            <div className="card-body">
              <span className="project-badge badge-full">
                <Network size={13} />
                {" "}
                Full Stack &amp; AI
              </span>
              <h2 className="card-title">
                Arelix Labs — AI &amp; Software Platform
              </h2>
              <p className="card-subtitle">
                Next.js 16 · Prisma ORM · PostgreSQL · Groq AI SDK · NextAuth · Tailwind CSS
              </p>
              <p className="card-desc">
                Full-stack AI agency and software development platform. Engineered with Next.js App Router, Prisma ORM, PostgreSQL database layers, Groq AI SDK integrations, NextAuth authentication, and automated client service pipelines.
              </p>
              <div className="highlight-panel">
                <strong>
                  Architecture Highlights:
                </strong>
                {" "}
                Built on modern Next.js App Router architecture, featuring automated data migrations with Prisma, secure authentication via NextAuth, and AI workflow orchestration.
              </div>
              <ul className="feature-list">
                <li>
                  <CircleCheck />
                  <strong>
                    Next.js App Router:
                  </strong>
                  {" "}
                  Server components, server actions, and optimized route handlers.
                </li>
                <li>
                  <CircleCheck />
                  <strong>
                    Prisma + PostgreSQL:
                  </strong>
                  {" "}
                  Type-safe database schema modeling, migrations, and relational queries.
                </li>
                <li>
                  <CircleCheck />
                  <strong>
                    Groq AI Integration:
                  </strong>
                  {" "}
                  High-speed AI SDK pipelines for automated content generation and workflows.
                </li>
                <li>
                  <CircleCheck />
                  <strong>
                    NextAuth Security:
                  </strong>
                  {" "}
                  Enterprise authentication and role-based access controls.
                </li>
              </ul>
              <div className="tech-tags">
                <span className="tech-tag">
                  Next.js
                </span>
                <span className="tech-tag">
                  TypeScript
                </span>
                <span className="tech-tag">
                  Prisma
                </span>
                <span className="tech-tag">
                  PostgreSQL
                </span>
                <span className="tech-tag">
                  Groq AI
                </span>
                <span className="tech-tag">
                  NextAuth
                </span>
              </div>
            </div>
            <div className="card-actions">
              <a href="https://github.com/Saobia3i/Arelix-Labs" target="_blank" rel="noopener noreferrer" className="project-btn btn-github">
                <Code size={17} />
                {" "}
                GitHub
              </a>
            </div>
          </Reveal>
          {/* ====== PROJECT: SSRN Transfer ====== */}
          <Reveal as="article" className={cardClassName("fullstack", activeFilter)} data-category="fullstack" delayMs={100}>
            <div className="card-header-band"></div>
            <div className="card-body">
              <span className="project-badge badge-full">
                <Car size={13} />
                {" "}
                Frontend &amp; UI
              </span>
              <h2 className="card-title">
                SSRN Transfer — US Car Rental Platform
              </h2>
              <p className="card-subtitle">
                Jinja2 · HTML5 · CSS3 · JavaScript · Netlify
              </p>
              <p className="card-desc">
                Project-based frontend development for SSRN Transfer, a US-based car rental platform. Built and maintained fast, responsive interface templates using Jinja2 to ensure consistent user experiences and seamless booking navigation.
              </p>
              <div className="highlight-panel">
                <strong>
                  Client Work:
                </strong>
                {" "}
                Delivered custom frontend templates and layout components for a US-based client, optimized for mobile responsiveness and performance.
              </div>
              <ul className="feature-list">
                <li>
                  <CircleCheck />
                  <strong>
                    Jinja2 Templating:
                  </strong>
                  {" "}
                  Dynamic server-rendered UI layout structures.
                </li>
                <li>
                  <CircleCheck />
                  <strong>
                    Responsive Design:
                  </strong>
                  {" "}
                  Mobile-first UI layouts built for rental browsing.
                </li>
                <li>
                  <CircleCheck />
                  <strong>
                    Performance Optimized:
                  </strong>
                  {" "}
                  Lightweight markup ensuring fast load times.
                </li>
              </ul>
              <div className="tech-tags">
                <span className="tech-tag">
                  Jinja2
                </span>
                <span className="tech-tag">
                  HTML5
                </span>
                <span className="tech-tag">
                  CSS3
                </span>
                <span className="tech-tag">
                  JavaScript
                </span>
                <span className="tech-tag">
                  Netlify
                </span>
              </div>
            </div>
            <div className="card-actions">
              <a href="https://ssrn-app.netlify.app/" target="_blank" rel="noopener noreferrer" className="project-btn btn-live">
                <Eye size={17} />
                {" "}
                Live Demo
              </a>
            </div>
          </Reveal>
          {/* ====== PROJECT 8: Linear AI ====== */}
          <Reveal as="article" className={cardClassName("fullstack", activeFilter)} data-category="fullstack" delayMs={120}>
            <div className="card-header-band"></div>
            <div className="card-body">
              <span className="project-badge badge-full">
                <ShoppingBag size={13} />
                {" "}
                Full Stack
              </span>
              <h2 className="card-title">
                Linear AI — AI Automation Store
              </h2>
              <p className="card-subtitle">
                React.js · ASP.NET Core Web API · n8n · Render
              </p>
              <p className="card-desc">
                A full-stack automation commerce platform that facilitates product catalog browsing, admin-controlled discount offers, vouchers, order fulfillment, automated template delivery, product requests, and moderated user feedback.
              </p>
              <ul className="feature-list">
                <li>
                  <CircleCheck />
                  ASP.NET Core Web API backend orchestrating business operations, cart handling, and vouchers
                </li>
                <li>
                  <CircleCheck />
                  React frontend with clean, interactive state-driven interface elements
                </li>
                <li>
                  <CircleCheck />
                  n8n integration to automate the delivery of custom workflow templates to users
                </li>
                <li>
                  <CircleCheck />
                  Admin console allowing total control over products, user feedback approval, and orders
                </li>
              </ul>
              <div className="tech-tags">
                <span className="tech-tag">
                  React.js
                </span>
                <span className="tech-tag">
                  ASP.NET Core
                </span>
                <span className="tech-tag">
                  Web API
                </span>
                <span className="tech-tag">
                  n8n
                </span>
                <span className="tech-tag">
                  SQL Server
                </span>
                <span className="tech-tag">
                  Render
                </span>
              </div>
            </div>
            <div className="card-actions">
              <a href="https://linearai.onrender.com" target="_blank" rel="noopener noreferrer" className="project-btn btn-live">
                <Eye size={17} />
                {" "}
                Live Demo
              </a>
              <a href="https://github.com/Saobia3i/LinearAi_v1" target="_blank" rel="noopener noreferrer" className="project-btn btn-github">
                <Code size={17} />
                {" "}
                GitHub
              </a>
            </div>
          </Reveal>
          {/* ====== PROJECT 8: AUST RC Website ====== */}
          <Reveal as="article" className={cardClassName("fullstack", activeFilter)} data-category="fullstack" delayMs={160}>
            <div className="card-header-band"></div>
            <div className="card-body">
              <span className="project-badge badge-full">
                <Users size={13} />
                {" "}
                Full Stack
              </span>
              <h2 className="card-title">
                AUST Robotics Club Website
              </h2>
              <p className="card-subtitle">
                React · TypeScript · Vite · Firebase Suite
              </p>
              <p className="card-desc">
                As the Director of the Web Team, I led and coordinated the development team while actively coding and engineering the official web portal for the AUST Robotics Club (AUSTRC). I personally designed and implemented the core interactive features, security rules, and real-time content updates.
              </p>
              <div className="highlight-panel">
                <strong>
                  Key Features:
                </strong>
                {" "}
                Notice Board (searchable &amp; filterable announcements) · Comprehensive Events Tracker (workshop &amp; seminar records) · Educational Programs (learning directories &amp; skill courses) · Member Registrations &amp; Android App download link.
              </div>
              <ul className="feature-list">
                <li>
                  <CircleCheck />
                  <strong>
                    Notice Board:
                  </strong>
                  {" "}
                  Searchable &amp; filterable official club notices I coded and connected to Firestore.
                </li>
                <li>
                  <CircleCheck />
                  <strong>
                    Events Vault:
                  </strong>
                  {" "}
                  Live documented archive mapping previous seminar and workshop photo layouts.
                </li>
                <li>
                  <CircleCheck />
                  <strong>
                    Research &amp; Projects Showroom:
                  </strong>
                  {" "}
                  Showcase detailing member concept-to-prototype outcomes.
                </li>
                <li>
                  <CircleCheck />
                  <strong>
                    Governing Panel &amp; Hall of Fame:
                  </strong>
                  {" "}
                  Interactive semester leaderboards and alumni archives.
                </li>
                <li>
                  <CircleCheck />
                  <strong>
                    Smart Admin Panel:
                  </strong>
                  {" "}
                  Secure dashboard I implemented via Firebase Auth for real-time club management.
                </li>
              </ul>
              <div className="tech-tags">
                <span className="tech-tag">
                  React
                </span>
                <span className="tech-tag">
                  TypeScript
                </span>
                <span className="tech-tag">
                  Vite
                </span>
                <span className="tech-tag">
                  Firebase Firestore
                </span>
                <span className="tech-tag">
                  Firebase Auth
                </span>
                <span className="tech-tag">
                  ImageKit CDN
                </span>
              </div>
            </div>
            <div className="card-actions">
              <a href="https://www.austrc.com/" target="_blank" rel="noopener noreferrer" className="project-btn btn-live">
                <Eye size={17} />
                {" "}
                Live Demo
              </a>
            </div>
          </Reveal>
          {/* ====== NEW PROJECT: AUST Rover Challenge (ARC) Portal (powered by UCS) ====== */}
          <Reveal as="article" className={cardClassName("fullstack", activeFilter)} data-category="fullstack" delayMs={200}>
            <div className="card-header-band"></div>
            <div className="card-body">
              <span className="project-badge badge-full">
                <Rocket size={13} />
                {" "}
                Event Portal
              </span>
              <h2 className="card-title">
                AUST Rover Challenge (ARC) Portal
              </h2>
              <p className="card-subtitle">
                React · TypeScript · Node.js · Firebase · Tailwind CSS
              </p>
              <p className="card-desc">
                The official national event management platform built for the prestigious AUST Rover Challenge (ARC) — a national championship encompassing LFR, Soccer Bot, Rover Run, and Hackathons. I served as Director of the Web Team and Lead Developer, managing the project lifecycle, directing the team, and personally coding critical systems driven by our custom Universal Competition System (UCS) engine.
              </p>
              <div className="highlight-panel" style={{ background: "rgba(var(--primary-rgb), 0.04)", borderColor: "var(--secondary)" }}>
                <strong>
                  Tech Specs (Robust Data Architecture):
                </strong>
                {" "}
                Secure Admin Controls with granular permission systems · Scalable databases handling thousands of concurrent users · Real-time Synchronization across all portals · Automated workflows for registration and certification.
              </div>
              <div className="highlight-panel" style={{ background: "rgba(var(--secondary-rgb), 0.05)", borderColor: "rgba(var(--secondary-rgb), 0.3)" }}>
                <strong>
                  The Student Advantage:
                </strong>
                {" "}
                🎓
                {" "}
                <em>
                  Instant Certification:
                </em>
                {" "}
                Get digital credentials the moment you win · 🏆
                {" "}
                <em>
                  Live Rankings:
                </em>
                {" "}
                Live national standings for competitors · 📚
                {" "}
                <em>
                  Resource Vault:
                </em>
                {" "}
                Premium robotics research and CAD models.
              </div>
              <ul className="feature-list">
                <li>
                  <CircleCheck />
                  <strong>
                    Live Analytics Dashboard:
                  </strong>
                  {" "}
                  Real-time overview of registrations, active segments, and user trends.
                </li>
                <li>
                  <CircleCheck />
                  <strong>
                    Real-Time Leaderboard:
                  </strong>
                  {" "}
                  Dynamic system ranking active teams automatically during matches.
                </li>
                <li>
                  <CircleCheck />
                  <strong>
                    Dynamic Segments:
                  </strong>
                  {" "}
                  Hassle-free registration pipelines for LFR, Soccer Bot, Project Showcases, and Hackathons.
                </li>
                <li>
                  <CircleCheck />
                  <strong>
                    Automated Certificate Generation:
                  </strong>
                  {" "}
                  Instant, verifiable digital certificates programmatically generated at runtime.
                </li>
                <li>
                  <CircleCheck />
                  <strong>
                    Admin Command Center:
                  </strong>
                  {" "}
                  Secure management backend for real-time registrations and scoring updates.
                </li>
              </ul>
              <div className="tech-tags">
                <span className="tech-tag">
                  React
                </span>
                <span className="tech-tag">
                  TypeScript
                </span>
                <span className="tech-tag">
                  Node.js
                </span>
                <span className="tech-tag">
                  Firebase Firestore
                </span>
                <span className="tech-tag">
                  Firebase Auth
                </span>
                <span className="tech-tag">
                  Tailwind CSS
                </span>
                <span className="tech-tag">
                  UCS Engine
                </span>
                <span className="tech-tag">
                  Admin Panel
                </span>
              </div>
            </div>
            <div className="card-actions">
              <a href="https://arc.austrc.com/aust-rover-challenge-2-0/" target="_blank" rel="noopener noreferrer" className="project-btn btn-live">
                <Eye size={17} />
                {" "}
                Live Demo
              </a>
            </div>
          </Reveal>
          {/* ====== PROJECT: AUSTCAIC Official Website ====== */}
          <Reveal as="article" className={cardClassName("fullstack", activeFilter)} data-category="fullstack" delayMs={240}>
            <div className="card-header-band"></div>
            <div className="card-body">
              <span className="project-badge badge-full">
                <Shield size={13} />
                {" "}
                Full Stack &amp; DevOps
              </span>
              <h2 className="card-title">
                AUSTCAIC Official Website
              </h2>
              <p className="card-subtitle">
                Deployment · Debugging · Hosting · Web Infrastructure
              </p>
              <p className="card-desc">
                Official website for the AUST Cybersecurity and AI Club (AUSTCAIC). As Joint Secretary, I spearheaded technical operations, managing end-to-end web deployment, server setup, live debugging, and cloud hosting infrastructure for austcaic.com.
              </p>
              <div className="highlight-panel">
                <strong>
                  Key Responsibilities:
                </strong>
                {" "}
                Primary focus on deployment pipelines, server hosting configurations, domain &amp; SSL setup, live environment debugging, and runtime performance optimization.
              </div>
              <ul className="feature-list">
                <li>
                  <CircleCheck />
                  <strong>
                    Deployment Pipeline:
                  </strong>
                  {" "}
                  Configured and executed production deployment routines for high reliability.
                </li>
                <li>
                  <CircleCheck />
                  <strong>
                    Hosting &amp; Server Setup:
                  </strong>
                  {" "}
                  Managed DNS records, SSL certificates, and hosting environment configuration.
                </li>
                <li>
                  <CircleCheck />
                  <strong>
                    Live Debugging &amp; Maintenance:
                  </strong>
                  {" "}
                  Diagnosed and fixed runtime script, routing, and styling issues across devices.
                </li>
                <li>
                  <CircleCheck />
                  <strong>
                    Performance &amp; Uptime:
                  </strong>
                  {" "}
                  Monitored site speed, image optimization, and server uptime for the live club portal.
                </li>
              </ul>
              <div className="tech-tags">
                <span className="tech-tag">
                  Web Deployment
                </span>
                <span className="tech-tag">
                  Hosting &amp; DNS
                </span>
                <span className="tech-tag">
                  Live Debugging
                </span>
                <span className="tech-tag">
                  Web Infrastructure
                </span>
                <span className="tech-tag">
                  Cybersecurity &amp; AI
                </span>
              </div>
            </div>
            <div className="card-actions">
              <a href="https://austcaic.com/" target="_blank" rel="noopener noreferrer" className="project-btn btn-live">
                <Eye size={17} />
                {" "}
                Live Demo
              </a>
            </div>
          </Reveal>
          {/* ====== PROJECT: AUSTCAIC Poster Generator ====== */}
          <Reveal as="article" className={cardClassName("fullstack", activeFilter)} data-category="fullstack" delayMs={280}>
            <div className="card-header-band"></div>
            <div className="card-body">
              <span className="project-badge badge-full">
                <Palette size={13} />
                {" "}
                Internal Graphics &amp; AI Tool
              </span>
              <h2 className="card-title">
                AUSTCAIC Poster Generator 🎨⚡
              </h2>
              <p className="card-subtitle">
                Next.js 15 · React 19 · Satori + @resvg/resvg-js · Groq LLaMA 3.3 · Pinecone · Tailwind CSS v4
              </p>
              <p className="card-desc">
                Internal graphics web app engineered for the AUSTCAIC Graphics Team. Enables instant generation of 300 DPI print-ready PNG posters and social media banners adhering strictly to fixed brand guidelines — eliminating the need for design software. Powered by Satori &amp; resvg-js rendering engines and augmented with AI content assistance via Groq SDK and Pinecone.
              </p>
              <div className="highlight-panel">
                <strong>
                  Core Automation &amp; AI:
                </strong>
                {" "}
                Features an AI Quick Notes assistant powered by Groq LLaMA 3.3 and Pinecone vector search that auto-generates headlines, subtitles, bullet lists, icon badges, and agenda tables directly from raw notes.
              </div>
              <ul className="feature-list">
                <li>
                  <CircleCheck />
                  <strong>
                    300 DPI Print-Ready PNG Exports:
                  </strong>
                  {" "}
                  Generates high-resolution exports across standard presets (5x8 Poster, A4 Portrait, 5x2 Banner, FB/IG Post &amp; Story, or Custom dimensions).
                </li>
                <li>
                  <CircleCheck />
                  <strong>
                    Instant Live Preview:
                  </strong>
                  {" "}
                  CSS-based live canvas rendering updates in real time with zero latency.
                </li>
                <li>
                  <CircleCheck />
                  <strong>
                    1000+ Searchable Lucide Badges:
                  </strong>
                  {" "}
                  Search and place icons with custom canvas X/Y coordinates and scaling controls.
                </li>
                <li>
                  <CircleCheck />
                  <strong>
                    Dynamic Layout &amp; Reordering:
                  </strong>
                  {" "}
                  Drag-and-drop or button reordering for text, tables, bullet lists, badges, QR codes, and framed images.
                </li>
                <li>
                  <CircleCheck />
                  <strong>
                    Interactive Table &amp; List Builders:
                  </strong>
                  {" "}
                  Multi-column layouts, custom bullet icons, and event agenda tables with density auto-scaling.
                </li>
                <li>
                  <CircleCheck />
                  <strong>
                    Framed Image Uploads:
                  </strong>
                  {" "}
                  Position images with Circle, Square, Rectangle, or Borderless frames using a 9-point alignment grid.
                </li>
              </ul>
              <div className="tech-tags">
                <span className="tech-tag">
                  Next.js 15
                </span>
                <span className="tech-tag">
                  React 19
                </span>
                <span className="tech-tag">
                  TypeScript
                </span>
                <span className="tech-tag">
                  Tailwind CSS v4
                </span>
                <span className="tech-tag">
                  Satori
                </span>
                <span className="tech-tag">
                  resvg-js
                </span>
                <span className="tech-tag">
                  Groq LLaMA 3.3
                </span>
                <span className="tech-tag">
                  Pinecone
                </span>
                <span className="tech-tag">
                  Lucide React
                </span>
              </div>
            </div>
          </Reveal>
          {/* ====== NEW PROJECT: Lead Capture & AI-Qualification System ====== */}
          <Reveal as="article" className={cardClassName("fullstack", activeFilter)} data-category="fullstack" delayMs={80}>
            <div className="card-header-band"></div>
            <div className="card-body">
              <span className="project-badge badge-full">
                <Mail size={13} />
                {" "}
                Automation &amp; AI
              </span>
              <h2 className="card-title">
                Lead Capture &amp; AI-Qualification System
              </h2>
              <p className="card-subtitle">
                n8n · Groq LLaMA 3.3 · HTML/CSS · Slack · Google Sheets · Gmail SMTP
              </p>
              <p className="card-desc">
                Full-stack lead capture system with AI-powered qualification. Built responsive landing page integrated with n8n automation workflow featuring: webhook-triggered pipeline, Groq LLaMA 3.3 lead scoring (0-100, HOT/WARM/COLD classification), automated personalized email generation for qualified leads, Google Sheets CRM logging, and Slack real-time alerts. Deployed on Vercel.
              </p>
              <div className="highlight-panel">
                <strong>
                  AI Outreach &amp; Logging:
                </strong>
                {" "}
                Eliminated manual lead qualification, achieving less than 1-minute response time for hot prospects using a 100% free tech stack.
              </div>
              <ul className="feature-list">
                <li>
                  <CircleCheck />
                  <strong>
                    Webhook Pipeline:
                  </strong>
                  {" "}
                  n8n workflow triggered instantly upon landing page lead form submission.
                </li>
                <li>
                  <CircleCheck />
                  <strong>
                    Groq AI Scoring:
                  </strong>
                  {" "}
                  Groq LLaMA 3.3 scores and classifies leads based on custom business criteria.
                </li>
                <li>
                  <CircleCheck />
                  <strong>
                    Personalized SMTP:
                  </strong>
                  {" "}
                  Programmatically drafts and sends tailored follow-up emails to hot leads.
                </li>
                <li>
                  <CircleCheck />
                  <strong>
                    CRM Integration &amp; Alerts:
                  </strong>
                  {" "}
                  Logs all data to Google Sheets CRM and alerts sales reps in real-time via Slack.
                </li>
              </ul>
              <div className="tech-tags">
                <span className="tech-tag">
                  n8n
                </span>
                <span className="tech-tag">
                  Groq API
                </span>
                <span className="tech-tag">
                  LLaMA 3.3
                </span>
                <span className="tech-tag">
                  HTML5 / CSS3
                </span>
                <span className="tech-tag">
                  Slack API
                </span>
                <span className="tech-tag">
                  Google Sheets
                </span>
                <span className="tech-tag">
                  Gmail SMTP
                </span>
                <span className="tech-tag">
                  Vercel
                </span>
              </div>
            </div>
            <div className="card-actions">
              <a href="https://lead-generation1.vercel.app" target="_blank" rel="noopener noreferrer" className="project-btn btn-live">
                <Eye size={17} />
                {" "}
                Live Demo
              </a>
            </div>
          </Reveal>
          {/* ====== PROJECT 9: Robomania 2.0 ====== */}
          <Reveal as="article" className={cardClassName("fullstack", activeFilter)} data-category="fullstack" delayMs={0}>
            <div className="card-header-band"></div>
            <div className="card-body">
              <span className="project-badge badge-full">
                <Trophy size={13} />
                {" "}
                Full Stack
              </span>
              <h2 className="card-title">
                Robomania 2.0
              </h2>
              <p className="card-subtitle">
                React.js · Shadcn UI · Aceternity UI · Tailwind CSS
              </p>
              <p className="card-desc">
                Sleek event website for the AUST Robotics Club flagship national robotics competition, showcasing event paths, registration dashboards, schedules, and team collaborations.
              </p>
              <div className="highlight-panel">
                <strong>
                  Modern UI aesthetics:
                </strong>
                {" "}
                Built using React with Shadcn UI and Aceternity UI components to achieve a premium dark-themed layout, glowing grids, and micro-animations.
              </div>
              <ul className="feature-list">
                <li>
                  <CircleCheck />
                  Futuristic components featuring gradient text, motion reveals, and custom grids
                </li>
                <li>
                  <CircleCheck />
                  Seamless responsive layouts supporting high-traffic event access across devices
                </li>
                <li>
                  <CircleCheck />
                  Interactive competition scheduling and rules viewer
                </li>
              </ul>
              <div className="tech-tags">
                <span className="tech-tag">
                  React.js
                </span>
                <span className="tech-tag">
                  Shadcn UI
                </span>
                <span className="tech-tag">
                  Aceternity UI
                </span>
                <span className="tech-tag">
                  Tailwind CSS
                </span>
                <span className="tech-tag">
                  Framer Motion
                </span>
              </div>
            </div>
            <div className="card-actions">
              <a href="https://www.robomania.austrc.com/" target="_blank" rel="noopener noreferrer" className="project-btn btn-live">
                <Eye size={17} />
                {" "}
                Live Demo
              </a>
              <a href="https://github.com/Saobia3i/Robomania-2.0" target="_blank" rel="noopener noreferrer" className="project-btn btn-github">
                <Code size={17} />
                {" "}
                GitHub
              </a>
            </div>
          </Reveal>
          {/* ====== PROJECT 10: QuoteVerse ====== */}
          <Reveal as="article" className={cardClassName("fun", activeFilter)} data-category="fun" delayMs={80}>
            <div className="card-header-band"></div>
            <div className="card-body">
              <span className="project-badge badge-fun">
                <Quote size={13} />
                {" "}
                Creative
              </span>
              <h2 className="card-title">
                QuoteVerse
              </h2>
              <p className="card-subtitle">
                React.js · Ant Design · Material UI (MUI)
              </p>
              <p className="card-desc">
                A minimal, responsive quote generation application that fetches and delivers inspiring quotes, styled with sleek layout structures.
              </p>
              <ul className="feature-list">
                <li>
                  <CircleCheck />
                  Dynamic API fetches providing fresh quotes in real-time
                </li>
                <li>
                  <CircleCheck />
                  Clean, modern layout styled with UI packages (Ant Design &amp; Material UI)
                </li>
                <li>
                  <CircleCheck />
                  Fast, lightweight single-page application structure
                </li>
              </ul>
              <div className="tech-tags">
                <span className="tech-tag">
                  React.js
                </span>
                <span className="tech-tag">
                  Ant Design
                </span>
                <span className="tech-tag">
                  MUI
                </span>
                <span className="tech-tag">
                  REST API
                </span>
                <span className="tech-tag">
                  Vercel
                </span>
              </div>
            </div>
            <div className="card-actions">
              <a href="https://quote-verse-psi.vercel.app/" target="_blank" rel="noopener noreferrer" className="project-btn btn-live">
                <Eye size={17} />
                {" "}
                Live Demo
              </a>
              <a href="https://github.com/Saobia3i/Quote-Verse" target="_blank" rel="noopener noreferrer" className="project-btn btn-github">
                <Code size={17} />
                {" "}
                GitHub
              </a>
            </div>
          </Reveal>
          {/* ====== PROJECT 11: iCanteen ====== */}
          <Reveal as="article" className={cardClassName("fullstack", activeFilter)} data-category="fullstack" delayMs={160}>
            <div className="card-header-band"></div>
            <div className="card-body">
              <span className="project-badge badge-full">
                <Utensils size={13} />
                {" "}
                Full Stack
              </span>
              <h2 className="card-title">
                iCanteen — Smart Canteen
              </h2>
              <p className="card-subtitle">
                React.js · Laravel · MySQL · Tailwind CSS
              </p>
              <p className="card-desc">
                Full-stack canteen management system streamlining food ordering, real-time queueing, digital menu management, and operations for students and canteen staff.
              </p>
              <ul className="feature-list">
                <li>
                  <CircleCheck />
                  Laravel PHP backend offering secure and robust API handling
                </li>
                <li>
                  <CircleCheck />
                  MySQL database mapping canteen inventory, orders, and authentication
                </li>
                <li>
                  <CircleCheck />
                  Responsive React layout optimized with Tailwind CSS and Ant Design elements
                </li>
              </ul>
              <div className="tech-tags">
                <span className="tech-tag">
                  React.js
                </span>
                <span className="tech-tag">
                  Laravel
                </span>
                <span className="tech-tag">
                  PHP
                </span>
                <span className="tech-tag">
                  MySQL
                </span>
                <span className="tech-tag">
                  Tailwind CSS
                </span>
                <span className="tech-tag">
                  Ant Design
                </span>
              </div>
            </div>
            <div className="card-actions">
              <a href="https://i-canteen.vercel.app/" target="_blank" rel="noopener noreferrer" className="project-btn btn-live">
                <Eye size={17} />
                {" "}
                Live Demo
              </a>
              <a href="https://github.com/Saobia3i/iCanteen1" target="_blank" rel="noopener noreferrer" className="project-btn btn-github">
                <Code size={17} />
                {" "}
                GitHub
              </a>
            </div>
          </Reveal>
          {/* ====== PROJECT 12: CSE-3100 Assignment ====== */}
          <Reveal as="article" className={cardClassName("fun", activeFilter)} data-category="fun" delayMs={0}>
            <div className="card-header-band"></div>
            <div className="card-body">
              <span className="project-badge badge-fun">
                <Code2 size={13} />
                {" "}
                Creative
              </span>
              <h2 className="card-title">
                Frontend CSS &amp; JS Assignment (CSE-3100)
              </h2>
              <p className="card-subtitle">
                HTML5 · CSS3 · Vanilla JavaScript
              </p>
              <p className="card-desc">
                A clean frontend development project illustrating custom responsive layout architectures, animations, and interactivity using only pure HTML, CSS, and Vanilla JS.
              </p>
              <ul className="feature-list">
                <li>
                  <CircleCheck />
                  Fluid layouts styled without modern CSS frameworks
                </li>
                <li>
                  <CircleCheck />
                  Responsive grid configuration supporting multiple device screen viewports
                </li>
                <li>
                  <CircleCheck />
                  Simple DOM event handlers for navigation and state updates
                </li>
              </ul>
              <div className="tech-tags">
                <span className="tech-tag">
                  HTML5
                </span>
                <span className="tech-tag">
                  CSS3
                </span>
                <span className="tech-tag">
                  JavaScript
                </span>
                <span className="tech-tag">
                  Responsive UI
                </span>
              </div>
            </div>
            <div className="card-actions">
              <a href="https://github.com/Saobia3i/cse-3100" target="_blank" rel="noopener noreferrer" className="project-btn btn-github">
                <Code size={17} />
                {" "}
                GitHub
              </a>
            </div>
          </Reveal>
          {/* ====== PROJECT 13: Green Gadgets ====== */}
          <Reveal as="article" className={cardClassName("fullstack", activeFilter)} data-category="fullstack" delayMs={80}>
            <div className="card-header-band"></div>
            <div className="card-body">
              <span className="project-badge badge-full">
                <Leaf size={13} />
                {" "}
                Full Stack
              </span>
              <h2 className="card-title">
                Green Gadgets — Eco Marketplace
              </h2>
              <p className="card-subtitle">
                MERN Stack (MongoDB, Express, React, Node.js)
              </p>
              <p className="card-desc">
                Collaborative e-commerce portal showcasing eco-friendly gadgets, with shopping carts, search capabilities, and team coordination.
              </p>
              <ul className="feature-list">
                <li>
                  <CircleCheck />
                  Structured MERN platform built to handle catalog and shopping cart flows
                </li>
                <li>
                  <CircleCheck />
                  MongoDB integration holding relational-like schemas for green product details
                </li>
                <li>
                  <CircleCheck />
                  Collaborative development showcasing git branching strategies and workflows
                </li>
              </ul>
              <div className="tech-tags">
                <span className="tech-tag">
                  MERN Stack
                </span>
                <span className="tech-tag">
                  MongoDB
                </span>
                <span className="tech-tag">
                  Express.js
                </span>
                <span className="tech-tag">
                  React.js
                </span>
                <span className="tech-tag">
                  Node.js
                </span>
                <span className="tech-tag">
                  Bootstrap
                </span>
              </div>
            </div>
            <div className="card-actions">
              <a href="https://github.com/tahmidkhanshuvo/Green-Gadgets" target="_blank" rel="noopener noreferrer" className="project-btn btn-github">
                <Code size={17} />
                {" "}
                GitHub
              </a>
            </div>
          </Reveal>
        </div>
        {/* /projects-grid-full */}
      </main>
      <footer>
        <p>
          &copy; 2025 Saobia Islam Tinni. All rights reserved.
        </p>
        <p style={{ marginTop: "0.4rem", opacity: "0.6", fontSize: "0.82rem" }}>
          Built with passion and dedication to excellence.
        </p>
      </footer>
    </>
  );
}
