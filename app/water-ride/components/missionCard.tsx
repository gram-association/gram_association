import Image from "next/image";
import React from "react";

const MissionCards: React.FC = () => {
  const missions = [
    {
      pillar: "Document Wisdom",
      action: "Archive indigenous techniques",
      impact: "Create India's Water Heritage Atlas",
      img: "/Group 8.png",
    },
    {
      pillar: "Build water warriors",
      action:
        "Train locals as Water Champions with IoT-Testing Kits (if app gets developed)",
      impact: "Water-secure villages by 2030",
      img: "/Volunteer.png",
    },
    {
      pillar: "Policy Bridges",
      action: "Collect citizen voices for state water schemed",
      impact: "Shape state water action plans",
      img: "/donate.png",
    },
    {
      pillar: "State Interventions (Post-Ride)",
      action: "Partner with local NGOs to implement 1 flagship project/state",
      impact: "10 million liter annual recharge",
      img: "/partners.png",
    },
  ];

  return (
    <div className="container mx-auto p-4 my-6">
      <h1 className="text-4xl text-center mb-6">Our 4-Pillar Mission</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4">
        {missions.map((mission, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-700 shadow-md rounded-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-xl"
          >
            <Image
              src={mission.img || "/palcehoder.svg"}
              alt=""
              width={50}
              height={50}
              className="w-12 h-12 mx-auto mb-4"
            />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-200 text-center mb-4">
              {mission.pillar}
            </h2>
            <p className="text-gray-700 dark:text-gray-200 mb-4">
              <span className="text-[#5b818d] font-semibold flex justify-center text-[18px] -mb-4">
                Action
              </span>
              <br />
              {mission.action}
            </p>
            <hr />
            <p className="text-gray-700 dark:text-gray-200 mt-2 ">
              <span className="text-[#5b818d] font-semibold flex justify-center text-[18px] -mb-4">
                Impact Target
              </span>
              <br />
              {mission.impact}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MissionCards;
