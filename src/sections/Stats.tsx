import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Clock, Wrench, Package, Users, MessageCircle } from 'lucide-react';

const stats = [
  {
    icon: Clock,
    value: 7,
    suffix: '+',
    label: 'Years in Operation',
    description: 'Serving industries since 2017',
  },
  {
    icon: Wrench,
    value: 24,
    suffix: '/7',
    label: 'Breakdown Response',
    description: 'Round-the-clock emergency support',
  },
  {
    icon: Package,
    value: 100,
    suffix: '%',
    label: 'Genuine Parts Policy',
    description: 'Only OEM certified components',
  },
  {
    icon: Users,
    value: 500,
    suffix: '+',
    label: 'Clients Served',
    description: 'Trusted by industry leaders',
  },
];

function AnimatedCounter({
  value,
  suffix,
  isInView,
}: {
  value: number;
  suffix: string;
  isInView: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(value * easeOut));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

const WHATSAPP_NUMBER = '919717900209';

export function Stats() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const openWhatsApp = () => {
    const message = 'Hello Sunrise Heavy Machine Services, I need emergency breakdown support.';
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section ref={ref} className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-orange-600" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-50" />

      <div className="relative z-10 container-padding">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Precision in Every Repair.
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              We follow strict maintenance protocols, use calibrated tools, and
              document every service—so your equipment meets safety standards
              and performs consistently.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-colors duration-300">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-lg bg-white/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Value */}
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                    <AnimatedCounter
                      value={stat.value}
                      suffix={stat.suffix}
                      isInView={isInView}
                    />
                  </div>

                  {/* Label */}
                  <div className="text-white font-semibold mb-1">{stat.label}</div>
                  <div className="text-white/70 text-sm">{stat.description}</div>

                  {/* Decorative Corner */}
                  <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden rounded-tr-xl">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rotate-45 transform origin-top-right" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Emergency CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-12 text-center"
          >
            <button
              onClick={openWhatsApp}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-amber-600 font-semibold hover:bg-white/90 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <MessageCircle className="w-6 h-6" />
              Need Emergency Support? Chat on WhatsApp
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
