import Image from "next/image";

export default function AboutLogo() {
  return (
    <div className="flex items-center justify-center  sm:p-8">
      <div className=" w-full">
        <p className="inline-block bg-[#DEE6EB] dark:bg-gray-700 w-fit rounded-full text-sm sm:text-base text-gray-700 dark:text-gray-200 px-3 py-1 mb-4">
          About GRAM logo
        </p>
        <div className="flex justify-center">
          <Image
            src="/logo-Display.png"
            alt="GRAM Association Logo"
            width={700}
            height={500}
            className="object-contain"
          />
          <div className="ml-4">
            <p className="font-sourceSans3 text-base sm:text-[17px] text-gray-600 dark:text-gray-200 text-justify leading-relaxed">
              This logo visually represents a comprehensive approach to
              environmental and social sustainability. The four individual icons
              symbolize key areas: Sustainable Living, Reforestation, Rural
              Welfare, and Water Conservation. When combined, these elements
              form a unified emblem, illustrating that these interconnected
              initiatives contribute to a holistic and thriving future.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
