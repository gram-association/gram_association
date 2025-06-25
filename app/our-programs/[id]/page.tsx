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
      <main className="flex min-h-screen flex-col items-center justify-between p-4 sm:p-8 md:p-24 bg-[linear-gradient(to_bottom,_#1D352E_600px,_white_600px)] dark:bg-[linear-gradient(to_bottom,_#052e0c_600px,_#0f172a_600px)]">
        <section className="relative w-full mt-10">
          <div className="h-[500px] w-full">
            <div className="absolute inset-0 mt-12 sm:mt-0">
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
                <h1 className="text-3xl sm:text-5xl h-auto font-medium mt-2">
                  {program.title}
                </h1>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <div className="max-w-7xl p-6 mt-[200px] text-start">
          <h3 className="text-xl  mb-2">{program.header}</h3>
          <div className="text-gray-700 dark:text-gray-400 text-[16px] mb-6">
            {Array.isArray(program.description)
              ? program.description.map((paragraph, index) => (
                  <p key={index} className="mb-4">
                    {paragraph}
                  </p>
                ))
              : program.description.split("\n").map((paragraph, index) => (
                  <p key={index} className="mb-4">
                    {paragraph}
                  </p>
                ))}
          </div>

          {/* Key Interventions */}
          <h3 className="text-xl  mb-4">{program.header1}</h3>
          <p className="text-gray-700 dark:text-gray-400 mb-2">
            {program.headline}
          </p>
          <ul className="list-disc list-inside mb-6">
            {program.interventions.map((item, index) => (
              <li key={index} className="mb-2">
                {item.title ? (
                  <>
                    <span>{item.title}</span>
                    <div className="text-gray-700 dark:text-gray-400 ml-4">
                      {item.content}
                    </div>
                  </>
                ) : (
                  <span className="text-gray-700 dark:text-gray-400">
                    {item.content}
                  </span>
                )}
              </li>
            ))}
          </ul>
          <p className="text-gray-700 dark:text-gray-400 mb-4">
            {program.para3}
          </p>

          {/* Lasting Impact */}
          <h3 className="text-xl  mb-4">{program.header2}</h3>
          <ul className="list-disc list-inside">
            {program.impacts.map((item, index) => (
              <li key={index} className=" mb-2">
                {item.title ? (
                  <>
                    <span className="font-medium">{item.title}</span>
                    <div className="text-gray-700 dark:text-gray-400 text-md ml-4">
                      {item.content}
                    </div>
                  </>
                ) : (
                  <span className="text-gray-700 dark:text-gray-400">
                    {item.content}
                  </span>
                )}
              </li>
            ))}
          </ul>

          <h3 className="text-xl  mb-4">{program.paraTitle1}</h3>
          <p className="text-gray-700 dark:text-gray-400 mb-6">
            {program.para1}
          </p>
          <h3 className="text-xl  mb-4">{program.paraTitle2}</h3>
          <p className="text-gray-700 dark:text-gray-400 mb-6">
            {program.para2}
          </p>
        </div>
      </main>
    </div>
  );
}
