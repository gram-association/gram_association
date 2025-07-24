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

export function Gallery({
  images = [], // Default to empty array
  videos = videoData,
  documents = documentData,
}: GalleryProps) {
  const [activeTab, setActiveTab] = useState("photos");
  const [selectedImage, setSelectedImage] = useState<ImageType | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [fetchedImages, setFetchedImages] = useState<ImageType[]>(images);
  const [error, setError] = useState<string | null>(null);

  // Fetch images if not provided
  useEffect(() => {
    if (images.length > 0) {
      setFetchedImages(images); // Use provided images
      return;
    }
    async function fetchImages() {
      try {
        const response = await fetch("/api/images", { method: "GET" });
        if (!response.ok) {
          throw new Error(
            `Failed to fetch images: ${response.status} ${response.statusText}`
          );
        }
        const data = await response.json();
        console.log("API response:", data.images); // Debug
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
        setFetchedImages(validImages);
      } catch (error: any) {
        console.error("Error fetching images:", error);
        setError(error.message);
      }
    }
    fetchImages();
  }, [images]);

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
