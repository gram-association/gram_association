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
        <Tabs defaultValue="photos" className="w-full max-w-md">
          <TabsList className="grid w-full grid-cols-3 rounded-full bg-gray-200">
            <TabsTrigger
              value="photos"
              className="rounded-full data-[state=active]:bg-green-800 data-[state=active]:text-white  "
              onClick={() => setActiveTab("photos")}
            >
              Photos
            </TabsTrigger>
            <TabsTrigger
              value="videos"
              className="rounded-full data-[state=active]:bg-green-800 data-[state=active]:text-white"
              onClick={() => setActiveTab("videos")}
            >
              Videos
            </TabsTrigger>
            <TabsTrigger
              value="documents"
              className="rounded-full data-[state=active]:bg-green-800 data-[state=active]:text-white"
              onClick={() => setActiveTab("documents")}
            >
              Documents
            </TabsTrigger>
          </TabsList>
        </Tabs>
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
