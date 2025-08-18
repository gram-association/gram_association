"use client";

const RouteSection = () => {
  return (
    <section className="bg-[#BAD1CA] min-w-screen w-full lg:px-32  flex justify-start lg:justify-center md:justify-center items-center p-4 pt-4 sm:pt-6 md:pt-8  animate-fade-in">
      <div className=" w-full items-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 pb-6 sm:pb-8 md:pb-10">
        <div className="mb-5">
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-100">
            The Route
          </h3>
          <h4 className="text-lg sm:text-xl md:text-2xl font-medium text-gray-600 dark:text-gray-300">
            Tracing India’s Water Wisdom
          </h4>
        </div>

        <div className="overflow-x-auto  border-2 border-gray-400 rounded-2xl shadow-2xl pb-4 md:pb-0 ">
          <div className="flex flex-row items-center border whitespace-nowrap min-w-max py-4 px-2 rounded-xl bg-[#ecf5f2] dark:bg-gray-700/30 shadow-lg gap-x-4 sm:gap-x-6 md:gap-x-8">
            {[
              "Jharkhand",
              "West Bengal",
              "Meghalaya",
              "Tripura",
              "Mizoram",
              "Manipur",
              "Nagaland",
              "Arunachal Pradesh",
              "Assam",
              "Sikkim",
              "Bihar",
              "Uttar Pradesh",
              "Uttarakhand",
              "Himachal Pradesh",
              "Jammu & Kashmir",
              "Punjab",
              "Haryana",
              "Delhi",
            ].map((state, index) => (
              <div key={state} className="flex items-center">
                {/* Station (Dot with Number) */}
                <div className="flex flex-col items-center group relative flex-shrink-0 py-2">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#5A829A] dark:bg-blue-400 flex items-center justify-center text-white font-bold text-sm sm:text-base shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:shadow-lg flex-none">
                    {index + 1}
                  </div>
                  <span className="mt-2 text-xs sm:text-sm md:text-base font-medium text-gray-700 dark:text-gray-200 group-hover:text-[#5A829A] dark:group-hover:text-blue-400 transition-colors duration-200">
                    {state}
                  </span>
                </div>

                {/* Arrow (if not last) */}
                {index < 17 && (
                  <div className="flex-shrink-0">
                    <span className="text-gray-500 dark:text-gray-400 text-lg sm:text-xl">
                      →
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RouteSection;
