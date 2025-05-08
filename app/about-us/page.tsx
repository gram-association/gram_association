import Image from "next/image";
import Advisor from "./components/Advisor";
import OurPartners from "./components/OurPartners";
import OurTeam from "./components/OurTeam";

export default function AboutUs() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-gradient-to-b from-[#e2f7f1] to-white bg-no-repeat bg-[length:100%_600px] justify-between px-4 sm:px-6 md:px-8 lg:px-24 pt-16 pb-24">
      {/* Our Story Section */}
      <section className="w-full max-w-7xl mx-auto mt-8 animate-fade-in">
        <div className="text-center">
          <span className="inline-block bg-[#DEE6EB] rounded-full px-3 py-1 text-xs sm:text-sm font-medium text-gray-700 mb-6">
            About Us
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Our Story
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
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
      </section>

      {/* How We Started Section */}
      <section className="w-full max-w-7xl mx-auto my-16 md:my-24 animate-fade-in">
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12">
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/story-image.png"
                alt="Story Image"
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <span className="inline-block bg-[#DEE6EB] rounded-full px-3 py-1 text-sm font-medium text-gray-700 mb-4">
              Our Story
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              How We Started
            </h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
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
            </p>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="w-full bg-pink-50 py-16 md:py-24 my-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="inline-block bg-[#DEE6EB] rounded-full px-3 py-1 text-xs sm:text-sm font-medium text-gray-700 mb-6">
              Our Values
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-12">
              What We Believe In
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "Community Empowerment",
                description:
                  "We involve local communities to lead development, creating sustainable change.",
              },
              {
                title: "Collaboration",
                description:
                  "We work in partnership with communities, organizations, and individuals to amplify our impact.",
              },
              {
                title: "Innovation",
                description:
                  "We embrace innovative approaches and solutions to address social challenges.",
              },
              {
                title: "Integrity",
                description:
                  "We operate with transparency, accountability, and the highest ethical standards in our work.",
              },
              {
                title: "Equity",
                description:
                  "We are committed to promoting diversity, inclusion, and fairness in all aspects of our work.",
              },
              {
                title: "Sustainability",
                description:
                  "We focus on creating solutions that are environmentally, socially, and economically sustainable.",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
                  {value.title}
                </h3>
                <p className="text-base text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team, Partners, and Advisor Sections */}
      <section className="w-full max-w-7xl mx-auto space-y-24 py-16">
        <OurTeam />
        <OurPartners />
        <Advisor />
      </section>
    </main>
  );
}
