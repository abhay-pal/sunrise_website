import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ClipboardCheck, Clock, Shield, FileText, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const features = [
  {
    icon: ClipboardCheck,
    title: 'Daily Inspections',
    description: 'Comprehensive pre-operation checks and documentation',
  },
  {
    icon: Clock,
    title: 'Rapid Response',
    description: '24/7 breakdown support with quick turnaround',
  },
  {
    icon: Shield,
    title: 'Safety Compliance',
    description: 'Adherence to all industry safety standards',
  },
  {
    icon: FileText,
    title: 'Clear Reporting',
    description: 'Detailed service reports and maintenance logs',
  },
];

export function Operations() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section ref={ref} className="relative section-padding overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-industrial-dark" />
      <div className="absolute inset-0">
        <img
          src="/images/operations-bg.jpg"
          alt="Operations background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-industrial-dark via-industrial-dark/95 to-industrial-dark/80" />
      </div>

      <div className="relative z-10 container-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image Side */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="relative order-2 lg:order-1"
            >
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src="/images/team.jpg"
                  alt="Our operations team"
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-industrial-dark/60 via-transparent to-transparent" />
              </div>

              {/* Floating Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="absolute -bottom-6 -right-6 lg:right-8 glass border border-amber-500/20 rounded-xl p-6 shadow-xl max-w-xs"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-amber-500" />
                  </div>
                  <div>
                    <div className="text-white font-semibold mb-1">
                      Certified Team
                    </div>
                    <div className="text-white/60 text-sm">
                      All technicians are factory trained and certified
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Decorative */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-amber-500/30 rounded-xl -z-10" />
            </motion.div>

            {/* Content Side */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="order-1 lg:order-2"
            >
              {/* Section Label */}
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-8 h-px bg-amber-500" />
                <span className="text-amber-400 text-sm font-medium uppercase tracking-wider">
                  Operations
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6 leading-tight">
                Operations + Maintenance.
              </h2>

              <p className="text-white/70 text-lg leading-relaxed mb-6">
                We don&apos;t just fix machines—we run them safely, document every
                check, and keep your site compliant. On-site support, rapid
                response, and clear reporting.
              </p>

              <p className="text-white/60 leading-relaxed mb-8">
                Our comprehensive approach ensures your equipment operates at
                peak efficiency while meeting all regulatory requirements. From
                daily inspections to major overhauls, we&apos;ve got you covered.
              </p>

              {/* Features Grid */}
              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-amber-500/20 transition-colors">
                        <feature.icon className="w-5 h-5 text-amber-500" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold mb-1">
                          {feature.title}
                        </h3>
                        <p className="text-white/50 text-sm">
                          {feature.description}
                        </p>
                      </div>
                    </div>
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
                className="group bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-white font-semibold px-8 shadow-glow hover:shadow-glow-lg transition-all duration-300"
              >
                Start a Maintenance Plan
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
