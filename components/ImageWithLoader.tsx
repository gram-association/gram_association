"use client";
import { useState } from "react";
import type React from "react";

import Image from "next/image";
import { cn } from "@/lib/utils";

interface ImageWithLoaderProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  style?: React.CSSProperties;
  sizes?: string;
  priority?: boolean;
}

export default function ImageWithLoader({
  src,
  alt,
  width,
  height,
  className,
  style,
  sizes,
  priority = false,
}: ImageWithLoaderProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  return (
    <div className="relative">
      {isLoading && (
        <div
          className={cn(
            "absolute inset-0 bg-gray-200 animate-pulse",
            className
          )}
          style={style}
        />
      )}
      <Image
        src={hasError ? "/placeholder.svg" : src}
        alt={alt}
        width={width}
        height={height}
        className={cn(
          "transition-opacity duration-300",
          isLoading ? "opacity-0" : "opacity-100",
          className
        )}
        style={style}
        sizes={sizes}
        priority={priority}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setHasError(true);
          setIsLoading(false);
        }}
      />
    </div>
  );
}
