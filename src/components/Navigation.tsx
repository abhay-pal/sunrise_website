import { useEffect, useRef, useState } from 'react';
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
];

const CONTACT_PHONE = '+91 97179 00209';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isWhatsAppFormOpen, setIsWhatsAppFormOpen] = useState(false);
  const servicesMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
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

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'glass border-b border-white/5' : 'bg-transparent'}`}
      >
        <div className="container-padding">
          <nav className="flex items-center justify-between h-20 md:h-24">
            <a href="/" className="flex items-center gap-2 group">
              <img
                src="/images/logo-transparent.png"
                alt="Sunrise Heavy Machine Services"
                className="h-14 md:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-lg"
                style={{ maxWidth: '180px' }}
              />
            </a>

            <div className="hidden md:flex items-center gap-8">
              {primaryLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-white/70 hover:text-white text-sm font-medium transition-colors duration-300 relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-orange-500 group-hover:w-full transition-all duration-300" />
                </a>
              ))}

              <div
                ref={servicesMenuRef}
                className="relative"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <button
                  onClick={() => setIsServicesOpen((prev) => !prev)}
                  className="text-white/70 hover:text-white text-sm font-medium transition-colors duration-300 inline-flex items-center gap-1"
                  aria-haspopup="menu"
                  aria-expanded={isServicesOpen}
                >
                  Services
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {isServicesOpen && (
                    <motion.div
                      role="menu"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full right-0 mt-3 w-80 rounded-xl glass border border-white/10 shadow-2xl p-2"
                    >
                      {serviceLinks.map((service) => (
                        <a
                          key={service.href}
                          href={service.href}
                          role="menuitem"
                          className="block px-4 py-2.5 rounded-lg text-sm text-white/80 hover:text-white hover:bg-amber-500/10 transition-colors"
                          onClick={() => setIsServicesOpen(false)}
                        >
                          {service.label}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={() => setIsWhatsAppFormOpen(true)}
                className="w-10 h-10 rounded-full bg-green-500 hover:bg-green-400 flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
                title="Chat on WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </button>
              <a href={`tel:${CONTACT_PHONE.replace(/\s/g, '')}`} className="flex items-center gap-2 text-white/70 hover:text-white transition-colors px-3 py-2">
                <Phone className="w-4 h-4" />
                <span className="text-sm">{CONTACT_PHONE}</span>
              </a>
              <a href="/contact-us">
                <Button className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-white font-medium px-6">
                  Request a Quote
                </Button>
              </a>
            </div>

            <button onClick={() => setIsMobileMenuOpen((prev) => !prev)} className="md:hidden p-2 text-white/70 hover:text-white transition-colors">
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </nav>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-40 md:hidden">
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="absolute right-0 top-0 h-full w-72 glass border-l border-white/10 p-6 pt-28"
            >
              <div className="flex flex-col gap-3">
                {primaryLinks.map((item) => (
                  <a key={item.href} href={item.href} className="text-left text-white/80 hover:text-white text-lg font-medium py-2 border-b border-white/10" onClick={() => setIsMobileMenuOpen(false)}>
                    {item.label}
                  </a>
                ))}

                <div className="border-b border-white/10 pb-2">
                  <button
                    onClick={() => setIsMobileServicesOpen((prev) => !prev)}
                    className="w-full text-left text-white/80 hover:text-white text-lg font-medium py-2 inline-flex items-center justify-between"
                    aria-haspopup="menu"
                    aria-expanded={isMobileServicesOpen}
                  >
                    Services
                    <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {isMobileServicesOpen && (
                      <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden pl-2">
                        {serviceLinks.map((service) => (
                          <a key={service.href} href={service.href} className="block text-white/70 hover:text-amber-400 text-sm py-2" onClick={() => setIsMobileMenuOpen(false)}>
                            {service.label}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <button onClick={() => { setIsWhatsAppFormOpen(true); setIsMobileMenuOpen(false); }} className="flex items-center gap-2 text-green-400 hover:text-green-300 text-lg font-medium py-2 border-b border-white/10">
                  <MessageCircle className="w-5 h-5" /> Chat on WhatsApp
                </button>
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
        className="fixed bottom-24 right-6 z-40 w-14 h-14 rounded-full bg-green-500 hover:bg-green-400 text-white shadow-lg flex items-center justify-center"
        title="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
      </motion.button>

      <WhatsAppPreForm isOpen={isWhatsAppFormOpen} onClose={() => setIsWhatsAppFormOpen(false)} />
    </>
  );
}
