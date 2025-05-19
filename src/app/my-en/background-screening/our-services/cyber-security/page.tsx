import React from 'react';
import { Shield, Server, Cloud, Target, Cpu, Users, Search, Bell, BookOpen } from 'lucide-react';
export const metadata = {
  title: 'Enterprise Cybersecurity Solutions | VENOVOX APAC',
  description: '360° cybersecurity assessments, threat monitoring, and incident response for businesses in high-risk digital environments.',
};

const CybersecurityPage = () => {
  // Color scheme
  const colors = {
    primary: '#e30613', // red
    secondary: '#333333', // dark grey
    lightGrey: '#f5f5f5',
    mediumGrey: '#cccccc',
    darkGrey: '#666666',
    black: '#000000',
    white: '#ffffff',
  };

  // Service data with icons
  const services = [
    {
      title: 'Network Cybersecurity Assessment',
      description: 'Proactively identifies vulnerabilities within your IT infrastructure. We combine automated tools and manual testing techniques to assess and strengthen network security.',
      benefits: [
        'Risk Identification & Remediation',
        'Real-World Attack Simulation',
        'Data Protection & Confidentiality',
        'Incident Response Enhancement'
      ],
      icon: <Server size={32} color={colors.primary} />
    },
    {
      title: 'Web Application Cybersecurity Assessment',
      description: '9 out of 10 web applications contain vulnerabilities that expose businesses to cyber threats. VENOVOX ensures your web applications are hardened against attacks.',
      benefits: [
        'Prevent Cyber Attacks & Data Breaches',
        'Access Control & Encryption Testing',
        'Brand Reputation Protection',
        'Comprehensive Security Documentation'
      ],
      icon: <Shield size={32} color={colors.primary} />
    },
    {
      title: 'Cloud Security Assessment',
      description: 'With cloud adoption on the rise, securing cloud infrastructure and applications is critical. VENOVOX\'s Cloud Security Assessment helps businesses identify misconfigurations and security gaps.',
      benefits: [
        'Cloud Configuration Audits',
        'Access Control & Data Protection',
        'Incident Response Readiness',
        'Cloud Security Strategy Enhancement'
      ],
      icon: <Cloud size={32} color={colors.primary} />
    },
    {
      title: 'Red Team Assessment',
      description: 'Traditional security measures alone are no longer sufficient. VENOVOX\'s Red Team Assessment simulates real-world cyberattacks to test your organization\'s defences.',
      benefits: [
        'Simulated Attack Scenarios',
        'Physical Security Breach Testing',
        'Social Engineering Attack Simulations',
        'Post-Exploitation Risk Mitigation'
      ],
      icon: <Target size={32} color={colors.primary} />
    },
    {
      title: 'IoT Security Assessment',
      description: 'The rise of IoT devices has introduced new cyber risks. VENOVOX\'s IoT Security Assessment helps businesses identify and eliminate security gaps in IoT ecosystems.',
      benefits: [
        'Hardware & Firmware Security Testing',
        'Radio & Network Protocol Scanning',
        'Compliance & Risk Assessments',
        'Full Attack Surface Coverage'
      ],
      icon: <Cpu size={32} color={colors.primary} />
    },
    {
      title: 'Social Engineering Assessment',
      description: 'People are often the weakest link in cybersecurity. VENOVOX conducts simulated phishing and social engineering attacks to test employee awareness and security protocols.',
      benefits: [
        'Identify Human Vulnerabilities',
        'Improve Security Training & Awareness',
        'Enhance Policy & Response Strategies',
        'Build a Stronger Security Culture'
      ],
      icon: <Users size={32} color={colors.primary} />
    },
    {
      title: 'Cyber Forensic Analysis',
      description: 'VENOVOX\'s Cyber Forensic Services help organizations analyse security incidents, track digital evidence, and support legal investigations.',
      benefits: [
        'Incident Investigation & Evidence Collection',
        'HR & Legal Digital Forensics Support',
        'Brand Reputation Protection',
        'Regulatory Compliance Assurance'
      ],
      icon: <Search size={32} color={colors.primary} />
    },
    {
      title: 'SIEM with SOC',
      description: 'Real-time threat monitoring and rapid response are essential in today\'s cybersecurity landscape. VENOVOX\'s SIEM + SOC solution ensures continuous security monitoring and immediate incident response.',
      benefits: [
        '24/7 Threat Detection & Response',
        'Centralized Visibility & Log Management',
        'Reduced Response Time',
        'Proactive Threat Intelligence Integration'
      ],
      icon: <Bell size={32} color={colors.primary} />
    },
    {
      title: 'Security Awareness Program',
      description: 'Even the best security measures can be compromised if employees lack awareness. VENOVOX\'s Security Awareness Training empowers your workforce to recognize and prevent cyber threats.',
      benefits: [
        'Prevent Phishing & Social Engineering Attacks',
        'Strengthen Security Culture',
        'Enhance Compliance & Customer Trust',
        'Reduce Human-Error-Driven Security Breaches'
      ],
      icon: <BookOpen size={32} color={colors.primary} />
    }
  ];

  // Why choose us
  const reasons = [
    'Industry-Leading Cybersecurity Expertise',
    'Tailored Solutions Aligned with Your Business Needs',
    'Proactive Security Measures & Continuous Monitoring',
    '24/7 Incident Response & Threat Intelligence',
    'Adoption of AI, Zero Trust, and Blockchain Security Technologies'
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <section 
        className="relative py-20 px-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white"
        style={{
          backgroundImage: "url('/api/placeholder/1200/400')",
          backgroundBlendMode: "overlay",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Protecting Your Business from Evolving Cyber Threats
            </h1>
            <p className="text-lg mb-8">
              In today&lsquo;s rapidly evolving digital landscape, businesses face increasingly sophisticated cyber threats. 
              VENOVOX offers cutting-edge cybersecurity solutions tailored to safeguard your digital assets, 
              ensure compliance, and enhance resilience against cyberattacks.
            </p>
            <button 
              className="px-6 py-3 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transition-colors shadow-lg"
              style={{ backgroundColor: colors.primary }}
            >
              Get a Security Assessment
            </button>
          </div>
        </div>
      </section>

      {/* Comprehensive Solutions */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Comprehensive Cybersecurity Solutions</h2>
          
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h3 className="text-xl font-semibold mb-4" style={{ color: colors.primary }}>
              360° Cybersecurity Solutions Suite
            </h3>
            <p className="mb-6">
              VENOVOX provides a holistic approach to cybersecurity, addressing risks across networks, 
              applications, cloud environments, and human vulnerabilities.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {services.map((service, index) => (
                <div key={index} className="flex items-start gap-2">
                  <span className="text-gray-600">✔</span>
                  <span>{service.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Services */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Key Cybersecurity Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow">
                <div className="p-6 border-b border-gray-200" style={{ backgroundColor: colors.lightGrey }}>
                  <div className="flex items-center mb-4">
                    {service.icon}
                    <h3 className="text-xl font-semibold ml-3">{service.title}</h3>
                  </div>
                  <p className="text-gray-600">{service.description}</p>
                </div>
                <div className="p-6">
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start">
                        <span className="mr-2 mt-1 text-sm" style={{ color: colors.primary }}>✅</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6" style={{ backgroundColor: colors.secondary, color: colors.white }}>
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Choose VENOVOX Cybersecurity Solutions?</h2>
          
          <div className="max-w-3xl mx-auto">
            <ul className="space-y-4">
              {reasons.map((reason, index) => (
                <li key={index} className="flex items-center">
                  <span className="mr-3 text-xl" style={{ color: colors.primary }}>✔</span>
                  <span className="text-lg">{reason}</span>
                </li>
              ))}
            </ul>
            
            <div className="mt-12 text-center">
              <p className="mb-6 text-lg">
                With VENOVOX, your organization gains a trusted cybersecurity partner committed to 
                safeguarding your digital assets, mitigating risks, and ensuring regulatory compliance.
              </p>
              <p className="text-xl font-semibold" style={{ color: colors.primary }}>
                Stay ahead of cyber threats – Secure your business with VENOVOX today!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Protect Your Business?</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Contact our cybersecurity experts today for a free initial consultation 
            and discover how VENOVOX can strengthen your security posture.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="px-8 py-3 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transition-colors shadow-lg"
              style={{ backgroundColor: colors.primary }}
            >
              Request a Security Assessment
            </button>
            <button 
              className="px-8 py-3 bg-white text-gray-800 font-semibold rounded-md border border-gray-300 hover:bg-gray-50 transition-colors shadow-lg"
            >
              Learn More About Our Services
            </button>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-8 px-6 bg-gray-200">
        <div className="container mx-auto">
          <h3 className="text-lg font-semibold mb-4">Related Services</h3>
          <ul className="flex flex-wrap gap-4">
            <li>
              <a 
                href="/my-en/background-screening/counter-measures/" 
                className="text-red-600 hover:underline font-medium"
                style={{ color: colors.primary }}
              >
                Counter Measures
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default CybersecurityPage;