import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#7D463C] text-white px-4 py-8 sm:px-8 lg:px-16 flex flex-col gap-8 md:flex-row md:justify-between md:items-start text-sm">
      <div className="w-full md:w-2/5 lg:w-1/3 flex flex-col items-center md:items-start">
        <Image
          src="/image.png"
          alt="GRAM Association Logo"
          width={200}
          height={150}
          className="w-48 h-auto md:w-64 lg:w-80"
        />
        <div className="mt-4 text-center w-88 md:text-left">
          <p className="text-sm  sm:text-xs">
            © 2024 Groundwater & Reforestation Adaptive Management Association,
            All rights reserved.
          </p>
        </div>
      </div>
      <div className="flex flex-col-2 sm:flex-row sm:justify-between gap-8 sm:gap-12 md:gap-20 w-full md:w-3/5 lg:w-2/3">
        <div className="flex-1">
          <p className="text-lg sm:text-xl font-medium mb-4 text-left sm:text-left">
            Quick Links
          </p>
          <div className="flex flex-col items-start sm:items-start gap-2">
            <Link href="/home" className="text-white hover:underline">
              Home
            </Link>
            <Link href="/about-us" className="text-white hover:underline">
              About Us
            </Link>
            <Link href="/our-programs" className="text-white hover:underline">
              Our Programs
            </Link>
            <Link href="/water-ride" className="text-white hover:underline">
              Water Ride
            </Link>
            <Link href="/media" className="text-white hover:underline">
              Media
            </Link>
          </div>
        </div>
        <div className="flex-1">
          <p className="text-lg sm:text-xl font-medium mb-4 text-left sm:text-left">
            Contact Us
          </p>
          <div className="space-y-3 flex flex-col items-start sm:items-start">
            <div className="flex items-start w-full max-w-xs">
              <MapPin className="w-5 h-5 mt-1 mr-3 flex-shrink-0" />
              <p className="text-xs sm:text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor
              </p>
            </div>
            <div className="flex items-center">
              <Mail className="w-5 h-5 mr-3 flex-shrink-0" />
              <Link
                href="mailto:mail@gramassociation.org"
                className="hover:underline text-xs sm:text-sm"
              >
                mail@gramassociation.org
              </Link>
            </div>
            <div className="flex items-center">
              <Phone className="w-5 h-5 mr-3 flex-shrink-0" />
              <a
                href="tel:+919354453917"
                className="hover:underline text-xs sm:text-sm"
              >
                +91 9354453917
              </a>
            </div>
            <div className="flex space-x-4 mt-4">
              <a
                href="#"
                className="bg-gray-100 text-[#7a4e45] p-2 rounded-full hover:bg-gray-200 transition-colors"
              >
                <FaFacebookF className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="bg-white text-[#7a4e45] p-2 rounded-full hover:bg-gray-200 transition-colors"
              >
                <FaLinkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="bg-white text-[#7a4e45] p-2 rounded-full hover:bg-gray-200 transition-colors"
              >
                <FaInstagram className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
