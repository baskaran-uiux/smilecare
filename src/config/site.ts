export const siteConfig = {
  name: "SmileCare Dental Clinic",
  tagline: "Your Perfect Smile Starts Here",
  description: "Experience world-class, premium dental care in a comfortable, state-of-the-art environment. SmileCare Dental Clinic offers personalized treatment plans for the whole family.",
  calendlyUrl: "https://calendly.com/singleboss643/30min", // User's live link
  whatsappUrl: "https://wa.me/15552345678?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20a%20dental%20appointment.",
  phone: "+1 (555) 234-5678",
  phoneRaw: "+15552345678",
  email: "appointments@smilecaredental.com",
  address: "123 Dental Plaza, Suite 100, Healthcare City, NY 10001",
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.4282495961614!2d-73.98741368459383!3d40.75130297932731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1652345678901!5m2!1sen!2sus",
  
  hours: [
    { days: "Monday - Friday", time: "8:00 AM - 6:00 PM" },
    { days: "Saturday", time: "9:00 AM - 3:00 PM" },
    { days: "Sunday", time: "Closed (Emergency Only)" }
  ],
  
  socials: {
    facebook: "https://facebook.com/smilecaredental",
    instagram: "https://instagram.com/smilecaredental",
    twitter: "https://twitter.com/smilecaredental",
    linkedin: "https://linkedin.com/company/smilecaredental"
  },
  
  achievements: [
    { value: "15+", label: "Years Experience" },
    { value: "12K+", label: "Happy Patients" },
    { value: "99.4%", label: "Satisfaction Rate" },
    { value: "25+", label: "Industry Awards" }
  ],

  services: [
    {
      id: "teeth-cleaning",
      title: "Teeth Cleaning",
      description: "Professional prophylaxis to remove plaque, tartar, and surface stains, helping to prevent cavities and gum disease.",
      details: "Our dental hygienists use advanced ultrasonic scalers to gently remove tartar and high-pressure polishing to leave your teeth sparkling clean. Recommended every 6 months.",
      price: "From ₹1,500",
      duration: "45 mins",
      iconName: "Sparkles"
    },
    {
      id: "root-canal",
      title: "Root Canal Treatment",
      description: "Gentle therapy to save infected or severely damaged teeth, removing the pain and restoring function.",
      details: "Using modern rotary endodontics and local anesthetics, we ensure the procedure is virtually painless. We clean the pulp chamber, disinfect, and seal the tooth.",
      price: "From ₹4,500",
      duration: "60-90 mins",
      iconName: "Activity"
    },
    {
      id: "dental-implants",
      title: "Dental Implants",
      description: "Permanent, premium titanium replacements for missing teeth that look, feel, and function like natural teeth.",
      details: "A multi-stage process starting with a digital 3D CT scan, precise surgical placement of a bio-compatible titanium post, and customized ceramic crown restoration.",
      price: "From ₹25,000",
      duration: "Requires Consultation",
      iconName: "Shield"
    },
    {
      id: "teeth-whitening",
      title: "Teeth Whitening",
      description: "State-of-the-art in-office and take-home whitening treatments to brighten your smile up to 8 shades.",
      details: "Choose between a 60-minute laser whitening session in our clinic for immediate results, or customized take-home trays with medical-grade whitening gel.",
      price: "From ₹8,000",
      duration: "60 mins",
      iconName: "Flame"
    },
    {
      id: "braces-aligners",
      title: "Braces & Aligners",
      description: "Orthodontic solutions including clear aligners and modern brackets to straighten teeth and fix bites.",
      details: "We are certified Invisalign providers. We build a full 3D simulation of your treatment progress and deliver comfortable, virtually invisible trays.",
      price: "From ₹35,000",
      duration: "Flexible Plans",
      iconName: "Smile"
    },
    {
      id: "pediatric-dentistry",
      title: "Pediatric Dentistry",
      description: "Fun, gentle, and welcoming dental care tailored specifically for infants, children, and teenagers.",
      details: "Our clinic features child-friendly rooms, sealants to prevent cavities, fluoride treatments, and patient dentists who turn visits into games to teach good habits.",
      price: "From ₹1,200",
      duration: "30-45 mins",
      iconName: "Baby"
    },
    {
      id: "cosmetic-dentistry",
      title: "Cosmetic Dentistry",
      description: "Smile makeovers using composite bonding and premium porcelain veneers for a flawless, customized smile.",
      details: "Veneers are ultra-thin porcelain shells custom-made and bonded to the front of your teeth, hiding cracks, gaps, chips, and discoloration.",
      price: "From ₹12,000/tooth",
      duration: "2-3 Sessions",
      iconName: "Heart"
    }
  ],

  doctors: [
    {
      id: "dr-vance",
      name: "Dr. Marcus Vance",
      title: "Lead Implantologist & Cosmetic Dentist",
      qualification: "DDS, MS - Columbia University College of Dental Medicine",
      experience: "15+ Years",
      specialty: "Dental Implants & Smile Makeovers",
      timings: "Mon - Wed: 9:00 AM - 5:00 PM",
      image: "/smilecare/images/doctor-2.png",
      bio: "Dr. Vance is a recognized expert in implant surgery and advanced cosmetic restorations. He has placed over 3,000 implants and is passionate about combining clinical excellence with digital design tools for perfect smile makeovers."
    },
    {
      id: "dr-jenkins",
      name: "Dr. Sarah Jenkins",
      title: "Pediatric Specialist & General Dentist",
      qualification: "DMD - Harvard School of Dental Medicine",
      experience: "10+ Years",
      specialty: "Pediatric Dentistry & Preventive Care",
      timings: "Thu - Sat: 9:00 AM - 4:00 PM",
      image: "/smilecare/images/doctor-1.png",
      bio: "Dr. Jenkins makes dental visits fun and anxiety-free for children and adults alike. Specializing in behavior management and interceptive orthodontics, she focuses on building positive healthcare memories."
    }
  ],

  testimonials: [
    {
      name: "Arthur Pendelton",
      treatment: "Dental Implants",
      rating: 5,
      text: "Dr. Vance and his team changed my life. I was self-conscious about my smile for years after losing a front tooth. The implant process was completely painless, and the final result looks so natural that my own family can't tell which tooth was replaced. Truly world-class!",
      date: "May 12, 2026"
    },
    {
      name: "Rebecca Harrison",
      treatment: "Teeth Whitening",
      rating: 5,
      text: "The clinic looks like a luxury hotel! From the warm greeting at the reception desk to the heated dental chairs and television on the ceiling, they make you feel incredibly pampered. The laser teeth whitening was fast, and my teeth look so bright. Highly recommend!",
      date: "April 28, 2026"
    },
    {
      name: "Liam O'Connor",
      treatment: "Pediatric Care (Family)",
      rating: 5,
      text: "My 6-year-old daughter used to throw tantrums before dentist appointments. Dr. Sarah Jenkins is a magician! She explained every tool in a fun, non-scary way and had my daughter laughing throughout the entire cleaning. I'll never take my kids anywhere else.",
      date: "June 2, 2026"
    },
    {
      name: "Samantha Reed",
      treatment: "Root Canal Treatment",
      rating: 5,
      text: "I was terrified of getting a root canal, but the experience here was completely different. They used advanced digital rotary tools and I felt absolutely nothing. The staff was incredibly caring!",
      date: "July 10, 2026"
    },
    {
      name: "Dr. Aris Thorne",
      treatment: "Braces & Aligners",
      rating: 5,
      text: "As a fellow medical professional, I am extremely picky about hygiene and tech. SmileCare exceeds all standards. My clear aligner treatment has been incredibly smooth and invisible.",
      date: "August 2, 2026"
    }
  ],

  faqs: [
    {
      question: "Do you accept dental insurance?",
      answer: "Yes! We accept most major dental PPO insurance plans. Our office team will gladly verify your coverage, submit insurance claims on your behalf, and optimize your benefits so you pay the minimum out-of-pocket cost. Contact us for a complete list of participating networks."
    },
    {
      question: "What should I do in a dental emergency?",
      answer: "Call us immediately! We reserve daily emergency slots for urgent cases (such as severe toothaches, chipped or knocked-out teeth, jaw injuries, or broken crowns). If you call outside working hours, our emergency helpline will direct you to the dentist on call for immediate attention."
    },
    {
      question: "How long do professional teeth whitening results last?",
      answer: "Typically, professional whitening results last between 1 to 3 years. This depends heavily on your lifestyle habits. Avoiding staining elements like coffee, tea, red wine, and smoking, and maintaining consistent brushing and scaling appointments will maximize your brilliant results."
    },
    {
      question: "Are dental implants safe, and how long do they last?",
      answer: "Dental implants are exceptionally safe and have a success rate of over 98%. Because the titanium post fuses with your jawbone through a process called osseointegration, they act as permanent roots. With proper brushing, flossing, and professional cleanings, they can easily last a lifetime."
    },
    {
      question: "How often should I visit the dentist for a checkup?",
      answer: "For most children and adults, we recommend a routine checkup and professional cleaning every 6 months. Patients with active gum disease, high cavity susceptibility, or specific medical conditions may need to visit more frequently (every 3 to 4 months) as advised by the dentist."
    }
  ]
};
