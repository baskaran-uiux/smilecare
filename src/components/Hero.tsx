"use client";

import React from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { openCalendly } from "./CalendlyScript";
import { Calendar, PhoneCall, Star, CheckCircle } from "lucide-react";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section id="home" className="relative min-h-[550px] lg:h-[620px] flex items-center overflow-hidden py-16 md:py-20">
      {/* Background Video (Full Opacity on the right, faded on the left for text readability) */}
      <div className="absolute inset-0 w-full h-full -z-20 overflow-hidden">
        <video
          src="/banner.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
        {/* Horizontal gradient overlay: Dark/Light on left, transparent on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent z-10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Side Content - Left Aligned */}
          <motion.div
            className="lg:col-span-8 space-y-6 text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Rating Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center space-x-2 bg-primary/10 dark:bg-primary/25 border border-primary/20 px-4 py-1.5 rounded-full text-xs font-semibold text-primary"
            >
              <Star className="h-4 w-4 fill-primary text-primary" />
              <span>4.9/5 Google Rated Clinic (500+ Reviews)</span>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-foreground"
            >
              Your Perfect Smile <br />
              <span className="text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text">
                Starts Right Here
              </span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-muted-foreground max-w-xl font-medium leading-relaxed"
            >
              {siteConfig.description}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-start gap-4 pt-2"
            >
              <button
                onClick={openCalendly}
                className="w-full sm:w-auto px-8 py-3.5 bg-[#0090FF] hover:bg-[#0080ff] text-white font-bold rounded-full shadow-[0_12px_24px_-4px_rgba(0,144,255,0.4)] hover:shadow-[0_16px_32px_-4px_rgba(0,144,255,0.55)] transition-all duration-300 flex items-center justify-center space-x-2 hover:-translate-y-0.5 active:scale-95 cursor-pointer"
              >
                <Calendar className="h-5 w-5" />
                <span>Book Appointment</span>
              </button>
              
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="w-full sm:w-auto px-8 py-3.5 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 text-slate-800 dark:text-slate-200 font-bold rounded-full shadow-[0_10px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_14px_28px_rgba(0,0,0,0.08)] transition-all duration-300 flex items-center justify-center space-x-2 hover:-translate-y-0.5 active:scale-95"
              >
                <PhoneCall className="h-5 w-5 text-[#0090FF] animate-bounce" />
                <span>Emergency Contact</span>
              </a>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              variants={itemVariants}
              className="pt-4 flex flex-wrap items-center justify-start gap-x-6 gap-y-2 text-foreground/80"
            >
              <div className="flex items-center space-x-1.5">
                <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0" />
                <span className="text-xs font-semibold">FDA Approved Tech</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0" />
                <span className="text-xs font-semibold">ISO 9001 Facility</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0" />
                <span className="text-xs font-semibold">Pain-Free Promise</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right side is intentionally empty to let the background video shine through */}
          <div className="hidden lg:block lg:col-span-4" />

        </div>
      </div>
    </section>
  );
}
