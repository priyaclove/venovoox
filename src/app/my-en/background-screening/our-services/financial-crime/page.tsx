"use client";   
import { useState } from 'react';
import { Shield, Search, Briefcase, Scale, FileText, Users } from 'lucide-react';

export default function FinancialCrimeSolutions() {
  const [activeTab, setActiveTab] = useState('services');

  const tabs = [
    { id: 'services', label: 'Our Services' },
    { id: 'risk', label: 'Who is at Risk?' },
    { id: 'why', label: 'Why VENOVOX?' },
  ];

  const services = [
    { 
      icon: <Search className="h-8 w-8 text-red-600" />, 
      title: "Fraud Detection", 
      description: "Identify internal and external fraud schemes." 
    },
    { 
      icon: <Search className="h-8 w-8 text-red-600" />, 
      title: "Asset Tracing", 
      description: "Locate and recover misappropriated assets." 
    },
    { 
      icon: <FileText className="h-8 w-8 text-red-600" />, 
      title: "Forensic Audits", 
      description: "Conduct in-depth financial investigations." 
    },
    { 
      icon: <Scale className="h-8 w-8 text-red-600" />, 
      title: "Litigation Support", 
      description: "Provide evidence and expert testimony." 
    },
    { 
      icon: <Briefcase className="h-8 w-8 text-red-600" />, 
      title: "Complex Financial Investigations", 
      description: "Handle large-scale financial crimes." 
    },
    { 
      icon: <Users className="h-8 w-8 text-red-600" />, 
      title: "Case Management", 
      description: "End-to-end risk mitigation strategies." 
    },
  ];

  const risks = [
    {
      title: "Businesses",
      description: "Internal fraud, rogue employees, and weak compliance controls."
    },
    {
      title: "Investors",
      description: "Market manipulation, insider trading, and fraudulent schemes."
    },
    {
      title: "Emerging Markets",
      description: "Government corruption and illicit financial activities."
    }
  ];

  const whyVenovox = [
    {
      title: "Elite Investigators & Case Managers",
      description: "Our world-class team has extensive experience working with enforcement agencies, financial regulators, and corporate clients worldwide."
    },
    {
      title: "Cutting-Edge Forensic Analysis",
      description: "We trace hidden assets, detect fraud, and conduct forensic audits to expose financial crimes and minimize risks."
    },
    {
      title: "Litigation & Compliance Support",
      description: "We provide legal and regulatory insights, ensuring your organization remains compliant and protected."
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-16 bg-white">
      {/* Hero Section */}
      <div className="relative bg-gray-900 rounded-lg overflow-hidden mb-16">
        <div className="absolute inset-0 opacity-20 bg-gradient-to-r from-red-500 to-red-800"></div>
        <div className="relative py-16 px-8 md:px-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Financial Crime Solutions</h1>
          <p className="text-gray-200 text-lg max-w-3xl">
            Financial crime has become a global multibillion-dollar phenomenon that evolves at a faster pace than governments, legislators, businesses, and enforcement agencies can keep up with.
          </p>
          <div className="mt-8 inline-block">
            <a href="/contact" className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-md transition duration-200">
              Get Expert Assistance
            </a>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="mb-16">
        <p className="text-gray-700 mb-4">
          The term &lsquo;financial crime&lsquo; encompasses a range of criminal activities such as theft, fraud, counterfeiting, forgery, tax evasion, insider trading (securities fraud), bribery, blackmail, extortion, and money laundering.
        </p>
        <p className="text-gray-700 mb-8">
          While the legal fundamentals of financial crime have not changed, the methods used by criminal organizations have. The rise of e-commerce, electronic banking, and trading has made financial crime prevention and detection more complicated than it was a decade or so ago.
        </p>
        
        <div className="p-6 bg-gray-100 rounded-lg border-l-4 border-red-600">
          <h3 className="font-semibold text-lg mb-2">Explore Further:</h3>
          <p className="text-gray-700">
            It&lsquo;s worth noting that businesses are also vulnerable to financial crimes perpetrated by their employees. These crimes are commonly carried out by rogue employees or entire departments running scams due to inadequate internal compliance controls and tax audits.
          </p>
          <p className="text-gray-700 mt-4">
            Government corruption, particularly in emerging markets, is another significant source of financial crime. These types of crimes are usually complicated and require delicate and professional management to mitigate brand integrity risks and prevent substantial financial losses.
          </p>
        </div>

        <p className="text-gray-700 mt-8">
          Venovox has assembled a world-class team of seasoned financial crime investigators and senior case managers capable of handling all types of financial crime. Our team works closely with enforcement agencies and financial regulators worldwide, as well as with our clients.
        </p>
      </div>

      {/* Tabs */}
      <div className="mb-16">
        <div className="flex border-b border-gray-300 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`py-3 px-6 font-medium text-base ${
                activeTab === tab.id
                  ? 'text-red-600 border-b-2 border-red-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div>
          {activeTab === 'services' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div key={index} className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition duration-300">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'risk' && (
            <div className="space-y-6">
              {risks.map((item, index) => (
                <div key={index} className="p-6 border-l-4 border-red-600 bg-gray-50">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'why' && (
            <div className="space-y-8">
              {whyVenovox.map((item, index) => (
                <div key={index} className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 bg-red-100 rounded-full">
                    <Shield className="h-8 w-8 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-900 rounded-lg p-8 md:p-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Stay Ahead of Financial Crime</h2>
          <p className="text-gray-300 mb-8">
            VENOVOX provides confidential, strategic, and results-driven financial crime solutions to safeguard your business.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/contact" className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-md transition duration-200">
              Request a Consultation
            </a>
            <a href="/my-en/background-screening/compliance/" className="px-8 py-3 bg-transparent border border-white hover:bg-gray-800 text-white font-medium rounded-md transition duration-200">
              Explore Compliance
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}