import Link from "next/link";
import { notFound } from "next/navigation";
import { programData } from "../data/programsData";
import AutoScrollCarousel from "@/components/auto-scroll-carousel";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

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

  // Convert program images to carousel format
  const carouselImages = Array.isArray(program.image)
    ? program.image.map((img, index) => ({
        src: img,
        alt: `${program.title} - Image ${index + 1}`,
        title: program.title,
      }))
    : [{ src: program.image, alt: program.title, title: program.title }];

  return (
    <div>
      <main className="flex min-h-screen flex-col items-center justify-between p-4 sm:p-8 md:px-24 md:pt-24 bg-[linear-gradient(to_bottom,_#1D352E_600px,_white_600px)] dark:bg-[linear-gradient(to_bottom,_#052e0c_600px,_#0f172a_600px)]">
        <section className="relative w-full mt-2 sm:mt-0">
          <div className="h-auto w-full flex flex-col gap-6">
            {/* Title Section */}
            <div className="relative z-10 w-full max-w-full ml-0 sm:ml-2 py-8 px-2 text-white">
              <Breadcrumb className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-1 text-xs sm:text-sm mt-14 md:mt-2 text-white">
                <BreadcrumbItem>
                  <BreadcrumbLink
                    asChild
                    className="text-white hover:text-gray-400 text-base md:text-lg"
                  >
                    <Link href="/our-programs">Our Programs</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="list-none hidden md:block " />
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-white text-base md:text-lg break-words max-w-full">
                    {program.title}
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </Breadcrumb>

              {/* Main Title */}
              <h1 className="text-3xl sm:text-5xl h-auto font-bold mt-5">
                {program.title}
              </h1>
            </div>

            {/* Carousel Section */}
            <div className="w-full max-w-6xl mx-auto">
              <AutoScrollCarousel
                images={carouselImages}
                autoScrollInterval={3000}
                height="450px"
                className="w-full rounded-lg"
                imageClassName="rounded-lg h-full"
                containerClassName="rounded-lg"
                showDots={true}
                pauseOnHover={true}
                loop={true}
                transitionDuration={700}
                objectFit="cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              />
            </div>
          </div>
        </section>

        {/* Content Section */}
        <div className="max-w-7xl p-6 mt-6 text-start">
          <h3 className="text-xl mb-2">{program.header}</h3>
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
          <h3 className="text-xl mb-4">{program.header1}</h3>
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
          <h3 className="text-xl mb-4">{program.header2}</h3>
          <ul className="list-disc list-inside">
            {program.impacts.map((item, index) => (
              <li key={index} className="mb-2">
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

          <h3 className="text-xl mb-4">{program.paraTitle1}</h3>
          <p className="text-gray-700 dark:text-gray-400 mb-6">
            {program.para1}
          </p>

          <h3 className="text-xl mb-4">{program.paraTitle2}</h3>
          <p className="text-gray-700 dark:text-gray-400 mb-6">
            {program.para2}
          </p>
        </div>
      </main>
    </div>
  );
}
