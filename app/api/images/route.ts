import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";
import sharp from "sharp";

interface ImageType {
  id: string;
  src: string;
  alt: string;
  description: string;
  width: number;
  height: number;
}

const imageExtensions = [".jpg", ".jpeg", ".png", ".gif", ".webp"];

async function getAllImages(
  dir: string,
  basePath: string = ""
): Promise<ImageType[]> {
  const images: ImageType[] = [];
  try {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    console.log(`Scanning directory: ${dir}`);
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      const relativePath = path.join(basePath, entry.name).replace(/\\/g, "/"); // Normalize to forward slashes
      if (entry.isDirectory()) {
        const subImages = await getAllImages(fullPath, relativePath);
        images.push(...subImages);
      } else if (
        imageExtensions.includes(path.extname(entry.name).toLowerCase())
      ) {
        try {
          const imagePath = path.join(dir, entry.name);
          const metadata = await sharp(imagePath).metadata();
          const cleanRelativePath = relativePath.replace(/^\/+|\/+$/g, "");
          images.push({
            id: cleanRelativePath.replace(/[\/\\]/g, "_"),
            src: `/${cleanRelativePath}`,
            alt: entry.name,
            description: `Image: ${entry.name}`,
            width: metadata.width || 300,
            height: metadata.height || 300,
          });
          console.log(`Processed image: /${cleanRelativePath}`);
        } catch (error) {
          console.warn(`Failed to process image ${relativePath}:`, error);
          continue;
        }
      }
    }
  } catch (error) {
    console.error(`Error reading directory ${dir}:`, error);
    throw error;
  }
  return images;
}

export async function GET() {
  try {
    const publicDir = path.join(process.cwd(), "public");
    console.log(`Scanning directory: ${publicDir}`);
    const images = await getAllImages(publicDir);
    console.log(`Found ${images.length} images`);
    return NextResponse.json({ images });
  } catch (error) {
    console.error("Error fetching images:", error);
    return NextResponse.json(
      { error: "Failed to fetch images" },
      { status: 500 }
    );
  }
}
