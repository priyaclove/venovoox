"use client"; 
import React from "react";
import { motion } from "framer-motion";


export default function Compliance() {
  return (
    <main className="bg-white text-black">
      <section className="min-h-screen px-6 py-20 max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-black mb-4"
        >
          Compliance Solutions
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-gray-700 mb-10"
        >
          How VENOVOX Can Help
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-gray-700 mb-8"
        >
          For many businesses, compliance has been an afterthought in their overall risk management strategy. However, the aftermath of the 2007/8 financial crisis has led to significant growth in the compliance sector, particularly in the financial industry, as businesses attempt to comply with new regulatory requirements.
          <br /><br />
          Despite claims of putting their houses in order, many businesses continue to face compliance crises. Our experience suggests that one of the core causes, which is beyond compliance, is a company being out of touch with its business&lsquo;s &lsquo;engine rooms.&lsquo;
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-gray-700 mb-12"
        >
          At VENOVOX, we work closely with the legal sector and government regulatory agencies to stay abreast of current and upcoming legislation. Our operational focus includes helping businesses implement robust anti-money laundering (AML) programs and other compliance programs that address global and local regulatory controls, such as banking secrecy, personal and corporate data protection, and privacy laws.
        </motion.p>

        <section className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Business Monitoring",
              desc: "Continuous tracking of regulatory changes to ensure compliance. Identification of early warning signs of non-compliance."
            },
            {
              title: "AML Investigation",
              desc: "Implementation of Anti-Money Laundering (AML) frameworks to detect and prevent financial crimes. Support in due diligence and risk profiling of business partners and clients."
            },
            {
              title: "Internal Audit & Control Reviews",
              desc: "Independent assessments to strengthen internal governance and risk controls. Identification of process weaknesses and implementation of corrective actions."
            },
            {
              title: "Outsourced Compliance & Regulatory Checks",
              desc: "Full-service compliance outsourcing for businesses lacking in-house expertise. Verification of adherence to banking secrecy, data protection, and privacy laws."
            },
            {
              title: "Regulatory Authority Liaison",
              desc: "Direct engagement with regulatory bodies to manage compliance-related inquiries and audits. Support in reporting and documentation to ensure transparency."
            },
            {
              title: "Compliance Program Design",
              desc: "Development of tailored compliance programs aligned with global and local regulations. Training and capacity building for compliance teams and leadership."
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
          <p className="mb-2">At VENOVOX, we help businesses stay compliant, build trust, and mitigate legal and financial risks.</p>
          <p className="text-sm mt-4">
            <strong>Related Services:</strong>
            <br />
            <a href="/my-en/background-screening/due-diligence/" className="text-red-600 hover:underline">Due Diligence</a> |
            <a href="/my-en/background-screening/risk-audit/" className="text-red-600 hover:underline ml-2">Risk Audit</a>
          </p>
        </motion.div>
      </section>
    </main>
  );
}