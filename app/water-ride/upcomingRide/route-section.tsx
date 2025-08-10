"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const RouteSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const states = [
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
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-8 lg:px-12 xl:px-20 bg-gradient-to-b from-[#BAD1CA] to-[#A8C1B8] dark:from-gray-900 dark:to-gray-800">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-100">
          The Route
        </h3>
        <h4 className="text-lg sm:text-xl md:text-2xl font-medium text-gray-600 dark:text-gray-300 mt-2">
          Tracing India’s Water Wisdom
        </h4>
      </motion.div>

      <div ref={ref} className="overflow-x-auto pb-4 md:pb-0">
        {" "}
        {/* Removed scrollbar-hide here */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-row items-center whitespace-nowrap min-w-max py-4 px-2 rounded-xl bg-white/20 dark:bg-gray-700/30 shadow-lg gap-x-4 sm:gap-x-6 md:gap-x-8"
        >
          {states.map((state, index) => (
            <>
              {/* Station (Dot with Number) */}
              <motion.div
                key={state}
                variants={itemVariants}
                className="flex flex-col items-center group relative flex-shrink-0 py-2"
              >
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#5A829A] dark:bg-blue-400 flex items-center justify-center text-white font-bold text-sm sm:text-base shadow-md transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg flex-none">
                  {index + 1}
                </div>
                <span className="mt-2 text-xs sm:text-sm md:text-base font-medium text-gray-700 dark:text-gray-200 group-hover:text-[#5A829A] dark:group-hover:text-blue-400 transition-colors duration-200">
                  {state}
                </span>
              </motion.div>

              {/* Arrow (if not last) */}
              {index < states.length - 1 && (
                <motion.div variants={itemVariants} className="flex-shrink-0">
                  <span className="text-gray-500 dark:text-gray-400 text-lg sm:text-xl">
                    →
                  </span>
                </motion.div>
              )}
            </>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default RouteSection;
