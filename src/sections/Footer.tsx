import { motion } from 'framer-motion';
import { Facebook, Linkedin, Twitter, Instagram, ArrowUp, MessageCircle, Mail, Phone, MapPin } from 'lucide-react';
import { useState } from 'react';
import { WhatsAppPreForm } from '@/components/WhatsAppPreForm';

const quickLinks = [
  { label: 'Services', href: '#services' },
  { label: 'About Us', href: '#about' },
  { label: 'Clients', href: '#clients' },
  { label: 'Contact', href: '#contact' },
];

const services = [
  { label: 'Reach Stackers', href: '#services' },
  { label: 'Forklifts', href: '#services' },
  { label: 'Hydra Cranes', href: '#services' },
  { label: 'Hydraulic Systems', href: '#services' },
];

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
];

// Contact Information
const CONTACT_EMAIL = 'Sunrise7480@rediffmail.com';
const CONTACT_PHONE = '+91 97179 00209';

export function Footer() {
  const [isWhatsAppFormOpen, setIsWhatsAppFormOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-industrial-dark border-t border-white/5">
      {/* Main Footer */}
      <div className="container-padding py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand */}
            <div className="lg:col-span-1">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToTop();
                }}
                className="flex items-center gap-3 mb-6"
              >
                <img 
                  src="/images/logo-transparent.png" 
                  alt="Sunrise Heavy Machine Services" 
                  className="h-16 w-auto object-contain"
                />
              </a>
              <p className="text-white/50 text-sm leading-relaxed mb-6">
                Complete heavy equipment solutions under one roof. Keeping your
                operations running since 2017.
              </p>
              
              {/* Quick Contact */}
              <div className="space-y-2 mb-6">
                <a 
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="flex items-center gap-2 text-white/50 hover:text-amber-400 text-sm transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  {CONTACT_EMAIL}
                </a>
                <a 
                  href={`tel:${CONTACT_PHONE.replace(/\s/g, '')}`}
                  className="flex items-center gap-2 text-white/50 hover:text-amber-400 text-sm transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  {CONTACT_PHONE}
                </a>
                <div className="flex items-center gap-2 text-white/50 text-sm">
                  <MapPin className="w-4 h-4" />
                  D-417, SECTOR -2 PATWARI VILLAGE, GREATER NOIDA-201308
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-amber-500 hover:border-amber-500/30 transition-all duration-300"
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-white/50 hover:text-amber-400 text-sm transition-colors"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-white font-semibold mb-6">Our Services</h3>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.label}>
                    <button
                      onClick={() => scrollToSection(service.href)}
                      className="text-white/50 hover:text-amber-400 text-sm transition-colors"
                    >
                      {service.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Working Hours & WhatsApp */}
            <div>
              <h3 className="text-white font-semibold mb-6">Working Hours</h3>
              <div className="space-y-2 text-sm mb-6">
                <div className="flex justify-between">
                  <span className="text-white/50">Mon - Fri</span>
                  <span className="text-white">8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/50">Saturday</span>
                  <span className="text-white">9:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/50">Sunday</span>
                  <span className="text-amber-400">24/7 Emergency</span>
                </div>
              </div>
              
              {/* WhatsApp CTA */}
              <button
                onClick={() => setIsWhatsAppFormOpen(true)}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-green-500 hover:bg-green-400 text-white font-medium transition-all duration-300 hover:scale-105"
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="container-padding py-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-sm text-center md:text-left">
              &copy; {new Date().getFullYear()} Sunrise Heavy Machine Services.
              All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <button className="text-white/40 hover:text-white text-sm transition-colors">
                Privacy Policy
              </button>
              <button className="text-white/40 hover:text-white text-sm transition-colors">
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-6 w-12 h-12 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-glow hover:shadow-glow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 z-40"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>

      {/* WhatsApp Pre-Form Modal */}
      <WhatsAppPreForm
        isOpen={isWhatsAppFormOpen}
        onClose={() => setIsWhatsAppFormOpen(false)}
      />
    </footer>
  );
}
