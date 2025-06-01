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
      <div className="max-w-6xl mx-auto space-y-24 relative ">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center relative"
        >

          <h1 className="text-4xl md:text-5xl font-bold text-red-700 mb-4 pt-12">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="block"
            >
              Hiring Made <span className="text-gray-800">Smooth</span>
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="block"
            >
              & <span className="text-gray-800">Transparent</span>
            </motion.span>
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Empowering businesses with streamlined, trustworthy hiring and
            advisory services.
          </motion.p>
        </motion.div>

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
              Our experts are ready to discuss your unique needs and craft a
              solution that drives results.
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
