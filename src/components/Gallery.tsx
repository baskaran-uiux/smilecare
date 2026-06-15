"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Eye, HelpCircle, ChevronsLeftRight } from "lucide-react";

type Category = "all" | "clinic" | "before-after";

export default function Gallery() {
  const [activeTab, setActiveTab] = useState<Category>("all");
  const [sliderPos, setSliderPos] = useState(50);

  const filterTabs = [
    { id: "all", label: "All Photos" },
    { id: "clinic", label: "Clinic & Facilities" },
    { id: "before-after", label: "Smile Gallery (Before/After)" },
  ];

  const galleryItems = [
    {
      id: "clinic-1",
      category: "clinic",
      title: "State-of-the-art Lobby",
      description: "Our luxury reception and patient lounge designed for ultimate comfort.",
      image: "/smilecare/images/clinic-interior.png",
    },
    {
      id: "clinic-2",
      category: "clinic",
      title: "Advanced Operatory",
      description: "Equipped with low-radiation digital scanners and ergonomic seating.",
      image: "/smilecare/images/equipment.png",
    },
  ];

  const filteredItems = activeTab === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeTab);

  return (
    <section id="gallery" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background light gradient */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-sm font-bold uppercase tracking-wider text-primary">
            Visual Tour
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
            Our Smile Gallery & Clinic Tour
          </h2>
          <p className="text-muted-foreground font-medium text-lg">
            Take a virtual tour of our high-tech clinic environment or slide to see real treatment transformations from our patients.
          </p>

          {/* Filter Bar */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-6">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as Category)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? "bg-[#0090FF] text-white shadow-md shadow-[0_4px_12px_rgba(0,144,255,0.25)]"
                    : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Content Area */}
        <div className="space-y-12">
          
          {/* Before & After Interactive Slider (Shown when tab is 'all' or 'before-after') */}
          {(activeTab === "all" || activeTab === "before-after") && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto space-y-6"
            >
              <div className="text-center">
                <span className="inline-flex items-center text-xs font-bold text-secondary bg-secondary/10 px-3 py-1 rounded-full mb-3">
                  <Sparkles className="h-3.5 w-3.5 mr-1" />
                  Interactive Whitening Comparison
                </span>
                <p className="text-sm text-muted-foreground font-medium">
                  Drag the slider handle left and right to witness the power of our Laser Teeth Whitening treatment.
                </p>
              </div>

              {/* Slider Container */}
              <div className="relative aspect-[16/10] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-card select-none">
                
                {/* Under Layer: AFTER Image */}
                <img
                  src="/smilecare/images/after-teeth.png"
                  alt="Teeth after whitening treatment"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                
                {/* Over Layer: BEFORE Image + Label (Clipped dynamically using clip-path) */}
                <div 
                  className="absolute inset-0 overflow-hidden z-10 pointer-events-none"
                  style={{ clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)` }}
                >
                  <img
                    src="/smilecare/images/before-teeth.png"
                    alt="Teeth before whitening treatment"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  
                  {/* Before Label - Clips along with the before image */}
                  <div className="absolute left-6 top-6 bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-lg text-white text-xs font-bold z-20">
                    Before Treatment
                  </div>
                </div>

                {/* Clipped wrapper for After Label - Clips when the before image expands */}
                <div 
                  className="absolute inset-0 overflow-hidden z-20 pointer-events-none"
                  style={{ clipPath: `polygon(${sliderPos}% 0, 100% 0, 100% 100%, ${sliderPos}% 100%)` }}
                >
                  <div className="absolute right-6 top-6 bg-primary/80 backdrop-blur-sm px-3 py-1.5 rounded-lg text-white text-xs font-bold">
                    After Treatment
                  </div>
                </div>

                {/* Range Input Overlay */}
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={sliderPos}
                  onChange={(e) => setSliderPos(Number(e.target.value))}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
                  aria-label="Before after comparison slider"
                />

                {/* Slider Handle Line */}
                <div 
                  className="absolute inset-y-0 w-1 bg-white shadow-xl z-20 pointer-events-none"
                  style={{ left: `${sliderPos}%` }}
                >
                  {/* Floating Drag Circle */}
                  <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 bg-white text-primary rounded-full shadow-2xl flex items-center justify-center border-2 border-primary">
                    <ChevronsLeftRight className="h-5 w-5 text-primary" />
                  </div>
                </div>

              </div>
            </motion.div>
          )}

          {/* Regular Photos Grid (Shown when tab is 'all' or 'clinic') */}
          {(activeTab === "all" || activeTab === "clinic") && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <AnimatePresence mode="popLayout">
                {filteredItems.map((item) => (
                  <motion.div
                    layout
                    key={item.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className="group bg-card rounded-3xl overflow-hidden border hover:border-primary/20 hover:shadow-xl transition-all"
                  >
                    <div className="relative aspect-[4/3] bg-muted overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(max-w-768px) 100vw, 500px"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      
                      {/* Zoom glass overlay */}
                      <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10 duration-300">
                        <div className="p-3 bg-white text-primary rounded-2xl shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                          <Eye className="h-6 w-6" />
                        </div>
                      </div>
                    </div>
                    <div className="p-6 space-y-1.5">
                      <h3 className="font-bold text-foreground text-lg">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-sm font-medium">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
