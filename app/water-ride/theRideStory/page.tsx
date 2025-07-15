"use client";

import AutoScrollCarousel from "@/components/auto-scroll-carousel";
import Image from "next/image";
import { useEffect, useRef } from "react";

// Define the interface for each journey step
interface JourneyStep {
  time: string;
  title: string;

  description: string[];
  image: string | string[];
}

const journeySteps: JourneyStep[] = [
  {
    time: "Week 1",
    title: "Rajasthan: Learning from Grassroots Innovations",

    description: [
      "Visited the SWRC Centre in Jawaja-Bayawar; interacted with NGO staff on rural water interventions and early childhood education through crèche schools.",
      "Understood the construction of large check dams in remote areas and the importance of community involvement in water projects.",
      "Engaged with the inspiring team at Sheroes Cafe, Udaipur, run by acid attack survivors, promoting dignity and livelihood.",
      "At PEDO, Village Mada (Dungarpur), attended community meetings on livestock health and rainwater harvesting (RWH).",
      "Explored the Maahi Haldi turmeric processing unit and learned about multilayer farming, drip irrigation, and the integration of agriculture with water conservation.",
    ],
    image: [
      "/assets/water-ride/rajasthan/Shortlist_1.jpg",
      "/assets/water-ride/rajasthan/Shortlist_2.jpg",
      "/assets/water-ride/rajasthan/Shortlist_3.jpg",
    ],
  },
  {
    time: "Week 2",
    title: "Gujarat: Exploring Farming & Water Solutions",

    description: [
      "Visited Santrampur with SAARTHI to meet farmers and study water-related challenges in agriculture.",
      "Volunteered at Sardar Patel Farms in Ahmedabad to learn organic farming practices.",
      "Visited Rani ki Vav, a historic example of rainwater harvesting.",
      "Engaged with FES (Foundation for Ecological Security) in Anand to understand water resource and pasture land management.",
    ],
    image: [
      "/assets/water-ride/gujarat/Shortlist_1.jpg",
      "/assets/water-ride/gujarat/Shortlist_2.jpg",
      "/assets/water-ride/gujarat/Shortlist_3.jpg",
    ],
  },
  {
    time: "Week 3",
    title: "Madhya Pradesh: Water Safety & Tribal Knowledge",

    description: [
      "Visited Jhabua with INREM Foundation to study fluoride-affected villages.",
      "Interacted with the local bus union and inaugurated a temple flower composting unit.",
      "Conducted a water session at Krishi Vigyan Kendra.",
      "Visited Petlawad with SAMPARK to engage with tribal students",
      "Explored seed banks and natural farming practices.",
    ],
    image: [
      "/assets/water-ride/mp/Shortlist_1.jpg",
      "/assets/water-ride/mp/Shortlist_2.jpg",
      "/assets/water-ride/mp/Shortlist_3.jpg",
    ],
  },
  {
    time: "Week 4",
    title: "Maharashtra: Community Water Management",

    description: [
      "Visited Dhule and met Mr. Pawar to assess a rainwater harvesting site and inaugurate a canal project.",
      "Visited Deshbandhu Foundation to observe community-led water initiatives.",
      "Visited households in Sakri with rooftop rainwater harvesting systems.",
      "Conducted a water awareness session at an Adivasi hostel in Sakri.",
      "Held an interactive session with police officers in Shanisingnapur on rural water issues.",
      "Visited Hivrebazar and interacted with Shri Popat Rao Pawar to understand local water planning and plantation efforts.",
      "Attended a village development session at Hind Swaraj Trust in Ralegan Siddhi and met Anna ji.",
      "Interacted with village development officers in Solapur to discuss rural water management.",
    ],
    image: [
      "/assets/water-ride/maharashtra/Shortlist_1.jpg",
      "/assets/water-ride/maharashtra/Shortlist_2.jpg",
      "/assets/water-ride/maharashtra/Shortlist_3.jpg",
    ],
  },
  {
    time: "Week 5",
    title: "Karnataka: Infrastructure & Inclusion",
    description: [
      "Visited Tungabhadra Dam and canal systems in Hospet with Mr. Vivek Kumar.",
      "Explored temples and ancient rainwater harvesting structures in Hampi.",
      "Interacted with farmers' union and THAMATE team in Pavagada to understand Dalit farming and water issues.",
    ],
    image: [
      "/assets/water-ride/karnataka/Shortlist_1.jpg",
      "/assets/water-ride/karnataka/Shortlist_2.jpg",
      "/assets/water-ride/karnataka/Shortlist_3.jpg",
    ],
  },
  {
    time: "Week 6",
    title: "Kerala: Traditional Water Wisdom",
    description: [
      "Visited Wayanad with RAASTA to learn about local water interventions.",
      "Observed how deforestation affects streamflow despite high rainfall.",
      "Studied rejuvenation of traditional kulams (ponds) and puzhas (streams)",
    ],
    image: [
      "/assets/water-ride/kerala/Shortlist_1.jpg",
      "/assets/water-ride/kerala/Shortlist_2.jpg",
      "/assets/water-ride/kerala/Shortlist_3.jpg",
    ],
  },
  {
    time: "Week 7",
    title: "Tamil Nadu: Community, Conservation & Culture",
    description: [
      "Interacted with members at Vivekananda Kendra in Kanyakumari to discuss rainwater harvesting.",
      "Visited Abdul Kalam Memorial and Dhanushkodi to understand water issues in saline environments.",
      "Visited the historic Meenakshi Temple in Madurai.",
      "Learned about traditional Eris (tank) systems near the outskirts of Chennai",
    ],
    image: [
      "/assets/water-ride/tamilnadu/Shortlist_1.jpg",
      "/assets/water-ride/tamilnadu/Shortlist_2.jpg",
      "/assets/water-ride/tamilnadu/Shortlist_3.jpg",
    ],
  },
  {
    time: "Week 8",
    title: "Andhra Pradesh: Traditional Storage & Urban Shortages",
    description: [
      "Visited Nellore to study drought conditions and learn about cheruvus (community tanks) for water storage.",
      "Explored Ongole’s drinking water crisis and observed the use of old kunta systems for rainwater harvesting.",
      "Visited Vijayawada, Samarlakota, and Visakhapatnam to understand regional water management practices.",
    ],
    image: [
      "/assets/water-ride/andhrapradesh/Shortlist_1.jpg",
      "/assets/water-ride/andhrapradesh/Shortlist_2.jpg",
      "/assets/water-ride/andhrapradesh/Shortlist_3.jpg",
    ],
  },
  {
    time: "Week 9",
    title: "Odisha: Tribal Outreach & Institutional Engagement",
    description: [
      "Interacted with students at a residential tribal school in Behrampur with GRAM Vikas.",
      "Visited a village where GRAM Vikas implemented gravity-fed piped water and storage systems.",
      "Conducted a session at Kalinga Institute of Social Sciences (KIIT University) in Bhubaneswar on water conservation.",
      "Engaged with students and faculty for knowledge exchange.",
    ],
    image: [
      "/assets/water-ride/odisha/Shortlist_1.jpg",
      "/assets/water-ride/odisha/Shortlist_2.jpg",
      "/assets/water-ride/odisha/Shortlist_3.jpg",
    ],
  },
];

