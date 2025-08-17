import Image from "next/image";

export default function AboutLogo() {
  return (
    <div className="flex items-center justify-center px-4 sm:px-8 py-6 sm:py-8">
      <div className="w-full max-w-7xl">
        <p className="inline-block bg-[#DEE6EB] dark:bg-gray-700 w-fit rounded-full text-xs sm:text-sm md:text-base text-gray-700 dark:text-gray-200 px-3 py-1 mb-4 sm:mb-6">
          About GRAM logo
        </p>

        <section className="w-full max-w-7xl mx-auto my-16 md:mt-10 animate-fade-in">
          <div className="flex flex-col lg:flex-row  gap-8 md:gap-12">
            <div className="w-full lg:w-1/2  order-2 lg:order-1">
              <div className="relative aspect-video w-full h-[420px] rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/logo-Display.png"
                  alt="GRAM Association Logo"
                  fill
                  className="object-contain transition-transform  duration-500 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2 order-1 lg:order-2">
              <p className="font-sourceSans3 text-base sm:text-[17px] text-gray-600 dark:text-gray-200 text-justify leading-relaxed">
                This logo visually represents a comprehensive approach to
                environmental and social sustainability. The four individual
                icons symbolize key areas: Sustainable Living, Reforestation,
                Rural Welfare, and Water Conservation. When combined, these
                elements form a unified emblem, illustrating that these
                interconnected initiatives contribute to a holistic and thriving
                future.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
