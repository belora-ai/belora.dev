"use client";

import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "@/lib/constants/site";
import { Container } from "@/components/layout/Container";

export function Navbar() {
  return (
    <nav className="fixed left-0 right-0 top-0 z-40 border-b border-border bg-background/80 backdrop-blur-md">
      <Container className="flex h-[var(--navbar-height)] items-center justify-start gap-10">

        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo_full_text_white.svg"
            alt="Belora"
            width={100}
            height={28}
            priority
          />
        </Link>

        <div className="flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </Container>
    </nav>
  );
}
