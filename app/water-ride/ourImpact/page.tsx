"use client";
import dynamic from "next/dynamic";
import WaterRideMap from "../components/Map";

// Dynamically load the MapComponent only on client-side
const MapComponent = dynamic(() => import("../components/mapImage"), {
  ssr: false,
});

export default function OurImpactPage() {
  return (
    <div>
      {/* <MapComponent /> */}
      <WaterRideMap />
    </div>
  );
}
