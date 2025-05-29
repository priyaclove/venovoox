'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const recognizedByLogos = [
  { src: '/ism.jpeg', alt: 'ISM Logo' },
  { src: '/isms1.jpeg', alt: 'ISM Logo' },
  { src: '/isms2.jpeg', alt: 'ISM Logo' },
  { src: '/isms3.jpeg', alt: 'ISM Logo' },
  { src: '/napbs-logo.png', alt: 'PBSA Logo' },
  { src: '/md-status.png', alt: 'Malaysia Digital Logo' },
  { src: '/mof.png', alt: 'MOF Registered Company Bumiputra Status Logo' },
  { src: '/hrd.png', alt: 'HRD Corp Logo' },
];

const RecognizedBy = () => {
  return (
    <section className="w-full bg-white py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        {/* Header Section - Responsive Typography */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black leading-tight"
          >
            Recognized By
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 mt-2 sm:mt-3 md:mt-4 text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mx-auto px-4"
          >
            We are proudly certified and recognized by leading authorities
          </motion.p>
        </div>

        {/* Logos Grid - Fully Responsive */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12">
          {recognizedByLogos.map((logo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{
                scale: 1.05,
                y: -5,
                transition: { duration: 0.2 }
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut"
              }}
              className="group bg-white p-3 sm:p-4 md:p-5 lg:p-6 rounded-lg sm:rounded-xl shadow-sm hover:shadow-lg md:hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-200"
            >
              <div className="relative w-full h-12 sm:h-14 md:h-16 lg:h-18 xl:h-20 flex items-center justify-center">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, (max-width: 1280px) 20vw, 16vw"
                  className="object-contain group-hover:scale-105 transition-transform duration-300"
                  style={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional responsive spacing */}
        <div className="mt-8 sm:mt-12 md:mt-16 lg:mt-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center"
          >
            <p className="text-xs sm:text-sm md:text-base text-gray-500 italic">
              Trusted by industry leaders worldwide
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RecognizedBy;