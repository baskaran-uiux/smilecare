"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { openCalendly } from "./CalendlyScript";
import { Calendar, PhoneCall, Star, CheckCircle, ShieldAlert } from "lucide-react";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" as const } },
  };

  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden grid-bg">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full -z-20 overflow-hidden">
        <video
          src="/banner.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
        {/* Overlay for legibility */}
        <div className="absolute inset-0 bg-background/80 dark:bg-background/85 backdrop-blur-[1px]" />
      </div>

      {/* Background Gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-secondary/15 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Side Info */}
          <motion.div
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
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
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-none text-foreground"
            >
              Your Perfect Smile <br />
              <span className="text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text">
                Starts Right Here
              </span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0 font-medium"
            >
              {siteConfig.description}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4"
            >
              <button
                onClick={openCalendly}
                className="w-full sm:w-auto px-8 py-4 bg-[#0090FF] hover:bg-[#0080ff] text-white font-bold rounded-full shadow-[0_12px_24px_-4px_rgba(0,144,255,0.4)] hover:shadow-[0_16px_32px_-4px_rgba(0,144,255,0.55)] transition-all duration-300 flex items-center justify-center space-x-2 hover:-translate-y-0.5 active:scale-95 cursor-pointer"
              >
                <Calendar className="h-5 w-5" />
                <span>Book Appointment</span>
              </button>
              
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 text-slate-800 dark:text-slate-200 font-bold rounded-full shadow-[0_10px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_14px_28px_rgba(0,0,0,0.08)] transition-all duration-300 flex items-center justify-center space-x-2 hover:-translate-y-0.5 active:scale-95"
              >
                <PhoneCall className="h-5 w-5 text-[#0090FF] animate-bounce" />
                <span>Emergency Contact</span>
              </a>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              variants={itemVariants}
              className="pt-6 grid grid-cols-3 gap-4 border-t border-border max-w-md mx-auto lg:mx-0"
            >
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                <span className="text-xs font-semibold text-foreground/80">FDA Approved Tech</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                <span className="text-xs font-semibold text-foreground/80">ISO 9001 Facility</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                <span className="text-xs font-semibold text-foreground/80">Pain-Free Promise</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side Image Showcase */}
          <motion.div
            className="lg:col-span-5 relative flex justify-center lg:justify-end"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Background elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-gradient-to-tr from-primary/10 to-secondary/15 rounded-full blur-2xl -z-10" />
            
            {/* Modern frame wrapper */}
            <div className="relative w-full max-w-[420px] aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-card bg-muted">
              <Image
                src="/images/hero-dentist.png"
                alt="SmileCare Dental Clinic Patient and Dentist"
                fill
                priority
                sizes="(max-w-1024px) 100vw, 420px"
                className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>

            {/* Floating Card 1 */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute -left-6 top-1/3 glass-panel backdrop-blur-xl px-4 py-3 rounded-2xl shadow-xl flex items-center space-x-3 max-w-[200px]"
            >
              <div className="p-2 bg-secondary/10 rounded-xl">
                <CheckCircle className="h-5 w-5 text-secondary" />
              </div>
              <div>
                <p className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground">Quality Rate</p>
                <p className="text-sm font-bold text-foreground">99.4% Satisfaction</p>
              </div>
            </motion.div>

            {/* Floating Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute -right-4 bottom-12 glass-panel backdrop-blur-xl px-4 py-3 rounded-2xl shadow-xl flex items-center space-x-3 max-w-[200px]"
            >
              <div className="p-2 bg-primary/10 rounded-xl">
                <Calendar className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground">Availability</p>
                <p className="text-sm font-bold text-foreground">Same-Day Visits</p>
              </div>
            </motion.div>
          </motion.div>

        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 p-8 rounded-3xl border glass-panel shadow-lg divide-y md:divide-y-0 md:divide-x divide-border"
        >
          {siteConfig.achievements.map((stat, idx) => (
            <div key={idx} className="text-center pt-4 md:pt-0 first:pt-0">
              <p className="text-4xl md:text-5xl font-extrabold text-primary tracking-tight">
                {stat.value}
              </p>
              <p className="text-sm font-semibold text-muted-foreground mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
