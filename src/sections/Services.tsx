import { motion, AnimatePresence } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ArrowRight, Container, Forklift, Construction, Droplets, Package, FileCheck, MessageCircle, ChevronDown, CheckCircle, Phone, Mail } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { WhatsAppPreForm } from '@/components/WhatsAppPreForm';
import { ServiceDetailModal } from '@/components/ServiceDetailModal';

const services = [
  {
    id: 'reach-stackers',
    title: 'Reach Stackers',
    description: 'Operation, maintenance, overhauls, and spare parts for container handling equipment. Expert care for your port operations.',
    image: '/images/service-reach-stacker.jpg',
    vectorImage: '/images/vector-reach-stacker.png',
    icon: Container,
    features: ['Preventive Maintenance', 'Breakdown Repairs', 'Overhaul Services', 'Genuine Parts'],
    fullDescription: 'Our Reach Stacker services cover complete lifecycle management of your container handling equipment. From routine preventive maintenance to major overhauls, our certified technicians ensure maximum uptime and operational efficiency. We specialize in all major brands including Kalmar, Konecranes, and Sany.',
    process: [
      { step: 1, title: 'Inspection', description: 'Comprehensive diagnostic assessment of equipment condition' },
      { step: 2, title: 'Planning', description: 'Customized maintenance or repair strategy development' },
      { step: 3, title: 'Execution', description: 'Professional service with genuine OEM parts' },
      { step: 4, title: 'Testing', description: 'Full operational testing and certification' },
    ],
    benefits: ['Reduced Downtime', 'Extended Equipment Life', 'Safety Compliance', 'Cost Optimization'],
  },
  {
    id: 'forklifts',
    title: 'Forklifts',
    description: 'Engine, transmission, hydraulics, and electrical diagnostics for warehouse fleets. Keeping your logistics moving.',
    image: '/images/service-forklift.jpg',
    vectorImage: '/images/vector-forklift.png',
    icon: Forklift,
    features: ['Engine Repairs', 'Hydraulic Systems', 'Electrical Diagnostics', 'Transmission Service'],
    fullDescription: 'We provide comprehensive forklift maintenance and repair services for both diesel and electric models. Our expertise covers engine overhauls, hydraulic system repairs, electrical troubleshooting, and transmission rebuilds. We service all major brands including Toyota, Komatsu, and Linde.',
    process: [
      { step: 1, title: 'Diagnosis', description: 'Advanced diagnostic scanning and fault detection' },
      { step: 2, title: 'Quote', description: 'Transparent pricing with detailed breakdown' },
      { step: 3, title: 'Repair', description: 'Expert repair using genuine components' },
      { step: 4, title: 'Delivery', description: 'Thorough testing before handover' },
    ],
    benefits: ['Improved Performance', 'Fuel Efficiency', 'Operator Safety', 'Regulatory Compliance'],
  },
  {
    id: 'hydra-cranes',
    title: 'Hydra Cranes',
    description: 'Structural, mechanical, and hydraulic repairs with on-site support. Safe lifting operations guaranteed.',
    image: '/images/service-hydra-crane.jpg',
    vectorImage: '/images/vector-crane.png',
    icon: Construction,
    features: ['Structural Repairs', 'Hydraulic Overhaul', 'Safety Inspections', 'On-site Support'],
    fullDescription: 'Our Hydra Crane services ensure safe and reliable lifting operations. We provide structural welding repairs, complete hydraulic system overhauls, wire rope replacements, and safety certification. Our mobile service team can reach your site anywhere in Maharashtra.',
    process: [
      { step: 1, title: 'Assessment', description: 'Detailed structural and mechanical evaluation' },
      { step: 2, title: 'Engineering', description: 'Repair plan with safety calculations' },
      { step: 3, title: 'Restoration', description: 'Quality repairs with certified materials' },
      { step: 4, title: 'Certification', description: 'Load testing and safety certification' },
    ],
    benefits: ['Enhanced Safety', 'Load Capacity Assurance', 'Legal Compliance', 'Peace of Mind'],
  },
  {
    id: 'hydraulic-systems',
    title: 'Hydraulic Systems',
    description: 'Troubleshooting, seal kits, pressure testing, and calibration. Leak-free performance every time.',
    image: '/images/service-hydraulic.jpg',
    vectorImage: '/images/vector-hydraulic.png',
    icon: Droplets,
    features: ['Leak Detection', 'Seal Replacement', 'Pressure Testing', 'System Calibration'],
    fullDescription: 'Hydraulic excellence is our specialty. We offer complete hydraulic system services including pump rebuilding, cylinder honing, valve repairs, and high-pressure hose crimping. Our state-of-the-art testing equipment ensures leak-free performance and optimal pressure settings.',
    process: [
      { step: 1, title: 'Analysis', description: 'Pressure testing and flow analysis' },
      { step: 2, title: 'Disassembly', description: 'Careful component inspection' },
      { step: 3, title: 'Rebuild', description: 'Precision rebuilding with quality seals' },
      { step: 4, title: 'Validation', description: 'Performance testing under load' },
    ],
    benefits: ['Zero Leaks', 'Optimal Pressure', 'Extended Seal Life', 'Smooth Operation'],
  },
  {
    id: 'spare-parts',
    title: 'Spare Parts Supply',
    description: 'Genuine, high-availability parts to reduce lead times. OEM quality parts for all major brands.',
    image: '/images/service-spare-parts.jpg',
    vectorImage: '/images/vector-parts.png',
    icon: Package,
    features: ['Genuine OEM Parts', 'Fast Delivery', 'Inventory Management', 'Technical Support'],
    fullDescription: 'We maintain an extensive inventory of genuine spare parts for all major heavy equipment brands. Our parts sourcing network ensures quick availability and competitive pricing. From filters and seals to major components, we have you covered with authentic OEM quality.',
    process: [
      { step: 1, title: 'Enquiry', description: 'Part number identification and verification' },
      { step: 2, title: 'Sourcing', description: 'Rapid procurement from OEM suppliers' },
      { step: 3, title: 'Quality Check', description: 'Authentication and inspection' },
      { step: 4, title: 'Delivery', description: 'Prompt delivery to your location' },
    ],
    benefits: ['Genuine Parts', 'Warranty Coverage', 'Quick Availability', 'Technical Support'],
  },
  {
    id: 'amc',
    title: 'AMC & CMC Contracts',
    description: 'Planned maintenance schedules that control costs and reduce risk. Customized service agreements.',
    image: '/images/service-maintenance.jpg',
    vectorImage: '/images/vector-parts.png',
    icon: FileCheck,
    features: ['Scheduled Maintenance', 'Cost Control', 'Priority Support', 'Detailed Reporting'],
    fullDescription: 'Our Annual Maintenance Contracts (AMC) and Comprehensive Maintenance Contracts (CMC) provide peace of mind with predictable maintenance costs. We create customized schedules based on your equipment usage, ensuring optimal performance while minimizing unexpected breakdowns.',
    process: [
      { step: 1, title: 'Audit', description: 'Equipment fleet assessment' },
      { step: 2, title: 'Planning', description: 'Customized maintenance schedule' },
      { step: 3, title: 'Agreement', description: 'Transparent contract terms' },
      { step: 4, title: 'Execution', description: 'Dedicated service team assignment' },
    ],
    benefits: ['Predictable Costs', 'Priority Service', 'Regular Inspections', 'Detailed Reports'],
  },
];

