"use client";

import { useState } from "react";
import Image, { ImageProps } from "next/image";
import { Skeleton } from "@/components/ui/skeleton";

interface ImageWithLoaderProps extends ImageProps {
  fallbackSrc?: string;
  className?: string;
  wrapperClassName?: string;
}

export default function ImageWithLoader({
  src,
  alt,
  fallbackSrc = "/fallback.png",
  className,
  wrapperClassName,
  ...props
}: ImageWithLoaderProps) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  return (
    <div className={`relative w-full h-full ${wrapperClassName || ""}`}>
      {loading && !error && (
        <Skeleton className="absolute inset-0 w-full h-full rounded-md" />
      )}

      <Image
        {...props}
        src={error ? fallbackSrc : src}
        alt={alt}
        onLoad={() => setLoading(false)}
        onError={() => {
          setLoading(false);
          setError(true);
        }}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          loading ? "opacity-0" : "opacity-100"
        } ${className || ""}`}
      />
    </div>
  );
}
