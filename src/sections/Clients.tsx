import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Quote, Star } from 'lucide-react';

const clients = [
  { id: 'til', name: 'TIL', fullName: 'Tractor India Limited' },
  { id: 'kiftpl', name: 'KIFTPL', fullName: 'Kashipur Infrastructure Pvt. Ltd.' },
  { id: 'hyva', name: 'HYVA', fullName: 'Hydraulic Systems' },
  { id: 'gateway', name: 'Gateway', fullName: 'Gateway Distriparks' },
];

const testimonials = [
  {
    id: '1',
    content:
      'Sunrise keeps our reach stackers running double shifts without surprise downtime. Their preventive maintenance approach has saved us countless hours and significantly reduced our operating costs.',
    name: 'Site Manager',
    role: 'Port Operations',
    company: 'Major Port Authority',
    initials: 'SM',
  },
  {
    id: '2',
    content:
      'The hydraulic repair expertise at Sunrise is unmatched. They diagnosed and fixed a persistent leak issue that two other service providers couldn\'t solve. Highly recommended!',
    name: 'Operations Director',
    role: 'Logistics',
    company: 'KIFTPL',
    initials: 'OD',
  },
  {
    id: '3',
    content:
      'Their 24/7 breakdown response has been a game-changer for our operations. When a forklift went down at 2 AM, they had a technician on-site within the hour.',
    name: 'Warehouse Manager',
    role: 'Supply Chain',
    company: 'Gateway Distriparks',
    initials: 'WM',
  },
];

export function Clients() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section
      id="clients"
      ref={ref}
      className="relative section-padding overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-industrial-dark" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-500/5 to-transparent" />

      <div className="relative z-10 container-padding">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-8 h-px bg-amber-500" />
              <span className="text-amber-400 text-sm font-medium uppercase tracking-wider">
                Trusted Partners
              </span>
              <span className="w-8 h-px bg-amber-500" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6">
              Trusted on site.
            </h2>
            <p className="text-white/60 text-lg">
              We work with ports, infrastructure teams, and logistics operators
              who demand reliability.
            </p>
          </motion.div>

          {/* Client Logos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
          >
            {clients.map((client, index) => (
              <motion.div
                key={client.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="group"
              >
                <div className="relative p-6 rounded-xl bg-white/5 border border-white/10 hover:border-amber-500/30 hover:bg-white/10 transition-all duration-300 text-center">
                  <div className="text-2xl md:text-3xl font-display font-bold text-white/40 group-hover:text-amber-500 transition-colors mb-2">
                    {client.name}
                  </div>
                  <div className="text-white/40 text-xs group-hover:text-white/60 transition-colors">
                    {client.fullName}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Testimonials */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h3 className="text-2xl font-display font-semibold text-white text-center mb-10">
              What Our Clients Say
            </h3>

            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="group"
                >
                  <div className="relative h-full p-6 rounded-xl bg-card border border-white/5 hover:border-amber-500/20 transition-all duration-300">
                    {/* Quote Icon */}
                    <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center">
                      <Quote className="w-5 h-5 text-white" />
                    </div>

                    {/* Stars */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-amber-500 text-amber-500"
                        />
                      ))}
                    </div>

                    {/* Content */}
                    <p className="text-white/70 text-sm leading-relaxed mb-6">
                      &ldquo;{testimonial.content}&rdquo;
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center">
                        <span className="text-white text-sm font-semibold">
                          {testimonial.initials}
                        </span>
                      </div>
                      <div>
                        <div className="text-white font-medium text-sm">
                          {testimonial.name}
                        </div>
                        <div className="text-white/50 text-xs">
                          {testimonial.role}, {testimonial.company}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
