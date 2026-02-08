import { Hero } from "@/components/Hero";
import { AppShell } from "@/components/layout/AppShell";
import { Container } from "@/components/layout/Container";
import { Page } from "@/components/layout/Page";

export default function Home() {
  return (
    <AppShell>
      <Page className="bg-black">
          <Hero />
      </Page>
    </AppShell>
  );
}
