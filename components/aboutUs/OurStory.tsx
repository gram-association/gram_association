import Image from "next/image";
import React from "react";

export default function OurStory() {
  return (
    <>
      <section>
        <div className="flex justify-center space-x-8">
          <div className="w-1/2">
            <Image
              src="story-image.png"
              alt="Story Image"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          <div className="w-1/2 text-left">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              How We Started
            </h2>
            <p className="text-gray-600">
              In 2019, Shashank Singh founded Groundwater & Restoration Adaptive
              Management (GRAM) Association with the mission to rejuvenate
              traditional environmental practices and promote sustainable water
              management. GRAM aims to focus on tackling interconnected
              challenges such as women’s empowerment, environmental resilience,
              and community development. Today, GRAM embodies the vision of
              blending indigenous knowledge with modern innovation, creating
              sustainable solutions for rural communities. Through collaboration
              and education, GRAM continues to drive change and build a more
              inclusive and resilient future. This keeps our focus on the
              inspiration and journey, while “How We Started” covers the
              foundation and evolution of GRAM Association. Let’s make a
              difference together, just like you!
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
