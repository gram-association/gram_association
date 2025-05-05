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
      <div className=" flex flex-col items-center py-10 px-5">
        <div className="self-start  mb-5">
          <span className="bg-[#DEE6EB] text-gray-700 text-sm font-semibold  rounded-full">
            Advisor
          </span>
        </div>

        <h1 className="text-4xl self-start mb-10 text-gray-800">
          MEET THE SUPPORT OF GRAM
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl">
          {teamMembers.slice(0, 4).map((member, index) => (
            <div
              key={index}
              className="relative bg-gray-100 rounded-lg overflow-hidden"
            >
              <div className="relative w-full h-48">
                <Image
                  src={member.image}
                  alt={`${member.name} photo`}
                  width={300}
                  height={200}
                  className="rounded-t-lg object-cover"
                />
              </div>
              {/* Member Info */}
              <div className="px-2 absolute bottom-4 rounded bg-gray-100/50 w-56 ml-5 flex justify-between items-center">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mt-6">
          {teamMembers.slice(4).map((member, index) => (
            <div
              key={index}
              className="relative bg-gray-100 rounded-lg overflow-hidden"
            >
              <div className="relative w-full h-48">
                <Image
                  src={member.image}
                  alt={`${member.name} photo`}
                  width={300}
                  height={200}
                  className="rounded-t-lg object-cover"
                />
              </div>
              {/* Member Info */}
              <div className="px-2 absolute bottom-4 rounded bg-gray-100/50 w-56 ml-5 flex justify-between items-center">
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
          {/* Third and Fourth Columns: Quote */}
          <div className="col-span-2 flex items-center justify-center">
            <div className="mb-20">
              <Image src="/Frame.png" alt="" width={50} height={20} />
              <p className="text-xl italic text-gray-600 ">
                &ldquo;Listen to the people on the ground. <br />
                They have all the solutions if you have the patience to
                hear.&ldquo;
              </p>
              <p className="text-sm font-semibold text-gray-700">
                — Sanjay Buti Roy
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
