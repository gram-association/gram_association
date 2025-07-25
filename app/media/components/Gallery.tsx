"use client";

import { useState, useEffect } from "react";
import { ImageGrid } from "./Image-Grid";
import { Lightbox } from "./LightBox";
import { VideoGrid } from "./Video-Grid";
import { DocumentGrid } from "./Document-Grid";
import { documentData, videoData } from "@/lib/data";
import type { DocumentItem, ImageType } from "@/lib/types";

interface GalleryProps {
  images?: ImageType[]; // Add images prop
  videos?: any[]; // Update type as needed
  documents?: DocumentItem[];
}

export default function Gallery({
  images = [], // Default to empty array
  videos = videoData,
  documents = documentData,
}: GalleryProps) {
  const [activeTab, setActiveTab] = useState("photos");
  const [selectedImage, setSelectedImage] = useState<ImageType | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [fetchedImages] = useState<ImageType[]>(images);
  const [error] = useState<string | null>(null);

  const handleImageClick = (image: ImageType) => {
    setSelectedImage(image);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  return (
    <div>
      <div className="flex justify-center mb-6">
        <div className="w-full max-w-md">
          <div className="flex w-full space-x-4">
            <button
              className={`rounded-full py-2 px-6 ${
                activeTab === "photos"
                  ? "bg-[#1D352E] text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
              onClick={() => setActiveTab("photos")}
            >
              Photos
            </button>
            <button
              className={`rounded-full py-2 px-6 ${
                activeTab === "videos"
                  ? "bg-[#1D352E] text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
              onClick={() => setActiveTab("videos")}
            >
              Videos
            </button>
            <button
              className={`rounded-full py-2 px-6 ${
                activeTab === "documents"
                  ? "bg-[#1D352E] text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
              onClick={() => setActiveTab("documents")}
            >
              Documents
            </button>
          </div>
        </div>
      </div>

      {error && <div className="text-center py-4 text-red-600">{error}</div>}
      {activeTab === "photos" && (
        <ImageGrid images={fetchedImages} onImageClick={handleImageClick} />
      )}
      {activeTab === "videos" && <VideoGrid items={videos} />}
      {activeTab === "documents" && <DocumentGrid items={documents} />}

      {lightboxOpen && selectedImage && (
        <Lightbox
          images={fetchedImages}
          selectedImage={selectedImage}
          onClose={closeLightbox}
          onSelectImage={setSelectedImage}
          image={selectedImage}
        />
      )}
    </div>
  );
}
