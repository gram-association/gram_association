"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import ImageWithLoader from "./ImageWithLoader";

interface CarouselImage {
  src: string;
  alt?: string;
  title?: string;
}

interface AutoScrollCarouselProps {
  images: string[] | CarouselImage[];
  autoScrollInterval?: number;
  showDots?: boolean;
  pauseOnHover?: boolean;
  className?: string;
  imageClassName?: string;
  containerClassName?: string;
  height?: string | number;
  aspectRatio?: string;
  objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down";
  priority?: boolean;
  sizes?: string;
  loop?: boolean;
  transitionDuration?: number;
  dotSpacing?: string;
}

export default function AutoScrollCarousel({
  images,
  autoScrollInterval = 4000,
  showDots = true,
  pauseOnHover = true,
  className,
  imageClassName,
  containerClassName,
  height = "433px",
  aspectRatio,
  objectFit = "cover",
  priority = false,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px",
  loop = true,
  transitionDuration = 700,
}: AutoScrollCarouselProps) {
  const normalizedImages = images.map((img, index) => {
    if (typeof img === "string") {
      return { src: img, alt: `Image ${index + 1}` };
    }
    return { alt: `Image ${index + 1}`, ...img };
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (normalizedImages.length <= 1 || (pauseOnHover && isHovered) || !loop)
      return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex >= normalizedImages.length - 1 ? 0 : prevIndex + 1
      );
    }, autoScrollInterval);

    return () => clearInterval(interval);
  }, [
    normalizedImages.length,
    isHovered,
    autoScrollInterval,
    pauseOnHover,
    loop,
  ]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  if (normalizedImages.length === 0) {
    return (
      <div
        className={cn(
          "flex items-center justify-center bg-gray-200",
          className
        )}
      >
        <p className="text-gray-500">No images available</p>
      </div>
    );
  }

  if (normalizedImages.length === 1) {
    return (
      <div className={cn("w-full", className)}>
        <Image
          src={normalizedImages[0].src || "/placeholder.svg"}
          alt={normalizedImages[0].alt || "Image"}
          width={500}
          height={433}
          className={cn("w-full", `object-${objectFit}`, imageClassName)}
          style={{
            height: typeof height === "number" ? `${height}px` : height,
            aspectRatio: aspectRatio,
          }}
          sizes={sizes}
          priority={priority}
        />
      </div>
    );
  }

  return (
    <div className={cn("w-full flex flex-col", className)}>
      {/* Image container */}
      <div
        className={cn("relative overflow-hidden w-full", containerClassName)}
        onMouseEnter={() => pauseOnHover && setIsHovered(true)}
        onMouseLeave={() => pauseOnHover && setIsHovered(false)}
        style={{ height: typeof height === "number" ? `${height}px` : height }}
      >
        <div
          className="flex transition-transform ease-in-out h-full"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            transitionDuration: `${transitionDuration}ms`,
            willChange: "transform",
          }}
        >
          {normalizedImages.map((image, index) => (
            <div
              key={`${image.src}-${index}`}
              className="w-full h-full flex-shrink-0"
            >
              <ImageWithLoader
                src={image.src || "/placeholder.svg"}
                alt={image.alt || `Image ${index + 1}`}
                width={500}
                height={433}
                className={cn(
                  "w-full h-full",
                  `object-${objectFit}`,
                  imageClassName
                )}
                style={{ aspectRatio: aspectRatio }}
                sizes={sizes}
                priority={priority && index === 0}
              />
            </div>
          ))}
        </div>
      </div>

      {showDots && normalizedImages.length > 1 && (
        <div className="flex justify-center w-full mt-2 sm:mt-3 md:mt-4 lg:mt-6">
          <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3">
            {normalizedImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={cn(
                  "w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5 lg:w-3 lg:h-3 rounded-full transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#538C7B]",
                  index === currentIndex
                    ? "bg-[#538C7B] dark:bg-[#538C7B] scale-110"
                    : "bg-gray-400 dark:bg-gray-600 hover:bg-gray-600 dark:hover:bg-gray-400"
                )}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
