"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { openCalendly } from "./CalendlyScript";
import { Calendar, Award, Star, Mail, Briefcase } from "lucide-react";

export default function Doctors() {
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" as const } 
    },
  };

  return (
    <section id="doctors" className="py-20 md:py-28 bg-card border-y relative grid-bg">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/[0.01] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-sm font-bold uppercase tracking-wider text-secondary">
            Our Specialists
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
            Meet Our Ivy-League Trained Dentists
          </h2>
          <p className="text-muted-foreground font-medium text-lg">
            Our doctors combine extensive clinical experience from top dental universities with a compassionate, gentle approach to patient care.
          </p>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {siteConfig.doctors.map((doctor) => (
            <motion.div
              key={doctor.id}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className="group bg-background rounded-3xl overflow-hidden border hover:border-primary/30 hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* Doctor Image Container */}
              <div className="relative aspect-[4/3] w-full bg-muted overflow-hidden">
                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  fill
                  sizes="(max-w-768px) 100vw, 500px"
                  className="object-cover group-hover:scale-102 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
                
                {/* Float Specialization Badge */}
                <span className="absolute bottom-4 left-4 bg-primary/90 text-primary-foreground text-xs font-bold px-3.5 py-1.5 rounded-lg shadow-md">
                  {doctor.specialty}
                </span>
              </div>

              {/* Doctor Details */}
              <div className="p-8 flex-grow flex flex-col justify-between space-y-6">
                
                <div className="space-y-4">
                  {/* Name & Title */}
                  <div className="space-y-1">
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {doctor.name}
                    </h3>
                    <p className="text-sm text-secondary font-bold">
                      {doctor.title}
                    </p>
                  </div>

                  {/* Bio */}
                  <p className="text-sm text-muted-foreground leading-relaxed font-medium">
                    {doctor.bio}
                  </p>

                  {/* Highlights/Stats */}
                  <div className="grid grid-cols-2 gap-4 pt-2">
                    <div className="flex items-center space-x-2 text-xs font-semibold text-foreground/80">
                      <Briefcase className="h-4 w-4 text-primary" />
                      <span>{doctor.experience} Experience</span>
                    </div>
                    <div className="flex items-center space-x-2 text-xs font-semibold text-foreground/80">
                      <Award className="h-4 w-4 text-primary" />
                      <span className="truncate" title={doctor.qualification}>Ivy League Graduate</span>
                    </div>
                  </div>

                  {/* Schedule */}
                  <div className="p-4 bg-muted/50 rounded-2xl flex items-start space-x-3 border">
                    <Calendar className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                    <div className="space-y-0.5">
                      <p className="text-xs font-bold text-foreground">Consultation Hours</p>
                      <p className="text-xs text-muted-foreground font-semibold">{doctor.timings}</p>
                    </div>
                  </div>
                </div>

                {/* Booking Call-To-Action */}
                <div className="pt-6 border-t border-border flex items-center justify-between gap-4">
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="p-3 bg-muted hover:bg-primary/10 hover:text-[#0090FF] rounded-full text-muted-foreground transition-colors border"
                    title="Send Email inquiry"
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                  
                  <button
                    onClick={openCalendly}
                    className="flex-grow py-3 px-6 bg-[#0090FF] hover:bg-[#0080ff] text-white font-bold rounded-full text-sm shadow-[0_8px_20px_-4px_rgba(0,144,255,0.4)] hover:shadow-[0_12px_24px_-4px_rgba(0,144,255,0.55)] transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer"
                  >
                    <Calendar className="h-4 w-4" />
                    <span>Book Consultation</span>
                  </button>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
