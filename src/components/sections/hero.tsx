"use client";

import { Button } from "@/components/ui/button";
import { m } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

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

const logoAnimation = {
  hidden: { opacity: 0, scale: 0.8 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
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
          <m.div variants={logoAnimation} className="mb-8">
            <Image
              src="/logo.jpeg"
              alt="Injective Labs Logo"
              width={100}
              height={100}
              className="rounded-lg"
              priority
            />
          </m.div>

          <m.div variants={item} className="max-w-3xl space-y-4">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              First open-source AI copilot on{" "}
              <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Injective
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Meet Jecta. Your on-chain AI assistant for the best experience on Injective.
            </p>
          </m.div>

          <m.div variants={item} className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild>
              <Link href="https://jecta.gitbook.io/jecta/v0.0.2/jecta-v0.0.2">v0.0.2</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="https://github.com/Jecta-ai">
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
                Github
              </Link>
            </Button>
          </m.div>

          {/* TODO: Add partner/company logos here */}
          {/* <m.div variants={item} className="pt-8">
            <div className="rounded-2xl border bg-black/40 backdrop-blur-xl border-white/[0.1] px-6 py-4">
              <p className="text-sm text-muted-foreground">Trusted by developers at</p>
              <div className="mt-3 flex items-center justify-center gap-6">
                <div className="text-muted-foreground/60">Company 1</div>
                <div className="text-muted-foreground/60">Company 2</div>
                <div className="text-muted-foreground/60">Company 3</div>
              </div>
            </div>
          </m.div> */}
        </m.div>
      </div>
    </section>
  );
}
