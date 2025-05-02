import { Mail, MapPin, Phone, PhoneCall } from "lucide-react";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#7D463C] text-white p-8 px-16 flex flex-col md:flex-row justify-between items-center text-sm">
      <div className="w-2xl ">
        <img src="/image.png" alt="GRAM Association Logo" />
        <div>
          <p className="text-[12px]">
            © 2024 Groundwater & Reforestation Adaptive Management Association,
            All rights reserved.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-20 ml-24 ">
        <div>
          <p className="text-xl font-medium mb-4 w-44">Quick Links</p>
          <Link href="/home" className="block text-white hover:underline">
            Home
          </Link>

          <Link href="/about-us" className="block text-white hover:underline">
            About Us
          </Link>

          <Link
            href="/our-programs"
            className="block text-white hover:underline"
          >
            Our Programs
          </Link>
          <Link href="/water-ride" className="block text-white hover:underline">
            Water Ride
          </Link>

          <Link href="/media" className="block text-white hover:underline">
            Media
          </Link>
        </div>
        <div className="ml-7">
          <p className="font-bold mb-2">Contact Us</p>
          <div className="space-y-3">
            <div className="flex items-start">
              <MapPin className="w-5 h-5 mt-1 mr-3 flex-shrink-0" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor
              </p>
            </div>

            {/* <p>
            <span className="mr-1">
            <Mail />
            </span>{" "}
            mail@gramassociation.org
            </p> */}
            <div className="flex items-start">
              <Mail className="w-5 h-5 mr-3 flex-shrink-0" />
              <Link
                href="mailto:mail@gramassociation.org"
                className="hover:underline "
              >
                mail@gramassociation.org
              </Link>
            </div>

            <div className="flex items-start">
              <Phone className="w-5 h-5 mr-3 flex-shrink-0" />
              <a href="tel:+919354453917" className="hover:underline">
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
