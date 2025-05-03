import Link from "next/link";
import ThemeToggle from "./theme-toggle";

const Header = () => {
  return (
    <header className="py-2 px-4 top-14 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 border max-w-4xl rounded-full shadow-lg bg-white dark:bg-gray-900">
      <div className="container mx-auto flex items-center justify-between">
        {/* Navigation Links (Left Side) */}
        <nav className="flex space-x-4 px-1">
          <Link
            href="/home"
            className="text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 text-sm"
          >
            Home
          </Link>
          <Link
            href="/about-us"
            className="text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 text-sm w-16 "
          >
            About Us
          </Link>
          <Link
            href="/our-programs"
            className="text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 text-sm w-24 "
          >
            Our Programs
          </Link>
        </nav>

        {/* Logo (Center) */}
        <div className="flex items-center w-36">
          <img
            src="/logo.png"
            alt="GRAM Association Logo"
            width={120}
            height={40}
            className="mx-4"
          />
        </div>

        {/* Navigation Links, Contact Button, and Theme Toggle (Right Side) */}
        <nav className="flex space-x-6 items-center px-2">
          <Link
            href="/water-ride"
            className="text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 text-sm w-18 "
          >
            Water Ride
          </Link>
          <Link
            href="/media"
            className="text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 text-sm"
          >
            Media
          </Link>
          <Link
            href="/contact-us"
            className="w-24 px-1 py-1 bg-[#538C7B] dark:bg-[#4a7a6e] rounded-full text-white text-sm hover:bg-green-700 dark:hover:bg-green-800 transition-colors"
          >
            CONTACT US
          </Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
};

export default Header;
