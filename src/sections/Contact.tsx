import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { WhatsAppPreForm } from '@/components/WhatsAppPreForm';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { motion } from 'framer-motion';
import { AlertCircle, Building, CheckCircle, Clock, FileText, Loader2, Mail, MapPin, MessageCircle, Phone, Send, User, Wrench } from 'lucide-react';
import { useState } from 'react';

const equipmentTypes = [
  { value: 'reach-stacker', label: 'Reach Stacker' },
  { value: 'forklift', label: 'Forklift' },
  { value: 'hydra-crane', label: 'Hydra Crane' },
  { value: 'hydraulic-system', label: 'Hydraulic System' },
  { value: 'spare-parts', label: 'Spare Parts' },
  { value: 'amc-contract', label: 'AMC/CMC Contract' },
  { value: 'port-equipment', label: 'Port Equipment' },
  { value: 'testing-certification', label: 'Testing & Certification' },
  { value: 'other', label: 'Other' },
];

// Contact Information
const CONTACT_EMAIL = 'Sunrise7480@rediffmail.com';
const CONTACT_PHONE = '+91 97179 00209';

export function Contact() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [isWhatsAppFormOpen, setIsWhatsAppFormOpen] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    equipmentType: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.company.trim()) newErrors.company = 'Company name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone is required';
    } else if (formData.phone.length < 10) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    if (!formData.equipmentType) newErrors.equipmentType = 'Please select equipment type';
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Try API first
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', company: '', email: '', phone: '', equipmentType: '', message: '' });
      } else {
        // Fallback to mailto
        sendViaMailto();
      }
    } catch (error) {
      // Fallback to mailto on network error
      sendViaMailto();
    } finally {
      setIsSubmitting(false);
    }
  };

  const sendViaMailto = () => {
    const subject = `Quote Request from ${formData.name} - ${formData.company}`;
    const body = `Name: ${formData.name}%0D%0A` +
      `Company: ${formData.company}%0D%0A` +
      `Email: ${formData.email}%0D%0A` +
      `Phone: ${formData.phone}%0D%0A` +
      `Equipment Type: ${equipmentTypes.find(e => e.value === formData.equipmentType)?.label || formData.equipmentType}%0D%0A` +
      `Message: ${formData.message}%0D%0A`;
    
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${body}`;
    setSubmitStatus('success');
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: CONTACT_EMAIL,
      href: `mailto:${CONTACT_EMAIL}`,
    },
    {
      icon: Phone,
      label: 'Phone',
      value: CONTACT_PHONE,
      href: `tel:${CONTACT_PHONE.replace(/\s/g, '')}`,
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'D-417, SECTOR -2 PATWARI VILLAGE, GREATER NOIDA-201308',
      href: '#',
    },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="relative section-padding overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-industrial-dark" />
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-blue-500/10" />

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
                Get In Touch
              </span>
              <span className="w-8 h-px bg-amber-500" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6">
              Ready to reduce downtime?
            </h2>
            <p className="text-white/60 text-lg">
              Tell us what you&apos;re running and where. We&apos;ll respond within 24
              hours with a plan.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-amber-500/30 hover:bg-white/10 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-amber-500/20 transition-colors">
                      <item.icon className="w-5 h-5 text-amber-500" />
                    </div>
                    <div>
                      <div className="text-white/50 text-sm mb-1">
                        {item.label}
                      </div>
                      <div className="text-white font-medium group-hover:text-amber-400 transition-colors">
                        {item.value}
                      </div>
                    </div>
                  </motion.a>
                ))}

                {/* WhatsApp Quick Contact */}
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  onClick={() => setIsWhatsAppFormOpen(true)}
                  className="w-full flex items-center gap-4 p-4 rounded-xl bg-green-500/10 border border-green-500/30 hover:bg-green-500/20 hover:border-green-500/50 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-green-500 flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-left">
                    <div className="text-green-400 text-sm mb-1">
                      WhatsApp
                    </div>
                    <div className="text-white font-medium group-hover:text-green-300 transition-colors">
                      Chat with us instantly
                    </div>
                  </div>
                </motion.button>
              </div>

              {/* Working Hours */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="mt-8 p-6 rounded-xl bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/20"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-5 h-5 text-amber-500" />
                  <h3 className="text-white font-semibold">
                    Working Hours
                  </h3>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-white/60">Monday - Friday</span>
                    <span className="text-white">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/60">Saturday</span>
                    <span className="text-white">9:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/60">Sunday</span>
                    <span className="text-amber-400">24/7 Emergency</span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-white/10">
                  <p className="text-amber-400 text-sm font-medium">
                    24/7 Breakdown Support Available
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:col-span-3"
            >
              <div className="p-6 md:p-8 rounded-2xl bg-card border border-white/10">
                <h3 className="text-xl font-display font-semibold text-white mb-2">
                  Request a Quote
                </h3>
                <p className="text-white/60 text-sm mb-6">
                  Fill the form below and we&apos;ll get back to you within 24 hours.
                </p>

                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 rounded-lg bg-green-500/10 border border-green-500/30 flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <div>
                      <p className="text-green-400 font-medium">
                        Message sent successfully!
                      </p>
                      <p className="text-green-400/70 text-sm">
                        We&apos;ll get back to you within 24 hours.
                      </p>
                    </div>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 rounded-lg bg-red-500/10 border border-red-500/30 flex items-center gap-3"
                  >
                    <AlertCircle className="w-5 h-5 text-red-500" />
                    <div>
                      <p className="text-red-400 font-medium">
                        Something went wrong
                      </p>
                      <p className="text-red-400/70 text-sm">
                        Please try again or contact us directly.
                      </p>
                    </div>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <Label className="text-white/70 flex items-center gap-2 mb-2">
                        <User className="w-4 h-4" />
                        Name *
                      </Label>
                      <Input
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your name"
                        className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-amber-500/50"
                      />
                      {errors.name && (
                        <p className="text-red-400 text-xs mt-1">{errors.name}</p>
                      )}
                    </div>
                    <div>
                      <Label className="text-white/70 flex items-center gap-2 mb-2">
                        <Building className="w-4 h-4" />
                        Company *
                      </Label>
                      <Input
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Your company"
                        className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-amber-500/50"
                      />
                      {errors.company && (
                        <p className="text-red-400 text-xs mt-1">{errors.company}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <Label className="text-white/70 flex items-center gap-2 mb-2">
                        <Mail className="w-4 h-4" />
                        Email *
                      </Label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your@email.com"
                        className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-amber-500/50"
                      />
                      {errors.email && (
                        <p className="text-red-400 text-xs mt-1">{errors.email}</p>
                      )}
                    </div>
                    <div>
                      <Label className="text-white/70 flex items-center gap-2 mb-2">
                        <Phone className="w-4 h-4" />
                        Phone *
                      </Label>
                      <Input
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 97179 00209"
                        className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-amber-500/50"
                      />
                      {errors.phone && (
                        <p className="text-red-400 text-xs mt-1">{errors.phone}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <Label className="text-white/70 flex items-center gap-2 mb-2">
                      <Wrench className="w-4 h-4" />
                      Equipment Type *
                    </Label>
                    <Select
                      value={formData.equipmentType}
                      onValueChange={(value) => setFormData({ ...formData, equipmentType: value })}
                    >
                      <SelectTrigger className="bg-white/5 border-white/10 text-white focus:ring-amber-500/50">
                        <SelectValue placeholder="Select equipment type" />
                      </SelectTrigger>
                      <SelectContent className="bg-card border-white/10">
                        {equipmentTypes.map((type) => (
                          <SelectItem
                            key={type.value}
                            value={type.value}
                            className="text-white hover:bg-white/10 focus:bg-white/10"
                          >
                            {type.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.equipmentType && (
                      <p className="text-red-400 text-xs mt-1">{errors.equipmentType}</p>
                    )}
                  </div>

                  <div>
                    <Label className="text-white/70 flex items-center gap-2 mb-2">
                      <FileText className="w-4 h-4" />
                      Message *
                    </Label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your equipment and requirements..."
                      rows={4}
                      className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-amber-500/50 resize-none"
                    />
                    {errors.message && (
                      <p className="text-red-400 text-xs mt-1">{errors.message}</p>
                    )}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      size="lg"
                      className="flex-1 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-white font-semibold py-6 shadow-glow hover:shadow-glow-lg transition-all duration-300 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 w-5 h-5 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 w-5 h-5" />
                          Request a Quote
                        </>
                      )}
                    </Button>
                    
                    <Button
                      type="button"
                      onClick={() => setIsWhatsAppFormOpen(true)}
                      size="lg"
                      variant="outline"
                      className="flex-1 border-green-500/50 text-green-400 hover:bg-green-500/10 hover:text-green-300 py-6"
                    >
                      <MessageCircle className="mr-2 w-5 h-5" />
                      Chat on WhatsApp
                    </Button>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* WhatsApp Pre-Form Modal */}
      <WhatsAppPreForm
        isOpen={isWhatsAppFormOpen}
        onClose={() => setIsWhatsAppFormOpen(false)}
      />
    </section>
  );
}
