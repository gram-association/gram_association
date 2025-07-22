"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const teamMembers = [
  { name: "Barefoot", image: "/assets/about-us/support/Barefoot.png" },
  { name: "deeksha", image: "/assets/about-us/support/DEEKSHA.webp" },
  { name: "iim ranchi", image: "/assets/about-us/support/IIM Ranchi.png" },
  { name: "innovation", image: "/assets/about-us/support/innovations.png" },
  { name: "NABARD", image: "/assets/about-us/support/NABARD .webp" },
  { name: "NEST Lamka", image: "/assets/about-us/support/NEST Lamka.png" },
  { name: "we support", image: "/assets/about-us/support/we support.png" },
];

// Duplicate list
const loopedTeamMembers = [
  ...teamMembers,
  ...teamMembers,
  ...teamMembers,
  ...teamMembers,
  ...teamMembers,
  ...teamMembers,
  ...teamMembers,
  ...teamMembers,
  ...teamMembers,
  ...teamMembers,
];

export default function Support() {
  const scrollRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1,
      }
    );

    if (scrollRef.current) observer.observe(scrollRef.current);

    return () => {
      if (scrollRef.current) observer.unobserve(scrollRef.current);
    };
  }, []);

  return (
    <div className="flex flex-col items-center py-8 px-4 sm:px-5 md:py-14">
      <div className="self-start mb-4 sm:mb-5">
        <span className="bg-[#DEE6EB] dark:bg-gray-700 text-gray-700 dark:text-gray-200 text-xs sm:text-sm font-semibold rounded-full px-3 py-1">
          Support
        </span>
      </div>

      <h1 className="text-2xl sm:text-3xl md:text-4xl self-start mb-6 sm:mb-2 text-gray-800 dark:text-gray-200">
        MEET THE SUPPORT OF GRAM
      </h1>

      {/* Scroll Container */}
      <div className="w-full max-w-6xl overflow-x-hidden" ref={scrollRef}>
        <div
          className={`flex space-x-4 min-w-max ${
            isVisible ? "animate-scroll" : ""
          }`}
        >
          {loopedTeamMembers.map((member, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-32 sm:w-40 md:w-56 mx-2"
            >
              <div className="relative bg-white rounded-lg overflow-hidden">
                <Image
                  src={member.image}
                  alt={`${member.name} photo`}
                  width={200}
                  height={200}
                  className="rounded-lg w-full h-32 sm:h-40 md:h-48 object-contain p-4"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
