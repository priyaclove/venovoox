"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Mail, Phone, Send, MapPin } from "lucide-react";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message sent successfully!");
  };

  return (
    <>
      <section className="bg-gradient-to-r from-gray-50 to-gray-100 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Card Container */}
          {/* <div className="flex flex-col md:flex-row items-center bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
            <div className="w-full md:w-1/2 h-64 md:h-auto">
           <Image
  src="/support.jpg"
  alt="Customer Support"
  width={600}
  height={400}
  className="w-full h-full object-cover"
/>

            </div>

            <div className="w-full md:w-1/2 p-8 md:p-12 text-center md:text-left">
              <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-4xl font-bold text-black mb-4"
              >
                Get In Touch
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-gray-600 text-lg mb-6"
              >
                Need to get in touch with us immediately? Drop us a ticket and we will respond within 24 hours.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Link
                  href="/contact"
                  className="inline-block bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  CONTACT US
                </Link>
              </motion.div>
            </div>
          </div> */}

          {/* Social Icons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center gap-20 mt-10"
          >
            {[
              { icon: <FaFacebookF />, url: "https://www.facebook.com/venovox" },
              { icon: <FaInstagram />, url: "https://www.instagram.com/venovox/" },
              { icon: <FaWhatsapp />, url: "https://api.whatsapp.com/send/?phone=%2B60128008888&text&type=phone_number&app_absent=0" },
              { icon: <FaLinkedinIn />, url: "https://www.linkedin.com/company/venovox/" }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-red-600 text-2xl transition-all duration-300 hover:scale-110"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      <footer className="bg-gradient-to-b from-white to-gray-50 border-t border-gray-200 px-6 py-12 md:py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
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
                  { name: "Services", url: "/my-en/background-screening/our-services/risk-intelligence" },
                  { name: "Resources", url: "#" },
                  { name: "Careers", url: "#" },
                  { name: "Contact", url: "/my-en/contact-us" },
                ].map((link, index) => (
                  <motion.li 
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Link
                      href={link.url}
                      className="text-gray-600 hover:text-red-600 transition duration-200 text-sm md:text-base flex items-start group"
                    >
                      <span className="h-1 w-1 bg-red-600 rounded-full mt-2 mr-2 opacity-0 group-hover:opacity-100 transition-all duration-200"></span>
                      {link.name}
                    </Link>
                  </motion.li>
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
              <h3 className="text-lg font-semibold text-gray-900">Our Services</h3>
              <ul className="space-y-3">
                {[
                  { name: "Risk Intelligence", url: "/my-en/background-screening/our-services/risk-intelligence" },
                  { name: "Due Diligence", url: "/my-en/background-screening/our-services/due-diligence" },
                  { name: "Compliance", url: "/my-en/background-screening/our-services/compliance" },
                  { name: "Financial Crime", url: "/my-en/background-screening/our-services/financial-crime" },
                  { name: "HR Services", url: "/my-en/background-screening/hr-services" },
                  { name: "Cyber Security", url: "/my-en/background-screening/our-services/cyber-security" },
                ].map((service, index) => (
                  <motion.li 
                    key={service.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Link
                      href={service.url}
                      className="text-gray-600 hover:text-red-600 transition duration-200 text-sm md:text-base flex items-start group"
                    >
                      <span className="h-1 w-1 bg-red-600 rounded-full mt-2 mr-2 opacity-0 group-hover:opacity-100 transition-all duration-200"></span>
                      {service.name}
                    </Link>
                  </motion.li>
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
                <motion.a 
                  href="tel:0128008888"
                  className="flex items-start group"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Phone className="h-5 w-5 text-red-600 mt-0.5 mr-2 group-hover:animate-pulse" />
                  <div>
                    <p className="text-gray-600 text-sm md:text-base group-hover:text-red-600 transition">
                      012 800 8888
                    </p>
                    <p className="text-gray-400 text-xs">Malaysia Hotline</p>
                  </div>
                </motion.a>
                
                <motion.a 
                  href="mailto:dato.devan@venovox.com"
                  className="flex items-start group"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Mail className="h-5 w-5 text-red-600 mt-0.5 mr-2 group-hover:animate-pulse" />
                  <div>
                    <p className="text-gray-600 text-sm md:text-base group-hover:text-red-600 transition">
                      dato.devan@venovox.com
                    </p>
                  </div>
                </motion.a>
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
              <h3 className="text-lg font-semibold text-gray-900">Get In Touch</h3>
              <form onSubmit={handleSubmit} className="space-y-3">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <input
                    type="text"
                    placeholder="Your name"
                    required
                    className="w-full px-4 py-2 border rounded-md border-gray-300 focus:ring-2 focus:ring-red-600 focus:border-transparent focus:outline-none text-sm transition-all"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  <input
                    type="email"
                    placeholder="Your email"
                    required
                    className="w-full px-4 py-2 border rounded-md border-gray-300 focus:ring-2 focus:ring-red-600 focus:border-transparent focus:outline-none text-sm transition-all"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                >
                  <textarea
                    placeholder="Your message"
                    rows={3}
                    required
                    className="w-full px-4 py-2 border rounded-md border-gray-300 focus:ring-2 focus:ring-red-600 focus:border-transparent focus:outline-none text-sm transition-all"
                  />
                </motion.div>
                <motion.button
                  type="submit"
                  className="w-full flex items-center justify-center py-2 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-md hover:from-red-700 hover:to-red-800 transition-all duration-300 text-sm font-medium shadow-md hover:shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </motion.button>
              </form>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-gray-500 text-xs mt-2"
              >
                Drop us a message anytime. We&lsquo;ll respond within 24 hours.
              </motion.p>
            </motion.div>
          </div>

          <motion.h3 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-lg font-semibold text-gray-900 text-center pb-4 mt-12"
          >
            Our Offices
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {[
              {
                title: "US & Canada",
                company: "Venovox LLC",
                lines: [
                  "3050 Post Oak Blvd",
                  "Suite 510, Houston, Texas 77056",
                  <a key="phone" href="tel:2817665055" className="hover:text-red-600 transition">281 766 5055</a>
                ],
              },
              {
                title: "Singapore",
                company: "Venovox Pte. Ltd.",
                lines: [
                  "1 Scotts Road, #24-10, Shaw Centre",
                  "228208 Singapore",
                  <a key="phone" href="tel:63030529" className="hover:text-red-600 transition">6303 0529</a>
                ],
              },
              {
                title: "Malaysia",
                company: "Venovox Sdn Bhd",
                lines: [
                  "E-7-03, Block E, Oasis Square",
                  "No 2, Jalan PJU 1A/7, Ara Damansara",
                  "47301 Selangor",
                  <a key="phone" href="tel:0378000088" className="hover:text-red-600 transition">03 7800 0088</a>
                ],
              },
              {
                title: "UAE",
                company: "Venovox Pvt. Ltd.",
                lines: [
                  "Level 03, Boulevard Plaza Tower 1",
                  "Sheikh Mohammed Bin Rashid Boulevard",
                  "Downtown Dubai, P.O. Box 334155",
                  <a key="phone" href="tel:043680972" className="hover:text-red-600 transition">04 368 0972</a>
                ],
              },
            ].map((office, index) => (
              <motion.div 
                key={office.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="space-y-4"
              >
                <h4 className="font-medium text-gray-800 text-sm md:text-base">
                  {office.title}
                </h4>
                <div className="flex items-start">
                  <MapPin className="h-4 w-4 text-red-600 mt-0.5 mr-2" />
                  <div>
                    <p className="text-gray-600 text-xs md:text-sm">
                      {office.company}
                    </p>
                    {office.lines.map((line, lineIndex) => (
                      <p key={lineIndex} className="text-gray-600 text-xs md:text-sm">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

  {/* Footer Bottom */}
<div className="border-t border-gray-200 mt-12 pt-8 text-center text-sm text-gray-500">
  <p>
    © {new Date().getFullYear()} Venovox. All rights reserved.
  </p>
</div>

        </div>
      </footer>
    </>
  );
};

export default Footer;