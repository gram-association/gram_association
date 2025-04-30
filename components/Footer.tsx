import { Mail, PhoneCall } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#7D463C] text-white p-8 px-16 flex flex-col md:flex-row justify-between items-center text-sm">
      <div className="">
        <img src="/image.png" alt="GRAM Association Logo" className="mr-2 " />
        <div>
          <p>
            © 2024 Groundwater & Reforestation Adaptive Management Association,
            All rights reserved.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-20">
        <div>
          <p className="font-bold mb-2">Quick Links</p>
          <a href="#" className="block text-white hover:underline">
            Home
          </a>
          <a href="#" className="block text-white hover:underline">
            About Us
          </a>
          <a href="#" className="block text-white hover:underline">
            Our Programs
          </a>
          <a href="#" className="block text-white hover:underline">
            Water Ride
          </a>
          <a href="#" className="block text-white hover:underline">
            Media
          </a>
        </div>
        <div>
          <p className="font-bold mb-2">Contact Us</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor
          </p>
          <p>
            <span className="mr-1">
              <Mail />
            </span>{" "}
            mail@gramassociation.org
          </p>
          <p>
            <span className="mr-1">
              <PhoneCall />
            </span>{" "}
            +91 9354453917
          </p>
          <div className="flex space-x-2 mt-2">
            <a href="#">
              <span className="text-2xl">🇫</span>
            </a>
            <a href="#">
              <span className="text-2xl">🇮</span>
            </a>
            <a href="#">
              <span className="text-2xl">🇴</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
