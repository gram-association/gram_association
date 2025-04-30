import React from "react";

export default function OurPartners() {
  return (
    <>
      <section className="py-16 bg-pink-50 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-12">
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
          <button className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
            ←
          </button>
          <button className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
            →
          </button>
        </div>
      </section>
    </>
  );
}
