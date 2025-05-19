import React from "react";
import Link from "next/link";

export const metadata = {
  title: 'Comprehensive Due Diligence Services | Corporate Investigations | VENOVOX',
  description: 'Uncover risks before they become liabilities with our full-spectrum corporate investigations and ownership mapping across APAC.',
};

export default function DueDiligencePage() {
  return (
    <main className="bg-white text-black">
      {/* Hero Section */}
      <section className="bg-black text-white py-24 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Comprehensive Due Diligence Services Across Asia-Pacific
        </h1>
        <p className="text-lg md:text-xl text-gray-300">
          Uncover risks before they become liabilities
        </p>
      </section>

      {/* Intro Paragraph */}
      <section className="py-16 px-6 max-w-5xl mx-auto text-gray-800">
        <p className="text-lg mb-6">
          Due diligence is an important but often neglected tool for managing
          risks in the corporate world. Its poor execution can be attributed to
          a variety of reasons. Firstly, businesses or investors sometimes fail
          to recognize the importance of due diligence. Furthermore,
          inappropriate parties may be appointed to conduct and oversee the
          process.
        </p>
        <p className="text-lg">
          To ensure the efficacy of due diligence, it is crucial to appoint
          capable analysts who can research and map out a company&lsquo;s holding
          structures, especially in the USA and Asia Pacific.
        </p>
      </section>

      {/* H2 and H3s Section */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-black">
            Reduce Risk and Gain Transparency with Verified Insights
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            "Multi-Layer Investigations",
            "Jurisdictional Coverage",
            "Corporate Accountability and Integrity",
          ].map((title, idx) => (
            <div
              key={idx}
              className="bg-white border-l-4 border-red-600 shadow-md p-6 rounded-2xl hover:scale-[1.02] transition-transform duration-200"
            >
              <h3 className="text-xl font-semibold text-black">{title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Explore Further Section */}
      <section className="py-16 px-6 max-w-5xl mx-auto text-gray-800">
        <h3 className="text-2xl font-bold mb-4 text-black">Explore Further</h3>
        <p className="mb-4">
          Reputational due diligence helps identify legal issues, corrupt
          practices, or personal controversies involving key stakeholders.
        </p>
        <p className="mb-4">
          Financial due diligence verifies accounts, assesses risk, and checks
          feasibility. Our team evaluates accounting standards, off-balance
          risks, and external factors like political and geographical risks.
        </p>
      </section>

      {/* Our Due Diligence Solutions */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-black">
            Our Due Diligence Solutions
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Corporate Structure & Ownership Analysis",
              points: [
                "Identifies holding structures, subsidiaries, and beneficial ownership.",
                "Maps out relationships with potential shell companies or high-risk third parties.",
              ],
            },
            {
              title: "Compliance, Litigation & Regulatory Checks",
              points: [
                "Verifies legal standing, past and present litigations, and compliance history.",
                "Assesses potential exposure to sanctions, corruption, and unethical practices.",
              ],
            },
            {
              title: "Financial & Political Risk Analysis",
              points: [
                "Examines financial health, audited statements, and off-balance-sheet risks.",
                "Evaluates political and geographical risks affecting business viability.",
              ],
            },
            {
              title: "On-Site Inspections & Audits",
              points: [
                "Conducts physical site visits to verify operational legitimacy.",
                "Ensures business activities align with disclosed financial and regulatory claims.",
              ],
            },
            {
              title: "Vendor & Customer Interviews",
              points: [
                "Gathers insights from key stakeholders, suppliers, and clients.",
                "Detects discrepancies in business operations and market reputation.",
              ],
            },
            {
              title: "Profiling of Company Principals & Major Shareholders",
              points: [
                "Investigates background, reputation, and potential conflicts of interest.",
                "Identifies previous affiliations with high-risk or controversial entities.",
              ],
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border-t-4 border-red-600 shadow-lg p-6 hover:scale-[1.02] transition-transform duration-200"
            >
              <h4 className="text-xl font-semibold mb-4 text-black">
                {item.title}
              </h4>
              <ul className="list-disc list-inside text-gray-800">
                {item.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA with Internal Links */}
      <section className="bg-black text-white py-16 px-6 text-center">
        <p className="text-xl mb-6">
          By leveraging cutting-edge investigative techniques and a global
          network, VENOVOX provides reliable intelligence to safeguard your
          business.
        </p>
        <div className="space-x-4">
          <Link 
            href="/my-en/background-screening/risk-intelligence/" 
            className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg transition"
          >
            Risk Intelligence
          </Link>
          <Link 
            href="/my-en/background-screening/financial-crime/" 
            className="inline-block bg-gray-800 hover:bg-gray-900 text-white font-semibold py-2 px-4 rounded-lg transition"
          >
            Financial Crime
          </Link>
        </div>
      </section>
    </main>
  );
}