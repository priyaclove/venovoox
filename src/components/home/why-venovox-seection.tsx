"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const steps = [
  {
    traditional: "Traditional Step 1",
    traditionalDesc: "Slow, manual processes with outdated technology",
    venovox: "Venovox Step 1",
    venovoxDesc: "Automated, AI-powered verification in real-time"
  },
  {
    traditional: "Traditional Step 2",
    traditionalDesc: "Slow, manual processes with outdated technology",
    venovox: "Venovox Step 2",
    venovoxDesc: "Automated, AI-powered verification in real-time"
  },
  {
    traditional: "Traditional Step 3",
    traditionalDesc: "Slow, manual processes with outdated technology",
    venovox: "Venovox Step 3",
    venovoxDesc: "Automated, AI-powered verification in real-time"
  },
  {
    traditional: "Traditional Step 4",
    traditionalDesc: "Slow, manual processes with outdated technology",
    venovox: "Venovox Step 4",
    venovoxDesc: "Automated, AI-powered verification in real-time"
  },
];

const WhyDifferent = () => {
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    // Check screen size on initial load
    setIsDesktop(window.innerWidth >= 768);

    // Update on resize
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="w-full bg-[#f8f9fb] py-12 md:py-16 px-4 md:px-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 text-black">
        Why Venovox Is Different
      </h2>

      {isDesktop ? (
        <DesktopLayout />
      ) : (
        <MobileLayout />
      )}
    </section>
  );
};

const DesktopLayout = () => {
  return (
    <div className="relative max-w-5xl mx-auto">
      {/* Connector lines */}
      {steps.map((_, i) => (
        <div
          key={i}
          className="absolute left-1/2 transform -translate-x-1/2 h-[2px] bg-red-500"
          style={{
            top: `${i * 140 + 65}px`,
            width: "120px",
            zIndex: 0,
          }}
        />
      ))}

      <div className="grid md:grid-cols-2 gap-y-16 relative z-10">
        {/* Traditional Steps */}
        <div className="flex flex-col gap-16">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-gray-100 rounded-lg px-6 py-5 shadow text-left"
            >
              <h3 className="font-semibold text-lg text-gray-800">{step.traditional}</h3>
              <p className="text-sm text-gray-600 mt-2">
                {step.traditionalDesc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Venovox Steps */}
        <div className="flex flex-col gap-16">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="border border-red-500 rounded-lg px-6 py-5 shadow text-left bg-white"
            >
              <h3 className="font-semibold text-lg text-black">{step.venovox}</h3>
              <p className="text-sm text-gray-700 mt-2">
                {step.venovoxDesc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const MobileLayout = () => {
  return (
    <div className="max-w-md mx-auto">
      {steps.map((step, i) => (
        <div key={i} className="mb-12">
          {/* Step number indicator */}
          <div className="flex justify-center mb-6">
            <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center text-white font-bold">
              {i + 1}
            </div>
          </div>
          
          {/* Traditional card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="bg-gray-100 rounded-lg px-6 py-5 shadow text-left mb-4"
          >
            <div className="flex items-center mb-2">
              <div className="bg-gray-300 w-2 h-2 rounded-full mr-2"></div>
              <h3 className="font-semibold text-lg text-gray-800">Traditional</h3>
            </div>
            <h4 className="font-medium text-base text-gray-700">{step.traditional}</h4>
            <p className="text-sm text-gray-600 mt-2">
              {step.traditionalDesc}
            </p>
          </motion.div>
          
          {/* Connector line */}
          <div className="flex justify-center my-4">
            <div className="h-6 w-0.5 bg-red-500"></div>
          </div>
          
          {/* Venovox card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="border border-red-500 rounded-lg px-6 py-5 shadow text-left bg-white"
          >
            <div className="flex items-center mb-2">
              <div className="bg-red-500 w-2 h-2 rounded-full mr-2"></div>
              <h3 className="font-semibold text-lg text-black">Venovox</h3>
            </div>
            <h4 className="font-medium text-base text-gray-900">{step.venovox}</h4>
            <p className="text-sm text-gray-700 mt-2">
              {step.venovoxDesc}
            </p>
          </motion.div>
          
          {/* Bottom connector for all but last item */}
          {i < steps.length - 1 && (
            <div className="flex justify-center my-6">
              <div className="h-10 w-0.5 bg-gray-300"></div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default WhyDifferent;