import { Button } from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";

import Tabs from "./components/Tabs";

export default function WaterRide() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-20 bg-[linear-gradient(to_bottom,_#5A829A_400px,_#F5F5F5_400px)] dark:bg-[linear-gradient(to_bottom,_#1E3A5F_400px,_#0f172a_400px)] overflow-x-hidden">
      <section className="relative w-full max-w-7xl mx-auto mt-2 sm:mt-0">
        <div className="h-64 sm:h-72 md:h-[500px] w-full sm:min-w-screen">
          <div className="absolute inset-0">
            <Image
              src="/waterRide.png"
              alt="community"
              width={1152}
              height={700}
              className="object-cover w-6xl rounded-xl mx-auto mt-12 sm:mt-60"
            />
          </div>
          <div className="flex flex-col md:flex-row justify-center md:justify-start items-center md:items-start">
            <div className=" relative z-10 mt-0 sm:mt-10 w-full md:w-auto max-w-md sm:ml-20 py-3 sm:py-10 px-2 text-white dark:text-gray-100 text-center md:text-left">
              <h1 className="text-xl sm:text-2xl md:text-6xl font-bold">
                The Water Ride Initiative
              </h1>
            </div>
            <div
              className={`hidden md:block mt-28 mx-4 h-20 w-px bg-gray-300 dark:bg-gray-500`}
            ></div>
            <div
              className={`relative z-10 py-5 sm:py-10 md:px-2 px-4 mt-3 md:mt-0 text-white dark:text-gray-200 w-sm md:w-[647px] min-w-md mx-2 md:mr-8 text-center md:text-left`}
            >
              <p className="text-[12.5px] sm:text-[15px] px-6 mx-1 sm:mx-0 mt-28 sm:mt-16">
                In 2016, Shashank Singh embarked on a revolutionary
                8,000-kilometer motorcycle expedition across 13 Indian states,
                promoting rainwater harvesting and sustainable water solutions.
                Now planning to complete the unfinished ride.
              </p>
              <Link href="/contact-us">
                <Button
                  className={`bg-[#9C574B] text-white dark:text-gray-100 py-0 sm:py-1 px-4 w-fit mt-1 sm:mt-5 rounded-full hover:bg-amber-900 dark:hover:bg-[#7A3F35] text-xs sm:text-base transition-colors`}
                >
                  SUPPORT OUR CAUSE
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Tabs />
    </main>
  );
}
