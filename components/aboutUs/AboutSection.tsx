import React from "react";
import Header from "../Header";

const AboutSection = () => {
  return (
    <>
      <section className="py-4 bg-gradient-to-b from-teal-50 to-white text-center">
        <div className="flex justify-center">
          <Header />
        </div>
        <div className="py-10">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">Our Story</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Inspired by his transformative journey as an SBI Youth India Fellow
            at Banford College, Shashank Singh worked on grassroots initiatives
            focused on water conservation, pond renatured his belief in the
            power of indigenous wisdom and collective action to create a
            harvesting future. To further the movement, he launched the
            Harvesting the Heavens campaign—a motorcycle journey across 13
            states—to learn, share, and promote traditional water conservation
            practices, hoping his vision for long-term impact.
          </p>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
