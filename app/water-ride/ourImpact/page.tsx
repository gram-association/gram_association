"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

// Sample data for states and their dialogue content in the requested order
const states = [
  {
    name: "Rajasthan",
    position: { top: "20%", right: "50%" },
    dialogue:
      "GRAM's water conservation efforts in Rajasthan have impacted over 50 villages, providing clean drinking water to more than 25,000 people.",
    achievements: [
      "Installed 75+ water harvesting systems",
      "Built 25 check dams across drought-prone regions",
      "Conducted water-quality testing in 100+ locations",
      "Trained 500+ community members in water management",
    ],
  },
  {
    name: "Gujarat",
    position: { top: "40%", right: "55%" },
    dialogue:
      "Empowering local farmers with sustainable agricultural practices in Gujarat.",
  },
  {
    name: "Madhya Pradesh",
    position: { top: "35%", right: "37%" },
    dialogue:
      "Promoting afforestation and wildlife conservation in Madhya Pradesh.",
  },
  {
    name: "Maharashtra",
    position: { top: "53%", right: "42%" },
    dialogue:
      "GRAM's water conservation efforts in Maharashtra have impacted over 50 villages, providing clean drinking water to more than 25,000 people.",
    achievements: [
      "Installed 75 water harvesting systems",
      "Built 25 check dams across drought-prone regions",
      "Conducted water quality testing in 100+ locations",
      "Trained 500+ community members in water management",
    ],
  },
  {
    name: "Karnataka",
    position: { top: "75%", right: "43%" },
    dialogue:
      "Promoting renewable energy initiatives in Karnataka for a greener future.",
  },
  {
    name: "Tamil Nadu",
    position: { top: "90%", right: "33%" },
    dialogue:
      "Enhancing healthcare access in rural Tamil Nadu through mobile clinics.",
  },
  {
    name: "Andhra Pradesh",
    position: { top: "73%", right: "32%" },
    dialogue:
      "Enhancing irrigation systems in Andhra Pradesh to boost agricultural productivity.",
  },
  {
    name: "Odisha",
    position: { top: "48%", right: "16%" },
    dialogue:
      "Promoting disaster resilience programs in Odisha to support coastal communities.",
  },
];

export default function OurImpact() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Transform scroll progress into path progress for the bike
  const pathProgress = useTransform(
    scrollYProgress,
    [0, 1],
    [0, states.length - 1]
  );
  const [activeState, setActiveState] = useState(0);

  useEffect(() => {
    pathProgress.onChange((value) => {
      const newStateIndex = Math.floor(value);
      setActiveState(newStateIndex);
    });
  }, [pathProgress]);

  return (
    <div ref={containerRef} className="h-full w-full">
      {/* Header */}
      {/* <header className="fixed top-0 left-0 right-0 z-10 bg-white shadow-md p-4">
        <h1 className="text-3xl font-bold text-center text-blue-800">
          Our Impact Across India
        </h1>
      </header> */}
      <p className="container mx-auto bg-gray-100 w-fit rounded-xl px-4 py-1 mt-20 text-gray-700 flex items-center text-sm sm:text-base">
        Impact
      </p>
      <h2 className="text-3xl sm:text-4xl md:text-5xl mt-4 text-center mb-6 px-4">
        Our Impact Across India
      </h2>

      {/* Map Section */}
      <div className="sticky top-0 h-screen flex items-center justify-center">
        <div className="relative w-full max-w-4xl h-full">
          {/* Background Map Image */}
          <Image
            src="/india map.png"
            alt="Map of India"
            fill
            style={{ objectFit: "contain" }}
            className="w-full h-full"
          />

          {/* Bike Path */}
          <svg
            className="absolute top-2 -left-2 w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMaxYMin meet"
          >
            <path
              id="bikePath"
              d="M30 20 Q 23 34 22 40 Q 50 40 48 36 Q 35 55 40 55 Q 40 60 40 75 Q 45 85 52 90 Q 55 65 55 75 Q 75 47 78 48"
              // d="M30 20 Q 25 40 25 40  Q 35 50 35 50 Q 40 70 40 70 Q 45 85 45 85 Q 50 65 50 65 Q 55 55 55 55"
              fill="none"
              stroke="#FF4D4F"
              strokeWidth="0.5"
              strokeDasharray="2,2"
            />
          </svg>

          {/* Bike Animation */}
          <motion.div
            className="absolute"
            style={{
              top: states[activeState].position.top,
              right: states[activeState].position.right,
              translateX: "-50%",
              translateY: "-50%",
            }}
            transition={{ duration: 2 }}
          >
            <Image src="/bike path.png" alt="Bike" width={40} height={40} />
          </motion.div>

          {/* State Markers and Dialogues */}
          {states.map((state, index) => (
            <div key={state.name} className="absolute" style={state.position}>
              {/* Marker */}
              <motion.div
                className="w-6 h-6"
                initial={{ scale: 0.5, opacity: 0.5 }} // Initial state (small and faded)
                animate={{
                  scale: activeState === index ? 1.2 : 0.5, // Pop up when active
                  opacity: activeState === index ? 1 : 0.5, // Full opacity when active
                }}
                transition={{ duration: 0.3 }} // Smooth animation
              >
                <Image
                  src="/pin 3.png"
                  alt="pin"
                  fill
                  className="hover:scale-110" // Optional hover effect
                />
              </motion.div>

              {/* Dialogue Box */}
              {activeState === index && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute top-6 left-6 w-88 p-4 bg-white rounded-lg shadow-lg border border-gray-200"
                >
                  <h3 className="text-lg font-semibold text-blue-700">
                    {state.name}
                  </h3>
                  <p className="text-xs text-gray-600 ">{state.dialogue}</p>
                  <hr />
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Key Achievements
                  </h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li key={index}>{state.achievements}</li>
                  </ul>
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
