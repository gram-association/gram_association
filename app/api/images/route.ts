import { readdir } from "fs/promises";
import { join } from "path";
import { NextResponse } from "next/server";

type ImageMetadata = {
  id: string;
  src: string;
  alt: string;

  width: number;
  height: number;
};

export async function GET() {
  try {
    // Path to the public/images folder
    const imagesDir = join(process.cwd(), "public", "images");

    // Read all files in the images directory
    const files = await readdir(imagesDir);

    // Filter for common image extensions
    const imageFiles = files.filter((file) =>
      /\.(jpg|jpeg|png|gif|webp)$/i.test(file)
    );

    // Create ImageType-compatible metadata with varied dimensions
    const images: ImageMetadata[] = imageFiles.map((file, index) => {
      // Generate random width and height for variety
      const width = Math.floor(Math.random() * (1200 - 400) + 400); // Between 400 and 1200
      const height = Math.floor(Math.random() * (900 - 300) + 300); // Between 300 and 900
      return {
        id: `image-${index}`,
        src: `/images/${file}`,
        alt: file.split(".")[0].replace(/-/g, " ").toUpperCase(),
        description: `Description for ${file.split(".")[0].replace(/-/g, " ")}`,
        width,
        height,
      };
    });

    return NextResponse.json({
      images,
      totalImages: imageFiles.length,
    });
  } catch (error) {
    console.error("Error reading images directory:", error);
    return NextResponse.json(
      { error: "Failed to fetch images" },
      { status: 500 }
    );
  }
}
