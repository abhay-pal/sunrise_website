import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { CheckCircle, Droplets, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const features = [
  'Hydraulic cylinder repairs & resealing',
  'Pump & motor overhauls',
  'Valve servicing & calibration',
  'Pressure testing & diagnostics',
  'Hydraulic hose assembly & fitting',
  'Oil filtration & system flushing',
];

export function HydraulicExcellence() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section ref={ref} className="relative section-padding overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-industrial-dark" />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-amber-900/10" />

      <div className="relative z-10 container-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Content Side */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 mb-6">
                <Droplets className="w-4 h-4 text-blue-400" />
                <span className="text-blue-400 text-sm font-medium">
                  Specialized Service
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6 leading-tight">
                Hydraulic Excellence.
              </h2>

              <p className="text-white/70 text-lg leading-relaxed mb-6">
                Leak-free performance starts with the right seals, clean oil,
                and precise pressure. We repair cylinders, pumps, valves, and
                lifting systems—fast.
              </p>

              <p className="text-white/60 leading-relaxed mb-8">
                Our hydraulic specialists use advanced diagnostic equipment to
                identify issues quickly and restore your systems to peak
                performance. From minor leaks to complete overhauls, we handle
                it all.
              </p>

              {/* Features Grid */}
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span className="text-white/70 text-sm">{feature}</span>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <Button
                onClick={() => {
                  document
                    .querySelector('#contact')
                    ?.scrollIntoView({ behavior: 'smooth' });
                }}
                size="lg"
                className="group bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-semibold px-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Talk to a Hydraulic Specialist
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>

            {/* Image Side */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src="/images/hydraulic-excellence.jpg"
                  alt="Hydraulic system repair"
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-industrial-dark/60 via-transparent to-transparent" />
              </div>

              {/* Floating Stats Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="absolute -bottom-6 -left-6 lg:left-8 glass border border-blue-500/20 rounded-xl p-6 shadow-xl"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center">
                    <Droplets className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">99.9%</div>
                    <div className="text-white/60 text-sm">Leak-free Rate</div>
                  </div>
                </div>
              </motion.div>

              {/* Decorative */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-blue-500/30 rounded-xl -z-10" />
              <div className="absolute top-1/2 -right-8 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
