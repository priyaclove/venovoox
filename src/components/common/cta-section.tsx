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


 useEffect(() => {
  setIsMobile(window.innerWidth < 768);
  const handleResize = () => setIsMobile(window.innerWidth < 768);
  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
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

  const barPosition = isMobile && isScrolled ? "bottom-0" : "top-0";
  const barHeight = "70px";

  return (
    <div className={`sticky-promo-bar ${barPosition}`}>
      <style jsx global>{`
        body {
          padding-top: ${!isMobile || !isScrolled ? barHeight : "0"};
          padding-bottom: ${isMobile && isScrolled ? barHeight : "0"};
        }
        header.fixed {
          top: ${!isMobile || !isScrolled ? barHeight : "0"} !important;
        }
        .sticky-promo-bar {
          position: fixed;
          left: 0;
          width: 100%;
          height: ${barHeight};
          background: linear-gradient(145deg, #8b0000, #2c2c2c 70%, #1a1a1a);
          color: white;
          z-index: 50;
          box-shadow: 0 4px 12px rgba(0,0,0,0.25);
          transition: all 0.3s ease;
          backdrop-filter: blur(4px);
        }
        .sticky-promo-bar.top-0 { top: 0; }
        .sticky-promo-bar.bottom-0 { bottom: 0; }
        .promo-message {
          font-weight: 500;
          letter-spacing: 0.3px;
          text-shadow: 0 1px 2px rgba(0,0,0,0.3);
        }
        .whatsapp-button {
          position: relative;
          overflow: hidden;
          border: none;
          transition: all 0.3s ease;
        }
        .whatsapp-button:hover { transform: translateY(-2px); box-shadow: 0 4px 8px rgba(0,0,0,0.2); }
        @media (max-width: 768px) {
          .sticky-bar-mobile-button { padding: 6px 12px; font-size: 14px; border-radius: 24px; }
        }
      `}</style>

      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        <div className="flex-1 overflow-hidden whitespace-nowrap text-sm md:text-base">
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
        <button 
          onClick={openWhatsApp}
          className="whatsapp-button sticky-bar-mobile-button flex items-center gap-2 bg-gradient-to-br from-red-500 to-red-700 px-4 py-2 rounded-full text-white text-xs md:text-sm font-bold shadow-md"
          aria-label="Contact us on WhatsApp"
        >
          <MessageSquare size={isMobile ? 16 : 18} className="text-white" strokeWidth={2.5} />
          <span className="hidden md:inline p-2">WhatsApp</span>
        </button>
      </div>
    </div>
  );
}
