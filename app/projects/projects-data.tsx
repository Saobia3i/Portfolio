import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import {
  Bot,
  Brain,
  Car,
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
  Code2,
} from "lucide-react";

export type BadgeVariant = "badge-ai" | "badge-cv" | "badge-iot" | "badge-full" | "badge-fun";

export const PROJECT_BADGE_ICONS = {
  bot: Bot,
  hand: Hand,
  heart: Heart,
  brain: Brain,
  zap: Zap,
  shield: Shield,
  network: Network,
  car: Car,
  "shopping-bag": ShoppingBag,
  users: Users,
  rocket: Rocket,
  palette: Palette,
  mail: Mail,
  trophy: Trophy,
  quote: Quote,
  utensils: Utensils,
  code2: Code2,
  leaf: Leaf,
} as const satisfies Record<string, LucideIcon>;

export type ProjectBadgeIconKey = keyof typeof PROJECT_BADGE_ICONS;

export interface ProjectArchStep {
  num: number;
  text: ReactNode;
}

export interface ProjectAction {
  href: string;
  label: string;
  variant: "btn-live" | "btn-github";
  /** "live" -> Eye icon, "github" -> Code icon */
  icon: "live" | "github";
}

export interface ProjectData {
  id: string;
  category: "ai" | "cv" | "iot" | "fullstack" | "fun";
  delayMs: number;
  badgeVariant: BadgeVariant;
  badgeIcon: ProjectBadgeIconKey;
  badgeLabel: ReactNode;
  title: ReactNode;
  subtitle: ReactNode;
  desc: ReactNode;
  highlightPanels?: { style?: { background: string; borderColor: string }; content: ReactNode }[];
  features?: ReactNode[];
  archSteps?: ProjectArchStep[];
  tags: string[];
  actions?: ProjectAction[];
}

