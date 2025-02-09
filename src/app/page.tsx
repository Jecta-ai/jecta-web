import { Header } from "@/components/layout/header";
import { Hero } from "@/components/sections/hero";
import { Screenshot } from "@/components/sections/screenshot";
import { Features } from "@/components/sections/features";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <Hero />
      <Screenshot />
      <Features />
    </main>
  );
}
