"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Nav from "../Nav";
import { CertificateLightboxProvider, CertificateCard } from "../CertificateLightbox";
import { CERTIFICATES } from "../certificates-data";

const NAV_LINKS = [
  { href: "/#about", label: "About" },
  { href: "/#tech", label: "Tech" },
  { href: "/#projects", label: "Projects" },
  { href: "/#experience", label: "Experience" },
  { href: "/certificates", label: "Certificates" },
  { href: "/#contact", label: "Contact" },
];

export default function CertificatesClient() {
  return (
    <>
      <Nav links={NAV_LINKS} logoHref="/" />
      <header className="page-header">
        <div className="page-header-inner">
          <Link href="/#certificates" className="back-btn">
            <ArrowLeft size={16} />
            {" "}
            Back to Portfolio
          </Link>
          <h1>
            Certificates
            {" "}
            <span>&amp; Achievements</span>
          </h1>
          <p>
            A complete record of courses, hackathons, workshops, and organizing roles across robotics,
            cybersecurity, and software development.
          </p>
        </div>
      </header>
      <main className="certificates-section">
        <CertificateLightboxProvider>
          <div className="certificates-grid-full">
            {CERTIFICATES.map((cert) => (
              <CertificateCard
                key={cert.src}
                src={cert.src}
                alt={cert.alt}
                caption={
                  <>
                    <strong>{cert.title}</strong>
                    <br />
                    {cert.subtitle}
                  </>
                }
              />
            ))}
          </div>
        </CertificateLightboxProvider>
      </main>
    </>
  );
}
