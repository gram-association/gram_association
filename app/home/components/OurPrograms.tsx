import Image from "next/image";
import Link from "next/link";

export default function OurPrograms() {
  return (
    <>
      <main className="min-w-screen">
        <div className="  flex flex-col items-center py-8">
          <div>
            <p className="container mx-auto text-center bg-gray-100 w-fit rounded-lg px-1 text-sm  text-gray-700 flex items-center mb-4">
              Our Programs
            </p>
            <h1 className="text-4xl text-center text-gray-800 mb-12">
              Making a Lasting Impact
            </h1>
          </div>

          <div className="w-fusll min-w-screen flex flex-col  px-4">
            <div className="flex flex-col md:flex-row ">
              <div className="flex-1 bg-pink-100 p-6 ">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  Program A
                </h2>
                <p className="text-gray-600 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <Link href="/ProgramA">
                  <button className="bg-teal-600 text-white px-4 py-2 rounded-full hover:bg-teal-700 transition">
                    Read More
                  </button>
                </Link>
              </div>

              <div className="flex-1 bg-gray-300 h-full w-full   ">
                <Image src="/program A.png" alt="" width={800} height={500} />
              </div>
            </div>

            <div className="flex flex-col md:flex-row ">
              <div className="flex-1 bg-teal-100 p-6 ">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  Program B
                </h2>
                <p className="text-gray-600 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>

                <button className="bg-teal-600 text-white px-4 py-2 rounded-full hover:bg-teal-700 transition">
                  Read More
                </button>
              </div>
              <div className="flex-1 bg-gray-300 h-full ">
                <Image src="/story-image.png" alt="" width={800} height={500} />
              </div>
            </div>
          </div>

          <div className="mt-8">
            <Link href="/our-programs">
              <button className="border-2 border-teal-600 text-teal-600 px-6 py-2 rounded-full hover:bg-teal-600 hover:text-white transition">
                View All
              </button>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
