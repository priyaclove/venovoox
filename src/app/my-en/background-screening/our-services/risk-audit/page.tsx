"use client";
import React from "react";
import { motion } from "framer-motion";

export default function RiskAudit() {
  return (
    <main className="bg-white text-black">
      <section className="min-h-screen px-6 py-20 max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-black mb-4"
        >
          Effective Risk Management Solutions
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-gray-700 mb-10"
        >
          Our Risk & Audit Solutions
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-gray-700 mb-8"
        >
          Effective risk management is a complex and often overlooked aspect of business across all industry sectors. The 2018 investment scandal in Malaysia underscored the importance of risk management, exposing the woeful incompetence of boards and senior managers in leading financial institutions.
          <br /><br />
          It is important to note that risk is an essential and positive component of business. Taking risks is necessary for making profits, and the key to success lies in effectively managing these risks.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-gray-700 mb-12"
        >
          Risk management is an ongoing process, and many businesses fail because they lack the appropriate skills and knowledge to do it effectively. To address this, our firm uses the latest intelligence-led data analysis, big data, and visual mapping tools to identify and present key risk issues using powerful visualization techniques.
        </motion.p>

        <section className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Financial Stress Testing",
              desc: "Simulates financial scenarios to assess resilience against market fluctuations. Identifies vulnerabilities in cash flow, credit risks, and capital structures."
            },
            {
              title: "Business Recovery",
              desc: "Develops strategic recovery plans for businesses facing financial distress. Implements crisis management strategies to restore stability and growth."
            },
            {
              title: "Strategic Risk Planning",
              desc: "Assesses risks associated with business expansion, acquisitions, and investments. Provides intelligence-led risk insights to support decision-making."
            },
            {
              title: "Market Risk Assessment",
              desc: "Analyses external market factors, including competition, economic trends, and geopolitical risks. Helps businesses anticipate market disruptions and adapt proactively."
            },
            {
              title: "Business Continuity Planning (BCP)",
              desc: "Develops comprehensive disaster recovery plans to minimize operational disruptions. Ensures regulatory compliance and protection against cyber threats, supply chain failures, and financial crises."
            },
            {
              title: "Enterprise Risk Assessment",
              desc: "Evaluates internal controls, governance frameworks, and operational risks. Implements visual mapping tools and big data analysis to present risk intelligence in actionable formats."
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
          <p className="mb-2">With cutting-edge technology and expert analysis, VENOVOX provides proactive risk management solutions to keep your business resilient and competitive.</p>
          <p className="text-sm mt-4">
            <strong>Related Services:</strong>
            <br />
            <a href="/my-en/background-screening/compliance/" className="text-red-600 hover:underline">Compliance</a> | 
            <a href="/my-en/background-screening/cyber-security/" className="text-red-600 hover:underline ml-2">Cyber Security</a>
          </p>
        </motion.div>
      </section>
    </main>
  );
}