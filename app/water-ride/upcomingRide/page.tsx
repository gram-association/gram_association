import Image from "next/image";
import Support from "../components/Support-form";
import { Button } from "@/components/ui/Button";
import MissionCards from "../components/missionCard";
import Story from "../components/storySection";

export default function UpcomingRide() {
  return (
    <main className="min-w-screen">
      <div className="text-center py-6 sm:py-8 md:py-12">
        <p className="container w-fit mx-auto bg-[#DEE6EB] dark:bg-gray-700 rounded-lg px-2 py-1 text-xs sm:text-sm text-gray-700 dark:text-gray-200 flex items-center mb-6">
          The Upcoming Rides
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl  text-gray-800 dark:text-gray-200 mb-1 ">
          The Water Odyssey 2026
        </h1>
        <h6 className="text-gray-700 dark:text-gray-200 mb-4 sm:mb-6 text-base">
          {" "}
          A 15-State Journey For Restoring India's Water Wisdom
        </h6>
        <p className="text-gray-600 dark:text-gray-300 max-w-full sm:max-w-2xl md:max-w-5xl mx-auto text-xs sm:text-sm leading-relaxed px-4 sm:px-0">
          <span className="font-bold text-base">
            From Jharkhand to North-East to Kashmir to Delhi – Uniting Villages,
            Rivers, and Policies in India’s Biggest Water Movement
          </span>
          <br />
          In 2016, Shashank Singh, the founder of GRAM, stood at a crossroads.
          He had just completed a transformative fellowship, a journey that
          opened his eyes to a profound truth: water, the very essence of life,
          was an essential yet dangerously neglected commodity across India.
          Inspired by the pioneering thoughts of Mr. Sanjit (Bunker) Roy on
          water conservation and fueled by his own observations, Shashank knew
          he couldn't stand by. He decided to act, not with words, but with
          action. <br />
          <br /> He embarked on a solitary mission, on a motorbike, a roaring
          symbol of his determination to awaken hearts to the quiet crisis of
          water scarcity. His motorbike became his mobile classroom, every mile
          a testament to his unwavering belief that every drop counts, every
          person's awareness can spark change. He traversed vast stretches of
          India, arduous roads, and the constant fatigue that tested his
          resolve. He met villagers, farmers, and children, sharing stories of
          resourcefulness and struggle, sowing seeds of consciousness wherever
          he went.
        </p>
      </div>
      <div className="bg-[#F8F1E9] dark:bg-gray-800 max-w-full mx-auto py-6 sm:py-8 md:py-12 flex flex-col md:flex-row justify-center items-center">
        <div className="text-center  w-full sm:w-2/3 sm:text-start p-2 pl-0 sm:pl-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-gray-800 dark:text-gray-200 mb-4 sm:mb-6">
            The Unfinished Ride
          </h2>

          <p className="text-gray-600 dark:text-gray-300 max-w-full sm:max-w-2xl md:max-w-5xl mx-auto text-xs sm:text-sm leading-relaxed px-4 sm:px-0">
            But then, an unforeseen storm hit, demonetization. Overnight, the
            gears of everyday life ground to a halt. Shashank, far from home,
            found his journey abruptly curtailed on the side of the road, a
            powerful mission brought to a premature end by circumstances beyond
            his control. The ride, though impactful, remained unfinished. The
            thirst for awareness and learning from the grassroots, like the
            critical need for sustainable water practices, lingered.
            <br />
            <br />
            Now, years later, the echoes of that unfinished journey call out.
            The challenge of water management hasn't vanished; in many ways, it
            has intensified. But Shashank's spirit, far from being broken, has
            been tempered by experience. He carries the profound lessons of that
            solitary ride, the critical need for a collective effort, for a
            network of support, and for resilience in the face of unexpected
            obstacles. <br />
            <br />
            <span className=" italic">
              "In 2016, I learned one drop can make a river. In 2026, we will
              prove a thousand drops can build oceans."–{" "}
            </span>
            <span className="font-semibold">Shashank Singh, Founder, GRAM</span>
          </p>
        </div>
        <div className="w-xs sm:w-2/5">
          <div className="w-sm sm:w-2xl h-[300px] m-6 sm:m-2 rounded-lg">
            <Image
              src="/assets/water-ride/RE2.jpg"
              alt="planned route"
              width={500}
              height={700}
              className="object-cover w-xs sm:w-[450px] h-full -ml-6  sm:ml-4 mt-0 sm:mt-6 rounded-lg"
            />
          </div>
        </div>
      </div>
      <div className="bg-[#BAD1CA] dark:bg-gray-700 w-full max-w-full  py-6 sm:py-8 md:py-12 flex flex-col md:flex-row justify-center items-center">
        <div className="m-6 sm:m-2 rounded-lg">
          <Image
            src="/assets/water-ride/UntitledDesign.png"
            alt="planned route"
            width={500}
            height={700}
            className="w-full h-full ml-0 sm:ml-4 mt-0 sm:mt-6 rounded-lg"
          />
        </div>
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-center text-gray-800 dark:text-gray-200 mb-4 sm:mb-6">
            The Water Odyssey
          </h2>

          <p className="text-gray-600 dark:text-gray-300  max-w-full sm:max-w-2xl md:max-w-5xl mx-auto text-xs sm:text-sm leading-relaxed px-4 sm:px-10">
            GRAM is now ready to reignite that crucial journey, not just for
            Shashank, but for all of us. This time, the ride will be different.
            It will be a carefully planned expedition across the vital East and
            North East of India, regions where water resources are under immense
            pressure and where innovative solutions are desperately needed. This
            isn't just about riding; it's about connecting with communities,
            sharing knowledge, and enabling individuals to become guardians of
            their water heritage. It's about taking the insights gained from
            that first solo ride and building a powerful, collective movement.
            <br />
            <br />
            Imagine the stories we will gather, the lives we will touch and the
            collaboration we will achieve. Imagine the ripples of awareness
            spreading from village to town, from school to home. This ride is
            more than a physical journey; it is a movement to protect our most
            precious resource. It is an opportunity to transform an unfinished
            dream into a powerful reality for water conservation across India.
            <br />
            <br />
            Water is India’s ancient epic – a story of life, struggle, and
            resilience. In 2016, a lone rider’s mission was interrupted. Now, we
            reignite that journey as a 8,000 km Water Odyssey: from the
            rain-starved plateaus of Jharkhand to the melting glaciers of
            Kashmir, through the flood-ravaged Brahmaputra basin to the sacred
            Ganga plains. This is more than a ride; it’s India’s largest
            community-driven water movement.
          </p>
        </div>
      </div>

      <section className="text-left py-8 sm:py-12 md:py-12 px-4 sm:px-8 md:px-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-full mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 sm:p-8 transition-all duration-300 hover:shadow-xl">
          <h3 className="text-3xl sm:text-4xl md:text-5xl  text-gray-800 dark:text-gray-100 mb-2">
            The Route
          </h3>
          <h4 className="text-lg sm:text-xl md:text-2xl font-medium text-gray-600 dark:text-gray-300 mb-6">
            Tracing India’s Water Wisdom
          </h4>
          <p className="text-base sm:text-lg text-gray-700 dark:text-gray-200 font-medium leading-relaxed">
            {[
              "Jharkhand",
              "West Bengal",
              "Meghalaya",
              "Tripura",
              "Mizoram",
              "Manipur",
              "Nagaland",
              "Arunachal Pradesh",
              "Assam",
              "Sikkim",
              "Bihar",
              "Uttar Pradesh",
              "Uttarakhand",
              "Himachal Pradesh",
              "Jammu & Kashmir",
              "Punjab",
              "Haryana",
              "Delhi",
            ].map((state, index) => (
              <span key={state} className="inline-flex items-center">
                <span className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200">
                  {state}
                </span>
                {index < 17 && (
                  <span className="mx-2 text-blue-500 dark:text-blue-400 font-bold">
                    →
                  </span>
                )}
              </span>
            ))}
          </p>
        </div>
      </section>
      <section className="bg-[#F8F1E9] dark:bg-gray-800 max-w-full mx-auto px-4 sm:px-6 md:px-10 py-10 flex flex-col md:flex-row justify-center items-center">
        <div className="w-full md:w-[740px] h-auto md:h-[286px] mb-6 md:mb-0">
          <h2 className="text-2xl sm:text-3xl mb-2 text-center md:text-left">
            Planned Route
          </h2>
          <p className="text-gray-700 dark:text-gray-200 text-xs sm:text-sm md:text-xs leading-relaxed">
            We are gearing up for an epic bike ride that will take us across 19
            incredible states and union territories of India. Our journey will
            begin in the coastal landscapes of Odisha, then move through the
            vibrant culture of West Bengal. As we head northeast, we will ride
            through the lush tea gardens of Assam, the misty hills of Meghalaya,
            and the serene beauty of Tripura, Mizoram, Manipur, Nagaland, and
            Arunachal Pradesh, soaking in the raw, untouched charm of the
            Northeast.
            <br />
            <br />
            From there, we will climb into the Himalayan embrace of Sikkim
            before heading west into the historic heartlands of Bihar and Uttar
            Pradesh. The spiritual calm of Uttarakhand and the scenic mountains
            of Himachal Pradesh will challenge and inspire us, leading us to the
            breathtaking heights of Jammu and Kashmir.
            <br />
            <br />
            As we descend, we will ride through the fields of Punjab, the
            heartland of Haryana, and the bustling energy of Delhi. Our
            adventure will conclude in the royal deserts and vibrant culture of
            Rajasthan.
            <br />
            <br />
            This journey will not just be a ride—it will be a celebration of
            India’s diversity, testing our limits and enriching our souls with
            every mile.
          </p>
        </div>
        <div className="w-full md:w-1/3 h-auto md:h-[286px] flex justify-center items-center rounded-lg">
          <Image
            src="/assets/water-ride/RoyalEnfield.png"
            alt="planned route"
            width={500}
            height={750}
            className="object-cover w-full h-full ml-0 sm:ml-4 mt-0 sm:mt-6 rounded-lg"
          />
        </div>
      </section>
      <MissionCards />

      <div className="max-w-full">
        <div className="relative bg-[#BAD1CA] dark:bg-gray-700 w-full max-w-full h-auto min-h-[420px] flex flex-col  gap-6 py-6 md:flex-row md:justify-center md:h-[420px]">
          {/* Goal of the Ride */}
          <div className="w-[90%] sm:w-[550px] h-50 min-h-[150px] sm:h-[187px] bg-white dark:bg-gray-900 px-4 sm:px-8 pt-2 mt-4 mx-auto sm:mx-0 rounded-lg shadow-md order-1">
            <h2 className="text-base sm:text-lg  mb-2">Goal of the Ride</h2>
            <p className="text-gray-600 dark:text-gray-200 text-xs sm:text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>

          {/* The Cause/Ideas */}
          <div className="w-[90%] sm:w-[550px] h-50 min-h-[150px] sm:h-[187px] bg-white dark:bg-gray-900 px-4 sm:px-8 pt-2 mt-4 mx-auto sm:mx-0 rounded-lg shadow-md order-2">
            <h2 className="text-base sm:text-lg  mb-2">The Cause/Ideas</h2>
            <p className="text-gray-600 dark:text-gray-200 text-xs sm:text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>

          <h1 className="text-2xl sm:text-4xl  text-center mb-4  sm:mb-6 order-3 md:absolute md:bottom-24">
            Support the Movement
          </h1>

          {/* Form for larger screens */}
          <div className="hidden md:block absolute top-80 w-[90%] max-w-[600px] bg-white dark:bg-gray-950 p-8 rounded-lg shadow-xl order-4">
            <Support />
          </div>
        </div>
      </div>
      <div className="max-w-full h-auto min-h-[300px] bg-[#F8F1E9] dark:bg-gray-900 order-5 flex justify-center items-start">
        {/* Form for mobile view */}
        <div className="md:hidden w-[90%] max-w-[600px] bg-white dark:bg-gray-950 p-8 rounded-lg shadow-xl mt-6">
          <Support />
        </div>
      </div>

      {/* Bottom Section: Share Your Story */}
      <Story />
      {/* <div className="w-full max-w-full h-[391px] bg-[#BAD1CA] dark:bg-gray-700">
        <div className="p-4 mx-auto text-center">
          <h1 className="text-5xl md:text-5xl mb-4 md:mt-36 mt-20">
            Share your Water Story
          </h1>
          <div className="relative w-[600px] md:w-[600px] max-w-[90%] mx-auto">
            <textarea
              placeholder="Start writing from here..."
              className="w-full p-4 bg-white dark:bg-gray-600 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5A8B6E] h-15 resize-none pr-24"
            ></textarea>
            <button
              type="submit"
              className="absolute right-0 bottom-3  px-4 py-1 bg- text-[#5A8B6E] text-3xl rounded-md hover:text-[#4A7A5E] focus:outline-none focus:ring-2 focus:ring-[#5A8B6E] transition-colors "
            >
              ➤
            </button>
          </div>
        </div>
      </div> */}
    </main>
  );
}
