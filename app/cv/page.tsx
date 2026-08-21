import type { Metadata } from "next";
import CvClient from "./CvClient";

export const metadata: Metadata = {
  title: "Curriculum Vitae",
};

const styles = `
    *, *::before, *::after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    :root {
      /* Professional Executive Color Palette */
      --bg-color: #f8fafc;
      --paper-bg: #ffffff;
      --text-primary: #0f172a;
      --text-secondary: #334155;
      --text-muted: #64748b;
      --accent: #1e3a8a;
      --accent-light: #3b82f6;
      --border-color: #e2e8f0;
      --divider-color: #cbd5e1;
    }

    body {
      background: var(--bg-color);
      font-family: 'Inter', -apple-system, sans-serif;
      color: var(--text-primary);
      line-height: 1.5;
      display: flex;
      flex-direction: column;
      align-items: center;
      min-height: 100vh;
      padding: 40px 16px;
    }

    /* Actions Bar */
    .actions-bar {
      display: flex;
      gap: 12px;
      margin-bottom: 20px;
      width: min(900px, 100%);
      justify-content: flex-end;
    }

    .btn-action {
      padding: 8px 16px;
      border-radius: 6px;
      border: 1px solid var(--divider-color);
      background: var(--paper-bg);
      color: var(--text-primary);
      font-weight: 500;
      font-size: 0.85rem;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 8px;
      transition: all 0.15s ease;
      box-shadow: 0 1px 3px rgba(0,0,0,0.05);
      text-decoration: none;
    }

    .btn-action:hover {
      border-color: var(--accent);
      color: var(--accent);
      background: #f1f5f9;
    }

    /* CV Document Container */
    .cv-container {
      width: min(900px, 100%);
      background: var(--paper-bg);
      border: 1px solid var(--border-color);
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
      padding: 50px 60px;
      display: flex;
      flex-direction: column;
      gap: 28px;
    }

    /* Header Block */
    .cv-header {
      border-bottom: 2px solid var(--accent);
      padding-bottom: 20px;
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .header-top {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    .header-top h1 {
      font-size: 2.2rem;
      font-weight: 800;
      color: var(--accent);
      letter-spacing: -0.5px;
      line-height: 1.1;
    }

    .header-top h2 {
      font-size: 1.1rem;
      font-weight: 600;
      color: var(--text-secondary);
      letter-spacing: 1px;
      text-transform: uppercase;
    }

    /* Contact Details Grid */
    .contact-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
      gap: 8px 24px;
      font-size: 0.82rem;
      color: var(--text-secondary);
    }

    .contact-item {
      display: flex;
      align-items: center;
      gap: 8px;
      color: var(--text-secondary);
      text-decoration: none;
    }

    .contact-item i {
      color: var(--accent-light);
      width: 14px;
      text-align: center;
    }

    .contact-item:hover {
      color: var(--accent);
    }

    /* CV Section */
    .cv-section {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .section-title {
      font-size: 1rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: var(--accent);
      border-bottom: 1.5px solid var(--border-color);
      padding-bottom: 4px;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    /* Summary Box */
    .summary-text {
      font-size: 0.9rem;
      line-height: 1.6;
      color: var(--text-secondary);
      text-align: justify;
    }

    .summary-text strong {
      color: var(--text-primary);
      font-weight: 600;
    }

    /* Experience & Projects Items */
    .timeline-list {
      display: flex;
      flex-direction: column;
      gap: 18px;
    }

    .timeline-item {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    .item-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 12px;
    }

    .item-title {
      font-size: 0.95rem;
      font-weight: 700;
      color: var(--text-primary);
    }

    .item-meta {
      font-size: 0.88rem;
      font-weight: 600;
      color: var(--text-secondary);
    }

    .item-meta span {
      color: var(--text-muted);
      font-weight: 400;
    }

    .item-date {
      font-size: 0.82rem;
      font-weight: 600;
      color: var(--accent);
      white-space: nowrap;
    }

    .item-bullets {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 4px;
      margin-top: 4px;
    }

    .item-bullets li {
      font-size: 0.86rem;
      color: var(--text-secondary);
      line-height: 1.45;
      padding-left: 14px;
      position: relative;
    }

    .item-bullets li::before {
      content: "•";
      position: absolute;
      left: 0;
      color: var(--accent-light);
      font-size: 1rem;
      line-height: 1;
      top: 1px;
    }

    /* Skills Grid */
    .skills-container {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 12px 24px;
    }

    @media (max-width: 600px) {
      .skills-container {
        grid-template-columns: 1fr;
      }
    }

    .skill-category {
      font-size: 0.86rem;
      color: var(--text-secondary);
    }

    .skill-category strong {
      color: var(--text-primary);
      font-weight: 600;
      display: inline-block;
      width: 140px;
    }

    /* Achievements & Education */
    .simple-list {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 6px;
    }

    .simple-list li {
      font-size: 0.86rem;
      color: var(--text-secondary);
      line-height: 1.45;
      padding-left: 14px;
      position: relative;
    }

    .simple-list li::before {
      content: "•";
      position: absolute;
      left: 0;
      color: var(--accent-light);
      font-size: 1rem;
      top: 1px;
    }

    .education-block {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 12px;
    }

    .edu-title {
      font-size: 0.95rem;
      font-weight: 700;
      color: var(--text-primary);
    }

    .edu-meta {
      font-size: 0.86rem;
      color: var(--text-secondary);
      margin-top: 2px;
    }

    /* Print Styles */
    @media print {
      body {
        background: #ffffff !important;
        padding: 0 !important;
      }
      .actions-bar {
        display: none !important;
      }
      .cv-container {
        border: none !important;
        box-shadow: none !important;
        padding: 0 !important;
        width: 100% !important;
      }
      .contact-item i {
        color: #000000 !important;
      }
      .item-bullets li::before, .simple-list li::before {
        color: #000000 !important;
      }
      @page {
        size: A4;
        margin: 20mm 20mm 20mm 20mm;
      }
    }
  `;

export default function CvPage() {
  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      <CvClient />
    </>
  );
}
