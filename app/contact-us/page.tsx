import { Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "./components/Contact-form";
import Link from "next/link";
import Image from "next/image";

export default function ContactUs() {
  return (
    <main className="flex min-h-screen  p-20 bg-[linear-gradient(to_bottom,_#1D352E_440px,_white_0)]">
      <div className="flex-col items-center justify-between ">
        <div className=" mx-auto flex items-center justify-between gap-28 pt-24">
          <div className="space-y-2 text-white w-md ml-10">
            <div>
              <span className="inline-block container w-fit px-2 py-1 bg-gray-200 text-[#1a3029] rounded-full text-sm font-medium mb-4">
                Contact Us
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Get in Touch
              </h1>
            </div>

            <div className="space-y-2">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mt-1 mr-3 flex-shrink-0" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </p>
              </div>

              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 flex-shrink-0" />
                <Link
                  href="mailto:mail@gramassociation.org"
                  className="hover:underline"
                >
                  mail@gramassociation.org
                </Link>
              </div>

              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 flex-shrink-0" />
                <a href="tel:+919354453917" className="hover:underline">
                  +91 9354453917
                </a>
              </div>
            </div>
            <div className="space-y-4 mt-10 w-lg  bg-white">
              <h3 className="text-xl text-black font-medium">Find us here</h3>
              <div className=" h-64 bg-gray-200 rounded-lg overflow-hidden">
                <Image
                  src="/map-image.png"
                  alt="Map location"
                  width={518}
                  height={250}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="bg-white drop-shadow-lg text-gray-800 rounded-lg p-6 md:p-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </main>
  );
}