// Detailed Services Categories with expanded content
const serviceCategories = [
  {
    category: 'Port Equipment',
    services: 'Reach stackers, Gantry cranes, and Empty container handlers.',
    icon: Container,
    color: 'from-blue-500 to-cyan-500',
    details: {
      description: 'Complete maintenance solutions for port and terminal equipment. We understand the critical nature of port operations and provide rapid response services to minimize downtime.',
      offerings: [
        'Reach Stacker Maintenance & Repair',
        'Gantry Crane Servicing',
        'Empty Container Handler Support',
        'Rubber Tyred Gantry (RTG) Maintenance',
        'Port Equipment Overhauls',
        'Emergency Breakdown Support',
      ],
      brands: ['Kalmar', 'Konecranes', 'Sany', 'XCMG', 'Terex'],
    },
  },
  {
    category: 'Material Handling',
    services: 'Forklift overhauls (Diesel/Electric), Hydra crane maintenance.',
    icon: Forklift,
    color: 'from-amber-500 to-orange-500',
    details: {
      description: 'Expert maintenance for all types of material handling equipment. From warehouse forklifts to heavy-duty hydra cranes, we keep your operations running smoothly.',
      offerings: [
        'Diesel Forklift Service',
        'Electric Forklift Maintenance',
        'Hydra Crane Repairs',
        'Stacker & Pallet Truck Service',
        'Warehouse Equipment Overhaul',
        'Fleet Management Support',
      ],
      brands: ['Toyota', 'Komatsu', 'Linde', 'Hyster', 'Yale'],
    },
  },
  {
    category: 'Hydraulic Systems',
    services: 'Pump rebuilding, cylinder honing, and high-pressure hose crimping.',
    icon: Droplets,
    color: 'from-blue-600 to-blue-400',
    details: {
      description: 'Specialized hydraulic system services with precision engineering. Our hydraulic experts ensure leak-free performance and optimal system efficiency.',
      offerings: [
        'Hydraulic Pump Rebuilding',
        'Cylinder Honing & Resealing',
        'High-Pressure Hose Crimping',
        'Valve Repair & Calibration',
        'Hydraulic System Flushing',
        'Pressure Testing & Diagnostics',
      ],
      brands: ['Rexroth', 'Parker', 'Eaton', 'Hydac', 'Yuken'],
    },
  },
  {
    category: 'Testing & Certification',
    services: 'Load testing, safety audits, and hydraulic pressure diagnostics.',
    icon: FileCheck,
    color: 'from-green-500 to-emerald-500',
    details: {
      description: 'Comprehensive testing and certification services to ensure your equipment meets all safety standards and regulatory requirements.',
      offerings: [
        'Load Testing & Certification',
        'Safety Audits & Inspections',
        'Hydraulic Pressure Testing',
        'NDT Testing Services',
        'Annual Equipment Certification',
        'Compliance Documentation',
      ],
      brands: ['All Major Brands Supported'],
    },
  },
];

