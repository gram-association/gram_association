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
  dotSpacing = "16px",
}: AutoScrollCarouselProps) {
  // Normalize images to consistent format
  const normalizedImages = images.map((img, index) => {
    if (typeof img === "string") {
      return { src: img, alt: `Image ${index + 1}` };
    }
    return { alt: `Image ${index + 1}`, ...img };
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-scroll functionality
  useEffect(() => {
    if (normalizedImages.length <= 1 || (pauseOnHover && isHovered) || !loop)
      return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        return prevIndex >= normalizedImages.length - 1 ? 0 : prevIndex + 1;
      });
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
      <div className={cn("relative", className)}>
        <Image
          src={normalizedImages[0].src || "/placeholder.svg"}
          alt={normalizedImages[0].alt || "Image"}
          width={500}
          height={433}
          className={cn("w-full ", `object-${objectFit}`, imageClassName)}
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
    <div className={cn("relative group ", className)}>
      {/* Main carousel container */}
      <div
        className={cn("relative overflow-hidden", containerClassName)}
        onMouseEnter={() => pauseOnHover && setIsHovered(true)}
        onMouseLeave={() => pauseOnHover && setIsHovered(false)}
      >
        <div
          className="flex transition-transform ease-in-out h-full"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            transitionDuration: `${transitionDuration}ms`,
            willChange: "transform",
            height: typeof height === "number" ? `${height}px` : height,
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

      {/* Dots indicator - now positioned below the image */}
      {showDots && normalizedImages.length > 1 && (
        <div
          className="flex justify-center space-x-2"
          style={{ marginTop: dotSpacing }}
        >
          {normalizedImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={cn(
                "w-3 h-3 rounded-full transition-all duration-200 hover:scale-110",
                index === currentIndex
                  ? "bg-gray-800 dark:bg-white"
                  : "bg-gray-400 dark:bg-gray-600 hover:bg-gray-600 dark:hover:bg-gray-400"
              )}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
