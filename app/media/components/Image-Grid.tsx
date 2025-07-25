"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { Lightbox } from "./LightBox";
import type { ImageType } from "@/lib/types";

interface ImageGridProps {
  images: ImageType[];
  imagesPerPage?: number;
  onImageClick?: (image: ImageType) => void;
}

export function ImageGrid({
  images,
  imagesPerPage = 12,
  onImageClick,
}: ImageGridProps) {
  const [displayedImages, setDisplayedImages] = useState<ImageType[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState<ImageType | null>(null);

  useEffect(() => {
    const initial = images.slice(0, imagesPerPage);
    setDisplayedImages(initial);
    setHasMore(images.length > imagesPerPage);
  }, [images, imagesPerPage]);

  useEffect(() => {
    const onScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
          document.body.offsetHeight - 200 &&
        hasMore &&
        !isLoading
      ) {
        setPage((p) => p + 1);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [hasMore, isLoading]);

  useEffect(() => {
    if (page === 1) return;
    setIsLoading(true);
    const start = (page - 1) * imagesPerPage;
    const end = start + imagesPerPage;
    const newImages = images.slice(start, end);

    const timer = setTimeout(() => {
      setDisplayedImages((prev) => [...prev, ...newImages]);
      setHasMore(end < images.length);
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [page, images, imagesPerPage]);

  const handleImageClick = (image: ImageType) => {
    setSelectedImage(image);
    onImageClick?.(image);
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

      {images.length === 0 ? (
        <div className="text-center py-4 text-gray-600">No images found</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {displayedImages.map((image, index) => (
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
              />
            </div>
          ))}
        </div>
      )}

      {isLoading && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
          {Array.from({
            length: Math.min(
              imagesPerPage,
              images.length - displayedImages.length
            ),
          }).map((_, index) => (
            <Skeleton
              key={`skeleton-${index}`}
              className="w-full h-[300px] bg-gray-300 rounded-lg"
            />
          ))}
        </div>
      )}

      {selectedImage && (
        <Lightbox
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
          images={images}
          selectedImage={selectedImage}
          onSelectImage={setSelectedImage}
        />
      )}
    </div>
  );
}
