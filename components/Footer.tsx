import React from "react";

const Footer = () => {
  return (
    <footer className="bg-red-900 text-white p-6 flex justify-between">
      <div>
        <img src="Logo.png" alt="GRAM Association Logo" />
        {/* <Image src="/logo.png" alt="GRAM Association Logo" width={50} height={50} /> */}
        <p>GRAM Association Management, All Rights Reserved</p>
      </div>
      <div>
        <p>Quick Links</p>
        <a href="#" className="block text-white hover:underline">
          Home 
        </a>
        <a href="#" className="block text-white hover:underline">
          About
        </a>
        <a href="#" className="block text-white hover:underline">
          Contact
        </a>
      </div>
      <div>
        <p>Contact Us</p>
        <p>Email: example@email.com</p>
        <p>Phone: 123-456-7890</p>
      </div>
    </footer>
  );
};

export default Footer;
