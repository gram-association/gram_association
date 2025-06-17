import Image from "next/image";
import Support from "../components/Support-form";

export default function UpcomingRide() {
  return (
    <main className="min-w-screen">
      <div className="text-center py-6 sm:py-8 md:py-12">
        <p className="container w-fit mx-auto bg-[#DEE6EB] rounded-lg px-2 py-1 text-xs sm:text-sm text-gray-700 flex items-center mb-4">
          The Upcoming Rides
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-800 mb-4 sm:mb-6">
          Water Odyssey
        </h1>
        <p className="text-gray-600 max-w-full sm:max-w-2xl md:max-w-5xl mx-auto text-xs sm:text-sm leading-relaxed px-4 sm:px-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <section className="bg-[#F8F1E9] max-w-full mx-auto px-4 sm:px-6 md:px-10 py-10 flex flex-col md:flex-row justify-center items-center">
        <div className="w-full md:w-[740px] h-auto md:h-[286px] mb-6 md:mb-0">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-center md:text-left">
            Planned Route
          </h2>
          <p className="text-gray-700 text-xs sm:text-sm md:text-xs leading-relaxed">
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
        <div className="w-full md:w-1/3 h-auto md:h-[286px]">
          <Image
            src="/Journey begins.png"
            alt="planned route"
            width={500}
            height={600}
            className="w-full h-auto object-cover"
          />
        </div>
      </section>
      <div className="max-w-full">
        <div className="relative bg-[#BAD1CA] w-full max-w-full h-auto min-h-[420px] flex flex-col   gap-6 py-6 md:flex-row md:justify-center md:h-[420px]">
          {/* Goal of the Ride */}
          <div className="w-[90%] sm:w-[550px] h-auto min-h-[150px] sm:h-[187px] bg-white px-4 sm:px-8 pt-2 mt-4 rounded-lg shadow-md order-1">
            <h2 className="text-base sm:text-lg font-semibold mb-2">
              Goal of the Ride
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm">
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
          <div className="w-[90%] sm:w-[550px] h-auto min-h-[150px] sm:h-[187px] bg-white px-4 sm:px-8 pt-2 mt-4 rounded-lg shadow-md order-2">
            <h2 className="text-base sm:text-lg font-semibold mb-2">
              The Cause/Ideas
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm">
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

          <h1 className="text-2xl sm:text-4xl font-light text-center mb-4  sm:mb-6 order-3 md:absolute md:bottom-24">
            Support the Movement
          </h1>

          {/* Form for larger screens */}
          <div className="hidden md:block absolute top-80 w-[90%] max-w-[600px] bg-white p-8 rounded-lg shadow-xl order-4">
            <Support />
          </div>
        </div>
      </div>
      <div className="max-w-full h-auto min-h-[300px] bg-[#F8F1E9] order-5 flex justify-center items-start">
        {/* Form for mobile view */}
        <div className="md:hidden w-[90%] max-w-[600px] bg-white p-8 rounded-lg shadow-xl mt-6">
          <Support />
        </div>
      </div>

      {/* Bottom Section: Share Your Story */}
      <div className="w-full max-w-full h-[391px] bg-[#BAD1CA]">
        <div className="p-4 mx-auto text-center">
          <h1 className="text-5xl md:text-5xl  font-light mb-4  md:mt-36 mt-20">
            Share your Water Story
          </h1>
          <textarea
            placeholder="Start writing from here..."
            className="w-[600px] md:w-[600px]  max-w-[90%] p-4 mx-auto bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5A8B6E] h-20 resize-none"
          ></textarea>
        </div>
      </div>
    </main>
  );
}
