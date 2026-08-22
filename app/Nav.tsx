"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";

const THEMES = [
  { value: "light", label: "Light" },
  { value: "dark", label: "Dark" },
  { value: "cupcake", label: "Cupcake" },
  { value: "synthwave", label: "Synthwave" },
  { value: "valentine", label: "Valentine" },
  { value: "cyberpunk", label: "Cyberpunk" },
  { value: "business", label: "Business" },
  { value: "corporate", label: "Corporate" },
  { value: "halloween", label: "Halloween" },
];

const RESUME_URL =
  "https://drive.google.com/drive/u/0/my-drive?usp=drive_link";

interface NavLink {
  href: string;
  label: string;
}

interface NavProps {
  links: NavLink[];
  logoHref?: string;
}

/** Floating pill navigation shared by the home and projects pages. */
export default function Nav({ links, logoHref = "#hero-top" }: NavProps) {
  const [theme, setTheme] = useState("light");
  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const navRef = useRef<HTMLDivElement | null>(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    // Reads localStorage, which only exists client-side, so the saved theme can't be
    // known during the server render — this effect is the hydration-safe sync point.
    const savedTheme = localStorage.getItem("portfolio-theme") || "light";
    // eslint-disable-next-line react-hooks/set-state-in-effect -- syncing from localStorage, not derived render state
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
    document.body.classList.toggle("dark", savedTheme === "dark");
  }, []);

  function applyTheme(next: string) {
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    document.body.classList.toggle("dark", next === "dark");
    localStorage.setItem("portfolio-theme", next);
  }

  useEffect(() => {
    lastScrollY.current = window.scrollY;
    let ticking = false;

    function onScroll() {
      if (ticking) return;
      requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;
        if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
          setHidden(true);
          setMenuOpen(false);
        } else {
          setHidden(false);
        }
        lastScrollY.current = currentScrollY;
        ticking = false;
      });
      ticking = true;
    }

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    function onDocClick(event: MouseEvent) {
      if (!menuOpen) return;
      if (navRef.current?.contains(event.target as Node)) return;
      setMenuOpen(false);
    }
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape" && menuOpen) setMenuOpen(false);
    }
    document.addEventListener("click", onDocClick);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("click", onDocClick);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  function handleNavLinkClick(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
    if (href.startsWith("#")) {
      e.preventDefault();
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMenuOpen(false);
  }

  return (
    <div
      ref={navRef}
      className={`nav-wrapper ${hidden ? "nav-hidden" : ""} ${menuOpen ? "menu-open" : ""}`.trim()}
    >
      <nav>
        <a href={logoHref} className="logo">
          Saobia Islam Tinni
        </a>
        <div className="nav-links" id="primary-navigation" aria-label="Primary navigation">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={(e) => handleNavLinkClick(e, link.href)}>
              {link.label}
            </a>
          ))}
          <a href={RESUME_URL} target="_blank" rel="noopener noreferrer">
            Resume
          </a>
        </div>
        <div className="theme-selector">
          <select
            id="theme-select"
            value={theme}
            onChange={(e) => applyTheme(e.target.value)}
          >
            {THEMES.map((t) => (
              <option key={t.value} value={t.value}>
                {t.label}
              </option>
            ))}
          </select>
        </div>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </nav>
      <div className="nav-dropdown" id="nav-dropdown" aria-label="Primary navigation mobile">
        {links.map((link) => (
          <a key={link.href} href={link.href} onClick={(e) => handleNavLinkClick(e, link.href)}>
            {link.label}
          </a>
        ))}
        <a href={RESUME_URL} target="_blank" rel="noopener noreferrer">
          Resume
        </a>
      </div>
    </div>
  );
}
