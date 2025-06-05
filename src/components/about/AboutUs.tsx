"use client";

import { motion } from "framer-motion";
import {
  MailIcon,
  Lightbulb,
  BookOpen,
  ClipboardList,
} from "lucide-react";
import Image from "next/image";

export default function AboutUs() {
  return (
    <div className="bg-white text-gray-900 px-6 py-24 overflow-hidden">
      <div className="container mx-auto space-y-24 relative ">
        {/* Heading */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20 mt-20">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl  font-bold text-black tracking-tight"
          >
            <span className="text-red-600">Hiring Made</span> Smooth
            & Transparent </motion.h2>

          <div className="w-24 h-1 bg-gradient-to-r from-red-400 to-red-600 mx-auto mt-4 rounded-full" />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 mt-5 text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mx-auto"
          >
            <span>
              Empowering businesses with streamlined, trustworthy hiring <br /> and advisory services.
            </span>

          </motion.p>
        </div>


        {/* Our Story */}
        <motion.section
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <div className="flex items-center mb-6">
              <div className="bg-red-100 p-2 rounded-full mr-4">
                <BookOpen className="text-red-700 w-6 h-6" />
              </div>
              <h2 className="text-3xl font-semibold text-gray-800">
                Our Story
              </h2>
            </div>
            <p className=" text-justify text-gray-600 leading-relaxed mb-6">
              From a modest beginning with a small-scale operation, VENOVOX has
              come a long way in its establishment as a cutting-edge service
              provider in the Talent Management Workspace.
            </p>
            <p className=" text-justify text-gray-600 leading-relaxed">
              Our successful journey is evident in our unwavering commitment to
              excellence, novelty, and customer satisfaction. Venovox offers
              wide-ranging and holistic business solutions to help companies
              thrive competitively in the current aggressive market. With our
              professional and expert team and a proven track record of success,
              we are committed to providing unparalleled service to meet your
              business needs.
            </p>
          </div>
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative h-80 rounded-xl overflow-hidden shadow-lg"
          >
            <Image
              src="/about-us.jpg"
              alt="Our team working together"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </motion.section>

        {/* Our Approach */}
        <motion.section
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative h-80 rounded-xl overflow-hidden shadow-lg order-2 md:order-1"
          >
            <Image
              src="/our-story.png"
              alt="Our consultative approach"
              fill
              className="object-cover"
            />
          </motion.div>
          <div className="order-1 md:order-2">
            <div className="flex items-center mb-6">
              <div className="bg-red-100 p-2 rounded-full mr-4">
                <Lightbulb className="text-red-700 w-6 h-6" />
              </div>
              <h2 className="text-3xl font-semibold text-gray-800">
                Our Approach
              </h2>
            </div>
            <p className=" text-justify text-gray-600 leading-relaxed mb-6">
              Our team at VENOVOX believes in a collaborative approach designed
              to understand your unique business requirements. We work
              meticulously to identify your goals, challenges, and
              opportunities, so that we can build customized solutions tailored
              to your specific needs. Our broad and all-inclusive approach
              addresses every aspect of our clients’ businesses, from strategy
              and operations to technology and innovation, to provide a
              comprehensive solution that delivers results.
            </p>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute -top-16 -left-16 -z-10">
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            >
              <ClipboardList className="text-gray-200 w-32 h-32" />
            </motion.div>
          </div>

        </motion.section>

        {/* Contact Us CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-red-700 to-red-800 rounded-2xl p-10 text-center shadow-xl relative overflow-hidden"
        >
          <div className="absolute -right-10 -top-10 opacity-20">
            <MailIcon className="w-32 h-32 text-white" />
          </div>
          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Hiring?
            </h3>
            <p className=" text-justifytext-red-100 mb-6 max-w-2xl mx-auto">
              <span className="text-white font-semibold"> Our experts are ready to discuss your unique needs and craft a
                solution that drives results.</span>
            </p>
            <a
              href="/my-en/contact-us"
              className="inline-flex items-center gap-2 bg-white text-red-700 px-8 py-4 rounded-full hover:bg-gray-100 transition font-medium shadow-md hover:shadow-lg"
            >
              <MailIcon size={18} />
              Get in Touch
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
