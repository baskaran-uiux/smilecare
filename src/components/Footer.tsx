"use client";

import React, { useState } from "react";
import { siteConfig } from "@/config/site";
import { openCalendly } from "./CalendlyScript";
import { 
  Smile, 
  MapPin, 
  Phone, 
  Mail, 
  Send,
  ArrowUp,
  CheckCircle2
} from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 5000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 border-t" style={{ borderColor: "rgba(255, 255, 255, 0.08)" }}>
      {/* Upper Footer: Main Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Column 1: Brand & Contact Info */}
          <div className="lg:col-span-4 space-y-6">
            <a href="#home" className="flex items-center space-x-2 text-white font-bold group">
              <div className="p-2 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-colors">
                <Smile className="h-6 w-6 text-primary" />
              </div>
              <span className="text-lg tracking-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                SmileCare
              </span>
            </a>
            <p className="text-sm font-medium text-slate-400 leading-relaxed">
              Redefining dental clinic visits. Combining top-tier Harvard and Columbia dentistry with resort-like customer care for pain-free treatments.
            </p>
            <div className="space-y-3 text-sm font-medium text-slate-400">
              <div className="flex items-start space-x-2.5">
                <MapPin className="h-4.5 w-4.5 text-primary mt-0.5 flex-shrink-0" />
                <span>{siteConfig.address}</span>
              </div>
              <a href={`tel:${siteConfig.phoneRaw}`} className="flex items-center space-x-2.5 hover:text-primary transition-colors">
                <Phone className="h-4.5 w-4.5 text-primary flex-shrink-0" />
                <span>{siteConfig.phone}</span>
              </a>
              <a href={`mailto:${siteConfig.email}`} className="flex items-center space-x-2.5 hover:text-primary transition-colors">
                <Mail className="h-4.5 w-4.5 text-primary flex-shrink-0" />
                <span>{siteConfig.email}</span>
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-white text-sm font-bold uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-sm font-medium text-slate-400">
              <li><a href="#home" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Services</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#doctors" className="hover:text-primary transition-colors">Doctors</a></li>
              <li><a href="#gallery" className="hover:text-primary transition-colors">Gallery</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Treatments Shortcuts */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white text-sm font-bold uppercase tracking-wider">Treatments</h4>
            <ul className="space-y-2 text-sm font-medium text-slate-400">
              {siteConfig.services.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <button 
                    onClick={openCalendly}
                    className="hover:text-primary text-left transition-colors cursor-pointer"
                  >
                    {service.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter & Socials */}
          <div className="lg:col-span-3 space-y-6">
            <div className="space-y-3">
              <h4 className="text-white text-sm font-bold uppercase tracking-wider">Newsletter</h4>
              <p className="text-xs font-semibold text-slate-400 leading-relaxed">
                Subscribe to receive tooth-care tips and exclusive clinic offers.
              </p>
              
              {subscribed ? (
                <div className="flex items-center space-x-2 text-xs font-bold text-emerald-400 p-3 bg-slate-800 rounded-full">
                  <CheckCircle2 className="h-4 w-4" />
                  <span>Subscribed Successfully!</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-1 bg-slate-800 p-1 rounded-full border" style={{ borderColor: "rgba(255, 255, 255, 0.15)" }}>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter email..."
                    className="w-full px-4 py-2 bg-transparent text-white placeholder-slate-500 focus:outline-none text-xs font-medium"
                  />
                  <button
                    type="submit"
                    className="p-2.5 bg-[#0090FF] hover:bg-[#0080ff] text-white rounded-full shadow-md transition-all active:scale-95 cursor-pointer"
                    aria-label="Subscribe to newsletter"
                  >
                    <Send className="h-4 w-4" />
                  </button>
                </form>
              )}
            </div>

            {/* Socials Row */}
            <div className="space-y-3">
              <h4 className="text-white text-xs font-bold uppercase tracking-wider">Follow Us</h4>
              <div className="flex space-x-3.5">
                <a href={siteConfig.socials.facebook} target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-800 hover:bg-primary hover:text-white rounded-full transition-all flex items-center justify-center" aria-label="Facebook">
                  <svg className="h-4.5 w-4.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>
                <a href={siteConfig.socials.instagram} target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-800 hover:bg-primary hover:text-white rounded-full transition-all flex items-center justify-center" aria-label="Instagram">
                  <svg className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
                <a href={siteConfig.socials.twitter} target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-800 hover:bg-primary hover:text-white rounded-full transition-all flex items-center justify-center" aria-label="Twitter">
                  <svg className="h-4.5 w-4.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a href={siteConfig.socials.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-800 hover:bg-primary hover:text-white rounded-full transition-all flex items-center justify-center" aria-label="LinkedIn">
                  <svg className="h-4.5 w-4.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Lower Footer: Copyright & Legal */}
      <div className="bg-slate-950/60 border-t py-6 text-xs text-slate-500 font-medium" style={{ borderColor: "rgba(255, 255, 255, 0.08)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            © {new Date().getFullYear()} SmileCare Dental Clinic. All rights reserved.
          </div>
          <div className="flex items-center space-x-6">
            <a href="#faq" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#faq" className="hover:text-slate-300 transition-colors">Terms of Service</a>
            <button 
              onClick={scrollToTop}
              className="p-2 bg-slate-800 text-slate-400 hover:text-white rounded-full border transition-all cursor-pointer flex items-center justify-center"
              style={{ borderColor: "rgba(255, 255, 255, 0.15)" }}
              aria-label="Scroll to top of page"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