export const PROJECTS: ProjectData[] = [
  // ====== PROJECT 1: AI Sales Lead Agent ======
  {
    id: "ai-sales-agent",
    category: "ai",
    delayMs: 0,
    badgeVariant: "badge-ai",
    badgeIcon: "bot",
    badgeLabel: "AI Agent",
    title: "AI Sales Lead Research & Outreach Agent",
    subtitle: "Multi-Agent · LangGraph · FastAPI · Next.js",
    desc: (
      <>
        An advanced multi-agent AI system designed for B2B sales intelligence. Give it a company
        name or website URL, and it autonomously researches that company, synthesizes an
        intelligence profile, writes a highly personalized cold email — then runs a{" "}
        <strong>strict fact-verification pass</strong> to guarantee zero hallucinations before
        delivering the final output.
      </>
    ),
    highlightPanels: [
      {
        content: (
          <>
            <strong>The Problem Solved:</strong> Standard AI tools hallucinate freely — a false
            funding round or wrong HQ city in a cold email instantly destroys credibility. This
            agent enforces <em>verification-before-synthesis</em>: every factual claim must be
            traceable to retrieved evidence, or it gets stripped automatically.
          </>
        ),
      },
    ],
    features: [
      "Company Discovery Agent → Parallel Web Research (Overview, News, Tech/Pain-points)",
      "Evidence Relevance Filter removes off-topic chunks before synthesis",
      "LLM-powered Outreach Writer crafts personalized cold emails",
      "Verification Agent checks every claim — flags or strips unverifiable ones",
      "FastAPI + Pydantic strict schema validation; Docker-ready for Render",
    ],
    tags: [
      "LangGraph",
      "Python",
      "Groq LLaMA 3.3",
      "DuckDuckGo Search",
      "FastAPI",
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Docker",
      "Vercel",
    ],
    actions: [
      {
        href: "https://github.com/Saobia3i/AI-Sales-Lead-Research-Outreach-Agent",
        label: "GitHub",
        variant: "btn-github",
        icon: "github",
      },
    ],
  },
  // ====== PROJECT 2: SmartAir Mouse Pro ======
  {
    id: "smartair-mouse",
    category: "cv",
    delayMs: 80,
    badgeVariant: "badge-cv",
    badgeIcon: "hand",
    badgeLabel: "Computer Vision",
    title: "SmartAir Mouse Pro",
    subtitle: "OpenCV · MediaPipe · Python · Windows Overlay",
    desc: (
      <>
        A portfolio-grade computer vision application that turns bare hand gestures into a
        lag-free virtual mouse using classical computer vision — no wearables required. Features a
        stunning transparent desktop overlay with glowing neon cursor trails, click-physics
        particle explosions, a real-time HUD, and an integrated Gradio browser sandbox for live
        prototyping.
      </>
    ),
    features: [
      "Custom 2D Kalman Filter + EMA smoothing + velocity-scaling acceleration",
      <>AR transparent overlay: neon halo rings, fading trails, click ripples &amp; particles</>,
      <>Hysteresis &amp; stabilized gesture recognition — prevents stutter clicking</>,
      <>Guided calibration wizard for user-specific finger ratios &amp; arm reach</>,
      "Live session stats dashboard: clicks, distance, FPS, tracking confidence",
      "Programmatic WAV sound synthesis for async click audio feedback",
    ],
    tags: [
      "Python 3.11+",
      "OpenCV",
      "MediaPipe",
      "Kalman Filter",
      "CustomTkinter",
      "Gradio",
      "pynput",
      "pyautogui",
      "Windows",
    ],
    actions: [
      {
        href: "https://github.com/Saobia3i/SmartAir-Mouse-Pro",
        label: "GitHub",
        variant: "btn-github",
        icon: "github",
      },
    ],
  },
  // ====== PROJECT 3: My Cutie Mood Mirror ======
  {
    id: "mood-mirror",
    category: "fun",
    delayMs: 160,
    badgeVariant: "badge-fun",
    badgeIcon: "heart",
    badgeLabel: "Fun / Creative",
    title: "My Cutie Mood Mirror",
    subtitle: "Emotion Detection · Real-Time Camera · Interactive UI",
    desc: (
      <>
        A charming real-time mood detection application that uses your webcam to recognize facial
        expressions and instantly reflects your emotional state as a fun, animated visual
        &quot;mirror.&quot; Built as a delightful blend of computer vision and interactive UI
        design, it maps detected emotions to cute characters and dynamic visual feedback — making
        sentiment analysis feel playful and personal.
      </>
    ),
    features: [
      "Real-time webcam facial expression recognition",
      "Maps detected emotions to animated visual representations",
      "Smooth, responsive UI with dynamic color-coded mood feedback",
      "Interactive and engaging — designed to feel personal and fun",
    ],
    tags: ["Python", "Computer Vision", "Emotion Detection", "Real-time", "Interactive UI"],
    actions: [
      {
        href: "https://github.com/Saobia3i/my-cutie-mood-mirror",
        label: "GitHub",
        variant: "btn-github",
        icon: "github",
      },
    ],
  },
  // ====== PROJECT 4: ResearchMind ======
  {
    id: "researchmind",
    category: "ai",
    delayMs: 0,
    badgeVariant: "badge-ai",
    badgeIcon: "brain",
    badgeLabel: "AI Research",
    title: "ResearchMind",
    subtitle: "Multi-Model · LangGraph · Pinecone · Deep Consensus",
    desc: (
      <>
        A full-stack AI research system that goes beyond &quot;showing sources.&quot; ResearchMind
        makes the research process fully inspectable: what evidence was retrieved, which model
        produced which opinion, which claims were verified, where confidence is weak, and exactly
        how much each run costs. It combats AI hallucination at the architectural level.
      </>
    ),
    highlightPanels: [
      {
        content: (
          <>
            <strong>4 Research Modes:</strong> Quick Research (fast structured output) · ReAct
            Agent (Thought→Action→Observation tool-using loop) · Team Research (LangGraph
            Planner→Researcher→Grader→Writer) · <strong>Deep Consensus</strong> (cost-aware
            multi-model cross-verification with disagreement mapping).
          </>
        ),
      },
    ],
    features: [
      "Claim-level verification: strong / partial / weak / unsupported labels per claim",
      "Multi-model consensus: Gemini, Groq, OpenRouter compared side-by-side",
      "Model disagreement map — flags where providers conflict",
      <>Live token &amp; cost tracking with stage-level prompt budgets</>,
      "Pinecone vector KB + DuckDuckGo web search tools for grounded retrieval",
      "Evidence deduplication, prompt compaction, early-stop provider routing",
    ],
    tags: [
      "LangGraph",
      "Python",
      "Groq",
      "Gemini",
      "OpenRouter",
      "Pinecone",
      "DuckDuckGo Search",
      "FastAPI",
      "Full Stack",
    ],
    actions: [
      {
        href: "https://github.com/Saobia3i/researchMind",
        label: "GitHub",
        variant: "btn-github",
        icon: "github",
      },
    ],
  },
  // ====== PROJECT 5: WattWatch ======
  {
    id: "wattwatch",
    category: "iot",
    delayMs: 80,
    badgeVariant: "badge-iot",
    badgeIcon: "zap",
    badgeLabel: "IoT · Digital Twin",
    title: "WattWatch",
    subtitle: "Real-Time IoT Digital Twin & AI-Powered Smart Office Console",
    desc: (
      <>
        A production-ready, event-driven digital twin for monitoring, analyzing, and optimizing
        office electrical consumption. Any team member can view live device states, track energy
        draw in Watts &amp; kWh, receive anomaly alerts, and query office telemetry directly from{" "}
        <strong>Discord</strong> in natural language — all without a page refresh. View Live
        available.
      </>
    ),
    highlightPanels: [
      {
        content: (
          <>
            <strong>Live:</strong>
            <a
              href="https://wattwatch-f099.onrender.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--secondary)" }}
            >
              wattwatch-f099.onrender.com
            </a>{" "}
            &nbsp;|&nbsp;{" "}
            <a
              href="https://watt-watch-chi.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--secondary)" }}
            >
              Vercel Mirror
            </a>{" "}
            &nbsp;|&nbsp; Discord Bot: <em>Smart Circuit Bot</em> (24/7 active)
          </>
        ),
      },
    ],
    features: [
      "2D interactive office floorplan — active lights glow, fans animate with CSS keyframes",
      "Live device control for 15 devices across 3 rooms, writing instantly to SQLite",
      <>
        HTTP SSE (Server-Sent Events) stream pushes updates to web dashboard &amp; Discord bot
        instantly
      </>,
      "Gemini 2.5 Flash / Groq LLM translates raw telemetry into conversational office reports",
      "Discord commands: !status, !usage, !room, !occupants — all AI-powered",
      "ESP32 hardware path: ACS712 current sensors + 5-channel relay modules for physical deployment",
    ],
    archSteps: [
      { num: 1, text: "Python simulator / ESP32 chips push telemetry to Next.js API endpoints" },
      { num: 2, text: "API writes state updates to SQLite, triggering SSE broadcast" },
      { num: 3, text: "React dashboard + Discord bot receive real-time events simultaneously" },
      { num: 4, text: "LLM converts raw data → friendly conversational reports on demand" },
    ],
    tags: [
      "Next.js",
      "Python",
      "SQLite",
      "SSE",
      "Discord.py",
      "Gemini 2.5 Flash",
      "Groq",
      "ESP32",
      "ACS712",
      "Render",
      "Vercel",
    ],
    actions: [
      {
        href: "https://wattwatch-f099.onrender.com",
        label: "View Live",
        variant: "btn-live",
        icon: "live",
      },
      { href: "https://github.com/Saobia3i/WattWatch", label: "GitHub", variant: "btn-github", icon: "github" },
    ],
  },
  // ====== PROJECT 6: Tensor Security Academy (TSA) ======
  {
    id: "tsa",
    category: "fullstack",
    delayMs: 0,
    badgeVariant: "badge-full",
    badgeIcon: "shield",
    badgeLabel: "Full Stack",
    title: "Tensor Security Academy (TSA)",
    subtitle: "Next.js · n8n Automation · PostgreSQL · Security Architecture",
    desc: (
      <>
        Official production web platform built for Tensor Security Academy, focusing on
        high-performance scalability, strong security practices, and reliable data management.
      </>
    ),
    highlightPanels: [
      {
        content: (
          <>
            <strong>Key Automation:</strong> Features n8n-powered service booking automation
            paired with PostgreSQL to handle customer registrations and schedule tasks securely
            and reliably.
          </>
        ),
      },
    ],
    features: [
      "Independently built and maintained using Next.js with serverless API route endpoints",
      "n8n automation workflow orchestration for dynamic service booking and notifications",
      "PostgreSQL database implementation with optimized relational data integrity",
      "Secured forms and endpoints with production-ready best practices",
    ],
    tags: ["Next.js", "React", "n8n", "PostgreSQL", "Security", "Vercel"],
    actions: [
      {
        href: "https://www.tensorsecurityacademy.com/",
        label: "View Live",
        variant: "btn-live",
        icon: "live",
      },
    ],
  },
  // ====== PROJECT 7: Arelix Labs ======
  {
    id: "arelix-labs",
    category: "fullstack",
    delayMs: 80,
    badgeVariant: "badge-full",
    badgeIcon: "network",
    badgeLabel: <>Full Stack &amp; AI</>,
    title: <>Arelix Labs — AI &amp; Software Platform</>,
    subtitle: "Next.js 16 · Prisma ORM · PostgreSQL · Groq AI SDK · NextAuth · Tailwind CSS",
    desc: (
      <>
        Full-stack AI agency and software development platform. Engineered with Next.js App
        Router, Prisma ORM, PostgreSQL database layers, Groq AI SDK integrations, NextAuth
        authentication, and automated client service pipelines.
      </>
    ),
    highlightPanels: [
      {
        content: (
          <>
            <strong>Architecture Highlights:</strong> Built on modern Next.js App Router
            architecture, featuring automated data migrations with Prisma, secure authentication
            via NextAuth, and AI workflow orchestration.
          </>
        ),
      },
    ],
    features: [
      <>
        <strong>Next.js App Router:</strong> Server components, server actions, and optimized
        route handlers.
      </>,
      <>
        <strong>Prisma + PostgreSQL:</strong> Type-safe database schema modeling, migrations, and
        relational queries.
      </>,
      <>
        <strong>Groq AI Integration:</strong> High-speed AI SDK pipelines for automated content
        generation and workflows.
      </>,
      <>
        <strong>NextAuth Security:</strong> Enterprise authentication and role-based access
        controls.
      </>,
    ],
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Groq AI", "NextAuth"],
    actions: [
      { href: "https://arelixlabs.com", label: "Live", variant: "btn-live", icon: "live" },
    ],
  },
  // ====== PROJECT: SSRN Transfer ======
  {
    id: "ssrn-transfer",
    category: "fullstack",
    delayMs: 100,
    badgeVariant: "badge-full",
    badgeIcon: "car",
    badgeLabel: <>Frontend &amp; UI</>,
    title: "SSRN Transfer — US Car Rental Platform",
    subtitle: "Jinja2 · HTML5 · CSS3 · JavaScript · Netlify",
    desc: (
      <>
        Project-based frontend development for SSRN Transfer, a US-based car rental platform.
        Built and maintained fast, responsive interface templates using Jinja2 to ensure
        consistent user experiences and seamless booking navigation.
      </>
    ),
    highlightPanels: [
      {
        content: (
          <>
            <strong>Client Work:</strong> Delivered custom frontend templates and layout
            components for a US-based client, optimized for mobile responsiveness and performance.
          </>
        ),
      },
    ],
    features: [
      <>
        <strong>Jinja2 Templating:</strong> Dynamic server-rendered UI layout structures.
      </>,
      <>
        <strong>Responsive Design:</strong> Mobile-first UI layouts built for rental browsing.
      </>,
      <>
        <strong>Performance Optimized:</strong> Lightweight markup ensuring fast load times.
      </>,
    ],
    tags: ["Jinja2", "HTML5", "CSS3", "JavaScript", "Netlify"],
  },
  // ====== PROJECT 8: Linear AI ======
  {
    id: "linear-ai",
    category: "fullstack",
    delayMs: 120,
    badgeVariant: "badge-full",
    badgeIcon: "shopping-bag",
    badgeLabel: "Full Stack",
    title: "Linear AI — AI Automation Store",
    subtitle: "React.js · ASP.NET Core Web API · n8n · Render",
    desc: (
      <>
        A full-stack automation commerce platform that facilitates product catalog browsing,
        admin-controlled discount offers, vouchers, order fulfillment, automated template
        delivery, product requests, and moderated user feedback.
      </>
    ),
    features: [
      "ASP.NET Core Web API backend orchestrating business operations, cart handling, and vouchers",
      "React frontend with clean, interactive state-driven interface elements",
      "n8n integration to automate the delivery of custom workflow templates to users",
      "Admin console allowing total control over products, user feedback approval, and orders",
    ],
    tags: ["React.js", "ASP.NET Core", "Web API", "n8n", "SQL Server", "Render"],
    actions: [
      { href: "https://linearai.onrender.com", label: "View Live", variant: "btn-live", icon: "live" },
      { href: "https://github.com/Saobia3i/LinearAi_v1", label: "GitHub", variant: "btn-github", icon: "github" },
    ],
  },
  // ====== PROJECT 8: AUST RC Website ======
  {
    id: "aust-robotics-club",
    category: "fullstack",
    delayMs: 160,
    badgeVariant: "badge-full",
    badgeIcon: "users",
    badgeLabel: "Full Stack",
    title: "AUST Robotics Club Website",
    subtitle: "React · TypeScript · Vite · Firebase Suite",
    desc: (
      <>
        As the Director of the Web Team, I led and coordinated the development team while actively
        coding and engineering the official web portal for the AUST Robotics Club (AUSTRC). I
        personally designed and implemented the core interactive features, security rules, and
        real-time content updates.
      </>
    ),
    highlightPanels: [
      {
        content: (
          <>
            <strong>Key Features:</strong> Notice Board (searchable &amp; filterable
            announcements) · Comprehensive Events Tracker (workshop &amp; seminar records) ·
            Educational Programs (learning directories &amp; skill courses) · Member Registrations
            &amp; Android App download link.
          </>
        ),
      },
    ],
    features: [
      <>
        <strong>Notice Board:</strong> Searchable &amp; filterable official club notices I coded
        and connected to Firestore.
      </>,
      <>
        <strong>Events Vault:</strong> Live documented archive mapping previous seminar and
        workshop photo layouts.
      </>,
      <>
        <strong>Research &amp; Projects Showroom:</strong> Showcase detailing member
        concept-to-prototype outcomes.
      </>,
      <>
        <strong>Governing Panel &amp; Hall of Fame:</strong> Interactive semester leaderboards and
        alumni archives.
      </>,
      <>
        <strong>Smart Admin Panel:</strong> Secure dashboard I implemented via Firebase Auth for
        real-time club management.
      </>,
    ],
    tags: ["React", "TypeScript", "Vite", "Firebase Firestore", "Firebase Auth", "ImageKit CDN"],
    actions: [
      { href: "https://www.austrc.com/", label: "View Live", variant: "btn-live", icon: "live" },
    ],
  },
  // ====== NEW PROJECT: AUST Rover Challenge (ARC) Portal (powered by UCS) ======
  {
    id: "arc-portal",
    category: "fullstack",
    delayMs: 200,
    badgeVariant: "badge-full",
    badgeIcon: "rocket",
    badgeLabel: "Event Portal",
    title: "AUST Rover Challenge (ARC) Portal",
    subtitle: "React · TypeScript · Node.js · Firebase · Tailwind CSS",
    desc: (
      <>
        The official national event management platform built for the prestigious AUST Rover
        Challenge (ARC) — a national championship encompassing LFR, Soccer Bot, Rover Run, and
        Hackathons. I served as Director of the Web Team and Lead Developer, managing the project
        lifecycle, directing the team, and personally coding critical systems driven by our custom
        Universal Competition System (UCS) engine.
      </>
    ),
    highlightPanels: [
      {
        style: { background: "rgba(var(--primary-rgb), 0.04)", borderColor: "var(--secondary)" },
        content: (
          <>
            <strong>Tech Specs (Robust Data Architecture):</strong> Secure Admin Controls with
            granular permission systems · Scalable databases handling thousands of concurrent
            users · Real-time Synchronization across all portals · Automated workflows for
            registration and certification.
          </>
        ),
      },
      {
        style: { background: "rgba(var(--secondary-rgb), 0.05)", borderColor: "rgba(var(--secondary-rgb), 0.3)" },
        content: (
          <>
            <strong>The Student Advantage:</strong> 🎓 <em>Instant Certification:</em> Get digital
            credentials the moment you win · 🏆 <em>Live Rankings:</em> Live national standings
            for competitors · 📚 <em>Resource Vault:</em> Premium robotics research and CAD
            models.
          </>
        ),
      },
    ],
    features: [
      <>
        <strong>Live Analytics Dashboard:</strong> Real-time overview of registrations, active
        segments, and user trends.
      </>,
      <>
        <strong>Real-Time Leaderboard:</strong> Dynamic system ranking active teams automatically
        during matches.
      </>,
      <>
        <strong>Dynamic Segments:</strong> Hassle-free registration pipelines for LFR, Soccer Bot,
        Project Showcases, and Hackathons.
      </>,
      <>
        <strong>Automated Certificate Generation:</strong> Instant, verifiable digital certificates
        programmatically generated at runtime.
      </>,
      <>
        <strong>Admin Command Center:</strong> Secure management backend for real-time
        registrations and scoring updates.
      </>,
    ],
    tags: [
      "React",
      "TypeScript",
      "Node.js",
      "Firebase Firestore",
      "Firebase Auth",
      "Tailwind CSS",
      "UCS Engine",
      "Admin Panel",
    ],
    actions: [
      {
        href: "https://arc.austrc.com/aust-rover-challenge-2-0/",
        label: "View Live",
        variant: "btn-live",
        icon: "live",
      },
    ],
  },
  // ====== PROJECT: AUSTCAIC Official Website ======
  {
    id: "austcaic-website",
    category: "fullstack",
    delayMs: 240,
    badgeVariant: "badge-full",
    badgeIcon: "shield",
    badgeLabel: <>Full Stack &amp; DevOps</>,
    title: "AUSTCAIC Official Website",
    subtitle: "Deployment · Debugging · Hosting · Web Infrastructure",
    desc: (
      <>
        Official website for the AUST Cybersecurity and AI Club (AUSTCAIC). As Joint Secretary, I
        spearheaded technical operations, managing end-to-end web deployment, server setup, live
        debugging, and cloud hosting infrastructure for austcaic.com.
      </>
    ),
    highlightPanels: [
      {
        content: (
          <>
            <strong>Key Responsibilities:</strong> Primary focus on deployment pipelines, server
            hosting configurations, domain &amp; SSL setup, live environment debugging, and
            runtime performance optimization.
          </>
        ),
      },
    ],
    features: [
      <>
        <strong>Deployment Pipeline:</strong> Configured and executed production deployment
        routines for high reliability.
      </>,
      <>
        <strong>Hosting &amp; Server Setup:</strong> Managed DNS records, SSL certificates, and
        hosting environment configuration.
      </>,
      <>
        <strong>Live Debugging &amp; Maintenance:</strong> Diagnosed and fixed runtime script,
        routing, and styling issues across devices.
      </>,
      <>
        <strong>Performance &amp; Uptime:</strong> Monitored site speed, image optimization, and
        server uptime for the live club portal.
      </>,
    ],
    tags: [
      "Web Deployment",
      "Hosting & DNS",
      "Live Debugging",
      "Web Infrastructure",
      "Cybersecurity & AI",
    ],
    actions: [
      { href: "https://austcaic.com/", label: "View Live", variant: "btn-live", icon: "live" },
    ],
  },
  // ====== PROJECT: AUSTCAIC Poster Generator ======
  {
    id: "austcaic-poster-generator",
    category: "fullstack",
    delayMs: 280,
    badgeVariant: "badge-full",
    badgeIcon: "palette",
    badgeLabel: <>Internal Graphics &amp; AI Tool</>,
    title: "AUSTCAIC Poster Generator 🎨⚡",
    subtitle: "Next.js 15 · React 19 · Satori + @resvg/resvg-js · Groq LLaMA 3.3 · Pinecone · Tailwind CSS v4",
    desc: (
      <>
        Internal graphics web app engineered for the AUSTCAIC Graphics Team. Enables instant
        generation of 300 DPI print-ready PNG posters and social media banners adhering strictly
        to fixed brand guidelines — eliminating the need for design software. Powered by Satori
        &amp; resvg-js rendering engines and augmented with AI content assistance via Groq SDK and
        Pinecone.
      </>
    ),
    highlightPanels: [
      {
        content: (
          <>
            <strong>Core Automation &amp; AI:</strong> Features an AI Quick Notes assistant
            powered by Groq LLaMA 3.3 and Pinecone vector search that auto-generates headlines,
            subtitles, bullet lists, icon badges, and agenda tables directly from raw notes.
          </>
        ),
      },
    ],
    features: [
      <>
        <strong>300 DPI Print-Ready PNG Exports:</strong> Generates high-resolution exports across
        standard presets (5x8 Poster, A4 Portrait, 5x2 Banner, FB/IG Post &amp; Story, or Custom
        dimensions).
      </>,
      <>
        <strong>Instant Live Preview:</strong> CSS-based live canvas rendering updates in real time
        with zero latency.
      </>,
      <>
        <strong>1000+ Searchable Lucide Badges:</strong> Search and place icons with custom canvas
        X/Y coordinates and scaling controls.
      </>,
      <>
        <strong>Dynamic Layout &amp; Reordering:</strong> Drag-and-drop or button reordering for
        text, tables, bullet lists, badges, QR codes, and framed images.
      </>,
      <>
        <strong>Interactive Table &amp; List Builders:</strong> Multi-column layouts, custom
        bullet icons, and event agenda tables with density auto-scaling.
      </>,
      <>
        <strong>Framed Image Uploads:</strong> Position images with Circle, Square, Rectangle, or
        Borderless frames using a 9-point alignment grid.
      </>,
    ],
    tags: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Tailwind CSS v4",
      "Satori",
      "resvg-js",
      "Groq LLaMA 3.3",
      "Pinecone",
      "Lucide React",
    ],
    // No live/GitHub links in the original data — zero action buttons.
  },
  // ====== NEW PROJECT: Lead Capture & AI-Qualification System ======
  {
    id: "lead-capture-ai",
    category: "fullstack",
    delayMs: 80,
    badgeVariant: "badge-full",
    badgeIcon: "mail",
    badgeLabel: <>Automation &amp; AI</>,
    title: <>Lead Capture &amp; AI-Qualification System</>,
    subtitle: "n8n · Groq LLaMA 3.3 · HTML/CSS · Slack · Google Sheets · Gmail SMTP",
    desc: (
      <>
        Full-stack lead capture system with AI-powered qualification. Built responsive landing
        page integrated with n8n automation workflow featuring: webhook-triggered pipeline, Groq
        LLaMA 3.3 lead scoring (0-100, HOT/WARM/COLD classification), automated personalized email
        generation for qualified leads, Google Sheets CRM logging, and Slack real-time alerts.
        Deployed on Vercel.
      </>
    ),
    highlightPanels: [
      {
        content: (
          <>
            <strong>AI Outreach &amp; Logging:</strong> Eliminated manual lead qualification,
            achieving less than 1-minute response time for hot prospects using a 100% free tech
            stack.
          </>
        ),
      },
    ],
    features: [
      <>
        <strong>Webhook Pipeline:</strong> n8n workflow triggered instantly upon landing page lead
        form submission.
      </>,
      <>
        <strong>Groq AI Scoring:</strong> Groq LLaMA 3.3 scores and classifies leads based on
        custom business criteria.
      </>,
      <>
        <strong>Personalized SMTP:</strong> Programmatically drafts and sends tailored follow-up
        emails to hot leads.
      </>,
      <>
        <strong>CRM Integration &amp; Alerts:</strong> Logs all data to Google Sheets CRM and
        alerts sales reps in real-time via Slack.
      </>,
    ],
    tags: [
      "n8n",
      "Groq API",
      "LLaMA 3.3",
      "HTML5 / CSS3",
      "Slack API",
      "Google Sheets",
      "Gmail SMTP",
      "Vercel",
    ],
    actions: [
      { href: "https://lead-generation1.vercel.app", label: "View Live", variant: "btn-live", icon: "live" },
    ],
  },
  // ====== PROJECT 9: Robomania 2.0 ======
  {
    id: "robomania",
    category: "fullstack",
    delayMs: 0,
    badgeVariant: "badge-full",
    badgeIcon: "trophy",
    badgeLabel: "Full Stack",
    title: "Robomania 2.0",
    subtitle: "React.js · Shadcn UI · Aceternity UI · Tailwind CSS",
    desc: (
      <>
        Sleek event website for the AUST Robotics Club flagship national robotics competition,
        showcasing event paths, registration dashboards, schedules, and team collaborations.
      </>
    ),
    highlightPanels: [
      {
        content: (
          <>
            <strong>Modern UI aesthetics:</strong> Built using React with Shadcn UI and Aceternity
            UI components to achieve a premium dark-themed layout, glowing grids, and
            micro-animations.
          </>
        ),
      },
    ],
    features: [
      "Futuristic components featuring gradient text, motion reveals, and custom grids",
      "Seamless responsive layouts supporting high-traffic event access across devices",
      "Interactive competition scheduling and rules viewer",
    ],
    tags: ["React.js", "Shadcn UI", "Aceternity UI", "Tailwind CSS", "Framer Motion"],
    actions: [
      {
        href: "https://www.robomania.austrc.com/",
        label: "View Live",
        variant: "btn-live",
        icon: "live",
      },
      { href: "https://github.com/Saobia3i/Robomania-2.0", label: "GitHub", variant: "btn-github", icon: "github" },
    ],
  },
  // ====== PROJECT 10: QuoteVerse ======
  {
    id: "quoteverse",
    category: "fun",
    delayMs: 80,
    badgeVariant: "badge-fun",
    badgeIcon: "quote",
    badgeLabel: "Creative",
    title: "QuoteVerse",
    subtitle: "React.js · Ant Design · Material UI (MUI)",
    desc: (
      <>
        A minimal, responsive quote generation application that fetches and delivers inspiring
        quotes, styled with sleek layout structures.
      </>
    ),
    features: [
      "Dynamic API fetches providing fresh quotes in real-time",
      <>Clean, modern layout styled with UI packages (Ant Design &amp; Material UI)</>,
      "Fast, lightweight single-page application structure",
    ],
    tags: ["React.js", "Ant Design", "MUI", "REST API", "Vercel"],
    actions: [
      { href: "https://quote-verse-psi.vercel.app/", label: "View Live", variant: "btn-live", icon: "live" },
      { href: "https://github.com/Saobia3i/Quote-Verse", label: "GitHub", variant: "btn-github", icon: "github" },
    ],
  },
  // ====== PROJECT 11: iCanteen ======
  {
    id: "icanteen",
    category: "fullstack",
    delayMs: 160,
    badgeVariant: "badge-full",
    badgeIcon: "utensils",
    badgeLabel: "Full Stack",
    title: "iCanteen — Smart Canteen",
    subtitle: "React.js · Laravel · MySQL · Tailwind CSS",
    desc: (
      <>
        Full-stack canteen management system streamlining food ordering, real-time queueing,
        digital menu management, and operations for students and canteen staff.
      </>
    ),
    features: [
      "Laravel PHP backend offering secure and robust API handling",
      "MySQL database mapping canteen inventory, orders, and authentication",
      "Responsive React layout optimized with Tailwind CSS and Ant Design elements",
    ],
    tags: ["React.js", "Laravel", "PHP", "MySQL", "Tailwind CSS", "Ant Design"],
    actions: [
      { href: "https://i-canteen.vercel.app/", label: "View Live", variant: "btn-live", icon: "live" },
      { href: "https://github.com/Saobia3i/iCanteen1", label: "GitHub", variant: "btn-github", icon: "github" },
    ],
  },
  // ====== PROJECT 12: CSE-3100 Assignment ======
  {
    id: "frontend-assignment",
    category: "fun",
    delayMs: 0,
    badgeVariant: "badge-fun",
    badgeIcon: "code2",
    badgeLabel: "Creative",
    title: <>Frontend CSS &amp; JS Assignment (CSE-3100)</>,
    subtitle: "HTML5 · CSS3 · Vanilla JavaScript",
    desc: (
      <>
        A clean frontend development project illustrating custom responsive layout architectures,
        animations, and interactivity using only pure HTML, CSS, and Vanilla JS.
      </>
    ),
    features: [
      "Fluid layouts styled without modern CSS frameworks",
      "Responsive grid configuration supporting multiple device screen viewports",
      "Simple DOM event handlers for navigation and state updates",
    ],
    tags: ["HTML5", "CSS3", "JavaScript", "Responsive UI"],
    actions: [
      { href: "https://github.com/Saobia3i/cse-3100", label: "GitHub", variant: "btn-github", icon: "github" },
    ],
  },
  // ====== PROJECT 13: Green Gadgets ======
  {
    id: "green-gadgets",
    category: "fullstack",
    delayMs: 80,
    badgeVariant: "badge-full",
    badgeIcon: "leaf",
    badgeLabel: "Full Stack",
    title: "Green Gadgets — Eco Marketplace",
    subtitle: "MERN Stack (MongoDB, Express, React, Node.js)",
    desc: (
      <>
        Collaborative e-commerce portal showcasing eco-friendly gadgets, with shopping carts,
        search capabilities, and team coordination.
      </>
    ),
    features: [
      "Structured MERN platform built to handle catalog and shopping cart flows",
      "MongoDB integration holding relational-like schemas for green product details",
      "Collaborative development showcasing git branching strategies and workflows",
    ],
    tags: ["MERN Stack", "MongoDB", "Express.js", "React.js", "Node.js", "Bootstrap"],
    actions: [
      {
        href: "https://github.com/tahmidkhanshuvo/Green-Gadgets",
        label: "GitHub",
        variant: "btn-github",
        icon: "github",
      },
    ],
  },
];
