import { Button } from "@/components/ui/Button";
import Image from "next/image";
import OurImpact from "../ourImpact/page";
import Link from "next/link";

export default function JourneyHighlights() {
  return (
    <main className="min-h-screen font-sans overflow-x-hidden">
      <section className="max-w-7xl md:ml-10  py-4">
        <div className="container grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mx-auto px-4 sm:px-6 lg:px-8">
          {/* Text content - takes full width on mobile, 2/3 on large screens */}
          <div className="col-span-1 lg:col-span-2 py-6 sm:py-8 md:py-12">
            <p className="text-gray-600 dark:text-gray-300 max-w-full sm:max-w-2xl md:max-w-5xl mx-auto text-sm sm:text-lg leading-relaxed">
              <span className="font-bold text-[17px]">
                From Jharkhand to North-East to Kashmir to Delhi – Uniting
                Villages, Rivers, and Policies in India’s Biggest Water Movement
              </span>
              <br />
              In 2016, Shashank Singh, the founder of GRAM, stood at a
              crossroads. He had just completed a transformative fellowship, a
              journey that opened his eyes to a profound truth: water, the very
              essence of life, was an essential yet dangerously neglected
              commodity across India. Inspired by the pioneering thoughts of Mr.
              Sanjit (Bunker) Roy on water conservation and fueled by his own
              observations, Shashank knew he couldn't stand by. He decided to
              act, not with words, but with action. <br />
              <br /> He embarked on a solitary mission, on a motorbike, a
              roaring symbol of his determination to awaken hearts to the quiet
              crisis of water scarcity. His motorbike became his mobile
              classroom, every mile a testament to his unwavering belief that
              every drop counts, every person's awareness can spark change. He
              traversed vast stretches of India, arduous roads, and the constant
              fatigue that tested his resolve. He met villagers, farmers, and
              children, sharing stories of resourcefulness and struggle, sowing
              seeds of consciousness wherever he went.
            </p>
          </div>
          {/* Image - takes full width on mobile, 1/3 on large screens */}
          <div className="col-span-1 lg:col-span-1 flex justify-center items-center">
            <Image
              src="/bike.jpg"
              alt="waterRide"
              width={600} // Increased base width for better quality on larger screens
              height={400} // Adjusted height for aspect ratio
              className="object-cover w-full h-auto rounded-lg shadow-lg max-w-sm lg:max-w-full" // Added max-w-sm for mobile image size control
              priority
            />
          </div>
        </div>

        <p className=" mx-auto bg-[#DEE6EB] dark:bg-gray-700 w-fit rounded-lg px-4 text-gray-700 dark:text-gray-200 flex items-center text-sm sm:text-base mt-10">
          Get Involved
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl mt-4 text-center mb-6 px-4">
          Journey Highlights
        </h2>
        <div className="flex flex-col sm:flex-row justify-center space-y-6 sm:space-y-0 sm:space-x-4 lg:space-x-8 px-4 max-w-7xl mx-auto">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md w-full sm:w-96">
            <Image
              src="/logos/bike.png"
              alt="bike_img"
              width={50}
              height={50}
              className="w-12 h-12 mx-auto"
            />
            <p className=" my-2 text-lg text-center">8,000 Kilometers</p>
            <p className="text-sm  text-gray-500 dark:text-gray-400 leading-relaxed">
              An epic motorcycle expedition across the Western and Eastern Ghats
              of India
            </p>
          </div>
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md w-full sm:w-96">
            <Image
              src="/logos/state.png"
              alt="states_img"
              width={50}
              height={50}
              className="w-12 h-12 mx-auto"
            />
            <p className="my-2 text-lg text-center">13 States</p>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
              Connecting communities across diverse geographical and cultural
              landscapes
            </p>
          </div>
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md w-full sm:w-96">
            <Image
              src="/logos/supporters.png"
              alt="supporters_img"
              width={50}
              height={50}
              className="w-12 h-12 mx-auto"
            />
            <p className="my-2 text-lg text-center">60 Supporters</p>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
              Engaging with local residents, NGOs, and traditional knowledge
              keepers
            </p>
          </div>
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md w-full sm:w-96">
            <Image
              src="/logos/outreach.png"
              alt="outreach_img"
              width={50}
              height={50}
              className="w-12 h-12 mx-auto"
            />
            <p className="my-2 text-lg text-center">Outreach</p>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
              Workshops and demonstrations at schools and community centres
            </p>
          </div>
        </div>
        <div className="mt-8 flex justify-center">
          <Link href="/contact-us">
            <Button className="bg-[#538C7B] rounded-xl hover:bg-emerald-800">
              BECOME A VOLUNTEER
            </Button>
          </Link>
        </div>
      </section>
      <OurImpact />
    </main>
  );
}
