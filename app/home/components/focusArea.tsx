import Image from "next/image";

export default function FocusAreas() {
  return (
    <section className="min-h-screen py-8 md:py-16 text-center bg-white ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="container text-center bg-[#DEE6EB] w-fit rounded-lg px-1 text-sm sm:text-lg text-gray-700  flex justify-start mb-4">
          Our Focus Areas
        </p>
        <h2 className="text-2xl md:text-5xl font-epilogue text-start mb-6 md:mb-8 text-gray-900 ">
          Our Approach
        </h2>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center md:space-x-8 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative mb-8 md:mb-0">
          <div className="relative w-[350px] h-[350px] mx-auto md:w-[450px] md:h-[450px] md:mr-20 rounded-full border-2 border-gray-300 border-l-transparent  flex items-center justify-center">
            <Image
              src="/focus area.png"
              alt="5 Es Illustration"
              width={200}
              height={200}
              className="w-64 max-w-[400px] h-auto md:w-80 md:max-w-[500px]"
            />
          </div>
        </div>
        <div className="space-y-5 text-left w-full md:w-1/2">
          <div className="flex gap-4 items-start relative">
            <div className="relative z-10">
              <Image
                src="/logos/Group 6.png"
                alt="Entrepreneurship Icon"
                width={40}
                height={40}
                className="w-18 md:w-full h-10 md:h-full"
              />
            </div>
            <div className="relative">
              <p className="font-bold text-gray-900 text-lg">
                Entrepreneurship:
              </p>
              <p className="text-gray-500  text-base">
                Fostering a spirit of innovation, ownership, and initiative to
                drive sustainable change
              </p>
              <div className="absolute hidden md:block h-[2px] bg-gray-300  top-5 right-[calc(100%+1rem)] w-[calc(48.5%+1rem)]"></div>
              <div className="absolute -left-78 top-3 w-4 h-4 bg-[#D7BCB7] rounded-full"></div>
            </div>
          </div>
          <div className="flex gap-4 items-start relative">
            <div className="relative z-10">
              <Image
                src="/logos/Group 8.png"
                alt="Edification Icon"
                width={40}
                height={40}
                className="w-18 md:w-full h-10 md:h-full"
              />
            </div>
            <div className="relative">
              <p className="font-bold text-gray-900 text-lg">Enrichment</p>
              <p className="text-gray-500  text-base">
                Developing learning opportunities that help people grow and
                uplift communities within their society
              </p>
              <div className="absolute hidden md:block h-[2px] bg-gray-300  top-5 right-[calc(100%+1rem)] w-[calc(28.5%+1rem)]"></div>
              <div className="absolute -left-50 top-3 w-4 h-4 bg-[#D7BCB7] rounded-full"></div>
            </div>
          </div>
          <div className="flex gap-4 items-start relative">
            <div className="relative z-10">
              <Image
                src="/logos/Group 7.png"
                alt="Empowerment Icon"
                width={40}
                height={40}
                className="w-18 md:w-full h-10 md:h-full"
              />
            </div>
            <div className="relative">
              <p className="font-bold text-gray-900 text-lg">Enablement</p>
              <p className="text-gray-500  text-base">
                Enabling individuals and communities to serve themselves,
                instilling confidence and driving a positive impact
              </p>
              <div className="absolute hidden md:block h-[2px] bg-gray-300  top-5 right-[calc(100%+1rem)] w-[calc(23.5%+1rem)]"></div>
              <div className="absolute -left-43 top-3 w-4 h-4 bg-[#D7BCB7] rounded-full"></div>
            </div>
          </div>
          <div className="flex gap-4 items-start relative">
            <div className="relative z-10">
              <Image
                src="/logos/Group 9.png"
                alt="Education Icon"
                width={40}
                height={40}
                className="w-18 md:w-full h-10 md:h-10"
              />
            </div>
            <div className="relative">
              <p className="font-bold text-gray-900 text-lg">Education</p>
              <p className="text-gray-500  text-base">
                Enabling individuals and communities to serve themselves,
                instilling confidence and driving a positive impact
              </p>
              <div className="absolute hidden md:block h-[2px] bg-gray-300  top-5 right-[calc(100%+1rem)] w-[calc(27.5%+1rem)]"></div>
              <div className="absolute -left-47 top-3 w-4 h-4 bg-[#D7BCB7] rounded-full"></div>
            </div>
          </div>
          <div className="flex gap-4 items-start relative">
            <div className="relative z-10">
              <Image
                src="/logos/Group 10.png"
                alt="Environment Icon"
                width={40}
                height={40}
                className="w-18 md:w-full h-10 md:h-full"
              />
            </div>
            <div className="relative">
              <p className="font-bold text-gray-900 text-lg">Environment:</p>
              <p className="text-gray-500  text-base">
                Promoting sustainable practices and environmental consciousness
                for future generations
              </p>
              <div className="absolute hidden md:block h-[2px] bg-gray-300  top-5 right-[calc(100%+1rem)] w-[calc(41%+1rem)]"></div>
              <div className="absolute -left-65 top-3 w-4 h-4 bg-[#D7BCB7] rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
