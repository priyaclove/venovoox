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
          {/* <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Users className="text-gray-200 w-24 h-24" />
            </motion.div>
          </div> */}
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
            <p className=" text-justifytext-gray-600 leading-relaxed mb-6">
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

        {/* Our Services */}
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

          <h2 className="text-3xl font-semibold text-gray-800 mb-10 text-center">
            <span className="relative inline-block">
              <span className="relative z-10">MEET OUR EXPERTS</span>
              <span className="absolute bottom-0 left-0 w-full h-2 bg-red-100 z-0 opacity-70 -mb-1"></span>
            </span>
          </h2>

         <div className="grid md:grid-cols-3 gap-8">
  {/* Expert 1 */}
  <motion.div
    initial={{ y: 30, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true, amount: 0.5 }}
    className="border rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 text-center"
  >
    <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden">
     <Image
  src="/expert.avif"
  alt="Mr. Rakesh Iyer"
  width={500} // or any preferred width
  height={500} // or any preferred height
  className="w-full h-full object-cover"
/>
    </div>
    <h3 className="text-lg font-semibold text-gray-800 mb-2">
      Mr. Rakesh Iyer
    </h3>
    <p className=" text-justifytext-sm text-gray-500 mb-1">
      Compliance & Risk Specialist
    </p>
    <p className=" text-justifytext-gray-600 text-sm">
      12+ years in regulatory compliance and forensic auditing across Malaysia & Singapore.
    </p>
  </motion.div>

  {/* Expert 2 */}
  <motion.div
    initial={{ y: 30, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true, amount: 0.5 }}
    className="border rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 text-center"
  >
    <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden">
     <Image
  alt="Ms. Sarah Lim"
  src="/expert.avif"
  width={500} // or any preferred width
  height={500} // or any preferred height
  className="w-full h-full object-cover"
/>
    </div>
    <h3 className="text-lg font-semibold text-gray-800 mb-2">
      Ms. Sarah Lim
    </h3>
    <p className=" text-justifytext-sm text-gray-500 mb-1">
      Talent & Screening Consultant
    </p>
    <p className=" text-justifytext-gray-600 text-sm">
      Expert in executive vetting and psychometric profiling with 10+ years of HR experience.
    </p>
  </motion.div>

  {/* Expert 3 */}
  <motion.div
    initial={{ y: 30, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true, amount: 0.5 }}
    className="border rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 text-center"
  >
    <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden">
   <Image
  src="/expert.avif"
alt="Dr. Anjali Menon"
  width={500} // or any preferred width
  height={500} // or any preferred height
  className="w-full h-full object-cover"
/>
    </div>
    <h3 className="text-lg font-semibold text-gray-800 mb-2">
      Dr. Anjali Menon
    </h3>
    <p className=" text-justifytext-sm text-gray-500 mb-1">
      HR & Organizational Strategy Expert
    </p>
    <p className=" text-justifytext-gray-600 text-sm">
      15+ years in HR strategy, risk reduction, and leadership consulting for global firms.
    </p>
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
