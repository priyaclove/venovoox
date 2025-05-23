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
    { name: "Home", path: "/my-en/background-screening/" },
    { name: "About Us", path: "/my-en/about" },
    {
      name: "Our Services",
      path: "/my-en/background-screening/",
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
        height: scrolled ? "80px" : "100px",
        backgroundColor: "rgba(255, 255, 255, 0.98)",
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

  const handleMenuItemClick = (item: MenuItem) => {
    const hasSubItems = item.subItems && item.subItems.length > 0;
    
    if (hasSubItems) {
      const isOpen = activeSubMenu === item.name;
      setActiveSubMenu(isOpen ? null : item.name);
    } else {
      // For items without submenus, close the mobile menu
      setIsMenuOpen(false);
    }
  };

  return (
    <motion.header
      ref={navRef}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-sm"
      initial={{ height: "100px", backgroundColor: "rgba(255, 255, 255, 0.98)" }}
      animate={controls}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex justify-between items-center h-full">
          {/* Logo - Made Larger */}
          <motion.div
            className="flex-shrink-0 flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Link href="/" className="flex items-center">
              <div className="h-20 w-20 relative">
                <Image
                  src={navData.logo}
                  alt="Venovox Logo"
                  width={80}
                  height={80}
                  className="object-contain w-full h-full"
                  priority
                />
              </div>
              <span className="ml-3 text-xl font-bold text-gray-800 hidden md:block">
                Venovox
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation - Improved Spacing */}
          <nav className="hidden lg:flex space-x-6 items-center">
            {navData.menuItems.map((item) => {
              const active = isActive(item.path);
              const hasSubItems = item.subItems && item.subItems.length > 0;
              
              return (
                <div key={item.name} className="relative group">
                  <Link
                    href={item.path}
                    className={`px-4 py-3 text-lg font-medium rounded-md transition duration-200 flex items-center ${
                      active 
                        ? "text-red-600 font-semibold border-b-2 border-red-600" 
                        : "text-gray-800 hover:text-red-600"
                    }`}
                  >
                    {item.name}
                    {hasSubItems && (
                      <ChevronDown size={16} className="ml-1" />
                    )}
                  </Link>
                  {hasSubItems && (
                    <div className="absolute left-1/2 transform -translate-x-1/2 top-full mt-1 w-64 bg-white border border-gray-200 rounded-md shadow-xl opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transform -translate-y-2 transition-all duration-300 z-50">
                      {item.subItems?.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.path}
                          className={`block px-5 py-3 text-sm hover:bg-gray-50 transition ${
                            isActive(sub.path) 
                              ? "text-red-600 font-medium bg-red-50" 
                              : "text-gray-700"
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
              className="p-3 rounded-md text-gray-700 hover:text-red-600 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Fixed Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="lg:hidden bg-white shadow-xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <div className="px-6 pt-4 pb-6 space-y-2">
              {navData.menuItems.map((item) => {
                const active = isActive(item.path);
                const isOpen = activeSubMenu === item.name;
                const hasSubItems = item.subItems && item.subItems.length > 0;

                return (
                  <div key={item.name} className="border-b border-gray-100 last:border-0">
                    {/* Main Menu Item */}
                    {hasSubItems ? (
                      // Items with sub-menu - button to toggle
                      <button
                        onClick={() => handleMenuItemClick(item)}
                        className={`w-full flex justify-between items-center px-4 py-4 rounded-lg text-lg font-medium text-left ${
                          active
                            ? "text-red-600 bg-red-50"
                            : "text-gray-800 hover:bg-gray-50"
                        }`}
                      >
                        <span>{item.name}</span>
                        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                      </button>
                    ) : (
                      // Items without sub-menu - direct link
                      <Link
                        href={item.path}
                        onClick={() => setIsMenuOpen(false)}
                        className={`w-full flex justify-between items-center px-4 py-4 rounded-lg text-lg font-medium ${
                          active
                            ? "text-red-600 bg-red-50"
                            : "text-gray-800 hover:bg-gray-50"
                        }`}
                      >
                        <span>{item.name}</span>
                      </Link>
                    )}

                    {/* Sub Menu Items */}
                    {hasSubItems && isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="pl-6 space-y-2 py-2"
                      >
                        {item.subItems?.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.path}
                            onClick={() => setIsMenuOpen(false)}
                            className={`block text-base py-3 px-4 rounded-md ${
                              isActive(sub.path)
                                ? "text-red-600 bg-red-50 font-medium"
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
              
              {/* Contact Button */}
              <div className="pt-4">
                <Link
                  href="/my-en/contact-us"
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full text-center px-6 py-3 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition duration-200"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}