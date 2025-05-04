import { documentData, images, videoData } from "@/lib/data";
import { Gallery } from "./components/Gallery";

export default function Media() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between  p-24 bg-gradient-to-b from-[#c2d8e5] to-white bg-no-repeat bg-[length:100%_500px]">
      <div className="text-center py-12">
        <p className="container mx-auto text-center bg-gray-100 w-fit rounded-lg px-1 text-sm  text-gray-700 flex items-center mb-4">
          Media
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-center ">
          Media Highlights
        </h1>
      </div>

      <div className="container mx-auto py-8 px-4">
        <Gallery images={images} videos={videoData} documents={documentData} />
      </div>
    </main>
  );
}
