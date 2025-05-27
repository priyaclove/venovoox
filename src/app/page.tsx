"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ShieldCheck, Globe, Target, Check } from 'lucide-react';
import RecognizedBy from "@/components/home/recognitions-section";
import HeroSection from "@/components/home/hero-section";


export default function Home() {
  return (
    <main className="bg-white text-black">
      {/* Hero Section */}
      <HeroSection />
      <RecognizedBy />


      {/* About Section */}
      <section id="about" className="py-20 px-6 md:px-12 lg:px-24 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              About <span className="text-red-600">VENOVOX</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-gray-700 text-justify mb-6 ">
                  VENOVOX is a premier risk management and background screening consultancy that provides specialised services in due diligence, security advisory, background checks, and intelligence analysis throughout Malaysia, the Asia-Pacific regions, and globally.
                </p>
                <p className="text-lg text-gray-700 text-justify ">
                  By leveraging local insight and global capabilities, we support businesses in mitigating risk, maintaining compliance, and enhancing operational effectiveness.
                </p>
              </div>
              <div className="relative h-80 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/about-us.jpg"
                  alt="VENOVOX Global Team"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative h-80 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/vector2.png"
                  alt="International Standards"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-6">
                  Rooted in <span className="text-red-600">Local Expertise</span>, Driven by <span className="text-red-600">International Standards</span>
                </h3>
                <p className="text-gray-700 text-justify mb-4">
                  With its business initiated in Malaysia back in 1999, today, VENOVOX is headquartered in Texas, USA. VENOVOX has become a trusted leader in risk management solutions and background screening services.
                </p>
                <p className="text-gray-700 text-justify">
                  We specialize in identifying, assessing, authenticating, and mitigating risks to people, assets, operations, and reputations.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Screening Section */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-6">
                  Your Trusted Experts in <span className="text-red-600">Background Screening</span> and <span className="text-red-600">Risk Solutions</span>
                </h3>
                <p className="text-gray-700 text-justify mb-4">
                  Our heightened screening process delivers accurate background check results with a quicker turnaround time, ensuring efficiency without compromising its quality.
                </p>
                <p className="text-gray-700 text-justify">
                  With a seamless and stress-free experience, you can rely on our proven track record of accuracy and timeliness to support your hiring and authentication needs.
                </p>
              </div>
              <div className="relative h-80 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/vector1.png"
                  alt="Screening Process"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision, Mission, Values */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Our <span className="text-red-600">Core</span> Principles
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Vision */}
              <motion.div
                className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-6">
                  <div className="bg-red-600 p-3 rounded-full mr-4">
                    <ShieldCheck className="text-white w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold">Our Vision</h3>
                </div>
                <p className="text-gray-700 text-justify">
                  As an ISO 27001-certified company, we connect global security partners to deliver expert ground support and intelligence consulting across APAC and the global region.
                </p>
              </motion.div>

              {/* Mission */}
              <motion.div
                className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-6">
                  <div className="bg-red-600 p-3 rounded-full mr-4">
                    <Target className="text-white w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold">Our Mission</h3>
                </div>
                <p className="text-gray-700 text-justify">
                  We deliver tailored risk management solutions that strengthen resilience, protect operations, and support strategic growth while upholding the highest ethical standards.
                </p>
              </motion.div>

              {/* Values */}
              <motion.div
                className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-6">
                  <div className="bg-red-600 p-3 rounded-full mr-4">
                    <Globe className="text-white w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold">Our Values</h3>
                </div>
                <ul className="space-y-3 text-gray-700 text-justify">
                  <li className="flex items-start">
                    <Check className="text-red-600 w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Reducing Risk – Proactively identify and mitigate threats</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-red-600 w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Supporting Compliance – Ensure adherence to standards</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-red-600 w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Enhancing Efficiency – Strengthen processes and boost productivity</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <blockquote className="text-xl md:text-2xl italic text-gray-800 text-center">
              <p className="relative">
                <span className="absolute -left-6 -top-4 text-red-600 text-4xl">&quot;</span>
                Resilience is not about avoiding risks, instead, it is about responding effectively when they arise.
                <span className="absolute -right-6 -bottom-4 text-red-600 text-4xl">&quot;</span>
              </p>
            </blockquote>
          </motion.div>
        </div>
      </section>
    </main>
  );
}