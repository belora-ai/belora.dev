import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LAYOUT_CONFIG } from "@/lib/constants/layout";

interface AppShellProps {
  children: React.ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  return (
    <div
      style={
        {
          "--navbar-height": LAYOUT_CONFIG.navbar.height,
        } as React.CSSProperties
      }
      className="relative flex min-h-screen flex-col font-sans"
    >
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
