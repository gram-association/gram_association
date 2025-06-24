import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#7D463C] dark:bg-gray-900 text-white dark:text-gray-200 px-4 py-8 sm:px-8 lg:px-16 flex flex-col gap-8 sm:gap-28 md:flex-row md:justify-between md:items-start text-sm">
      <div className="w-full md:w-2/5 lg:w-1/3 flex flex-col items-center md:items-start">
        <Image
          src="/GRAM logotype full.jpg"
          alt="GRAM Association Logo"
          width={500}
          height={200}
          className="w-68 h-auto lg:w-96"
        />
        <div className="mt-4 text-center w-72 sm:w-[470px] md:text-left">
          <p className="text-sm sm:text-xs text-white dark:text-gray-300">
            © 2024 Groundwater & Reforestation Adaptive Management Association,
            All rights reserved.
          </p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row sm:justify-between gap-8 md:gap-24 w-full md:w-3/5 lg:w-2/3">
        <div className="flex-1">
          <p className="text-lg sm:text-xl font-medium mb-4 text-left sm:text-left text-white dark:text-gray-100">
            Quick Links
          </p>
          <div className="flex flex-col items-start sm:items-start gap-2">
            <Link
              href="/home"
              className="text-white dark:text-gray-300 hover:underline"
            >
              Home
            </Link>
            <Link
              href="/about-us"
              className="text-white dark:text-gray-300 hover:underline"
            >
              About Us
            </Link>
            <Link
              href="/our-programs"
              className="text-white dark:text-gray-300 hover:underline"
            >
              Our Programs
            </Link>
            <Link
              href="/water-ride"
              className="text-white dark:text-gray-300 hover:underline"
            >
              Water Ride
            </Link>
            <Link
              href="/media"
              className="text-white dark:text-gray-300 hover:underline"
            >
              Media
            </Link>
          </div>
        </div>
        <div className="flex-1">
          <p className="text-lg sm:text-xl font-medium mb-4 text-left sm:text-left text-white dark:text-gray-100">
            Contact Us
          </p>
          <div className="space-y-3 flex flex-col items-start sm:items-start">
            <div className="flex items-start w-full max-w-xs">
              <MapPin className="w-5 h-5 mt-1 mr-3 flex-shrink-0 text-white dark:text-gray-300" />
              <p className="text-xs sm:text-sm text-white dark:text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor
              </p>
            </div>
            <div className="flex items-center">
              <Mail className="w-5 h-5 mr-3 flex-shrink-0 text-white dark:text-gray-300" />
              <Link
                href="mailto:mail@gramassociation.org"
                className="text-white dark:text-gray-300 hover:underline text-xs sm:text-sm"
              >
                mail@gramassociation.org
              </Link>
            </div>
            <div className="flex items-center">
              <Phone className="w-5 h-5 mr-3 flex-shrink-0 text-white dark:text-gray-300" />
              <a
                href="tel:+919354453917"
                className="text-white dark:text-gray-300 hover:underline text-xs sm:text-sm"
              >
                +91 9354453917
              </a>
            </div>
            <div className="flex space-x-4 mt-4">
              <a
                href="#"
                className="bg-gray-100 dark:bg-gray-700 text-[#7a4e45] dark:text-gray-200 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              >
                <FaFacebookF className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="bg-white dark:bg-gray-700 text-[#7a4e45] dark:text-gray-200 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              >
                <FaLinkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="bg-white dark:bg-gray-700 text-[#7a4e45] dark:text-gray-200 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
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
