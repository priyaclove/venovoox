'use client';

import { useState, useEffect } from 'react';
import { MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Array of promotional messages that rotate randomly
const promoMessages = [
  "Top Rated Employment Consultant in Petaling Jaya",
  "100% Success Rate in Job Placements Across Malaysia",
  "Special Offer: Free Resume Review for New Clients",
  "Professional Recruitment Services in Petaling Jaya",
  "Fast-Track Your Career with Malaysia's Leading Job Consultants"
];

export default function StickyPromoBar() {
  const [currentMessage, setCurrentMessage] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check for mobile view and add resize listener
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile(); // Initial check
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Handle scroll position (only on mobile)
  useEffect(() => {
    if (!isMobile) return;
    const handleScroll = () => setIsScrolled(window.scrollY > 200);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile]);

  // Rotate messages every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage(prev => (prev + 1) % promoMessages.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const openWhatsApp = () => window.open("https://wa.me/+60128008888", "_blank");

  // Determine position based on scroll and device
  const barPosition = isMobile && isScrolled ? "bottom-0" : "top-0";

  return (
    <div className={`sticky-promo-bar ${barPosition}`}>
      <style jsx global>{`
        /* Global adjustments for the bar */
        body {
          padding-top: ${!isMobile || !isScrolled ? "60px" : "0"};
          padding-bottom: ${isMobile && isScrolled ? "60px" : "0"};
        }
        
        header.fixed {
          top: ${!isMobile || !isScrolled ? "60px" : "0"} !important;
        }
        
        /* Bar styling */
        .sticky-promo-bar {
          position: fixed;
          left: 0;
          width: 100%;
          height: 60px;
          background: linear-gradient(145deg, #8b0000, #2c2c2c 70%, #1a1a1a);
          color: white;
          z-index: 50;
          box-shadow: 0 4px 12px rgba(0,0,0,0.25);
          transition: all 0.3s ease;
          backdrop-filter: blur(4px);
        }
        
        .sticky-promo-bar.top-0 { top: 0; }
        .sticky-promo-bar.bottom-0 { bottom: 0; }
        
        /* Mobile styling */
        @media (max-width: 767px) {
          .sticky-promo-bar {
            height: 54px;
            background: linear-gradient(145deg, #8b0000, #1a1a1a 90%);
          }
          
          .promo-container {
            padding: 0 8px;
          }
        }
        
        /* Text styling */
        .promo-message {
          font-weight: 500;
          letter-spacing: 0.3px;
          text-shadow: 0 1px 2px rgba(0,0,0,0.3);
          display: block;
          white-space: nowrap;
        }
        
        /* Button styling */
        .whatsapp-button {
          position: relative;
          overflow: hidden;
          border: none;
          transition: all 0.3s ease;
        }
        
        .whatsapp-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 8px rgba(0,0,0,0.2);
        }
        
        /* Pulse animation for the button */
        .pulse {
          animation: pulse-animation 2s infinite;
        }
        
        @keyframes pulse-animation {
          0% { box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.4); }
          70% { box-shadow: 0 0 0 10px rgba(255, 255, 255, 0); }
          100% { box-shadow: 0 0 0 0 rgba(255, 255, 255, 0); }
        }
      `}</style>

      <div className="h-full flex items-center justify-between promo-container px-3 md:px-6 lg:container lg:mx-auto">
        {/* Left side - message */}
        <div className="flex-1 overflow-hidden text-xs sm:text-sm md:text-base pr-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentMessage}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="inline-block promo-message"
            >
              {promoMessages[currentMessage]}
            </motion.div>
          </AnimatePresence>
        </div>
        
        {/* Right side - WhatsApp button */}
        <button 
          onClick={openWhatsApp}
          className="whatsapp-button pulse flex items-center gap-1 md:gap-2 bg-gradient-to-br from-red-500 to-red-700 px-3 py-1.5 md:px-4 md:py-2 rounded-full text-white text-xs md:text-sm font-bold shadow-md"
          aria-label="Contact us on WhatsApp"
        >
          <MessageSquare size={isMobile ? 16 : 18} className="text-white" strokeWidth={2.5} />
          {/* <span className={isMobile ? "text-xs" : "text-sm"}>WhatsApp</span> */}
        </button>
      </div>
    </div>
  );
}