export function Services() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [isWhatsAppFormOpen, setIsWhatsAppFormOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>('');
  const [detailModalOpen, setDetailModalOpen] = useState(false);
  const [selectedServiceDetail, setSelectedServiceDetail] = useState<typeof services[0] | null>(null);

  const openWhatsAppForm = (serviceName: string = '') => {
    setSelectedService(serviceName);
    setIsWhatsAppFormOpen(true);
  };

  const openServiceDetail = (service: typeof services[0]) => {
    setSelectedServiceDetail(service);
    setDetailModalOpen(true);
  };

  return (
    <section
      id="services"
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
                Our Services
              </span>
              <span className="w-8 h-px bg-amber-500" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6">
              Services built for uptime.
            </h2>
            <p className="text-white/60 text-lg">
              Preventive care, rapid repairs, and genuine parts—so your fleet
              stays productive and safe.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative h-full rounded-xl overflow-hidden bg-card border border-white/5 hover:border-amber-500/30 transition-all duration-500">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                    
                    {/* Vector Image */}
                    <div className="absolute bottom-2 right-2 w-20 h-20 opacity-60 group-hover:opacity-100 transition-opacity">
                      <img
                        src={service.vectorImage}
                        alt=""
                        className="w-full h-full object-contain"
                      />
                    </div>
                    
                    {/* Icon Badge */}
                    <div className="absolute top-4 left-4 w-12 h-12 rounded-lg bg-amber-500/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-display font-semibold text-white mb-3 group-hover:text-amber-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-white/60 text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.features.slice(0, 3).map((feature) => (
                        <span
                          key={feature}
                          className="px-2 py-1 text-xs rounded-full bg-white/5 text-white/50 border border-white/10"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center justify-between">
                      <button 
                        onClick={() => openServiceDetail(service)}
                        className="inline-flex items-center gap-2 text-amber-500 text-sm font-medium group/btn hover:text-amber-400"
                      >
                        Learn more
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                      <button
                        onClick={() => openWhatsAppForm(service.title)}
                        className="flex items-center gap-1 text-green-400 hover:text-green-300 text-sm font-medium transition-colors"
                      >
                        <MessageCircle className="w-4 h-4" />
                        Quick Inquiry
                      </button>
                    </div>
                  </div>

                  {/* Hover Glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-t from-amber-500/10 via-transparent to-transparent" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Detailed Services Table */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-12"
          >
            <div className="text-center mb-10">
              <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
                Service Categories
              </h3>
              <p className="text-white/60">
                Click on any category to learn more and inquire via WhatsApp
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {serviceCategories.map((category, index) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  className="group"
                >
                  <div 
                    className="relative rounded-xl bg-card border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden"
                  >
                    {/* Header - Always Visible */}
                    <div 
                      className="p-6 cursor-pointer"
                      onClick={() => setExpandedCategory(expandedCategory === category.category ? null : category.category)}
                    >
                      <div className="flex items-start gap-4">
                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                          <category.icon className="w-7 h-7 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h4 className="text-lg font-semibold text-white group-hover:text-amber-400 transition-colors">
                              {category.category}
                            </h4>
                            <motion.div
                              animate={{ rotate: expandedCategory === category.category ? 180 : 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <ChevronDown className="w-5 h-5 text-white/50" />
                            </motion.div>
                          </div>
                          <p className="text-white/60 text-sm mt-2">
                            {category.services}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Expandable Content */}
                    <AnimatePresence>
                      {expandedCategory === category.category && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 border-t border-white/10 pt-4">
                            {/* Description */}
                            <p className="text-white/70 text-sm mb-4">
                              {category.details.description}
                            </p>

                            {/* Offerings */}
                            <div className="mb-4">
                              <h5 className="text-white font-medium text-sm mb-2 flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-green-500" />
                                What We Offer
                              </h5>
                              <ul className="grid sm:grid-cols-2 gap-2">
                                {category.details.offerings.map((offering, i) => (
                                  <li key={i} className="flex items-center gap-2 text-white/60 text-sm">
                                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                                    {offering}
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Brands */}
                            <div className="mb-4">
                              <h5 className="text-white font-medium text-sm mb-2">
                                Supported Brands
                              </h5>
                              <div className="flex flex-wrap gap-2">
                                {category.details.brands.map((brand, i) => (
                                  <span
                                    key={i}
                                    className="px-3 py-1 rounded-full bg-white/5 text-white/60 text-xs border border-white/10"
                                  >
                                    {brand}
                                  </span>
                                ))}
                              </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-wrap gap-3 pt-2">
                              <button
                                onClick={() => openWhatsAppForm(category.category)}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-green-500 hover:bg-green-400 text-white text-sm font-medium transition-colors"
                              >
                                <MessageCircle className="w-4 h-4" />
                                Inquire on WhatsApp
                              </button>
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className="border-white/20 text-white hover:bg-white/10"
                              >
                                <Mail className="w-4 h-4 mr-2" />
                                Request Quote
                              </Button>
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  window.location.href = 'tel:+919717900209';
                                }}
                                className="border-white/20 text-white hover:bg-white/10"
                              >
                                <Phone className="w-4 h-4 mr-2" />
                                Call Now
                              </Button>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="text-center"
          >
            <p className="text-white/50 mb-4">
              Need a custom maintenance plan for your fleet?
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => openWhatsAppForm('custom maintenance plan')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-green-500 hover:bg-green-400 text-white font-medium transition-all hover:scale-105"
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </button>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-medium transition-colors"
              >
                Contact us for a customized solution
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* WhatsApp Pre-Form Modal */}
      <WhatsAppPreForm
        isOpen={isWhatsAppFormOpen}
        onClose={() => setIsWhatsAppFormOpen(false)}
        defaultService={selectedService}
      />

      {/* Service Detail Modal */}
      <ServiceDetailModal
        isOpen={detailModalOpen}
        onClose={() => setDetailModalOpen(false)}
        service={selectedServiceDetail}
        onWhatsAppClick={openWhatsAppForm}
      />
    </section>
  );
}
