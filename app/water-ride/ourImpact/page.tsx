"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

// Sample data for states and their dialogue content in the requested order
const states = [
  {
    name: "Rajasthan",
    position: { top: "20%", left: "30%" },
    dialogue:
      "Supporting water conservation efforts in Rajasthan to help over 500 rural villages.",
  },
  {
    name: "Gujarat",
    position: { top: "40%", left: "25%" },
    dialogue:
      "Empowering local farmers with sustainable agricultural practices in Gujarat.",
  },
  {
    name: "Maharashtra",
    position: { top: "50%", left: "35%" },
    dialogue:
      "Providing education and resources to underprivileged children in Maharashtra.",
  },
  {
    name: "Karnataka",
    position: { top: "70%", left: "40%" },
    dialogue:
      "Promoting renewable energy initiatives in Karnataka for a greener future.",
  },
  {
    name: "Tamil Nadu",
    position: { top: "85%", left: "45%" },
    dialogue:
      "Enhancing healthcare access in rural Tamil Nadu through mobile clinics.",
  },
  {
    name: "Andhra Pradesh",
    position: { top: "65%", left: "50%" },
    dialogue:
      "Enhancing irrigation systems in Andhra Pradesh to boost agricultural productivity.",
  },
  {
    name: "Odisha",
    position: { top: "55%", left: "55%" },
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
            className="absolute top-0 left-0 w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid meet"
          >
            <path
              id="bikePath"
              d="M30 20 Q 25 40 25 40 Q 35 50 35 50 Q 40 70 40 70 Q 45 85 45 85 Q 50 65 50 65 Q 55 55 55 55"
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
              left: states[activeState].position.left,
              translateX: "-50%",
              translateY: "-50%",
            }}
            transition={{ duration: 0.5 }}
          >
            <Image src="/bike path.png" alt="Bike" width={40} height={40} />
          </motion.div>

          {/* State Markers and Dialogues */}
          {states.map((state, index) => (
            <div key={state.name} className="absolute " style={state.position}>
              {/* Marker */}
              <div className="w-4 h-4 bg-red-500 rounded-full" />

              {/* Dialogue Box */}
              {activeState === index && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute top-6 left-6 w-64 p-4 bg-white rounded-lg shadow-lg border border-gray-200"
                >
                  <h3 className="text-lg font-semibold text-blue-700">
                    {state.name}
                  </h3>
                  <p className="text-sm text-gray-600">{state.dialogue}</p>
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      {/* <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="text-gray-500 text-sm flex flex-col items-center"
        >
          <span>Scroll Down</span>
          <svg
            className="w-6 h-6 mt-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </div> */}
    </div>
  );
}
