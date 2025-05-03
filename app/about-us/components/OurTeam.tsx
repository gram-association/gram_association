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
    <>
      <div className="  flex items-center justify-center p-8">
        <div className="max-w-6xl w-full">
          <p className="container  bg-[#DEE6EB]  w-fit rounded-full  text-sm font-bold  text-gray-700 ">
            Our Team
          </p>
          <h1 className="text-4xl md:text-5xl  text-gray-800 mb-8">
            Meet the People Behind GRAM
          </h1>

          <div className="grid grid-cols-1 gap-6">
            <div className="grid grid-cols-4 gap-4">
              {teamMembers.slice(0, 4).map((member, index) => (
                <div
                  key={index}
                  className="relative bg-gray-100 rounded-lg overflow-hidden"
                >
                  <div className="relative w-full h-48">
                    <img
                      src={member.image}
                      alt={`${member.name} photo`}
                      className="rounded-t-lg object-cover"
                    />
                  </div>
                  <div className="p-4 flex justify-between items-center">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">
                        {member.name}
                      </h3>
                      <p className="text-sm text-gray-600">{member.role}</p>
                    </div>
                    <a href="#" className="">
                      <FaLinkedin size={24} />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-4 gap-4">
              <div className=" p-6 flex items-center col-span-1">
                <div>
                  <img src="Frame.png" alt="" />
                  <p className="text-xl italic text-gray-600 mb-4">
                    "Listen to the people on the ground; they have all the
                    solutions if you have the patience to hear."
                  </p>
                  <p className="text-sm font-semibold text-gray-800">
                    — Sanjay Buti Roy
                  </p>
                </div>
              </div>

              {/* Remaining Team Members */}
              <div className="col-span-3 grid grid-cols-3 gap-4">
                {teamMembers.slice(4).map((member, index) => (
                  <div
                    key={index}
                    className="relative bg-gray-100 rounded-lg overflow-hidden"
                  >
                    <div className="relative w-full h-48">
                      <img
                        src={member.image}
                        alt={`${member.name} photo`}
                        className="rounded-t-lg object-cover"
                      />
                    </div>
                    <div className="p-4 flex justify-between items-center">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800">
                          {member.name}
                        </h3>
                        <p className="text-sm text-gray-600">{member.role}</p>
                      </div>
                      <a href="#" className="">
                        <FaLinkedin size={24} />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
