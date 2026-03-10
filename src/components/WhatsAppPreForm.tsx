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
import { AnimatePresence, motion } from 'framer-motion';
import { Building, FileText, MessageCircle, Send, User, Wrench, X } from 'lucide-react';
import { useEffect, useState } from 'react';

interface WhatsAppPreFormProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

const serviceTypes = [
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

const WHATSAPP_NUMBER = '919717900209';

function normalizeServiceType(defaultService: string) {
  const matchingService = serviceTypes.find(
    (service) =>
      service.value === defaultService || service.label.toLowerCase() === defaultService.toLowerCase(),
  );

  if (matchingService) return matchingService.value;
  if (!defaultService.trim()) return '';
  return 'other';
}

export function WhatsAppPreForm({ isOpen, onClose, defaultService = '' }: WhatsAppPreFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    serviceType: normalizeServiceType(defaultService),
    requirement: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (!isOpen) return;
    setErrors({});
    setFormData((prev) => ({
      ...prev,
      serviceType: normalizeServiceType(defaultService),
      requirement: defaultService && prev.requirement.trim() === '' ? `Inquiry about ${defaultService}` : prev.requirement,
    }));
  }, [defaultService, isOpen]);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.company.trim()) newErrors.company = 'Company name is required';
    if (!formData.serviceType) newErrors.serviceType = 'Please select a service type';
    if (!formData.requirement.trim()) newErrors.requirement = 'Please describe your requirement';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;

    const message =
      `*New Inquiry from Website*%0A%0A` +
      `*Name:* ${formData.name}%0A` +
      `*Company:* ${formData.company}%0A` +
      `*Service Required:* ${serviceTypes.find((s) => s.value === formData.serviceType)?.label || formData.serviceType}%0A` +
      `*Requirement:* ${formData.requirement}%0A%0A` +
      `Please contact me for further discussion.`;

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
    onClose();
    setErrors({});
    setFormData({ name: '', company: '', serviceType: '', requirement: '' });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4"
          >
            <div
              onClick={(event) => event.stopPropagation()}
              className="w-[min(92vw,420px)] sm:w-full sm:max-w-lg max-h-[90vh] overflow-y-auto overflow-x-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 border border-white/10 shadow-2xl"
            >
              <div className="bg-gradient-to-r from-green-500 to-green-600 p-4 sm:p-6 relative pr-14">
                <button
                  onClick={onClose}
                  className="absolute top-3 right-3 sm:top-4 sm:right-4 w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors"
                  aria-label="Close WhatsApp inquiry form"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="flex items-start sm:items-center gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-full bg-white/20 flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white leading-tight">Quick WhatsApp Inquiry</h3>
                    <p className="text-green-100 text-xs sm:text-sm leading-snug">Fill details & we'll connect on WhatsApp</p>
                  </div>
                </div>
              </div>

              <div className="p-4 sm:p-6 space-y-4">
                <div>
                  <Label className="text-white/70 flex items-center gap-2 mb-2">
                    <User className="w-4 h-4" />
                    Your Name *
                  </Label>
                  <Input
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your full name"
                    className="w-full bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-green-500/50"
                  />
                  {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                </div>

                <div>
                  <Label className="text-white/70 flex items-center gap-2 mb-2">
                    <Building className="w-4 h-4" />
                    Company Name *
                  </Label>
                  <Input
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Enter your company name"
                    className="w-full bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-green-500/50"
                  />
                  {errors.company && <p className="text-red-400 text-xs mt-1">{errors.company}</p>}
                </div>

                <div>
                  <Label className="text-white/70 flex items-center gap-2 mb-2">
                    <Wrench className="w-4 h-4" />
                    Service Type *
                  </Label>
                  <Select
                    value={formData.serviceType}
                    onValueChange={(value) => setFormData({ ...formData, serviceType: value })}
                  >
                    <SelectTrigger className="w-full bg-white/5 border-white/10 text-white focus:ring-green-500/50">
                      <SelectValue placeholder="Select service type" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-800 border-white/10 max-w-[88vw] sm:max-w-none">
                      {serviceTypes.map((type) => (
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
                  {errors.serviceType && <p className="text-red-400 text-xs mt-1">{errors.serviceType}</p>}
                </div>

                <div>
                  <Label className="text-white/70 flex items-center gap-2 mb-2">
                    <FileText className="w-4 h-4" />
                    Your Requirement *
                  </Label>
                  <Textarea
                    value={formData.requirement}
                    onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                    placeholder="Describe your equipment, issue, or service needed..."
                    rows={4}
                    className="w-full min-h-[96px] bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-green-500/50 resize-y"
                  />
                  {errors.requirement && <p className="text-red-400 text-xs mt-1">{errors.requirement}</p>}
                </div>

                <Button
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-white font-semibold py-5"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send on WhatsApp
                </Button>

                <p className="text-center text-white/40 text-xs leading-relaxed px-1 pb-1">
                  Your inquiry will be sent to +91 97179 00209
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
