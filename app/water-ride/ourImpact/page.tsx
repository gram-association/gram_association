"use client";
import dynamic from "next/dynamic";

// Dynamically load the MapComponent only on client-side
const MapComponent = dynamic(() => import("../components/mapImage"), {
  ssr: false,
});

export default function OurImpactPage() {
  return (
    <div>
      <MapComponent />
    </div>
  );
}
