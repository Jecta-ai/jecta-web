"use client";

import { Button } from "@/components/ui/button";
import { m } from "framer-motion";
import Link from "next/link";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function Hero() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-4 pt-40 pb-20">
        <m.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center text-center space-y-8"
        >
          <m.div variants={item} className="max-w-3xl space-y-4">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Your AI Copilot for{" "}
              <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Injective Protocol
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Build, deploy, and manage smart contracts on Injective with AI-powered assistance. Get
              intelligent code suggestions, automated testing, and real-time debugging support.
            </p>
          </m.div>

          <m.div variants={item} className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild>
              <Link href="#get-started">Get Started</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#demo">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2 h-5 w-5"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polygon points="10 8 16 12 10 16 10 8" />
                </svg>
                Watch Demo
              </Link>
            </Button>
          </m.div>

          <m.div variants={item} className="pt-8">
            <div className="rounded-2xl border bg-black/40 backdrop-blur-xl border-white/[0.1] px-6 py-4">
              <p className="text-sm text-muted-foreground">Trusted by developers at</p>
              <div className="mt-3 flex items-center justify-center gap-6">
                {/* Add partner/company logos here */}
                <div className="text-muted-foreground/60">Company 1</div>
                <div className="text-muted-foreground/60">Company 2</div>
                <div className="text-muted-foreground/60">Company 3</div>
              </div>
            </div>
          </m.div>
        </m.div>
      </div>
    </section>
  );
}
