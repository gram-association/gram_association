"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const states = [
  {
    name: "Rajasthan",
    position: {
      top: "20%",
      right: "50%",
      mobileTop: "18%",
      mobileRight: "48%",
    },
    geographical: [
      "Semi-arid to arid state; low rainfall (400–600 mm annually)",
      "Frequent droughts; erratic monsoon patterns",
    ],
    waterissues: [
      "High fluoride and iron contamination in many districts",
      "Drying and neglect of traditional water structures",
    ],
    wisdom: [
      "Stepwells (Baoris, Vavs): Deep, multi-storied wells for drinking and rituals",
      "Tankas: Rooftop rainwater harvesting tanks",
      "Nadis & Talabs: Village ponds for livestock and recharge",
      "Pat System: Shared water channels in tribal farming",
    ],
  },
  {
    name: "Gujarat",
    position: {
      top: "40%",
      right: "55%",
      mobileTop: "38%",
      mobileRight: "53%",
    },
    geographical: [
      "Seasonal rivers and streams",
      "Coastal areas affected by salinity intrusion",
    ],
    waterissues: [
      "Salinity in coastal aquifers; fluoride contamination",
      "Inequitable water access across regions",
    ],
    wisdom: [
      "Stepwells (Baoris, Vavs): E.g., Rani ki Vav — intricate rainwater harvesting structures",
      "Talavs & Khet Talavs: Village and field ponds for irrigation and livestock",
      "Virdas: Shallow wells near riverbeds for clean water access",
      "Bawdis & Shared Wells: Deep, stepped wells with communal use (patis)",
    ],
  },
  {
    name: "Madhya Pradesh",
    position: {
      top: "35%",
      right: "37%",
      mobileTop: "33%",
      mobileRight: "35%",
    },
    geographical: [
      "Seasonal rivers and streams",
      "Coastal areas affected by salinity intrusion",
    ],
    waterissues: [
      "High fluoride and iron contamination in many districts",
      "Drying and neglect of traditional water structures",
    ],
    wisdom: [
      "Stepwells (Baoris, Vavs): Deep, multi-storied wells for drinking and rituals",
      "Tankas: Rooftop rainwater harvesting tanks",
      "Nadis & Talabs: Village ponds for livestock and recharge",
      "Pat System: Shared water channels in tribal farming",
    ],
  },
  {
    name: "Maharashtra",
    position: {
      top: "53%",
      right: "42%",
      mobileTop: "51%",
      mobileRight: "40%",
    },
    geographical: [
      "Seasonal rivers and streams",
      "Coastal areas affected by salinity intrusion",
    ],
    waterissues: [
      "High fluoride and iron contamination in many districts",
      "Drying and neglect of traditional water structures",
    ],
    wisdom: [
      "Stepwells (Baoris, Vavs): Deep, multi-storied wells for drinking and rituals",
      "Tankas: Rooftop rainwater harvesting tanks",
      "Nadis & Talabs: Village ponds for livestock and recharge",
      "Pat System: Shared water channels in tribal farming",
    ],
  },
  {
    name: "Karnataka",
    position: {
      top: "75%",
      right: "43%",
      mobileTop: "73%",
      mobileRight: "41%",
    },
    geographical: [
      "Seasonal rivers and streams",
      "Coastal areas affected by salinity intrusion",
    ],
    waterissues: [
      "High fluoride and iron contamination in many districts",
      "Drying and neglect of traditional water structures",
    ],
    wisdom: [
      "Stepwells (Baoris, Vavs): Deep, multi-storied wells for drinking and rituals",
      "Tankas: Rooftop rainwater harvesting tanks",
      "Nadis & Talabs: Village ponds for livestock and recharge",
      "Pat System: Shared water channels in tribal farming",
    ],
  },
  {
    name: "Tamil Nadu",
    position: {
      top: "90%",
      right: "33%",
      mobileTop: "88%",
      mobileRight: "31%",
    },
    geographical: [
      "Seasonal rivers and streams",
      "Coastal areas affected by salinity intrusion",
    ],
    waterissues: [
      "High fluoride and iron contamination in many districts",
      "Drying and neglect of traditional water structures",
    ],
    wisdom: [
      "Stepwells (Baoris, Vavs): Deep, multi-storied wells for drinking and rituals",
      "Tankas: Rooftop rainwater harvesting tanks",
      "Nadis & Talabs: Village ponds for livestock and recharge",
      "Pat System: Shared water channels in tribal farming",
    ],
  },
  {
    name: "Andhra Pradesh",
    position: {
      top: "73%",
      right: "32%",
      mobileTop: "71%",
      mobileRight: "30%",
    },
    geographical: [
      "Seasonal rivers and streams",
      "Coastal areas affected by salinity intrusion",
    ],
    waterissues: [
      "High fluoride and iron contamination in many districts",
      "Drying and neglect of traditional water structures",
    ],
    wisdom: [
      "Stepwells (Baoris, Vavs): Deep, multi-storied wells for drinking and rituals",
      "Tankas: Rooftop rainwater harvesting tanks",
      "Nadis & Talabs: Village ponds for livestock and recharge",
      "Pat System: Shared water channels in tribal farming",
    ],
  },
  {
    name: "Odisha",
    position: {
      top: "48%",
      right: "16%",
      mobileTop: "46%",
      mobileRight: "14%",
    },
    geographical: [
      "Seasonal rivers and streams",
      "Coastal areas affected by salinity intrusion",
    ],
    waterissues: [
      "High fluoride and iron contamination in many districts",
      "Drying and neglect of traditional water structures",
    ],
    wisdom: [
      "Stepwells (Baoris, Vavs): Deep, multi-storied wells for drinking and rituals",
      "Tankas: Rooftop rainwater harvesting tanks",
      "Nadis & Talabs: Village ponds for livestock and recharge",
      "Pat System: Shared water channels in tribal farming",
    ],
  },
];

