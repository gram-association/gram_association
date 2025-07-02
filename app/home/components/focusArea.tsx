import Image from "next/image";

export default function FocusAreas() {
  return (
    <section className="min-h-screen py-8 md:py-16 text-center bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="inline-block bg-[#DEE6EB] dark:bg-gray-700 rounded-lg px-2 py-1 text-sm text-gray-700 dark:text-gray-200 mb-4 md:mb-6">
          Our Focus Areas
        </p>
        <h2 className="text-2xl md:text-3xl font-epilogue text-start mb-6 md:mb-8 text-gray-900 dark:text-gray-100">
          THE 5 Es
        </h2>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center md:space-x-8 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative mb-8 md:mb-0">
          <div className="relative w-[350px] h-[350px] mx-auto md:w-[450px] md:h-[450px] md:mr-20 rounded-full border-2 border-gray-300 border-l-transparent dark:border-gray-600 flex items-center justify-center">
            <Image
              src="/focus area.png"
              alt="5 Es Illustration"
              width={200}
              height={200}
              className="w-64 max-w-[400px] h-auto md:w-80 md:max-w-[500px]"
            />
          </div>
        </div>
        <div className="space-y-8 text-left w-full md:w-1/2">
          <div className="flex gap-4 items-start relative">
            <div className="relative z-10">
              <Image
                src="/Group 6.png"
                alt="Entrepreneurship Icon"
                width={40}
                height={40}
                className="w-10 h-10"
              />
            </div>
            <div className="relative">
              <p className="font-bold text-gray-900 dark:text-gray-100">
                Entrepreneurship:
              </p>
              <p className="text-gray-400 dark:text-gray-500 text-sm">
                Fostering a spirit of innovation, ownership, and initiative to
                drive sustainable change
              </p>
              <div className="absolute hidden md:block h-[2px] bg-gray-300 dark:bg-gray-600 top-5 right-[calc(100%+1rem)] w-[calc(46.5%+1rem)]"></div>
              <div className="absolute -left-66 top-3 w-4 h-4 bg-[#D7BCB7] rounded-full"></div>
            </div>
          </div>
          <div className="flex gap-4 items-start relative">
            <div className="relative z-10">
              <Image
                src="/Group 8.png"
                alt="Edification Icon"
                width={40}
                height={40}
                className="w-10 h-10"
              />
            </div>
            <div className="relative">
              <p className="font-bold text-gray-900 dark:text-gray-100">
                Enrichment
              </p>
              <p className="text-gray-400 dark:text-gray-500 text-sm">
                Developing learning opportunities that help people grow and
                uplift communities within their society
              </p>
              <div className="absolute hidden md:block h-[2px] bg-gray-300 dark:bg-gray-600 top-5 right-[calc(100%+1rem)] w-[calc(28.5%+1rem)]"></div>
              <div className="absolute -left-50 top-3 w-4 h-4 bg-[#D7BCB7] rounded-full"></div>
            </div>
          </div>
          <div className="flex gap-4 items-start relative">
            <div className="relative z-10">
              <Image
                src="/Group 7.png"
                alt="Empowerment Icon"
                width={40}
                height={40}
                className="w-10 h-10"
              />
            </div>
            <div className="relative">
              <p className="font-bold text-gray-900 dark:text-gray-100">
                Enablement
              </p>
              <p className="text-gray-400 dark:text-gray-500 text-sm">
                Enabling individuals and communities to serve themselves,
                instilling confidence and driving a positive impact
              </p>
              <div className="absolute hidden md:block h-[2px] bg-gray-300 dark:bg-gray-600 top-5 right-[calc(100%+1rem)] w-[calc(23.5%+1rem)]"></div>
              <div className="absolute -left-43 top-3 w-4 h-4 bg-[#D7BCB7] rounded-full"></div>
            </div>
          </div>
          <div className="flex gap-4 items-start relative">
            <div className="relative z-10">
              <Image
                src="/Group 9.png"
                alt="Education Icon"
                width={40}
                height={40}
                className="w-10 h-10"
              />
            </div>
            <div className="relative">
              <p className="font-bold text-gray-900 dark:text-gray-100">
                Education
              </p>
              <p className="text-gray-400 dark:text-gray-500 text-sm">
                Enabling individuals and communities to serve themselves,
                instilling confidence and driving a positive impact
              </p>
              <div className="absolute hidden md:block h-[2px] bg-gray-300 dark:bg-gray-600 top-5 right-[calc(100%+1rem)] w-[calc(26.5%+1rem)]"></div>
              <div className="absolute -left-47 top-3 w-4 h-4 bg-[#D7BCB7] rounded-full"></div>
            </div>
          </div>
          <div className="flex gap-4 items-start relative">
            <div className="relative z-10">
              <Image
                src="/Group 10.png"
                alt="Environment Icon"
                width={40}
                height={40}
                className="w-10 h-10"
              />
            </div>
            <div className="relative">
              <p className="font-bold text-gray-900 dark:text-gray-100">
                Environment:
              </p>
              <p className="text-gray-400 dark:text-gray-500 text-sm">
                Promoting sustainable practices and environmental consciousness
                for future generations
              </p>
              <div className="absolute hidden md:block h-[2px] bg-gray-300 dark:bg-gray-600 top-5 right-[calc(100%+1rem)] w-[calc(43.5%+1rem)]"></div>
              <div className="absolute -left-66 top-3 w-4 h-4 bg-[#D7BCB7] rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
