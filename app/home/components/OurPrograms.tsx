import { Epilogue } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

export default function OurPrograms() {
  return (
    <>
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

          <div className="min-w-screen flex flex-col">
            <div className="flex flex-col md:flex-row">
              <div className="flex-1 bg-[#EBDDDB] dark:bg-gray-800 p-6">
                <div className="ml-0 sm:ml-20">
                  <h2 className="text-xl sm:text-2xl font-epilogue text-gray-800 dark:text-gray-100 mb-2">
                    Rasabeda Spring Water Management Project (2019): Ending
                    Water Crisis in Rasabeda Village, Jharkhand
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 text-base sm:text-base">
                    In the remote village of Rasabeda, nestled in the
                    challenging terrain of the Chota Nagpur plateau, access to
                    clean water was once a daily struggle. To address this, GRAM
                    Association developed their first crowdfunded project in
                    collaboration with DEEKSHA NGO and IIM Ranchi under the
                    Unnat Bharat Abhiyan, launched a holistic water management
                    initiative that has since transformed the community’s
                    relationship with water.
                  </p>
                  <Link href="/our-programs/${program.slug}">
                    <button className="bg-teal-600 text-white px-4 py-2 rounded-full hover:bg-teal-700 dark:hover:bg-teal-800 transition">
                      Read More
                    </button>
                  </Link>
                </div>
              </div>

              <div className="flex-1 bg-gray-300 dark:bg-gray-700 h-96 w-full">
                <Image
                  src="/program A.png"
                  alt="programs"
                  width={400}
                  height={600}
                  className="w-full h-full"
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row">
              <div className="flex-1 bg-[#DDE8E5] dark:bg-gray-800 p-6">
                <div className="ml-0 sm:ml-20">
                  <h2 className="text-xl sm:text-2xl font-epilogue text-gray-800 dark:text-gray-100 mb-2">
                    Restoring Hope Through Water: Pond Rejuvenation in
                    Kherwatikra, Jharkhand
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 text-base sm:text-base">
                    In 2020, amid the challenges of the COVID-19 pandemic, GRAM
                    Association, in partnership with Barefoot College, Tilonia,
                    brought new life to Kherwatikra, a small tribal hamlet in
                    the Ranchi district of Jharkhand. Despite abundant rainfall,
                    the village of 38 Munda tribal families struggled with
                    chronic water scarcity. The reason? Rapid water runoff and a
                    lack of infrastructure to capture and retain rainwater. At
                    the heart of the intervention was the revival of the
                    village’s decades-old pond, Gudibandh Talab, which had
                    fallen into disrepair over the years — filled with silt,
                    unable to hold water, and contributing to falling
                    groundwater levels.
                  </p>
                  <Link href="/our-programs/${program.slug.b}">
                    <button className="bg-teal-600 text-white px-4 py-2 rounded-full hover:bg-teal-700 dark:hover:bg-teal-800 transition">
                      Read More
                    </button>
                  </Link>
                </div>
              </div>
              <div className="flex-1 bg-gray-300 dark:bg-gray-700 h-full">
                <Image
                  src="/story-image.png"
                  alt="story image"
                  width={400}
                  height={800}
                  className="w-full h-[380px] object-cover"
                />
              </div>
            </div>
          </div>

          <div className="mt-8">
            <Link href="/our-programs">
              <button className="border-2 border-teal-600 text-teal-600 px-6 py-2 rounded-full hover:bg-teal-600 hover:text-white dark:border-teal-500 dark:text-teal-500 dark:hover:bg-teal-700 dark:hover:text-white transition">
                VIEW MORE
              </button>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
