import { Button } from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";
// import JourneyHighlights from "./journeyHighlights/page";
import Tabs from "./components/Tabs";
// import OurImpact from "./ourImpact/page";
// import { Epilogue } from "next/font/google";

// const epilogue = Epilogue({
//   subsets: ["latin"],
//   weight: ["400", "600", "700"],
//   variable: "--font-epilogue",
// });

export default function WaterRide() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-10 sm:py-20 bg-[linear-gradient(to_bottom,_#5A829A_400px,_white_400px)]">
      <section className="relative w-full max-w-7xl mx-auto mt-6 sm:mt-0">
        <div className="h-64 sm:h-72 md:h-[500px] w-full sm:min-w-screen">
          <div className="absolute inset-0">
            <Image
              src="/waterRide Hero.png"
              alt="community"
              width={1152}
              height={700}
              className="object-cover w-6xl rounded-xl mx-auto mt-18 sm:mt-60"
            />
          </div>
          <div className="flex flex-col md:flex-row justify-center md:justify-start items-center md:items-start">
            <div className="`${epilogue.variable}` relative z-10 mt-3 sm:mt-10 w-full md:w-auto max-w-md sm:ml-20 py-6 sm:py-10 px-2 text-white text-center md:text-left">
              <h1 className="text-xl sm:text-2xl md:text-6xl font-epilogue font-bold ">
                The Water Ride Initiative
              </h1>
            </div>
            <div className="hidden md:block mt-28 mx-4 h-20 w-px bg-gray-300"></div>
            <div className="relative z-10 py-8 sm:py-10  md:px-2 px-4 text-white w-sm md:w-[647px] min-w-md mx-2 md:mr-8 text-center md:text-left">
              <p className="text-xs sm:text-sm px-4 mt-28 sm:mt-16 ">
                In 2016, Shashank Singh embarked on a revolutionary
                8,000-kilometer motorcycle expedition across 13 Indian states,
                promoting rainwater harvesting and sustainable water solutions.
              </p>
              <Link href="/contact-us">
                <Button className="bg-[#9C574B] text-white py-1 px-4 w-fit mt-4 sm:mt-5 rounded-full hover:bg-amber-900 text-xs sm:text-base">
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
