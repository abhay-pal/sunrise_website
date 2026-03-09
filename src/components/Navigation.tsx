import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, MessageCircle, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { WhatsAppPreForm } from './WhatsAppPreForm';


const primaryLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about-us' },
  { label: 'Industries', href: '/industries-we-serve' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact-us' },
];

const serviceLinks = [
  { label: 'Reach Stacker Maintenance', href: '/reach-stacker-maintenance' },
  { label: 'Forklift Repair', href: '/forklift-repair' },
  { label: 'Hydra Crane Service', href: '/hydra-crane-service' },
  { label: 'Hydraulic System Repair', href: '/hydraulic-system-repair' },
  { label: 'Spare Parts', href: '/spare-parts' },
  { label: 'AMC Services', href: '/amc-services' },
  { label: 'Breakdown Support', href: '/breakdown-support' },
  { label: 'Preventive Maintenance', href: '/preventive-maintenance' },
  { label: 'Industrial Equipment Maintenance', href: '/industrial-equipment-maintenance' },
  { label: 'Container Handling Equipment', href: '/container-handling-equipment' },

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Clients', href: '#clients' },
  { label: 'Contact', href: '#contact' },

];

const serviceLinks = [
  { label: 'Reach Stacker Maintenance', href: '/reach-stacker-maintenance' },
  { label: 'Forklift Repair', href: '/forklift-repair' },
  { label: 'Hydra Crane Service', href: '/hydra-crane-service' },
  { label: 'Hydraulic System Repair', href: '/hydraulic-system-repair' },
  { label: 'Spare Parts', href: '/spare-parts' },
];