export default function JourneyPage() {
  const pointerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      // Handle pointer movement
      if (pointerRef.current && timelineRef.current) {
        const timelineRect = timelineRef.current.getBoundingClientRect();
        const timelineTop = timelineRect.top + window.scrollY;
        const timelineHeight = timelineRect.height;
        const timelineBottom = timelineTop + timelineHeight;

        // Define the scroll range for the pointer movement
        const startPoint = timelineTop - windowHeight * 0.5; // Start when timeline is halfway into view
        const endPoint = timelineBottom - windowHeight * 0.5; // End when timeline bottom is halfway into view

        // Calculate scroll progress (0 to 1) within the timeline
        const scrollProgress = Math.max(
          0,
          Math.min(1, (scrollPosition - startPoint) / (endPoint - startPoint))
        );

        // Move the pointer along the timeline
        const maxTranslateY = timelineHeight - 16; // Adjust for pointer size (16px height)
        pointerRef.current.style.transform = `translateY(${
          scrollProgress * maxTranslateY
        }px)`;
      }

      // Fade-in effect for sections
      sectionRefs.current.forEach((section) => {
        if (section) {
          const sectionTop = section.getBoundingClientRect().top;
          if (sectionTop < windowHeight * 0.8) {
            section.classList.add("opacity-100", "translate-y-0");
            section.classList.remove("opacity-0", "translate-y-10");
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial position

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen font-sans">
      <div className="max-w-7xl ml-10  px-4 py-4">
        <p className="container w-fit  bg-[#DEE6EB] dark:bg-gray-700 rounded-lg px-2 py-1 text-xs sm:text-sm text-gray-700 dark:text-gray-200 flex items-center mb-4">
          Extraordinary Journey
        </p>
        <h1 className="text-2xl md:text-4xl font-bold text-gray-800 dark:text-gray-200">
          The Ride Story
        </h1>
      </div>

      {/* Main Content */}
      <main className="pt-6 pb-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Timeline Line and Pointer */}
          <div
            ref={timelineRef}
            className="absolute left-4 md:left-8 top-0 h-full w-1 "
          >
            <Image src="/Group 49.png" alt="Route" fill />
            <div
              ref={pointerRef}
              className="absolute left-[-6px] w-4 h-4 rounded-full shadow-md transition-transform duration-300"
            >
              <Image src="/Group 48.png" alt="" fill />
            </div>
          </div>

          {/* Timeline Sections */}
          <div className="space-y-16 md:space-y-8 pl-12 md:pl-20">
            {journeySteps.map((step, index) => (
              <div
                key={index}
                ref={(el) => {
                  sectionRefs.current[index] = el;
                }}
                className="flex flex-col md:flex-row items-start opacity-0 translate-y-8 transition-all duration-700 ease-out"
              >
                {/* Text Content */}
                <div className="md:w-2/3 mb-6 md:mb-0">
                  {/* Time Marker */}
                  <div className="mb-4 bg-[#538C7B] dark:bg-gray-700 container w-fit py-1 px-2 text-white rounded-full">
                    {step.time}
                  </div>
                  <h2 className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                    {step.title}
                  </h2>
                  <ul className="list-disc pl-6 text-gray-700 dark:text-gray-400 space-y-1">
                    {step.description.map((description, idx) => (
                      <li key={idx} className="text-indent-negative">
                        {description}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Image */}
                <div className="w-full md:w-1/3 md:ml-8">
                  <div className="w-full h-auto  aspect-square md:h-auto relative py-10 justify-center items-center rounded-lg ">
                    <AutoScrollCarousel
                      images={
                        Array.isArray(step.image) ? step.image : [step.image]
                      }
                      height="280px"
                      autoScrollInterval={3000}
                      imageClassName="rounded-lg"
                      containerClassName="rounded-lg "
                      pauseOnHover={true}
                      loop={true}
                      transitionDuration={500}
                      // objectFit="cover"
                      className="w-full h-full rounded-t-lg"
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                    />
                    {/* <Image
                      src={step.image || "/placeholder.svg"}
                      alt={step.title}
                      fill
                      className=" w-full h-full  rounded-lg transition-opacity  duration-500 hover:opacity-90"
                    /> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
