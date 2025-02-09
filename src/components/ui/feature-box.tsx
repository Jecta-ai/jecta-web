"use client";

import { m } from "framer-motion";
import type { ReactNode } from "react";

interface FeatureBoxProps {
  title: string;
  description: string;
  icon: ReactNode;
  isLarge?: boolean;
}

export function FeatureBox({ title, description, icon, isLarge }: FeatureBoxProps) {
  return (
    <m.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
      }}
      className={`group relative overflow-hidden rounded-3xl bg-black/40 backdrop-blur-xl border border-white/[0.1] p-8 transition-all duration-300 ${
        isLarge ? "md:col-span-2" : ""
      }`}
    >
      {/* Border glow effect */}
      <div className="absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
        {/* Top edge */}
        <div className="absolute top-0 inset-x-0 h-[60px] bg-[linear-gradient(180deg,rgba(255,255,255,0.04),transparent)]" />
        {/* Bottom edge */}
        <div className="absolute bottom-0 inset-x-0 h-[60px] bg-[linear-gradient(0deg,rgba(255,255,255,0.04),transparent)]" />
        {/* Left edge */}
        <div className="absolute left-0 inset-y-0 w-[60px] bg-[linear-gradient(90deg,rgba(255,255,255,0.04),transparent)]" />
        {/* Right edge */}
        <div className="absolute right-0 inset-y-0 w-[60px] bg-[linear-gradient(270deg,rgba(255,255,255,0.04),transparent)]" />

        {/* Corner overlays for stronger corner effect */}
        <div className="absolute -top-10 -left-10 w-20 h-20 bg-[radial-gradient(circle,rgba(255,255,255,0.03),transparent_50%)]" />
        <div className="absolute -top-10 -right-10 w-20 h-20 bg-[radial-gradient(circle,rgba(255,255,255,0.03),transparent_50%)]" />
        <div className="absolute -bottom-10 -left-10 w-20 h-20 bg-[radial-gradient(circle,rgba(255,255,255,0.03),transparent_50%)]" />
        <div className="absolute -bottom-10 -right-10 w-20 h-20 bg-[radial-gradient(circle,rgba(255,255,255,0.03),transparent_50%)]" />
      </div>

      <div className="relative flex flex-col h-full">
        <div className="mb-4 p-3 rounded-xl bg-white/[0.05] w-fit transition-colors duration-300 group-hover:bg-white/[0.08]">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-4">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </m.div>
  );
}
