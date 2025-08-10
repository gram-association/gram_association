import { Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "./components/Contact-form";
import Link from "next/link";
import { Suspense } from "react";

export default function ContactUs() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-4 sm:px-6 md:px-8 lg:px-24 pt-16 pb-24 bg-[linear-gradient(to_bottom,_#1D352E_500px,_white_500px)]">
      <section className="flex flex-col w-full mt-8w-full max-w-7xl mx-auto mt-20 animate-fade-in">
        <div className="w-full flex flex-col md:flex-row md:gap-6 lg:flex-row items-center justify-between gap-6 sm:gap-8 animate-fade-in">
          {/* Contact Info Section */}
          <div className="w-full  md:w-3/5 lg:w-1/2 space-y-6 text-white ">
            <div>
              <span className="inline-block mx-auto bg-[#DEE6EB] dark:bg-gray-700 w-fit rounded-lg px-4 text-gray-700 dark:text-gray-200  items-center text-sm sm:text-base mb-4">
                Contact Us
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold mb-6">
                Get in Touch
              </h1>
            </div>

            <div className="space-y-4">
              <div className="flex items-start hover:scale-105 transition-transform duration-300">
                <MapPin className="w-5 h-5 mt-1 mr-3 flex-shrink-0" />
                <Link href="https://maps.app.goo.gl/cvhwRUCdQngrpHg77?g_st=iw">
                  <p className="text-sm sm:text-base md:text-base leading-relaxed">
                    Maya Villa, Rani Bagan Joda Talab Road, Briatu, Ranchi,
                    Jharkhand-834009
                  </p>
                </Link>
              </div>

              <div className="flex items-center hover:scale-105 transition-transform duration-300">
                <Mail className="w-5 h-5 mr-3 flex-shrink-0" />
                <Link
                  href="mailto:mail@gramassociation.org"
                  className="hover:underline text-sm sm:text-base md:text-base"
                  aria-label="Email us"
                >
                  gram.association@gmail.com
                </Link>
              </div>

              <div className="flex items-center hover:scale-105 transition-transform duration-300">
                <Phone className="w-5 h-5 mr-3 flex-shrink-0" />
                <a
                  href="tel:+919556655285"
                  className="hover:underline text-sm sm:text-base md:text-base"
                  aria-label="Call us"
                >
                  +91 9556655285
                </a>
              </div>
            </div>

            <div className="space-y-4 mt-10 sm:mt-32 md:mt-12">
              <h3 className="text-lg sm:text-xl md:text-xl lg:text-xl font-medium">
                Find us here
              </h3>
              <div className="relative h-64 sm:h-72 md:h-80 lg:h-72 rounded-lg overflow-hidden transition-transform hover:scale-[1.01] duration-300">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3018.170446156105!2d85.35717097532502!3d23.39342297891554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjPCsDIzJzM2LjMiTiA4NcKwMjEnMzUuMSJF!5e1!3m2!1sen!2sin!4v1751358741939!5m2!1sen!2sin"
                  style={{
                    border: 0,
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                  }}
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="w-full md:w-2/5 lg:w-1/2 bg-white dark:bg-gray-800 drop-shadow-lg text-gray-800 dark:text-gray-200 rounded-lg p-4 sm:p-6 md:p-6 lg:p-8 mt-8 md:mt-0 lg:mt-0 animate-slide-up ease-in">
            <Suspense fallback={<div>Loading...</div>}>
              <ContactForm />
            </Suspense>
          </div>
        </div>
      </section>
    </main>
  );
}
