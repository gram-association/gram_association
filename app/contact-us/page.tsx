import { Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "./components/Contact-form";
import Link from "next/link";
import Image from "next/image";

export default function ContactUs() {
  return (
    <main className="flex min-h-screen  p-20 bg-[linear-gradient(to_bottom,_#1D352E_440px,_white_0)]">
      <div className="flex flex-col items-center justify-between p-4">
        <div className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 pt-16 lg:pt-24">
          <div className="w-full lg:w-1/2 space-y-6 text-white px-4 lg:pl-10">
            <div>
              <span className="inline-block w-fit px-3 py-1 bg-gray-200 text-[#1a3029] rounded-full text-xs sm:text-sm font-medium mb-4">
                Contact Us
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Get in Touch
              </h1>
            </div>

            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mt-1 mr-3 flex-shrink-0" />
                <p className="text-sm sm:text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </p>
              </div>

              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 flex-shrink-0" />
                <Link
                  href="mailto:mail@gramassociation.org"
                  className="hover:underline text-sm sm:text-base"
                >
                  mail@gramassociation.org
                </Link>
              </div>

              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 flex-shrink-0" />
                <a
                  href="tel:+919354453917"
                  className="hover:underline text-sm sm:text-base"
                >
                  +91 9354453917
                </a>
              </div>
            </div>

            <div className="space-y-4 mt-8">
              <h3 className="text-lg sm:text-xl text-black font-medium">
                Find us here
              </h3>
              <div className="h-64 bg-gray-200 rounded-lg overflow-hidden">
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

          <div className="w-full lg:w-1/2 bg-white drop-shadow-lg text-gray-800 rounded-lg p-4 sm:p-6 md:p-8 mt-8 lg:mt-0">
            <ContactForm />
          </div>
        </div>
      </div>
    </main>
  );
}
