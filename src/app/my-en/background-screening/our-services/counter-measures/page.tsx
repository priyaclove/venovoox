"use client";
import React from "react";
import { motion } from "framer-motion";


export default function Countermeasures() {
  return (
    <main className="bg-white text-black">
      <section className="min-h-screen px-6 py-20 max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-black mb-4"
        >
          WE DO NOT BUG; WE ONLY DEBUG
        </motion.h1>
        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-gray-700 mb-10"
        >
          Why Choose VENOVOX?
        </motion.h3>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-gray-700 mb-8"
        >
          Technical Surveillance Counter Measures (TSCM) may sound like technical jargon, but when you look at it through a layperson&lsquo;s lens, it is simply bug detection! That’s right—WE DO NOT BUG; WE ONLY DEBUG.
          <br /><br />
          TSCM is the original term used by the US Federal Government and refers to the process of bug sweeping or electronic counter-surveillance. Its purpose is to identify the presence of technical surveillance devices and vulnerabilities in order to prevent unauthorized access.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-gray-700 mb-12"
        >
          Venovox has over a decade of experience in this industry, and multinational companies frequently approach us to detect electronic devices or &lsquo;bugs&lsquo; in various locations for various reasons. Our surveillance team uses cutting-edge technology to thoroughly sweep the desired areas and eliminate any electronic surveillance devices that may be present. Our TSCM solution is designed to protect confidential information from being compromised by employees, competitors, criminals, or even terrorists.
        </motion.p>

        <section className="grid md:grid-cols-2 gap-8">
          {[ 
            {
              title: "Advanced Detection Technology",
              desc: "Our surveillance team uses state-of-the-art TSCM equipment to conduct comprehensive sweeps in offices, boardrooms, vehicles, and other sensitive locations."
            },
            {
              title: "Protect Confidential Information",
              desc: "We help businesses safeguard trade secrets, executive communications, and sensitive client data from competitors, criminals, or unauthorized personnel."
            },
            {
              title: "Trusted by Multinational Companies",
              desc: "VENOVOX has successfully conducted TSCM operations for global corporations, government agencies, and high-profile individuals, ensuring top-tier protection against corporate espionage and data leaks."
            },
            {
              title: "Electronic Bug Sweeping",
              desc: "Detect and remove unauthorized listening devices."
            },
            {
              title: "Security Vulnerability Assessments",
              desc: "Identify and mitigate weaknesses in your organization’s infrastructure."
            },
            {
              title: "Wireless & RF Signal Detection",
              desc: "Prevent data interception via unauthorized frequencies."
            },
            {
              title: "Customized Counter-Surveillance Solutions",
              desc: "Tailored services based on your business needs."
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
          <p className="mb-2">
            Stay one step ahead. Confidentiality is key in business. Don’t let prying eyes compromise your organization’s integrity. Our TSCM services are designed to keep your environment secure and your peace of mind intact.
          </p>
          <p className="text-sm mt-4">
            <strong>Related Services:</strong>
            <br />
            <a href="/my-en/background-screening/cyber-security/" className="text-red-600 hover:underline">Cyber Security</a>
          </p>
        </motion.div>
      </section>
    </main>
  );
}
