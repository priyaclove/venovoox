"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Mail, Phone, Send, MapPin } from "lucide-react";

const Footer = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message sent successfully!");
  };

  return (
    <footer className="bg-white border-t border-gray-200 px-6 py-12 md:py-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Quick Links */}
          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-gray-900">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: "Home", url: "/my-en/background-screening" },
                { name: "About", url: "/my-en/about" },
                {
                  name: "Services",
                  url: "/my-en/background-screening/our-services/risk-intelligence",
                }, // or a general /services
                { name: "Resources", url: "#" },
                { name: "Careers", url: "#" },
                { name: "Contact", url: "/my-en/contact-us" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.url}
                    className="text-gray-600 hover:text-red-600 transition duration-200 text-sm md:text-base"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-gray-900">
              Our Services
            </h3>
            <ul className="space-y-3">
              {[
                {
                  name: "Risk Intelligence",
                  url: "/my-en/background-screening/our-services/risk-intelligence",
                },
                {
                  name: "Due Diligence",
                  url: "/my-en/background-screening/our-services/due-diligence",
                },
                {
                  name: "Compliance",
                  url: "/my-en/background-screening/our-services/compliance",
                },
                {
                  name: "Financial Crime",
                  url: "/my-en/background-screening/our-services/financial-crime",
                },
                {
                  name: "HR Services",
                  url: "/my-en/background-screening/hr-services",
                },
                {
                  name: "Cyber Security",
                  url: "/my-en/background-screening/our-services/cyber-security",
                },
              ].map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.url}
                    className="text-gray-600 hover:text-red-600 transition duration-200 text-sm md:text-base"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-gray-900">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <Phone className="h-5 w-5 text-red-600 mt-0.5 mr-2" />
                <div>
                  <p className="text-gray-600 text-sm md:text-base">
                    012 800 8888
                  </p>
                  <p className="text-gray-400 text-xs">Malaysia Hotline</p>
                </div>
              </div>
              {/* Emails */}
              <div className="flex items-start">
                <Mail className="h-5 w-5 text-red-600 mt-0.5 mr-2" />
                <div>
                  <p className="text-gray-600 text-sm md:text-base">
                    dato.devan@venovox.com
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-gray-900">
              Get In Touch
            </h3>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="text"
                placeholder="Your name"
                required
                className="w-full px-4 py-2 border rounded-md border-gray-300 focus:ring-2 focus:ring-red-600 focus:outline-none text-sm"
              />
              <input
                type="email"
                placeholder="Your email"
                required
                className="w-full px-4 py-2 border rounded-md border-gray-300 focus:ring-2 focus:ring-red-600 focus:outline-none text-sm"
              />
              <textarea
                placeholder="Your message"
                rows={3}
                required
                className="w-full px-4 py-2 border rounded-md border-gray-300 focus:ring-2 focus:ring-red-600 focus:outline-none text-sm"
              />
              <button
                type="submit"
                className="w-full flex items-center justify-center py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition duration-200 text-sm font-medium"
              >
                <Send className="h-4 w-4 mr-2" />
                Send Message
              </button>
            </form>
            <p className="text-gray-500 text-xs mt-2">
              Drop us a message anytime. We&lsquo;ll respond within 24 hours.
            </p>
          </motion.div>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 text-center pb-4">
          Our Services
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {[
            {
              title: "US & Canada",
              company: "Venovox LLC",
              lines: [
                "3050 Post Oak Blvd",
                "Suite 510, Houston, Texas 77056",
                "281 766 5055",
              ],
            },
            {
              title: "Singapore",
              company: "Venovox Pte. Ltd.",
              lines: [
                "1 Scotts Road, #24-10, Shaw Centre",
                "228208 Singapore",
                "6303 0529",
              ],
            },
            {
              title: "Malaysia",
              company: "Venovox Sdn Bhd",
              lines: [
                "E-7-03, Block E, Oasis Square",
                "No 2, Jalan PJU 1A/7, Ara Damansara",
                "47301 Selangor",
                "03 7800 0088",
              ],
            },
            {
              title: "UAE",
              company: "Venovox Pvt. Ltd.",
              lines: [
                "Level 03, Boulevard Plaza Tower 1",
                "Sheikh Mohammed Bin Rashid Boulevard",
                "Downtown Dubai, P.O. Box 334155",
                "04 368 0972",
              ],
            },
          ].map((office) => (
            <div key={office.title} className="space-y-4">
              <h4 className="font-medium text-gray-800 text-sm md:text-base">
                {office.title}
              </h4>
              <div className="flex items-start">
                <MapPin className="h-4 w-4 text-red-600 mt-0.5 mr-2" />
                <div>
                  <p className="text-gray-600 text-xs md:text-sm">
                    {office.company}
                  </p>
                  {office.lines.map((line, index) => (
                    <p key={index} className="text-gray-600 text-xs md:text-sm">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-200 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Venovox. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
