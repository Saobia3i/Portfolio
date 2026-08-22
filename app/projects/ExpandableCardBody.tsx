"use client";

import { useLayoutEffect, useRef, useState, type ReactNode } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const COLLAPSED_HEIGHT = 260;

/** Caps card body height so every card in a row starts equal-sized; a toggle expands it in place instead of stretching to match its tallest neighbor. */
export default function ExpandableCardBody({ children }: { children: ReactNode }) {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [expanded, setExpanded] = useState(false);
  const [overflows, setOverflows] = useState(false);

  useLayoutEffect(() => {
    const el = contentRef.current;
    if (!el) return;
    setOverflows(el.scrollHeight > COLLAPSED_HEIGHT + 2);
  }, [children]);

  return (
    <div className="card-expandable">
      <div
        ref={contentRef}
        className={`card-expandable-content ${expanded ? "is-expanded" : ""}`.trim()}
        style={!expanded ? { height: COLLAPSED_HEIGHT, maxHeight: COLLAPSED_HEIGHT } : undefined}
      >
        {children}
        {!expanded && overflows && <div className="card-expandable-fade" aria-hidden="true" />}
      </div>
      <div className="card-expandable-toggle-wrapper">
        {overflows && (
          <button
            type="button"
            className="card-expandable-toggle"
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
          >
            {expanded ? "Show less" : "Read more"}
            {expanded ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
          </button>
        )}
      </div>
    </div>
  );
}
