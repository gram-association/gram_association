"use client";

import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/badge";
import {
  Route,
  MapPin,
  Droplets,
  Play,
  Pause,
  SkipForward,
  Loader2,
  Satellite,
  Map,
  ChevronRight,
  X,
} from "lucide-react";

/* -------------------------------------------------------------------------- */
/*  DATA                                                                      */
/* -------------------------------------------------------------------------- */

const states = [
  {
    name: "Rajasthan",
    coordinates: { lat: 27.0238, lng: 74.2179 },
    color: "#5A829A",

    rideDistance: "0 km",

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
    rideDistance: "520 km",
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
    coordinates: { lat: 22.9734, lng: 78.6569 },
    color: "#5A829A",
    rideDistance: "380 km",
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

    rideDistance: "290 km",

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

    rideDistance: "340 km",

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
    rideDistance: "280 km",
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
    coordinates: { lat: 11.1271, lng: 78.6569 },
    color: "#5A829A",
    rideDistance: "320 km",
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
    rideDistance: "410 km",
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
    rideDistance: "480 km",
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
    type: "stepwell",
    label: "Desert to Coast Stepwell Trail",
  },
  {
    from: "Gujarat",
    to: "Madhya Pradesh",
    type: "tribal",
    label: "Tribal Wisdom Highway",
  },
  {
    from: "Madhya Pradesh",
    to: "Maharashtra",
    type: "tank",
    label: "Central Tank Network Route",
  },
  {
    from: "Maharashtra",
    to: "Karnataka",
    type: "ghats",
    label: "Western Ghats Water Trail",
  },
  {
    from: "Karnataka",
    to: "Kerala",
    type: "temple",
    label: "Temple Tank Heritage Path",
  },
  {
    from: "Kerala",
    to: "Tamil Nadu",
    type: "coastal",
    label: "Coastal Conservation Corridor",
  },
  {
    from: "Tamil Nadu",
    to: "Andhra Pradesh",
    type: "cascade",
    label: "Tank Cascade Highway",
  },
  {
    from: "Andhra Pradesh",
    to: "Odisha",
    type: "river",
    label: "River Delta Heritage Route",
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
  const [showRoutes, setShowRoutes] = useState(true);
  const [currentRideIndex, setCurrentRideIndex] = useState(0);
  const [isRiding, setIsRiding] = useState(false);
  const [mapError, setMapError] = useState<string | null>(null);

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
          center: [19.5, 78.5],
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
          setSelected(states[idx]); // Add this line to update selected state
        });

        markers.current.push(marker);
      });
    };

    const addRoutes = (map: any) => {
      routes.forEach((r) => {
        const a = byName(r.from);
        const b = byName(r.to);
        if (!a || !b) return;

        const style = routeStyles[r.type as keyof typeof routeStyles];
        const line = window.L.polyline(
          [
            [a.coordinates.lat, a.coordinates.lng],
            [b.coordinates.lat, b.coordinates.lng],
          ],
          {
            ...style,
            opacity: 0.8,
          }
        ).addTo(map);

        line.bindTooltip(`
          <div style="font-weight: 600; margin-bottom: 4px;">${r.label}</div>
          <div style="font-size: 12px; color: #666;">Distance: ${
            byName(r.to)?.rideDistance
          }</div>
        `);

        polylines.current.push(line);
      });
    };

    loadLeaflet();

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

  const animateBikeToState = (targetIndex: number) => {
    if (!mapRef.current || !movingBikeRef.current || isMoving) return;

    setIsMoving(true);
    const currentState = states[currentRideIndex];
    const targetState = states[targetIndex];

    // Calculate intermediate points for smooth animation
    const startLat = currentState.coordinates.lat;
    const startLng = currentState.coordinates.lng;
    const endLat = targetState.coordinates.lat;
    const endLng = targetState.coordinates.lng;

    const steps = 60;
    const latStep = (endLat - startLat) / steps;
    const lngStep = (endLng - startLng) / steps;
    let currentStep = 0;

    // Calculate bearing for bike rotation
    const bearing = calculateBearing(startLat, startLng, endLat, endLng);

    const animationInterval = setInterval(() => {
      if (currentStep >= steps) {
        clearInterval(animationInterval);
        setCurrentRideIndex(targetIndex);
        setSelected(targetState);
        setIsMoving(false);

        // Final position and zoom
        // mapRef.current.setView([endLat, endLng], 8, {
        //   animate: true,
        //   duration: 1,
        // });
        return;
      }

      const currentLat = startLat + latStep * currentStep;
      const currentLng = startLng + lngStep * currentStep;

      // Calculate progress for smooth easing
      const progress = currentStep / steps;
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      // Update bike position with proper rotation
      const bikeIcon = window.L.divIcon({
        className: "moving-bike-marker",
        html: `
          <div class="bike-container" style="transform: rotate(${bearing}deg);">
            <div class="bike-shadow"></div>
            <div class="bike-body moving">
              <svg width="36" height="24" viewBox="0 0 100 60" fill="none" class="bike-svg">
                <ellipse cx="50" cy="35" rx="35" ry="8" fill="#2563eb" />
                <rect x="25" y="20" width="50" height="15" rx="7" fill="#1d4ed8" />
                <ellipse cx="35" cy="25" rx="15" ry="5" fill="#374151" />
                <circle cx="80" cy="45" r="12" fill="#1f2937" stroke="#374151" strokeWidth="2" />
                <circle cx="80" cy="45" r="6" fill="#6b7280" class="wheel-spin" />
                <circle cx="20" cy="45" r="12" fill="#1f2937" stroke="#374151" strokeWidth="2" />
                <circle cx="20" cy="45" r="6" fill="#6b7280" class="wheel-spin" />
                <line x1="85" y1="25" x2="75" y2="30" stroke="#374151" strokeWidth="3" strokeLinecap="round" />
                <rect x="10" y="40" width="20" height="4" rx="2" fill="#6b7280" />
                <rect x="45" y="35" width="20" height="10" rx="2" fill="#374151" />
              </svg>
            </div>
            <div class="bike-trail" style="opacity: ${easedProgress}"></div>
          </div>
        `,
        iconSize: [48, 32],
        iconAnchor: [24, 16],
      });

      movingBikeRef.current.setIcon(bikeIcon);
      movingBikeRef.current.setLatLng([currentLat, currentLng]);

      // Follow the bike with camera
      if (currentStep % 8 === 0) {
        mapRef.current.panTo([currentLat, currentLng]);
      }

      currentStep++;
    }, 60);
  };

  const calculateBearing = (
    lat1: number,
    lng1: number,
    lat2: number,
    lng2: number
  ) => {
    const dLng = ((lng2 - lng1) * Math.PI) / 180;
    const lat1Rad = (lat1 * Math.PI) / 180;
    const lat2Rad = (lat2 * Math.PI) / 180;

    const y = Math.sin(dLng) * Math.cos(lat2Rad);
    const x =
      Math.cos(lat1Rad) * Math.sin(lat2Rad) -
      Math.sin(lat1Rad) * Math.cos(lat2Rad) * Math.cos(dLng);

    const bearing = (Math.atan2(y, x) * 180) / Math.PI;
    return (bearing + 360) % 360;
  };

  const startAutoRide = () => {
    setIsRiding(true);
    const rideToNextState = () => {
      if (!isRiding) return;

      const nextIndex = (currentRideIndex + 1) % states.length;
      if (nextIndex === 0 && currentRideIndex === states.length - 1) {
        animateBikeToState(nextIndex);
        setTimeout(() => {
          if (isRiding) {
            rideToNextState();
          }
        }, 8000);
      } else {
        animateBikeToState(nextIndex);
        setTimeout(() => {
          if (isRiding) {
            rideToNextState();
          }
        }, 6000);
      }
    };

    setTimeout(() => {
      if (isRiding) {
        rideToNextState();
      }
    }, 1000);
  };

  const stopAutoRide = () => {
    setIsRiding(false);
    if (rideInterval.current) {
      clearInterval(rideInterval.current);
      rideInterval.current = null;
    }
  };

  const reset = () => {
    stopAutoRide();
    if (mapRef.current) {
      mapRef.current.setView([22.5, 80], 5, { animate: true, duration: 1.5 });
    }
    setSelected(states[0]); // Reset to Rajasthan
    setCurrentRideIndex(0);
    if (movingBikeRef.current) {
      movingBikeRef.current.setLatLng([
        states[0].coordinates.lat,
        states[0].coordinates.lng,
      ]);

      const resetBikeIcon = window.L.divIcon({
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
                <circle cx="80" cy="45" r="6" fill="#6b7280" />
                <circle cx="20" cy="45" r="12" fill="#1f2937" stroke="#374151" strokeWidth="2" />
                <circle cx="20" cy="45" r="6" fill="#6b7280" />
                <line x1="85" y1="25" x2="75" y2="30" stroke="#374151" strokeWidth="3" strokeLinecap="round" />
                <rect x="10" y="40" width="20" height="4" rx="2" fill="#6b7280" />
                <rect x="45" y="35" width="20" height="10" rx="2" fill="#374151" />
              </svg>
            </div>
            <div class="bike-trail"></div>
          </div>
        `,
        iconSize: [48, 32],
        iconAnchor: [24, 16],
      });

      movingBikeRef.current.setIcon(resetBikeIcon);
    }
  };

  if (mapError) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-red-50">
        <div className="text-center p-4">
          <div className="text-red-500 text-xl mb-2">Map Loading Error</div>
          <div className="text-red-400 mb-4">{mapError}</div>
          <Button onClick={() => window.location.reload()}>Reload Page</Button>
        </div>
      </div>
    );
  }

  return (
    <main className="h-screen w-full mb-8 ">
      {/* Header */}
      <div className="mb-2 sm:mb-8">
        <p className="container mx-auto bg-[#DEE6EB] w-fit rounded-xl px-2 sm:px-4 mt-10 sm:mt-10 text-gray-700 flex items-center text-xs sm:text-base">
          Impact
        </p>
        <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl mt-4 text-center mb-6 px-4">
          Our Impact Across India
        </h2>
      </div>
      {/* Mobile View */}
      <div className="h-screen w-full flex flex-col lg:hidden bg-gray-100 dark:bg-gray-900">
        {/* Map Section */}
        {/* <div className="flex-1 relative bg-white"> */}
        {/* <div
            ref={mapDiv}
            className="w-full h-full"
            style={{ minHeight: "55vh" }}
          /> */}

        <div className="w-full flex flex-row">
          {/* State List Column */}
          <div className="w-1/3 h-[550px] bg-gray-50 dark:bg-gray-600  flex flex-col">
            {/* State List */}
            <div className="flex-1 overflow-y-auto scrollbar-hide">
              <div className="p-2 ">
                <div className="space-y-2">
                  {states.map((state, idx) => (
                    <div
                      key={state.name}
                      className={`p-2 sm:p-3 rounded-lg cursor-pointer transition-all border ${
                        currentRideIndex === idx
                          ? "bg-blue-50 border-blue-200 shadow-sm"
                          : "bg-white border-gray-200 hover:bg-gray-50"
                      } ${isMoving ? "opacity-50 cursor-not-allowed" : ""}`}
                      onClick={() => {
                        if (!isMoving) {
                          animateBikeToState(idx);
                        }
                      }}
                    >
                      <div className="flex items-center gap-2 sm:gap-3">
                        <div
                          className="w-3 h-3 sm:w-4 sm:h-4 rounded-full flex items-center justify-center text-white font-bold text-[10px] sm:text-xs border-2 border-white shadow-sm"
                          style={{ backgroundColor: state.color }}
                        ></div>
                        <div className="flex-1">
                          <div className="font-medium text-gray-800 text-xs sm:text-sm py-2">
                            {state.name}
                          </div>
                        </div>
                        {currentRideIndex === idx && (
                          <div className="flex items-center gap-1">
                            <BulletBike
                              size={12}
                              className="text-blue-600 size-3 sm:size-4"
                            />
                            <ChevronRight className="h-2 w-2 sm:h-3 sm:w-3 text-blue-600" />
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Details Column */}
          <div className="w-2/3 h-[550px] bg-white dark:bg-gray-900 border-l  flex flex-col">
            {selected ? (
              <>
                {/* Details Header */}
                <div className="p-2 sm:p-4 border-b   bg-blue-50 dark:bg-gray-700 ">
                  <div className="text-center">
                    <h3 className="text-lg sm:text-2xl text-gray-900 dark:text-gray-200">
                      {selected.name}
                    </h3>
                  </div>
                </div>

                {/* Details Content */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide">
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
              <div className="flex-1 flex items-center justify-center p-4 ">
                <div className="text-center">
                  <h3 className="text-base sm:text-lg font-medium text-gray-600 mb-2">
                    Select a State
                  </h3>
                  <p className="text- text-gray-500">
                    Click on a state from the list to view details
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Desktop View */}
      <div className="mx-2 sm:mx-10 mt-10 sm:mt-2 mb-18 hidden lg:block">
        {/* Two Column Layout - 50% Map, 50% State List + Details */}
        <div className="h-[80vh] w-full flex bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Left Half: Map */}
          <div className="w-2/5 relative bg-gray-50">
            <div ref={mapDiv} className="w-full h-full" />
            {/* Loading Overlay */}
            {!ready && (
              <div className="absolute inset-0 bg-white/95 flex items-center justify-center z-50">
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

          {/* Right Half: State List + Details */}
          <div className="w-2/3 flex">
            {/* State List Column */}
            <div className="w-1/3 bg-gray-50 dark:bg-gray-600 border-l  flex flex-col">
              {/* State List */}
              <div className="flex-1 overflow-y-auto scrollbar-hide">
                <div className="py-3 px-4">
                  <div className="space-y-2">
                    {states.map((state, idx) => (
                      <div
                        key={state.name}
                        className={`p-3 rounded-lg cursor-pointer transition-all border ${
                          currentRideIndex === idx
                            ? "bg-blue-50 border-blue-200 shadow-sm"
                            : "bg-white border-gray-200 hover:bg-gray-50"
                        } ${isMoving ? "opacity-50 cursor-not-allowed" : ""}`}
                        onClick={() => {
                          if (!isMoving) {
                            animateBikeToState(idx);
                          }
                        }}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className="w-4 h-4 rounded-full flex items-center justify-center text-white font-bold text-xs border-2 border-white shadow-sm"
                            style={{ backgroundColor: state.color }}
                          ></div>
                          <div className="flex-1">
                            <div className="font-medium text-gray-800 text-sm">
                              {state.name}
                            </div>
                          </div>
                          {currentRideIndex === idx && (
                            <div className="flex items-center gap-1">
                              <BulletBike size={14} className="text-blue-600" />
                              <ChevronRight className="h-3 w-3 text-blue-600" />
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Details Column */}
            <div className="w-2/3 bg-white dark:bg-gray-900 border-l flex flex-col ">
              {selected ? (
                <>
                  {/* Details Header */}
                  <div className="p-4 border-b  dark:bg-gray-700 bg-blue-50">
                    <div className=" ">
                      <div className="">
                        <div className=" text-center  ">
                          <h3 className="text-2xl  text-gray-900 dark:text-gray-200">
                            {selected.name}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Details Content */}
                  <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide">
                    <Section
                      title="Geographical Overview"
                      items={selected.geographical}
                    />
                    <Section
                      title="Water Issues"
                      items={selected.waterissues}
                    />
                    <Section
                      title="Traditional Water Wisdom"
                      items={selected.wisdom}
                    />
                  </div>
                </>
              ) : (
                <div className="flex-1 flex items-center justify-center p-6">
                  <div className="text-center">
                    <Droplets className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-600 mb-2">
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
      </div>

      <style jsx global>{`
        .leaflet-container {
          height: 100%;
          width: 100%;
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
          // background: rgba(0, 0, 0, 0.7);
          // backdrop-filter: blur(4px);
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
      <h4 className="text-sm sm:text-lg font-semibold flex items-center gap-2 text-gray-800  dark:text-gray-200">
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
