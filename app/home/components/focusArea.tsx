"use client";
import Image from "next/image";

interface FocusAreaItem {
  icon: string;
  title: string;
  alt: string;
}

const focusAreas: FocusAreaItem[] = [
  {
    icon: "/logos/Group 6.png",
    title: "Water & Ecological Security",
    alt: "Water & Ecological Security Icon",
  },
  {
    icon: "/logos/Group 8.png",
    title: "Enhanced Governance",
    alt: "Enhanced Governance Icon",
  },
  {
    icon: "/logos/Group 7.png",
    title: "Sustainable Livelihood",
    alt: "Sustainable Livelihood Icon",
  },
  {
    icon: "/logos/Group 9.png",
    title: "Healthcare",
    alt: "Healthcare Icon",
  },
  {
    icon: "/logos/Group 10.png",
    title: "Education",
    alt: "Education Icon",
  },
];

export default function FocusAreas() {
  return (
    <section className="min-h-screen py-8 md:py-16 text-center bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="inline-block mb-5">
          <p className="mx-auto mb-6 bg-[#DEE6EB] dark:bg-gray-700 w-fit rounded-lg px-4 text-gray-700 dark:text-gray-200 flex items-center text-sm sm:text-base mt-10">
            Our Focus Areas
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-8 lg:gap-16">
          {/* Central Circle */}
          <div className="relative flex-shrink-0">
            <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] lg:w-[450px] lg:h-[450px] rounded-full border-2 border-gray-300 border-l-transparent flex items-center justify-center bg-white shadow-lg">
              <Image
                src="/focus area.png"
                alt="5 Es Illustration"
                width={250}
                height={250}
                className="w-48 h-48 sm:w-56 sm:h-56 lg:w-80 lg:h-80 object-contain"
              />
            </div>

            {/* Connection dots on the circle - only visible on large screens */}
            <div className="hidden lg:block">
              {/* Dots positioned around the circle */}
              <div className="absolute top-5 right-28 translate-x-1/2 w-3 h-3 bg-[#D7BCB7] rounded-full"></div>
              <div className="absolute top-27 right-5 w-3 h-3 bg-[#D7BCB7] rounded-full"></div>
              <div className="absolute top-50 -right-1 translate-y-[-50%] w-3 h-3 bg-[#D7BCB7] rounded-full"></div>
              <div className="absolute bottom-39 right-1 w-3 h-3 bg-[#D7BCB7] rounded-full"></div>
              <div className="absolute bottom-17 right-16 translate-x-1/2 w-3 h-3 bg-[#D7BCB7] rounded-full"></div>
            </div>
          </div>

          {/* Focus Areas List */}
          <div className="flex-1 max-w-lg">
            <div className="space-y-6 lg:space-y-8">
              {focusAreas.map((area, index) => (
                <div
                  key={index}
                  className="flex gap-4 items-start relative group"
                >
                  {/* Icon */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-full shadow-md flex items-center justify-center">
                      <Image
                        src={area.icon || "/placeholder.svg"}
                        alt={area.alt}
                        width={32}
                        height={32}
                        className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 relative">
                    <h3 className="font-bold text-gray-900 text-lg sm:text-xl lg:text-2xl text-left leading-tight">
                      {area.title}
                    </h3>

                    {/* Connection line - only visible on large screens */}
                    <div className="hidden lg:block absolute top-6 right-full">
                      <div
                        className="h-0.5 bg-gray-300 origin-right"
                        style={{
                          width: `${
                            index === 0
                              ? 227
                              : index === 1
                              ? 140
                              : index === 2
                              ? 118
                              : index === 3
                              ? 127
                              : 180
                          }px`, // Adjusted widths to reach specific dots
                          transform: `translateX(-1rem)`,
                        }}
                      ></div>
                    </div>

                    {/* Connecting dot */}
                    <div className="hidden lg:block absolute top-5 -left-16">
                      <div className="w-3 h-3 bg-[#D7BCB7] rounded-full"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
