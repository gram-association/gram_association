import { Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "./components/Contact-form";
import Link from "next/link";
import Image from "next/image";

export default function ContactUs() {
  return (
    <main className="flex min-h-screen bg-[linear-gradient(to_bottom,_#1D352E_440px,_white_0)] dark:bg-[linear-gradient(to_bottom,_#052e0c_600px,_#0f172a_600px)] p-4 sm:p-8 md:p-12 lg:p-20 ">
      <div className="flex flex-col items-center justify-between w-full max-w-7xl mx-auto">
        <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 mt-28 sm:mt-16 lg:mt-24 animate-fade-in">
          {/* Contact Info Section */}
          <div className="w-full lg:w-1/2 space-y-6 text-white px-4 sm:px-6 lg:pl-10">
            <div>
              <span className="inline-block w-fit px-3 py-1 bg-gray-200 text-[#1a3029] rounded-full text-xs sm:text-sm font-medium mb-4">
                Contact Us
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Get in Touch
              </h1>
            </div>

            <div className="space-y-4">
              <div className="flex items-start hover:scale-105 transition-transform duration-300">
                <MapPin className="w-5 h-5 mt-1 mr-3 flex-shrink-0" />
                <p className="text-sm sm:text-base leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </p>
              </div>

              <div className="flex items-center hover:scale-105 transition-transform duration-300">
                <Mail className="w-5 h-5 mr-3 flex-shrink-0" />
                <Link
                  href="mailto:mail@gramassociation.org"
                  className="hover:underline text-sm sm:text-base"
                  aria-label="Email us"
                >
                  mail@gramassociation.org
                </Link>
              </div>

              <div className="flex items-center hover:scale-105 transition-transform duration-300">
                <Phone className="w-5 h-5 mr-3 flex-shrink-0" />
                <a
                  href="tel:+919354453917"
                  className="hover:underline text-sm sm:text-base"
                  aria-label="Call us"
                >
                  +91 9354453917
                </a>
              </div>
            </div>

            <div className="space-y-4 mt-8">
              <h3 className="text-lg sm:text-xl text-black dark:text-gray-200 mt-24 sm:mt-2 font-medium">
                Find us here
              </h3>
              <div className="h-64 sm:h-72 rounded-lg overflow-hidden transition-transform hover:scale-[1.02] duration-300">
                <Image
                  src="/map-image.png"
                  alt="Map location"
                  width={518}
                  height={250}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="w-full lg:w-1/2 bg-white dark:bg-gray-800 drop-shadow-lg text-gray-800 dark:text-gray-200 rounded-lg p-4 sm:p-6 md:p-8 mt-8 lg:mt-0 animate-slide-up">
            <ContactForm />
          </div>
        </div>
      </div>

      {/* Custom CSS for Animations */}
      {/* <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
        }
      `}</style> */}
    </main>
  );
}
