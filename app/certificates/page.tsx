import type { Metadata } from "next";
import CertificatesClient from "./CertificatesClient";

export const metadata: Metadata = {
  title: "Certificates",
};

const styles = `
    *, *::before, *::after {
      margin: 0; padding: 0; box-sizing: border-box;
    }

    html {
      scroll-behavior: smooth;
      scroll-padding-top: 90px;
      overflow-x: hidden;
    }

    /* ===== THEME VARIABLES ===== */
    :root, [data-theme="light"] {
      --body-bg: radial-gradient(ellipse at 20% 10%, rgba(0,31,63,0.06) 0%, transparent 55%), radial-gradient(ellipse at 80% 50%, rgba(115,210,222,0.07) 0%, transparent 50%), linear-gradient(175deg,#fff 0%,#f4f6f8 30%,#edf1f5 60%,#f0f4f7 100%);
      --nav-bg: rgba(255,255,255,0.82);
      --nav-dropdown-bg: rgba(255,255,255,0.96);
      --card-bg: #ffffff;
      --card-bg-light: #ffffff;
      --text-main: #001f3f;
      --text-heading: #001f3f;
      --text-muted: rgba(0,31,63,0.75);
      --text-bio: rgba(13,27,42,0.75);
      --primary-color: #001f3f;
      --primary-rgb: 0,31,63;
      --secondary: #001f3f;
      --secondary-rgb: 0,31,63;
      --border-color: rgba(0,31,63,0.16);
      --shadow-dropdown: 0 12px 36px rgba(0,31,63,0.14);
      --shadow-nav: 0 8px 32px rgba(0,31,63,0.12), 0 2px 8px rgba(0,31,63,0.06);
      --shadow-light: 0 10px 30px rgba(0,0,0,0.08);
      --shadow-hover-light: 0 18px 50px rgba(0,31,63,0.16);
      --radius: 14px;
    }

    [data-theme="dark"] {
      --body-bg: #000000;
      --nav-bg: rgba(0,0,0,0.8);
      --nav-dropdown-bg: rgba(0,0,0,0.9);
      --card-bg: rgba(255,255,255,0.03);
      --card-bg-light: #080c10;
      --text-main: #e8e8e8;
      --text-heading: #ffffff;
      --text-muted: rgba(255,255,255,0.85);
      --text-bio: rgba(255,255,255,0.9);
      --primary-color: #ffffff;
      --primary-rgb: 255,255,255;
      --secondary: #00e5ff;
      --secondary-rgb: 0,229,255;
      --border-color: rgba(0,229,255,0.2);
      --shadow-dropdown: 0 12px 36px rgba(0,0,0,0.5);
      --shadow-nav: 0 4px 20px rgba(0,0,0,0.5);
      --shadow-light: 0 10px 30px rgba(0,229,255,0.08);
      --shadow-hover-light: 0 18px 50px rgba(0,229,255,0.12);
      --radius: 14px;
    }

    [data-theme="cupcake"] {
      --body-bg: #faf7f5;
      --nav-bg: rgba(250,247,245,0.9);
      --nav-dropdown-bg: #faf7f5;
      --card-bg: #ffffff;
      --card-bg-light: #ffffff;
      --text-main: #291334;
      --text-heading: #291334;
      --text-muted: rgba(41,19,52,0.7);
      --text-bio: rgba(41,19,52,0.8);
      --primary-color: #65c3c8;
      --primary-rgb: 101,195,200;
      --secondary: #ef9fbc;
      --secondary-rgb: 239,159,188;
      --border-color: rgba(41,19,52,0.1);
      --shadow-dropdown: 0 12px 36px rgba(41,19,52,0.1);
      --shadow-nav: 0 4px 20px rgba(41,19,52,0.05);
      --shadow-light: 0 10px 30px rgba(0,0,0,0.08);
      --shadow-hover-light: 0 18px 50px rgba(101,195,200,0.2);
      --radius: 14px;
    }

    [data-theme="synthwave"] {
      --body-bg: #1a1025;
      --nav-bg: rgba(26,16,37,0.9);
      --nav-dropdown-bg: #1a1025;
      --card-bg: rgba(255,255,255,0.05);
      --card-bg-light: #2d1b4e;
      --text-main: #f9f8fa;
      --text-heading: #f9f8fa;
      --text-muted: rgba(249,248,250,0.7);
      --text-bio: rgba(249,248,250,0.8);
      --primary-color: #e779c1;
      --primary-rgb: 231,121,193;
      --secondary: #58c7f3;
      --secondary-rgb: 88,199,243;
      --border-color: rgba(231,121,193,0.3);
      --shadow-dropdown: 0 12px 36px rgba(231,121,193,0.2);
      --shadow-nav: 0 4px 20px rgba(231,121,193,0.1);
      --shadow-light: 0 10px 30px rgba(231,121,193,0.08);
      --shadow-hover-light: 0 18px 50px rgba(231,121,193,0.2);
      --radius: 14px;
    }

    [data-theme="valentine"] {
      --body-bg: #f0e6e6;
      --nav-bg: rgba(240,230,230,0.9);
      --nav-dropdown-bg: #f0e6e6;
      --card-bg: #ffffff;
      --card-bg-light: #ffffff;
      --text-main: #632c3b;
      --text-heading: #632c3b;
      --text-muted: rgba(99,44,59,0.7);
      --text-bio: rgba(99,44,59,0.8);
      --primary-color: #e96d7b;
      --primary-rgb: 233,109,123;
      --secondary: #a990a9;
      --secondary-rgb: 169,144,169;
      --border-color: rgba(233,109,123,0.2);
      --shadow-dropdown: 0 12px 36px rgba(233,109,123,0.15);
      --shadow-nav: 0 4px 20px rgba(233,109,123,0.1);
      --shadow-light: 0 10px 30px rgba(233,109,123,0.08);
      --shadow-hover-light: 0 18px 50px rgba(233,109,123,0.2);
      --radius: 14px;
    }

    [data-theme="cyberpunk"] {
      --body-bg: #ffee00;
      --nav-bg: rgba(255,238,0,0.9);
      --nav-dropdown-bg: #ffee00;
      --card-bg: rgba(0,0,0,0.05);
      --card-bg-light: #000000;
      --text-main: #000000;
      --text-heading: #000000;
      --text-muted: rgba(0,0,0,0.7);
      --text-bio: rgba(0,0,0,0.8);
      --primary-color: #ff003c;
      --primary-rgb: 255,0,60;
      --secondary: #00ffff;
      --secondary-rgb: 0,255,255;
      --border-color: rgba(0,0,0,0.2);
      --shadow-dropdown: 0 12px 36px rgba(0,0,0,0.2);
      --shadow-nav: 0 4px 20px rgba(0,0,0,0.1);
      --shadow-light: 0 10px 30px rgba(255,0,60,0.08);
      --shadow-hover-light: 0 18px 50px rgba(255,0,60,0.18);
      --radius: 14px;
    }

    [data-theme="business"] {
      --body-bg: #ffffff;
      --nav-bg: rgba(255,255,255,0.95);
      --nav-dropdown-bg: #ffffff;
      --card-bg: #ffffff;
      --card-bg-light: #ffffff;
      --text-main: #1c1e21;
      --text-heading: #1c1e21;
      --text-muted: rgba(28,30,33,0.7);
      --text-bio: rgba(28,30,33,0.8);
      --primary-color: #1877f2;
      --primary-rgb: 24,119,242;
      --secondary: #42b72a;
      --secondary-rgb: 66,183,42;
      --border-color: rgba(0,0,0,0.1);
      --shadow-dropdown: 0 12px 36px rgba(0,0,0,0.1);
      --shadow-nav: 0 4px 20px rgba(0,0,0,0.05);
      --shadow-light: 0 10px 30px rgba(0,0,0,0.08);
      --shadow-hover-light: 0 18px 50px rgba(24,119,242,0.18);
      --radius: 14px;
    }

    [data-theme="corporate"] {
      --body-bg: #f8f9fa;
      --nav-bg: rgba(248,249,250,0.95);
      --nav-dropdown-bg: #f8f9fa;
      --card-bg: #ffffff;
      --card-bg-light: #ffffff;
      --text-main: #212529;
      --text-heading: #212529;
      --text-muted: rgba(33,37,41,0.7);
      --text-bio: rgba(33,37,41,0.8);
      --primary-color: #0d6efd;
      --primary-rgb: 13,110,253;
      --secondary: #6c757d;
      --secondary-rgb: 108,117,125;
      --border-color: rgba(0,0,0,0.1);
      --shadow-dropdown: 0 12px 36px rgba(0,0,0,0.1);
      --shadow-nav: 0 4px 20px rgba(0,0,0,0.05);
      --shadow-light: 0 10px 30px rgba(0,0,0,0.08);
      --shadow-hover-light: 0 18px 50px rgba(13,110,253,0.18);
      --radius: 14px;
    }

    [data-theme="halloween"] {
      --body-bg: #1a1a1a;
      --nav-bg: rgba(33,33,33,0.95);
      --nav-dropdown-bg: #212121;
      --card-bg: rgba(255,255,255,0.05);
      --card-bg-light: #000000;
      --text-main: #f5f5f5;
      --text-heading: #f5f5f5;
      --text-muted: rgba(245,245,245,0.7);
      --text-bio: rgba(245,245,245,0.8);
      --primary-color: #ff6d00;
      --primary-rgb: 255,109,0;
      --secondary: #9c27b0;
      --secondary-rgb: 156,39,176;
      --border-color: rgba(255,109,0,0.3);
      --shadow-dropdown: 0 12px 36px rgba(255,109,0,0.2);
      --shadow-nav: 0 4px 20px rgba(255,109,0,0.1);
      --shadow-light: 0 10px 30px rgba(255,109,0,0.08);
      --shadow-hover-light: 0 18px 50px rgba(255,109,0,0.2);
      --radius: 14px;
    }

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
      background: transparent;
    }

    /* ===== NAVIGATION ===== */
    .nav-wrapper {
      position: fixed;
      top: 1.1rem;
      left: 50%;
      transform: translateX(-50%);
      z-index: 1000;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      width: max-content;
      max-width: calc(100vw - 2.5rem);
    }

    nav {
      position: relative;
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
      transition: background 0.3s ease, border-color 0.3s ease;
    }

    nav .logo {
      font-size: 0.82rem;
      font-weight: 700;
      color: var(--primary-color);
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

    .nav-links {
      display: flex;
      align-items: center;
      gap: 0;
      margin-left: 0.3rem;
    }

    .nav-links a {
      color: var(--text-bio);
      text-decoration: none;
      font-size: 0.82rem;
      font-weight: 400;
      padding: 0.38rem 0.65rem;
      position: relative;
      transition: color 0.22s ease;
      white-space: nowrap;
    }

    .nav-links a::after {
      content: "";
      position: absolute;
      left: 0.65rem; right: 0.65rem;
      bottom: 0.1rem;
      height: 1.5px;
      border-radius: 999px;
      background: var(--secondary);
      transform: scaleX(0);
      transform-origin: center;
      transition: transform 0.22s ease;
    }

    .nav-links a:hover { color: var(--secondary); }
    .nav-links a:hover::after { transform: scaleX(1); }

    .nav-dropdown {
      display: none;
      flex-direction: column;
      margin-top: 0.5rem;
      padding: 0.5rem;
      border-radius: 16px;
      background: var(--nav-dropdown-bg);
      backdrop-filter: blur(18px);
      border: 1px solid var(--border-color);
      box-shadow: var(--shadow-dropdown);
      min-width: 150px;
      opacity: 0;
      visibility: hidden;
      transform: translateY(-8px);
      transition: opacity 0.22s ease, transform 0.22s ease, visibility 0.22s ease;
    }

    .nav-wrapper.menu-open .nav-dropdown {
      opacity: 1; visibility: visible; transform: translateY(0);
    }

    .nav-dropdown a {
      color: var(--text-muted);
      text-decoration: none;
      font-size: 0.85rem;
      padding: 0.55rem 0.9rem;
      border-radius: 10px;
      transition: color 0.2s ease, background 0.2s ease;
    }

    .nav-dropdown a:hover {
      color: var(--secondary);
      background: rgba(var(--secondary-rgb), 0.1);
    }

    .menu-toggle {
      display: none;
      width: 34px; height: 34px;
      border: 0; border-radius: 999px;
      align-items: center; justify-content: center;
      color: var(--text-muted);
      background: transparent;
      cursor: pointer;
      transition: background 0.22s ease, color 0.22s ease;
      flex: 0 0 auto;
    }

    .menu-toggle:hover { color: var(--secondary); background: rgba(var(--secondary-rgb), 0.12); }

    .theme-selector { flex: 0 1 auto; min-width: 0; }

    .theme-selector select {
      width: clamp(6.2rem, 12vw, 8rem);
      max-width: 100%;
      height: 34px;
      border: 1px solid var(--border-color);
      border-radius: 999px;
      background: rgba(var(--primary-rgb), 0.05);
      color: var(--text-muted);
      font: inherit;
      font-size: 0.78rem;
      font-weight: 700;
      padding: 0 1.65rem 0 0.75rem;
      outline: none;
      cursor: pointer;
    }

    /* ===== PAGE HEADER ===== */
    .page-header {
      min-height: 40vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 7rem 2rem 3rem;
      position: relative;
      overflow: hidden;
    }

    .page-header::before {
      content: "";
      position: absolute;
      inset: 0;
      background:
        radial-gradient(ellipse at 70% 10%, rgba(var(--secondary-rgb), 0.13) 0%, transparent 45%),
        radial-gradient(ellipse at 10% 80%, rgba(var(--primary-rgb), 0.08) 0%, transparent 40%),
        radial-gradient(circle, rgba(var(--secondary-rgb), 0.04) 1px, transparent 1px);
      background-size: auto, auto, 36px 36px;
      pointer-events: none;
    }

    .page-header-inner { position: relative; z-index: 1; }

    .back-btn {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      text-decoration: none;
      color: var(--text-muted);
      font-size: 0.88rem;
      font-weight: 600;
      padding: 0.45rem 1rem;
      border-radius: 999px;
      border: 1px solid var(--border-color);
      background: rgba(var(--primary-rgb), 0.05);
      margin-bottom: 1.5rem;
      transition: all 0.22s ease;
      backdrop-filter: blur(8px);
    }

    .back-btn:hover {
      background: rgba(var(--secondary-rgb), 0.1);
      border-color: var(--secondary);
      color: var(--secondary);
      transform: translateX(-3px);
    }

    .page-header h1 {
      font-size: clamp(2rem, 4.5vw, 3rem);
      font-weight: 800;
      color: var(--text-heading);
      margin-bottom: 0.75rem;
      letter-spacing: -0.5px;
    }

    .page-header h1 span { color: var(--secondary); }

    .page-header p {
      font-size: clamp(0.95rem, 1.8vw, 1.05rem);
      color: var(--text-muted);
      max-width: 550px;
    }

    /* ===== CERTIFICATES GRID ===== */
    .certificates-section {
      width: min(1100px, calc(100% - 2rem));
      margin: 1rem auto 5rem;
      padding: 0 1rem;
    }

    .certificates-grid-full {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 1.8rem;
    }

    .certificate-card {
      border-radius: var(--radius);
      overflow: hidden;
      border: 1px solid var(--border-color);
      background: var(--card-bg);
      box-shadow: var(--shadow-light);
      transition: transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease;
      position: relative;
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

    @media (prefers-reduced-motion: reduce) {
      .certificate-card::before {
        animation: none;
      }
    }

    .certificate-card:hover {
      transform: translateY(-4px);
      box-shadow: var(--shadow-hover-light);
      border-color: rgba(var(--primary-rgb), 0.3);
    }

    .certificate-card img {
      width: 100%;
      height: 190px;
      object-fit: cover;
      border-bottom: 2px solid var(--primary-color);
      position: relative;
      z-index: 1;
      cursor: zoom-in;
    }

    .certificate-card:focus-within {
      outline: 3px solid rgba(var(--secondary-rgb), 0.7);
      outline-offset: 4px;
    }

    .certificate-card .cert-content {
      padding: 1rem;
      position: relative;
      z-index: 1;
    }

    .certificate-card p {
      color: var(--text-main);
      font-size: 0.9rem;
      font-weight: 600;
    }

    /* ===== CERTIFICATE PREVIEW (LIGHTBOX) ===== */
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

    /* ===== RESPONSIVE ===== */
    @media (max-width: 1024px) {
      .nav-wrapper {
        top: 0.7rem;
        width: calc(100vw - 1.4rem);
        max-width: calc(100vw - 1.4rem);
        align-items: stretch;
      }
      nav { padding: 0.3rem 0.75rem; width: 100%; }
      .menu-toggle { margin-left: auto; display: inline-flex; }
      .nav-links { display: none; }
      .nav-dropdown { display: flex; }
      .certificates-grid-full { grid-template-columns: repeat(2, minmax(0, 1fr)); }

      .certificate-card:hover {
        transform: none;
      }
    }

    @media (max-width: 600px) {
      .page-header { padding: 6rem 1.2rem 2rem; }
      .certificates-section { width: calc(100% - 1rem); }
      .certificates-grid-full { grid-template-columns: 1fr; }
      .certificate-preview { padding: 1rem; }
      .certificate-preview img { max-width: 100%; }
    }

    @media (hover: none) {
      .certificate-card:hover {
        transform: none;
      }
    }
  `;

export default function CertificatesPage() {
  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      <CertificatesClient />
    </>
  );
}
