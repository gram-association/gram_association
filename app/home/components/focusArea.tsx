import { useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";

const FocusAreas = () => {
  const imageRef = useRef<HTMLImageElement | null>(null);
  const iconRefs = useRef<Array<HTMLImageElement | null>>([]);
  const [lines, setLines] = useState<
    Array<{ startX: number; startY: number; endX: number; endY: number }>
  >([]);

  // Example coordinates for the 5 Es in the image (relative to the image's top-left corner)
  const imagePoints = [
    { x: 400, y: 70 }, // Entrepreneurship
    { x: 466, y: 160 }, // Enrichment
    { x: 500, y: 260 }, // Enablement
    { x: 480, y: 370 }, // Education
    { x: 440, y: 470 }, // Environment
  ];

  const updateLines = () => {
    if (!imageRef.current || iconRefs.current.some((ref) => !ref)) {
      console.log("Missing refs:", {
        imageRef: !!imageRef.current,
        iconRefsAssigned: iconRefs.current.map((ref, i) => !!ref),
      });
      return false;
    }

    const imageRect = imageRef.current.getBoundingClientRect();
    const newLines = iconRefs.current.map((iconRef, index) => {
      if (!iconRef) return null;
      const iconRect = iconRef.getBoundingClientRect();
      // Start point: right edge of the icon, vertically centered
      const startX = iconRect.left + iconRect.width / 8;
      const startY = iconRect.top + iconRect.height / 2;
      // End point: specific point in the image (adjusted to viewport coordinates)
      const endX =
        imageRect.left + (imagePoints[index].x * imageRect.width) / 576;
      const endY =
        imageRect.top + (imagePoints[index].y * imageRect.height) / 576;

      return { startX, startY, endX, endY };
    });

    if (newLines.some((line) => !line)) {
      console.log("Some lines are null:", newLines);
      return false;
    }

    setLines(
      newLines as {
        startX: number;
        startY: number;
        endX: number;
        endY: number;
      }[]
    );
    return true;
  };

  useLayoutEffect(() => {
    let animationFrameId: number; // Declare animationFrameId in the outer scope

    // Try updating lines immediately
    let success = updateLines();

    // Fallback: retry if refs are not ready
    if (!success) {
      const retry = () => {
        if (updateLines()) {
          cancelAnimationFrame(animationFrameId);
        } else {
          animationFrameId = requestAnimationFrame(retry);
        }
      };
      animationFrameId = requestAnimationFrame(retry);
    }

    // Update lines on resize
    window.addEventListener("resize", updateLines);
    return () => {
      window.removeEventListener("resize", updateLines);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="min-h-screen py-8 md:py-16 text-center bg-white dark:bg-gray-900 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="inline-block bg-[#DEE6EB] dark:bg-gray-700 rounded-lg px-2 py-1 text-sm text-gray-700 dark:text-gray-200 mb-4 md:mb-6">
          Our Focus Areas
        </p>
        <h2 className="text-2xl md:text-3xl font-epilogue text-start mb-6 md:mb-8 text-gray-900 dark:text-gray-100">
          THE 5 Es
        </h2>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center md:space-x-4 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="hidden md:block relative">
          <Image
            ref={imageRef}
            src="/5es image.png"
            alt="5 Es Illustration"
            width={250}
            height={250}
            className="w-full max-w-[576px] h-auto mr-20"
          />
        </div>
        <div className="space-y-4 text-left w-full md:w-1/2 ml-30">
          <svg
            className="absolute top-0 left-0 w-full h-full pointer-events-none"
            style={{ zIndex: 10 }}
          >
            {lines.map((line, index) => (
              <line
                key={index}
                x1={line.startX}
                y1={line.startY}
                x2={line.endX}
                y2={line.endY}
                stroke="gray"
                strokeWidth="2"
              />
            ))}
          </svg>
          {[
            {
              icon: "/Group 6.png",
              title: "Entrepreneurship",
              desc: "Fostering a spirit of innovation, ownership, and initiative to drive sustainable change",
            },
            {
              icon: "/Group 8.png",
              title: "Enrichment",
              desc: "Developing learning opportunities that help people grow and uplift communities within their society",
            },
            {
              icon: "/Group 7.png",
              title: "Enablement",
              desc: "Enabling individuals and communities to serve themselves, instilling confidence and driving a positive impact",
            },
            {
              icon: "/Group 9.png",
              title: "Education",
              desc: "Equipping individuals with knowledge and skills to foster personal and community development",
            },
            {
              icon: "/Group 10.png",
              title: "Environment",
              desc: "Promoting sustainable practices and environmental consciousness for future generations",
            },
          ].map((item, index) => (
            <div key={index} className="flex gap-4 items-start">
              <div style={{ zIndex: 10 }}>
                <Image
                  ref={(el) => {
                    iconRefs.current[index] = el;
                  }}
                  src={item.icon}
                  alt={`${item.title} Icon`}
                  width={40}
                  height={40}
                  className="w-10 h-10"
                />
              </div>
              <div>
                <p className="font-bold text-gray-900 dark:text-gray-100">
                  {item.title}:
                </p>
                <p className="text-gray-400 dark:text-gray-500 text-sm">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FocusAreas;
