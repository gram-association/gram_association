import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const FocusAreas = () => {
  const imageRef = useRef<HTMLImageElement | null>(null);
  const textRefs = useRef<Array<HTMLDivElement | null>>([]);
  const circleRef = useRef<HTMLDivElement | null>(null);
  const [lines, setLines] = useState<
    Array<{ startX: number; startY: number; endX: number; endY: number }>
  >([]);

  // Example coordinates for the 5 Es in the image (relative to the image's top-left corner)
  // Adjust these based on the actual positions in your 5Es.png image
  const imagePoints = [
    { x: 100, y: 50 }, // Entrepreneurship (e.g., top-left)
    { x: 300, y: 100 }, // Enrichment (e.g., top-right)
    { x: 200, y: 288 }, // Enablement (e.g., center)
    { x: 100, y: 476 }, // Education (e.g., bottom-left)
    { x: 300, y: 526 }, // Environment (e.g., bottom-right)
  ];

  useEffect(() => {
    const updateLines = () => {
      if (!imageRef.current || textRefs.current.length < 5) return;

      const imageRect = imageRef.current.getBoundingClientRect();
      const newLines = textRefs.current.map((textRef, index) => {
        if (!textRef) return null;
        const textRect = textRef.getBoundingClientRect();
        // Start point: middle-right of the text block
        const startX = textRect.right;
        const startY = textRect.top + textRect.height / 2;
        // End point: specific point in the image (adjusted to viewport coordinates)
        const endX =
          imageRect.left + (imagePoints[index].x * imageRect.width) / 576;
        const endY =
          imageRect.top + (imagePoints[index].y * imageRect.height) / 576;

        return { startX, startY, endX, endY };
      });
      setLines(
        newLines.filter(
          (
            line
          ): line is {
            startX: number;
            startY: number;
            endX: number;
            endY: number;
          } => line !== null
        )
      );
    };

    // Update lines on mount and resize
    updateLines();
    window.addEventListener("resize", updateLines);
    return () => window.removeEventListener("resize", updateLines);
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
        <div
          ref={circleRef}
          className="w-[450px] h-[450px] rounded-full border-2 border-gray-400 `${{zIndex:10}}` mr-20 "
        >
          {/* SVG for drawing lines */}
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
          <div className="hidden md:block relative">
            <Image
              ref={imageRef}
              src="/focus area.png"
              alt="5 Es Illustration"
              width={250}
              height={250}
              className="w-80 max-w-[576px] h-auto mx-auto mt-10"
            />
          </div>
        </div>
        <div className="space-y-4 text-left w-full md:w-1/2">
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
            }, // Fixed duplicate description
            {
              icon: "/Group 10.png",
              title: "Environment",
              desc: "Promoting sustainable practices and environmental consciousness for future generations",
            },
          ].map((item, index) => (
            <div
              key={index}
              ref={(el) => {
                textRefs.current[index] = el;
              }}
              className="flex gap-4 items-start"
            >
              <div>
                <Image
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
