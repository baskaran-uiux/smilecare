"use client";

import Script from "next/script";
import { siteConfig } from "@/config/site";

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

export function openCalendly() {
  if (typeof window !== "undefined" && window.Calendly) {
    window.Calendly.initPopupWidget({ url: siteConfig.calendlyUrl });
  } else {
    console.warn("Calendly is not fully loaded. Opening in new tab instead.");
    if (typeof window !== "undefined") {
      window.open(siteConfig.calendlyUrl, "_blank", "noopener,noreferrer");
    }
  }
}

export default function CalendlyScript() {
  return (
    <>
      <link
        href="https://assets.calendly.com/assets/external/widget.css"
        rel="stylesheet"
      />
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
      />
    </>
  );
}
