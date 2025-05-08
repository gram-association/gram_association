// app/program/[id]/page.tsx
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

export default function ProgramPage({ params }: { params: { id: string } }) {
  // Access the dynamic parameter 'id'
  const { id } = params;

  // Example: If ID is invalid, show 404
  if (!id) {
    notFound();
  }

  return (
    <div>
      <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-[linear-gradient(to_bottom,_#1D352E_600px,_white_600px)]">
        <section className="relative">
          <div className=" h-[500px] min-w-screen">
            <div className="absolute  inset-0">
              <Image
                src="/Rectangle 25.png"
                alt="community"
                width={500}
                height={500}
                className="object-cover mt-60 w-6xl  mx-auto  "
              />
              <div className="w-6xl mt-8 mx-auto">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat. Duis aute irure dolor in reprehenderit
                  in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                  in culpa qui officia deserunt mollit anim id est laborumLorem
                  ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum
                </p>
              </div>
            </div>
            <div className=" ">
              <div className="relative z-10  w-lg ml-26  py-10 px-2  text-white">
                <p className="text-sm">
                  Our Programs / Program {id.toUpperCase()}
                </p>
                <h1 className="text-6xl  mt-2 ">Program {id.toUpperCase()}</h1>
              </div>
              <div className="relative z-10  px-2 text-white w-7xl mb-10 ">
                <p className="text-sm ml-26 ">
                  Our education initiatives focus on providing quality education
                  to children in underserved communities through school
                  construction, teacher training, and learning resources. We
                  believe that education is a fundamental right and the key to
                  breaking the cycle of poverty.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#F8F1E9] w-4xl py-6  flex justify-center mt-96 items-center">
          <div className="flex flex-col items-center gap-8">
            <h2 className="text-gray-700 text-xl font-semibold">Our Impact</h2>
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              <div className="text-center">
                <p className="text-4xl font-bold text-[#5A829A]">35</p>
                <p className="text-sm text-gray-600">Schools Built</p>
              </div>
              <div className="hidden md:block h-12 w-px bg-gray-300"></div>
              <div className="text-center">
                <p className="text-4xl font-bold text-[#5A829A]">15 K+</p>
                <p className="text-sm text-gray-600">Students Reached</p>
              </div>
              <div className="hidden md:block h-12 w-px bg-gray-300"></div>
              <div className="text-center">
                <p className="text-4xl font-bold text-[#5A829A]">850</p>
                <p className="text-sm text-gray-600">Teachers Trained</p>
              </div>
              <div className="hidden md:block h-12 w-px bg-gray-300"></div>
              <div className="text-center">
                <p className="text-4xl font-bold text-[#5A829A]">92%</p>
                <p className="text-sm text-gray-600">Graduation Rate</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="mt-8">
            <p className="container mx-auto text-center  w-fit rounded-lg px-1 text-xl mb-4 text-gray-700 font-medium flex items-center">
              Our Partners
            </p>

            <div className="flex justify-center space-x-8 max-w-5xl mx-auto">
              {Array(4)
                .fill("Global Education Fund")
                .map((partner, index) => (
                  <div
                    key={index}
                    className="bg-white p-8  text-center w-xl rounded border"
                  >
                    <p className=" text-gray-600">{partner}</p>
                  </div>
                ))}
            </div>
          </div>
        </section>
        <section>
          <div className="bg-[#BAD1CA] w-screen mt-20 py-12">
            <div className="max-w-4xl mx-auto px-4">
              <h1 className="text-3xl tracking-wider text-center mb-8">
                Support Our Programs
              </h1>
              <div className="w-6xl grid grid-cols-1 md:grid-cols-2 gap-6 -ml-40">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h2 className="text-xl font-semibold mb-4">Donate</h2>
                  <p className="text-gray-600 mb-6 text-sm">
                    Your generous contribution helps us expand our programs and
                    reach more communities. Every donation, no matter the size,
                    makes a difference.
                  </p>
                  <Link href="/contact-us">
                    <button className="bg-[#538C7B] text-white px-6 py-2 rounded-full hover:bg-teal-700 transition">
                      DONATE NOW
                    </button>
                  </Link>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h2 className="text-xl font-semibold mb-4">Volunteer</h2>
                  <p className="text-gray-600 mb-6 text-sm">
                    Join our team of dedicated volunteers and contribute your
                    skills, time, and passion to support our programs and make a
                    direct impact.
                  </p>
                  <Link href="/contact-us">
                    <button className="bg-[#538C7B] text-white px-6 py-2 rounded-full hover:bg-teal-700 transition">
                      BECOME A VOLUNTEER
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
