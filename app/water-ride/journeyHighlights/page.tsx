import { Button } from "@/components/ui/Button";
import Image from "next/image";
import OurImpact from "../ourImpact/page";
import Link from "next/link";

export default function JourneyHighlights() {
  return (
    <main>
      <section className="py-8 bg-[#F8F1E9] min-w-screen text-center mt-10">
        <p className="container mx-auto bg-gray-100 w-fit rounded-lg px-4 py-2 text-gray-700 flex items-center text-sm sm:text-base">
          Get Involved
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl mt-4 text-center mb-6 px-4">
          Journey Highlights
        </h2>
        <div className="flex flex-col sm:flex-row justify-center space-y-6 sm:space-y-0 sm:space-x-4 lg:space-x-8 px-4 max-w-7xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md w-full sm:w-96">
            <Image
              src="/bike.png"
              alt="bike_img"
              width={50}
              height={50}
              className="w-12 h-12 mx-auto"
            />
            <p className="font-bold my-2 text-lg">8,000 Kilometers</p>
            <p className="text-sm  text-gray-500 leading-relaxed">
              An epic motorcycle expedition across the Western and Eastern Ghats
              of India
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md w-full sm:w-96">
            <Image
              src="/state.png"
              alt="states_img"
              width={50}
              height={50}
              className="w-12 h-12 mx-auto"
            />
            <p className="font-bold my-2 text-lg">13 States</p>
            <p className="text-sm  text-gray-500 leading-relaxed">
              Connecting communities across diverse geographical and cultural
              landscapes
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md w-full sm:w-96">
            <Image
              src="/supporters.png"
              alt="supporters_img"
              width={50}
              height={50}
              className="w-12 h-12 mx-auto"
            />
            <p className="font-bold my-2 text-lg">60 Supporters</p>
            <p className="text-sm text-gray-500 leading-relaxed">
              Engaging with local residents, NGOs, and traditional knowledge
              keepers
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md w-full sm:w-96">
            <Image
              src="/outreach.png"
              alt="outreach_img"
              width={50}
              height={50}
              className="w-12 h-12 mx-auto"
            />
            <p className="font-bold my-2 text-lg">Outreach</p>
            <p className="text-sm text-gray-500 leading-relaxed">
              Workshops and demonstrations at schools and community centres
            </p>
          </div>
        </div>
        <div className="mt-8">
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
