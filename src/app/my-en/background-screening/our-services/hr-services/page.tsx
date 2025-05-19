"use client";
import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {  Search, FileSearch, Building } from 'lucide-react';


export default function HRServices() {
  const [activeTab, setActiveTab] = useState('background');

  const tabs = [
    { id: 'background', label: 'Background Screening' },
    { id: 'workplace', label: 'Workplace Investigation' },
    { id: 'peo', label: 'Professional Employer Organization (PEO)' },
  ];

  return (
    <>
      <Head>
        <title>Background Screening & HR Solutions | VENOVOX</title>
        <meta name="description" content="Comprehensive background checks, workplace investigations, and PEO services for APAC businesses." />
        <meta name="keywords" content="background screening, workplace investigation, PEO services, HR solutions, employee verification" />
        <meta property="og:title" content="Background Screening & HR Solutions | VENOVOX" />
        <meta property="og:description" content="Comprehensive background checks, workplace investigations, and PEO services for APAC businesses." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.venovox.com/my-en/background-screening/hr-services/" />
        <link rel="canonical" href="https://www.venovox.com/my-en/background-screening/hr-services/" />
      </Head>

      <div className="max-w-6xl mx-auto px-4 py-16 bg-white">
        {/* Hero Section */}
        <div className="relative bg-gray-900 rounded-lg overflow-hidden mb-16">
          <div className="absolute inset-0 opacity-20 bg-gradient-to-r from-red-500 to-red-800"></div>
          <div className="relative py-16 px-8 md:px-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Find The Most Streamlined Hiring Solutions With Us</h1>
            <p className="text-gray-200 text-lg max-w-3xl">
              Comprehensive HR services designed to optimize your hiring practices and protect your business.
            </p>
            <div className="mt-8 inline-block">
              <a href="/my-en/contact-us" className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-md transition duration-200">
                Discover Our HR Solutions
              </a>
            </div>
          </div>
        </div>

        {/* Introduction */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Optimize Hiring Practices</h2>
          <p className="text-gray-700 mb-4">
            A strong focus on workforce talent shapes both existing and potential employees&lsquo;s relationship with the organization and has a direct impact on business. We understand that global HR needs are ever-evolving, and staying ahead of the curve is always best practice. Successful organizations want a more desirable workplace outlook to attract and retain top talent from a vast pool of professionals.
          </p>
          <p className="text-gray-700 mb-8">
            VENOVOX, as part of the latest vertical expansion into HR sustainability, offers subscription to a suite of premium tools to enhance your employer branding, boost your positioning as a key employer within the industry in which you operate, and grow your talent innovation by connecting talent development efforts with your business performance and success.
          </p>
          
          <div className="p-6 bg-red-50 rounded-lg border-l-4 border-red-600 mb-8">
            <p className="text-xl font-semibold text-gray-800 italic">
              &lsquo;The last thing you need in your future is an employee with a past.&lsquo;
            </p>
          </div>
          
          <div className="p-6 bg-gray-100 rounded-lg border-l-4 border-red-600">
            <h3 className="font-semibold text-lg mb-2">Explore Further:</h3>
            <p className="text-gray-700">
              Our comprehensive HR services are designed to protect your business from potential risks associated with hiring and managing employees. From thorough background screening to workplace investigations and PEO services, we provide the tools and expertise you need to make informed decisions.
            </p>
          </div>
        </div>

        {/* Tabs */}
        <div className="mb-16">
          <div className="flex flex-wrap border-b border-gray-300 mb-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`py-3 px-4 md:px-6 font-medium text-sm md:text-base ${
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
            {activeTab === 'background' && (
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="flex-shrink-0 p-4 bg-red-100 rounded-full">
                    <Search className="h-10 w-10 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">Background Screening</h3>
                    <p className="text-gray-700 mb-4">
                      With VENOVOX, you can directly tap into the expertise of the most seasoned background screening specialists in the industry. Our team comprises extensively trained associates across virtually every jurisdiction, making us well-equipped to handle the hands-on aspects of background screening, such as criminal background checks, substance abuse testing, credit reporting, human resource policy development, and a range of physical security solutions.
                    </p>
                    <p className="text-gray-700 mb-4">
                      We leverage cutting-edge technology in our investigation techniques and security solutions to provide clients with added value. Each investigation is overseen by our team personally to guarantee that every client receives the level of attention they require.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                      {['Criminal Background Checks', 'Substance Abuse Testing', 'Credit Reporting', 'HR Policy Development', 'Physical Security Solutions', 'Identity Verification'].map((service, index) => (
                        <div key={index} className="p-4 border border-gray-200 rounded-lg bg-white hover:shadow-md transition duration-300">
                          <p className="font-medium text-gray-800">{service}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'workplace' && (
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="flex-shrink-0 p-4 bg-red-100 rounded-full">
                    <FileSearch className="h-10 w-10 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">Workplace Investigation</h3>
                    <p className="text-gray-700 mb-4">
                      Workplace investigation is a process used to gather and examine information to determine whether a workplace policy or procedure has been violated. It is an essential tool for employers to address allegations of wrongdoing in the workplace. These investigations are typically conducted in response to complaints of harassment, discrimination, or other forms of misconduct. The goal of a workplace investigation is to gather information and evidence to determine if the allegations are substantiated and to take appropriate corrective action if necessary.
                    </p>
                    <p className="text-gray-700 mb-4">
                      Our field investigators are experts in conducting interviews with victims, witnesses, and culprits, reviewing documents, and gathering other relevant information to facilitate the workplace investigation. They are trained to remain impartial and objective throughout the investigation process. Once the investigation is complete, our investigators provide a report detailing the findings and any recommended actions.
                    </p>
                    <p className="text-gray-700 mb-4">
                      Employers have a legal obligation to investigate workplace allegations of wrongdoing and take appropriate action to address any identified issues. Failure to conduct a proper investigation or to take corrective action can result in legal liability for the employer. VENOVOX supports employers in maintaining a clear policy and procedure for conducting workplace investigations.
                    </p>
                    
                    <div className="p-4 bg-gray-50 border-l-4 border-red-600 mt-6">
                      <h4 className="font-semibold text-lg mb-2">Our Investigation Process:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="h-6 w-6 rounded-full bg-red-600 text-white flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">1</span>
                          <span>Initial assessment and complaint review</span>
                        </li>
                        <li className="flex items-start">
                          <span className="h-6 w-6 rounded-full bg-red-600 text-white flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">2</span>
                          <span>Witness interviews and evidence collection</span>
                        </li>
                        <li className="flex items-start">
                          <span className="h-6 w-6 rounded-full bg-red-600 text-white flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">3</span>
                          <span>Thorough documentation analysis</span>
                        </li>
                        <li className="flex items-start">
                          <span className="h-6 w-6 rounded-full bg-red-600 text-white flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">4</span>
                          <span>Comprehensive reporting and recommendations</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'peo' && (
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="flex-shrink-0 p-4 bg-red-100 rounded-full">
                    <Building className="h-10 w-10 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">Professional Employer Organization Services (PEO)</h3>
                    <p className="text-gray-700 mb-4">
                      A resourceful outsourcing service that enables employers to gain economies of scale by offering a wide range of benefit options at competitive rates.
                    </p>
                    <p className="text-gray-700 mb-4">
                      A PEO is an all-in-one HR solution that helps make it easier for you to manage your human resources functions, such as employee benefits, payroll administration, compensation, taxes, and compliance issues. Working with a PEO offers many benefits to businesses like yours.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                      <div className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition duration-300 bg-white">
                        <h4 className="font-semibold text-lg mb-3">Simplified HR Management</h4>
                        <p className="text-gray-600">Simplifying HR tasks to focus on what matters most for your business growth</p>
                      </div>
                      <div className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition duration-300 bg-white">
                        <h4 className="font-semibold text-lg mb-3">Competitive Benefits</h4>
                        <p className="text-gray-600">Offering Fortune 500-level benefits more affordably to attract top talent</p>
                      </div>
                      <div className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition duration-300 bg-white">
                        <h4 className="font-semibold text-lg mb-3">Expert HR Guidance</h4>
                        <p className="text-gray-600">Having access to HR advice and guidance on specific issues</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gray-900 rounded-lg p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Optimize Your HR Practices?</h2>
            <p className="text-gray-300 mb-8">
              Partner with VENOVOX for comprehensive HR solutions tailored to your business needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="/my-en/contact-us" className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-md transition duration-200">
                Schedule a Consultation
              </a>
              <Link href="/my-en/background-screening/due-diligence/" legacyBehavior>
                <a className="px-8 py-3 bg-transparent border border-white hover:bg-gray-800 text-white font-medium rounded-md transition duration-200">
                  Learn About Due Diligence
                </a>
              </Link>
            </div>
          </div>
        </div>

        {/* Structured Data for SEO */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "HR Services",
            "provider": {
              "@type": "Organization",
              "name": "VENOVOX"
            },
            "serviceType": ["Background Screening", "Workplace Investigation", "PEO Services"],
            "description": "Comprehensive background checks, workplace investigations, and PEO services for APAC businesses.",
            "areaServed": "APAC",
            "audience": {
              "@type": "BusinessAudience",
              "audienceType": "Businesses seeking HR solutions"
            }
          })
        }} />
      </div>
    </>
  );
}
