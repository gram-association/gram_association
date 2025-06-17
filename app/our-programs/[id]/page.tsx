// app/program/[id]/page.tsx
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { programData } from "../data/programs";

// Define TypeScript interface for program data
interface Program {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  impact: {
    schoolsBuilt: number;
    studentsReached: string;
    teachersTrained: number;
    graduationRate: string;
  };
  partners: string[];
  image: string;
}

interface ProgramPageProps {
  params: { id: string };
}

export default async function ProgramPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  if (!id) {
    notFound();
  }
  const program = programData[id.toLowerCase()] || programData["a"];

  return (
    <div>
      <main className="flex min-h-screen flex-col items-center justify-between p-4 sm:p-8 md:p-24 bg-[linear-gradient(to_bottom,_#1D352E_600px,_white_600px)]">
        <section className="relative w-full">
          <div className="h-[500px] w-full">
            <div className="absolute inset-0">
              <Image
                src={program.image}
                alt={program.title}
                width={500}
                height={433}
                className="object-cover rounded-xl mt-60 w-full max-w-6xl h-[433px] mx-auto"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              />
            </div>
            <div>
              <div className="relative z-10 w-full max-w-full mt-10 sm:mt-0 ml-0 sm:ml-2 py-8 px-2 text-white">
                <p className="text-xs sm:text-sm">
                  <span>
                    <Link href="/our-programs">Our Programs </Link>
                  </span>{" "}
                  / {program.title}
                </p>
                <h1 className="text-4xl sm:text-5xl font-medium mt-2">
                  {program.title}
                </h1>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <div className="max-w-7xl p-6 mt-[200px] text-start">
          {/* Description */}
          <h3 className="text-xl font-bold mb-2">
            Transforming Lives Through Sustainable Water Solutions in Rasabeda
          </h3>
          <p className="text-gray-700 mb-6">{program.description}</p>

          {/* Key Interventions */}
          <h3 className="text-xl font-bold mb-4">Key Interventions</h3>
          <ul className="list-disc list-inside mb-6">
            {program.interventions.map((item, index) => (
              <li key={index} className="mb-2">
                <span className="font-semibold">{item.title}:</span>{" "}
                {item.content}
              </li>
            ))}
          </ul>

          {/* Lasting Impact */}
          <h3 className="text-xl font-bold mb-4">Lasting Impact</h3>
          <ul className="list-disc list-inside">
            {program.impacts.map((item, index) => (
              <li key={index} className="mb-2">
                <span className="font-semibold">{item.title}:</span>{" "}
                {item.content}
              </li>
            ))}
          </ul>
        </div>

        {/* <section className="mt-[200px] items-center">
          <div className="relative z-10 px-2 text-black w-full max-w-7xl mb-10">
            <p className="text-xs sm:text-sm ml-0 sm:ml-2">
              {program.description}
            </p>
          </div>
          <div className="w-full max-w-6xl mx-auto px-4 sm:px-0">
            <p className="text-sm sm:text-base">{program.longDescription}</p>
          </div>
        </section> */}

        {/* <section className="bg-[#F8F1E9] w-full max-w-4xl py-6 flex justify-center mt-[400px] items-center">
          <div className="flex flex-col items-center gap-8 w-full px-4">
            <h2 className="text-gray-700 text-lg sm:text-xl font-semibold">
              Our Impact
            </h2>
            <div className="flex flex-col sm:flex-row items-center gap-8 sm:gap-12 w-full justify-center">
              <div className="text-center">
                <p className="text-3xl sm:text-4xl font-bold text-[#5A829A]">
                  {program.impact.schoolsBuilt}
                </p>
                <p className="text-xs sm:text-sm text-gray-600">
                  Schools Built
                </p>
              </div>
              <div className="hidden sm:block h-12 w-px bg-gray-300"></div>
              <div className="text-center">
                <p className="text-3xl sm:text-4xl font-bold text-[#5A829A]">
                  {program.impact.studentsReached}
                </p>
                <p className="text-xs sm:text-sm text-gray-600">
                  Students Reached
                </p>
              </div>
              <div className="hidden sm:block h-12 w-px bg-gray-300"></div>
              <div className="text-center">
                <p className="text-3xl sm:text-4xl font-bold text-[#5A829A]">
                  {program.impact.teachersTrained}
                </p>
                <p className="text-xs sm:text-sm text-gray-600">
                  Teachers Trained
                </p>
              </div>
              <div className="hidden sm:block h-12 w-px bg-gray-300"></div>
              <div className="text-center">
                <p className="text-3xl sm:text-4xl font-bold text-[#5A829A]">
                  {program.impact.graduationRate}
                </p>
                <p className="text-xs sm:text-sm text-gray-600">
                  Graduation Rate
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full">
          <div className="mt-8 px-4">
            <p className="mx-auto text-center w-fit rounded-lg px-1 text-lg sm:text-xl mb-4 text-gray-700 font-medium flex items-center">
              Our Partners
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-8 max-w-5xl mx-auto">
              {program.partners.map((partner, index) => (
                <div
                  key={index}
                  className="bg-white p-6 sm:p-8 text-center w-full sm:w-xl rounded border"
                >
                  <p className="text-gray-600 text-sm sm:text-base">
                    {partner}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section>
          <div className="bg-[#BAD1CA] w-screen mt-20 py-12">
            <div className="max-w-4xl mx-auto px-4">
              <h1 className="text-2xl sm:text-3xl tracking-wider text-center mb-8">
                Support Our Programs
              </h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h2 className="text-lg sm:text-xl font-semibold mb-4">
                    Donate
                  </h2>
                  <p className="text-gray-600 mb-6 text-xs sm:text-sm">
                    Your generous contribution helps us expand our programs and
                    reach more communities. Every donation, no matter the size,
                    makes a difference.
                  </p>
                  <Link href="/contact-us">
                    <button className="bg-[#538C7B] text-white px-4 sm:px-6 py-2 rounded-full hover:bg-teal-700 transition">
                      DONATE NOW
                    </button>
                  </Link>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h2 className="text-lg sm:text-xl font-semibold mb-4">
                    Volunteer
                  </h2>
                  <p className="text-gray-600 mb-6 text-xs sm:text-sm">
                    Join our team of dedicated volunteers and contribute your
                    skills, time, and passion to support our programs and make a
                    direct impact.
                  </p>
                  <Link href="/contact-us">
                    <button className="bg-[#538C7B] text-white px-4 sm:px-6 py-2 rounded-full hover:bg-teal-700 transition">
                      BECOME A VOLUNTEER
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section> */}
      </main>
    </div>
  );
}
