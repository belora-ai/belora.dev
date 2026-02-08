"use client";

import { Mail } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants/site";
import { Container } from "@/components/layout/Container";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="fixed bottom-0 left-0 right-0 z-40 border-t border-border bg-background/80 backdrop-blur-md">
      <Container className="flex h-14 items-center justify-between">
        <span className="font-mono text-xs tracking-wider text-muted-foreground">
          © {currentYear} {SITE_CONFIG.name}
        </span>

        <a
          href={`mailto:${SITE_CONFIG.email}`}
          className="group flex items-center gap-2 font-mono text-xs tracking-wider text-muted-foreground transition-colors hover:text-primary"
        >
          <Mail className="h-3.5 w-3.5" />
          <span>{SITE_CONFIG.email}</span>
        </a>
      </Container>
    </footer>
  );
}
