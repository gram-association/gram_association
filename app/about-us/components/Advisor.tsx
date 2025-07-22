import { Linkedin } from "lucide-react";
import Image from "next/image";
import React from "react";
import { FaLinkedin } from "react-icons/fa";

const teamMembers = [
  {
    name: "Bunker Roy",
    role: "Founder- Barefoot College",
    image: "/assets/about-us/advisor/BunkerRoy-Founder-BarefootCollege.jpg",
  },
  {
    name: "Dr. Sudheer Krishna",
    role: "Co_Founder- MACS",
    image: "/assets/about-us/advisor/Dr.SudheerKrishnaCo_Founder-MACS.jpg",
  },
  {
    name: "Mrs Tripat Parmar",
    role: "Founder- DEEKSHA NGO",
    image: "/assets/about-us/advisor/MrsTripatParmar-Founder-DEEKSHANGO.jpg",
  },
  {
    name: "Sri Ravindra Nath",
    role: "Founder- Rural Volunteer Centre (RVC)",
    image:
      "/assets/about-us/advisor/SriRavindraNath-Founder-RuralVolunteerCentre(RVC).jpg",
  },
];

export default function Advisor() {
  return (
    <div className="flex items-center justify-center p-4 sm:p-8">
      <div className="max-w-6xl w-full">
        <p className="inline-block bg-[#DEE6EB] dark:bg-gray-700 w-fit rounded-full text-md sm:text-sm  text-gray-700 dark:text-gray-200 px-3 py-1 mb-4">
          Advisor
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100 dark:border-gray-700"
            >
              {/* Image Container */}
              <div className="relative w-full h-64 sm:h-72 overflow-hidden">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={`${member.name} photo`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* LinkedIn Button */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <a
                    // href={member.linkedin}
                    className="inline-flex items-center justify-center w-10 h-10 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-blue-600 hover:text-white transition-all duration-200"
                    aria-label={`${member.name}'s LinkedIn profile`}
                  >
                    <Linkedin size={18} />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                  {member.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {member.role}
                </p>

                {/* Decorative Line */}
                {/* <div className="mt-4 w-12 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" /> */}
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-200 dark:group-hover:border-blue-700 transition-colors duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
