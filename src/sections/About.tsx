import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { CheckCircle, Users, Wrench, Shield, MessageCircle } from 'lucide-react';

const features = [
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Certified technicians with years of hands-on experience',
  },
  {
    icon: Wrench,
    title: 'Quality Repairs',
    description: 'Precision maintenance using genuine parts only',
  },
  {
    icon: Shield,
    title: 'Safety First',
    description: 'Strict adherence to industry safety standards',
  },
];

const certifications = [
  'ISO 9001:2015 Certified',
  'Factory Trained Technicians',
  'Authorized Service Partner',
  '24/7 Emergency Response',
];

const WHATSAPP_NUMBER = '919717900209';

export function About() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  const openWhatsApp = (topic: string) => {
    const message = `Hello Sunrise Heavy Machine Services, I would like to know more about ${topic}.`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section
      id="about"
      ref={ref}
      className="relative section-padding overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-industrial-dark via-industrial-gray/30 to-industrial-dark" />

      <div className="relative z-10 container-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image Side */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden group">
                <img
                  src="/images/about-workshop.jpg"
                  alt="Our workshop"
                  className="w-full h-[400px] lg:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-industrial-dark/60 via-transparent to-transparent" />
                
                {/* Logo Watermark */}
                <div className="absolute bottom-4 right-4 opacity-30">
                  <img 
                    src="/images/logo-transparent.png" 
                    alt="" 
                    className="h-20 w-auto"
                  />
                </div>
              </div>

              {/* Floating Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="absolute -bottom-6 -right-6 lg:right-8 glass border border-amber-500/20 rounded-xl p-6 shadow-xl"
              >
                <div className="text-4xl font-bold text-gradient mb-1">7+</div>
                <div className="text-white/70 text-sm">Years of Excellence</div>
              </motion.div>

              {/* Decorative */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-amber-500/30 rounded-xl -z-10" />
            </motion.div>

            {/* Content Side */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              {/* Section Label */}
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-8 h-px bg-amber-500" />
                <span className="text-amber-400 text-sm font-medium uppercase tracking-wider">
                  About Us
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6 leading-tight">
                Built for Heavy Work.
              </h2>

              <p className="text-white/70 text-lg leading-relaxed mb-6">
                Since 2017, Sunrise Heavy Machine Services has kept ports,
                warehouses, and infrastructure projects moving—with preventive
                maintenance, rapid breakdown response, and genuine spare parts.
              </p>

              <p className="text-white/60 leading-relaxed mb-8">
                Our team of certified technicians brings decades of combined
                experience in heavy equipment maintenance. We understand that
                downtime costs money, which is why we deliver fast, reliable
                service that keeps your operations running smoothly.
              </p>

              {/* Features Grid */}
              <div className="grid sm:grid-cols-3 gap-6 mb-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="group cursor-pointer"
                    onClick={() => openWhatsApp(feature.title)}
                  >
                    <div className="w-12 h-12 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-3 group-hover:bg-amber-500/20 transition-colors">
                      <feature.icon className="w-6 h-6 text-amber-500" />
                    </div>
                    <h3 className="text-white font-semibold mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-white/50 text-sm">{feature.description}</p>
                  </motion.div>
                ))}
              </div>

              {/* Certifications */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="flex flex-wrap gap-3 mb-8"
              >
                {certifications.map((cert) => (
                  <div
                    key={cert}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:border-amber-500/30 transition-colors cursor-pointer"
                    onClick={() => openWhatsApp(cert)}
                  >
                    <CheckCircle className="w-4 h-4 text-amber-500" />
                    <span className="text-white/70 text-sm">{cert}</span>
                  </div>
                ))}
              </motion.div>

              {/* WhatsApp CTA */}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.8 }}
                onClick={() => openWhatsApp('your services')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-green-500 hover:bg-green-400 text-white font-medium transition-all duration-300 hover:scale-105"
              >
                <MessageCircle className="w-5 h-5" />
                Know More on WhatsApp
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
