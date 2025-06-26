"use client";

import { SetStateAction, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const states = [
  {
    name: "Rajasthan",
    position: { top: "13%", right: "48%" },
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
    position: { top: "28%", right: "55%" },
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
    position: { top: "28%", right: "38%" },
    geographical: [
      "Central Indian plateau with mixed topography",
      "Forested and tribal-dominated regions with hilly terrain",
    ],
    waterissues: [
      "Poor soil-water retention in many areas",
      "Fluoride contamination in drinking water sources",
    ],
    wisdom: [
      "Harda & Talai (Talabs): Small earthen ponds built along contours; community-managed",
      "Bhavli System: Small farm ponds for kharif crop irrigation",
      "Bhil Jal Prabandhan: Bhil tribe used traditional knowledge of stars and soil for water planning",
      "Women’s Water Knowledge: Tribal women identified aquifers and conserved water at household level",
    ],
  },
  {
    name: "Maharashtra",
    position: { top: "46%", right: "41%" },
    geographical: [
      "Lies in rain-shadow of Western Ghats; rainfall ~500–600 mm annually",
      "Drought-prone zones with semi-arid conditions",
    ],
    waterissues: [
      "Chronic groundwater depletion and poor water retention",
      "Soil erosion due to deforestation and monoculture (esp. sugarcane)",
    ],
    wisdom: [
      "Phad Irrigation System: Community-managed canal irrigation from rivers",
      "Contour Bunding & Nala Bunds: Reduced runoff, improved soil-moisture",
      "Water Budgeting: Cropping based on water availability, Labour-driven water projects",
      "Kundi Bhandaras: Small tanks and structures for storage",
    ],
  },
  {
    name: "Karnataka",
    position: { top: "66%", right: "42%" },
    geographical: [
      "Diverse terrain: Western Ghats on the west, Deccan Plateau in the interior",
      "Significant groundwater variability due to hard rock formations",
    ],
    waterissues: [
      "Pond and wetland encroachments",
      "Agrochemical runoff from plantations leading to sewage contamination of water bodies",
    ],
    wisdom: [
      "Vijayanagara Hydraulic System: Anicuts, tanks, canals, aqueducts",
      "Temple Tanks (Kalyanis, Pushkarnis): Recharge + ritual + daily use",
      "Kattes & Check Dams: Mud-stone structures for percolation",
      "Kunte & Kulams: Small ponds for irrigation and livestock",
    ],
  },
  {
    name: "Kerala",
    position: { top: "88%", right: "38%" },
    geographical: [
      "Western Ghats mountain range with dense forests on the east",
      "Coastal plains vulnerable to flooding and saltwater intrusion",
    ],
    waterissues: [
      "Agrochemical runoff (tea, coffee, spices) leading to water contamination",
      "Flash floods & droughts causing drying springs & streams",
    ],
    wisdom: [
      "Sacred Groves (Kavu): Protected spring zones",
      "Paanis: Shallow perennial tribal springs",
      "Multilayer Agroforestry: Enhances soil-moisture retention",
      "Tribal Elders' Knowledge: Seasonal water source mapping",
    ],
  },
  {
    name: "Tamil Nadu",
    position: { top: "80%", right: "33%" },
    geographical: [
      "Rainfall influenced by Northeast and Southwest monsoons",
      "Coastal areas prone to cyclones and saline water intrusion",
    ],
    waterissues: [
      "Privatization of water, tank & oorani encroachment",
      "Saltwater intrusion, overdependence on borewells, drying rivers (e.g. Vaigai), urban flooding, poor drainage",
    ],
    wisdom: [
      "Temple Tanks (Theppakulam) & Theerthams: Ritual & daily use",
      "Oorani: Village ponds for drinking water",
      "Eri System: Cascading tank chains for recharge",
      "Palm-lined Canals: Soil & water retention",
    ],
  },
  {
    name: "Andhra Pradesh",
    position: { top: "65%", right: "32%" },
    geographical: [
      "Eastern Ghats hill ranges with moderate rainfall",
      "Large network of tanks and canals for irrigation",
    ],
    waterissues: [
      "Tank encroachment, system neglect",
      "Overdependence on Krishna and Godavari River",
    ],
    wisdom: [
      "Cheruvus (Village Tanks): Man-made, community-managed",
      "Neeru-Mirasi System: Local custodians (Neeruganti) ensured fair water distribution",
      "Kudimaramathu: Collective tank desilting before monsoon",
      "Kalvas & Anicuts: Feeder canals & check dams",
    ],
  },
  {
    name: "Odisha",
    position: { top: "42%", right: "16%" },
    geographical: [
      "Eastern Ghats hills with moderate to high rainfall",
      "Flood-prone coastal areas, presence of extensive wetlands, mangroves, and estuaries",
    ],
    waterissues: [
      "Seasonal water scarcity and fluoride contamination",
      "Neglected and encroached traditional tanks and ponds",
    ],
    wisdom: [
      "Bindha/Bandha: Large community-managed village tanks for irrigation and drinking",
      "Paddy Field Bunding: Mud bunds trapping rainwater for recharge",
      "Ekamra Kshetra Water Network: Ancient planned system of interconnected tanks and canals in Bhubaneswar",
      "Tree-Water Link: Groves of Peepal, Banyan, Neem aiding aquifer recharge and microclimate regulation",
    ],
  },
];

export default function MapComponent() {
  const [activeState, setActiveState] = useState(0); // Default to Rajasthan (index 0)

  const topDialogueStates = ["Karnataka", "Kerala", "Tamil Nadu"];

  const rightDialogueStates = [
    "Gujarat",
    "Maharashtra",
    "Kerala",
    "Andhra Pradesh",
    "Odisha",
  ];

  const handleStateClick = (index: SetStateAction<number>) => {
    setActiveState(index);
  };

  return (
    <div className="h-full w-full">
      <p className="container mx-auto bg-gray-100 w-fit rounded-xl px-2 sm:px-4 py-1 mt-10 sm:mt-20 text-gray-700 flex items-center text-xs sm:text-base">
        Impact
      </p>
      <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl mt-4 text-center mb-6 px-4">
        Our Impact Across India
      </h2>

      {/* Map Section */}
      <div className="sticky top-0 h-screen flex items-center justify-center">
        <div className="relative w-full max-w-4xl h-full sm:h-[80vh] md:h-full">
          {/* Background Map Image */}
          <Image
            src="/India.png"
            alt="Map of India"
            fill
            style={{ objectFit: "contain" }}
            className="w-full h-full"
          />

          {/* Bike Animation */}
          <motion.div
            className="absolute"
            style={{
              top: states[activeState].position.top,
              // Dynamically set left or right based on dialogue position
              [rightDialogueStates.includes(states[activeState].name)
                ? "right"
                : "right"]: rightDialogueStates.includes(
                states[activeState].name
              )
                ? `calc(${states[activeState].position.right} )` // Shift bike to the left
                : states[activeState].position.right, // Keep bike on the right
              translateX: rightDialogueStates.includes(states[activeState].name)
                ? "50%"
                : "-50%", // Adjust for centering
              translateY: "-50%",
            }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/bike path.png"
              alt="Bike"
              width={28}
              height={28}
              className="sm:w-12 sm:h-12"
            />
          </motion.div>

          {/* State Markers and Dialogues */}
          {states.map((state, index) => (
            <div key={state.name} className="absolute" style={state.position}>
              {/* Marker */}
              <motion.div
                className="w-6 h-6 sm:w-10 sm:h-10 cursor-pointer relative"
                initial={{ scale: 0.8, opacity: 0.7 }}
                animate={{
                  scale: activeState === index ? 1.5 : 0.8,
                  opacity: activeState === index ? 1 : 0.7,
                }}
                transition={{ duration: 0.3 }}
                onClick={() => handleStateClick(index)}
                style={{ zIndex: 3 }}
              >
                <Image
                  src="/pin.png"
                  alt={`Pin for ${state.name}`}
                  fill
                  className="hover:scale-125 "
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
                      ? "bottom-6 sm:bottom-8"
                      : "top-2 sm:top-4"
                  } ${
                    rightDialogueStates.includes(state.name)
                      ? "right-6 sm:right-8"
                      : "right-6 sm:left-8"
                  } w-[200px] sm:w-[507px] p-2 sm:p-4 bg-white rounded-lg shadow-lg border border-gray-200 z-0 overflow-y-auto`}
                >
                  <h3 className="text-sm sm:text-lg font-semibold text-black">
                    {state.name}
                  </h3>

                  {state.geographical && (
                    <>
                      <h3 className="font-semibold text-gray-800 mt-2">
                        Geographical Overview
                      </h3>
                      <ul className="pb-1 sm:pb-2 list-disc list-inside text-gray-700 text-justify space-y-0.5 sm:space-y-1">
                        {state.geographical.map((geographical, idx) => (
                          <li key={idx}>{geographical}</li>
                        ))}
                      </ul>
                      <hr />
                      <h3 className="font-semibold text-gray-800 mt-2">
                        Water Issues
                      </h3>
                      <ul className="pb-1 sm:pb-2 list-disc list-inside text-gray-700 text-justify space-y-0.5 sm:space-y-1">
                        {state.waterissues.map((waterissues, idx) => (
                          <li key={idx}>{waterissues}</li>
                        ))}
                      </ul>
                      <hr />
                      <h3 className="font-semibold text-gray-800 mt-2">
                        Traditional Water Wisdom
                      </h3>
                      <ul className="list-disc list-inside text-gray-700 text-justify space-y-0.5 sm:space-y-1">
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
