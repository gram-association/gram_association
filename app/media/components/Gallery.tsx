"use client";

import { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ImageGrid } from "./Image-Grid";
import { Lightbox } from "./LightBox";
import type { DocumentItem, ImageType, VideoItem } from "@/lib/types";
import { VideoGrid } from "./Video-Grid";
import { DocumentGrid } from "./Document-Grid";
import { documentData, videoData } from "@/lib/data";

interface GalleryProps {
  images: ImageType[];
  videos: VideoItem[];
  documents: DocumentItem[];
}

export function Gallery({ images, videos, documents }: GalleryProps) {
  const [activeTab, setActiveTab] = useState("photos");
  const [selectedImage, setSelectedImage] = useState<ImageType | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);
  const [selectedDocument, setSelectedDocument] = useState<DocumentItem | null>(
    null
  );
  const [lightboxOpen, setLightboxOpen] = useState(false);

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
      </div>

      {activeTab === "photos" && (
        <ImageGrid images={images} onImageClick={handleImageClick} />
      )}
      {activeTab === "videos" && <VideoGrid items={videoData} />}
      {activeTab === "documents" && <DocumentGrid items={documentData} />}

      {lightboxOpen && selectedImage && (
        <Lightbox
          images={images}
          selectedImage={selectedImage}
          onClose={closeLightbox}
          onSelectImage={setSelectedImage}
        />
      )}
    </div>
  );
}
