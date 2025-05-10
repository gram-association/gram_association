import Image from "next/image";
import React from "react";

interface JourneyStep {
  time: string;
  title: string;
  description: string;
  image: string;
}

const journeySteps: JourneyStep[] = [
  {
    time: "Day 1",
    title: "The Journey Begins",
    description:
      "With a motorcycle packed with essentials and a heart full of determination, Shashank set off from Mumbai. The first stop was at a local school where he demonstrated simple rainwater harvesting techniques to enthusiastic students who were eager to be part of the solution.",
    image: "/Journey begins.png",
  },
  {
    time: "Week 2",
    title: "Western Ghats Exploration",
    description:
      "Traversing the lush landscapes of the Western Ghats, Shashank encountered diverse water conservation methods in coastal Kerala. He learned traditional techniques that sustained communities for generations, adapting to the monsoon patterns of the region.",
    image: "/Western ghats.png",
  },
  {
    time: "Month 3",
    title: "Desert Innovations",
    description:
      "In the arid landscapes of Rajasthan, Shashank witnessed remarkable innovations in water harvesting. The ancient step wells and modern adaptations showed how communities had turned adversity into ingenuity, thriving and preserving every precious drop of liquid.",
    image: "/Desert.png",
  },
];

const JourneyPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center py-12 px-4">
      <header className="mb-12 ml-50 text-start w-full">
        <span className="text-sm tracking-widest">Extraordinary Journey</span>
        <h1 className="mt-2 text-4xl md:text-5xl  text-gray-900">
          The Ride Story
        </h1>
      </header>

      <div className="max-w-6xl w-full flex flex-col md:flex-row gap-8">
        {/* Timeline Column */}
        <div className="relative flex flex-col items-center md:w-1/6">
          <div
            className="absolute h-full w-24 bg-gray-400"
            // style={{
            //   backgroundImage: "url(/Clip path.png)",
            //   backgroundSize: "cover",
            // }}
          >
            <Image src="/Clip path.png" alt="" fill />
          </div>
          {/* {journeySteps.map((step, index) => (
            <div
              key={index}
              className="relative z-10 flex flex-col items-center mb-24"
            >
              <div className="w-6 h-6 bg-blue-500 rounded-full border-4 border-white"></div>
              <span className="mt-2 text-sm font-semibold text-blue-600 uppercase">
                {step.time}
              </span>
            </div>
          ))} */}
        </div>

        {/* Content Column */}
        <div className="md:w-5/6">
          {journeySteps.map((step, index) => (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24"
            >
              {/* Text */}
              <div className="flex flex-col">
                <h2 className="text-2xl font-bold text-gray-900">
                  {step.title}
                </h2>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Image */}
              <div className="flex justify-center">
                <div className="relative w-full h-48 ">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 "></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <section className="bg-[#F8F1E9] mt-20 py-16 px-6 sm:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          {/* Text Section */}
          <div className="lg:w-2/3 space-y-6">
            <span className="text-sm  tracking-wider">Our Partner</span>
            <h2 className="text-4xl sm:text-5xl  text-gray-900 leading-tight">
              Fueling Our Mission
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>

          {/* Image Section */}
          <div className="lg:w-1/3">
            <div className="relative group">
              <div className="absolute  transition-opacity group-hover:opacity-0" />
              <Image
                src="/Royal Enfield.png"
                alt="Royal Enfield Logo"
                width={600}
                height={500}
                className="rounded-2xl  transition-transform group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JourneyPage;
