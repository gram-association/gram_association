import React from "react";

export default function OurValues() {
  return (
    <>
      <section className="py-16 bg-pink-50 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-12">
          What We Believe In
        </h2>
        <div className="flex justify-center space-x-8 max-w-5xl mx-auto">
          <div className="w-1/3 bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Community Empowerment
            </h3>
            <p className="text-gray-600">
              We involve local communities to lead development, creating
              sustainable change.
            </p>
          </div>
          <div className="w-1/3 bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Collaboration
            </h3>
            <p className="text-gray-600">
              We work in partnership with communities, organizations, and
              individuals to amplify our impact.
            </p>
          </div>
          <div className="w-1/3 bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Innovation
            </h3>
            <p className="text-gray-600">
              We embrace innovative approaches and solutions to address social
              challenges.
            </p>
          </div>
        </div>
        <div className="flex justify-center space-x-8 max-w-5xl mx-auto mt-8">
          <div className="w-1/3 bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Integrity
            </h3>
            <p className="text-gray-600">
              We operate with transparency, accountability, and the highest
              ethical standards in our work.
            </p>
          </div>
          <div className="w-1/3 bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Equity</h3>
            <p className="text-gray-600">
              We are committed to promoting diversity, inclusion, and fairness
              in all aspects of our work.
            </p>
          </div>
          <div className="w-1/3 bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Sustainability
            </h3>
            <p className="text-gray-600">
              We focus on creating solutions that are environmentally, socially,
              and economically sustainable.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
