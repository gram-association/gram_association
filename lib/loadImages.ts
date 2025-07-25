import fs from "fs/promises";
import path from "path";
import sharp from "sharp";

export interface ImageType {
  id: string;
  src: string;
  alt: string;
  description: string;
  width: number;
  height: number;
}

const imageExtensions = [".jpg", ".jpeg", ".png", ".gif", ".webp"];

export async function getAllImages(
  dir: string,
  basePath: string = ""
): Promise<ImageType[]> {
  const images: ImageType[] = [];
  const entries = await fs.readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    const relativePath = path.join(basePath, entry.name).replace(/\\/g, "/");

    if (entry.isDirectory()) {
      const subImages = await getAllImages(fullPath, relativePath);
      images.push(...subImages);
    } else if (
      imageExtensions.includes(path.extname(entry.name).toLowerCase())
    ) {
      try {
        const metadata = await sharp(fullPath).metadata();
        const cleanRelativePath = relativePath.replace(/^\/+|\/+$/g, "");

        images.push({
          id: cleanRelativePath.replace(/[\/\\]/g, "_"),
          src: `/${cleanRelativePath}`, // ✅ usable in <Image src />
          alt: entry.name,
          description: `Image: ${entry.name}`,
          width: metadata.width || 300,
          height: metadata.height || 300,
        });
      } catch (err) {
        console.warn(`⚠️ Failed to process ${relativePath}:`, err);
      }
    }
  }

  return images;
}
