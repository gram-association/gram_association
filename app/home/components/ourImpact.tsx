"use client";

import React, { useState, useEffect, useRef } from "react";

// CountUp component for animating numbers
const CountUp: React.FC<{
  end: number;
  suffix?: string;
  duration?: number;
  slideIndex?: number;
  currentSlide?: number;
}> = ({ end, suffix = "", duration = 2000, slideIndex, currentSlide }) => {
  const [count, setCount] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);
  const animationRef = useRef<number | null>(null);

  // Function to format display value
  const formatDisplayValue = (
    value: number,
    targetEnd: number,
    targetSuffix: string
  ) => {
    if (targetEnd === 10000 && value >= 10000) {
      return "10K+";
    }
    return `${Math.floor(value)}${targetSuffix}`;
  };

  // Function to start counting animation
  const startCounting = () => {
    if (isAnimating) return;

    setIsAnimating(true);
    setCount(0); // Reset to 0 before starting

    const startTime = Date.now();
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * end);

      setCount(currentCount);

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        setIsAnimating(false);
      }
    };

    animationRef.current = requestAnimationFrame(animate);
  };

  // Handle intersection observer for desktop view
  useEffect(() => {
    if (slideIndex !== undefined) return; // Skip intersection observer for mobile slides

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startCounting();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  // Handle mobile slide changes
  useEffect(() => {
    if (slideIndex !== undefined && currentSlide !== undefined) {
      if (slideIndex === currentSlide) {
        // Add a small delay to make the animation more noticeable
        const timer = setTimeout(() => {
          startCounting();
        }, 100);
        return () => clearTimeout(timer);
      }
    }
  }, [currentSlide, slideIndex]);

  return (
    <span
      ref={elementRef}
      className="text-2xl md:text-4xl font-bold text-[#5A829A] dark:text-cyan-400"
    >
      {formatDisplayValue(count, end, suffix)}
    </span>
  );
};

const OurImpact: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const scrollerRef = useRef<HTMLDivElement>(null);

  // Function to handle slide navigation
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    if (scrollerRef.current) {
      const slideWidth = scrollerRef.current.offsetWidth;
      scrollerRef.current.scrollTo({
        left: index * slideWidth,
        behavior: "smooth",
      });
    }
  };

  // Handle scroll events to update current slide
  const handleScroll = () => {
    if (scrollerRef.current) {
      const slideWidth = scrollerRef.current.offsetWidth;
      const scrollLeft = scrollerRef.current.scrollLeft;
      const newSlide = Math.round(scrollLeft / slideWidth);
      if (newSlide !== currentSlide) {
        setCurrentSlide(newSlide);
      }
    }
  };

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => {
        const nextSlide = (prev + 1) % 3; // Cycle through 0, 1, 2
        if (scrollerRef.current) {
          const slideWidth = scrollerRef.current.offsetWidth;
          scrollerRef.current.scrollTo({
            left: nextSlide * slideWidth,
            behavior: "smooth",
          });
        }
        return nextSlide;
      });
    }, 5000); // Reduced to 5 seconds since pause is removed
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-8 md:pb-16 text-center mt-10 md:mt-0">
      <p className="container mx-auto bg-[#DEE6EB] dark:bg-gray-700 w-fit rounded-lg px-2 text-gray-700 dark:text-gray-200 flex items-center text-sm md:text-base">
        Our Impact
      </p>
      <h2 className="text-2xl md:text-5xl mt-4 font-epilogue text-center mb-6 text-gray-900 dark:text-gray-100">
        Driving Meaningful Change
      </h2>

      {/* Mobile View (Horizontal Scroller with Hidden Scrollbar) */}
      <div
        ref={scrollerRef}
        className="md:hidden overflow-x-auto snap-x snap-mandatory flex w-[400px] mx-auto py-8 px-4 bg-[#F8F1E9] dark:bg-gray-800 rounded-lg scrollbar-hide"
        onScroll={handleScroll}
      >
        <div className="flex-none snap-center w-full flex justify-center items-center space-x-6">
          <div className="text-center min-w-[100px]">
            <CountUp
              end={10000}
              suffix="K+"
              slideIndex={0}
              currentSlide={currentSlide}
            />
            <p className="text-xs text-gray-700 dark:text-gray-300">
              Lives Transformed
            </p>
          </div>
          <div className="text-center min-w-[100px]">
            <CountUp
              end={10}
              suffix="+"
              slideIndex={0}
              currentSlide={currentSlide}
            />
            <p className="text-xs text-gray-700 dark:text-gray-300">
              Villages Impacted
            </p>
          </div>
        </div>
        <div className="flex-none snap-center w-full flex justify-center space-x-6">
          <div className="text-center min-w-[100px]">
            <CountUp
              end={50}
              suffix="+"
              slideIndex={1}
              currentSlide={currentSlide}
            />
            <p className="text-xs text-gray-700 dark:text-gray-300">
              Women Trained
            </p>
          </div>
          <div className="text-center min-w-[100px]">
            <CountUp end={3} slideIndex={1} currentSlide={currentSlide} />
            <p className="text-xs text-gray-700 dark:text-gray-300">
              Water bodies rejuvenated
            </p>
          </div>
        </div>
        <div className="flex-none snap-center w-full flex justify-center space-x-4">
          <div className="text-center min-w-[100px]">
            <CountUp end={8} slideIndex={2} currentSlide={currentSlide} />
            <p className="text-xs text-gray-700 dark:text-gray-300">
              SDGs addressed
            </p>
          </div>
        </div>
      </div>

      {/* Dots for Mobile Navigation */}
      <div className="md:hidden flex justify-center mt-4 space-x-2">
        {[0, 1, 2].map((index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${
              currentSlide === index
                ? "bg-[#5A829A] dark:bg-cyan-400"
                : "bg-gray-300 dark:bg-gray-600"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Desktop View (Original Layout) */}
      <div className="hidden md:flex flex-wrap justify-center bg-[#F8F1E9] dark:bg-gray-800 w-full min-w-5xl mx-auto py-8 px-4 rounded-lg space-x-4 md:space-x-8 space-y-4 md:space-y-0">
        <div className="w-1/2 md:w-auto text-center">
          <CountUp end={10000} suffix="K+" />
          <p className="text-xs md:text-base text-gray-700 dark:text-gray-300">
            Lives Transformed
          </p>
        </div>
        <div className="hidden md:block h-12 w-px bg-gray-300 dark:bg-gray-600"></div>

        <div className="w-1/2 md:w-auto text-center">
          <CountUp end={10} suffix="+" />
          <p className="text-xs md:text-base text-gray-700 dark:text-gray-300">
            Villages Impacted
          </p>
        </div>
        <div className="hidden md:block h-12 w-px bg-gray-300 dark:bg-gray-600"></div>

        <div className="w-1/2 md:w-auto text-center">
          <CountUp end={50} suffix="+" />
          <p className="text-xs md:text-base text-gray-700 dark:text-gray-300">
            Women Trained
          </p>
        </div>
        <div className="hidden md:block h-12 w-px bg-gray-300 dark:bg-gray-600"></div>

        <div className="w-1/2 md:w-auto text-center">
          <CountUp end={3} />
          <p className="text-xs md:text-base text-gray-700 dark:text-gray-300">
            Water bodies <br /> rejuvenated
          </p>
        </div>
        <div className="hidden md:block h-12 w-px bg-gray-300 dark:bg-gray-600"></div>

        <div className="w-1/2 md:w-auto text-center">
          <CountUp end={8} />
          <p className="text-xs md:text-base text-gray-700 dark:text-gray-300">
            SDGs addressed
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurImpact;
