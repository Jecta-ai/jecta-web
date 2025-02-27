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
    description: "Pushing the boundaries of what's possible in AI and DeFi.",
    icon: <Lightbulb className="w-6 h-6 text-indigo-400" />,
    animation: "pulse" as const,
  },

  {
    title: "Community",
    description: "Building and nurturing a strong, engaged community of developers and users with open-source structures.",
    icon: <Users className="w-6 h-6 text-pink-400" />,
    animation: "pulse" as const,
  },
  {
    title: "Security",
    description: "Maintaining the highest standards of security in our applications.",
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
                Jecta
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Building the first open-source future of DefAI on Injective Blockchain.
            </p>
          </m.div>

          {/* Mission Section */}
          <m.div variants={item} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight">Our Mission</h2>
              <p className="text-lg text-muted-foreground">
              Jecta is built to seamlessly integrate with the entire Injective ecosystem, delivering the best user experience possible. Our goal is to create an AI that can handle every task you perform on Injective. Executing smart contracts, querying any data, and analyzing everything with ease. No more manual effort or switching between platforms. Jecta brings automation, intelligence, and real-time execution to your workflow. As development continues, Jecta will evolve to become the go-to AI assistant for all things Injective, empowering users to navigate the blockchain effortlessly. 🚀✨
              </p>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-indigo-500" />
                  <span>Jecta will automate everything on Injective.</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-purple-500" />
                  <span>Execute, query, and analyze with ease.</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-pink-500" />
                  <span>Fully open-source structure, transparent to everyone.</span>
                </li>
              </ul>
            </div>
            <div className="relative aspect-square w-full max-w-md mx-auto ">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-20 blur-2xl" />
              <Image
                src="/logo.jpeg"
                alt="Jecta"
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
              {values.map((value) => (
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
