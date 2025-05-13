"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

interface JourneyStep {
  timeImage: string;
  title: string;
  state: string;
  description: string;
  image: string;
}

const journeySteps: JourneyStep[] = [
  {
    timeImage: "/Day 1.png",
    title: "The Journey Begins",
    state: "Mumbai, Maharashtra",
    description:
      "With a motorcycle packed with essentials and a heart full of determination, Shashank set off from Mumbai. The first stop was at a local school where he demonstrated simple rainwater harvesting techniques to enthusiastic students who were eager to be part of the solution.",
    image: "/Journey begins.png",
  },
  {
    timeImage: "/week 2.png",
    title: "Western Ghats Exploration",
    state: "Karnataka & Kerala",
    description:
      "Traversing the lush landscapes of the Western Ghats, Shashank encountered diverse water conservation methods in coastal Kerala. He learned traditional techniques that sustained communities for generations, adapting to the monsoon patterns of the region.",
    image: "/Western ghats.png",
  },
  {
    timeImage: "/month 3.png",
    title: "Desert Innovations",
    state: "Rajasthan & Gujarat",
    description:
      "In the arid landscapes of Rajasthan, Shashank witnessed remarkable innovations in water harvesting. The ancient step wells and modern adaptations showed how communities had turned adversity into ingenuity, thriving and preserving every precious drop of liquid.",
    image: "/Desert.png",
  },
];

export default function JourneyPage() {
  const bikeRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!bikeRef.current || !timelineRef.current) return;

      const timelineRect = timelineRef.current.getBoundingClientRect();
      const timelineHeight = timelineRect.height;
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      // Calculate the scroll progress relative to the timeline
      const timelineTop = timelineRect.top + window.scrollY;
      const timelineBottom = timelineTop + timelineHeight;

      // Adjust these values to control when the bike starts and stops moving
      const startPoint = timelineTop - windowHeight * 0.5;
      const endPoint = timelineBottom - windowHeight * 0.5;

      // Calculate scroll progress as a percentage (0 to 1)
      const scrollProgress = Math.max(
        0,
        Math.min(1, (scrollPosition - startPoint) / (endPoint - startPoint))
      );

      // Move the bike along the timeline
      const maxTranslateY = timelineHeight - 100; // Adjust based on bike height
      bikeRef.current.style.transform = `translateY(${
        scrollProgress * maxTranslateY
      }px)`;
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial position

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center py-12 px-4 md:px-6">
      <header className="mb-12 w-full max-w-6xl">
        <span className="text-sm tracking-widest uppercase text-gray-600">
          Extraordinary Journey
        </span>
        <h1 className="mt-2 text-4xl md:text-5xl font-bold text-gray-900">
          The Ride Story
        </h1>
      </header>

      <div className="max-w-6xl w-full flex flex-col md:flex-row gap-2">
        {/* Timeline Column with Path and Bike */}
        <div className="relative flex-shrink-0 md:w-24 h-[800px] md:h-auto">
          <div ref={timelineRef} className="relative h-full w-24">
            {/* Path Image */}
            <div className="absolute inset-0 w-full h-full">
              <Image
                src="/Clip path.png"
                alt="Journey Path"
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            </div>

            {/* Bike - positioned absolutely with high z-index to stay above path */}
            <div
              ref={bikeRef}
              className="absolute left-1/2 transform -translate-x-1/2 w-30 h-30 ml-3"
              style={{
                transition: "transform 0.2s ease-out",
                zIndex: 20, // Higher z-index to ensure bike is above path
              }}
            >
              <Image
                src="/bike ride.png"
                alt="Motorcycle"
                width={90}
                height={200}
                priority
              />
            </div>
          </div>
        </div>

        {/* Time Markers Column */}
        <div className="relative flex-shrink-0 md:w-auto flex flex-col justify-between  h-[800px] md:h-auto">
          {journeySteps.map((step, index) => (
            <div
              key={`time-${index}`}
              className={`flex items-center justify-center ${
                index === 0 ? "mt-0" : index === 1 ? "mt-14" : "mt-14"
              }`}
            >
              <Image
                src={step.timeImage || "/placeholder.svg"}
                alt={`Time marker ${index + 1}`}
                width={150}
                height={150}
              />
            </div>
          ))}
        </div>

        {/* Content Column */}
        <div className="flex-grow space-y-15 mt-8 md:mt-0">
          {journeySteps.map((step, index) => (
            <div
              key={`content-${index}`}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {/* Text Content */}
              <div className="flex flex-col w-xl">
                <h2 className="text-3xl font-semibold mb-2 text-gray-900">
                  {step.title}
                </h2>
                <h6 className="text-xs text-gray-600">{step.state}</h6>
                <p className="mt-4 text-sm text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Journey Image */}

              <div className="relative w-md h-48 ml-20 overflow-hidden rounded-lg">
                <Image
                  src={step.image || "/placeholder.svg"}
                  alt={step.title}
                  fill
                  style={{ objectFit: "cover" }}
                  // className="transform hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Partner Section */}
      <section className="bg-[#F8F1E9] w-full mt-20 py-16 px-6 sm:px-12">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          {/* Text Section */}
          <div className="lg:w-2/3 space-y-6">
            <span className="text-sm tracking-wider uppercase text-gray-600">
              Our Partner
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
              Fueling Our Mission
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>

          {/* Image Section */}
          <div className="lg:w-1/3">
            <div className="relative group overflow-hidden rounded-2xl">
              <Image
                src="/Royal Enfield.png"
                alt="Royal Enfield Logo"
                width={600}
                height={500}
                className="transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
