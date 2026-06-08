"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  MessageSquare,
  ChevronRight
} from "lucide-react";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      alert("Please fill in Name, Email, and Message.");
      return;
    }
    setStatus("loading");
    // Simulate API request
    setTimeout(() => {
      setStatus("success");
      setFormState({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
      // Reset back to idle after 5 seconds
      setTimeout(() => setStatus("idle"), 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-card border-y relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.01] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-sm font-bold uppercase tracking-wider text-secondary">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
            We'd Love To Hear From You
          </h2>
          <p className="text-muted-foreground font-medium text-lg">
            Have questions about a treatment, insurance, or scheduling? Fill out the form below or chat directly on WhatsApp.
          </p>
        </div>

        {/* Contact Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Left Column: Details, Hours & Map */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Quick Contact Info */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-foreground">Clinic Information</h3>
              <div className="space-y-3">
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(siteConfig.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-3.5 group p-2 -m-2 rounded-xl hover:bg-muted/50 transition-colors"
                >
                  <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm font-semibold text-muted-foreground group-hover:text-primary transition-colors">
                    {siteConfig.address}
                  </span>
                </a>

                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="flex items-center space-x-3.5 group p-2 -m-2 rounded-xl hover:bg-muted/50 transition-colors"
                >
                  <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm font-semibold text-muted-foreground group-hover:text-primary transition-colors">
                    {siteConfig.phone}
                  </span>
                </a>

                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center space-x-3.5 group p-2 -m-2 rounded-xl hover:bg-muted/50 transition-colors"
                >
                  <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm font-semibold text-muted-foreground group-hover:text-primary transition-colors">
                    {siteConfig.email}
                  </span>
                </a>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-foreground">Clinic Hours</h3>
              <div className="border rounded-2xl overflow-hidden divide-y divide-border bg-background">
                {siteConfig.hours.map((item, idx) => (
                  <div key={idx} className="flex justify-between px-5 py-3.5 text-sm font-medium">
                    <span className="text-foreground">{item.days}</span>
                    <span className="text-muted-foreground font-semibold">{item.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-full shadow-[0_12px_24px_-4px_rgba(16,185,129,0.3)] hover:shadow-[0_16px_32px_-4px_rgba(16,185,129,0.45)] flex items-center justify-center space-x-2 transition-all duration-300 hover:-translate-y-0.5 active:scale-95"
            >
              <MessageSquare className="h-5 w-5 fill-current" />
              <span>Chat on WhatsApp</span>
            </a>

            {/* Google Map Embed */}
            <div className="aspect-[16/9] w-full rounded-2xl overflow-hidden border relative bg-muted">
              <iframe
                title="SmileCare Dental Clinic Location Map"
                src={siteConfig.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              />
            </div>

          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7 bg-background border rounded-3xl p-8">
            <h3 className="text-xl font-bold text-foreground mb-6">Send Us A Message</h3>
            
            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 flex flex-col items-center justify-center text-center space-y-4"
              >
                <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 rounded-full text-emerald-600">
                  <CheckCircle2 className="h-16 w-16" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-xl font-bold text-foreground">Message Sent Successfully!</h4>
                  <p className="text-muted-foreground text-sm font-medium max-w-sm">
                    Thank you for contacting SmileCare. Our office manager will respond to you within 2-4 hours.
                  </p>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Dual Column Input */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      className="w-full px-4 py-3 rounded-xl border bg-muted/20 focus:bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-sm font-medium"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="e.g. john@example.com"
                      className="w-full px-4 py-3 rounded-xl border bg-muted/20 focus:bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-sm font-medium"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Phone */}
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      placeholder="e.g. (555) 000-0000"
                      className="w-full px-4 py-3 rounded-xl border bg-muted/20 focus:bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-sm font-medium"
                    />
                  </div>

                  {/* Service Choice */}
                  <div className="space-y-2">
                    <label htmlFor="service" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      Inquired Service
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formState.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border bg-muted/20 focus:bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-sm font-semibold"
                    >
                      <option value="">Select a service...</option>
                      {siteConfig.services.map((item) => (
                        <option key={item.id} value={item.title}>
                          {item.title}
                        </option>
                      ))}
                      <option value="General Consultation">General Consultation</option>
                      <option value="Other / Emergency">Other / Emergency</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Tell us about your dental needs or questions..."
                    className="w-full px-4 py-3 rounded-xl border bg-muted/20 focus:bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-sm font-medium resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className={`w-full py-4 bg-[#0090FF] hover:bg-[#0080ff] text-white font-bold rounded-full shadow-[0_12px_24px_-4px_rgba(0,144,255,0.4)] hover:shadow-[0_16px_32px_-4px_rgba(0,144,255,0.55)] flex items-center justify-center space-x-2 transition-all duration-300 cursor-pointer ${
                    status === "loading" ? "opacity-85 cursor-not-allowed" : "hover:-translate-y-0.5 active:scale-95"
                  }`}
                >
                  {status === "loading" ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
