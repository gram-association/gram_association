import Image from "next/image";
import Advisor from "./components/Advisor";
import OurPartners from "./components/OurPartners";
import OurTeam from "./components/OurTeam";

export default function AboutUs() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-gradient-to-b from-[#e2f7f1] to-white bg-no-repeat bg-[length:100%_500px] justify-between p-24">
      {/* <div className="mt-12">
        <p className="container mx-auto text-center bg-[#DEE6EB] w-fit rounded-lg px-1 text-sm  text-gray-700 flex items-center">
          About Us
        </p>
        <div className="py-4 text-center">
          <h1 className="text-4xl  text-gray-800 mb-8">Our Story</h1>
          <p className="text-sm font-normal text-gray-600 max-w-3xl mx-auto mb-8">
            Inspired by his transformative journey as an SBI Youth for India
            Fellow at Barefoot College, Shashank Singh worked on grassroots
            water conservation initiatives under the mentorship of Dr. Sanjit
            ‘Bunker’ Roy. His efforts in constructing a rainwater harvesting
            pond reinforced his belief in the power of indigenous wisdom and
            collective action. <br />
            To further this mission, he launched the Harvesting the Heaven
            campaign—a motorcycle journey across 13 states—to learn, share, and
            promote traditional water conservation practices, shaping his vision
            for long-term rural impact.
          </p>
        </div>
      </div> */}

      <div className="mt-12">
        <p className="container mx-auto text-center bg-[#DEE6EB] w-fit rounded-lg px-2 py-1 text-xs sm:text-sm text-gray-700 flex items-center justify-center">
          About Us
        </p>
        <div className="py-4 sm:py-6 md:py-8 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl text-gray-800 mb-4 sm:mb-6 md:mb-8">
            Our Story
          </h1>
          <p className="text-md sm:text-sm md:text-base font-normal text-gray-600 max-w-sm sm:max-w-xl md:max-w-3xl mx-auto mb-6 sm:mb-8">
            Inspired by his transformative journey as an SBI Youth for India
            Fellow at Barefoot College, Shashank Singh worked on grassroots
            water conservation initiatives under the mentorship of Dr. Sanjit
            ‘Bunker’ Roy. His efforts in constructing a rainwater harvesting
            pond reinforced his belief in the power of indigenous wisdom and
            collective action. <br />
            To further this mission, he launched the Harvesting the Heaven
            campaign—a motorcycle journey across 13 states—to learn, share, and
            promote traditional water conservation practices, shaping his vision
            for long-term rural impact.
          </p>
        </div>
      </div>
      {/* Our story */}
      <section>
        <div className="flex flex-col lg:flex-row justify-cente items-center lg:space-x-4 space-y-4 lg:space-y-0">
          <div className="w-full lg:w-1/2">
            <Image
              src="/story-image.png"
              alt="Story Image"
              width={800}
              height={800}
              className="w-full h-full rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full lg:w-1/2 text-left">
            <p className="inline-block bg-[#DEE6EB] w-fit rounded-full px-3 py-1 text-sm text-gray-700 ">
              Our Story
            </p>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">
              How We Started
            </h2>
            <p className="text-gray-600 text-md sm:text-[13px] leading-relaxed">
              In 2019, Shashank founded Groundwater & Reforestation Adaptive
              Management (GRAM) Association with a mission to rejuvenate
              traditional environmental practices and promote sustainable
              livelihoods. Starting with water conservation, GRAM expanded its
              focus to tackle interconnected challenges such as women’s
              empowerment, environmental resilience, and social inclusion.
              <br />
              Today, GRAM embodies the vision of blending traditional knowledge
              with modern innovation, creating sustainable solutions for rural
              communities. Through collaboration and commitment, GRAM continues
              to drive change and build a more inclusive and resilient future.
              <br />
              This structure keeps "Our Story" focused on the inspiration and
              journey, while "How We Started" covers the foundation and
              evolution of GRAM Association. Let me know if you’d like any
              refinements!
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      {/* <div className="py-16 bg-pink-50 text-center mt-20 min-w-full">
        <p className="container mx-auto text-center bg-[#DEE6EB] w-fit rounded-lg px-1 text-sm mb-2 text-gray-700 flex items-center">
          Our Values
        </p>
        <h2 className="text-3xl font-bold text-gray-800 mb-12">
          What We Believe In
        </h2>
        <div className="flex justify-center space-x-8 max-w-7xl mx-auto ml-20">
          <div className="w-2xl bg-white p-6 text-start  rounded-lg shadow-md ">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Community Empowerment
            </h3>
            <p className="text-gray-600 text-sm">
              We involve local communities to lead development, creating
              sustainable change.
            </p>
          </div>
          <div className="w-2xl bg-white p-6 text-start  rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Collaboration
            </h3>
            <p className="text-gray-600 text-sm">
              We work in partnership with communities, organizations, and
              individuals to amplify our impact.
            </p>
          </div>
          <div className="w-2xl bg-white p-6 text-start  rounded-lg shadow-md mr-20">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Innovation
            </h3>
            <p className="text-gray-600 text-sm">
              We embrace innovative approaches and solutions to address social
              challenges.
            </p>
          </div>
        </div>
        <div className="flex justify-center space-x-8 max-w-7xl mx-auto mt-8 ml-20">
          <div className="w-2xl bg-white p-6 text-start  rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Integrity
            </h3>
            <p className="text-gray-600 text-sm">
              We operate with transparency, accountability, and the highest
              ethical standards in our work.
            </p>
          </div>
          <div className="w-2xl bg-white p-6 text-start  rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Equity</h3>
            <p className="text-gray-600 text-sm">
              We are committed to promoting diversity, inclusion, and fairness
              in all aspects of our work.
            </p>
          </div>
          <div className="w-2xl bg-white p-6 text-start  rounded-lg shadow-md mr-20">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Sustainability
            </h3>
            <p className="text-gray-600 text-sm">
              We focus on creating solutions that are environmentally, socially,
              and economically sustainable.
            </p>
          </div>
        </div>
      </div> */}

      <div className="py-12 bg-pink-50 text-center min-w-screen mt-20">
        <p className="container mx-auto text-center bg-[#DEE6EB] w-fit rounded-lg px-2 py-1 text-sm sm:text-xs mb-4 text-gray-700 flex items-center justify-center">
          Our Values
        </p>

        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8">
          What We Believe In
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-start">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">
              Community Empowerment
            </h3>
            <p className="text-gray-600 text-md sm:text-sm">
              We involve local communities to lead development, creating
              sustainable change.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-start">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">
              Collaboration
            </h3>
            <p className="text-gray-600 text-md sm:text-sm">
              We work in partnership with communities, organizations, and
              individuals to amplify our impact.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-start">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">
              Innovation
            </h3>
            <p className="text-gray-600 text-md sm:text-sm">
              We embrace innovative approaches and solutions to address social
              challenges.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-start">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">
              Integrity
            </h3>
            <p className="text-gray-600 text-md sm:text-sm">
              We operate with transparency, accountability, and the highest
              ethical standards in our work.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-start">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">
              Equity
            </h3>
            <p className="text-gray-600 text-md sm:text-sm">
              We are committed to promoting diversity, inclusion, and fairness
              in all aspects of our work.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-start">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">
              Sustainability
            </h3>
            <p className="text-gray-600 text-md sm:text-sm">
              We focus on creating solutions that are environmentally, socially,
              and economically sustainable.
            </p>
          </div>
        </div>
      </div>
      <OurTeam />
      <OurPartners />
      <Advisor />
    </main>
  );
}
