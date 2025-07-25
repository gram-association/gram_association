"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { Lightbox } from "./LightBox";
import type { ImageType } from "@/lib/types";

interface ImageGridProps {
  images: ImageType[];
  imagesPerPage?: number;
  onImageClick?: (image: ImageType) => void;
}

const COLUMN_COUNT = 3;

function splitIntoColumns(images: ImageType[], columns: number) {
  const columnArrays: ImageType[][] = Array.from({ length: columns }, () => []);
  images.forEach((img, index) => {
    columnArrays[index % columns].push(img);
  });
  return columnArrays;
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
        setPage((prev) => prev + 1);
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

  const columns = useMemo(
    () => splitIntoColumns(displayedImages, COLUMN_COUNT),
    [displayedImages]
  );

  return (
    <div className="container mx-auto px-4">
      {images.length === 0 ? (
        <div className="text-center py-4 text-gray-600">No images found</div>
      ) : (
        <div className="flex gap-4">
          {columns.map((column, colIndex) => (
            <div key={colIndex} className="flex-1 flex flex-col gap-4">
              {column.map((image, index) => (
                <div
                  key={image.id}
                  className="overflow-hidden rounded-lg cursor-pointer transition-transform hover:scale-[1.02]"
                  onClick={() => handleImageClick(image)}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    className="w-full h-auto object-cover max-h-[400px] rounded"
                    priority={index < 6}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      )}

      {isLoading && (
        <div className="flex gap-4 mt-4">
          {columns.map((_, colIndex) => (
            <div key={colIndex} className="flex-1 flex flex-col gap-4">
              {Array.from({
                length: Math.ceil(imagesPerPage / COLUMN_COUNT),
              }).map((_, i) => (
                <Skeleton
                  key={`skeleton-${colIndex}-${i}`}
                  className="w-full h-[300px] bg-gray-300 rounded-lg"
                />
              ))}
            </div>
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
