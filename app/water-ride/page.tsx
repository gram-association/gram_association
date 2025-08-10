import { Button } from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";

import Tabs from "./components/Tabs";

export default function WaterRide() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-4 sm:px-6 md:px-8 lg:px-24 pt-16 pb-24 bg-[linear-gradient(to_bottom,_#5A829A_500px,_#F5F5F5_500px)] overflow-x-hidden ">
      <section className="flex flex-col w-full mt-8w-full max-w-7xl mx-auto mt-20 animate-fade-in">
        {/* Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 lg:gap-16 px-4 sm:px-6 lg:px-4">
          {/* Left Column - Heading */}
          <div className="md:col-span-1 ">
            <h1 className=" text-2xl xs:text-3xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-white dark:text-white leading-tight sm:leading-tight md:leading-tight lg:leading-tight">
              The Water Ride Initiative
            </h1>
          </div>

          {/* Right Column - Description and CTA */}
          <div className="md:col-span-2 flex gap-4 md:gap-6">
            {/* Divider - Hidden on mobile and small tablets */}
            <div className="w-px hidden md:block bg-gray-300 dark:bg-gray-600 self-stretch"></div>

            <div className="flex-1 flex flex-col justify-center md:justify-start lg:justify-center">
              <p className="text-white dark:text-gray-200 leading-relaxed text-sm sm:text-base lg:text-lg mb-4 sm:mb-6">
                In 2016, Shashank Singh embarked on a revolutionary
                8,000-kilometer motorcycle expedition across 13 Indian states,
                promoting rainwater harvesting and sustainable water solutions.
                Now planning to complete the unfinished ride.
              </p>

              <div className="flex justify-start">
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
        </div>
        <div className="mt-6 ">
          <div className="relative overflow-hidden rounded-lg sm:rounded-xl border border-gray-400">
            <Image
              src="/waterRide.png"
              alt="community"
              width={1152}
              height={700}
              className="object-cover w-full h-auto"
              priority
            />
          </div>
        </div>
      </section>

      <Tabs />
    </main>
  );
}
