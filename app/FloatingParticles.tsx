"use client";

import { useMemo } from "react";
import type { CSSProperties } from "react";

interface ParticleStyle extends CSSProperties {
  width: string;
  height: string;
  left: string;
  top: string;
  animationDelay: string;
  animationDuration: string;
}

function randomParticleStyle(): ParticleStyle {
  const size = `${Math.random() * 6 + 3}px`;
  return {
    width: size,
    height: size,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    animationDelay: `${Math.random() * 15}s`,
    animationDuration: `${Math.random() * 10 + 10}s`,
  };
}

/**
 * Decorative floating dots behind the hero section. Positions are randomized per
 * mount, so the server-rendered markup intentionally never matches the client's —
 * suppressHydrationWarning silences that expected, purely-cosmetic mismatch.
 */
export default function FloatingParticles({ count = 15 }: { count?: number }) {
  const particles = useMemo(() => Array.from({ length: count }, randomParticleStyle), [count]);

  return (
    <div className="particles" id="particles-container" suppressHydrationWarning>
      {particles.map((style, i) => (
        <div key={i} className="particle" style={style} suppressHydrationWarning />
      ))}
    </div>
  );
}
