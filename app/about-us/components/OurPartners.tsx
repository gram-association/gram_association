import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from "lucide-react";
import React from "react";

export default function OurPartners() {
  return (
    <>
      <section className="py-8 bg-pink-50 text-center">
        <p className="container mx-auto text-center bg-gray-100 w-fit rounded-lg px-1 text-sm mb-2 text-gray-700 flex items-center">
          Our Partners
        </p>
        <h2 className="text-4xl tracking-wide  text-gray-800 mb-12">
          Meet the Partners Driving Our Mission
        </h2>
        <div className="flex justify-center space-x-8 max-w-5xl mx-auto">
          {Array(4)
            .fill("Global Education Fund")
            .map((partner, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                {/* <Image src="/partner-logo.png" alt={partner} className="h-16 mx-auto" width={64} height={64} /> */}
                <p className="mt-4 text-gray-600">{partner}</p>
              </div>
            ))}
        </div>
        <div className="mt-8 flex justify-center space-x-4">
          <ArrowLeftCircleIcon className="text-gray-400 bg-transparent " />
          <ArrowRightCircleIcon className="text-gray-400 bg-transparent " />
        </div>
      </section>
    </>
  );
}
