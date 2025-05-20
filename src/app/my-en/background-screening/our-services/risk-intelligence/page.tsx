import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Technical Surveillance Countermeasures (TSCM) | VENOVOX',
  description: 'State-of-the-art bug detection and electronic counter-surveillance services for corporate espionage prevention.'
};

export default function RiskIntelligencePage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gray-900">
        <div className="absolute inset-0 overflow-hidden opacity-75">
          <Image
            src="/images/risk-intelligence-hero.jpg"
            alt="Risk Intelligence"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Insight-Driven Risk Management
          </h1>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl">
            VENOVOX offers a comprehensive suite of risk management solutions tailored to protect your business, ensure continuity, and support sustainable growth.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <section className="prose prose-lg max-w-none mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Real-Time Intelligence, Real-World Impact</h2>
          <p className="text-gray-700 mb-4">
            At VENOVOX, we deliver cutting-edge Risk Intelligence to help businesses stay ahead of security threats that may impact operations or personnel, especially in unfamiliar or high-risk environments.
          </p>
          <p className="text-gray-700 mb-4">
            In a world saturated with unfiltered information, timely and relevant insights are essential. Our experts combine local presence with rigorous analysis to provide accurate, actionable intelligence focused on risk mitigation. We enable clients to identify, assess, and manage threats before they escalate into crises.
          </p>
        </section>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Country Risk Reports */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Country Risk Report Subscriptions</h3>
            <p className="text-gray-700 mb-4">
              Stay informed with our in-depth, regularly updated reports covering key APAC markets—including Indonesia, Thailand, Vietnam, Malaysia, Myanmar, Mainland China, Taiwan, Hong Kong, and India.
            </p>
            <p className="text-gray-700 mb-4">
              Our reports provide clear insights into regional risks, enabling businesses to make informed, strategic decisions in confidence.
            </p>
          </div>

          {/* Security Risk Assessments */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Security Risk Assessments</h3>
            <p className="text-gray-700 mb-4">
              Our comprehensive assessments help organizations make informed strategic decisions by identifying, evaluating, and prioritizing security threats.
            </p>
            <p className="text-gray-700 mb-4">
              We assess likelihood and impact, and deliver tailored mitigation strategies. These assessments are essential for market entry, travel risk management, business continuity planning, and crisis response.
            </p>
          </div>

          {/* Strategic Advisory */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Strategic Advisory</h3>
            <p className="text-gray-700 mb-4">
              We offer bespoke advisory services tailored to your organisation&lsquo;s unique needs, ensuring preparedness for emerging risks and complex challenges.
            </p>
          </div>
        </div>

        {/* Strategic Advisory Details */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Strategic Advisory Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Targeted Intelligence Requests—Precise answers to specific questions, offering focused insights for critical decisions.",
              "Risk Intelligence Updates—Concise briefings on current threats and developments to support timely, informed action.",
              "Emerging Threat Monitoring—Forward-looking analysis to detect and prepare for future risks and disruptions.",
              "Influence and Actor Mapping—Identifying key stakeholders, decision-makers, and potential sources of risk.",
              "Political Landscape Assessment—Evaluating political dynamics and their implications for business operations.",
              "Future Risk Scenario Planning—Mapping out plausible risk scenarios and their potential impact on your organization."
            ].map((service, index) => (
              <div key={index} className="border-l-4 border-red-600 pl-4 py-2">
                <p className="text-gray-800">{service}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Real-World Impact Section */}
        <section className="bg-gray-50 p-8 rounded-lg mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Real-Time Intelligence, Real-World Impact</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-4">
              At VENOVOX, we equip businesses with the situational awareness to respond swiftly, protect assets, and make informed, strategic decisions. We help clients safeguard their operations, people, and reputation by anticipating risks before they escalate.
            </p>
            <p className="text-gray-700 mb-4">
              From geopolitical instability and social unrest to natural disasters and emerging security threats, our expert analysts monitor and assess the critical factors affecting your business. Backed by a global network and local presence, we deliver the intelligence you need to stay ahead of risks and the competition.
            </p>
          </div>
        </section>

        {/* Related Services */}
        <section className="border-t border-gray-200 pt-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Explore Related Services</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Link 
              href="/my-en/background-screening/due-diligence/" 
              className="group border border-gray-200 rounded-lg p-4 hover:border-red-300 transition-colors"
            >
              <h4 className="text-lg font-medium text-gray-900 group-hover:text-red-600">Due Diligence</h4>
              <p className="text-gray-600 mt-1">Comprehensive background checks and investigations</p>
            </Link>
            <Link 
              href="/my-en/background-screening/compliance/" 
              className="group border border-gray-200 rounded-lg p-4 hover:border-red-300 transition-colors"
            >
              <h4 className="text-lg font-medium text-gray-900 group-hover:text-red-600">Compliance</h4>
              <p className="text-gray-600 mt-1">Regulatory compliance solutions for APAC markets</p>
            </Link>
          </div>
          <div className="mt-4">
            <Link 
              href="/my-en/contact/" 
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700"
            >
              Contact Our Risk Intelligence Team
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}