import Image from "next/image";
import Link from "next/link";

const programs = [
  {
    id: 1,
    category: "Education",
    title: "Program A",
    description:
      "Providing quality education to children in underserved communities through school construction, teacher training...",
    image: "/education.png",
    slug: "program-a",
  },
  {
    id: 2,
    category: "Environment",
    title: "Program B",
    description:
      "Providing access to clean and safe drinking water through well construction and water purification systems...",
    image: "/environment.jpg",
  },
  {
    id: 3,
    category: "Healthcare",
    title: "Program C",
    description:
      "Establishing health centers in remote areas to provide primary healthcare services to underserved communities...",
    image: "/healthcare.jpg",
  },
  {
    id: 4,
    category: "Education",
    title: "Program A",
    description:
      "Providing quality education to children in underserved communities through school construction, teacher training...",
    image: "/education.png",
  },

  {
    id: 5,
    category: "Environment",
    title: "Program B",
    description:
      "Providing access to clean and safe drinking water through well construction and water purification systems...",
    image: "/environment.jpg",
  },
  {
    id: 6,
    category: "Healthcare",
    title: "Program C",
    description:
      "Establishing health centers in remote areas to provide primary healthcare services to underserved communities...",
    image: "/healthcare.jpg",
  },
];

export default function Programs() {
  return (
    <main className="flex min-h-screen bg-gradient-to-b from-[#f1ddaf] to-white bg-no-repeat bg-[length:100%_500px] flex-col items-center justify-between p-24">
      <div className="text-center py-8 sm:py-12">
        <p className=" mx-auto bg-[#DEE6EB] rounded-lg px-2 py-1 text-xs sm:text-sm text-gray-700 flex items-center mb-4">
          Our Programs
        </p>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 px-4">
          MAKING A LASTING IMPACT
        </h1>
        <p className="text-gray-600 mt-4 text-xs sm:text-sm md:text-base w-full sm:w-[70%] mx-auto px-4">
          Explore our diverse range of programs designed to create sustainable
          change and improve lives in communities around the world.
        </p>
      </div>

      <div className="flex justify-center space-x-4 mb-8">
        {["All Programs", "Upcoming", "Education", "Health", "Environment"].map(
          (filter) => (
            <button
              key={filter}
              className="px-4 py-2 sm:px-6 sm:py-2 bg-gray-200 text-gray-700 text-sm sm:text-base rounded-full hover:bg-[#1D352E] hover:text-white transition whitespace-nowrap"
            >
              {filter}
            </button>
          )
        )}
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
        {programs.map((program) => (
          <div
            key={program.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="relative h-48">
              <Image
                src={program.image}
                alt={program.title}
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4">
                <span className="bg-white/80 text-gray-700 text-sm font-semibold  rounded-full w-fit px-1 border-0">
                  {program.category}
                </span>
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">
                {program.title}
              </h3>
              <p className="text-gray-600 text-sm mt-2">
                {program.description}
              </p>
              {program.title === "Program A" && program.slug ? (
                <Link href={`/our-programs/${program.slug}`}>
                  <button className="mt-4 text-blue-600 font-semibold hover:underline">
                    LEARN MORE →
                  </button>
                </Link>
              ) : (
                <button className="mt-4 text-blue-600 font-semibold hover:underline">
                  LEARN MORE →
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Get involved */}
      {/* <div className="bg-[#BAD1CA] w-screen mt-20 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <p className="container mx-auto text-center bg-gray-100 w-fit rounded-lg px-1 text-sm  text-gray-700 flex items-center mb-4">
            Get Involved
          </p>
          <h1 className="text-5xl tracking-wider text-center mb-8">
            Support Our Programs
          </h1>
          <div className="w-6xl grid grid-cols-1 md:grid-cols-2 gap-6 -ml-40">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Donate</h2>
              <p className="text-gray-600 mb-6 text-sm">
                Your generous contribution helps us expand our programs and
                reach more communities. Every donation, no matter the size,
                makes a difference.
              </p>
              <Link href="/contact-us">
                <button className="bg-[#538C7B] text-white px-6 py-2 rounded-full hover:bg-teal-700 transition">
                  DONATE NOW
                </button>
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Volunteer</h2>
              <p className="text-gray-600 mb-6">
                Join our team of dedicated volunteers and contribute your
                skills, time, and passion to support our programs and make a
                direct impact.
              </p>
              <Link href="/contact-us">
                <button className="bg-[#538C7B] text-white px-6 py-2 rounded-full hover:bg-teal-700 transition">
                  BECOME A VOLUNTEER
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div> */}
      <div className="bg-[#BAD1CA] w-screen mt-20 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="inline-block mx-auto text-center bg-gray-100 w-40 rounded-lg px-2 py-1 text-xs sm:text-sm text-gray-700 container items-center mb-6">
            Get Involved
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl tracking-wider text-center mb-8 ">
            Support Our Programs
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-lg sm:text-xl font-semibold mb-4">Donate</h2>
              <p className="text-gray-600 mb-6 text-sm sm:text-base">
                Your generous contribution helps us expand our programs and
                reach more communities. Every donation, no matter the size,
                makes a difference.
              </p>
              <Link href="/contact-us">
                <button className="bg-[#538C7B] text-white px-4 py-2 sm:px-6 sm:py-2 rounded-full hover:bg-teal-700 transition text-sm sm:text-base">
                  DONATE NOW
                </button>
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-lg sm:text-xl font-semibold mb-4">
                Volunteer
              </h2>
              <p className="text-gray-600 mb-6 text-sm sm:text-base">
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
