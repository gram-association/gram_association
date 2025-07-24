"use client";

import type { VideoItem } from "@/lib/types";

interface VideoGridProps {
  items: VideoItem[];
}

export function VideoGrid({ items }: VideoGridProps) {
  // Function to extract YouTube video ID from various URL formats
  const getYouTubeVideoId = (url: string): string | null => {
    try {
      // Handle youtube.com URLs
      if (url.includes("youtube.com")) {
        const parsedUrl = new URL(url);
        return parsedUrl.searchParams.get("v");
      }
      // Handle youtu.be URLs
      if (url.includes("youtu.be")) {
        const path = new URL(url).pathname;
        return path.split("/")[1];
      }
      return null; // Return null for invalid URLs
    } catch (e) {
      return null; // Return null if URL parsing fails
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map((item: VideoItem) => {
        const videoId = getYouTubeVideoId(item.youtubeUrl);

        // Skip rendering if no valid video ID
        if (!videoId) {
          return (
            <div key={item.id} className="group">
              <div className="relative overflow-hidden rounded-lg aspect-[4/3] bg-gray-200 flex items-center justify-center">
                <p className="text-red-500 text-sm">Invalid YouTube URL</p>
              </div>
              <div className="mt-2">
                <p className="text-sm text-gray-800 dark:text-gray-200 line-clamp-2">
                  {item.title}
                </p>
              </div>
            </div>
          );
        }

        return (
          <div key={item.id} className="group">
            <a href={item.youtubeUrl} target="_blank" rel="noopener noreferrer">
              <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
                <iframe
                  src={`https://www.youtube.com/embed/${videoId}?enablejsapi=1`}
                  title={item.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
            </a>
            <div className="mt-2">
              <p className="text-sm text-gray-800 dark:text-gray-200 line-clamp-2">
                {item.title}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
