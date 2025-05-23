"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section
      className="relative text-white overflow-hidden min-h-screen flex items-center"
      style={{
        backgroundImage: "url(/hero.webp)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Elevate Your <span className="text-red-600">Hiring Strategy</span>
            <br />
            with Proven Risk {" "}
            <span className="text-white font-extrabold">
               Intelligence and Background Screening
            </span>
          </h1>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/my-en/contact-us/">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-red-600 text-white font-semibold px-6 py-3 rounded-full"
              >
                Get started
              </motion.button>
            </Link>
            <Link href="/my-en/about/">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-black font-semibold px-6 py-3 rounded-full"
              >
                Learn More
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
