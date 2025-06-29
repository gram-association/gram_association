import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";

const teamMembers = [
  {
    name: "Sheshank Singh",
    role: "Founder",
    image: "/founder.png",
  },
  { name: "Devesh Singh", role: "Partner", image: "/partner1.png" },
  { name: "Ady. Ankita", role: "Partner", image: "/partner2.png" },
  { name: "Pooja Sharma", role: "Partner", image: "/partner2.png" },
  { name: "Devesh Singh", role: "Partner", image: "/partner3.png" },
  { name: "Ady. Ankita", role: "Partner", image: "/partner4.png" },
];

export default function Advisor() {
  return (
    <>
      <div className="flex flex-col items-center py-8 px-4 sm:px-5 md:py-10">
        <div className="self-start mb-4 sm:mb-5">
          <span className="bg-[#DEE6EB] dark:bg-gray-700 text-gray-700 dark:text-gray-200 text-xs sm:text-sm font-semibold rounded-full px-3 py-1">
            Advisor
          </span>
        </div>

        <h1 className="text-2xl sm:text-3xl md:text-4xl self-start mb-6 sm:mb-10 text-gray-800 dark:text-gray-200">
          MEET THE SUPPORT OF GRAM
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-6xl w-full mx-auto sm:mx-0  ">
          {teamMembers.slice(0, 4).map((member, index) => (
            <div
              key={index}
              className="relative bg-gray-100 rounded-lg overflow-hidden  aspect-square sm:aspect-auto"
            >
              <div className="relative w-full h-full sm:h-48">
                <Image
                  src={member.image}
                  alt={`${member.name} photo`}
                  width={300}
                  height={300}
                  className="rounded-t-lg object-cover w-full h-full sm:h-48"
                />
              </div>
              <div className="px-2 absolute bottom-4 rounded bg-gray-100/50 w-[90%] sm:w-56 ml-2 sm:ml-5 flex justify-between items-center">
                <div>
                  <h3 className="text-base sm:text-lg  text-gray-800">
                    {member.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600">
                    {member.role}
                  </p>
                </div>
                <a href="#" aria-label={`LinkedIn profile of ${member.name}`}>
                  <FaLinkedin size={20} className="sm:size-6" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-6xl w-full mt-4 sm:mt-6 mx-auto sm:mx-0">
          {teamMembers.slice(4).map((member, index) => (
            <div
              key={index}
              className="relative bg-gray-100 rounded-lg overflow-hidden  aspect-square sm:aspect-auto"
            >
              <div className="relative w-full h-full sm:h-48">
                <Image
                  src={member.image}
                  alt={`${member.name} photo`}
                  width={300}
                  height={300}
                  className="rounded-t-lg object-cover w-full h-full sm:h-52"
                />
              </div>
              <div className="px-2 mb-6 absolute bottom-4 rounded bg-gray-100/50 w-[90%] sm:w-56 ml-2 sm:ml-5 flex justify-between items-center">
                <div>
                  <h3 className="text-base sm:text-lg  text-gray-800">
                    {member.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600">
                    {member.role}
                  </p>
                </div>
                <a href="#" aria-label={`LinkedIn profile of ${member.name}`}>
                  <FaLinkedin size={20} className="sm:size-6" />
                </a>
              </div>
            </div>
          ))}
          <div className="col-span-1 sm:col-span-2 md:col-span-2 flex items-center justify-center">
            <div className="mb-10 sm:mb-20 text-center sm:text-left">
              <Image
                src="/Frame.png"
                alt="Quote icon"
                width={40}
                height={16}
                className="mx-auto sm:mx-0 mb-2"
              />
              <p className="text-lg sm:text-xl italic text-gray-600 dark:text-gray-300">
                “Listen to the people on the ground. <br />
                They have all the solutions if you have the patience to hear.“
              </p>
              <p className="text-xs sm:text-sm  text-gray-700 dark:text-gray-200 mt-2">
                — Sanjay Buti Roy
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
