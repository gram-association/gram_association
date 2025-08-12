"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (href: string) => pathname === href;

  return (
    <>
      {/* Mobile Navigation Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/30 bg-opacity-50 z-50 lg:hidden"
          onClick={toggleMenu}
        />
      )}

      {/* Mobile Navigation Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white dark:bg-gray-900 z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleMenu} aria-label="Close menu">
            <X className="h-6 w-6 text-gray-900 dark:text-white" />
          </button>
        </div>
        <nav className="flex flex-col space-y-6 px-6 py-8">
          <Link
            href="/home"
            className={`text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 text-base font-medium ${
              isActive("/home") ? "font-bold" : ""
            }`}
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            href="/about-us"
            className={`text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 text-base font-medium ${
              isActive("/about-us") ? "font-bold" : ""
            }`}
            onClick={toggleMenu}
          >
            About Us
          </Link>
          <Link
            href="/our-programs"
            className={`text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 text-base font-medium ${
              isActive("/our-programs") ? "font-bold" : ""
            }`}
            onClick={toggleMenu}
          >
            Our Programs
          </Link>
          <Link
            href="/water-ride"
            className={`text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 text-base font-medium ${
              isActive("/water-ride") ? "font-bold" : ""
            }`}
            onClick={toggleMenu}
          >
            Water Ride
          </Link>
          <Link
            href="/media"
            className={`text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 text-base font-medium ${
              isActive("/media") ? "font-bold" : ""
            }`}
            onClick={toggleMenu}
          >
            Media
          </Link>
          <Link
            href="/contact-us"
            className={`w-full py-2 bg-[#538C7B] dark:bg-[#4a7a6e] rounded-full text-white text-center text-base font-medium hover:bg-green-700 dark:hover:bg-green-800 transition-colors ${
              isActive("/contact-us") ? "font-bold" : ""
            }`}
            onClick={toggleMenu}
          >
            CONTACT US
          </Link>
        </nav>
      </div>

      {/* Header */}
      <header className="py-2   px-4 top-14 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 border rounded-full shadow-lg bg-white dark:bg-gray-900 w-full max-w-3xl">
        <div className="container sticky top-4 z-40 mx-auto flex items-center justify-between">
          {/* Navigation Links (Hidden on mobile, Visible on desktop) */}
          <nav className="hidden  lg:flex space-x-4 px-1">
            <Link
              href="/home"
              className={`text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 text-sm ${
                isActive("/home/") ? "font-bold " : ""
              }`}
            >
              Home
            </Link>
            <Link
              href="/about-us"
              className={`text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 text-sm w-16 ${
                isActive("/about-us/") ? "font-bold " : ""
              }`}
            >
              About Us
            </Link>
            <Link
              href="/our-programs"
              className={`text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 text-sm w-24 ${
                isActive("/our-programs/") ? "font-bold" : ""
              }`}
            >
              Our Programs
            </Link>
          </nav>
          {/* Logo (Left on mobile, Center on desktop) */}
          <div className="flex items-center lg:w-36 lg:justify-center">
            <Image
              src="/logos/GRAM_logotype.png"
              alt="GRAM Association Logo"
              width={145}
              height={40}
              className="lg:mx-1"
            />
          </div>

          {/* Navigation Links, Contact Button, and Theme Toggle (Hidden on mobile, Visible on desktop) */}
          <nav className="hidden lg:flex space-x-6 items-center px-1">
            <Link
              href="/water-ride"
              className={`text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 text-sm w-20 ${
                isActive("/water-ride/") ? "font-bold" : ""
              }`}
            >
              Water Ride
            </Link>
            <Link
              href="/media"
              className={`text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 text-sm ${
                isActive("/media/") ? "font-bold" : ""
              }`}
            >
              Media
            </Link>
            <Link
              href="/contact-us"
              className={` px-2 py-1 bg-[#538C7B] dark:bg-[#4a7a6e] rounded-full text-white text-sm hover:bg-green-700 dark:hover:bg-green-800 transition-colors text-center ${
                isActive("/contact-us/") ? "font-bold" : ""
              }`}
            >
              CONTACT US
            </Link>
          </nav>

          {/* Mobile Right Side: Theme Toggle and Menu Button */}
          <div className="flex items-center space-x-2 lg:hidden">
            {/* <ThemeToggle /> */}
            <button
              onClick={toggleMenu}
              className="p-1 text-gray-900 dark:text-white"
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>

          {/* Desktop Theme Toggle (Hidden on mobile) */}
          <div className="hidden lg:block">{/* <ThemeToggle /> */}</div>
        </div>
      </header>
    </>
  );
};

export default Header;
