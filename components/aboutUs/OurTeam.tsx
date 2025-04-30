import React from "react";

export default function OurTeam() {
  return (
    <>
      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-12">
          Meet the People Behind GRAM
        </h2>
        <div className="grid grid-cols-4 gap-8 max-w-5xl mx-auto">
          {[
            { name: "Shashank Singh", role: "Founder", img: "/team1.jpg" },
            { name: "Devesh Singh", role: "Partner", img: "/team2.jpg" },
            { name: "Adv. Ankita", role: "Partner", img: "/team3.jpg" },
            { name: "Pooja Sharma", role: "Partner", img: "/team4.jpg" },
            { name: "Sanjay Bunker Roy", role: "Advisor", img: "/team5.jpg" },
            { name: "Devesh Singh", role: "Partner", img: "/team6.jpg" },
            { name: "Adv. Ankita", role: "Partner", img: "/team7.jpg" },
            { name: "Devesh Singh", role: "Partner", img: "/team8.jpg" },
          ].map((member, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md">
              {/* <Image
                src={member.img}
                alt={member.name}
                className="w-full h-40 object-cover rounded-lg mb-4"
                width={160}
                height={160}
              /> */}
              <h3 className="text-lg font-semibold text-gray-800">
                {member.name}
              </h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 flex justify-center space-x-4">
          <button className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
            ←
          </button>
          <button className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
            →
          </button>
        </div>
        <blockquote className="mt-8 text-gray-600 italic max-w-2xl mx-auto">
          “Listen to the people on the ground. They have all the solutions you
          have the patience to hear.” — Sanjay Bunker Roy
        </blockquote>
      </section>
    </>
  );
}
