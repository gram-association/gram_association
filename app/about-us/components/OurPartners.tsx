import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from "lucide-react";
import React from "react";

export default function OurPartners() {
  return (
    <section className="w-full py-8 sm:py-12 md:py-16 bg-pink-50 text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="inline-block bg-[#DEE6EB] rounded-lg px-3 py-1 text-xs sm:text-sm font-medium text-gray-700 mb-4 sm:mb-6">
          Our Partners
        </p>
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl  text-gray-800 mb-8 sm:mb-10 md:mb-12 tracking-wide">
          Meet the Partners Driving Our Mission
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {Array(4)
            .fill("Global Education Fund")
            .map((partner, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8 text-center"
              >
                <p className="text-sm sm:text-base md:text-lg font-medium text-gray-600">
                  {partner}
                </p>
              </div>
            ))}
        </div>
        <div className="mt-8 flex justify-center space-x-4">
          <ArrowLeftCircleIcon className="text-gray-400 w-6 h-6 sm:w-8 sm:h-8" />
          <ArrowRightCircleIcon className="text-gray-400 w-6 h-6 sm:w-8 sm:h-8" />
        </div>
      </div>
    </section>
  );
}
