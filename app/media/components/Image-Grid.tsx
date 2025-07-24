"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { Lightbox } from "./LightBox";
import type { ImageType } from "@/lib/types";

interface ImageGridProps {
  images: ImageType[];
  imagesPerPage?: number;
  onImageClick?: (image: ImageType) => void;
}

export function ImageGrid({
  imagesPerPage = 12,
  onImageClick,
}: ImageGridProps) {
  const [allImages, setAllImages] = useState<ImageType[]>([]);
  const [displayedImages, setDisplayedImages] = useState<ImageType[]>([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [totalImages, setTotalImages] = useState(0);
  const [selectedImage, setSelectedImage] = useState<ImageType | null>(null);

  // Fetch all images from API
  const fetchImages = useCallback(async () => {
    if (allImages.length > 0) return; // Prevent re-fetching
    setIsLoading(true);
    try {
      const response = await fetch("/api/images");
      if (!response.ok) throw new Error("Failed to fetch images");
      const data = await response.json();

      // Validate images
      const validImages = data.images.filter(
        (image: ImageType) =>
          image &&
          typeof image.src === "string" &&
          image.src &&
          typeof image.alt === "string" &&
          typeof image.description === "string" &&
          typeof image.width === "number" &&
          typeof image.height === "number"
      );

      setAllImages(validImages);
      setTotalImages(validImages.length);
      setDisplayedImages(validImages.slice(0, imagesPerPage));
      setHasMore(validImages.length > imagesPerPage);
    } catch (error) {
      console.error("Error fetching images:", error);
    } finally {
      setIsLoading(false);
    }
  }, [imagesPerPage, allImages.length]);

  // Initial load
  useEffect(() => {
    fetchImages();
  }, [fetchImages]);

  // Infinite scroll handler
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
          document.documentElement.offsetHeight - 200 &&
        hasMore &&
        !isLoading
      ) {
        setPage((prev) => prev + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasMore, isLoading]);

  // Load more images
  useEffect(() => {
    if (page > 1 && allImages.length > 0) {
      setIsLoading(true);
      const startIndex = (page - 1) * imagesPerPage;
      const endIndex = startIndex + imagesPerPage;
      const newImages = allImages.slice(startIndex, endIndex);

      const timer = setTimeout(() => {
        setDisplayedImages((prev) => [...prev, ...newImages]);
        setHasMore(endIndex < allImages.length);
        setIsLoading(false);
      }, 300);

      return () => clearTimeout(timer);
    }
  }, [page, allImages, imagesPerPage]);

  // Handle image click to open Lightbox
  const handleImageClick = (image: ImageType) => {
    if (image && image.src) {
      setSelectedImage(image);
      if (onImageClick) {
        onImageClick(image);
      }
    }
  };

  // Close Lightbox
  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <div className="container mx-auto px-4">
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .image-container {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
      {totalImages === 0 && !isLoading ? (
        <div className="text-center py-4 text-gray-600">
          No images found in the folder
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {isLoading && displayedImages.length === 0
            ? Array.from({ length: imagesPerPage }).map((_, index) => (
                <Skeleton
                  key={`skeleton-${index}`}
                  className="w-full h-[300px] bg-gray-300 rounded-lg"
                />
              ))
            : displayedImages.map((image, index) => (
                <div
                  key={image.id}
                  className="image-container overflow-hidden rounded-lg cursor-pointer transition-transform hover:scale-[1.02]"
                  onClick={() => handleImageClick(image)}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    className="w-full h-auto object-cover aspect-square"
                    priority={index < 6}
                    placeholder="blur"
                    blurDataURL="/placeholder.svg"
                  />
                </div>
              ))}
        </div>
      )}
      {isLoading && displayedImages.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
          {Array.from({
            length: Math.min(
              imagesPerPage,
              totalImages - displayedImages.length
            ),
          }).map((_, index) => (
            <Skeleton
              key={`skeleton-load-${index}`}
              className="w-full h-[300px] bg-gray-300 rounded-lg"
            />
          ))}
        </div>
      )}
      {!hasMore && displayedImages.length > 0 && (
        <div className="text-center py-4 text-gray-600"></div>
      )}
      {selectedImage && (
        <Lightbox
          image={selectedImage}
          onClose={closeLightbox}
          images={allImages} // Pass all images for navigation
          selectedImage={selectedImage}
          onSelectImage={setSelectedImage}
        />
      )}
    </div>
  );
}
