"use client";

import type { CSSProperties, ElementType, ReactNode } from "react";
import { useReveal } from "./useReveal";

interface RevealProps {
  as?: ElementType;
  id?: string;
  className?: string;
  variant?: "reveal-up" | "reveal-depth";
  delayMs?: number;
  children: ReactNode;
  [key: `data-${string}`]: string | undefined;
}

/** Drop-in wrapper that applies the site's staggered scroll-reveal animation. */
export default function Reveal({
  as: Tag = "div",
  id,
  className = "",
  variant = "reveal-up",
  delayMs = 0,
  children,
  ...rest
}: RevealProps) {
  const { ref, inView } = useReveal();

  const style = { "--motion-delay": `${delayMs}ms` } as CSSProperties;

  return (
    <Tag
      ref={ref}
      id={id}
      className={`motion-reveal ${variant} ${inView ? "in-view" : ""} ${className}`.trim()}
      style={style}
      {...rest}
    >
      {children}
    </Tag>
  );
}
