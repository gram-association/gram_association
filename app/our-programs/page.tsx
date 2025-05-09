import Image from "next/image";
import Link from "next/link";
import { programs } from "./data/programs";

export default function Programs() {
  return (
    <main className="flex min-h-screen bg-gradient-to-b from-[#f1ddaf] to-white bg-no-repeat bg-[length:100%_500px] flex-col items-center justify-between p-4 sm:p-8 lg:p-24">
      <div className="text-center py-8 sm:py-12">
        <p className="container w-fit mx-auto bg-[#DEE6EB] rounded-lg px-2 py-1 text-xs sm:text-sm text-gray-700 flex items-center mb-4">
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

      <div className="flex justify-center space-x-2 sm:space-x-4 mb-8 flex-wrap gap-2">
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

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
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
                <span className="bg-white/80 text-gray-700 text-sm font-semibold rounded-full px-3 py-1 border-0">
                  {program.category}
                </span>
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">
                {program.title}
              </h3>
              <p className={`text-gray-600 text-sm mt-2`}>
                {program.description}
              </p>

              <Link href={`/our-programs/${program.slug}`}>
                <button className="mt-4 text-blue-600 font-semibold hover:underline">
                  LEARN MORE →
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-[#BAD1CA] w-screen mt-20 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="mx-auto text-center bg-gray-100 w-fit rounded-lg px-1 text-xs sm:text-sm text-gray-700 container items-center mb-6">
            Get Involved
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl tracking-wider text-center mb-8">
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
