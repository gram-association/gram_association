"use client";

import Image from "next/image";
import { Download, QrCode } from "lucide-react";
import type { DocumentItem } from "@/lib/types";

interface DocumentGridProps {
  items: DocumentItem[];
}

export function DocumentGrid({ items }: DocumentGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map((item) => {
        // Skip rendering if fileUrl is undefined
        if (!item.fileUrl) {
          return null;
        }

        return (
          <a
            key={item.id}
            href={item.fileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
          >
            <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
              <Image
                src={item.imageUrl || "/placeholder.svg"}
                alt={item.title || "Document"}
                fill
                className="object-fit transition-transform group-hover:scale-105"
              />

              {/* Action buttons */}
              <div className="absolute top-2 right-2 flex space-x-1">
                {item.hasQrCode && (
                  <button
                    type="button"
                    className="bg-white rounded-full p-1.5 shadow-sm hover:bg-gray-100"
                    onClick={(e) => {
                      e.preventDefault(); // Prevent the card's click event
                      // Add QR code functionality here if needed
                    }}
                  >
                    <QrCode className="h-4 w-4 text-gray-700" />
                  </button>
                )}
                <button
                  type="button"
                  className="bg-white rounded-full p-1.5 shadow-sm hover:bg-gray-100"
                  onClick={(e) => {
                    e.preventDefault(); // Prevent the card's click event
                    const link = document.createElement("a");
                    link.href = item.fileUrl!;
                    link.download = item.title || "document";
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                >
                  <Download className="h-4 w-4 text-gray-700" />
                </button>
              </div>
            </div>

            {/* Item details */}
            <div className="mt-2">
              <p className="text-sm text-gray-800 dark:text-gray-200 line-clamp-2">
                {item.title || "Untitled"}
              </p>
              <p className="text-xs text-gray-500 mt-1">{item.date}</p>
            </div>
          </a>
        );
      })}
    </div>
  );
}
