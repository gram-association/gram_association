"use client";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/Button";
import { Droplets, Loader2, ChevronRight } from "lucide-react";

/*   DATA   */
const states = [
  {
    name: "Rajasthan",
    coordinates: { lat: 27.0238, lng: 74.2179 },
    color: "#5A829A",
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
    coordinates: { lat: 22.2587, lng: 71.1924 },
    color: "#5A829A",
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
    coordinates: { lat: 22.5734, lng: 75.7569 },
    color: "#5A829A",
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
      "Women's Water Knowledge: Tribal women identified aquifers and conserved water at household level",
    ],
  },
  {
    name: "Maharashtra",
    coordinates: { lat: 19.7515, lng: 75.7139 },
    color: "#5A829A",
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
    coordinates: { lat: 15.3173, lng: 75.7139 },
    color: "#5A829A",
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
    coordinates: { lat: 10.8505, lng: 76.2711 },
    color: "#5A829A",
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
    coordinates: { lat: 9.9271, lng: 78.8569 },
    color: "#5A829A",
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
    coordinates: { lat: 15.9129, lng: 79.74 },
    color: "#5A829A",
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
    coordinates: { lat: 20.9517, lng: 85.0985 },
    color: "#5A829A",
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
const byName = (n: string) => states.find((s) => s.name === n);
const routes = [
  {
    from: "Rajasthan",
    to: "Gujarat",
  },
  {
    from: "Gujarat",
    to: "Madhya Pradesh",
  },
  {
    from: "Madhya Pradesh",
    to: "Maharashtra",
  },
  {
    from: "Maharashtra",
    to: "Karnataka",
  },
  {
    from: "Karnataka",
    to: "Kerala",
  },
  {
    from: "Kerala",
    to: "Tamil Nadu",
  },
  {
    from: "Tamil Nadu",
    to: "Andhra Pradesh",
  },
  {
    from: "Andhra Pradesh",
    to: "Odisha",
  },
];
const routeStyles = {
  stepwell: { color: "#3B82F6", weight: 5, dashArray: "20,10" },
  tribal: { color: "#3B82F6", weight: 4, dashArray: "15,5,5,5" },
  tank: { color: "#3B82F6", weight: 5, dashArray: null },
  ghats: { color: "#3B82F6", weight: 4, dashArray: "10,5" },
  temple: { color: "#3B82F6", weight: 5, dashArray: "25,10" },
  coastal: { color: "#3B82F6", weight: 4, dashArray: "5,5" },
  cascade: { color: "#3B82F6", weight: 5, dashArray: "15,10,5,10" },
  river: { color: "#3B82F6", weight: 6, dashArray: null },
};

declare global {
  interface Window {
    L: any;
  }
}

// Indian Bullet Bike SVG Component
const BulletBike = ({
  className = "",
  size = 24,
  rotation = 20,
}: {
  className?: string;
  size?: number;
  rotation?: number;
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 60"
    className={className}
    fill="currentColor"
    style={{ transform: `rotate(${rotation}deg)` }}
  >
    {/* Main body */}
    <ellipse cx="50" cy="35" rx="35" ry="8" fill="#2563eb" />
    {/* Tank */}
    <rect x="25" y="20" width="50" height="15" rx="7" fill="#1d4ed8" />
    {/* Seat */}
    <ellipse cx="35" cy="25" rx="15" ry="5" fill="#374151" />
    {/* Front wheel (right side) */}
    <circle
      cx="80"
      cy="45"
      r="12"
      fill="#1f2937"
      stroke="#374151"
      strokeWidth="2"
    />
    <circle cx="80" cy="45" r="6" fill="#6b7280" />
    {/* Rear wheel (left side) */}
    <circle
      cx="20"
      cy="45"
      r="12"
      fill="#1f2937"
      stroke="#374151"
      strokeWidth="2"
    />
    <circle cx="20" cy="45" r="6" fill="#6b7280" />
    {/* Handlebars (right side) */}
    <line
      x1="85"
      y1="25"
      x2="75"
      y2="30"
      stroke="#374151"
      strokeWidth="3"
      strokeLinecap="round"
    />
    {/* Exhaust (left side) */}
    <rect x="10" y="40" width="20" height="4" rx="2" fill="#6b7280" />
    {/* Engine */}
    <rect x="45" y="35" width="20" height="10" rx="2" fill="#374151" />
  </svg>
);

export default function WaterRideMap() {
  const [selected, setSelected] = useState<(typeof states)[0] | null>(
    states[0]
  ); // Default to Rajasthan
  const [ready, setReady] = useState(false);
  const [mapError, setMapError] = useState<string | null>(null);
  const [currentRideIndex, setCurrentRideIndex] = useState(0);
  const [isRiding, setIsRiding] = useState(false);
  const [isMoving, setIsMoving] = useState(false);
  const mapDiv = useRef<HTMLDivElement>(null);
  const mapRef = useRef<any>(null);
  const polylines = useRef<any[]>([]);
  const markers = useRef<any[]>([]);
  const movingBikeRef = useRef<any>(null);
  const rideInterval = useRef<NodeJS.Timeout | null>(null);
  const layersRef = useRef<any>({});

  useEffect(() => {
    const loadLeaflet = async () => {
      try {
        if (window.L) {
          init();
          return;
        }
        // Load CSS
        const css = document.createElement("link");
        css.rel = "stylesheet";
        css.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
        css.integrity = "sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=";
        css.crossOrigin = "";
        document.head.appendChild(css);
        // Load JS
        const js = document.createElement("script");
        js.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
        js.integrity = "sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=";
        js.crossOrigin = "";
        js.onload = () => {
          console.log("Leaflet loaded successfully");
          init();
        };
        js.onerror = () => {
          setMapError("Failed to load map library");
        };
        document.head.appendChild(js);
      } catch (error) {
        console.error("Error loading Leaflet:", error);
        setMapError("Error loading map");
      }
    };

    const init = () => {
      try {
        if (!mapDiv.current || !window.L) {
          console.error("Map container or Leaflet not available");
          return;
        }
        console.log("Initializing map...");
        // Clear any existing map
        if (mapRef.current) {
          mapRef.current.remove();
        }
        const map = window.L.map(mapDiv.current, {
          center: [18.5, 77.5],
          zoom: 5,
          minZoom: 4,
          maxZoom: 15,
          zoomControl: true,
          attributionControl: true,
        });
        // Enhanced tile layers
        layersRef.current = {
          satellite: window.L.tileLayer(
            "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
            {
              maxZoom: 18,
            }
          ),
          street: window.L.tileLayer(
            "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
            {
              attribution: "© OpenStreetMap contributors",
              maxZoom: 19,
            }
          ),
        };
        // Add default layer
        layersRef.current.satellite.addTo(map);
        mapRef.current = map;
        // Add markers and routes
        addMarkers(map);
        addRoutes(map);
        addStateLabels(map);
        createMovingBike(map);
        // Ensure map resizes correctly after DOM is rendered
        setTimeout(() => {
          if (mapRef.current) {
            mapRef.current.invalidateSize();
          }
        }, 100);
        setReady(true);
        console.log("Map initialized successfully");
      } catch (error) {
        console.error("Error initializing map:", error);
        setMapError("Failed to initialize map");
      }
    };

    const createMovingBike = (map: any) => {
      const bikeIcon = window.L.divIcon({
        className: "moving-bike-marker",
        html: `
          <div class="bike-container">
            <div class="bike-shadow"></div>
            <div class="bike-body">
              <svg width="36" height="24" viewBox="0 0 100 60" fill="none" class="bike-svg">
                <ellipse cx="50" cy="35" rx="35" ry="8" fill="#2563eb" />
                <rect x="25" y="20" width="50" height="15" rx="7" fill="#1d4ed8" />
                <ellipse cx="35" cy="25" rx="15" ry="5" fill="#374151" />
                <circle cx="80" cy="45" r="12" fill="#1f2937" stroke="#374151" strokeWidth="2" />
                <circle cx="80" cy="45" r="6" fill="#5A829A" />
                <circle cx="20" cy="45" r="12" fill="#1f2937" stroke="#374151" strokeWidth="2" />
                <circle cx="20" cy="45" r="6" fill="#5A829A" />
                <line x1="85" y1="25" x2="75" y2="30" stroke="#374151" strokeWidth="3" strokeLinecap="round" />
                <rect x="10" y="40" width="20" height="4" rx="2" fill="#5A829A" />
                <rect x="45" y="35" width="20" height="10" rx="2" fill="#374151" />
              </svg>
            </div>
            <div class="bike-trail"></div>
          </div>
        `,
        iconSize: [48, 32],
        iconAnchor: [24, 16],
      });
      movingBikeRef.current = window.L.marker(
        [states[0].coordinates.lat, states[0].coordinates.lng],
        {
          icon: bikeIcon,
          zIndexOffset: 1000,
        }
      ).addTo(map);
    };

    const addStateLabels = (map: any) => {
      states.forEach((state) => {
        const label = window.L.divIcon({
          className: "state-label",
          html: `<div class="state-name-label">${state.name}</div>`,
          iconSize: [50, 10],
          iconAnchor: [50, 2],
        });
        window.L.marker([state.coordinates.lat, state.coordinates.lng], {
          icon: label,
          interactive: false,
        }).addTo(map);
      });
    };

    const addMarkers = (map: any) => {
      states.forEach((s, idx) => {
        const icon = window.L.divIcon({
          className: "heritage-marker",
          html: `
            <div class="marker-container">
              <div class="marker-core" style="background: ${s.color};">
              </div>
            </div>
          `,
          iconSize: [50, 50],
          iconAnchor: [25, 25],
        });
        const marker = window.L.marker([s.coordinates.lat, s.coordinates.lng], {
          icon,
          riseOnHover: true,
        }).addTo(map);
        marker.on("click", () => {
          animateBikeToState(idx);
          setSelected(states[idx]);
        });
        markers.current.push(marker);
      });
    };

    const addRoutes = (map: any) => {
      routes.forEach((r) => {
        const a = byName(r.from);
        const b = byName(r.to);
        if (!a || !b) return;
        let coordinates;
        if (r.from === "Kerala" && r.to === "Tamil Nadu") {
          // Create a U-shaped route by adding a midpoint
          const midLat = (a.coordinates.lat + b.coordinates.lat) / 2 - 2.1; // Dip south by 1 degree
          const midLng = (a.coordinates.lng + b.coordinates.lng) / 2;
          coordinates = [
            [a.coordinates.lat, a.coordinates.lng],
            [midLat, midLng], // Midpoint to create U-shape
            [b.coordinates.lat, b.coordinates.lng],
          ];
        } else {
          // Standard straight line for other routes
          coordinates = [
            [a.coordinates.lat, a.coordinates.lng],
            [b.coordinates.lat, b.coordinates.lng],
          ];
        }
        const style = routeStyles[r.from as keyof typeof routeStyles];
        const line = window.L.polyline(coordinates, {
          ...style,
          opacity: 0.8,
        }).addTo(map);
        polylines.current.push(line);
      });
    };

    loadLeaflet();

    // Resize handler to invalidate map size when container dimensions change
    const handleResize = () => {
      if (mapRef.current) {
        mapRef.current.invalidateSize();
      }
    };
    window.addEventListener("resize", handleResize);

    return () => {
      if (rideInterval.current) clearInterval(rideInterval.current);
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
      markers.current = [];
      polylines.current = [];
    };
  }, []);

  const animateBikeToState = async (targetIndex: number) => {
    if (!mapRef.current || !movingBikeRef.current || isMoving) return;
    setIsMoving(true);
    let current = currentRideIndex;
    const step = targetIndex > current ? 1 : -1;
    while (current !== targetIndex) {
      await animateSegment(current, current + step);
      current += step;
      setCurrentRideIndex(current);
    }
    setSelected(states[targetIndex]);
    setIsMoving(false);
  };

  const animateSegment = (fromIndex: number, toIndex: number) => {
    return new Promise<void>((resolve) => {
      const fromState = states[fromIndex];
      const toState = states[toIndex];
      const stepsPerSegment = 30;
      let currentStep = 0;

      const startLat = fromState.coordinates.lat;
      const startLng = fromState.coordinates.lng;
      const endLat = toState.coordinates.lat;
      const endLng = toState.coordinates.lng;

      const isUSShape = fromIndex === 5 && toIndex === 6; // Kerala to Tamil Nadu
      let midLat, midLng, latStep1, lngStep1, latStep2, lngStep2;

      if (isUSShape) {
        midLat = (startLat + endLat) / 2 - 2.5;
        midLng = (startLng + endLng) / 2;
        latStep1 = (midLat - startLat) / stepsPerSegment;
        lngStep1 = (midLng - startLng) / stepsPerSegment;
        latStep2 = (endLat - midLat) / stepsPerSegment;
        lngStep2 = (endLng - midLng) / stepsPerSegment;
      } else {
        latStep1 = (endLat - startLat) / stepsPerSegment;
        lngStep1 = (endLng - startLng) / stepsPerSegment;
      }

      const bikeIcon = (progress: number) => {
        const easedProgress = 1 - Math.pow(1 - progress, 3);
        return window.L.divIcon({
          className: "moving-bike-marker",
          html: `
             <div class="bike-container">
             <div class="bike-shadow"></div>
             <div class="bike-body">
               <svg width="36" height="24" viewBox="0 0 100 60" fill="none" class="bike-svg">
                 <ellipse cx="50" cy="35" rx="35" ry="8" fill="#2563eb" />
                 <rect x="25" y="20" width="50" height="15" rx="7" fill="#1d4ed8" />
                 <ellipse cx="35" cy="25" rx="15" ry="5" fill="#374151" />
                 <circle cx="80" cy="45" r="12" fill="#1f2937" stroke="#374151" strokeWidth="2" />
                 <circle cx="80" cy="45" r="6" fill="#5A829A" />
                 <circle cx="20" cy="45" r="12" fill="#1f2937" stroke="#374151" strokeWidth="2" />
                 <circle cx="20" cy="45" r="6" fill="#5A829A" />
                 <line x1="85" y1="25" x2="75" y2="30" stroke="#374151" strokeWidth="3" strokeLinecap="round" />
                 <rect x="10" y="40" width="20" height="4" rx="2" fill="#5A829A" />
                 <rect x="45" y="35" width="20" height="10" rx="2" fill="#374151" />
               </svg>
             </div>
             <div class="bike-trail" style="opacity: ${easedProgress}"></div>
           </div>
          `,
          iconSize: [48, 32],
          iconAnchor: [24, 16],
        });
      };

      const animationInterval = setInterval(() => {
        const progress = currentStep / stepsPerSegment;
        if (currentStep >= stepsPerSegment * (isUSShape ? 2 : 1)) {
          clearInterval(animationInterval);
          resolve();
          return;
        }

        let currentLat, currentLng;
        if (isUSShape) {
          if (currentStep < stepsPerSegment) {
            // First segment: to midpoint
            currentLat = startLat + latStep1 * currentStep;
            currentLng = startLng + lngStep1 * currentStep;
          } else {
            // Second segment: midpoint to end
            const segmentStep = currentStep - stepsPerSegment;
            currentLat = midLat! + latStep2! * segmentStep;
            currentLng = midLng! + lngStep2! * segmentStep;
          }
        } else {
          currentLat = startLat + latStep1 * currentStep;
          currentLng = startLng + lngStep1 * currentStep;
        }

        movingBikeRef.current.setIcon(bikeIcon(progress));
        movingBikeRef.current.setLatLng([currentLat, currentLng]);

        // Pan map to follow bike every few steps
        if (currentStep % 5 === 0) {
          mapRef.current.panTo([currentLat, currentLng], {
            animate: true,
            duration: 0.5,
          });
        }
        currentStep++;
      }, 50); // Reduced interval for smoother animation
    });
  };

  if (mapError) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-red-50 ">
        <div className="text-center p-4">
          <div className="text-red-500 text-xl mb-2">Map Loading Error</div>
          <div className="text-red-400 mb-4">{mapError}</div>
          <Button onClick={() => window.location.reload()}>Reload Page</Button>
        </div>
      </div>
    );
  }

  return (
    <main className="h-screen w-full mb-80 md:mb-8 ">
      {/* Header */}
      <div className="mb-2 sm:mb-8">
        <p className="mx-auto bg-[#DEE6EB] dark:bg-gray-700 w-fit rounded-lg px-4 text-gray-700 dark:text-gray-200 flex items-center text-sm sm:text-base mt-10">
          Impact
        </p>
        <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl mt-4 text-center mb-6 px-4">
          Journey Across India
        </h2>
      </div>

      {/* Combined View - Map and Content */}
      <div className="h-full w-full flex flex-col lg:flex-row lg:h-[83vh]  lg:mt-2 lg:mb-18 bg-gray-100 dark:bg-gray-900 lg:bg-white lg:rounded-xl lg:shadow-lg lg:overflow-hidden">
        {/* Map Section */}
        <div className="relative w-full h-[40vh] lg:w-2/5 lg:h-full bg-gray-50">
          <div ref={mapDiv} className="w-full h-full" />{" "}
          {/* This is the single map div */}
          {/* Loading Overlay (only for desktop, as mobile shows map immediately) */}
          {!ready && (
            <div className="absolute inset-0 bg-white/95 flex items-center justify-center z-50 lg:block">
              <div className="text-center p-6">
                <div className="relative mb-6">
                  <Loader2 className="h-12 w-12 animate-spin text-blue-500 mx-auto" />
                  <BulletBike
                    size={24}
                    className="absolute inset-0 m-auto text-blue-600"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Loading Map
                </h3>
                <p className="text-sm text-gray-600">
                  Preparing your journey across India...
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Content Section (State List + Details) */}
        <div className="flex-1 flex flex-col lg:w-3/6 lg:flex-row">
          {/* Horizontal States List (Mobile) / Vertical States List (Desktop) */}
          <div className="bg-gray-50 dark:bg-gray-600 border-t mx-2 lg:w-1/3 lg:border-l lg:mx-0 lg:py-3 lg:px-4">
            <div className="overflow-x-auto scrollbar-hide lg:overflow-y-auto lg:h-full">
              <div className="flex flex-row p-2 space-x-2 lg:flex-col lg:space-x-0 lg:space-y-2">
                {states.map((state, idx) => (
                  <div
                    key={state.name}
                    className={`flex-shrink-0 p-2 rounded-lg cursor-pointer transition-all border ${
                      currentRideIndex === idx
                        ? "bg-blue-50 border-blue-200 shadow-sm"
                        : "bg-white border-gray-200 hover:bg-gray-50"
                    } ${isMoving ? "opacity-50 cursor-not-allowed" : ""}`}
                    onClick={() => {
                      if (!isMoving) {
                        animateBikeToState(idx);
                        // Ensure map resizes after state selection
                        setTimeout(() => {
                          if (mapRef.current) {
                            mapRef.current.invalidateSize();
                          }
                        });
                      }
                    }}
                  >
                    <div className="flex items-center gap-2 lg:gap-3">
                      <div
                        className="w-3 h-3 rounded-full flex items-center justify-center text-white font-bold text-[10px] border-2 border-white shadow-sm lg:w-4 lg:h-4 lg:text-xs"
                        style={{ backgroundColor: state.color }}
                      ></div>
                      <div className="font-medium text-gray-800 text-sm lg:flex-1">
                        {state.name}
                      </div>
                      {currentRideIndex === idx && (
                        <div className="flex items-center gap-1">
                          <BulletBike
                            size={12}
                            className="text-blue-600 size-3 lg:size-4"
                          />
                          <ChevronRight className="h-2 w-2 text-blue-600 lg:h-3 lg:w-3" />
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Details Column */}
          <div className="flex-1 bg-white dark:bg-gray-900 border-t scrollbar-hide lg:w-2/3 lg:border-l lg:p-2">
            {selected ? (
              <>
                {/* Details Header */}
                <div className="p-2 border-b bg-blue-50 dark:bg-gray-700 lg:p-4 rounded-2xl">
                  <div className="text-center">
                    <h3 className="text-lg text-gray-900 dark:text-gray-200 lg:text-2xl">
                      {selected.name}
                    </h3>
                  </div>
                </div>
                {/* Details Content with Scroll Indicators */}
                <div
                  className="relative flex-1 h-auto p-4 space-y-4 lg:p-6 lg:space-y-auto overflow-y-auto scrollbar-hide"
                  style={{ maxHeight: "calc(100vh - 160px)" }}
                >
                  <Section
                    title="Geographical Overview"
                    items={selected.geographical}
                  />
                  <Section title="Water Issues" items={selected.waterissues} />
                  <Section
                    title="Traditional Water Wisdom"
                    items={selected.wisdom}
                  />
                </div>
              </>
            ) : (
              <div className="flex-1 flex items-center justify-center p-4 lg:p-6">
                <div className="text-center">
                  <h3 className="text-base font-medium text-gray-600 mb-2 lg:text-lg">
                    Select a State
                  </h3>
                  <p className="text-sm text-gray-500">
                    Click on a state from the list or map to view details
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <style jsx global>{`
        .leaflet-container {
          height: 100% !important;
          width: 100% !important;
          position: absolute;
          top: 0;
          left: 0;
        }
        .state-name-label {
          color: white;
          padding: 4px 8px;
          border-radius: 8px;
          font-weight: 600;
          font-size: 10px;
          text-align: center;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
          white-space: nowrap;
        }
        .marker-container {
          position: relative;
          width: 50px;
          height: 50px;
        }
        .marker-core {
          position: absolute;
          top: 10px;
          left: 10px;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          border: 2px solid white;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
          z-index: 2;
        }
        .moving-bike-marker {
          z-index: 1000;
        }
        .bike-container {
          position: relative;
          width: 48px;
          height: 32px;
          transition: transform 0.2s ease-out;
          transform-origin: center center;
        }
        .bike-shadow {
          position: absolute;
          bottom: -8px;
          left: 50%;
          transform: translateX(-50%);
          width: 36px;
          height: 10px;
          background: rgba(0, 0, 0, 0.3);
          border-radius: 50%;
          filter: blur(3px);
        }
        .bike-body {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          filter: drop-shadow(0 3px 6px rgba(0, 0, 0, 0.3));
          z-index: 10;
        }
        .bike-body.moving {
          animation: bike-bounce 0.4s ease-in-out infinite alternate;
        }
        .bike-svg {
          display: block;
        }
        .wheel-spin {
          animation: wheel-rotate 0.3s linear infinite;
          transform-origin: center;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        @keyframes pulse-ring {
          0% {
            transform: scale(0.8);
            opacity: 1;
          }
          100% {
            transform: scale(1.2);
            opacity: 0;
          }
        }
        @keyframes bike-bounce {
          0% {
            transform: translate(-50%, -50%) translateY(0px);
          }
          100% {
            transform: translate(-50%, -50%) translateY(-3px);
          }
        }
        @keyframes wheel-rotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </main>
  );
}

function Section({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="space-y-3">
      <h4 className="text-sm sm:text-lg font-semibold flex items-center gap-2 text-gray-800 dark:text-gray-200">
        <span
          className="w-3 h-3 rounded-full"
          style={{ backgroundColor: "#4580a5" }}
        />
        {title}
      </h4>
      <ul className="space-y-2">
        {items.map((item, idx) => (
          <li
            key={idx}
            className="text-sm sm:text-[15px] text-gray-600 dark:text-gray-400 flex items-start gap-3 leading-relaxed"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 flex-shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
