import Image from "next/image";
import type { ImageType } from "@/lib/types";

interface LightboxProps {
  image: ImageType;
  images: ImageType[];
  onClose: () => void;
  selectedImage: ImageType | null;
  onSelectImage: (image: ImageType | null) => void;
}

export function Lightbox({
  image,
  images,
  onClose,
  selectedImage,
  onSelectImage,
}: LightboxProps) {
  const currentIndex = images.findIndex((img) => img.id === image.id);

  const handlePrev = () => {
    if (currentIndex > 0) {
      onSelectImage(images[currentIndex - 1]);
    }
  };

  const handleNext = () => {
    if (currentIndex < images.length - 1) {
      onSelectImage(images[currentIndex + 1]);
    }
  };

  return (
    <div className="fixed inset-0 bg-transparent backdrop-blur-lg bg-opacity-80 flex items-center justify-center z-50">
      <div className="relative max-w-4xl w-full h-[80vh]">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-950 cursor-pointer text-xl border border-gray-900 rounded-full p-2 h-10 w-10"
        >
          ✕
        </button>
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          className="w-full h-full object-contain"
        />
        {/* {currentIndex > 0 && (
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 text-white text-2xl"
          >
            ←
          </button>
        )}
        {currentIndex < images.length - 1 && (
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 text-white text-2xl"
          >
            →
          </button>
        )} */}
      </div>
    </div>
  );
}
