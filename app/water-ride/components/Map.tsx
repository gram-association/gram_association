"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  MapContainer,
  TileLayer,
  Marker,
  useMap,
  Polyline,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import React from "react";

// Custom icon for markers
const customIcon = L.icon({
  iconUrl: "/pin 3.png",
  iconSize: [30, 41],
  iconAnchor: [12, 41],
});

// Bike icon
const bikeIcon = L.icon({
  iconUrl: "/bike path.png",
  iconSize: [50, 50],
  iconAnchor: [25, 25],
});

// Custom icon for state name labels
const createLabelIcon = (name: any) =>
  L.divIcon({
    className: "state-label",
    html: `<div>${name}</div>`,
    iconSize: [100, 80], // Adjust size to fit text
    iconAnchor: [40, 8], // Center the label
  });

// Component to access map instance via useMap
function MapReadySetter({ setMap }: { setMap: (map: L.Map) => void }) {
  const map = useMap();
  useEffect(() => {
    setMap(map);
  }, [map]);
  return null;
}

const states = [
  {
    name: "Rajasthan",
    coords: [26.9124, 73.7873] as [number, number],
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
    coords: [22.3087, 72.1924] as [number, number],
    geographical: [
      "Seasonal rivers and streams",
      "Coastal areas affected by salinity intrusion",
    ],
    waterissues: [
      "Salinity in coastal aquifers; fluoride contamination",
      "Inequitable water access across regions",
    ],
    wisdom: [
      "Stepwells (Vavs): E.g., Rani ki Vav — intricate rainwater harvesting structures",
      "Talavs & Khet Talavs: Village and field ponds for irrigation and livestock",
      "Virdas: Shallow wells near riverbeds for clean water access",
      "Bawdis & Shared Wells: Deep, stepped wells with communal use (patis)",
    ],
  },
  {
    name: "Madhya Pradesh",
    coords: [24.2599, 79.4126] as [number, number],
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
    coords: [19.076, 75.2977] as [number, number],
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
    coords: [15.1716, 75.5946] as [number, number],
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
    coords: [10.8505, 76.2711] as [number, number],
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
    coords: [11.0827, 78.2707] as [number, number],
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
    coords: [16.2129, 79.74] as [number, number],
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
    coords: [20.3517, 84.2785] as [number, number],
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

// Define the bike path coordinates in the specified order
const bikePathCoords = [
  states[0].coords, // Rajasthan
  states[1].coords, // Gujarat
  states[2].coords, // Madhya Pradesh
  states[3].coords, // Maharashtra
  states[4].coords, // Karnataka
  states[5].coords, // Kerala
  states[6].coords, // Tamil Nadu
  states[7].coords, // Andhra Pradesh
  states[8].coords, // Odisha
];

export default function MapComponent() {
  const [activeState, setActiveState] = useState<number>(0);
  const [map, setMap] = useState<L.Map | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [previousState, setPreviousState] = useState<number | null>(null);
  const [dialoguePosition, setDialoguePosition] = useState<{
    x: number;
    y: number;
  } | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (map) {
      map.invalidateSize();
      // Update dialogue position when map moves or zooms
      const updatePosition = () => {
        if (activeState !== null) {
          const point = map.latLngToLayerPoint(states[activeState].coords);
          setDialoguePosition({
            x: point.x,
            y: point.y + 50, // Offset to place dialogue below marker
          });
        }
      };
      updatePosition();
      map.on("move", updatePosition);
      map.on("zoom", updatePosition);
      return () => {
        map.off("move", updatePosition);
        map.off("zoom", updatePosition);
      };
    }
  }, [map, activeState]);

  const handleMarkerClick = (index: number) => {
    setPreviousState(activeState);
    setActiveState(index);
    if (map) {
      const point = map.latLngToLayerPoint(states[index].coords);
      setDialoguePosition({
        x: point.x,
        y: point.y + 50, // Offset to place dialogue below marker
      });
    }
  };

  const getPathPoints = (startIndex: number | null, endIndex: number) => {
    if (startIndex === null) return [states[endIndex].coords];

    const path = [];
    const start = Math.min(startIndex, endIndex);
    const end = Math.max(startIndex, endIndex);

    for (let i = start; i <= end; i++) {
      path.push(states[i].coords);
    }

    return startIndex > endIndex ? path.reverse() : path;
  };

  return (
    <div className="h-full w-full max-w-screen relative">
      {/* Add CSS for state labels */}
      <style jsx>{`
        .state-label {
          font-family: "Arial", sans-serif !important;
          font-size: 80px !important; /* Bigger font size */
          font-weight: extra-bold !important; /* Bold text */
          color: #000 !important; /* Black text for visibility */
          text-shadow: 1px 1px 2px #fff !important; /* White shadow for contrast */
          background: transparent !important;
          border: none !important;
          text-align: center;
        }
      `}</style>

      <p className="container mx-auto bg-gray-100 w-fit rounded-xl px-4 py-1 mt-20 text-gray-700 flex items-center text-sm sm:text-base">
        Impact
      </p>
      <h2 className="text-3xl sm:text-4xl md:text-5xl mt-4 text-center mb-6 px-4">
        Our Impact Across India
      </h2>

      <MapContainer
        center={[20.5937, 78.9629]}
        zoom={5}
        style={{ height: "100vh", width: "80%" }}
        className="relative z-0 mx-auto"
      >
        <MapReadySetter setMap={setMap} />
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Polyline
          positions={bikePathCoords}
          weight={2}
          color="#9C574B"
          dashArray="10, 10"
        />

        {/* State Markers */}
        {states.map((state, index) => (
          <React.Fragment key={state.name}>
            <Marker
              key={state.name}
              position={state.coords}
              icon={customIcon}
              eventHandlers={{
                click: () => handleMarkerClick(index),
              }}
            />
            {/* Label Marker */}
            <Marker
              position={state.coords}
              icon={createLabelIcon(state.name)}
              interactive={false} // Make label non-interactive
            />
          </React.Fragment>
        ))}

        {/* Bike Animation */}
        {activeState !== null && (
          <motion.div
            className="absolute z-30"
            style={{ position: "absolute" as const }}
            animate={{
              x: states[activeState].coords[0],
              y: states[activeState].coords[1],
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
            }}
          >
            <Marker position={states[activeState].coords} icon={bikeIcon} />
          </motion.div>
        )}
      </MapContainer>

      {/* Custom Dialogue Box */}
      {activeState !== null && dialoguePosition && (
        <div
          className="absolute z-40 w-[300px] sm:w-[507px] p-4 bg-white rounded-lg shadow-lg border border-gray-200 text-sm"
          style={{
            left: dialoguePosition.x - (isMobile ? 470 : 253.5), // Center horizontally
            top: dialoguePosition.y,
            transform: "translate(80%, 10%)", // Adjust for centering
          }}
        >
          <h3 className="font-semibold text-black">
            {states[activeState].name}
          </h3>
          <h4 className="font-semibold text-gray-800 mt-2">
            Geographical Overview
          </h4>
          <ul className="list-disc list-inside text-gray-700 space-y-1 mb-2">
            {states[activeState].geographical.map((geo, idx) => (
              <li key={idx}>{geo}</li>
            ))}
          </ul>
          <hr />
          <h4 className="font-semibold text-gray-800 mt-2">Water Issues</h4>
          <ul className="list-disc list-inside text-gray-700 space-y-1 mb-2">
            {states[activeState].waterissues.map((issue, idx) => (
              <li key={idx}>{issue}</li>
            ))}
          </ul>
          <hr />
          <h4 className="font-semibold text-gray-800 mt-2">
            Traditional Water Wisdom
          </h4>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            {states[activeState].wisdom.map((wisdom, idx) => (
              <li key={idx}>{wisdom}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
