export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  initials: string;
}

export interface Client {
  id: string;
  name: string;
  abbreviation: string;
  fullName: string;
}

export interface ContactFormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  equipmentType: string;
  message: string;
  honeypot?: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface Stat {
  value: string;
  label: string;
  suffix?: string;
}
