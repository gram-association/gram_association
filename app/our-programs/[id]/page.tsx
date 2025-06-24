// app/program/[id]/page.tsx
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { programData } from "../data/programsData";

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
          <h3 className="text-xl font-bold mb-2">{program.header}</h3>
          <p className="text-gray-700 mb-6">{program.description}</p>

          {/* Key Interventions */}
          <h3 className="text-xl font-bold mb-4">{program.header1}</h3>
          <ul className="list-disc list-inside mb-6">
            {program.interventions.map((item, index) => (
              <li key={index} className="mb-2">
                <span className="font-semibold">{item.title}</span>{" "}
                {item.content}
              </li>
            ))}
          </ul>

          {/* Lasting Impact */}
          <h3 className="text-xl font-bold mb-4">{program.header2}</h3>
          <ul className="list-disc list-inside">
            {program.impacts.map((item, index) => (
              <li key={index} className="mb-2">
                <span className="font-semibold">{item.title}</span>{" "}
                {item.content}
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}
