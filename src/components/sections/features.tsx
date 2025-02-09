"use client";

import { m } from "framer-motion";
import { FeatureCard } from "../ui/feature-card";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const features = [
  {
    title: "AI-Powered Intelligence",
    description:
      "Experience the future of smart contract development with advanced AI models that understand your code, suggest improvements, and help prevent vulnerabilities.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        aria-hidden="true"
      >
        <path d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
      </svg>
    ),
    variant: "large" as const,
  },
  {
    title: "Real-Time Execution",
    description:
      "Deploy and execute smart contracts with confidence using our lightning-fast infrastructure and real-time monitoring system.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
        />
      </svg>
    ),
  },
  {
    title: "Ecosystem Integration",
    description:
      "Seamlessly connect with the entire Injective ecosystem. Our platform ensures perfect compatibility and smooth interactions across all protocols.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
        />
      </svg>
    ),
    variant: "highlight" as const,
  },
  {
    title: "Advanced Security",
    description:
      "Built-in security features protect your contracts from common vulnerabilities, with automated auditing and real-time threat detection.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
        />
      </svg>
    ),
  },
];

export function Features() {
  return (
    <section className="relative py-32 overflow-hidden" id="features">
      <div className="mx-auto max-w-7xl px-4">
        {/* Section Header */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative z-10 max-w-xl mx-auto md:mx-0"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Powerful Features for{" "}
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Smart Contract Development
            </span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Experience the next generation of blockchain development with our comprehensive suite of
            tools and features.
          </p>
        </m.div>

        {/* Features Grid */}
        <div className="relative mt-20">
          {/* Background gradient */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[800px] h-[800px] bg-gradient-conic from-indigo-500/30 via-purple-500/30 to-pink-500/30 rounded-full blur-3xl opacity-20" />
          </div>

          {/* Features */}
          <m.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
          >
            {features.map((feature) => (
              <FeatureCard
                key={feature.title}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                variant={feature.variant}
              />
            ))}
          </m.div>
        </div>
      </div>
    </section>
  );
}
