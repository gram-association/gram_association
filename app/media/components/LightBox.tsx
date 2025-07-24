import Image from "next/image";
import type { ImageType } from "@/lib/types";

interface LightboxProps {
  images: ImageType[];
  image: ImageType | null; // Allow null for safety
  selectedImage: ImageType | null;
  onClose: () => void;
  onSelectImage: (image: ImageType | null) => void;
}

export function Lightbox({ image, onClose }: LightboxProps) {
  if (!image || !image.src) {
    return null; // Prevent rendering if image or image.src is undefined
  }

  return (
    <div
      className="fixed inset-0 bg-black/90 flex items-center justify-center z-[1000]"
      onClick={onClose}
    >
      <style jsx>{`
        .lightbox-image {
          max-width: 90%;
          max-height: 90%;
          object-fit: contain;
        }
        .close-button {
          position: absolute;
          top: 20px;
          right: 20px;
          background: white;
          border: none;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          font-size: 24px;
        }
      `}</style>
      <button className="close-button" onClick={onClose}>
        ×
      </button>
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        className="lightbox-image"
      />
    </div>
  );
}
