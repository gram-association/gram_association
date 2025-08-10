"use client";

import { useEffect, useRef, useState } from "react";

export default function VisionMissionSection() {
  const [visionScrollPosition, setVisionScrollPosition] = useState(0);
  const [missionScrollPosition, setMissionScrollPosition] = useState(0);
  const visionRef = useRef<HTMLDivElement>(null);
  const missionRef = useRef<HTMLDivElement>(null);

  const handleScroll = (
    element: HTMLDivElement,
    setScrollPosition: (pos: number) => void
  ) => {
    const scrollTop = element.scrollTop;
    const scrollHeight = element.scrollHeight - element.clientHeight;
    const scrollPercentage = scrollHeight > 0 ? scrollTop / scrollHeight : 0;
    setScrollPosition(scrollPercentage);
  };

  const scrollToPosition = (
    element: HTMLDivElement | null,
    position: number
  ) => {
    if (!element) return;
    const scrollHeight = element.scrollHeight - element.clientHeight;
    element.scrollTo({
      top: scrollHeight * position,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const visionElement = visionRef.current;
    const missionElement = missionRef.current;

    const visionScrollHandler = () => {
      if (visionElement) handleScroll(visionElement, setVisionScrollPosition);
    };
    const missionScrollHandler = () => {
      if (missionElement)
        handleScroll(missionElement, setMissionScrollPosition);
    };

    visionElement?.addEventListener("scroll", visionScrollHandler);
    missionElement?.addEventListener("scroll", missionScrollHandler);

    return () => {
      visionElement?.removeEventListener("scroll", visionScrollHandler);
      missionElement?.removeEventListener("scroll", missionScrollHandler);
    };
  }, []);

  const ScrollIndicator = ({
    scrollPosition,
    onDotClick,
  }: {
    scrollPosition: number;
    onDotClick: (position: number) => void;
  }) => {
    const getActiveDot = () => {
      if (scrollPosition < 0.33) return 0;
      if (scrollPosition < 0.66) return 1;
      return 2;
    };

    const activeDot = getActiveDot();

    return (
      <div className="flex flex-col gap-2 items-center">
        {[0, 1, 2].map((index) => (
          <button
            key={index}
            onClick={() => onDotClick(index * 0.5)}
            className={`w-2 h-2 rounded-full transition-all duration-300 hover:scale-125 ${
              activeDot === index ? "bg-gray-600 " : "bg-gray-300 "
            }`}
            aria-label={`Scroll to section ${index + 1}`}
          />
        ))}
      </div>
    );
  };

  return (
    <section className="py-8 md:py-5 bg-[#BAD1CA]  min-w-screen">
      <div className="container mx-auto px-4 sm:px-6">
        <p className="mx-auto bg-[#DEE6EB] dark:bg-gray-700 w-fit rounded-lg px-4 text-gray-700 dark:text-gray-200 flex items-center text-sm sm:text-base mt-10">
          Our Vision & Mission
        </p>
        <h3 className="text-3xl sm:text-2xl md:text-5xl mt-4 font-epilogue text-center mb-6 md:mb-8 text-gray-900 ">
          What Drives Us
        </h3>
        <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-6">
          {/* Vision Card */}
          <div className="w-full md:w-[600px] max-w-full rounded-lg bg-white  p-4 sm:p-6 relative">
            <h3 className="text-lg sm:text-lg md:text-xl font-epilogue mb-3 md:mb-2 text-gray-900 ">
              Our Vision
            </h3>
            <div className="flex gap-4">
              <div
                ref={visionRef}
                className="flex-1 h-64 overflow-y-auto scrollbar-hide pr-2"
                style={{
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                }}
              >
                <p className="text-gray-600  text-[16px] sm:text-lg ">
                  We envision an inclusive, equitable, and ecologically
                  sustainable society where self reliant villages are the true
                  bedrock of national development. We believe that real, lasting
                  change blossoms from within, which is why we focus on
                  empowering self-governed, community led institutions to foster
                  thriving, sustainable rural ecosystems.
                  <br />
                  <br />
                  We draw deep inspiration from Mahatma Gandhi's profound
                  conviction that "the soul of India lives in its villages." Our
                  commitment is to transform these rural communities into
                  vibrant centers of resilience, dignity, and prosperity.
                  <br />
                  <br />
                  GRAM is dedicated to enabling grassroots institutions and
                  influencing policies through impactful interventions. We
                  aspire to be a recognized leader across crucial development
                  sectors: livelihoods, water, agriculture, health, and
                  education. Every effort we make is strategically aligned with
                  the Sustainable Development Goals (SDGs), ensuring our work
                  contributes to a broader global agenda for a better future.
                </p>
              </div>
              <div className="flex items-center">
                <ScrollIndicator
                  scrollPosition={visionScrollPosition}
                  onDotClick={(position) =>
                    scrollToPosition(visionRef.current, position)
                  }
                />
              </div>
            </div>
          </div>

          {/* Mission Card */}
          <div className="w-full md:w-[600px] max-w-full rounded-lg bg-white  p-4 sm:p-6 relative">
            <h3 className="text-lg sm:text-lg md:text-xl font-epilogue mb-3 md:mb-4 text-gray-900 ">
              Our Mission
            </h3>
            <div className="flex gap-4">
              <div
                ref={missionRef}
                className="flex-1 h-64 overflow-y-auto scrollbar-hide pr-2"
                style={{
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                }}
              >
                <p className="text-gray-600  text-[16px] sm:text-lg">
                  Enable self-governed, community-led institutions in rural
                  areas, fostering self reliance and sustainable development,
                  establishing or strengthening local bodies (like, self-help
                  groups, or community-based organizations) that have the
                  authority and capacity to make decisions about their own
                  affairs. This includes managing local resources, planning
                  development initiatives, and co-creating meaningful change.
                  <br />
                  <br />
                  Implement integrated interventions across livelihoods, water,
                  agriculture, health, and education, aligning with Sustainable
                  Development Goals (SDGs). Emphasis is on active participation
                  and leadership from within the community. It's not about
                  external agencies imposing solutions, but rather facilitating
                  a process where community members identify their needs,
                  develop strategies, and implement them.
                  <br />
                  <br />
                  Enable grassroots change and influence policy, contributing to
                  an inclusive, equitable, and ecologically balanced society.
                  All initiatives undertaken by these self-governed institutions
                  should be environmentally sound, socially equitable, and
                  economically viable, ensuring long term benefits for the
                  community and future generations.
                </p>
              </div>
              <div className="flex items-center">
                <ScrollIndicator
                  scrollPosition={missionScrollPosition}
                  onDotClick={(position) =>
                    scrollToPosition(missionRef.current, position)
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
