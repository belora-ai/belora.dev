"use client";

import { useEffect, useState } from "react";

interface GlitchTextProps {
  text: string;
  className?: string;
}

export function GlitchText({ text, className = "" }: GlitchTextProps) {
  return (
    <div className={`relative inline-block ${className}`}>
      <span className="relative z-10">{text}</span>
      <span
        className="absolute left-0 top-0 -z-10 animate-glitch-1 text-[var(--chart-3)]"
        aria-hidden="true"
      >
        {text}
      </span>
      <span
        className="absolute left-0 top-0 -z-10 animate-glitch-2 text-primary"
        aria-hidden="true"
      >
        {text}
      </span>
    </div>
  );
}
