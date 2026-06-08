"use client";

import React from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
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
    <section id="testimonials" className="py-20 md:py-28 bg-card border-y relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.01] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-sm font-bold uppercase tracking-wider text-secondary">
            Patient Stories
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
            Loved By Our Patients, Trusted by Families
          </h2>
          <p className="text-muted-foreground font-medium text-lg">
            Read real, verified reviews from patients who experienced our gentle treatments and modern dental care.
          </p>
        </div>

        {/* Infinite Moving Marquee Wrapper */}
        <div className="relative w-full overflow-hidden py-4 select-none">
          {/* Gradient Overlays for smooth fading effect at edges */}
          <div className="absolute top-0 bottom-0 left-0 w-12 md:w-32 bg-gradient-to-r from-card to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-12 md:w-32 bg-gradient-to-l from-card to-transparent z-10 pointer-events-none" />
          
          <div className="animate-marquee flex gap-8">
            {/* Render reviews twice for a seamless infinite loop */}
            {[...siteConfig.testimonials, ...siteConfig.testimonials].map((item, idx) => (
              <div
                key={idx}
                className="relative bg-background rounded-3xl p-8 border hover:border-[#0090FF]/30 hover:shadow-xl transition-all duration-300 flex flex-col justify-between w-[320px] md:w-[400px] shrink-0"
              >
                {/* Quote Icon Background decoration */}
                <Quote className="absolute top-6 right-6 h-12 w-12 text-muted/30 rotate-180 -z-0" />

                <div className="space-y-6 relative z-10">
                  {/* Stars Rating */}
                  <div className="flex items-center space-x-1 text-amber-500">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-muted-foreground text-sm font-medium leading-relaxed italic">
                    "{item.text}"
                  </p>
                </div>

                {/* Reviewer Meta */}
                <div className="pt-6 mt-6 border-t border-border flex items-center justify-between relative z-10">
                  <div className="space-y-0.5">
                    <h4 className="font-bold text-foreground text-base">
                      {item.name}
                    </h4>
                    <span className="inline-flex text-[10px] font-bold text-secondary bg-secondary/10 px-2.5 py-0.5 rounded-full">
                      {item.treatment}
                    </span>
                  </div>
                  <div className="text-right">
                    {/* Google Verified Review Badge */}
                    <span className="inline-flex items-center text-[10px] font-bold text-green-600 dark:text-green-400 bg-transparent px-2.5 py-0.5 rounded-full border border-green-500/30 dark:border-green-400/20">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-1.5 animate-pulse" />
                      Verified
                    </span>
                    <p className="text-[10px] text-muted-foreground font-semibold mt-1">
                      {item.date}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Google Reviews Trust Banner */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-3 bg-muted/50 border px-6 py-3 rounded-2xl">
            <span className="text-sm font-bold text-foreground">Our overall rating:</span>
            <div className="flex items-center space-x-1">
              <span className="text-base font-black text-foreground">4.9</span>
              <div className="flex items-center text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
            </div>
            <span className="text-xs text-muted-foreground font-semibold">based on 512 Google customer reviews</span>
          </div>
        </div>

      </div>
    </section>
  );
}