const CONTACT_PHONE = '+91 97179 00209';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isWhatsAppFormOpen, setIsWhatsAppFormOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const servicesMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (servicesMenuRef.current && !servicesMenuRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsServicesOpen(false);
        setIsMobileServicesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };


  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? 'glass border-b border-white/5' : 'bg-transparent'
        }`}
      >
        <div className="container-padding">
          <nav className="flex items-center justify-between h-20 md:h-24">
            <a href="/" className="flex items-center gap-2 group">
              <div className="relative h-14 md:h-16 w-auto">
                <img
                  src="/images/logo-transparent.png"
                  alt="Sunrise Heavy Machine Services"
                  className="h-full w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-lg"
                  style={{ maxWidth: '180px' }}
                />
              </div>
            </a>

            <div className="hidden md:flex items-center gap-8">

              <a href="/" className="text-white/70 hover:text-white text-sm font-medium transition-colors duration-300 relative group">
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-orange-500 group-hover:w-full transition-all duration-300" />
              </a>

              <div
                ref={servicesMenuRef}
                className="relative"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <button
                  onClick={() => setIsServicesOpen((prev) => !prev)}
                  aria-haspopup="menu"
                  aria-expanded={isServicesOpen}
                  className="text-white/70 hover:text-white text-sm font-medium transition-colors duration-300 relative group inline-flex items-center gap-1"
                >
                  Services
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-orange-500 group-hover:w-full transition-all duration-300" />
                </button>

                <AnimatePresence>
                  {isServicesOpen && (
                    <motion.div
                      role="menu"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 mt-3 w-72 rounded-xl glass border border-white/10 shadow-2xl p-2"
                    >
                      {serviceLinks.map((service) => (
                        <a
                          key={service.href}
                          href={service.href}
                          role="menuitem"
                          className="block px-4 py-2.5 rounded-lg text-sm text-white/80 hover:text-white hover:bg-amber-500/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/50 transition-colors"
                          onClick={() => setIsServicesOpen(false)}
                        >
                          {service.label}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {navItems.map((item) => (

                <button
                  onClick={() => setIsServicesOpen((prev) => !prev)}
                  aria-haspopup="menu"
                  aria-expanded={isServicesOpen}
                  className="text-white/70 hover:text-white text-sm font-medium transition-colors duration-300 relative group inline-flex items-center gap-1"
                >
                  Services
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-orange-500 group-hover:w-full transition-all duration-300" />
                </button>

                <AnimatePresence>
                  {isServicesOpen && (
                    <motion.div
                      role="menu"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 mt-3 w-80 rounded-xl glass border border-white/10 shadow-2xl p-2"
                    >
                      {serviceLinks.map((service) => (
                        <a
                          key={service.href}
                          href={service.href}
                          role="menuitem"
                          className="block px-4 py-2.5 rounded-lg text-sm text-white/80 hover:text-white hover:bg-amber-500/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/50 transition-colors"
                          onClick={() => setIsServicesOpen(false)}
                        >
                          {service.label}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {primaryLinks.slice(1).map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-white/70 hover:text-white text-sm font-medium transition-colors duration-300 relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-orange-500 group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </div>

            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={() => setIsWhatsAppFormOpen(true)}
                className="w-10 h-10 rounded-full bg-green-500 hover:bg-green-400 flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
                title="Chat on WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </button>
              <a
                href={`tel:${CONTACT_PHONE.replace(/\s/g, '')}`}
                className="flex items-center gap-2 text-white/70 hover:text-white transition-colors px-3 py-2"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm">{CONTACT_PHONE}</span>
              </a>
              <a href="/contact-us">
                <Button className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-white font-medium px-6 shadow-glow hover:shadow-glow-lg transition-all duration-300">
                  Request a Quote
                </Button>
              </a>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-white/70 hover:text-white transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </nav>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="absolute right-0 top-0 h-full w-72 glass border-l border-white/10 p-6 pt-28"
            >
              <div className="flex flex-col gap-4">

                <a href="/" className="text-left text-white/80 hover:text-white text-lg font-medium py-3 border-b border-white/10 transition-colors">Home</a>
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.05 }} className="border-b border-white/10 pb-2">

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 }}
                  className="border-b border-white/10 pb-2"
                >

                  <button
                    onClick={() => setIsMobileServicesOpen((prev) => !prev)}
                    aria-haspopup="menu"
                    aria-expanded={isMobileServicesOpen}
                    className="w-full text-left text-white/80 hover:text-white text-lg font-medium py-3 transition-colors inline-flex items-center justify-between"
                  >
                    Services
                    <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {isMobileServicesOpen && (

                      <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.2 }} className="overflow-hidden">
                        <div className="pl-2 pb-2 flex flex-col">
                          {serviceLinks.map((service) => (
                            <a key={service.href} href={service.href} role="menuitem" onClick={() => setIsMobileMenuOpen(false)} className="text-white/70 hover:text-amber-400 text-sm py-2 transition-colors">

                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-2 pb-2 flex flex-col">
                          {serviceLinks.map((service) => (
                            <a
                              key={service.href}
                              href={service.href}
                              role="menuitem"
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="text-white/70 hover:text-amber-400 text-sm py-2 transition-colors"
                            >

                              {service.label}
                            </a>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>


                {primaryLinks.slice(1).map((item, index) => (
                  <motion.a

                {navItems.map((item, index) => (
                  <motion.button

                    key={item.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.1 }}

                    href={item.href}

                    onClick={() => scrollToSection(item.href)}

                    className="text-left text-white/80 hover:text-white text-lg font-medium py-3 border-b border-white/10 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </motion.a>
                ))}


                {/* WhatsApp Button Mobile */}

                <motion.button
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  onClick={() => {
                    setIsWhatsAppFormOpen(true);
                    setIsMobileMenuOpen(false);
                  }}
                  className="flex items-center gap-3 text-green-400 hover:text-green-300 text-lg font-medium py-3 border-b border-white/10 transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat on WhatsApp
                </motion.button>

                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }} className="pt-4">
                  <a href="/contact-us">
                    <Button className="w-full bg-gradient-to-r from-amber-500 to-orange-600 text-white font-medium py-6">
                      Request a Quote
                    </Button>
                  </a>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="pt-4"
                >
                  <Button
                    onClick={() => scrollToSection('#contact')}
                    className="w-full bg-gradient-to-r from-amber-500 to-orange-600 text-white font-medium py-6"
                  >
                    Request a Quote
                  </Button>

                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: 'spring' }}
        onClick={() => setIsWhatsAppFormOpen(true)}
        className="fixed bottom-24 right-6 z-40 w-14 h-14 rounded-full bg-green-500 hover:bg-green-400 text-white shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 group"
        title="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
        <span className="absolute right-full mr-3 px-3 py-1 bg-white text-gray-800 text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Chat with us
        </span>
      </motion.button>

      <WhatsAppPreForm isOpen={isWhatsAppFormOpen} onClose={() => setIsWhatsAppFormOpen(false)} />
    </>
  );
}
