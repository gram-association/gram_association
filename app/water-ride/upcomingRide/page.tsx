import Image from "next/image";
import Support from "../components/Support-form";
import MissionCards from "../components/missionCard";
import Story from "../components/storySection";
import RouteSection from "./route-section";

export default function UpcomingRide() {
  return (
    <main className="w-full min-w-screen  flex flex-col items-center">
      {/* Hero Section - The Water Odyssey */}
      <section className="bg-[#BAD1CA] w-full flex justify-center items-center p-4 pt-4 sm:pt-6 md:pt-8 mt-12 sm:mt-14 md:mt-16 lg:mt-10 animate-fade-in">
        <div className="flex flex-col max-w-7xl lg:flex-row items-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 pb-6 sm:pb-8 md:pb-10">
          {/* Image Container */}
          <div className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 order-1 lg:order-2 flex justify-center">
            <div className="relative w-full max-w-[400px] h-[300px] sm:h-[350px] md:h-[400px] lg:h-[425px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/water-odd.jpg"
                alt="Story Image"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full order-2 lg:order-2 px-2 sm:px-4 lg:px-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-gray-100 mb-3 sm:mb-4 md:mb-6 text-center lg:text-left">
              The Water Odyssey
            </h2>
            <p className="text-gray-700 dark:text-gray-200 text-sm sm:text-base md:text-[17px] leading-relaxed text-justify space-y-3 sm:space-y-4">
              <span className="block">
                GRAM is now ready to reignite that crucial journey, not just for
                Shashank, but for all of us. This time, the ride will be
                different. It will be a carefully planned expedition across the
                vital East and North East of India, regions where water
                resources are under immense pressure and where innovative
                solutions are desperately needed. This isn't just about riding;
                it's about connecting with communities, sharing knowledge, and
                enabling individuals to become guardians of their water
                heritage. It's about taking the insights gained from that first
                solo ride and building a powerful, collective movement.
              </span>

              <span className="block">
                Imagine the stories we will gather, the lives we will touch and
                the collaboration we will achieve. Imagine the ripples of
                awareness spreading from village to town, from school to home.
                This ride is more than a physical journey; it is a movement to
                protect our most precious resource. It is an opportunity to
                transform an unfinished dream into a powerful reality for water
                conservation across India.
              </span>

              <span className="block">
                Water is India's ancient epic – a story of life, struggle, and
                resilience. In 2016, a lone rider's mission was interrupted.
                Now, we reignite that journey as a 8,000 km Water Odyssey: from
                the rain-starved plateaus of Jharkhand to the melting glaciers
                of Kashmir, through the flood-ravaged Brahmaputra basin to the
                sacred Ganga plains. This is more than a ride; it's India's
                largest community-driven water movement.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Route Section */}
      <RouteSection />

      {/* Ride Plan Section */}
      <section className="bg-[#F8F1E9]  dark:bg-gray-800 w-full px-4 sm:px-6 md:px-8 lg:px-10 py-6 sm:py-8 md:py-10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-center items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          {/* Image Container */}
          <div className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 order-1 lg:order-2 flex justify-center">
            <div className="relative w-full max-w-[400px] h-[300px] sm:h-[350px] md:h-[400px] lg:h-[425px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/assets/water-ride/RoyalEnfield.png"
                alt="Royal Enfield motorcycle for the planned route"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 66vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-2/3 order-2 lg:order-1">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-gray-100 mb-3 sm:mb-4 md:mb-6 text-center lg:text-left">
              Ride Plan
            </h2>
            <p className="text-gray-700 dark:text-gray-200 text-sm sm:text-base md:text-[17px] leading-relaxed text-justify space-y-3 sm:space-y-4">
              <span className="block">
                We are gearing up for an epic bike ride that will take us across
                19 incredible states and union territories of India. Our journey
                will begin in the coastal landscapes of Odisha, then move
                through the vibrant culture of West Bengal. As we head
                northeast, we will ride through the lush tea gardens of Assam,
                the misty hills of Meghalaya, and the serene beauty of Tripura,
                Mizoram, Manipur, Nagaland, and Arunachal Pradesh, soaking in
                the raw, untouched charm of the Northeast.
              </span>

              <span className="block">
                From there, we will climb into the Himalayan embrace of Sikkim
                before heading west into the historic heartlands of Bihar and
                Uttar Pradesh. The spiritual calm of Uttarakhand and the scenic
                mountains of Himachal Pradesh will challenge and inspire us,
                leading us to the breathtaking heights of Jammu and Kashmir.
              </span>

              <span className="block">
                As we descend, we will ride through the fields of Punjab, the
                heartland of Haryana, and the bustling energy of Delhi. Our
                adventure will conclude in the royal deserts and vibrant culture
                of Rajasthan.
              </span>

              <span className="block">
                This journey will not just be a ride—it will be a celebration of
                India's diversity, testing our limits and enriching our souls
                with every mile.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* 4Pillar Mission Section */}
      <MissionCards />

      {/* Support Form Section */}
      <section className="bg-[#BAD1CA] dark:bg-gray-700 w-full">
        {/* Title */}
        <div className="text-center pt-6 sm:pt-8 md:pt-10 pb-4 sm:pb-6 px-4">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 dark:text-gray-100">
            Support the Movement
          </h1>
        </div>

        {/* Form Container */}
        <div className="flex justify-center pb-6 sm:pb-8 md:pb-10 px-4">
          <div className="w-full max-w-[600px] bg-white dark:bg-gray-950 p-4 sm:p-6 md:p-8 rounded-lg shadow-xl">
            <Support />
          </div>
        </div>
      </section>

      {/* Bottom Section: Share Your Story */}
      <Story />
    </main>
  );
}
