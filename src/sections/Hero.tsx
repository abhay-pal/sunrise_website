import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, MessageCircle, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { WhatsAppPreForm } from '@/components/WhatsAppPreForm';

const CONTACT_PHONE = '+91 97179 00209';

// Animated particles component
function FloatingParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-amber-500/20 rounded-full"
          initial={{ 
            x: `${Math.random() * 100}%`,
            y: '100%',
            opacity: 0 
          }}
          animate={{ 
            y: '-10%',
            opacity: [0, 0.6, 0],
          }}
          transition={{ 
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: 'linear'
          }}
        />
      ))}
    </div>
  );
}

// Animated gear/cog decoration
function RotatingGear({ className, size = 80 }: { className?: string, size?: number }) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      animate={{ rotate: 360 }}
      transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
    >
      <path
        d="M50 10 L55 10 L57 20 L60 21 L67 13 L71 16 L66 25 L68 28 L79 26 L80 31 L70 36 L71 40 L82 43 L81 48 L70 49 L69 53 L78 60 L75 64 L65 59 L62 62 L67 73 L62 75 L55 66 L50 67 L45 66 L38 75 L33 73 L38 62 L35 59 L25 64 L22 60 L31 53 L30 49 L19 48 L18 43 L29 40 L30 36 L20 31 L21 26 L32 28 L34 25 L29 16 L33 13 L40 21 L43 20 L45 10 L50 10 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="text-amber-500/20"
      />
      <circle cx="50" cy="45" r="15" fill="none" stroke="currentColor" strokeWidth="2" className="text-amber-500/20" />
    </motion.svg>
  );
}

export function Hero() {
  const [isWhatsAppFormOpen, setIsWhatsAppFormOpen] = useState(false);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-bg.jpg"
          alt="Heavy machinery at port"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-industrial-dark/95 via-industrial-dark/80 to-industrial-dark/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-industrial-dark via-transparent to-industrial-dark/30" />
        <div className="absolute inset-0 gradient-radial" />
      </div>

      {/* Floating Particles */}
      <FloatingParticles />

      {/* Decorative Gears */}
      <div className="absolute top-20 left-10 opacity-30 hidden lg:block">
        <RotatingGear size={120} />
      </div>
      <div className="absolute bottom-40 right-10 opacity-20 hidden lg:block">
        <RotatingGear size={80} className="text-orange-500" />
      </div>
      <div className="absolute top-1/3 right-20 opacity-15 hidden lg:block">
        <RotatingGear size={60} className="text-blue-500" />
      </div>

      {/* Animated Grid Lines */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(245, 158, 11, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(245, 158, 11, 0.3) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 container-padding w-full">
        <div className="max-w-5xl mx-auto text-center pt-20">
          {/* Logo Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, type: 'spring' }}
            className="mb-8"
          >
            <div className="relative inline-block">
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-full blur-xl"
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <img 
                src="/images/logo-transparent.png" 
                alt="Sunrise Heavy Machine Services" 
                className="relative h-24 md:h-32 lg:h-40 w-auto mx-auto object-contain drop-shadow-2xl"
              />
            </div>
          </motion.div>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-amber-500/30 mb-6"
          >
            <motion.span 
              className="w-2 h-2 rounded-full bg-amber-500"
              animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            <span className="text-amber-400 text-sm font-medium">
              Heavy Equipment Services Since 2017
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-6"
          >
            Powering Industries.
            <br />
            <span className="text-gradient">Maintaining Trust.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Complete maintenance, repair, and spare parts solutions for reach
            stackers, forklifts, hydra cranes, and hydraulic systems.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              onClick={() => scrollToSection('#services')}
              size="lg"
              className="group bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-white font-semibold px-8 py-6 text-lg shadow-glow hover:shadow-glow-lg transition-all duration-300"
            >
              Explore Services
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              onClick={() => setIsWhatsAppFormOpen(true)}
              size="lg"
              className="group bg-green-500 hover:bg-green-400 text-white font-semibold px-8 py-6 text-lg transition-all duration-300 hover:scale-105"
            >
              <MessageCircle className="mr-2 w-5 h-5" />
              Chat on WhatsApp
            </Button>
          </motion.div>

          {/* Quick Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.1 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-6"
          >
            <a 
              href={`tel:${CONTACT_PHONE.replace(/\s/g, '')}`}
              className="flex items-center gap-2 text-white/60 hover:text-white transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm">{CONTACT_PHONE}</span>
            </a>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.3 }}
            className="mt-12 grid grid-cols-3 gap-8 max-w-xl mx-auto"
          >
            {[
              { value: '7+', label: 'Years Experience' },
              { value: '24/7', label: 'Support' },
              { value: '100%', label: 'Genuine Parts' },
            ].map((stat, index) => (
              <motion.div 
                key={index} 
                className="text-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-2xl md:text-3xl font-bold text-gradient mb-1">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-white/50">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <button
          onClick={() => scrollToSection('#about')}
          className="flex flex-col items-center gap-2 text-white/40 hover:text-white/70 transition-colors"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </button>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl" />

      {/* WhatsApp Pre-Form Modal */}
      <WhatsAppPreForm
        isOpen={isWhatsAppFormOpen}
        onClose={() => setIsWhatsAppFormOpen(false)}
      />
    </section>
  );
}
