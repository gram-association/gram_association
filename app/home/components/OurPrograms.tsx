"use client";
import { programData } from "@/app/our-programs/data/programsData";
import AutoScrollCarousel from "@/components/auto-scroll-carousel";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function OurPrograms() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id")?.toLowerCase() || "a";

  const program1 = programData[id] || programData["a"];
  const program2 =
    programData[id === "a" ? "b" : "a"] || programData["b"] || programData["a"];

  if (!program1 || !program2) {
    return <div className="text-center py-8">No program data available</div>;
  }

  return (
    <main className="min-w-screen bg-white dark:bg-gray-900">
      <div className="flex flex-col items-center py-8">
        <div>
          <p className="container mx-auto text-center bg-gray-100 dark:bg-gray-700 w-fit rounded-lg px-1 text-sm text-gray-700 dark:text-gray-200 flex items-center mb-4">
            Our Programs
          </p>
          <h1 className="text-4xl text-center text-gray-800 dark:text-gray-100 mb-12">
            Making a Lasting Impact
          </h1>
        </div>

        <div className="min-w-screen flex flex-col ">
          {[program1, program2].map((program, i) => (
            <div
              key={program.id}
              className={`flex flex-col md:flex-row ${
                i % 2 === 1 ? "md:flex-row" : ""
              }`}
            >
              {/* Text Section */}
              <div
                className={`flex-1 p-6 ${
                  i === 1 ? "bg-[#DDE8E5]" : "bg-[#EBDDDB]"
                } dark:bg-gray-800`}
              >
                <div className="ml-0 sm:ml-20">
                  <h2 className="text-2xl  text-gray-800 dark:text-gray-100 mb-2">
                    {program.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 text-base">
                    {Array.isArray(program.description)
                      ? program.description.join(" ")
                      : program.description}
                  </p>
                  <Link href={`/our-programs/${program.id}`}>
                    <button className="bg-teal-600 text-white px-4 py-2 rounded-full hover:bg-teal-700 dark:hover:bg-teal-800 transition">
                      Read More
                    </button>
                  </Link>
                </div>
              </div>

              {/* Image Section */}
              <div className="flex-1 h-[385px] bg-gray-300 dark:bg-gray-700">
                <AutoScrollCarousel
                  images={
                    Array.isArray(program.image)
                      ? program.image
                      : [program.image]
                  }
                  height="385px"
                  objectFit="cover"
                  autoScrollInterval={3000}
                  pauseOnHover={true}
                  loop={true}
                  transitionDuration={500}
                  className="w-full h-full"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <Link href={`/our-programs`}>
            <button className="border-2 border-teal-600 text-teal-600 px-6 py-2 rounded-full hover:bg-teal-600 hover:text-white dark:border-teal-500 dark:text-teal-500 dark:hover:bg-teal-700 dark:hover:text-white transition">
              VIEW MORE
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
