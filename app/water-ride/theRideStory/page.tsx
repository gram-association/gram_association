"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

// Define the interface for each journey step
interface JourneyStep {
  time: string;
  title: string;
  state: string;
  description: string;
  image: string;
}

const journeySteps: JourneyStep[] = [
  {
    time: "Day 1",
    title: "The Journey Begins",
    state: "Mumbai, Maharashtra",
    description:
      "With a motorcycle packed with essentials and a heart full of determination, Shashank set off from Mumbai. The first stop was at a local school where he demonstrated simple rainwater harvesting techniques to enthusiastic students who were eager to be part of the solution.",
    image: "/Journey begins.png",
  },
  {
    time: "Week 2",
    title: "Western Ghats Exploration",
    state: "Karnataka & Kerala",
    description:
      "Traversing the lush landscapes of the Western Ghats, Shashank encountered diverse water conservation methods in coastal Kerala. He learned traditional techniques that sustained communities for generations, adapting to the monsoon patterns of the region.",
    image: "/Western ghats.png",
  },
  {
    time: "Month 3",
    title: "Desert Innovations",
    state: "Rajasthan & Gujarat",
    description:
      "In the arid landscapes of Rajasthan, Shashank witnessed remarkable innovations in water harvesting. The ancient step wells and modern adaptations showed how communities had turned adversity into ingenuity, thriving and preserving every precious drop of liquid.",
    image: "/Desert.png",
  },
  {
    time: "Month 3",
    title: "Desert Innovations",
    state: "Rajasthan & Gujarat",
    description:
      "In the arid landscapes of Rajasthan, Shashank witnessed remarkable innovations in water harvesting. The ancient step wells and modern adaptations showed how communities had turned adversity into ingenuity, thriving and preserving every precious drop of liquid.",
    image: "/Desert.png",
  },
  {
    time: "Month 3",
    title: "Desert Innovations",
    state: "Rajasthan & Gujarat",
    description:
      "In the arid landscapes of Rajasthan, Shashank witnessed remarkable innovations in water harvesting. The ancient step wells and modern adaptations showed how communities had turned adversity into ingenuity, thriving and preserving every precious drop of liquid.",
    image: "/Desert.png",
  },
];

export default function JourneyPage() {
  const pointerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      // Handle pointer movement
      if (pointerRef.current && timelineRef.current) {
        const timelineRect = timelineRef.current.getBoundingClientRect();
        const timelineTop = timelineRect.top + window.scrollY;
        const timelineHeight = timelineRect.height;
        const timelineBottom = timelineTop + timelineHeight;

        // Define the scroll range for the pointer movement
        const startPoint = timelineTop - windowHeight * 0.5; // Start when timeline is halfway into view
        const endPoint = timelineBottom - windowHeight * 0.5; // End when timeline bottom is halfway into view

        // Calculate scroll progress (0 to 1) within the timeline
        const scrollProgress = Math.max(
          0,
          Math.min(1, (scrollPosition - startPoint) / (endPoint - startPoint))
        );

        // Move the pointer along the timeline
        const maxTranslateY = timelineHeight - 16; // Adjust for pointer size (16px height)
        pointerRef.current.style.transform = `translateY(${
          scrollProgress * maxTranslateY
        }px)`;
      }

      // Fade-in effect for sections
      sectionRefs.current.forEach((section) => {
        if (section) {
          const sectionTop = section.getBoundingClientRect().top;
          if (sectionTop < windowHeight * 0.8) {
            section.classList.add("opacity-100", "translate-y-0");
            section.classList.remove("opacity-0", "translate-y-10");
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial position

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen font-sans">
      <div className="max-w-7xl ml-10  px-4 py-4">
        <p className="container w-fit  bg-[#DEE6EB] rounded-lg px-2 py-1 text-xs sm:text-sm text-gray-700 flex items-center mb-4">
          Extraordinary Journey
        </p>
        <h1 className="text-2xl md:text-4xl font-bold text-gray-800">
          The Ride Story
        </h1>
      </div>

      {/* Main Content */}
      <main className="pt-20 pb-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Timeline Line and Pointer */}
          <div
            ref={timelineRef}
            className="absolute left-4 md:left-8 top-0 h-full w-1 "
          >
            <Image src="/Group 49.png" alt="Route" fill />
            <div
              ref={pointerRef}
              className="absolute left-[-6px] w-4 h-4 rounded-full shadow-md transition-transform duration-300"
            >
              <Image src="/Group 48.png" alt="" fill />
            </div>
          </div>

          {/* Timeline Sections */}
          <div className="space-y-16 md:space-y-12 pl-12 md:pl-20">
            {journeySteps.map((step, index) => (
              <div
                key={index}
                ref={(el) => {
                  sectionRefs.current[index] = el;
                }}
                className="flex flex-col md:flex-row items-start opacity-0 translate-y-10 transition-all duration-700 ease-out"
              >
                {/* Text Content */}
                <div className="md:w-2/3 mb-6 md:mb-0">
                  {/* Time Marker */}
                  <div className="mb-4 bg-[#538C7B] container w-fit py-1 px-2 text-white rounded-full">
                    {step.time}
                  </div>
                  <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">
                    {step.title}
                  </h2>
                  <h6 className="text-sm text-gray-500 mb-2">{step.state}</h6>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Image */}
                <div className="md:w-1/3 md:pl-8">
                  <div className="w-full  h-48 md:h-64 relative  ">
                    <Image
                      src={step.image || "/placeholder.svg"}
                      alt={step.title}
                      fill
                      className="  rounded-lg transition-opacity  duration-500 hover:opacity-90"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
