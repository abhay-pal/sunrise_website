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
import { useState } from 'react';

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

export function WhatsAppPreForm({ isOpen, onClose, defaultService = '' }: WhatsAppPreFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    serviceType: defaultService,
    requirement: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

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

    const message = `*New Inquiry from Website*%0A%0A` +
      `*Name:* ${formData.name}%0A` +
      `*Company:* ${formData.company}%0A` +
      `*Service Required:* ${serviceTypes.find(s => s.value === formData.serviceType)?.label || formData.serviceType}%0A` +
      `*Requirement:* ${formData.requirement}%0A%0A` +
      `Please contact me for further discussion.`;

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
    onClose();
    setFormData({ name: '', company: '', serviceType: '', requirement: '' });
  };

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
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
          />
          
          {/* Modal */}
          <motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  exit={{ opacity: 0, scale: 0.9 }}
  className="fixed inset-0 flex items-center justify-center z-50 p-4"
>
  <div className="w-full max-w-lg"></div>
          {/* <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg z-50 p-4"
          > */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-green-500 to-green-600 p-6 relative">
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Quick WhatsApp Inquiry</h3>
                    <p className="text-green-100 text-sm">Fill details & we'll connect on WhatsApp</p>
                  </div>
                </div>
              </div>

              {/* Form */}
              <div className="p-6 space-y-4">
                {/* Name */}
                <div>
                  <Label className="text-white/70 flex items-center gap-2 mb-2">
                    <User className="w-4 h-4" />
                    Your Name *
                  </Label>
                  <Input
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your full name"
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-green-500/50"
                  />
                  {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                </div>

                {/* Company */}
                <div>
                  <Label className="text-white/70 flex items-center gap-2 mb-2">
                    <Building className="w-4 h-4" />
                    Company Name *
                  </Label>
                  <Input
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Enter your company name"
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-green-500/50"
                  />
                  {errors.company && <p className="text-red-400 text-xs mt-1">{errors.company}</p>}
                </div>

                {/* Service Type */}
                <div>
                  <Label className="text-white/70 flex items-center gap-2 mb-2">
                    <Wrench className="w-4 h-4" />
                    Service Type *
                  </Label>
                  <Select
                    value={formData.serviceType}
                    onValueChange={(value) => setFormData({ ...formData, serviceType: value })}
                  >
                    <SelectTrigger className="bg-white/5 border-white/10 text-white focus:ring-green-500/50">
                      <SelectValue placeholder="Select service type" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-800 border-white/10">
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

                {/* Requirement */}
                <div>
                  <Label className="text-white/70 flex items-center gap-2 mb-2">
                    <FileText className="w-4 h-4" />
                    Your Requirement *
                  </Label>
                  <Textarea
                    value={formData.requirement}
                    onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                    placeholder="Describe your equipment, issue, or service needed..."
                    rows={3}
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-green-500/50 resize-none"
                  />
                  {errors.requirement && <p className="text-red-400 text-xs mt-1">{errors.requirement}</p>}
                </div>

                {/* Submit Button */}
                <Button
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-white font-semibold py-6"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send on WhatsApp
                </Button>

                <p className="text-center text-white/40 text-xs">
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
