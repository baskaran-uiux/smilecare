"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "@/app/providers";
import { openCalendly } from "./CalendlyScript";
import { siteConfig } from "@/config/site";
import { Menu, X, Sun, Moon, Smile, Phone } from "lucide-react";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "About Us", href: "#about" },
    { label: "Doctors", href: "#doctors" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md shadow-md py-3 border-b border-border/40"
          : "bg-transparent py-5 border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#home" className="flex items-center space-x-2 group">
              <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                <Smile className="h-7 w-7 text-primary" />
              </div>
              <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                SmileCare
              </span>
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-foreground/80 hover:text-primary font-medium text-sm transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-muted hover:bg-muted/80 text-foreground transition-colors cursor-pointer"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5 text-amber-500" />
              ) : (
                <Moon className="h-5 w-5 text-slate-700" />
              )}
            </button>

            {/* Quick Call */}
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="flex items-center text-sm font-bold text-foreground hover:text-primary transition-colors"
            >
              <Phone className="h-4 w-4 mr-2 text-primary" />
              {siteConfig.phone}
            </a>

            {/* Book Appointment Button */}
            <button
              onClick={openCalendly}
              className="px-6 py-2.5 rounded-full bg-[#0090FF] hover:bg-[#0080ff] text-white font-semibold text-sm shadow-[0_8px_20px_-4px_rgba(0,144,255,0.45)] hover:shadow-[0_12px_24px_-4px_rgba(0,144,255,0.55)] transition-all duration-300 hover:-translate-y-0.5 active:scale-95 cursor-pointer"
            >
              Book Appointment
            </button>
          </div>

          {/* Mobile menu button & Theme toggle */}
          <div className="flex items-center md:hidden space-x-3">
            {/* Theme Toggle (Mobile) */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-muted text-foreground transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5 text-amber-500" />
              ) : (
                <Moon className="h-5 w-5 text-slate-700" />
              )}
            </button>

            {/* Hamburger button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-foreground/80 hover:text-foreground hover:bg-muted transition-colors"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-background/95 dark:bg-card/95 backdrop-blur-md border-b border-border/40 shadow-lg transition-all duration-300 ease-in-out ${
          isOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-medium text-foreground/80 hover:text-primary hover:bg-primary/5 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4 border-t border-border flex flex-col space-y-4 px-3">
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="flex items-center text-base font-bold text-foreground hover:text-primary"
            >
              <Phone className="h-5 w-5 mr-3 text-primary" />
              {siteConfig.phone}
            </a>
            <button
              onClick={() => {
                setIsOpen(false);
                openCalendly();
              }}
              className="w-full py-3 rounded-full bg-[#0090FF] hover:bg-[#0080ff] text-white font-semibold text-center shadow-[0_8px_20px_-4px_rgba(0,144,255,0.45)] hover:shadow-[0_12px_24px_-4px_rgba(0,144,255,0.55)] transition-all duration-300 cursor-pointer"
            >
              Book Appointment
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
