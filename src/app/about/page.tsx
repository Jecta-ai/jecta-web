"use client";

import { m } from "framer-motion";
import Image from "next/image";
import { FeatureCard } from "@/components/ui/feature-card";
import { Lightbulb, Shield, Users } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const values = [
  {
    title: "Innovation",
    description: "Pushing the boundaries of what's possible in blockchain technology and DeFi.",
    icon: <Lightbulb className="w-6 h-6 text-indigo-400" />,
    animation: "pulse" as const,
  },

  {
    title: "Community",
    description: "Building and nurturing a strong, engaged community of developers and users.",
    icon: <Users className="w-6 h-6 text-pink-400" />,
    animation: "pulse" as const,
  },
  {
    title: "Security",
    description: "Maintaining the highest standards of security in all our applications.",
    icon: <Shield className="w-6 h-6 text-purple-400" />,
    animation: "pulse" as const,
  },
];

export default function AboutPage() {
  return (
    <div className="relative">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:py-32">
        <m.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center gap-16"
        >
          {/* Hero Section */}
          <m.div variants={item} className="text-center max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
              About{" "}
              <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Injective Labs
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Building the future of decentralized finance through innovative blockchain solutions
              and cutting-edge technology.
            </p>
          </m.div>

          {/* Mission Section */}
          <m.div variants={item} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight">Our Mission</h2>
              <p className="text-lg text-muted-foreground">
                At Injective Labs, we&apos;re on a mission to create a more inclusive and efficient
                financial system through blockchain technology. We believe in a future where
                financial services are accessible to everyone, everywhere.
              </p>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-indigo-500" />
                  <span>Building decentralized financial infrastructure</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-purple-500" />
                  <span>Empowering developers with powerful tools</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-pink-500" />
                  <span>Fostering innovation in blockchain technology</span>
                </li>
              </ul>
            </div>
            <div className="relative aspect-square w-full max-w-md mx-auto">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-20 blur-2xl" />
              <Image
                src="/logo.jpeg"
                alt="Injective Labs"
                fill
                className="object-contain p-8"
                priority
              />
            </div>
          </m.div>

          {/* Values Section */}
          <m.div variants={item} className="w-full">
            <h2 className="text-3xl font-bold tracking-tight text-center mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <FeatureCard
                  key={value.title}
                  title={value.title}
                  description={value.description}
                  icon={value.icon}
                  animation={value.animation}
                />
              ))}
            </div>
          </m.div>
        </m.div>
      </div>
    </div>
  );
}
