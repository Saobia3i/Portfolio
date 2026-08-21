"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { X } from "lucide-react";

interface CertificateImage {
  src: string;
  alt: string;
}

const CertificateLightboxContext = createContext<((image: CertificateImage) => void) | null>(null);

export function useCertificateLightbox() {
  const openLightbox = useContext(CertificateLightboxContext);
  if (!openLightbox) {
    throw new Error("useCertificateLightbox must be used within CertificateLightboxProvider");
  }
  return openLightbox;
}

/** Click-to-zoom preview for certificate thumbnails, with focus management and Esc-to-close. */
export function CertificateLightboxProvider({ children }: { children: ReactNode }) {
  const [image, setImage] = useState<CertificateImage | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const lastFocused = useRef<HTMLElement | null>(null);

  const open = useCallback((img: CertificateImage) => {
    lastFocused.current = document.activeElement as HTMLElement | null;
    setImage(img);
  }, []);

  const close = useCallback(() => {
    setImage(null);
    lastFocused.current?.focus();
  }, []);

  useEffect(() => {
    if (!image) return;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();
    return () => {
      document.body.style.overflow = "";
    };
  }, [image]);

  useEffect(() => {
    if (!image) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") close();
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [image, close]);

  return (
    <CertificateLightboxContext.Provider value={open}>
      {children}
      <div
        className={`certificate-preview ${image ? "is-open" : ""}`.trim()}
        aria-hidden={!image}
        role="dialog"
        aria-label="Certificate preview"
        onClick={(e) => {
          if (e.target === e.currentTarget) close();
        }}
      >
        <button
          ref={closeButtonRef}
          className="certificate-preview-close"
          type="button"
          aria-label="Close certificate preview"
          onClick={close}
        >
          <X aria-hidden="true" />
        </button>
        {image && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={image.src} alt={image.alt} />
        )}
      </div>
    </CertificateLightboxContext.Provider>
  );
}

export function CertificateCard({ src, alt, caption }: { src: string; alt: string; caption: ReactNode }) {
  const open = useCertificateLightbox();

  function handleKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      open({ src, alt });
    }
  }

  return (
    <div className="certificate-card">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        tabIndex={0}
        role="button"
        aria-label={`View ${alt}`}
        onClick={() => open({ src, alt })}
        onKeyDown={handleKeyDown}
      />
      <div className="cert-content">
        <p>{caption}</p>
      </div>
    </div>
  );
}
