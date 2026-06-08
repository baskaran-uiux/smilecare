"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Heart, Award, ShieldCheck, Zap, Star } from "lucide-react";
import { openCalendly } from "./CalendlyScript";

export default function About() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.6, ease: "easeOut" as const } 
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.6, ease: "easeOut" as const } 
    },
  };

  const values = [
    {
      icon: Heart,
      title: "Patient Comfort First",
      description: "From cozy reception rooms to painless sedation options, your relaxation is our absolute priority.",
    },
    {
      icon: Award,
      title: "Ivy-League Expertise",
      description: "Our core dentists graduated from Columbia and Harvard, bringing world-class training to your treatments.",
    },
    {
      icon: ShieldCheck,
      title: "Rigorous Safety Standards",
      description: "We exceed standard sterilization regulations, operating with medical-grade hospital hygiene practices.",
    },
    {
      icon: Zap,
      title: "Advanced Laser Tech",
      description: "We invest in top-tier dental technology like low-radiation digital scans and painless laser therapy.",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-1/3 left-0 w-72 h-72 bg-secondary/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column - Image Showcase */}
          <motion.div
            className="lg:col-span-5 relative"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Background elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-gradient-to-tr from-secondary/10 to-primary/5 rounded-full blur-2xl -z-10" />
            
            {/* Main Image */}
            <div className="relative aspect-square w-full max-w-[440px] mx-auto rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-card bg-muted">
              <Image
                src="/smilecare/images/equipment.png"
                alt="SmileCare Dental Advanced Medical Equipment"
                fill
                sizes="(max-w-1024px) 100vw, 440px"
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Float badge */}
            <div className="absolute -bottom-6 right-6 lg:-right-6 glass-panel backdrop-blur-xl px-6 py-4 rounded-2xl shadow-xl max-w-[220px]">
              <div className="flex items-center space-x-1 text-amber-500 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="text-xs font-bold text-foreground">
                "The most comfortable dental visit I've ever had."
              </p>
              <p className="text-[10px] text-muted-foreground font-bold mt-1">
                — Mark T., Patient
              </p>
            </div>
          </motion.div>

          {/* Right Column - Text & Values Grid */}
          <motion.div
            className="lg:col-span-7 space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Subheader */}
            <div className="space-y-3">
              <span className="text-sm font-bold uppercase tracking-wider text-primary">
                About Our Clinic
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
                Providing Pain-Free Dental Solutions With Integrity
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                Founded in 2012, SmileCare Dental Clinic was built with a clear vision: to redefine the dentist visit. We replace dental anxiety with a comfortable, resort-like environment, combining clinical precision with warm, patient-first care.
              </p>
            </div>

            {/* Grid of Values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {values.map((val, idx) => {
                const Icon = val.icon;
                return (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    className="flex space-x-4"
                  >
                    <div className="flex-shrink-0">
                      <div className="p-3 bg-secondary/10 rounded-xl">
                        <Icon className="h-6 w-6 text-secondary" />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-bold text-foreground text-base">
                        {val.title}
                      </h3>
                      <p className="text-muted-foreground text-xs leading-relaxed font-medium">
                        {val.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* CTA action */}
            <motion.div variants={itemVariants} className="pt-6">
              <button
                onClick={openCalendly}
                className="px-8 py-3.5 bg-[#0090FF] hover:bg-[#0080ff] text-white font-bold rounded-full shadow-[0_12px_24px_-4px_rgba(0,144,255,0.4)] hover:shadow-[0_16px_32px_-4px_rgba(0,144,255,0.55)] transition-all duration-300 inline-flex items-center justify-center space-x-2 hover:-translate-y-0.5 active:scale-95 cursor-pointer"
              >
                <span>Read Our Full Story</span>
              </button>
            </motion.div>

          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
