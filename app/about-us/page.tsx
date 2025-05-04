import OurValues from "../../components/aboutUs/OurValues";
import Advisor from "./components/Advisor";
import OurPartners from "./components/OurPartners";
import OurTeam from "./components/OurTeam";

export default function AboutUs() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-gradient-to-b from-[#e2f7f1] to-white bg-no-repeat bg-[length:100%_500px] justify-between p-24">
      <div className="mt-12">
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
      </div>

      {/* Our story */}
      <section>
        <div className="flex justify-center space-x-8 mt-10">
          <div className="w-1/2">
            <img
              src="story-image.png"
              alt="Story Image"
              className="w-full h-full rounded-lg shadow-lg"
            />
          </div>
          <div className="w-1/2 text-left">
            <p className="container  bg-[#DEE6EB]  w-fit rounded-full  text-sm text-gray-700 ">
              Our Story
            </p>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 pt-2">
              How We Started
            </h2>
            <p className="text-gray-600 text-sm">
              In 2019, Shashank Singh founded Groundwater & Restoration Adaptive
              Management (GRAM) Association with the mission to rejuvenate
              traditional environmental practices and promote sustainable water
              management. GRAM aims to focus on tackling interconnected
              challenges such as women’s empowerment, environmental resilience,
              and community development.
              <br /> Today, GRAM embodies the vision of blending indigenous
              knowledge with modern innovation, creating sustainable solutions
              for rural communities. Through collaboration and education, GRAM
              continues to drive change and build a more inclusive and resilient
              future. <br />
              This keeps our focus on the inspiration and journey, while “How We
              Started” covers the foundation and evolution of GRAM Association.
              Let’s make a difference together, just like you!
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <div className="py-16 bg-pink-50 text-center mt-20 min-w-full">
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
      </div>
      <OurTeam />
      <OurPartners />
      <Advisor />
    </main>
  );
}
