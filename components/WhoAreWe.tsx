import React from "react";

export default function WhoAreWe() {
  return (
    <>
      <section className="py-16 bg-gray-100 text-cente mt-56">
        <h2 className="text-3xl font-bold mb-6">WHO WE ARE?</h2>
        <p className="max-w-3xl mx-auto mb-8">
          Welcome to GRAM Association, where we invest in the sustainable
          future. Rooted in core values, we empower marginalized communities,
          promote sustainable practices, and foster traditional values.
        </p>
        <div className="flex justify-center space-x-8">
          <div>
            <p className="text-4xl font-bold text-teal-600">10K+</p>
            <p>Lives Transformed</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-teal-600">10+</p>
            <p>Villages Impacted</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-teal-600">50+</p>
            <p>Women Trained</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-teal-600">3</p>
            <p>Water Bodies</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-teal-600">8</p>
            <p>SDG Goals</p>
          </div>
        </div>
        <button className="mt-8 bg-teal-600 text-white px-6 py-2 rounded hover:bg-teal-700">
          LEARN MORE
        </button>
      </section>
    </>
  );
}
