"use client";
import React from "react";
import { motion } from "framer-motion";


export default function IntellectualProperty() {
  return (
    <main className="bg-white text-black">
      <section className="min-h-screen px-6 py-20 max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-black mb-4"
        >
          Intellectual Property Protection
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-gray-700 mb-10"
        >
          Our Expertise in IP Protection
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-gray-700 mb-8"
        >
          The protection of intellectual property (IP) is crucial for any business to ensure its continued success. Over the last few decades, IP violations have grown from a localized issue to a multibillion-dollar market run by sophisticated criminal organizations.
          <br /><br />
          However, implementing and maintaining the right strategy for IP protection can be daunting for many businesses. At Venovox, we have worked with clients from various business sectors to develop effective strategies and implement them successfully. Our senior IP consultants have drawn from past successes and failures to keep us ahead of the curve.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-gray-700 mb-12"
        >
          We maintain excellent relationships with enforcement agencies, such as the police and customs, as well as specialized government departments in trading standards, health, food safety, and other relevant fields.
        </motion.p>

        <section className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "IP Protection Program Design",
              desc: "Tailored IP protection frameworks aligned with global and local regulations. Risk assessment and IP strategy development to minimize threats."
            },
            {
              title: "Parallel Import Detection",
              desc: "Monitoring and identifying unauthorized importation of branded goods. Enforcement strategies to prevent market dilution and revenue loss."
            },
            {
              title: "IP Infringement Investigations",
              desc: "On-ground and digital investigations into counterfeiting and unauthorized use of trademarks, patents, and copyrights. Collaboration with law enforcement to take decisive action."
            },
            {
              title: "E-Commerce IP Infringement Monitoring",
              desc: "AI-driven tools to track online counterfeit sales and unauthorized product listings. Rapid takedown procedures for violations on major online marketplaces."
            },
            {
              title: "Enforcement Action",
              desc: "Direct engagement with customs, police, and regulatory agencies to seize counterfeit goods. Support in legal proceedings and prosecution of offenders."
            },
            {
              title: "Case Management",
              desc: "Comprehensive tracking of IP violations and enforcement actions. Detailed reporting and analytics to refine IP protection strategies."
            }
          ].map(({ title, desc }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="p-6 bg-gray-100 rounded-2xl border-l-4 border-red-600 shadow-sm"
            >
              <h3 className="text-xl font-semibold text-black mb-2">{title}</h3>
              <p className="text-gray-700 text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </section>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.4 }}
          className="mt-16 text-gray-700"
        >
          <p className="mb-2">At VENOVOX, we provide strategic, intelligence-led solutions to help businesses avoid IP threats, protect brand integrity, and enforce their rights.</p>
          <p className="text-sm mt-4">
            <strong>Related Services:</strong>
            <br />
            <a href="/my-en/background-screening/counter-measures/" className="text-red-600 hover:underline">Counter Measures</a>
          </p>
        </motion.div>
      </section>
    </main>
  );
}
