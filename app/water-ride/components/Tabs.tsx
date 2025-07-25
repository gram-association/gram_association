"use client";
import { JSX, useState } from "react";
import JourneyHighlights from "../journeyHighlights/page";
import TheRideStory from "../theRideStory/page";
import UpcomingRide from "../upcomingRide/page";

// Define the possible tab names as a union type
type TabName = "Journey Highlights" | "The Ride Story" | "Upcoming Ride";

export default function Tabs() {
  // Use TabName type for activeTab state
  const [activeTab, setActiveTab] = useState<TabName>("Journey Highlights");

  // Define tabContent with an explicit type
  const tabContent: Record<TabName, JSX.Element> = {
    "Journey Highlights": <JourneyHighlights />,
    "The Ride Story": <TheRideStory />,
    "Upcoming Ride": <UpcomingRide />,
  };

  return (
    <div className="flex justify-center items-center mt-24 sm:mt-48 px-4">
      <div className="flex justify-center">
        <div className="w-full max-w-screen">
          {/* Tab Buttons */}
          <div className="flex w-full space-x-1 sm:space-x-4 justify-center">
            <button
              className={`rounded-full text-sm md:text-lg  py-2 px-2 md:px-6 ${
                activeTab === "Journey Highlights"
                  ? "bg-[#1D352E] dark:bg-[#1a2723] text-white hover:bg-green-950"
                  : "bg-gray-200 text-gray-700"
              }`}
              onClick={() => setActiveTab("Journey Highlights")}
            >
              Journey Highlights
            </button>
            <button
              className={`rounded-full text-sm md:text-lg py-2 px-2 md:px-6 ${
                activeTab === "The Ride Story"
                  ? "bg-[#1D352E] text-white hover:bg-green-950"
                  : "bg-gray-200 text-gray-700"
              }`}
              onClick={() => setActiveTab("The Ride Story")}
            >
              The Ride Story
            </button>
            <button
              className={`rounded-full text-sm md:text-lg py-2 px-2 md:px-6 ${
                activeTab === "Upcoming Ride"
                  ? "bg-[#1D352E] text-white hover:bg-green-950"
                  : "bg-gray-200 text-gray-700"
              }`}
              onClick={() => setActiveTab("Upcoming Ride")}
            >
              Upcoming Ride
            </button>
          </div>

          {/* Tab Content */}
          <div className="w-full">{tabContent[activeTab]}</div>
        </div>
      </div>
    </div>
  );
}
