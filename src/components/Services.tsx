"use client";

import React from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { openCalendly } from "./CalendlyScript";
import { 
  Sparkles, 
  Activity, 
  Shield, 
  Flame, 
  Smile, 
  Baby, 
  Heart, 
  ArrowRight,
  Clock,
  IndianRupee
} from "lucide-react";

// Map icon string names to components
const iconMap: Record<string, React.ComponentType<any>> = {
  Sparkles: Sparkles,
  Activity: Activity,
  Shield: Shield,
  Flame: Flame,
  Smile: Smile,
  Baby: Baby,
  Heart: Heart,
};

export default function Services() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: "easeOut" as const } 
    },
  };

  return (
    <section id="services" className="py-20 md:py-28 bg-card border-y relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-sm font-bold uppercase tracking-wider text-secondary">
            Our Specialties
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
            Complete Dental Services For Your Smile
          </p>
          <p className="text-muted-foreground font-medium text-lg">
            From preventive cleanings to advanced dental implants, we provide comprehensive, state-of-the-art care tailored to your individual needs.
          </p>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {siteConfig.services.map((service) => {
            const IconComponent = iconMap[service.iconName] || Sparkles;

            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="group relative bg-background rounded-3xl p-8 border hover:border-primary/30 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                {/* Accent line on hover */}
                <div className="absolute top-0 left-0 right-0 h-1.5 rounded-t-3xl bg-gradient-to-r from-primary to-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                <div className="space-y-6">
                  {/* Icon & Specs */}
                  <div className="flex items-start justify-between">
                    <div className="p-3 bg-primary/10 rounded-2xl group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    
                    {/* Price and Duration Badges */}
                    <div className="flex flex-col items-end text-right space-y-1">
                      <span className="inline-flex items-center text-xs font-bold text-foreground bg-muted px-2.5 py-1 rounded-lg">
                        <IndianRupee className="h-3.5 w-3.5 text-secondary mr-0.5" />
                        {service.price}
                      </span>
                      <span className="inline-flex items-center text-[10px] font-semibold text-muted-foreground bg-muted/50 px-2 py-0.5 rounded-md">
                        <Clock className="h-3 w-3 mr-1 text-primary" />
                        {service.duration}
                      </span>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm font-medium leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Expandable/Details view */}
                  <div className="text-xs text-muted-foreground border-t border-border pt-4 leading-relaxed font-normal">
                    {service.details}
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-6 mt-6 border-t border-border">
                  <button
                    onClick={openCalendly}
                    className="w-full py-3 px-4 rounded-full border border-[#0090FF]/20 text-[#0090FF] bg-[#0090FF]/5 hover:bg-[#0090FF] hover:text-white font-semibold text-sm transition-all duration-300 flex items-center justify-center space-x-2 hover:shadow-[0_8px_16px_rgba(0,144,255,0.25)] cursor-pointer"
                  >
                    <span>Book Treatment</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            );
          })}

          {/* Banner Card / Consultation Prompt (Balances grid) */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 300, damping: 22 }}
            className="relative bg-gradient-to-tr from-primary to-secondary text-white rounded-3xl p-8 shadow-xl flex flex-col justify-between overflow-hidden group"
          >
            {/* Background pattern */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full blur-2xl -z-1" />
            <div className="absolute -bottom-8 -left-8 w-36 h-36 bg-white/5 rounded-full blur-xl -z-1" />

            <div className="space-y-6 relative z-10">
              <span className="inline-flex items-center text-xs font-bold bg-white/20 px-3 py-1 rounded-full uppercase tracking-widest">
                Custom Care
              </span>
              
              <div className="space-y-3">
                <h3 className="text-2xl font-extrabold tracking-tight">
                  Not Sure What Treatment You Need?
                </h3>
                <p className="text-white/80 text-sm leading-relaxed font-medium">
                  Book a general diagnostics consultation. Our expert dentists will examine your teeth, take digital scans, and map out a customized treatment plan.
                </p>
              </div>

              <ul className="text-xs space-y-2 text-white/90">
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-white rounded-full mr-2" />
                  Comprehensive visual exam
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-white rounded-full mr-2" />
                  Digital diagnostic X-rays
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-white rounded-full mr-2" />
                  Written treatment proposal
                </li>
              </ul>
            </div>

            <div className="pt-6 relative z-10">
              <button
                onClick={openCalendly}
                className="w-full py-4 bg-white text-[#0090FF] hover:bg-white/95 font-bold rounded-full text-sm transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:scale-95 flex items-center justify-center space-x-2 cursor-pointer"
              >
                <span>Schedule Consultation</span>
                <ArrowRight className="h-4 w-4 text-[#0090FF]" />
              </button>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
