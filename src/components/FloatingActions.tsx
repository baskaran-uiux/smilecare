"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/config/site";
import { Phone, MessageCircle, X } from "lucide-react";

export default function FloatingActions() {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show the WhatsApp tooltip after 4 seconds
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 4000);

    // Hide tooltip automatically after 10 seconds
    const autoHideTimer = setTimeout(() => {
      setShowTooltip(false);
    }, 14000);

    return () => {
      clearTimeout(timer);
      clearTimeout(autoHideTimer);
    };
  }, []);

  return (
    <div className="fixed bottom-6 left-0 right-0 z-40 pointer-events-none px-6 flex items-center justify-between">
      
      {/* Mobile-only Call Now Floating Button (Bottom-Left) */}
      <div className="pointer-events-auto md:hidden">
        <a
          href={`tel:${siteConfig.phoneRaw}`}
          className="flex items-center justify-center w-14 h-14 bg-primary hover:bg-primary/90 text-white rounded-full shadow-2xl transition-all active:scale-90"
          aria-label="Call clinic emergency line"
        >
          <Phone className="h-6 w-6 animate-pulse" />
        </a>
      </div>

      {/* WhatsApp Chat Floating Trigger (Bottom-Right) */}
      <div className="pointer-events-auto ml-auto flex items-end space-x-3 relative">
        
        {/* Animated Help Tooltip Bubble */}
        <AnimatePresence>
          {showTooltip && (
            <motion.div
              initial={{ opacity: 0, scale: 0.85, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.85, x: 20 }}
              className="absolute bottom-16 right-0 glass-panel border px-4 py-3 rounded-2xl shadow-2xl flex items-center space-x-3 w-56 text-left"
            >
              <div className="space-y-0.5 flex-grow">
                <p className="text-xs font-bold text-foreground">Need Dental Advice?</p>
                <p className="text-[10px] text-muted-foreground font-semibold">Chat with our coordinator now!</p>
              </div>
              <button 
                onClick={() => setShowTooltip(false)}
                className="text-muted-foreground hover:text-foreground p-0.5 rounded-full"
                aria-label="Close advice notification"
              >
                <X className="h-3.5 w-3.5" />
              </button>
              
              {/* Tooltip speech bubble tail */}
              <div className="absolute -bottom-2 right-6 w-4 h-4 bg-background border-r border-b border-border rotate-45 transform translate-y-px -z-10 dark:bg-card" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* WhatsApp Button Wrapper with Smooth Floating/Bobbing Animation */}
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
          className="pointer-events-auto"
        >
          <a
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex items-center justify-center w-14 h-14 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-2xl transition-all active:scale-90 group"
            aria-label="Chat with clinic on WhatsApp"
          >
            {/* Pulsating outer ring */}
            <span className="absolute inset-0 rounded-full bg-emerald-600/30 animate-ping group-hover:animate-none -z-10" />
            
            <MessageCircle className="h-7 w-7 fill-current" />
          </a>
        </motion.div>

      </div>

    </div>
  );
}
