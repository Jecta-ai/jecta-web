import { Header } from "@/components/layout/header";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      {/* Hero section will go here */}
      <div className="h-16" /> {/* Spacer for fixed header */}
    </main>
  );
}
