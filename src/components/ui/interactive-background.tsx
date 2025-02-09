"use client";

import { useEffect } from "react";
import { m, useMotionValue, useSpring, useTransform } from "framer-motion";

export function InteractiveBackground() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 200 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  // Faster spring for cursor effects
  const cursorSpringConfig = { damping: 15, stiffness: 150 };
  const cursorSpringX = useSpring(cursorX, cursorSpringConfig);
  const cursorSpringY = useSpring(cursorY, cursorSpringConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

      // Convert mouse position to normalized values (-0.5 to 0.5)
      const xPos = clientX / innerWidth - 0.5;
      const yPos = clientY / innerHeight - 0.5;

      mouseX.set(xPos);
      mouseY.set(yPos);

      // Set actual cursor position in pixels
      cursorX.set(clientX);
      cursorY.set(clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY, cursorX, cursorY]);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Main gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />

      {/* Interactive gradient overlay */}
      <m.div
        style={{
          x: springX,
          y: springY,
        }}
        className="absolute inset-0"
      >
        {/* Main spotlight effect */}
        <m.div
          style={{
            x: useTransform(springX, [-0.5, 0.5], ["25%", "75%"]),
            y: useTransform(springY, [-0.5, 0.5], ["25%", "75%"]),
          }}
          className="absolute w-full h-full"
        >
          {/* Large background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%]">
            <div className="absolute inset-0 bg-gradient-radial from-indigo-500/10 via-purple-500/5 to-transparent blur-3xl" />
          </div>

          {/* Medium glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%]">
            <div className="absolute inset-0 bg-gradient-radial from-purple-500/15 via-pink-500/5 to-transparent blur-2xl" />
          </div>

          {/* Small focused glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40%] h-[40%]">
            <div className="absolute inset-0 bg-gradient-radial from-pink-500/20 via-indigo-500/5 to-transparent blur-xl" />
          </div>
        </m.div>
        {/* Cursor spotlight */}
        <m.div
          style={{
            x: cursorSpringX,
            y: cursorSpringY,
          }}
          className="fixed top-0 left-0 pointer-events-none"
        >
          {/* Inner glow */}
          <div className="relative -translate-x-1/2 -translate-y-1/2">
            <div className="absolute h-[150px] w-[150px] rounded-full bg-gradient-radial from-purple-500/20 to-transparent blur-xl" />
            <div className="absolute h-[100px] w-[100px] rounded-full bg-gradient-radial from-indigo-500/25 to-transparent blur-lg" />
            <div className="absolute h-[50px] w-[50px] rounded-full bg-gradient-radial from-pink-500/30 to-transparent blur-md" />
          </div>
        </m.div>
        {/* Grain overlay
        <div className="absolute inset-0 opacity-20 mix-blend-overlay">
          <div className="absolute inset-0 bg-[url('/noise.png')] bg-repeat opacity-20" />
        </div> */}
      </m.div>
    </div>
  );
}
