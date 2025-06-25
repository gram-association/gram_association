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
      {items.map((item) => (
        <div key={item.id} className="group">
          <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
            <Image
              src={item.imageUrl || "/placeholder.svg"}
              alt={item.title}
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />

            {/* Action buttons */}
            <div className="absolute top-2 right-2 flex space-x-1">
              {item.hasQrCode && (
                <button className="bg-white rounded-full p-1.5 shadow-sm hover:bg-gray-100">
                  <QrCode className="h-4 w-4 text-gray-700" />
                </button>
              )}
              <button className="bg-white rounded-full p-1.5 shadow-sm hover:bg-gray-100">
                <Download className="h-4 w-4 text-gray-700" />
              </button>
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
      ))}
    </div>
  );
}
