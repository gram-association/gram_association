import Image from "next/image";
import React from "react";
import { Linkedin } from "lucide-react";

const teamMembers = [
  {
    name: "Shashank Singh",
    role: "Founder- Director",
    image: "/assets/about-us/team/ShashankSingh-Founder-Director.jpeg",
  },
  {
    name: "Arunima Sarkar",
    role: "Chief Executive Officer -Implementation, Strategy & Advocacy",
    image: "/assets/about-us/team/Arunima.jpeg",
  },
  {
    name: "Vikas Shukla",
    role: "Senior Consultant Organisational Development",
    image:
      "/assets/about-us/team/VikasShukla-SeniorConsultant-OrganisationalDevelopment.jpeg",
  },
  {
    name: "Devesh Singh",
    role: "Associate - Administration & Operations",
    image: "/assets/about-us/team/DeveshSingh-Associate.jpeg",
  },
  {
    name: "Ajay Kumar Sahu",
    role: "Finance & Compliance Specialist (ACMA)",
    image: "/assets/about-us/team/AjayKumar-ACMA,LegalAdvisor.jpeg",
  },
  {
    name: "Ankita",
    role: "Legal Advisor - Legal Compliance",
    image: "/assets/about-us/team/Ankita-LegalAdvisor.jpeg",
  },
  {
    name: "Yuvraj Seth",
    role: "Project Coordinator - Community Tourism & Sustainable Livelihoods",
    image: "/assets/about-us/team/YuvrajSeth-ProjectCoordinator.jpeg",
  },
  {
    name: "Paritosh Chavan",
    role: "Communications & Social Media Specialist",
    image: "/assets/about-us/team/paritosh-techAdvisor.jpeg",
  },
  {
    name: "Anmol Dhaliwal",
    role: "Policy Research Associate",
    image:
      "/assets/about-us/team/AnmolDhaliwal-ResearchConsultant(Policy).jpeg",
  },
  {
    name: "Arsh Saluja",
    role: "Architect - Sustainable Design & Planning",
    image:
      "/assets/about-us/team/Arsh Saluja - Architect - Sustainable Design & Planning .jpeg",
  },
  {
    name: "Pratyasha Singh",
    role: "Senior Technical Consultant – Geoenvironmental Engineering & Environmental Impact ",
    image:
      "/assets/about-us/team/PratyashaSingh-ResearchConsultant(GeoenvironmentalEngineer).jpeg",
  },

  {
    name: "Karthik Shakthiwal",
    role: "Technical Consultant - Environmental & Water Management",
    image: "/assets/about-us/team/KarthickSakthivel-Consultant.jpeg",
  },
  {
    name: "Rudraksh Singh Deo",
    role: "Program Associate - Field & Community Support",
    image: "/assets/about-us/team/RudrakshSinghDeo-Associate.jpeg",
  },
  {
    name: "Roshan Kumar",
    role: "Program Associate - Field & Community Support",
    image: "/assets/about-us/team/RoshanKumar-Associate.jpeg",
  },
  {
    name: "Rao Samrat",
    role: "Consultant - Program Design",
    image: "/assets/about-us/team/RaoSamrat-Volunteer.jpeg",
  },

  {
    name: "Archit",
    role: "Volunteer",
    image: "/assets/about-us/team/Archit-Volunteer.jpg",
  },
];

export default function OurTeam() {
  return (
    <div className="flex items-center justify-center p-4 sm:p-8">
      <div className=" w-full">
        <p className="inline-block bg-[#DEE6EB] dark:bg-gray-700 w-fit rounded-full text-sm sm:text-base  text-gray-700 dark:text-gray-200 px-3 py-1 mb-4">
          Our Team
        </p>
        {/* <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-800 dark:text-gray-200 mb-6 sm:mb-8">
          Meet the People Behind GRAM
        </h1> */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative bg-transparent  rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100 dark:border-gray-700"
            >
              {/* Image Container */}
              <div className="relative h-[250px] overflow-hidden">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={`${member.name} - ${member.role}`}
                  fill
                  className="object-fit transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 blur-lg bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* LinkedIn Button - Appears on Hover */}
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
              <div className="px-6 py-2 bg-transparent backdrop:backdrop-blur-sm">
                <h3 className="text-xl font-bold text-gray-900  mb-2 group-hover:text-blue-600  transition-colors duration-200">
                  {member.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 font-medium">
                  {member.role}
                </p>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-200 dark:group-hover:border-blue-800 transition-colors duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
