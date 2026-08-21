"use client";

import { useCertificateLightbox } from "./CertificateLightbox";
import type { Certificate } from "./certificates-data";

interface CertificateCarouselProps {
  certificates: Certificate[];
}

/** Auto-scrolling cinematic marquee for the home page teaser; the full grid lives on /certificates. */
export default function CertificateCarousel({ certificates }: CertificateCarouselProps) {
  const open = useCertificateLightbox();
  // Duplicated once so the CSS animation can loop from -50% back to 0 seamlessly.
  const track = [...certificates, ...certificates];

  return (
    <div className="cert-carousel" role="region" aria-label="Certificate showcase, auto-scrolling">
      <div className="cert-carousel-fade cert-carousel-fade-left" aria-hidden="true" />
      <div className="cert-carousel-fade cert-carousel-fade-right" aria-hidden="true" />
      <div className="cert-carousel-track">
        {track.map((cert, i) => (
          <button
            key={`${cert.src}-${i}`}
            type="button"
            className="cert-carousel-slide"
            aria-label={`View ${cert.alt}`}
            tabIndex={i < certificates.length ? 0 : -1}
            aria-hidden={i >= certificates.length}
            onClick={() => open({ src: cert.src, alt: cert.alt })}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={cert.src} alt={cert.alt} loading="lazy" />
            <div className="cert-carousel-caption">
              <strong>{cert.title}</strong>
              <span>{cert.subtitle}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
