import { Button } from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";
import JourneyHighlights from "./journeyHighlights/page";
import Tabs from "./components/Tabs";
import OurImpact from "./ourImpact/page";

export default function WaterRide() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-20 bg-[linear-gradient(to_bottom,_#5A829A_400px,_white_400px)]">
      <section className="relative">
        <div className=" h-72 sm:h-[500px] w-xl sm:min-w-screen">
          <div className="absolute  inset-0">
            <Image
              src="/waterRide Hero.png"
              alt="community"
              width={1152}
              height={700}
              className="object-cover mt-60 w-6xl rounded-xl  mx-auto  "
            />
          </div>
          <div className="flex justify-evenly ">
            <div className="relative z-10 w-sm  sm:w-lg ml-28  py-10 px-2  text-white">
              <h1 className="text-2xl sm:text-6xl font-bold mt-10 ">
                The Water Ride Initiative
              </h1>
            </div>
            <div className="hidden md:block mt-28 mx-8 h-20 w-px bg-gray-300"></div>
            <div className="relative z-10 py-10 px-2 text-white w-xl  mr-35">
              <p className="text-sm mt-16">
                In 2016, Shashank Singh embarked on a revolutionary
                8,000-kilometer motorcycle expedition across 13 Indian states,
                promoting rainwater harvesting and sustainable water solutions.
              </p>
              <Link href="/our-programs">
                <Button className="bg-[#9C574B] text-white  py-1 w-fit mt-5 rounded-full hover:bg-cyan-700">
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
