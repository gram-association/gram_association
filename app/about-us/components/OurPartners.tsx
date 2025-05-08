import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from "lucide-react";
import React from "react";

export default function OurPartners() {
  return (
    <section className="w-screen py-8 bg-pink-50 text-center">
      <p className="mx-auto text-center bg-[#DEE6EB] w-fit rounded-lg px-2 py-1 text-xs sm:text-sm mb-4 text-gray-700 flex items-center">
        Our Partners
      </p>
      <h2 className="text-xl sm:text-3xl md:text-4xl tracking-wide text-gray-800 mb-8 sm:mb-12">
        Meet the Partners Driving Our Mission
      </h2>
      <div className="flex flex-wrap justify-center gap-4 sm:gap-8 max-w-7xl mx-auto px-4">
        {Array(4)
          .fill("Global Education Fund")
          .map((partner, index) => (
            <div
              key={index}
              className="bg-white rounded text-center w-64 sm:w-64 md:w-72 lg:w-70"
            >
              <p className="p-4 sm:p-8 font-medium text-gray-600 text-sm sm:text-base">
                {partner}
              </p>
            </div>
          ))}
      </div>
      <div className="mt-8 flex justify-center space-x-4">
        <ArrowLeftCircleIcon className="text-gray-400 bg-transparent w-6 h-6 sm:w-8 sm:h-8" />
        <ArrowRightCircleIcon className="text-gray-400 bg-transparent w-6 h-6 sm:w-8 sm:h-8" />
      </div>
    </section>
  );
}
