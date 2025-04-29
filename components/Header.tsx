import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <>
      {/* <div className="bg-emerald-900 h-[500px] flex justify-center                 "> */}
      <header className="bg-white  px-4 rounded-3xl border w-3xl h-14  m-6       ">
        <div className="container mx-auto flex items-center justify-between">
          <nav className="flex items-center space-x-2">
            <Link
              href="/"
              className="px-3 py-1 rounded-full bg-white text-black text-sm"
            >
              Home
            </Link>
            <Link
              href="/about-us"
              className="px-3 py-1 rounded-full text-black text-sm"
            >
              About Us
            </Link>
            <Link
              href="/our-programs"
              className="px-3 py-1 rounded-full text-black text-sm"
            >
              Our Programs
            </Link>
            <img
              src="Logo.png"
              alt="GRAM Association Logo"
              width={140}
              height={44}
              className="mx2"
            />
            <Link
              href="/water-ride"
              className="px-3 py-1 rounded-full text-black text-sm"
            >
              Water Ride
            </Link>
            <Link
              href="/media"
              className="px-3 py-1 rounded-full text-black text-sm"
            >
              Media
            </Link>
            <Link
              href="/contact-us"
              className="px-3 py-1 rounded-full bg-green-600 text-white text-sm"
            >
              CONTACT US
            </Link>
          </nav>
        </div>
      </header>
      {/* </div> */}
    </>
  );
};

export default Header;
