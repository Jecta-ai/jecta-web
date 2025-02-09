"use client";

import { m } from "framer-motion";
import type { ReactNode } from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  variant?: "default" | "large" | "highlight";
}

export function FeatureCard({ title, description, icon, variant = "default" }: FeatureCardProps) {
  return (
    <m.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
      }}
      className={`group relative ${variant === "large" ? "md:col-span-2" : ""} ${
        variant === "highlight" ? "md:row-span-2" : ""
      }`}
    >
      <div
        className={`relative h-full overflow-hidden rounded-3xl border border-white/[0.1] p-8 ${
          variant === "large" ? "p-10" : "p-8"
        }`}
      >
        {/* Background */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-xl" />

        {/* Animated gradient overlay */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10" />
        </div>

        {/* Content */}
        <div className="relative flex items-start">
          {/* Icon */}
          <div className="mr-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/[0.05] group-hover:bg-white/[0.1] transition-colors duration-300">
              {icon}
            </div>
          </div>

          {/* Text */}
          <div className={variant === "large" ? "max-w-2xl" : ""}>
            <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-white/90 transition-colors duration-300">
              {title}
            </h3>
            <p className="text-muted-foreground group-hover:text-muted-foreground/80 transition-colors duration-300">
              {description}
            </p>
          </div>
        </div>

        {/* Shine effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.07] to-transparent" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent blur-sm" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent blur-sm" />
        </div>
      </div>
    </m.div>
  );
}
