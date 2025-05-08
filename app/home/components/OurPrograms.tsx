import Image from "next/image";
import Link from "next/link";

export default function OurPrograms() {
  const programs = [
    {
      title: "Program A",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
      imageSrc: "/program A.png",
      link: "/ProgramA",
    },
    {
      title: "Program B",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
      imageSrc: "/story-image.png",
      link: "/ProgramB",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <span className="inline-block bg-teal-100 text-teal-800 text-sm font-medium px-3 py-1 rounded-full mb-4">
            Our Programs
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800">
            Making a Lasting Impact
          </h1>
        </div>

        {/* Programs Section */}
        <div className="space-y-8 lg:space-y-12">
          {programs.map((program, index) => (
            <div
              key={program.title}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } items-center bg-white rounded-xl shadow-lg overflow-hidden`}
            >
              <div className="lg:w-1/2 p-6 sm:p-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  {program.title}
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {program.description}
                </p>
                <Link href={program.link}>
                  <button className="bg-teal-600 text-white px-6 py-2 rounded-full hover:bg-teal-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2">
                    Read More
                  </button>
                </Link>
              </div>
              <div className="lg:w-1/2 relative h-64 sm:h-80 lg:h-96 w-full">
                <Image
                  src={program.imageSrc}
                  alt={program.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={index === 0}
                />
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link href="/our-programs">
            <button className="border-2 border-teal-600 text-teal-600 px-8 py-3 rounded-full text-lg font-medium hover:bg-teal-600 hover:text-white transition duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2">
              View All Programs
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
