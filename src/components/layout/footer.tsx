"use client";

import { fadeIn } from "@/lib/animations";
import { m } from "framer-motion";
import { Github, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <m.footer
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="w-full border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-4 md:px-0">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.jpeg"
              alt="Injective Labs Logo"
              width={24}
              height={24}
              className="rounded-sm"
            />
            <span className="text-sm font-medium text-muted-foreground">Injective Labs</span>
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </a>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            <Twitter className="h-5 w-5" />
            <span className="sr-only">X (formerly Twitter)</span>
          </a>
          <p className="text-center text-sm text-muted-foreground md:text-left">
            © {currentYear} Injective Labs. All rights reserved.
          </p>
        </div>
      </div>
    </m.footer>
  );
};
