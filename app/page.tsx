import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "Saobia Islam Tinni | Developer",
};

const styles = `
    *,
    *::before,
    *::after {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    html {
      scroll-behavior: smooth;
      scroll-padding-top: 80px;
      -webkit-text-size-adjust: 100%;
      text-size-adjust: 100%;
      overflow-x: hidden;
      background: #f4f6f8;
    }

    img,
    svg,
    video,
    canvas {
      max-width: 100%;
      height: auto;
    }

:root, [data-theme="light"] {
  --body-bg: radial-gradient(ellipse at 20% 10%, rgba(0, 31, 63, 0.06) 0%, transparent 55%), radial-gradient(ellipse at 80% 50%, rgba(115, 210, 222, 0.07) 0%, transparent 50%), radial-gradient(ellipse at 40% 90%, rgba(0, 31, 63, 0.04) 0%, transparent 45%), linear-gradient(175deg, #ffffff 0%, #f4f6f8 30%, #edf1f5 60%, #f0f4f7 100%);
  --hero-bg: linear-gradient(160deg, #ffffff 0%, #f5f7f9 35%, #edf1f5 70%, #f0f4f7 100%);
  --nav-bg: rgba(255, 255, 255, 0.82);
  --nav-dropdown-bg: rgba(255, 255, 255, 0.96);
  --bg-main: #ffffff;
  --card-bg: #ffffff;
  --card-bg-light: #ffffff;
  --text-main: #001f3f;
  --text-heading: #001f3f;
  --text-muted: rgba(0, 31, 63, 0.75);
  --text-bio: rgba(13, 27, 42, 0.75);
  --text-white: #ffffff;
  --primary: #ffffff;
  --primary-color: #001f3f;
  --primary-rgb: 0, 31, 63;
  --secondary: #001f3f;
  --secondary-rgb: 0, 31, 63;
  --border-color: rgba(0, 31, 63, 0.16);
  --shadow-dropdown: 0 12px 36px rgba(0, 31, 63, 0.14);
  --shadow-nav: 0 8px 32px rgba(0, 31, 63, 0.12), 0 2px 8px rgba(0, 31, 63, 0.06);
}

[data-theme="dark"] {
  --body-bg: #000000;
  --hero-bg: linear-gradient(135deg, #020f1c 0%, #021120 25%, #04192e 50%, #051c33 75%, #06294c 100%);
  --nav-bg: rgba(0, 0, 0, 0.8);
  --nav-dropdown-bg: rgba(0, 0, 0, 0.9);
  --bg-main: #000000;
  --card-bg: rgba(255, 255, 255, 0.03);
  --card-bg-light: #080c10;
  --text-main: #e8e8e8;
  --text-heading: #ffffff;
  --text-muted: rgba(255, 255, 255, 0.85);
  --text-bio: rgba(255, 255, 255, 0.9);
  --text-white: #000000;
  --primary: #000000;
  --primary-color: #ffffff;
  --primary-rgb: 255, 255, 255;
  --secondary: #00e5ff;
  --secondary-rgb: 0, 229, 255;
  --border-color: rgba(0, 229, 255, 0.2);
  --shadow-dropdown: 0 12px 36px rgba(0, 0, 0, 0.5);
  --shadow-nav: 0 4px 20px rgba(0, 0, 0, 0.5);
}

[data-theme="cupcake"] {
  --body-bg: #faf7f5;
  --hero-bg: linear-gradient(135deg, #faf7f5 0%, #efeae6 100%);
  --nav-bg: rgba(250, 247, 245, 0.9);
  --nav-dropdown-bg: #faf7f5;
  --bg-main: #faf7f5;
  --card-bg: #ffffff;
  --card-bg-light: #ffffff;
  --text-main: #291334;
  --text-heading: #291334;
  --text-muted: rgba(41, 19, 52, 0.7);
  --text-bio: rgba(41, 19, 52, 0.8);
  --text-white: #ffffff;
  --primary: #65c3c8;
  --primary-color: #65c3c8;
  --primary-rgb: 101, 195, 200;
  --secondary: #ef9fbc;
  --secondary-rgb: 239, 159, 188;
  --border-color: rgba(41, 19, 52, 0.1);
  --shadow-dropdown: 0 12px 36px rgba(41, 19, 52, 0.1);
  --shadow-nav: 0 4px 20px rgba(41, 19, 52, 0.05);
}

[data-theme="synthwave"] {
  --body-bg: #1a1025;
  --hero-bg: linear-gradient(135deg, #2d1b4e 0%, #1a1025 100%);
  --nav-bg: rgba(26, 16, 37, 0.9);
  --nav-dropdown-bg: #1a1025;
  --bg-main: #1a1025;
  --card-bg: rgba(255, 255, 255, 0.05);
  --card-bg-light: #2d1b4e;
  --text-main: #f9f8fa;
  --text-heading: #f9f8fa;
  --text-muted: rgba(249, 248, 250, 0.7);
  --text-bio: rgba(249, 248, 250, 0.8);
  --text-white: #ffffff;
  --primary: #e779c1;
  --primary-color: #e779c1;
  --primary-rgb: 231, 121, 193;
  --secondary: #58c7f3;
  --secondary-rgb: 88, 199, 243;
  --border-color: rgba(231, 121, 193, 0.3);
  --shadow-dropdown: 0 12px 36px rgba(231, 121, 193, 0.2);
  --shadow-nav: 0 4px 20px rgba(231, 121, 193, 0.1);
}

[data-theme="valentine"] {
  --body-bg: #f0e6e6;
  --hero-bg: linear-gradient(135deg, #f0e6e6 0%, #e6d8d8 100%);
  --nav-bg: rgba(240, 230, 230, 0.9);
  --nav-dropdown-bg: #f0e6e6;
  --bg-main: #f0e6e6;
  --card-bg: #ffffff;
  --card-bg-light: #ffffff;
  --text-main: #632c3b;
  --text-heading: #632c3b;
  --text-muted: rgba(99, 44, 59, 0.7);
  --text-bio: rgba(99, 44, 59, 0.8);
  --text-white: #ffffff;
  --primary: #e96d7b;
  --primary-color: #e96d7b;
  --primary-rgb: 233, 109, 123;
  --secondary: #a990a9;
  --secondary-rgb: 169, 144, 169;
  --border-color: rgba(233, 109, 123, 0.2);
  --shadow-dropdown: 0 12px 36px rgba(233, 109, 123, 0.15);
  --shadow-nav: 0 4px 20px rgba(233, 109, 123, 0.1);
}

[data-theme="cyberpunk"] {
  --body-bg: #ffee00;
  --hero-bg: linear-gradient(135deg, #ffee00 0%, #e5d500 100%);
  --nav-bg: rgba(255, 238, 0, 0.9);
  --nav-dropdown-bg: #ffee00;
  --bg-main: #ffee00;
  --card-bg: rgba(0, 0, 0, 0.05);
  --card-bg-light: #000000;
  --text-main: #000000;
  --text-heading: #000000;
  --text-muted: rgba(0, 0, 0, 0.7);
  --text-bio: rgba(0, 0, 0, 0.8);
  --text-white: #ffee00;
  --primary: #ff003c;
  --primary-color: #ff003c;
  --primary-rgb: 255, 0, 60;
  --secondary: #00ffff;
  --secondary-rgb: 0, 255, 255;
  --border-color: rgba(0, 0, 0, 0.2);
  --shadow-dropdown: 0 12px 36px rgba(0, 0, 0, 0.2);
  --shadow-nav: 0 4px 20px rgba(0, 0, 0, 0.1);
}

[data-theme="business"] {
  --body-bg: #ffffff;
  --hero-bg: linear-gradient(135deg, #ffffff 0%, #f0f2f5 100%);
  --nav-bg: rgba(255, 255, 255, 0.95);
  --nav-dropdown-bg: #ffffff;
  --bg-main: #ffffff;
  --card-bg: #ffffff;
  --card-bg-light: #ffffff;
  --text-main: #1c1e21;
  --text-heading: #1c1e21;
  --text-muted: rgba(28, 30, 33, 0.7);
  --text-bio: rgba(28, 30, 33, 0.8);
  --text-white: #ffffff;
  --primary: #1877f2;
  --primary-color: #1877f2;
  --primary-rgb: 24, 119, 242;
  --secondary: #42b72a;
  --secondary-rgb: 66, 183, 42;
  --border-color: rgba(0, 0, 0, 0.1);
  --shadow-dropdown: 0 12px 36px rgba(0, 0, 0, 0.1);
  --shadow-nav: 0 4px 20px rgba(0, 0, 0, 0.05);
}

[data-theme="corporate"] {
  --body-bg: #f8f9fa;
  --hero-bg: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  --nav-bg: rgba(248, 249, 250, 0.95);
  --nav-dropdown-bg: #f8f9fa;
  --bg-main: #f8f9fa;
  --card-bg: #ffffff;
  --card-bg-light: #ffffff;
  --text-main: #212529;
  --text-heading: #212529;
  --text-muted: rgba(33, 37, 41, 0.7);
  --text-bio: rgba(33, 37, 41, 0.8);
  --text-white: #ffffff;
  --primary: #0d6efd;
  --primary-color: #0d6efd;
  --primary-rgb: 13, 110, 253;
  --secondary: #6c757d;
  --secondary-rgb: 108, 117, 125;
  --border-color: rgba(0, 0, 0, 0.1);
  --shadow-dropdown: 0 12px 36px rgba(0, 0, 0, 0.1);
  --shadow-nav: 0 4px 20px rgba(0, 0, 0, 0.05);
}

[data-theme="halloween"] {
  --body-bg: #1a1a1a;
  --hero-bg: linear-gradient(135deg, #212121 0%, #000000 100%);
  --nav-bg: rgba(33, 33, 33, 0.95);
  --nav-dropdown-bg: #212121;
  --bg-main: #1a1a1a;
  --card-bg: rgba(255, 255, 255, 0.05);
  --card-bg-light: #000000;
  --text-main: #f5f5f5;
  --text-heading: #f5f5f5;
  --text-muted: rgba(245, 245, 245, 0.7);
  --text-bio: rgba(245, 245, 245, 0.8);
  --text-white: #ffffff;
  --primary: #ff6d00;
  --primary-color: #ff6d00;
  --primary-rgb: 255, 109, 0;
  --secondary: #9c27b0;
  --secondary-rgb: 156, 39, 176;
  --border-color: rgba(255, 109, 0, 0.3);
  --shadow-dropdown: 0 12px 36px rgba(255, 109, 0, 0.2);
  --shadow-nav: 0 4px 20px rgba(255, 109, 0, 0.1);
}

/* Base Global Overrides */
/* Optimized background for performance */
    body::before {
      content: "";
      position: fixed;
      inset: 0;
      background: var(--body-bg);
      z-index: -1;
      will-change: transform;
      transform: translateZ(0);
    }

    body {
      font-family: "Inter", sans-serif;
      color: var(--text-main);
      line-height: 1.6;
      overflow-x: hidden;
      width: 100%;
      max-width: 100vw;
      background: transparent;
    }

    :root {
      --navy: var(--primary-color);
      --cyan: var(--secondary);

      --card-light: var(--card-bg-light);
      --card-dark: var(--card-bg);

      --border-light: rgba(var(--primary-rgb), 0.14);
      --border-dark: var(--border-color);

      --shadow-light: 0 10px 30px rgba(0, 0, 0, 0.08);
      --shadow-dark: 0 10px 30px rgba(var(--secondary-rgb), 0.08);

      --shadow-hover-light: 0 18px 50px var(--border-color);
      --shadow-hover-dark: 0 18px 50px var(--border-color);

      --radius: 14px;
    }

    /* ===== NAVIGATION - FLOATING PILL ===== */
    .nav-wrapper {
      position: fixed;
      top: 1.1rem;
      left: 50%;
      transform: translateX(-50%) translateY(0) scale(1);
      z-index: 1000;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      width: max-content;
      max-width: calc(100vw - 2.5rem);
      opacity: 1;
      transition: transform 0.45s cubic-bezier(0.4, 0, 0.2, 1),
                  opacity 0.35s ease;
    }

.nav-wrapper.nav-hidden {
      transform: translateX(-50%) translateY(-140%) scale(0.88);
      opacity: 0;
      pointer-events: none;
    }

    .nav-dropdown {
      display: none;
      flex-direction: column;
      margin-top: 0.5rem;
      padding: 0.5rem;
      border-radius: 16px;
      background: var(--nav-dropdown-bg);
      backdrop-filter: blur(18px);
      -webkit-backdrop-filter: blur(18px);
      border: 1px solid var(--border-color);
      box-shadow: var(--shadow-dropdown);
      min-width: 150px;
      opacity: 0;
      visibility: hidden;
      transform: translateY(-8px);
      transition: opacity 0.22s ease, transform 0.22s ease, visibility 0.22s ease;
      will-change: transform, opacity;
      backface-visibility: hidden;
    }

    body:not(.dark) .nav-dropdown {
      background: var(--nav-dropdown-bg);
      border-color: var(--border-color);
      box-shadow: var(--shadow-dropdown);
    }

    .nav-wrapper.menu-open .nav-dropdown {
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
    }

    .nav-dropdown a {
      color: var(--text-muted);
      text-decoration: none;
      font-size: 0.85rem;
      font-weight: 400;
      padding: 0.55rem 0.9rem;
      border-radius: 10px;
      transition: color 0.2s ease, background 0.2s ease;
    }

    .nav-dropdown a:hover,
    .nav-dropdown a:focus-visible {
      color: var(--secondary);
      background: rgba(var(--secondary-rgb), 0.1);
      outline: none;
    }

    body:not(.dark) .nav-dropdown a {
      color: var(--text-muted);
    }

    body:not(.dark) .nav-dropdown a:hover,
    body:not(.dark) .nav-dropdown a:focus-visible {
      color: var(--primary-hover);
      background: rgba(var(--primary-rgb), 0.07);
    }

    nav {
      position: relative;
      width: auto;
      max-width: 100%;
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      background: var(--nav-bg);
      border: 1px solid var(--border-color);
      border-radius: 999px;
      padding: 0.35rem 1rem;
      display: flex;
      align-items: center;
      gap: 0.4rem;
      min-height: 44px;
      box-shadow: var(--shadow-nav);
      transition: background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
    }

    body:not(.dark) nav {
      background: var(--nav-bg);
      border-color: var(--border-color);
      box-shadow: var(--shadow-nav);
    }

    nav .logo {
      font-size: 0.82rem;
      font-weight: 700;
      color: #fff;
      letter-spacing: 0.2px;
      white-space: nowrap;
      padding-right: 0.55rem;
      border-right: 1px solid var(--border-color);
      text-decoration: none;
      cursor: pointer;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: clamp(8.5rem, 24vw, 13rem);
    }

    body:not(.dark) nav .logo {
      color: var(--primary-color);
      border-right-color: var(--border-color);
    }

    .nav-links {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0;
      margin-left: 0.3rem;
    }

    .nav-links a {
      color: var(--text-bio);
      text-decoration: none;
      font-size: 0.82rem;
      font-weight: 400;
      line-height: 1;
      padding: 0.38rem 0.65rem;
      position: relative;
      transition: color 0.22s ease;
      white-space: nowrap;
    }

    .nav-links a::after {
      content: "";
      position: absolute;
      left: 0.65rem;
      right: 0.65rem;
      bottom: 0.1rem;
      height: 1.5px;
      border-radius: 999px;
      background: var(--secondary);
      transform: scaleX(0);
      transform-origin: center;
      transition: transform 0.22s ease;
    }

    .nav-links a:hover,
    .nav-links a:focus-visible {
      color: var(--secondary);
      outline: none;
    }

    .nav-links a:hover::after,
    .nav-links a:focus-visible::after {
      transform: scaleX(1);
    }

    body:not(.dark) .nav-links a {
      color: rgba(var(--primary-rgb), 0.65);
    }

    body:not(.dark) .nav-links a:hover,
    body:not(.dark) .nav-links a:focus-visible {
      color: var(--primary-hover);
    }

    body:not(.dark) .nav-links a::after {
      background: var(--primary-hover);
    }

    .menu-toggle {
      display: none;
      width: 34px;
      height: 34px;
      border: 0;
      border-radius: 999px;
      align-items: center;
      justify-content: center;
      color: rgba(255, 255, 255, 0.7);
      background: transparent;
      cursor: pointer;
      transition: background 0.22s ease, color 0.22s ease;
      flex: 0 0 auto;
    }

    .menu-toggle:hover,
    .menu-toggle:focus-visible {
      color: var(--secondary);
      background: rgba(var(--secondary-rgb), 0.12);
      outline: none;
    }

    body:not(.dark) .menu-toggle {
      color: rgba(var(--primary-rgb), 0.6);
    }

    body:not(.dark) .menu-toggle:hover,
    body:not(.dark) .menu-toggle:focus-visible {
      color: var(--primary-hover);
      background: rgba(var(--primary-rgb), 0.07);
    }

    .theme-toggle {
      position: static;
      transform: none;
      background: transparent;
      border: 0;
      border-radius: 999px;
      width: 34px;
      height: 34px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: transform 0.3s ease, background 0.3s ease, color 0.3s ease;
      color: rgba(255, 255, 255, 0.7);
      flex: 0 0 auto;
      margin-left: 0.2rem;
    }

    body:not(.dark) .theme-toggle {
      color: rgba(var(--primary-rgb), 0.6);
    }

    .theme-toggle:hover {
      background: rgba(var(--secondary-rgb), 0.12);
      color: var(--secondary);
      transform: rotate(180deg) scale(1.05);
    }

    body:not(.dark) .theme-toggle:hover {
      background: rgba(var(--primary-rgb), 0.07);
      color: var(--primary-hover);
    }

    .theme-selector {
      flex: 0 1 auto;
      min-width: 0;
    }

    .theme-selector select {
      width: clamp(6.2rem, 12vw, 8rem);
      max-width: 100%;
      min-width: 0;
      height: 34px;
      border: 1px solid var(--border-color);
      border-radius: 999px;
      background: rgba(255, 255, 255, 0.08);
      color: var(--text-muted);
      font: inherit;
      font-size: 0.78rem;
      font-weight: 700;
      padding: 0 1.65rem 0 0.75rem;
      outline: none;
    }

    .theme-selector select option {
      background: #ffffff;
      color: #001f3f;
    }

    .theme-selector select option:checked {
      background: #1f6fd1;
      color: #ffffff;
    }

    body:not(.dark) .theme-selector select {
      background: rgba(var(--primary-rgb), 0.04);
      color: var(--primary-color);
    }

    /* ===== HERO ===== */
    .hero {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 5.5rem 2rem 3rem;
      position: relative;
      background: var(--hero-bg);
      overflow: hidden;
      z-index: 0;
    }

    body:not(.dark) .hero {
      background: var(--hero-bg);
    }

    body.dark .hero {
      background: linear-gradient(135deg,
          #020f1c 0%,
          #021120 25%,
          #04192e 50%,
          #051c33 75%,
          #06294c 100%);
    }

    #hero-canvas {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
    }

    .particles {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
    }

    .particle {
      position: absolute;
      border-radius: 50%;
      background: rgba(var(--secondary-rgb), 0.3);
      pointer-events: none;
      animation: float-particle 15s infinite ease-in-out;
      will-change: transform, opacity;
      transform: translateZ(0);
    }

    @keyframes float-particle {

      0%,
      100% {
        transform: translate(0, 0) scale(1);
        opacity: 0.3;
      }

      25% {
        transform: translate(50px, -100px) scale(1.2);
        opacity: 0.5;
      }

      50% {
        transform: translate(-30px, -50px) scale(0.8);
        opacity: 0.4;
      }

      75% {
        transform: translate(80px, 50px) scale(1.1);
        opacity: 0.6;
      }
    }

    .hero::after {
      content: "";
      position: absolute;
      inset: 0;
      background-image:
        radial-gradient(ellipse at 70% 10%, rgba(var(--secondary-rgb), 0.13) 0%, transparent 45%),
        radial-gradient(ellipse at 10% 80%, rgba(var(--primary-rgb), 0.5) 0%, transparent 40%),
        radial-gradient(circle, rgba(var(--secondary-rgb), 0.04) 1px, transparent 1px);
      background-size: auto, auto, 36px 36px;
      pointer-events: none;
      z-index: 0;
    }

    body:not(.dark) .hero::after {
      background-image:
        radial-gradient(ellipse at 75% 5%, rgba(var(--primary-rgb), 0.06) 0%, transparent 50%),
        radial-gradient(ellipse at 5% 90%, rgba(var(--secondary-rgb), 0.07) 0%, transparent 40%),
        radial-gradient(circle, rgba(var(--primary-rgb), 0.06) 1px, transparent 1px);
      background-size: auto, auto, 32px 32px;
    }

    body.dark .hero::after {
      background-image:
        radial-gradient(ellipse at 70% 10%, rgba(115, 210, 222, 0.13) 0%, transparent 45%),
        radial-gradient(ellipse at 10% 80%, rgba(0, 31, 63, 0.5) 0%, transparent 40%),
        radial-gradient(circle, rgba(115, 210, 222, 0.04) 1px, transparent 1px);
      background-size: auto, auto, 36px 36px;
    }

    .profile-container {
      position: relative;
      z-index: 2;
      margin-bottom: 1.5rem;
      animation: fadeInScale 0.9s ease;
    }

    @keyframes fadeInScale {
      from {
        opacity: 0;
        transform: scale(0.85);
      }

      to {
        opacity: 1;
        transform: scale(1);
      }
    }

    .profile-img {
      width: 170px;
      height: 170px;
      border-radius: 50%;
      object-fit: cover;
      border: 3px solid var(--secondary);
      box-shadow: 0 0 30px rgba(var(--secondary-rgb), 0.4),
        0 0 60px rgba(var(--secondary-rgb), 0.2);
      transition: transform 0.35s ease, box-shadow 0.35s ease;
    }

    .profile-img:hover {
      transform: translateY(-3px) scale(1.07);
      box-shadow: 0 0 40px rgba(var(--secondary-rgb), 0.6),
        0 0 80px rgba(var(--secondary-rgb), 0.3);
    }

    body.dark .profile-img {
      border-color: #73d2de;
      box-shadow: 0 0 30px rgba(115, 210, 222, 0.4),
        0 0 60px rgba(115, 210, 222, 0.2);
    }

    body.dark .profile-img:hover {
      box-shadow: 0 0 40px rgba(115, 210, 222, 0.6),
        0 0 80px rgba(115, 210, 222, 0.3);
    }

    .hero h1 {
      font-size: clamp(2rem, 4.4vw, 2.8rem);
      font-weight: 700;
      color: var(--card-bg-light);
      margin-bottom: 0.8rem;
      position: relative;
      z-index: 2;
      animation: fadeInUp 0.9s ease 0.15s backwards;
      letter-spacing: 0.5px;
    }

    body:not(.dark) .hero h1 {
      color: var(--text-heading);
    }

    body.dark .hero h1 {
      color: #ffffff;
    }

    .hero .name-highlight {
      color: var(--secondary);
    }

    body:not(.dark) .hero .name-highlight {
      color: var(--primary-color);
    }

    body.dark .hero .name-highlight {
      color: #73d2de;
    }

    .hero .subtitle {
      font-size: clamp(1rem, 2.3vw, 1.2rem);
      color: var(--secondary);
      margin-bottom: 1rem;
      position: relative;
      z-index: 2;
      animation: fadeInUp 0.9s ease 0.25s backwards;
      font-weight: 500;
    }

    body:not(.dark) .hero .subtitle {
      color: #2a6496;
    }

    body.dark .hero .subtitle {
      color: #73d2de;
    }

    .hero .bio {
      max-width: 650px;
      font-size: clamp(0.95rem, 1.8vw, 1rem);
      line-height: 1.7;
      color: var(--text-bio);
      margin-bottom: 2rem;
      position: relative;
      z-index: 2;
      animation: fadeInUp 0.9s ease 0.35s backwards;
    }

    body:not(.dark) .hero .bio {
      color: var(--text-bio);
    }

    body.dark .hero .bio {
      color: rgba(255, 255, 255, 0.9);
    }

    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(26px);
      }

      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes beamSlide {
      0% {
        transform: translate3d(-120%, 0, 0);
      }

      50% {
        transform: translate3d(70%, 0, 0);
      }

      100% {
        transform: translate3d(220%, 0, 0);
      }
    }

    @keyframes haloPulse {
      0%,
      100% {
        opacity: 0.12;
        transform: scale(1);
      }

      50% {
        opacity: 0.26;
        transform: scale(1.08);
      }
    }

    @keyframes revealUp {
      0% {
        opacity: 0;
        transform: translateY(40px) scale(0.96);
      }
      30% {
        opacity: 0.5;
      }
      100% {
        opacity: 1;
        transform: translateY(0) scale(1);
      }
    }

    @keyframes revealDepth {
      0% {
        opacity: 0;
        transform: perspective(900px) scale(0.82) translateZ(-60px) rotateX(4deg);
      }
      40% {
        opacity: 0.7;
      }
      100% {
        opacity: 1;
        transform: perspective(900px) scale(1) translateZ(0px) rotateX(0deg);
      }
    }

    @keyframes certShimmer {
      0% {
        transform: translate3d(-140%, 0, 0) skewX(-18deg);
      }

      60%,
      100% {
        transform: translate3d(240%, 0, 0) skewX(-18deg);
      }
    }

    .cta-buttons {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
      justify-content: center;
      position: relative;
      z-index: 2;
      animation: fadeInUp 0.9s ease 0.45s backwards;
      max-width: 100%;
    }

    .btn {
      padding: 0.55rem 1.3rem;
      border-radius: 10px;
      font-weight: 700;
      text-decoration: none;
      transition: transform 0.28s ease, box-shadow 0.28s ease, background 0.28s ease, color 0.28s ease, border-color 0.28s ease;
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      font-size: 0.85rem;
      will-change: transform;
      min-width: 0;
    }

    .btn-primary {
      background: #001f3f;
      color: #ffffff;
      border: 1px solid rgba(255, 255, 255, 0.16);
      box-shadow: 0 10px 26px rgba(0, 31, 63, 0.22);
    }

    body.dark .btn-primary {
      background: #73d2de;
      color: #001f3f;
      border-color: rgba(115, 210, 222, 0.35);
      box-shadow: 0 10px 26px rgba(115, 210, 222, 0.22);
    }

    .btn-primary:hover {
      transform: translateY(-3px);
      box-shadow: 0 16px 40px rgba(var(--secondary-rgb), 0.35);
    }

    .btn-secondary {
      background: transparent;
      color: #fff;
      border: 2px solid rgba(255, 255, 255, 0.5);
    }

    body:not(.dark) .btn-secondary {
      color: var(--primary-color);
      border-color: rgba(var(--primary-rgb), 0.5);
    }

    .btn-secondary:hover {
      background: rgba(255, 255, 255, 0.1);
      border-color: #fff;
      transform: translateY(-3px);
    }

    body:not(.dark) .btn-secondary:hover {
      background: rgba(var(--primary-rgb), 0.08);
      border-color: var(--primary-color);
    }

    /* ===== SECTIONS WRAP ===== */
    section:not(.hero) {
      perspective: 800px;
      padding: 3rem 2rem;
      width: min(1100px, calc(100% - 2rem));
      max-width: 1100px;
      margin: 0 auto 1.5rem;
      border-radius: 12px;
      transition: transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease;
      backface-visibility: hidden;
      position: relative;
      z-index: 1;
      overflow-x: clip;
    }

    #about {
      position: relative;
      margin-top: 1.5rem;
      z-index: 50;
    }

    /* Boxed sections — projects, experience, certificates */
    body:not(.dark) section:not(.hero):not(#about):not(#contact):not(#tech) {
      background: var(--card-light);
      border: 2px solid var(--border-color);
      box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
    }

    body.dark section:not(.hero):not(#about):not(#contact):not(#tech) {
      background: var(--card-dark);
      border: 1px solid var(--border-dark);
      box-shadow: var(--shadow-dark);
    }

    body:not(.dark) section:not(.hero):not(#about):not(#contact):not(#tech):hover {
      transform: translateY(-4px);
      box-shadow: var(--shadow-hover-light);
      border-color: var(--primary-color);
    }

    body.dark section:not(.hero):not(#about):not(#contact):not(#tech):hover {
      transform: translateY(-4px);
      box-shadow: var(--shadow-hover-dark);
      border-color: var(--secondary);
    }

    /* Tech section — open, no outer box */
    #tech {
      background: transparent;
      border: none;
      box-shadow: none;
    }

    #tech:hover {
      transform: none;
      box-shadow: none;
    }

    /* Open sections — about, contact */
    #about,
    #contact {
      background: transparent;
      border: none;
      box-shadow: none;
      padding-left: 1rem;
      padding-right: 1rem;
    }

    #about:hover,
    #contact:hover {
      transform: none;
      box-shadow: none;
    }

    .section-title {
      font-size: 2rem;
      font-weight: 800;
      text-align: center;
      margin-bottom: 2rem;
      color: var(--primary-color);
      position: relative;
      display: inline-block;
      width: 100%;
      letter-spacing: 0.2px;
    }

    body.dark .section-title {
      color: var(--secondary);
    }

    .section-title::after {
      content: "";
      position: absolute;
      bottom: -8px;
      left: 50%;
      transform: translateX(-50%);
      width: 60px;
      height: 3px;
      background: linear-gradient(90deg, var(--primary-color) 0%, var(--secondary) 100%);
      border-radius: 2px;
    }

    /* ===== ABOUT ===== */
    .about-list {
      list-style: none;
      display: grid;
      gap: 0.8rem;
      max-width: 800px;
      margin: 0 auto;
    }

    .about-list li {
      padding: 0.8rem 1rem;
      border-radius: 12px;
      border: 1px solid rgba(var(--primary-rgb), 0.12);
      border-left: 4px solid var(--primary-color);
      background: rgba(var(--primary-rgb), 0.04);
      transition: transform 0.25s ease, background 0.25s ease, border-color 0.25s ease;
      font-size: 0.98rem;
    }

    body.dark .about-list li {
      background: rgba(var(--secondary-rgb), 0.08);
      border-color: rgba(var(--secondary-rgb), 0.14);
      border-left-color: var(--secondary);
      color: var(--text-main);
    }

    .about-list li:hover {
      transform: translateX(8px);
      background: rgba(var(--primary-rgb), 0.08);
      border-color: rgba(var(--primary-rgb), 0.2);
    }

    body.dark .about-list li:hover {
      background: rgba(var(--secondary-rgb), 0.12);
      border-color: var(--border-color);
    }

    /* ===== TECH STACK ===== */
    .tech-groups {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1.2rem;
      max-width: 980px;
      margin: 0 auto;
    }

    .tech-group,
    .project-card,
    .experience-card,
    .certificate-card {
      min-width: 0;
    }

    .tech-group {
      padding: 1.3rem;
      background: rgba(var(--primary-rgb), 0.03);
      border-radius: 12px;
      border: 2px solid rgba(var(--primary-rgb), 0.28);
      box-shadow: 0 2px 12px rgba(var(--primary-rgb), 0.06);
      transition: transform 0.24s cubic-bezier(0.22, 0.61, 0.36, 1),
                  box-shadow 0.24s ease,
                  border-color 0.24s ease;
      position: relative;
      overflow: hidden;
    }

    body.dark .tech-group {
      background: rgba(255, 255, 255, 0.02);
      border-color: rgba(var(--secondary-rgb), 0.4);
      box-shadow: 0 2px 12px rgba(0, 0, 0, 0.2);
    }

    .tech-group:hover {
      transform: translateY(-4px);
      border-color: rgba(var(--primary-rgb), 0.55);
      box-shadow: 0 12px 32px rgba(var(--primary-rgb), 0.1);
    }

    body.dark .tech-group:hover {
      border-color: rgba(var(--secondary-rgb), 0.65);
      box-shadow: 0 12px 32px rgba(var(--secondary-rgb), 0.08);
    }

    .tech-head {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;
      margin-bottom: 0.9rem;
      position: relative;
      z-index: 1;
    }

    .tech-head h3 {
      font-size: 1.05rem;
      font-weight: 800;
      color: var(--primary-color);
    }

    body.dark .tech-head h3 {
      color: var(--secondary);
    }

    .tech-head span {
      font-size: 0.82rem;
      font-weight: 800;
      color: rgba(var(--primary-rgb), 0.65);
    }

    body.dark .tech-head span {
      color: rgba(var(--secondary-rgb), 0.9);
    }

    body.dark .tech-head span {
      color: rgba(var(--secondary-rgb), 0.9);
    }

    .tech-grid {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      column-gap: 0.9rem;
      row-gap: 0.7rem;
      position: relative;
      z-index: 1;
      min-width: 0;
    }

    .tech-pill {
      display: inline-flex;
      align-items: center;
      gap: 0.55rem;
      padding: 0.55rem 0.82rem;
      border-radius: 999px;
      border: 2px solid rgba(var(--primary-rgb), 0.28);
      background: rgba(255, 255, 255, 0.7);
      color: var(--primary-color);
      font-weight: 700;
      font-size: 0.86rem;
      box-shadow: 0 8px 22px rgba(var(--primary-rgb), 0.08);
      transition: transform 0.22s ease, background 0.22s ease, border-color 0.22s ease, box-shadow 0.22s ease;
      white-space: nowrap;
      max-width: 100%;
    }

    body.dark .tech-pill {
      background: rgba(0, 0, 0, 0.25);
      border-color: rgba(var(--secondary-rgb), 0.35);
      color: var(--text-main);
      box-shadow: 0 8px 22px rgba(var(--secondary-rgb), 0.08);
    }

    .tech-pill i {
      font-size: 18px;
    }

    .tech-pill:hover {
      transform: translateY(-3px);
      border-color: rgba(var(--secondary-rgb), 0.35);
      background: rgba(var(--secondary-rgb), 0.10);
      box-shadow: 0 12px 28px var(--border-color);
    }

    /* ===== PROJECTS (bordered premium cards) ===== */
    .projects-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1.5rem;
      max-width: 900px;
      margin: 0 auto;
    }

    .project-card {
      padding: 1.5rem;
      background: #fff;
      border-radius: 12px;
      border: 2px solid var(--border-color);
      box-shadow: var(--shadow-light);
      transition: transform 0.26s cubic-bezier(0.2, 0.7, 0.2, 1),
                  box-shadow 0.26s ease,
                  border-color 0.26s ease;
      position: relative;
      overflow: hidden;
    }

    body.dark .project-card {
      background: var(--card-dark);
      border-color: rgba(var(--secondary-rgb), 0.45);
      box-shadow: var(--shadow-dark);
    }

    .project-card::before {
      content: "";
      position: absolute;
      inset: -80px;
      background: radial-gradient(circle at 20% 10%, var(--border-color), transparent 45%);
      opacity: 0;
      transition: opacity 0.3s ease;
      pointer-events: none;
    }

    .project-card::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 70%;
      height: 7px;
      background: linear-gradient(90deg, var(--text-muted), rgba(var(--secondary-rgb), 0.95), var(--text-muted));
      opacity: 0.9;
      transform: translate3d(-120%, 0, 0);
      transition: opacity 0.3s ease;
      animation: beamSlide 4.8s ease-in-out infinite;
      z-index: 2;
      pointer-events: none;
      will-change: transform, opacity;
    }

    .project-card:hover {
      transform: translateY(-7px) scale(1.012);
      border-color: var(--primary-color);
      box-shadow: var(--shadow-hover-light);
    }

    body.dark .project-card:hover {
      border-color: rgba(var(--secondary-rgb), 0.75);
      box-shadow: var(--shadow-hover-dark);
    }

    .project-card:hover::after {
      opacity: 1;
      animation-duration: 1.2s;
    }

    .project-card h3 {
      font-size: 1.2rem;
      color: var(--primary-color);
      margin-bottom: 0.7rem;
      font-weight: 700;
      position: relative;
      z-index: 1;
    }

    body.dark .project-card h3 {
      color: var(--secondary);
    }

    .project-card p {
      color: #555;
      margin-bottom: 1rem;
      line-height: 1.6;
      font-size: 0.92rem;
      position: relative;
      z-index: 1;
    }

    body.dark .project-card p {
      color: #ccc;
    }

    .tech-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.4rem;
      margin-bottom: 1rem;
      position: relative;
      z-index: 1;
    }

    .tech-tag {
      background: rgba(var(--primary-rgb), 0.08);
      color: var(--primary-color);
      padding: 0.25rem 0.7rem;
      border-radius: 999px;
      font-size: 0.8rem;
      border: 2px solid rgba(var(--primary-rgb), 0.28);
      font-weight: 700;
    }

    body.dark .tech-tag {
      background: rgba(var(--secondary-rgb), 0.12);
      color: var(--secondary);
      border-color: var(--border-color);
    }

    .project-links {
      display: flex;
      gap: 0.6rem;
      flex-wrap: wrap;
      position: relative;
      z-index: 1;
      min-width: 0;
    }

    .project-btn {
      padding: 0.6rem 1.2rem;
      border-radius: 10px;
      text-decoration: none;
      font-weight: 800;
      transition: transform 0.25s ease, box-shadow 0.25s ease, background 0.25s ease, border-color 0.25s ease;
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      font-size: 0.88rem;
      border: 1px solid transparent;
      min-width: 0;
      text-align: center;
      overflow-wrap: anywhere;
    }

    .btn-live {
      background: var(--primary-color);
      color: #fff;
      box-shadow: 0 10px 22px var(--border-color);
    }

    body.dark .btn-live {
      background: var(--secondary);
      color: #001f3f;
      border-color: rgba(var(--secondary-rgb), 0.45);
      box-shadow: 0 10px 22px rgba(var(--secondary-rgb), 0.18);
    }

    .btn-live:hover {
      transform: translateY(-2px);
      box-shadow: 0 14px 28px rgba(var(--primary-rgb), 0.24);
    }

    body.dark .btn-live:hover {
      background: #ffffff;
      color: #001f3f;
      box-shadow: 0 14px 28px rgba(var(--secondary-rgb), 0.24);
    }

    .btn-github {
      background: transparent;
      color: var(--primary-color);
      border: 1.5px solid var(--primary-color);
    }

    body.dark .btn-github {
      color: var(--secondary);
      border-color: var(--secondary);
    }

    .btn-github:hover {
      transform: translateY(-2px);
      background: var(--primary-color);
      color: #fff;
    }

    body.dark .btn-github:hover {
      background: var(--secondary);
      color: var(--primary-color);
    }

    /* ===== EXPERIENCE / CERT / CONTACT keep bordered premium ===== */
    .experience-grid {
      display: grid;
      gap: 1.5rem;
      max-width: 900px;
      margin: 0 auto;
    }

    .experience-card {
      padding: 1.5rem;
      background: #fff;
      border-radius: 12px;
      border: 2px solid var(--border-color);
      border-left: 4px solid var(--primary-color);
      box-shadow: var(--shadow-light);
      transition: transform 0.23s cubic-bezier(0.16, 1, 0.3, 1),
                  box-shadow 0.23s ease,
                  border-color 0.23s ease;
      position: relative;
      overflow: hidden;
    }

    body.dark .experience-card {
      background: var(--card-dark);
      border-color: rgba(var(--secondary-rgb), 0.45);
      border-left-color: var(--secondary);
      box-shadow: var(--shadow-dark);
    }

    .experience-card:hover {
      transform: translateY(-4px);
      border-color: var(--primary-color);
      border-left-color: var(--primary-color);
      box-shadow: var(--shadow-hover-light);
    }

    body.dark .experience-card:hover {
      border-color: rgba(var(--secondary-rgb), 0.75);
      border-left-color: var(--secondary);
      box-shadow: var(--shadow-hover-dark);
    }

    .experience-card h3 {
      color: var(--primary-color);
      font-size: 1.25rem;
      margin-bottom: 0.4rem;
      font-weight: 800;
    }

    body.dark .experience-card h3 {
      color: var(--secondary);
    }

    .experience-card .company {
      color: #666;
      font-weight: 700;
      margin-bottom: 0.8rem;
      font-size: 0.95rem;
    }

    body.dark .experience-card .company {
      color: #aaa;
    }

    .experience-card p {
      color: #555;
      line-height: 1.7;
      font-size: 0.92rem;
    }

    body.dark .experience-card p {
      color: #ccc;
    }

    .certificates-grid {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 1.5rem;
    }

    .certificate-card {
      border-radius: var(--radius);
      overflow: hidden;
      border: 2px solid var(--border-color);
      background: #fff;
      box-shadow: var(--shadow-light);
      transition: transform 0.28s cubic-bezier(0.22, 0.61, 0.36, 1), box-shadow 0.28s ease, border-color 0.28s ease;
      position: relative;
    }

    .certificate-card::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 65%;
      height: 100%;
      background: linear-gradient(120deg, transparent 0%, rgba(var(--secondary-rgb), 0.3) 48%, transparent 100%);
      transform: translate3d(-140%, 0, 0) skewX(-18deg);
      pointer-events: none;
      z-index: 2;
      animation: certShimmer 3.2s ease-in-out infinite;
      will-change: transform;
    }

    body.dark .certificate-card {
      background: var(--card-dark);
      border-color: rgba(var(--secondary-rgb), 0.52);
      box-shadow: var(--shadow-dark);
    }

    .certificate-card:hover {
      transform: translateY(-6px) scale(1.015);
      box-shadow: var(--shadow-hover-light);
      border-color: var(--primary-color);
    }

    .certificate-card:hover::before {
      animation-duration: 1.2s;
    }

    body.dark .certificate-card:hover {
      border-color: var(--secondary);
      box-shadow: var(--shadow-hover-dark);
    }

    .certificate-card img {
      width: 100%;
      height: 180px;
      object-fit: cover;
      border-bottom: 2px solid var(--primary-color);
      position: relative;
      z-index: 1;
      cursor: zoom-in;
    }

    body.dark .certificate-card img {
      border-bottom-color: var(--secondary);
    }

    .certificate-card:focus-within {
      outline: 3px solid rgba(var(--secondary-rgb), 0.7);
      outline-offset: 4px;
    }

    .certificate-preview {
      position: fixed;
      inset: 0;
      z-index: 1000;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 2rem;
      background: rgba(0, 12, 24, 0.82);
      opacity: 0;
      visibility: hidden;
      transition: opacity 0.22s ease, visibility 0.22s ease;
    }

    .certificate-preview.is-open {
      opacity: 1;
      visibility: visible;
    }

    .certificate-preview img {
      max-width: min(100%, 1100px);
      max-height: 86vh;
      object-fit: contain;
      border-radius: 10px;
      border: 2px solid var(--nav-bg);
      background: #fff;
      box-shadow: 0 24px 80px rgba(0, 0, 0, 0.42);
    }

    .certificate-preview-close {
      position: absolute;
      top: 1rem;
      right: 1rem;
      width: 44px;
      height: 44px;
      border: 0;
      border-radius: 50%;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      color: var(--primary-color);
      background: #fff;
      cursor: pointer;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.24);
      transition: transform 0.2s ease, background 0.2s ease;
    }

    .certificate-preview-close:hover,
    .certificate-preview-close:focus-visible {
      transform: scale(1.06);
      background: var(--secondary);
      outline: none;
    }

    .certificate-card .cert-content {
      padding: 1rem;
      position: relative;
      z-index: 1;
    }

    .certificate-card p {
      color: #333;
      font-size: 0.9rem;
      font-weight: 600;
    }

    body.dark .certificate-card p {
      color: var(--text-main);
    }

    .wakatime-section {
      text-align: center;
      padding: 1.5rem 2rem;
      width: min(1100px, calc(100% - 2rem));
      max-width: 1100px;
      margin: 1.5rem auto;
    }

    .wakatime-section h3 {
      color: var(--primary-color);
      margin-bottom: 1rem;
      font-size: 1.3rem;
      font-weight: 800;
    }

    body.dark .wakatime-section h3 {
      color: var(--secondary);
    }

    .wakatime-section a {
      color: var(--primary-color);
      text-decoration: none;
      font-weight: 700;
      transition: color 0.3s;
    }

    body.dark .wakatime-section a {
      color: var(--secondary);
    }

    .wakatime-section a:hover {
      color: var(--secondary);
    }

    .contact-grid {
      display: flex;
      justify-content: center;
      gap: 1.2rem;
      flex-wrap: wrap;
      margin-top: 1.5rem;
    }

    .contact-link {
      width: 50px;
      height: 50px;
      background: var(--primary-color);
      border: 1px solid rgba(255, 255, 255, 0.14);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease, color 0.3s ease, border-color 0.3s ease;
      color: #fff;
      text-decoration: none;
      box-shadow: 0 10px 22px var(--border-color);
    }

    body.dark .contact-link {
      background: var(--secondary);
      color: var(--primary-color);
      border-color: var(--border-color);
      box-shadow: 0 10px 22px rgba(var(--secondary-rgb), 0.16);
    }

    .contact-link:hover {
      background: var(--secondary);
      color: var(--primary-color);
      transform: translateY(-5px) scale(1.08);
      box-shadow: 0 16px 30px rgba(var(--secondary-rgb), 0.30);
    }

    body.dark .contact-link:hover {
      background: var(--primary-color);
      color: var(--secondary);
      box-shadow: 0 16px 30px rgba(var(--primary-rgb), 0.26);
    }

    footer {
      text-align: center;
      padding: 2rem;
      background: var(--primary-color);
      color: rgba(255, 255, 255, 0.8);
      margin-top: 3rem;
      border-top: 1px solid rgba(var(--secondary-rgb), 0.2);
    }

    body.dark footer {
      background: #020f1c;
      color: rgba(255, 255, 255, 0.82);
      border-top-color: rgba(var(--secondary-rgb), 0.28);
    }

    footer p {
      font-size: 0.9rem;
    }

    .motion-reveal {
      opacity: 0;
    }

    .motion-reveal.in-view {
      will-change: transform, opacity;
    }

    .motion-reveal.motion-done {
      will-change: auto;
    }

    .motion-reveal.reveal-up.in-view {
      animation: revealUp 0.75s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
      animation-delay: var(--motion-delay, 0ms);
    }

    .motion-reveal.reveal-depth.in-view {
      animation: revealDepth 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
      animation-delay: var(--motion-delay, 0ms);
    }

    @media (prefers-reduced-motion: reduce) {
      .motion-reveal,
      .motion-reveal.reveal-up.in-view,
      .motion-reveal.reveal-depth.in-view {
        opacity: 1 !important;
        animation: none !important;
        transform: none !important;
      }

      .project-card::after {
        animation: none !important;
      }
    }

    /* ===== RESPONSIVE ===== */
    @media (max-width: 1024px) {
      html,
      body {
        width: 100%;
        max-width: 100%;
        overflow-x: hidden;
      }

      body > * {
        max-width: 100vw;
      }

      .hero,
      footer,
      section:not(.hero) {
        overflow-x: clip;
      }

      .nav-wrapper {
        top: 0.7rem;
        width: calc(100vw - 1.4rem);
        max-width: calc(100vw - 1.4rem);
        align-items: stretch;
      }

      nav {
        padding: 0.3rem 0.75rem;
        gap: 0.25rem;
        width: 100%;
      }

      nav .logo {
        min-width: 0;
        font-size: 0.78rem;
        max-width: min(40vw, 12rem);
      }

      .theme-toggle {
        position: static;
        transform: none;
        margin-left: 0;
      }

      .theme-toggle:hover {
        transform: rotate(180deg) scale(1.05);
      }

      .menu-toggle {
        margin-left: auto;
        display: inline-flex;
      }

      .nav-links {
        display: none;
      }

      .nav-dropdown {
        display: flex;
      }

      section:not(.hero) {
        width: min(1100px, calc(100% - 1.6rem));
      }

      .projects-grid {
        grid-template-columns: 1fr;
      }

      .certificates-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }

      body:not(.dark) section:not(.hero):hover,
      body.dark section:not(.hero):hover,
      .about-list li:hover,
      .project-card:hover,
      .tech-group:hover,
      .experience-card:hover,
      .certificate-card:hover {
        transform: none;
      }
    }

    @media (max-width: 900px) {
      .tech-groups {
        grid-template-columns: 1fr;
      }

      .tech-group:nth-child(n) {
        grid-column: 1;
      }

      .hero {
        padding: 5rem 1.4rem 2.8rem;
      }

      .cta-buttons {
        gap: 0.8rem;
      }
    }

    @media (max-width: 768px) {
      .hero {
        min-height: 92vh;
      }

      .hero h1 {
        font-size: clamp(1.3rem, 5.5vw, 1.65rem);
        line-height: 1.25;
      }

      .hero .subtitle {
        font-size: 0.9rem;
      }

      .hero .bio {
        font-size: 0.88rem;
        line-height: 1.65;
      }

      .btn {
        padding: 0.6rem 1.3rem;
        font-size: 0.85rem;
      }

      section:not(.hero) {
        padding: 2.5rem 1.5rem;
      }

      .profile-img {
        width: 148px;
        height: 148px;
      }

      nav {
        padding: 0.7rem 1.5rem;
      }

      #about {
        margin-top: 1rem;
      }

      .tech-pill {
        font-size: 0.82rem;
      }
    }

    @media (max-width: 560px) {
      nav {
        padding: 0.65rem 0.9rem;
      }

      nav .logo {
        font-size: 0.98rem;
        max-width: 36vw;
      }

      .theme-selector select {
        width: 5.5rem;
        height: 32px;
        font-size: 0.72rem;
        padding-left: 0.55rem;
        padding-right: 1.25rem;
      }

      .menu-toggle {
        width: 32px;
        height: 32px;
      }

      .nav-links {
        left: 0.9rem;
        right: 0.9rem;
      }

      .nav-links a {
        font-size: 0.8rem;
        padding: 0.68rem 0.55rem;
      }

      .hero h1 {
        font-size: clamp(1.15rem, 5vw, 1.35rem);
      }

      .hero .subtitle {
        font-size: 0.82rem;
      }

      .hero .bio {
        font-size: 0.82rem;
      }

      .btn {
        padding: 0.55rem 1.1rem;
        font-size: 0.82rem;
      }

      .theme-toggle {
        width: 36px;
        height: 36px;
      }

      .hero {
        min-height: 88vh;
        padding: 5.5rem 0.95rem 2.2rem;
      }

      .hero .bio {
        max-width: 100%;
      }

      section:not(.hero) {
        width: min(1100px, calc(100% - 1rem));
        padding: 2.1rem 1rem;
      }

      .cta-buttons .btn {
        width: auto;
        padding: 0.5rem 1.2rem;
        font-size: 0.82rem;
      }

      .project-links {
        width: 100%;
      }

      .certificates-grid {
        grid-template-columns: 1fr;
      }

      .project-btn {
        width: 100%;
        justify-content: center;
      }

      .contact-grid {
        gap: 0.9rem;
      }

      .certificate-preview {
        padding: 1rem;
      }

      .certificate-preview img {
        max-width: 100%;
      }

      .tech-pill {
        white-space: normal;
        overflow-wrap: anywhere;
      }

      .tech-pill i {
        flex: 0 0 auto;
      }

      .section-title,
      .project-card h3,
      .experience-card h3,
      .certificate-card p,
      .about-list li,
      .project-card p,
      .experience-card p,
      footer p {
        overflow-wrap: anywhere;
      }
    }

    @media (hover: none) {
      .project-card:hover,
      .tech-group:hover,
      .experience-card:hover,
      .certificate-card:hover {
        transform: none;
      }
    }
  `;

export default function Home() {
  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      <HomeClient />
    </>
  );
}
