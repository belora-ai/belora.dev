export const TAGLINE = "Turn every conversation into a product experiment";
export const SITE_CONFIG = {
  name: "Belora",
  longName: `Belora - ${TAGLINE}`,
  tagline: TAGLINE,
  email: "inquiries@belora.dev",
  status: "Coming Soon",
} as const;

interface NavLink {
  label: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [];
