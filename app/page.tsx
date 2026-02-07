import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-black font-sans min-h-screen">
      <Navbar />
      <Hero />
      <Footer />
    </main>
  );
}