export default function OurImpact() {
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [activeState, setActiveState] = useState<number>(0); // Default to Rajasthan (index 0)
  const [previousState, setPreviousState] = useState<number | null>(null);

  // Handle window resize to detect mobile view
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle marker click
  const handleMarkerClick = (index: number) => {
    if (activeState !== index) {
      setPreviousState(activeState);
      setActiveState(index);
    } else {
      setActiveState(index); // Keep the dialogue open for the same state
    }
  };

  // Define states where dialogue should appear at the top
  const topDialogueStates = [
    "Maharashtra",
    "Karnataka",
    "Tamil Nadu",
    "Andhra Pradesh",
  ];

  // Generate path points for bike animation
  const getPathPoints = (startIndex: number | null, endIndex: number) => {
    if (startIndex === null) return [states[endIndex].position];

    const path = [];
    const start = Math.min(startIndex, endIndex);
    const end = Math.max(startIndex, endIndex);

    // Assume states array order reflects the path order
    for (let i = start; i <= end; i++) {
      path.push(states[i].position);
    }

    if (startIndex > endIndex) {
      // Reverse path if moving backward
      return path.reverse();
    }
    return path;
  };

  return (
    <div ref={containerRef} className="h-full w-full">
      <p className="container mx-auto bg-gray-100 w-fit rounded-xl px-4 py-1 mt-20 text-gray-700 flex items-center text-sm sm:text-base">
        Impact
      </p>
      <h2 className="text-3xl sm:text-4xl md:text-5xl mt-4 text-center mb-6 px-4">
        Our Impact Across India
      </h2>

      {/* Map Section */}
      <div
        className={`relative ${
          isMobile ? "h-[600px]" : "h-screen"
        } flex items-center justify-center`}
      >
        <div
          className={`relative w-full ${
            isMobile ? "max-w-[350px] h-[500px]" : "max-w-4xl h-full"
          }`}
        >
          {/* Background Map Image */}
          <div className="w-[400px] h-[550px]">
            <Image
              src="/india map.png"
              alt="Map of India"
              fill
              style={{ objectFit: "contain" }}
              className="w-full h-full"
              onError={() => console.error("Failed to load map image")}
            />
          </div>

          {/* Bike Path */}
          <div
            className={`absolute ${
              isMobile
                ? "top-[120px] left-[80px] w-[280px] h-[350px]"
                : "top-36 left-95 w-[380px] h-[430px]"
            }`}
          >
            <Image
              src="/Vector 12.png"
              alt="Bike path"
              fill
              className="z-10"
              onError={() => console.error("Failed to load bike path image")}
            />
          </div>

          {/* Bike Animation */}
          {activeState !== null && (
            <motion.div
              className="absolute z-30"
              animate={{
                top: states[activeState].position[
                  isMobile ? "mobileTop" : "top"
                ],
                right:
                  states[activeState].position[
                    isMobile ? "mobileRight" : "right"
                  ],
                // translateX: "-50%",
                // translateY: "-50%",
              }}
              transition={{
                duration: 1.5,
                ease: "easeInOut",
                times:
                  previousState !== null
                    ? getPathPoints(previousState, activeState).map(
                        (_, i) =>
                          i /
                          Math.max(
                            1,
                            getPathPoints(previousState, activeState).length - 1
                          )
                      )
                    : [0, 1],
                // top: getPathPoints(previousState, activeState).map(
                //   (p) => p[isMobile ? "mobileTop" : "top"]
                // ),
                // right: getPathPoints(previousState, activeState).map(
                //   (p) => p[isMobile ? "mobileRight" : "right"]
                // ),
              }}
            >
              <Image
                src="/bike path.png"
                alt="Bike"
                width={40}
                height={40}
                className="z-30"
                onError={() => console.error("Failed to load bike image")}
              />
            </motion.div>
          )}

          {/* State Markers and Dialogues */}
          {states.map((state, index) => (
            <div
              key={state.name}
              className="absolute cursor-pointer z-20"
              style={
                isMobile
                  ? {
                      top: state.position.mobileTop,
                      right: state.position.mobileRight,
                    }
                  : state.position
              }
              onClick={() => handleMarkerClick(index)}
            >
              {/* Marker */}
              <motion.div
                className={`${isMobile ? "w-5 h-5" : "w-6 h-6"} relative z-20`}
                initial={{ scale: 0.8, opacity: 0.7 }}
                animate={{
                  scale: activeState === index ? 1.2 : 0.8,
                  opacity: activeState === index ? 1 : 0.7,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <Image
                  src="/pin 3.png"
                  alt={`Pin for ${state.name}`}
                  fill
                  className="object-contain hover:scale-110 transition-transform z-20"
                  onError={() =>
                    console.error(`Failed to load pin image for ${state.name}`)
                  }
                />
              </motion.div>

              {/* Dialogue Box */}
              {activeState === index && (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: topDialogueStates.includes(state.name) ? -20 : 20,
                  }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className={`absolute ${
                    topDialogueStates.includes(state.name)
                      ? isMobile
                        ? "bottom-5"
                        : "bottom-6"
                      : isMobile
                      ? "top-5"
                      : "top-2"
                  } ${
                    state.name === "Andhra Pradesh"
                      ? "left-6"
                      : index % 2 === 0
                      ? "left-6"
                      : "right-6"
                  } ${
                    isMobile ? "w-[220px] p-3" : "w-md p-4"
                  } bg-white rounded-lg shadow-lg border border-gray-200 z-40`}
                >
                  <h3
                    className={`${
                      isMobile ? "text-base" : "text-lg"
                    } font-semibold text-black`}
                  >
                    {state.name}
                  </h3>

                  {state.geographical && (
                    <>
                      <h3
                        className={`${
                          isMobile ? "text-sm" : "text-md"
                        } font-semibold text-gray-800 mb-2`}
                      >
                        Geographical Overview
                      </h3>
                      <ul
                        className={`${
                          isMobile ? "text-[10px]" : "text-xs"
                        } pb-2 list-disc list-inside text-gray-700 text-justify space-y-1`}
                      >
                        {state.geographical.map((geographical, idx) => (
                          <li key={idx}>{geographical}</li>
                        ))}
                      </ul>
                      <hr />
                      <h3
                        className={`${
                          isMobile ? "text-sm" : "text-md"
                        } font-semibold text-gray-800 mb-2`}
                      >
                        Water Issues
                      </h3>
                      <ul
                        className={`${
                          isMobile ? "text-[10px]" : "text-xs"
                        } pb-2 list-disc list-inside text-gray-700 text-justify space-y-1`}
                      >
                        {state.waterissues.map((waterissues, idx) => (
                          <li key={idx}>{waterissues}</li>
                        ))}
                      </ul>
                      <hr />
                      <h3
                        className={`${
                          isMobile ? "text-sm" : "text-md"
                        } font-semibold text-gray-800 mb-2`}
                      >
                        Traditional Water Wisdom
                      </h3>
                      <ul
                        className={`${
                          isMobile ? "text-[10px]" : "text-xs"
                        } list-disc list-inside text-gray-700 text-justify space-y-1`}
                      >
                        {state.wisdom.map((wisdom, idx) => (
                          <li key={idx}>{wisdom}</li>
                        ))}
                      </ul>
                    </>
                  )}
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
