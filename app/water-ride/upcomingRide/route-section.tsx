"use client";

const RouteSection = () => {
  return (
    <div className="w-full flex justify-center items-center bg-[#BAD1CA] overflow-x-hidden">
      <section className="w-full flex justify-center items-center bg-[#BAD1CA] py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-5 ">
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-gray-100">
              The Route
            </h3>
            <h4 className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-gray-600 dark:text-gray-300">
              Tracing India’s Water Wisdom
            </h4>
          </div>

          <div className="overflow-x-auto border rounded-xl shadow-2xl">
            <div className="flex flex-col sm:flex-row sm:items-center sm:whitespace-nowrap sm:min-w-max py-4 px-2 rounded-xl bg-white/20 dark:bg-gray-700/30 shadow-lg gap-y-4 sm:gap-x-4 md:gap-x-6 lg:gap-x-8">
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
                <div
                  key={state}
                  className="flex items-center justify-center sm:justify-start"
                >
                  {/* Station (Dot with Number) */}
                  <div className="flex flex-col items-center group relative py-2">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 rounded-full bg-[#5A829A] dark:bg-blue-400 flex items-center justify-center text-white font-bold text-xs sm:text-sm md:text-base shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:shadow-lg flex-none">
                      {index + 1}
                    </div>
                    <span className="mt-1 sm:mt-2 text-xs sm:text-sm md:text-base font-medium text-gray-700 dark:text-gray-200 group-hover:text-[#5A829A] dark:group-hover:text-blue-400 transition-colors duration-200">
                      {state}
                    </span>
                  </div>

                  {/* Arrow (if not last) */}
                  {index < 17 && (
                    <div className="flex-shrink-0 sm:ml-2">
                      <span className="text-gray-500 dark:text-gray-400 text-base sm:text-lg md:text-xl">
                        {window.innerWidth < 640 ? "↓" : "→"}
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RouteSection;
