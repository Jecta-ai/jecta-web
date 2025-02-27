"use client";

import { m, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export function Screenshot() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0.3, 1]);

  return (
    <section ref={containerRef} className="relative py-40 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4">
        <m.div style={{ scale, opacity }} className="group relative">
          {/* Animated gradient backgrounds */}
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl blur-2xl opacity-40 group-hover:opacity-75 animate-gradient-xy" />
          <div
            className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl opacity-40 group-hover:opacity-75 animate-gradient-xy"
            style={{ animationDelay: "-2s" }}
          />
          <div className="absolute -inset-1 rounded-2xl opacity-40 group-hover:opacity-75 animate-border-width animate-border-color border-2 border-indigo-500/50" />

          <div className="relative rounded-2xl border bg-black/40 backdrop-blur-xl border-white/[0.1] overflow-hidden w-fit">
  {/* Screenshot */}
  <Image
    src="/ss.png"
    alt="Application Interface Screenshot"
    width={1300}  // Adjust width as needed
    height={700} // Adjust height as needed
    className="object-cover"
    priority
    quality={95}
  />

  {/* Glare effect overlay */}
  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none" />
</div>


        </m.div>
      </div>
    </section>
  );
}
