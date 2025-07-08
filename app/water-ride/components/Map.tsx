"use client";

import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/badge";
import {
  X,
  Route,
  MapPin,
  Droplets,
  Play,
  Pause,
  SkipForward,
  Loader2,
  Satellite,
  Map,
  Menu,
  ChevronUp,
  ChevronDown,
} from "lucide-react";

/* -------------------------------------------------------------------------- */
/*  DATA                                                                      */
/* -------------------------------------------------------------------------- */

const states = [
  {
    name: "Rajasthan",
    coordinates: { lat: 27.0238, lng: 74.2179 },
    color: "#DC2626",
    region: "Northwestern India",

    rideDistance: "0 km",
    nextStop: "Gujarat",
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
    color: "#059669",
    region: "Western India",

    rideDistance: "520 km",
    nextStop: "Madhya Pradesh",
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
    color: "#7C3AED",
    region: "Central India",

    rideDistance: "380 km",
    nextStop: "Maharashtra",
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
    coordinates: { lat: 19.7515, lng: 75.7139 },
    color: "#EA580C",
    region: "Western India",

    rideDistance: "290 km",
    nextStop: "Karnataka",
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
    color: "#0891B2",
    region: "Southern India",

    rideDistance: "340 km",
    nextStop: "Kerala",
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
    color: "#16A34A",
    region: "Southern India",

    rideDistance: "280 km",
    nextStop: "Tamil Nadu",
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
    color: "#BE185D",
    region: "Southern India",

    rideDistance: "320 km",
    nextStop: "Andhra Pradesh",
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
    color: "#9333EA",
    region: "Southern India",

    rideDistance: "410 km",
    nextStop: "Odisha",
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
    color: "#0D9488",
    region: "Eastern India",

    rideDistance: "480 km",
    nextStop: "Journey Complete!",
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
  stepwell: { color: "#DC2626", weight: 5, dashArray: "20,10" },
  tribal: { color: "#059669", weight: 4, dashArray: "15,5,5,5" },
  tank: { color: "#7C3AED", weight: 5, dashArray: null },
  ghats: { color: "#EA580C", weight: 4, dashArray: "10,5" },
  temple: { color: "#0891B2", weight: 5, dashArray: "25,10" },
  coastal: { color: "#16A34A", weight: 4, dashArray: "5,5" },
  cascade: { color: "#BE185D", weight: 5, dashArray: "15,10,5,10" },
  river: { color: "#0D9488", weight: 6, dashArray: null },
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
  const [selected, setSelected] = useState<(typeof states)[0] | null>(null);
  const [ready, setReady] = useState(false);
  const [showRoutes, setShowRoutes] = useState(true);
  const [currentRideIndex, setCurrentRideIndex] = useState(0);
  const [isRiding, setIsRiding] = useState(false);
  const [mapError, setMapError] = useState<string | null>(null);
  const [mapStyle, setMapStyle] = useState<"satellite" | "street">("satellite");
  const [isMoving, setIsMoving] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [detailsExpanded, setDetailsExpanded] = useState(false);

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
          center: [22.5, 80],
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
              // attribution:
              //   "© Esri — Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community",
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
      // Create the bike icon with proper SVG and correct orientation
      const bikeIcon = window.L.divIcon({
        className: "moving-bike-marker",
        html: `
          <div class="bike-container">
            <div class="bike-shadow"></div>
            <div class="bike-body">
              <svg width="36" height="24" viewBox="0 0 100 60" fill="none" class="bike-svg">
                <!-- Flipped bike to face right direction -->
                <ellipse cx="50" cy="35" rx="35" ry="8" fill="#2563eb" />
                <rect x="25" y="20" width="50" height="15" rx="7" fill="#1d4ed8" />
                <ellipse cx="35" cy="25" rx="15" ry="5" fill="#374151" />
                <!-- Front wheel (now on right) -->
                <circle cx="80" cy="45" r="12" fill="#1f2937" stroke="#374151" strokeWidth="2" />
                <circle cx="80" cy="45" r="6" fill="#6b7280" />
                <!-- Rear wheel (now on left) -->
                <circle cx="20" cy="45" r="12" fill="#1f2937" stroke="#374151" strokeWidth="2" />
                <circle cx="20" cy="45" r="6" fill="#6b7280" />
                <!-- Handlebars (now on right) -->
                <line x1="85" y1="25" x2="75" y2="30" stroke="#374151" strokeWidth="3" strokeLinecap="round" />
                <!-- Exhaust (now on left) -->
                <rect x="10" y="40" width="20" height="4" rx="2" fill="#6b7280" />
                <!-- Engine -->
                <rect x="45" y="35" width="20" height="10" rx="2" fill="#374151" />
              </svg>
            </div>
            <div class="bike-trail"></div>
          </div>
        `,
        iconSize: [48, 32],
        iconAnchor: [24, 16],
      });

      // Create a marker with the icon and add it to the map
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
              <div class="marker-glow" style="background: ${s.color}40;"></div>
              <div class="marker-core" style="background: ${s.color};">
                <span class="marker-number">.</span>
              </div>
              <div class="marker-pulse" style="border-color: ${s.color};"></div>
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

    const steps = 60; // Increased steps for smoother movement
    const latStep = (endLat - startLat) / steps;
    const lngStep = (endLng - startLng) / steps;

    let currentStep = 0;

    // Calculate bearing for bike rotation (in degrees)
    const bearing = calculateBearing(startLat, startLng, endLat, endLng);

    // Show journey completion message when returning to Rajasthan
    const isCompletingCycle =
      targetIndex === 0 && currentRideIndex === states.length - 1;

    const animationInterval = setInterval(() => {
      if (currentStep >= steps) {
        clearInterval(animationInterval);
        setCurrentRideIndex(targetIndex);
        setSelected(targetState);
        setIsMoving(false);

        // Final position and zoom
        mapRef.current.setView([endLat, endLng], 8, {
          animate: true,
          duration: 1,
        });

        // Show completion message if we just completed a full cycle
        if (isCompletingCycle) {
          console.log(
            "🎉 Journey cycle completed! Starting new adventure from Rajasthan..."
          );
        }

        return;
      }

      const currentLat = startLat + latStep * currentStep;
      const currentLng = startLng + lngStep * currentStep;

      // Calculate progress for smooth easing
      const progress = currentStep / steps;
      const easedProgress = 1 - Math.pow(1 - progress, 3); // Ease-out cubic

      // Update bike position with proper rotation and alignment
      const bikeIcon = window.L.divIcon({
        className: "moving-bike-marker",
        html: `
  <div class="bike-container" style="transform: rotate(${bearing}deg);">
    <div class="bike-shadow"></div>
    <div class="bike-body moving">
      <svg width="36" height="24" viewBox="0 0 100 60" fill="none" class="bike-svg">
        <!-- Corrected bike orientation -->
        <ellipse cx="50" cy="35" rx="35" ry="8" fill="#2563eb" />
        <rect x="25" y="20" width="50" height="15" rx="7" fill="#1d4ed8" />
        <ellipse cx="35" cy="25" rx="15" ry="5" fill="#374151" />
        <!-- Front wheel (right side) -->
        <circle cx="80" cy="45" r="12" fill="#1f2937" stroke="#374151" strokeWidth="2" />
        <circle cx="80" cy="45" r="6" fill="#6b7280" class="wheel-spin" />
        <!-- Rear wheel (left side) -->
        <circle cx="20" cy="45" r="12" fill="#1f2937" stroke="#374151" strokeWidth="2" />
        <circle cx="20" cy="45" r="6" fill="#6b7280" class="wheel-spin" />
        <!-- Handlebars (right side) -->
        <line x1="85" y1="25" x2="75" y2="30" stroke="#374151" strokeWidth="3" strokeLinecap="round" />
        <!-- Exhaust (left side) -->
        <rect x="10" y="40" width="20" height="4" rx="2" fill="#6b7280" />
        <!-- Engine -->
        <rect x="45" y="35" width="20" height="10" rx="2" fill="#374151" />
      </svg>
    </div>
    <div class="bike-trail" style="opacity: ${easedProgress}"></div>
    ${
      isCompletingCycle && currentStep > steps * 0.8
        ? '<div class="completion-sparkle">✨</div>'
        : ""
    }
  </div>
`,
        iconSize: [48, 32],
        iconAnchor: [24, 16],
      });

      movingBikeRef.current.setIcon(bikeIcon);
      movingBikeRef.current.setLatLng([currentLat, currentLng]);

      // Follow the bike with camera (less frequent updates for smoother experience)
      if (currentStep % 8 === 0) {
        mapRef.current.panTo([currentLat, currentLng]);
      }

      currentStep++;
    }, 60); // Slightly slower for better visual tracking
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
      if (!isRiding) return; // Stop if riding was paused

      const nextIndex = (currentRideIndex + 1) % states.length;

      // If we're completing the full cycle (going back to Rajasthan)
      if (nextIndex === 0 && currentRideIndex === states.length - 1) {
        // Animate to Rajasthan
        animateBikeToState(nextIndex);

        // After reaching Rajasthan, wait a bit longer before starting next cycle
        setTimeout(() => {
          if (isRiding) {
            rideToNextState();
          }
        }, 8000); // 8 seconds at Rajasthan before starting new cycle
      } else {
        // Normal state transition
        animateBikeToState(nextIndex);

        // Schedule next movement
        setTimeout(() => {
          if (isRiding) {
            rideToNextState();
          }
        }, 6000); // 6 seconds between normal states
      }
    };

    // Start the first movement after a short delay
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

  const nextState = () => {
    if (!isMoving) {
      const next = (currentRideIndex + 1) % states.length;
      animateBikeToState(next);
    }
  };

  const reset = () => {
    stopAutoRide();
    if (mapRef.current) {
      mapRef.current.setView([22.5, 80], 5, { animate: true, duration: 1.5 });
    }
    setSelected(null);
    setCurrentRideIndex(0);
    if (movingBikeRef.current) {
      movingBikeRef.current.setLatLng([
        states[0].coordinates.lat,
        states[0].coordinates.lng,
      ]);

      // Reset bike rotation to default with corrected orientation
      const resetBikeIcon = window.L.divIcon({
        className: "moving-bike-marker",
        html: `
    <div class="bike-container">
      <div class="bike-shadow"></div>
      <div class="bike-body">
        <svg width="36" height="24" viewBox="0 0 100 60" fill="none" class="bike-svg">
          <!-- Corrected default bike orientation -->
          <ellipse cx="50" cy="35" rx="35" ry="8" fill="#2563eb" />
          <rect x="25" y="20" width="50" height="15" rx="7" fill="#1d4ed8" />
          <ellipse cx="35" cy="25" rx="15" ry="5" fill="#374151" />
          <!-- Front wheel (right side) -->
          <circle cx="80" cy="45" r="12" fill="#1f2937" stroke="#374151" strokeWidth="2" />
          <circle cx="80" cy="45" r="6" fill="#6b7280" />
          <!-- Rear wheel (left side) -->
          <circle cx="20" cy="45" r="12" fill="#1f2937" stroke="#374151" strokeWidth="2" />
          <circle cx="20" cy="45" r="6" fill="#6b7280" />
          <!-- Handlebars (right side) -->
          <line x1="85" y1="25" x2="75" y2="30" stroke="#374151" strokeWidth="3" strokeLinecap="round" />
          <!-- Exhaust (left side) -->
          <rect x="10" y="40" width="20" height="4" rx="2" fill="#6b7280" />
          <!-- Engine -->
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

  const toggleRoutes = () => {
    setShowRoutes((v) => !v);
    polylines.current.forEach((p) =>
      p.setStyle({ opacity: showRoutes ? 0 : 0.8 })
    );
  };

  const changeMapStyle = (style: "satellite" | "street") => {
    if (!mapRef.current || !layersRef.current) return;

    // Remove current layer
    Object.values(layersRef.current).forEach((layer: any) => {
      mapRef.current.removeLayer(layer);
    });

    // Add new layer
    layersRef.current[style].addTo(mapRef.current);
    setMapStyle(style);
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
    <div className="mx-2 sm:mx-10 mt-10 sm:mt-2 mb-24">
      <div>
        <p className="container mx-auto bg-[#DEE6EB] w-fit rounded-xl px-2 sm:px-4 py-1 mt-10 sm:mt-20 text-gray-700 flex items-center text-xs sm:text-base">
          Impact
        </p>
        <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl mt-4 text-center mb-6 px-4">
          Our Impact Across India
        </h2>
      </div>
      <div className="h-screen w-full flex flex-col lg:flex-row bg-gray-100">
        {/* Mobile Header */}
        {/* <div className="lg:hidden bg-white border-b border-gray-200 p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <BulletBike size={32} className="text-blue-600" />
            <div>
              <h1 className="text-lg font-bold text-gray-800">
                Water Heritage Ride
              </h1>
              <p className="text-xs text-gray-600">
                Journey through India's water wisdom
              </p>
            </div>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="lg:hidden"
          >
            <Menu className="h-4 w-4" />
          </Button>
        </div> */}

        {/* Map Section */}
        <div className="flex-1 relative bg-white">
          <div
            ref={mapDiv}
            className="w-full h-full"
            style={{ minHeight: "55vh" }}
          />

          {/* Loading Overlay */}
          {!ready && (
            <div className="absolute inset-0 bg-white/90 flex items-center justify-center z-50">
              <div className="text-center p-4">
                <div className="relative mb-6">
                  <Loader2 className="h-12 w-12 animate-spin text-blue-500 mx-auto" />
                  <BulletBike
                    size={24}
                    className="absolute inset-0 m-auto text-blue-600"
                  />
                </div>
                <h2 className="text-xl lg:text-2xl font-bold text-gray-800 mb-2">
                  Loading Water Heritage Map
                </h2>
                <p className="text-sm lg:text-base text-gray-600">
                  Preparing your journey across India...
                </p>
              </div>
            </div>
          )}

          {/* Map Style Toggle */}
          <div className="absolute top-4 left-4 z-50">
            <Card className=" backdrop-blur-sm shadow-lg border">
              <CardContent className="">
                <div className="flex gap-1">
                  <Button
                    variant={mapStyle === "satellite" ? "default" : "outline"}
                    size="sm"
                    onClick={() => changeMapStyle("satellite")}
                    className="flex items-center gap-1 text-xs lg:text-sm"
                  >
                    <Satellite className="h-3 w-3" />
                    <span className="hidden sm:inline">Satellite</span>
                  </Button>
                  <Button
                    variant={mapStyle === "street" ? "default" : "outline"}
                    size="sm"
                    onClick={() => changeMapStyle("street")}
                    className="flex items-center gap-1 text-xs lg:text-sm"
                  >
                    <Map className="h-3 w-3" />
                    <span className="hidden sm:inline">Street</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Map Controls */}
          <div className="absolute bottom-4 left-4 z-40">
            <Card className="bg-white/95 backdrop-blur-sm shadow-lg border">
              <CardContent className="p-2 lg:p-3 space-y-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={reset}
                  className="w-full bg-transparent text-xs lg:text-sm"
                >
                  <MapPin className="h-3 w-3 lg:h-4 lg:w-4 mr-1 lg:mr-2" />
                  Reset
                </Button>
                <Button
                  variant={showRoutes ? "default" : "outline"}
                  size="sm"
                  onClick={toggleRoutes}
                  className="w-full text-xs lg:text-sm"
                >
                  <Route className="h-3 w-3 lg:h-4 lg:w-4 mr-1 lg:mr-2" />
                  Routes
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Movement Status */}
          {isMoving && (
            <div className="absolute top-4 right-4 z-40">
              <Card className="bg-blue-500 text-white shadow-lg border-0">
                <CardContent className="p-2 lg:p-3 flex items-center gap-2">
                  <BulletBike size={16} className="animate-pulse" />
                  <span className="text-xs lg:text-sm font-medium">
                    Riding...
                  </span>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Mobile Quick Controls */}
          <div className="lg:hidden absolute bottom-4 right-4 z-40">
            <div className="flex flex-col gap-2 ">
              <Button
                variant={isRiding ? "secondary" : "default"}
                size="sm"
                onClick={isRiding ? stopAutoRide : startAutoRide}
                disabled={isMoving}
                className="flex items-center gap-2 "
              >
                {isRiding ? (
                  <Pause className="h-4 w-4" />
                ) : (
                  <Play className="h-4 w-4" />
                )}
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={nextState}
                disabled={isMoving}
              >
                <SkipForward className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Details Panel */}
        <div className="lg:hidden">
          {/* Expandable Details Toggle */}
          <div className="bg-white border-t border-gray-300  ">
            <div className="flex items-center gap-3">
              <BulletBike size={20} className="text-blue-600" />
              <div>
                <div className="font-semibold text-gray-800">
                  Current: {states[currentRideIndex]?.name}
                </div>
                <div className="text-xs text-gray-600">
                  Stop {currentRideIndex + 1} of {states.length}
                </div>
              </div>
            </div>
            {/* {detailsExpanded ? (
              <ChevronDown className="h-4 w-4" />
            ) : (
              <ChevronUp className="h-4 w-4" />
            )} */}
          </div>

          {/* Expandable Details Content */}

          <div className="bg-white border-t border-gray-200 max-h-80 overflow-y-auto scrollbar-hide">
            {/* Ride Controls */}
            <div className="p-4 border-b border-gray-200">
              <div className="flex gap-2 mb-3">
                <Button
                  variant={isRiding ? "secondary" : "default"}
                  size="sm"
                  onClick={isRiding ? stopAutoRide : startAutoRide}
                  className="flex items-center gap-2 flex-1 text-xs"
                  disabled={isMoving}
                >
                  {isRiding ? (
                    <Pause className="h-3 w-3" />
                  ) : (
                    <Play className="h-3 w-3" />
                  )}
                  {isRiding ? "Pause" : "Start"} Auto Ride
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={nextState}
                  disabled={isMoving}
                >
                  <SkipForward className="h-3 w-3" />
                </Button>
              </div>

              {/* Journey Progress */}
              <div className="mb-3">
                <div className="flex justify-between text-xs text-gray-600 mb-1">
                  <span>Journey Progress</span>
                  <span>
                    {currentRideIndex + 1}/{states.length}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                    style={{
                      width: `${
                        ((currentRideIndex + 1) / states.length) * 100
                      }%`,
                    }}
                  ></div>
                </div>
              </div>
            </div>

            {/* State List */}
            <div className="p-4">
              {/* <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2 text-sm">
                  <Droplets className="h-4 w-4 text-blue-600" />
                  Journey Stops
                </h3> */}
              <div
                className={`space-y-2 ${
                  selected
                    ? "max-h-18 overflow-y-auto" // Show only ~2 states when details are visible
                    : "max-h-64 overflow-y-auto" // Show more states when no details
                }`}
              >
                {states.map((state, idx) => (
                  <div
                    key={state.name}
                    className={`p-3 rounded-lg cursor-pointer transition-all border ${
                      currentRideIndex === idx
                        ? "bg-blue-50 border-blue-200 shadow-sm"
                        : "bg-gray-50 border-gray-200 hover:bg-gray-100"
                    } ${isMoving ? "opacity-50 cursor-not-allowed" : ""}`}
                    onClick={() => {
                      if (!isMoving) {
                        animateBikeToState(idx);
                        // Close details after selection
                      }
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="w-6 h-6 rounded-full flex items-center justify-center text-white font-bold text-xs"
                        style={{ backgroundColor: state.color }}
                      >
                        {/* {idx + 1} */}
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-gray-800 text-sm">
                          {state.name}
                        </div>
                        <div className="text-gray-600 text-xs">
                          {state.rideDistance}
                        </div>
                      </div>
                      {currentRideIndex === idx && (
                        <BulletBike size={16} className="text-blue-600" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Selected State Details */}
            {selected && (
              <div className="border-t border-gray-200 bg-gray-50 p-4">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex-1">
                    <h3 className="text-base font-bold text-gray-800 mb-1">
                      {selected.name}
                    </h3>
                    {/* <Badge variant="secondary" className="mb-2 text-xs">
                        <Droplets className="h-3 w-3 mr-1" />
                        {selected.systems} Systems
                      </Badge>
                      <p className="text-xs text-blue-700 mb-2">
                        {selected.rideStory}
                      </p> */}
                    {/* <div className="space-y-1 text-xs text-gray-600">
                      <div>📍 {selected.region}</div>
                      <div>🛣️ {selected.rideDistance}</div>
                      <div>➡️ Next: {selected.nextStop}</div>
                    </div> */}
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSelected(null)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>

                <div className="space-y-3">
                  <Section
                    title="Geographical Overview"
                    colour="#10b981"
                    items={selected.geographical}
                  />
                  <Section
                    title="Water Issues"
                    colour="#ef4444"
                    items={selected.waterissues}
                  />
                  <Section
                    title="Traditional Water Wisdom"
                    colour="#3b82f6"
                    items={selected.wisdom}
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Desktop Sidebar Section */}
        <div
          className={`
        ${sidebarOpen ? "translate-x-0" : "translate-x-full lg:translate-x-0"}
        fixed lg:relative top-0 right-0 h-full w-full sm:w-96 lg:w-96 
        bg-white dark:bg-gray-900 border-l border-gray-200 flex-col shadow-lg z-50
        transition-transform duration-300 ease-in-out
        hidden lg:flex
      `}
        >
          {/* Sidebar Header */}
          {/* <div className="p-4 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-green-50">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
              <BulletBike size={28} className="text-blue-600" />
              <div>
                <h1 className="text-lg lg:text-xl font-bold text-gray-800">
                  Water Heritage Ride
                </h1>
                <p className="text-xs lg:text-sm text-gray-600">
                  Journey through India's water wisdom
                </p>
              </div>
            </div>
            </div>
          </div> */}

          {/* Ride Controls */}
          <div className="p-4 border-b border-gray-200">
            <div className="flex gap-2 mb-3">
              <Button
                variant={isRiding ? "secondary" : "default"}
                size="sm"
                onClick={isRiding ? stopAutoRide : startAutoRide}
                className="flex items-center gap-2 flex-1 text-xs lg:text-sm"
                disabled={isMoving}
              >
                {isRiding ? (
                  <Pause className="h-3 w-3 lg:h-4 lg:w-4" />
                ) : (
                  <Play className="h-3 w-3 lg:h-4 lg:w-4" />
                )}
                {isRiding ? "Pause" : "Start"} Auto Ride
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={nextState}
                disabled={isMoving}
              >
                <SkipForward className="h-3 w-3 lg:h-4 lg:w-4" />
              </Button>
            </div>

            {/* Journey Progress */}
            <div className="mb-3">
              <div className="flex justify-between text-xs text-gray-600 dark:text-gray-300 mb-1">
                <span>Journey Progress</span>
                <span>
                  {currentRideIndex + 1}/{states.length}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                  style={{
                    width: `${((currentRideIndex + 1) / states.length) * 100}%`,
                  }}
                ></div>
              </div>
              {currentRideIndex === states.length - 1 && (
                <div className="text-xs text-green-600 mt-1 flex items-center gap-1">
                  🎉 Ready to complete the cycle!
                </div>
              )}
            </div>

            <div className="text-sm">
              <div className="font-semibold text-gray-800 dark:text-gray-300">
                Current Stop: {states[currentRideIndex]?.name}
              </div>
              <div className="text-gray-600 dark:text-gray-400 text-xs lg:text-sm">
                Stop {currentRideIndex + 1} of {states.length}
                {isRiding && !isMoving && (
                  <span className="text-blue-600 ml-2">
                    {currentRideIndex === states.length - 1
                      ? "→ Returning to Rajasthan"
                      : `→ Next: ${
                          states[(currentRideIndex + 1) % states.length]?.name
                        }`}
                  </span>
                )}
              </div>
              {isMoving && (
                <div className="text-blue-600 text-xs mt-1 flex items-center gap-1">
                  <BulletBike size={12} />
                  {currentRideIndex === states.length - 1 &&
                  (currentRideIndex + 1) % states.length === 0
                    ? "Completing journey cycle..."
                    : "Moving to next destination..."}
                </div>
              )}
            </div>
          </div>

          {/* State List */}
          <div className="flex-1 overflow-y-auto">
            <div className="p-4">
              {/* <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2 text-sm lg:text-base">
              <Droplets className="h-4 w-4 text-blue-600" />
              Journey Stops
            </h3> */}
              <div className="space-y-2">
                {states.map((state, idx) => (
                  <div
                    key={state.name}
                    className={`p-3 rounded-lg cursor-pointer transition-all border ${
                      currentRideIndex === idx
                        ? "bg-blue-50 dark:bg-gray-300 border-blue-200 shadow-sm"
                        : "bg-gray-50 dark:bg-gray-200 border-gray-200 hover:bg-gray-100"
                    } ${isMoving ? "opacity-50 cursor-not-allowed" : ""}`}
                    onClick={() => {
                      if (!isMoving) {
                        animateBikeToState(idx);
                      }
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="w-6 h-6 lg:w-8 lg:h-8 rounded-full flex items-center justify-center text-white font-bold text-xs lg:text-sm"
                        style={{ backgroundColor: state.color }}
                      >
                        {/* {idx + 1} */}
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-gray-800 text-sm">
                          {state.name}
                        </div>
                        <div className="text-gray-600 text-xs">
                          {state.rideDistance}
                        </div>
                      </div>
                      {currentRideIndex === idx && (
                        <BulletBike size={16} className="text-blue-600" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Selected State Details */}
          {selected && (
            <div className="border-t border-gray-200 bg-gray-50 dark:bg-gray-300">
              <div className="p-4">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex-1">
                    <h3 className="text-base lg:text-lg font-bold text-gray-800 dark:text-gray-900 mb-1">
                      {selected.name}
                    </h3>
                    {/* <Badge variant="secondary" className="mb-2 text-xs">
                      <Droplets className="h-3 w-3 mr-1" />
                      {selected.systems} Systems
                    </Badge>
                    <p className="text-xs lg:text-sm text-blue-700 mb-2">
                      {selected.rideStory}
                    </p>
                    <div className="space-y-1 text-xs text-gray-600">
                      <div>📍 {selected.region}</div>
                    <div>🛣️ {selected.rideDistance}</div>
                    <div>➡️ Next: {selected.nextStop}</div>
                    </div> */}
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSelected(null)}
                  >
                    <X className="h-4 w-4 dark:text-gray-900" />
                  </Button>
                </div>

                <div className="space-y-3 max-h-auto overflow-y-auto ">
                  <Section
                    title="Geographical Overview"
                    colour="#10b981"
                    items={selected.geographical}
                  />
                  <Section
                    title="Water Issues"
                    colour="#ef4444"
                    items={selected.waterissues}
                  />
                  <Section
                    title="Traditional Water Wisdom"
                    colour="#3b82f6"
                    items={selected.wisdom}
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Mobile Sidebar Overlay */}
        {sidebarOpen && (
          <div
            className="lg:hidden fixed inset-0 bg-black/50 z-40"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        <style jsx global>{`
          .leaflet-container {
            height: 100%;
            width: 100%;
          }

          .state-name-label {
            // background: rgba(0, 0, 0, 0.7);
            color: white;
            padding: 6px 8px;
            border-radius: 10px;
            font-weight: bold;
            font-size: 11px;
            text-align: center;
            // border: 1px solid rgba(255, 255, 255, 0.3);
            // backdrop-filter: blur(10px);
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
            white-space: nowrap;
          }

          .marker-container {
            position: relative;
            width: 50px;
            height: 50px;
          }

          // .marker-glow {
          //   position: absolute;
          //   width: 50px;
          //   height: 50px;
          //   border-radius: 50%;
          //   animation: pulse-glow 2s infinite;
          // }

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

          // .marker-number {
          //   color: white;
          //   font-weight: bold;
          //   font-size: 2px;
          //   text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
          // }

          .marker-pulse {
            position: absolute;
            width: 50px;
            height: 50px;
            border: 2px solid;
            border-radius: 50%;
            animation: pulse-ring 2s infinite;
            opacity: 0;
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

          // .bike-trail {
          //   position: absolute;
          //   top: 50%;
          //   left: -24px;
          //   width: 24px;
          //   height: 3px;
          //   background: linear-gradient(
          //     90deg,
          //     transparent,
          //     rgba(59, 130, 246, 0.8),
          //     rgba(59, 130, 246, 0.4)
          //   );
          //   border-radius: 2px;
          //   animation: trail-fade 0.6s ease-out infinite;
          //   transform: translateY(-50%);
          // }

          // @keyframes pulse-glow {
          //   0%,
          //   100% {
          //     transform: scale(0);
          //     opacity: 0.7;
          //   }
          //   50% {
          //     transform: scale(0);
          //     opacity: 0.3;
          //   }
          // }

          // @keyframes pulse-ring {
          //   0% {
          //     transform: scale(0.8);
          //     opacity: 1;
          //   }
          //   100% {
          //     transform: scale(1.0);
          //     opacity: 0;
          //   }
          // }

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

          @keyframes trail-fade {
            0% {
              opacity: 0.9;
              transform: translateY(-50%) scaleX(1);
            }
            100% {
              opacity: 0;
              transform: translateY(-50%) scaleX(0.3);
            }
          }

          .completion-sparkle {
            position: absolute;
            top: -12px;
            right: -12px;
            font-size: 18px;
            animation: sparkle 1s ease-in-out infinite;
            z-index: 15;
          }

          @keyframes sparkle {
            0%,
            100% {
              transform: scale(1) rotate(0deg);
              opacity: 1;
            }
            50% {
              transform: scale(1.3) rotate(180deg);
              opacity: 0.7;
            }
          }

          @media (max-width: 1024px) {
            .state-name-label {
              font-size: 10px;
              padding: 3px 6px;
            }

            .marker-container {
              width: 40px;
              height: 40px;
            }

            .marker-core {
              top: 8px;
              left: 8px;
              width: 24px;
              height: 24px;
            }

            .marker-number {
              font-size: 1px;
            }

            .bike-container {
              width: 40px;
              height: 28px;
            }

            .bike-body svg {
              width: 30px;
              height: 20px;
            }
          }
        `}</style>
      </div>
    </div>
  );
}

function Section({
  title,
  items,
  colour,
}: {
  title: string;
  items: string[];
  colour: string;
}) {
  return (
    <div>
      <h4 className="text-xs font-semibold mb-2 flex items-center gap-2 text-gray-700">
        <span
          className="w-2 h-2 rounded-full"
          style={{ backgroundColor: colour }}
        />
        {title}
      </h4>
      <ul className="space-y-1">
        {items.map((item, idx) => (
          <li
            key={idx}
            className="text-xs text-gray-600 flex items-start gap-2"
          >
            <span className="w-1 h-1 rounded-full bg-gray-400 mt-1.5 flex-shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
