"Use Client";
import { Dispatch, SetStateAction } from "react";

interface FilterButtonsProps {
  activeFilter: string;
  setActiveFilter: Dispatch<SetStateAction<string>>;
}

export default function Tabs({
  activeFilter,
  setActiveFilter,
}: FilterButtonsProps) {
  const filters = [
    "All Programs",
    "Water Conservation",
    "Livelihood",
    "Education",
    "Health",
    "Community Engagement",
    "Environment",
  ];

  return (
    <div className="flex justify-center space-x-2 sm:space-x-4 mb-8 flex-wrap gap-2">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => setActiveFilter(filter)}
          className={`px-4 py-2 sm:px-6 sm:py-2 text-sm sm:text-base rounded-full transition whitespace-nowrap ${
            activeFilter === filter
              ? "bg-[#1D352E] text-white"
              : "bg-gray-200 text-gray-700 hover:bg-[#1D352E] hover:text-white"
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}
