import Image from "next/image";
import React from "react";
import { FaLinkedin } from "react-icons/fa";

const teamMembers = [
  { name: "Shashank Singh", role: "Founder", image: "/founder.png" },
  { name: "Devesh Singh", role: "Partner", image: "/partner1.png" },
  { name: "Adv. Ankita", role: "Partner", image: "/partner2.png" },
  { name: "Pooja Sharma", role: "Partner", image: "/partner2.png" },
  { name: "Devesh Singh", role: "Partner", image: "/partner3.png" },
  { name: "Adv. Ankita", role: "Partner", image: "/partner4.png" },
  { name: "Devesh Singh", role: "Partner", image: "/partner1.png" },
];

export default function OurTeam() {
  return (
    <div className="flex items-center justify-center p-4 sm:p-8">
      <div className="max-w-6xl w-full">
        <p className="inline-block bg-[#DEE6EB] w-fit rounded-full text-md sm:text-sm font-bold text-gray-700 px-3 py-1 mb-4">
          Our Team
        </p>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-800 mb-6 sm:mb-8">
          Meet the People Behind GRAM
        </h1>

        <div className="space-y-6">
          {/* First Row: Team Members */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {teamMembers.slice(0, 4).map((member, index) => (
              <div
                key={index}
                className="relative bg-gray-100 rounded-lg overflow-hidden"
              >
                <div className="relative w-full h-52 sm:h-52">
                  <Image
                    src={member.image}
                    alt={`${member.name} photo`}
                    width={500}
                    height={300}
                    className="rounded-t-lg object-cover"
                  />
                </div>
                <div className="absolute bottom-4 left-4 right-4 rounded bg-gray-100/50 flex justify-between items-center px-3 ">
                  <div>
                    <h3 className="text-sm sm:text-lg font-semibold text-gray-800">
                      {member.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600">
                      {member.role}
                    </p>
                  </div>
                  <a href="#" aria-label="LinkedIn profile">
                    <FaLinkedin size={20} className="sm:size-7" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Second Row: Quote + Remaining Team Members */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="flex items-center col-span-1">
              <div>
                <Image
                  src="/Frame.png"
                  alt="Frame decoration"
                  width={40}
                  height={16}
                  className="mb-2 sm:mb-4"
                />
                <p className="text-xl sm:text-sm italic text-gray-600 mb-2 sm:mb-4">
                  “Listen to the people on the ground; they have all the
                  solutions if you have the patience to hear.“
                </p>
                <p className="text-md sm:text-sm font-semibold text-gray-800">
                  — Sanjay Buti Roy
                </p>
              </div>
            </div>

            {/* Remaining Team Members */}
            <div className="col-span-1 md:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {teamMembers.slice(4).map((member, index) => (
                <div
                  key={index}
                  className="relative bg-gray-100 rounded-lg overflow-hidden"
                >
                  <div className="relative w-full h-52 sm:h-46">
                    <Image
                      src={member.image}
                      alt={`${member.name} photo`}
                      width={500}
                      height={200}
                      className="rounded-t-lg object-cover"
                    />
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 rounded bg-gray-100/50 flex justify-between items-center px-3 ">
                    <div>
                      <h3 className="text-sm sm:text-lg font-semibold text-gray-800">
                        {member.name}
                      </h3>
                      <p className="text-xs sm:text-xs text-gray-600">
                        {member.role}
                      </p>
                    </div>
                    <a href="#" aria-label="LinkedIn profile">
                      <FaLinkedin size={20} className="sm:size-7" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
