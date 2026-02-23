import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, MessageCircle, Wrench, Clock, Shield, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ServiceDetail {
  id: string;
  title: string;
  description: string;
  image: string;
  vectorImage: string;
  fullDescription: string;
  features: string[];
  process: { step: number; title: string; description: string }[];
  benefits: string[];
}

interface ServiceDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: ServiceDetail | null;
  onWhatsAppClick: (serviceName: string) => void;
}

export function ServiceDetailModal({ isOpen, onClose, service, onWhatsAppClick }: ServiceDetailModalProps) {
  if (!service) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-4 md:inset-8 lg:inset-16 z-50 overflow-hidden"
          >
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-white/10 rounded-2xl shadow-2xl h-full overflow-y-auto">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="fixed top-8 right-8 z-10 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Hero Image */}
              <div className="relative h-64 md:h-80">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
                
                {/* Vector Image Overlay */}
                <div className="absolute bottom-4 right-4 w-32 h-32 md:w-48 md:h-48 opacity-80">
                  <img
                    src={service.vectorImage}
                    alt=""
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Title */}
                <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10">
                  <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-2">
                    {service.title}
                  </h2>
                  <p className="text-white/70 text-lg max-w-xl">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-10">
                {/* Full Description */}
                <div className="mb-10">
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <Wrench className="w-5 h-5 text-amber-500" />
                    About This Service
                  </h3>
                  <p className="text-white/70 leading-relaxed text-lg">
                    {service.fullDescription}
                  </p>
                </div>

                {/* Features Grid */}
                <div className="mb-10">
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    Key Features
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {service.features.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10"
                      >
                        <CheckCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                        <span className="text-white/80">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Process Steps */}
                <div className="mb-10">
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-blue-500" />
                    Our Process
                  </h3>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {service.process.map((step, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="relative p-5 rounded-xl bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/20"
                      >
                        <div className="text-4xl font-bold text-amber-500/30 absolute top-2 right-2">
                          {step.step}
                        </div>
                        <h4 className="text-white font-semibold mb-2">{step.title}</h4>
                        <p className="text-white/60 text-sm">{step.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Benefits */}
                <div className="mb-10">
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <Shield className="w-5 h-5 text-purple-500" />
                    Benefits
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {service.benefits.map((benefit, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/70 text-sm"
                      >
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    onClick={() => onWhatsAppClick(service.title)}
                    size="lg"
                    className="flex-1 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-white font-semibold py-6"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Inquire on WhatsApp
                  </Button>
                  <Button
                    onClick={() => {
                      onClose();
                      document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    variant="outline"
                    size="lg"
                    className="flex-1 border-amber-500/50 text-amber-400 hover:bg-amber-500/10 py-6"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Request a Call
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
