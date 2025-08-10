"use client";
import { useState, useEffect, useRef } from "react";

const CountUp = ({ end, suffix = "" }: { end: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const duration = 2000;
          const startTime = Date.now();

          const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 3);

            const current = Math.floor(easeOut * end);
            setCount(current);

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [end]);

  const formatValue = (value: number) => {
    if (end === 10000 && value >= 10000) return "10K+";
    return `${value}${suffix}`;
  };

  return (
    <div ref={elementRef} className="text-center">
      <div className="text-3xl lg:text-4xl font-bold text-[#5A829A] mb-2">
        {formatValue(count)}
      </div>
    </div>
  );
};

export default function OurImpact() {
  const stats = [
    { value: 10000, suffix: "+", label: "Lives Transformed" },
    { value: 10, suffix: "+", label: "Villages Impacted" },
    { value: 50, suffix: "+", label: "Women Trained" },
    { value: 3, suffix: "", label: "Water bodies rejuvenated" },
    { value: 8, suffix: "", label: "SDGs addressed" },
  ];

  return (
    <section className="flex flex-col w-full max-w-7xl my-20 mx-auto px-4">
      {/* Header */}
      <div className="mb-12 text-center">
        <div className="inline-block bg-[#DEE6EB] rounded-lg px-3 py-1 mb-4">
          <p className="text-sm lg:text-base text-gray-700">Our Impact</p>
        </div>
        <h2 className="text-3xl lg:text-5xl font-bold text-gray-900">
          Driving Meaningful Change
        </h2>
      </div>

      {/* Stats */}
      <div className="bg-[#F8F1E9] text-center rounded-xl p-6 md:p-8 border w-full shadow-sm">
        {/* Mobile - Card-based layout */}
        <div className="grid grid-cols-1 gap-4 md:hidden">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-4 shadow-md border border-gray-100 transition-transform hover:scale-[1.02]"
            >
              <CountUp end={stat.value} suffix={stat.suffix} />
              <p className="text-sm text-gray-600 mt-1 font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Desktop - Horizontal with separators */}
        <div className="hidden md:flex items-center justify-between">
          {stats.map((stat, index) => (
            <div key={index} className="flex items-center">
              <div className="text-center px-4">
                <CountUp end={stat.value} suffix={stat.suffix} />
                <p className="text-sm lg:text-base text-gray-700 mt-2 font-medium">
                  {stat.label}
                </p>
              </div>
              {index < stats.length - 1 && (
                <div className="h-16 w-px bg-gray-300 mx-4 lg:mx-8"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
