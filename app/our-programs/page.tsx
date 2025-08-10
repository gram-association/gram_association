"use client";
import Link from "next/link";
import { useState } from "react";
import { programs } from "./data/programs";
import Tabs from "./components/ProgramsTab";

export default function Programs() {
  const [activeFilter, setActiveFilter] = useState("All Programs");

  const filteredPrograms =
    activeFilter === "All Programs"
      ? programs
      : programs.filter((program) => program.category === activeFilter);

  return (
    <main className="flex min-h-screen  flex-col items-center justify-between  pb-24 px-4 sm:px-6 md:px-8 lg:px-24 pt-16   bg-gradient-to-b from-[#f1ddaf] to-white dark:from-[#5f4b1b] dark:to-[#0f172a] bg-no-repeat bg-[length:100%_500px] dark:bg-[#0f172a] ">
      <div className="text-center py-24 sm:py-12">
        <p className="mx-auto bg-[#DEE6EB] dark:bg-gray-700 w-fit rounded-lg px-4 text-gray-700 dark:text-gray-200 flex items-center text-sm sm:text-base my-6">
          Our Programs
        </p>
        <h1 className="text-2xl sm:text-3xl md:text-5xl  text-gray-800 dark:text-gray-200 px-4">
          Making a Lasting Impact
        </h1>
        <p className="text-gray-600 dark:text-gray-200 mt-4 text-xs sm:text-sm md:text-base w-full sm:w-[75%] mx-auto px-4">
          Explore our diverse range of programs designed to create sustainable
          change and improve lives in communities around the world.
        </p>
      </div>

      <Tabs activeFilter={activeFilter} setActiveFilter={setActiveFilter} />

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
        {filteredPrograms.map((program) => (
          <div
            key={program.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="relative h-48">
              <img
                src={
                  Array.isArray(program.image)
                    ? program.image[0]
                    : program.image
                }
                alt={program.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4">
                <span className="bg-white/80 text-gray-700 text-sm  rounded-full px-3 py-1 border-0">
                  {program.category}
                </span>
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-[17px] font-bold text-gray-800">
                {program.title}
              </h3>
              <p className="text-gray-600 text-base mt-2">
                {program.description}
              </p>
              <Link href={`/our-programs/${program.slug}`}>
                <button className="mt-4 text-blue-600 hover:underline cursor-pointer">
                  LEARN MORE →
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-[#BAD1CA] dark:bg-gray-800  min-w-screen mt-20 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-0 lg:px-0">
          <p className="container w-fit mx-auto bg-[#DEE6EB] dark:bg-gray-700 rounded-lg px-2 py-1 text-xs sm:text-sm text-gray-700 dark:text-gray-200 flex items-center mb-4">
            Get Involved
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl tracking-wider text-center mb-8">
            Support Our Programs
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
              <h2 className="text-lg sm:text-xl font-semibold mb-4">Donate</h2>
              <p className="text-gray-600 dark:text-gray-200 mb-6 text-sm sm:text-base">
                Your generous contribution helps us expand our programs and
                reach more communities. Every donation, no matter the size,
                makes a difference.
              </p>
              <Link href="/contact-us?type=donate">
                <button className="bg-[#538C7B] text-white px-4 py-2 sm:px-6 sm:py-2 rounded-full hover:bg-teal-700 transition text-sm sm:text-base">
                  DONATE NOW
                </button>
              </Link>
            </div>

            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
              <h2 className="text-lg sm:text-xl font-semibold mb-4">
                Volunteer
              </h2>
              <p className="text-gray-600 dark:text-gray-200 mb-6 text-sm sm:text-base">
                Join our team of dedicated volunteers and contribute your
                skills, time, and passion to support our programs and make a
                direct impact.
              </p>
              <Link href="/contact-us">
                <button className="bg-[#538C7B] text-white px-4 py-2 sm:px-6 sm:py-2 rounded-full hover:bg-teal-700 transition text-sm sm:text-base">
                  BECOME A VOLUNTEER
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
