"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

interface MenuItem {
  name: string;
  path: string;
  subItems?: SubMenuItem[];
}

interface SubMenuItem {
  name: string;
  path: string;
}

const navData = {
  logo: "/venovox-logo.png",
  menuItems: [
    { name: "Home", path: " /my-en/background-screening/" },
    { name: "About Us", path: "/my-en/about" },
    {
      name: "Our Services",
      path: "/background-screening/",
      subItems: [
        { name: "Risk Intelligence", path: "/my-en/background-screening/our-services/risk-intelligence/" },
        { name: "Due Diligence", path: "/my-en/background-screening/our-services/due-diligence/" },
        { name: "Risk Audit", path: "/my-en/background-screening/our-services/risk-audit/" },
        { name: "Compliance", path: "/my-en/background-screening/our-services/compliance/" },
        { name: "Intellectual Property", path: "/my-en/background-screening/our-services/intellectual-property/" },
        { name: "Counter Measures", path: "/my-en/background-screening/our-services/counter-measures/" },
        { name: "Financial Crime", path: "/my-en/background-screening/our-services/financial-crime/" },
        { name: "HR Services", path: "/my-en/background-screening/our-services/hr-services/" },
        { name: "Cyber Security", path: "/my-en/background-screening/our-services/cyber-security/" }
      ]
    },
    { name: "Intelligence", path: "/my-en/background-screening/intelligence" },
    { name: "Payroll", path: "/my-en/background-screening/payroll" },
    { name: "Talent Acquisition", path: "/my-en/background-screening/talent-acquisition" },
    // { name: "Academy", path: "/my-en/background-screening/academy" },
    { name: "Publication", path: "/my-en/background-screening/publication" },
    { name: "Contact Us", path: "/my-en/contact-us" },
  ] as MenuItem[]
};

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);
  const controls = useAnimation();
  const navRef = useRef<HTMLDivElement>(null);

  const isActive = (path: string) =>
    pathname === path || (path !== "/" && pathname.startsWith(path));

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 10;
      controls.start({
        height: scrolled ? "70px" : "90px",
        backgroundColor: "rgba(255, 255, 255, 0.95)",
        boxShadow: scrolled
          ? "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
          : "none"
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMenuOpen]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <motion.header
      ref={navRef}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-sm"
      initial={{ height: "90px", backgroundColor: "rgba(255, 255, 255, 0.98)" }}
      animate={controls}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div
            className="flex-shrink-0 flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Link href="/">
              <div className="h-16 w-16 relative">
                <Image
                  src={navData.logo}
                  alt="Venovox Logo"
                  width={64}
                  height={64}
                  className="object-contain w-full h-full"
                  priority
                />
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-1 items-center">
            {navData.menuItems.map((item) => {
              const active = isActive(item.path);
              const hasSubItems = item.subItems && item.subItems.length > 0;
              
              return (
                <div key={item.name} className="relative group">
                  <Link
                    href={item.path}
                    className={`px-3 py-2 text-base font-medium rounded-md transition duration-200 ${
                      active ? "text-red-600 font-semibold" : "text-gray-700 hover:text-red-600"
                    }`}
                  >
                    {item.name}
                  </Link>
                  {hasSubItems && (
                    <div className="absolute left-0 top-full mt-1 w-56 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transform -translate-y-2 transition-all duration-300 z-50">
                      {item.subItems?.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.path}
                          className={`block px-4 py-2 text-sm hover:bg-gray-100 ${
                            isActive(sub.path) ? "text-red-600 font-semibold" : "text-gray-700"
                          }`}
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-red-600 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="lg:hidden bg-white shadow-lg border-t border-gray-100"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <div className="px-4 pt-2 pb-4 space-y-2 sm:px-6">
              {navData.menuItems.map((item) => {
                const active = isActive(item.path);
                const isOpen = activeSubMenu === item.name;
                const hasSubItems = item.subItems && item.subItems.length > 0;

                return (
                  <div key={item.name}>
                    <button
                      onClick={() =>
                        hasSubItems ? setActiveSubMenu(isOpen ? null : item.name) : setIsMenuOpen(false)
                      }
                      className={`w-full flex justify-between items-center px-4 py-3 rounded-lg text-base font-medium ${
                        active
                          ? "text-red-600 bg-red-50"
                          : "text-gray-700 hover:bg-gray-50 hover:text-red-600"
                      }`}
                    >
                      <span>{item.name}</span>
                      {hasSubItems &&
                        (isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />)}
                    </button>
                    {hasSubItems && isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="pl-6 pt-2 space-y-1"
                      >
                        {item.subItems?.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.path}
                            onClick={() => setIsMenuOpen(false)}
                            className={`block text-sm py-2 px-3 rounded-md ${
                              isActive(sub.path)
                                ? "text-red-600 bg-red-50"
                                : "text-gray-700 hover:bg-gray-100"
                            }`}
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}