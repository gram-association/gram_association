"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { ImageType } from "@/lib/types";

interface LightboxProps {
  images: ImageType[];
  selectedImage: ImageType;
  onClose: () => void;
  onSelectImage: (image: ImageType) => void;
}

export function Lightbox({
  images,
  selectedImage,
  onClose,
  onSelectImage,
}: LightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(
    images.findIndex((img) => img.id === selectedImage.id)
  );
  const navigateNext = useCallback(() => {
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(nextIndex);
    onSelectImage(images[nextIndex]);
  }, [currentIndex, images, onSelectImage]);

  const navigatePrev = useCallback(() => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(prevIndex);
    onSelectImage(images[prevIndex]);
  }, [currentIndex, images, onSelectImage]);

  useEffect(() => {
    // Add keyboard event listeners
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft") {
        navigatePrev();
      } else if (e.key === "ArrowRight") {
        navigateNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    // Prevent scrolling when lightbox is open
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [navigateNext, navigatePrev, onClose]);

  const handleThumbnailClick = (index: number) => {
    setCurrentIndex(index);
    onSelectImage(images[index]);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex flex-col justify-center items-center">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
        aria-label="Close lightbox"
      >
        <X size={24} />
      </button>

      {/* Main image */}
      <div className="relative w-full h-[calc(100vh-150px)] flex items-center justify-center px-4">
        <button
          onClick={navigatePrev}
          className="absolute left-4 text-white hover:text-gray-300 z-10"
          aria-label="Previous image"
        >
          <ChevronLeft size={40} />
        </button>

        <div className="relative w-full max-w-5xl h-full flex items-center justify-center">
          <Image
            src={images[currentIndex].src || "/placeholder.svg"}
            alt={images[currentIndex].alt}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 80vw"
          />

          {/* Caption */}
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 text-sm">
            <p>{images[currentIndex].description}</p>
          </div>
        </div>

        <button
          onClick={navigateNext}
          className="absolute right-4 text-white hover:text-gray-300 z-10"
          aria-label="Next image"
        >
          <ChevronRight size={40} />
        </button>
      </div>

      {/* Thumbnails */}
      <div className="w-full max-w-5xl overflow-x-auto py-4 px-4">
        <div className="flex space-x-2 min-w-max">
          {images.map((image, index) => (
            <div
              key={image.id}
              className={`w-20 h-20 flex-shrink-0 cursor-pointer ${
                index === currentIndex ? "ring-2 ring-white" : ""
              }`}
              onClick={() => handleThumbnailClick(index)}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                width={80}
                height={80}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
