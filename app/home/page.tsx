import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import OurPrograms from "./components/OurPrograms";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-24 bg-[linear-gradient(to_bottom,_#1D352E_600px,_white_600px)]">
      <section className="relative">
        <div className=" h-[500px] min-w-screen">
          <div className="absolute  inset-0">
            <Image
              src="/hero-image.png"
              alt="community"
              width={1152}
              height={700}
              className="object-cover mt-60 w-6xl  mx-auto  "
            />
          </div>
          <div className="flex justify-evenly ">
            <div className="relative z-10  w-lg ml-28  py-10 px-2  text-white">
              <h1 className="text-6xl font-bold mt-10 ">
                Building a Better Future Together
              </h1>
            </div>
            <div className="hidden md:block mt-28 mx-8 h-20 w-px bg-gray-300"></div>
            <div className="relative z-10 py-10 px-2 text-white w-xl  mr-35">
              <p className="text-sm mt-16">
                GRAM Association is dedicated to empowering communities through
                sustainable development, education, healthcare, and clean water
                initiatives that create lasting change.
              </p>
              <Link href="/our-programs">
                <Button className="bg-[#5A829A] text-white  py-1 w-fit mt-5 rounded-full hover:bg-cyan-700">
                  OUR PROGRAMS
                </Button>
              </Link>
              <Link href="/contact-us">
                <Button className="border-2 ml-2  bg-transparent text-white  py-1 w-fit mt-5 rounded-full hover:bg-cyan-700">
                  GET IN TOUCH
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Impact */}
      <section className="py-16  text-cente mt-40">
        <p className="container mx-auto bg-[#DEE6EB] w-fit rounded-lg px-2  text-gray-700 flex items-center">
          Our Impact
        </p>
        <h2 className="text-4xl mt-4 text-center  mb-6">Who We Are?</h2>
        <p className="max-w-3xl mx-auto mb-8 text-sm text-center text-gray-600">
          Welcome to GRAM Association, where tradition meets innovation for a
          sustainable future. Rooted in democratic values, we empower
          marginalized communities, promote sustainable livelihoods, and revive
          traditional environmental practices. By blending ancestral wisdom with
          modern technology, we tackle climate resilience, social inclusion, and
          public welfare.
        </p>
        <div className="flex justify-center bg-[#F8F1E9] w-4xl py-8 rounded space-x-8">
          <div>
            <p className="text-4xl font-bold text-center text-[#5A829A]">
              10K+
            </p>
            <p>Lives Transformed</p>
          </div>
          <div className="hidden md:block h-12 w-px bg-gray-300"></div>

          <div>
            <p className="text-4xl font-bold text-center text-[#5A829A]">10+</p>
            <p>Villages Impacted</p>
          </div>
          <div className="hidden md:block h-12 w-px bg-gray-300"></div>

          <div>
            <p className="text-4xl font-bold text-center text-[#5A829A]">50+</p>
            <p>Women Trained</p>
          </div>
          <div className="hidden md:block h-12 w-px bg-gray-300"></div>

          <div>
            <p className="text-4xl font-bold text-center text-[#5A829A]">3</p>
            <p>Water Bodies</p>
          </div>
          <div className="hidden md:block h-12 w-px bg-gray-300"></div>

          <div>
            <p className="text-4xl font-bold text-center text-[#5A829A]">8</p>
            <p>SDG Goals</p>
          </div>
        </div>
        <Link href="about-us">
          <Button className="border-2 ml-2 mx-auto bg-transparent text-gray-700 bg-center  py-1 w-fit mt-5 rounded-full hover:bg-gray-200 flex items-center">
            LEARN MORE
          </Button>
        </Link>
      </section>

      {/* Our Vission and Mission */}
      <section className="py-16 bg-[#BAD1CA] min-w-screen space-x-2">
        <p className="container mx-auto text-center bg-[#DEE6EB] w-fit rounded-lg px-1 text-sm  text-gray-700 flex items-center">
          Our Vision & Mission
        </p>

        <h3 className="text-4xl mt-4 text-center mb-4">What Drives Us</h3>

        <div className="flex justify-center">
          <div className="max-w-md rounded-lg w-4xl  bg-white p-4">
            <h3 className="text-xl  font-bold mb-4">OUR VISSION</h3>
            <p className="text-gray-600 text-sm">
              The GRAM Association envisions an inclusive and sustainable
              society. We strive for real change that promotes environmental
              sustainability and sustainable livelihoods of marginalized
              communities. We aim to create harmony between the built and the
              natural environment for a sustainable future.
            </p>
          </div>
          <div className="max-w-md rounded-lg w-4xl ml-5 p-4 bg-white">
            <h3 className="text-xl font-bold mb-4">OUR MISSION</h3>
            <p className="text-gray-600 text-sm">
              To build nature-based solutions for climate resilience and
              sustainable livelihoods by rejuvenating indigenous environmental
              management practices melded with modern technological advancements
              of the present.
            </p>
          </div>
        </div>
      </section>

      {/* our focus areas */}
      <section className=" min-w-screen py-16 text-center ">
        <div className="ml-30">
          <p className="container  bg-[#DEE6EB] w-fit rounded-lg px-1 text-sm  text-gray-700 flex items-center mb-4">
            Our Focus Areas
          </p>
          <h2 className="text-3xl  text-start mb-6">THE 5 Es</h2>
        </div>
        <div className="flex justify-center  items-center space-x-2">
          <div>
            <Image
              src="/5Es.png"
              alt="5 Es Illustration"
              width={576}
              height={576}
              className="w-xl h-xl ml-32"
            />
            {/* <Image src="/5es-image.jpg" alt="5 Es Illustration" width={300} height={300} /> */}
          </div>
          <div className="space-y-4 text-left w-xl mr-10 -mt-18">
            <div className="flex gap-4">
              <div>
                <Image src="/Group 6.png" alt="" width={40} height={40} />
              </div>
              <div>
                <p className="font-bold ">Entrepreneurship:</p>
                <p className="text-gray-400 text-sm">
                  Fostering innovation and self-reliance through personal
                  development workshops that inspire knowledge, skills, and
                  growth.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div>
                <Image
                  src="/Group 8.png"
                  alt=""
                  width={40}
                  height={40}
                  className="w-10 h-10"
                />
              </div>
              <div>
                <p className="font-bold">Edification</p>
                <p className="text-gray-400 text-sm">
                  Enhancing learning opportunities to uplift individuals and
                  societies, fostering wisdom and progress.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div>
                <Image
                  src="/Group 7.png"
                  alt=""
                  width={40}
                  height={40}
                  className="w-10 h-10"
                />
              </div>
              <div>
                <p className="font-bold">Empowerment:</p>
                <p className="text-gray-400 text-sm">
                  Enabling people to take charge of their own growth, instilling
                  confidence, and driving positive change.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div>
                <Image
                  src="/Group 9.png"
                  alt=""
                  width={40}
                  height={40}
                  className="w-10 h-10"
                />
              </div>
              <div>
                <p className="font-bold">Education</p>
                <p className="text-gray-400 text-sm">
                  Empowering communities by ensuring access to quality education
                  and digital literacy, paving the way for a brighter future.s
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div>
                <Image
                  src="/Group 10.png"
                  alt=""
                  width={40}
                  height={40}
                  className="w-10 h-10"
                />
              </div>
              <div>
                <p className="font-bold">Environment:</p>
                <p className="text-gray-400 text-sm">
                  Promoting sustainable practices and environmental
                  consciousness to protect our planet for future generations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Programs */}
      <OurPrograms />

      {/* Get Involved */}
      <section className="py-8 bg-[#F8F1E9] min-w-screen text-center">
        <p className="container mx-auto bg-gray-100 w-fit rounded-lg px-2  text-gray-700 flex items-center">
          Get Involved
        </p>
        <h2 className="text-5xl mt-4 text-center mb-6">
          Join Us in Making a Difference
        </h2>
        <div className="flex justify-center space-x-8">
          <div className="bg-white p-6 w-sm rounded shadow">
            <Image
              src="/donate.png"
              alt="donate_img"
              width={50}
              height={50}
              className="w-12 h-12 mx-auto"
            />
            <p className="font-bold my-2">DONATE</p>
            <p className="text-sm text-gray-500">
              Your generous contribution helps us continue our work and expand
              our reach to more communities.
            </p>
            <div className="mt-8 flex justify-center text-teal-500 gap-1 ">
              <Link href="" className="  font-bold text-sm">
                DONATE NOW
              </Link>
              <ArrowRight />
            </div>
          </div>
          <div className="bg-white p-6 w-sm rounded shadow">
            <Image
              src="/Volunteer.png"
              alt="Volunteer_img"
              width={50}
              height={50}
              className="w-12 h-12 mx-auto"
            />
            <p className="font-bold my-2">VOLUNTEER</p>
            <p className="text-sm text-gray-500">
              Contribute your time, skills, and energy to support our programs
              and make a direct impact.
            </p>
            <div className="mt-8 flex justify-center text-teal-500 gap-1 ">
              <Link href="" className="  font-bold text-sm">
                BECOME A VOLUNTEER
              </Link>
              <ArrowRight />
            </div>
          </div>
          <div className="bg-white p-6 w-sm rounded shadow">
            <Image
              src="/partners.png"
              alt="partners_img"
              width={50}
              height={50}
              className="w-12 h-12 mx-auto"
            />
            <p className="font-bold my-2">PARTNER WITH US</p>
            <p className="text-sm text-gray-500">
              Join forces with us through strategic partnerships to amplify our
              impact and reach more communities.
            </p>
            <div className="mt-8 flex justify-center text-teal-500 gap-1 ">
              <Link href="" className="  font-bold text-sm">
                BECOME A PARTNER
              </Link>
              <ArrowRight />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
