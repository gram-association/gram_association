"use client";

import Image from "next/image";
import type { ImageType } from "@/lib/types";

interface ImageGridProps {
  images: ImageType[];
  onImageClick: (image: ImageType) => void;
}

export function ImageGrid({ images, onImageClick }: ImageGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-auto">
      {images.map((image, index) => {
        // Determine the span class based on the image index for masonry-like layout
        let spanClass = "";

        if (index === 0 || index === 2 || index === 5 || index === 8) {
          spanClass = "md:col-span-1 md:row-span-2";
        } else if (index === 4) {
          spanClass = "md:col-span-2 md:row-span-2";
        } else {
          spanClass = "md:col-span-1 md:row-span-1";
        }

        return (
          <div
            key={image.id}
            className={`${spanClass} overflow-hidden rounded-lg cursor-pointer transition-transform hover:scale-[1.02]`}
            onClick={() => onImageClick(image)}
          >
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              width={800}
              height={200}
              className="w-full h-full object-cover"
            />
          </div>
        );
      })}
    </div>
  );
}
