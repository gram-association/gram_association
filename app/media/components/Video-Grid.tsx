"use client";

import { Play } from "lucide-react";
import type { VideoItem } from "@/lib/types";

interface VideoGridProps {
  items: VideoItem[];
}

export function VideoGrid({ items }: VideoGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map((item) => {
        // Extract YouTube video ID from URL or use directly if it's just the ID
        const videoId = item.youtubeUrl?.includes("youtube.com")
          ? new URL(item.youtubeUrl).searchParams.get("v")
          : item.youtubeUrl;

        return (
          <div key={item.id} className="group">
            <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
              <iframe
                src={`https://www.youtube.com/embed/${videoId}`}
                title={item.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full object-cover transition-transform group-hover:scale-105"
              />

              {/* Play button overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-black bg-opacity-30 rounded-full p-2">
                  <Play className="text-white h-6 w-6" />
                </div>
              </div>
            </div>

            {/* Item details */}
            <div className="mt-2">
              <p className="text-sm text-gray-800 dark:text-gray-200 line-clamp-2">
                {item.title}
              </p>
              <p className="text-xs text-gray-500 mt-1">{item.date}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
