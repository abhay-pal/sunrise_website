import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/sections/Footer';


type Section = {
  title: string;
  points?: string[];
  text?: string;
};

type SitePage = {

type ServiceConfig = {

  path: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  heroDescription: string;
  image: string;
  imageAlt: string;

  overview: string;
  sections: Section[];
  links: { label: string; href: string }[];
  schemaType: 'Service' | 'WebPage' | 'FAQPage';
  faq?: { question: string; answer: string }[];
};

const orgSchema = {
  '@type': 'Organization',
  name: 'Sunrise Heavy Machine Service',
  url: 'https://sunriseheavymachine.com',
  telephone: '+91 97179 00209',
};

const pages: SitePage[] = [

  servicesOffered: string[];
  industriesServed: string[];
  whyChooseUs: string[];
  coverage: string;
  links: { label: string; href: string }[];
};

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Sunrise Heavy Machine Service',
  url: 'https://sunriseheavymachine.com',
};

const pages: ServiceConfig[] = [

  {
    path: '/reach-stacker-maintenance',
    title: 'Reach Stacker Maintenance Services',
    metaTitle: 'Reach Stacker Maintenance Service | Sunrise Heavy Machine',

    metaDescription: 'Professional reach stacker maintenance, repair and spare parts solutions for container handling equipment.',
    heroDescription: 'Expert reach stacker maintenance and repair solutions for ports, container yards, and logistics companies.',
    image: '/images/vector-reach-stacker.png',
    imageAlt: 'Vector illustration of reach stacker maintenance service',
    overview: 'Specialized service support for reach stackers to maximize uptime and safe container operations.',
    sections: [
      { title: 'Services Offered', points: ['Preventive maintenance programs', 'Engine and hydraulic diagnostics', 'On-site breakdown repairs'] },
      { title: 'Industries Served', points: ['Ports', 'Container Yards', 'Freight Terminals'] },
      { title: 'Why Choose Us', points: ['Experienced field engineers', 'Fast turnaround', 'Service-backed parts support'] },
      { title: 'Service Coverage', text: 'Support available across major industrial and logistics hubs in India.' },
    ],
    links: [
      { label: 'Forklift Repair', href: '/forklift-repair' },
      { label: 'Container Handling Equipment', href: '/container-handling-equipment' },
    ],
    schemaType: 'Service',

    metaDescription:
      'Professional reach stacker maintenance, repair and spare parts solutions for container handling equipment.',
    heroDescription:
      'Expert reach stacker maintenance and repair solutions for ports, container yards, and logistics companies.',
    image: '/images/vector-reach-stacker.png',
    imageAlt: 'Vector illustration of reach stacker maintenance service',
    servicesOffered: [
      'Preventive maintenance programs',
      'Engine, transmission and hydraulic diagnostics',
      'Emergency breakdown troubleshooting',
      'Container handler performance checks',
    ],
    industriesServed: ['Ports', 'Container Yards', 'Logistics Parks', 'Freight Terminals'],
    whyChooseUs: ['Experienced field engineers', 'Fast response support', 'OEM-grade service process'],
    coverage: 'Service support available across major industrial and logistics hubs in India.',
    links: [
      { label: 'Forklift Repair Service', href: '/forklift-repair' },
      { label: 'Hydra Crane Service', href: '/hydra-crane-service' },
    ],

  },
  {
    path: '/forklift-repair',
    title: 'Forklift Repair Services',
    metaTitle: 'Forklift Repair Service | Sunrise Heavy Machine',

    metaDescription: 'Reliable forklift repair, maintenance and spare parts support for warehousing and industrial operations.',
    heroDescription: 'Reliable forklift repair and maintenance services to keep warehouse and plant operations running smoothly.',
    image: '/images/vector-forklift.png',
    imageAlt: 'Vector illustration of forklift repair service',
    overview: 'Routine and emergency forklift support designed to reduce downtime and improve productivity.',
    sections: [
      { title: 'What We Offer', points: ['Periodic servicing', 'Brake, mast and steering repairs', 'Electrical troubleshooting'] },
      { title: 'Industries Served', points: ['Warehousing', 'Manufacturing', 'Distribution Centers'] },
      { title: 'Why Choose Us', points: ['Quick diagnostics', 'Experienced technicians', 'Reliable service workflow'] },
      { title: 'Service Coverage', text: 'Forklift support across industrial facilities throughout India.' },
    ],
    links: [
      { label: 'Hydraulic System Repair', href: '/hydraulic-system-repair' },
      { label: 'Spare Parts', href: '/spare-parts' },
    ],
    schemaType: 'Service',

    metaDescription:
      'Reliable forklift repair, maintenance and parts support for industrial warehouses and logistics operations.',
    heroDescription:
      'Reliable forklift repair and maintenance services to keep warehouse and plant operations running smoothly.',
    image: '/images/vector-forklift.png',
    imageAlt: 'Vector illustration of forklift repair service',
    servicesOffered: [
      'Forklift periodic maintenance',
      'Brake, steering and mast repairs',
      'Battery and electrical system diagnostics',
      'Load handling performance optimization',
    ],
    industriesServed: ['Warehousing', 'Manufacturing', '3PL Logistics', 'Distribution Centers'],
    whyChooseUs: ['Trained repair team', 'Scheduled preventive plans', 'Spare parts supply support'],
    coverage: 'Forklift repair and service assistance for industrial facilities throughout India.',
    links: [
      { label: 'Hydraulic System Repair', href: '/hydraulic-system-repair' },
      { label: 'Spare Parts Supply', href: '/spare-parts' },
    ],

  },
  {
    path: '/hydra-crane-service',
    title: 'Hydra Crane Service',
    metaTitle: 'Hydra Crane Service & Repair | Sunrise Heavy Machine',

    metaDescription: 'Hydra crane maintenance, inspection and repair support for safe heavy lifting operations.',
    heroDescription: 'Specialized hydra crane maintenance and repair for safe, efficient lifting operations.',
    image: '/images/vector-crane.png',
    imageAlt: 'Vector illustration of hydra crane service',
    overview: 'Comprehensive hydra crane service support to improve reliability and lifting safety.',
    sections: [
      { title: 'Services Offered', points: ['Boom and hoist servicing', 'Hydraulic line checks', 'Load safety checks'] },
      { title: 'Industries Served', points: ['Construction', 'Industrial Plants', 'Infrastructure Projects'] },
      { title: 'Why Choose Us', points: ['Safety-first approach', 'Skilled service team', 'On-site support readiness'] },
      { title: 'Service Coverage', text: 'Hydra crane support for project sites and industrial locations across India.' },
    ],
    links: [
      { label: 'Breakdown Support', href: '/breakdown-support' },
      { label: 'Preventive Maintenance', href: '/preventive-maintenance' },
    ],
    schemaType: 'Service',

    metaDescription:
      'Hydra crane inspection, repair and maintenance services for heavy lifting equipment in India.',
    heroDescription:
      'Specialized hydra crane maintenance and repair for safe, efficient lifting operations.',
    image: '/images/vector-crane.png',
    imageAlt: 'Vector illustration of hydra crane service',
    servicesOffered: [
      'Boom and hoist system servicing',
      'Hydraulic line and seal inspection',
      'Load safety and stability checks',
      'On-site breakdown support',
    ],
    industriesServed: ['Construction', 'Industrial Plants', 'Infrastructure Projects', 'Heavy Logistics'],
    whyChooseUs: ['Safety-focused processes', 'Field-ready technicians', 'Fast maintenance turnaround'],
    coverage: 'Hydra crane support available for project sites and industrial locations across India.',
    links: [
      { label: 'Reach Stacker Maintenance', href: '/reach-stacker-maintenance' },
      { label: 'Hydraulic System Repair', href: '/hydraulic-system-repair' },
    ],

  },
  {
    path: '/hydraulic-system-repair',
    title: 'Hydraulic System Repair',
    metaTitle: 'Hydraulic System Repair Service | Sunrise Heavy Machine',
    metaDescription: 'Hydraulic diagnostics, leak detection and repair services for heavy equipment and machinery.',
    heroDescription: 'End-to-end hydraulic system troubleshooting, repair, and preventive maintenance support.',
    image: '/images/vector-hydraulic.png',
    imageAlt: 'Vector illustration of hydraulic system repair',
    overview: 'Precise hydraulic servicing that helps maintain performance and reduce unplanned failure.',
    sections: [
      { title: 'What We Offer', points: ['Pump and valve servicing', 'Leak detection and pressure testing', 'Seal and hose replacement'] },
      { title: 'Industries Served', points: ['Ports', 'Manufacturing Plants', 'Material Handling'] },
      { title: 'Why Choose Us', points: ['Accurate diagnostics', 'Quality replacement parts', 'Preventive recommendations'] },
      { title: 'Service Coverage', text: 'Hydraulic support for heavy equipment users across India.' },
    ],
    links: [
      { label: 'Spare Parts', href: '/spare-parts' },
      { label: 'AMC Services', href: '/amc-services' },
    ],
    schemaType: 'Service',

    metaDescription:
      'Hydraulic system diagnostics, repair and preventive maintenance for heavy equipment and machinery.',
    heroDescription:
      'End-to-end hydraulic system troubleshooting, repair, and preventive maintenance support.',
    image: '/images/vector-hydraulic.png',
    imageAlt: 'Vector illustration of hydraulic system repair',
    servicesOffered: [
      'Hydraulic pump and valve servicing',
      'Pressure testing and leak detection',
      'Hose, seal and cylinder replacement',
      'Preventive hydraulic maintenance plans',
    ],
    industriesServed: ['Heavy Machinery', 'Ports', 'Manufacturing Plants', 'Material Handling'],
    whyChooseUs: ['Precise diagnostics', 'Quality replacement parts', 'Preventive maintenance expertise'],
    coverage: 'Hydraulic repair support for heavy equipment users across India.',
    links: [
      { label: 'Spare Parts Supply', href: '/spare-parts' },
      { label: 'Forklift Repair Service', href: '/forklift-repair' },
    ],

  },
  {
    path: '/spare-parts',
    title: 'Spare Parts Supply',
    metaTitle: 'Heavy Equipment Spare Parts | Sunrise Heavy Machine',
    metaDescription: 'Supply of reliable spare parts for reach stackers, forklifts, hydra cranes and hydraulic systems.',
    heroDescription: 'Trusted spare parts supply for heavy equipment maintenance, repair and uptime improvement.',
    image: '/images/vector-parts.png',
    imageAlt: 'Vector illustration of heavy equipment spare parts',
    overview: 'Service-oriented spare parts support for fast replacement and stable machine performance.',
    sections: [
      { title: 'Parts Availability', points: ['Reach stacker parts', 'Forklift spares', 'Hydraulic kits and components'] },
      { title: 'Industries Served', points: ['Container handling', 'Warehousing', 'Industrial operations'] },
      { title: 'Why Choose Us', points: ['Consistent quality', 'Fast sourcing support', 'Service-backed guidance'] },
      { title: 'Service Coverage', text: 'Parts supply and dispatch support across India.' },
    ],
    links: [
      { label: 'Forklift Repair', href: '/forklift-repair' },
      { label: 'Breakdown Support', href: '/breakdown-support' },
    ],
    schemaType: 'Service',
  },
  {
    path: '/about-us',
    title: 'About Sunrise Heavy Machine Service',
    metaTitle: 'About Us | Sunrise Heavy Machine Service India',
    metaDescription: 'Learn about Sunrise Heavy Machine Service, our mission, values, and heavy equipment service expertise across India.',
    heroDescription: 'Trusted heavy equipment maintenance partner for industrial and logistics businesses across India.',
    image: '/images/about-workshop.jpg',
    imageAlt: 'Sunrise heavy equipment workshop and field support',
    overview: 'We provide dependable heavy equipment service solutions focused on uptime, safety, and long-term reliability.',
    sections: [
      { title: 'Mission & Values', points: ['Safety-first execution', 'Transparent service communication', 'Long-term customer support'] },
      { title: 'Industries We Support', points: ['Ports and container yards', 'Logistics parks', 'Warehouses and plants'] },
      { title: 'Why Choose Us', points: ['Experienced team', 'Fast response support', 'Service + spare parts capability'] },
      { title: 'Service Coverage', text: 'Dedicated support for clients across major industrial regions in India.' },
    ],
    links: [
      { label: 'Industries We Serve', href: '/industries-we-serve' },
      { label: 'Contact Us', href: '/contact-us' },
    ],
    schemaType: 'WebPage',
  },
  {
    path: '/contact-us',
    title: 'Contact Sunrise Heavy Machine Service',
    metaTitle: 'Contact Us | Sunrise Heavy Machine Service',
    metaDescription: 'Contact Sunrise Heavy Machine Service for reach stacker, forklift, hydra crane and hydraulic maintenance support.',
    heroDescription: 'Connect with our team for service inquiries, urgent support, and maintenance planning.',
    image: '/images/operations-bg.jpg',
    imageAlt: 'Industrial operations contact and support',
    overview: 'Reach out for maintenance plans, emergency support, and spare parts requirements.',
    sections: [
      { title: 'Contact Details', points: ['Phone: +91 97179 00209', 'Email: Sunrise7480@rediffmail.com', 'Location: Greater Noida, India'] },
      { title: 'Business Hours', points: ['Mon-Fri: 8:00 AM - 6:00 PM', 'Saturday: 9:00 AM - 4:00 PM', 'Emergency support available'] },
      { title: 'What We Offer', points: ['Service inquiry handling', 'WhatsApp consultation support', 'Maintenance scheduling assistance'] },
      { title: 'Service Coverage', text: 'On-site service and support for industrial clients across India.' },
    ],
    links: [
      { label: 'Breakdown Support', href: '/breakdown-support' },
      { label: 'AMC Services', href: '/amc-services' },
    ],
    schemaType: 'WebPage',
  },
  {
    path: '/amc-services',
    title: 'Annual Maintenance Contract (AMC) Services',
    metaTitle: 'AMC Services for Heavy Equipment | Sunrise Heavy Machine',
    metaDescription: 'Annual maintenance contract services for reach stackers, forklifts, hydra cranes and hydraulic systems.',
    heroDescription: 'Structured AMC plans for consistent uptime, predictable service cycles and reduced breakdown risk.',
    image: '/images/service-maintenance.jpg',
    imageAlt: 'Annual maintenance contract heavy equipment service',
    overview: 'AMC services designed to reduce downtime through planned inspections and periodic servicing.',
    sections: [
      { title: 'What We Offer', points: ['Scheduled preventive checks', 'Priority response support', 'Maintenance documentation'] },
      { title: 'Industries Served', points: ['Container handling', 'Warehouse operations', 'Industrial plants'] },
      { title: 'Why Choose Us', points: ['Proactive maintenance planning', 'Service consistency', 'Better cost control'] },
      { title: 'Service Coverage', text: 'AMC support available for operations across India.' },
    ],
    links: [
      { label: 'Preventive Maintenance', href: '/preventive-maintenance' },
      { label: 'Contact Us', href: '/contact-us' },
    ],
    schemaType: 'Service',
  },
  {
    path: '/breakdown-support',
    title: 'Emergency Breakdown Support',
    metaTitle: 'Emergency Breakdown Support | Sunrise Heavy Machine',
    metaDescription: 'Urgent on-site troubleshooting and breakdown repair support for heavy equipment and handling machinery.',
    heroDescription: 'Rapid emergency breakdown support to restore equipment and keep operations moving.',
    image: '/images/service-hydra-crane.jpg',
    imageAlt: 'Emergency heavy equipment breakdown support',
    overview: 'On-site troubleshooting and urgent repairs aimed at reducing downtime during critical failures.',
    sections: [
      { title: 'Services Offered', points: ['Emergency call-out support', 'On-site diagnostics', 'Urgent component replacement'] },
      { title: 'Industries Served', points: ['Ports', 'Construction operations', 'Logistics and industrial plants'] },
      { title: 'Why Choose Us', points: ['Quick dispatch', 'Experienced repair team', 'Focus on uptime recovery'] },
      { title: 'Service Coverage', text: 'Breakdown support for key industrial and logistics locations across India.' },
    ],
    links: [
      { label: 'Spare Parts', href: '/spare-parts' },
      { label: 'Contact Us', href: '/contact-us' },
    ],
    schemaType: 'Service',
  },
  {
    path: '/preventive-maintenance',
    title: 'Preventive Maintenance Services',
    metaTitle: 'Preventive Maintenance for Heavy Equipment | Sunrise Heavy Machine',
    metaDescription: 'Planned preventive maintenance services to reduce downtime and improve heavy equipment reliability.',
    heroDescription: 'Scheduled preventive maintenance plans to enhance equipment reliability and operational efficiency.',
    image: '/images/service-reach-stacker.jpg',
    imageAlt: 'Preventive maintenance for industrial equipment',
    overview: 'Preventive maintenance programs that minimize unexpected failures and improve operating life.',
    sections: [
      { title: 'What We Offer', points: ['Inspection checklists', 'Planned servicing cycles', 'Performance and safety reviews'] },
      { title: 'Industries Served', points: ['Warehousing', 'Container yards', 'Industrial plants'] },
      { title: 'Why Choose Us', points: ['Data-driven maintenance planning', 'Skilled technical team', 'Reduced downtime focus'] },
      { title: 'Service Coverage', text: 'Preventive maintenance support available across India.' },
    ],
    links: [
      { label: 'AMC Services', href: '/amc-services' },
      { label: 'Industrial Equipment Maintenance', href: '/industrial-equipment-maintenance' },
    ],
    schemaType: 'Service',
  },
  {
    path: '/industrial-equipment-maintenance',
    title: 'Industrial Equipment Maintenance',
    metaTitle: 'Industrial Equipment Maintenance India | Sunrise Heavy Machine',
    metaDescription: 'Heavy and industrial equipment maintenance services for logistics, ports, warehouses and plants in India.',
    heroDescription: 'Comprehensive maintenance support for heavy industrial machinery and material handling equipment.',
    image: '/images/service-forklift.jpg',
    imageAlt: 'Industrial equipment maintenance and support',
    overview: 'Broad heavy equipment maintenance support tailored for industrial uptime and service continuity.',
    sections: [
      { title: 'What We Offer', points: ['Periodic maintenance', 'Repair and troubleshooting', 'Service planning and parts support'] },
      { title: 'Industries Served', points: ['Ports and terminals', 'Warehouses', 'Manufacturing plants'] },
      { title: 'Why Choose Us', points: ['Cross-equipment expertise', 'Fast support model', 'Reliable service outcomes'] },
      { title: 'Service Coverage', text: 'Industrial maintenance support in major operating zones across India.' },
    ],
    links: [
      { label: 'Container Handling Equipment', href: '/container-handling-equipment' },
      { label: 'Breakdown Support', href: '/breakdown-support' },
    ],
    schemaType: 'Service',
  },
  {
    path: '/container-handling-equipment',
    title: 'Container Handling Equipment Service',
    metaTitle: 'Container Handling Equipment Service | Sunrise Heavy Machine',
    metaDescription: 'Maintenance and repair support for container handling equipment including reach stackers and related systems.',
    heroDescription: 'Specialized service support for container handling equipment used in ports and logistics operations.',
    image: '/images/vector-reach-stacker.png',
    imageAlt: 'Container handling equipment service',
    overview: 'Dedicated service programs for container handling machinery used in high-demand operations.',
    sections: [
      { title: 'Services Offered', points: ['Reach stacker maintenance', 'Hydraulic repair support', 'Critical part replacement'] },
      { title: 'Industries Served', points: ['Ports', 'Container yards', 'Multimodal logistics parks'] },
      { title: 'Why Choose Us', points: ['Domain-focused service team', 'Operational uptime support', 'Process-driven maintenance'] },
      { title: 'Service Coverage', text: 'Container equipment service support across India.' },
    ],
    links: [
      { label: 'Reach Stacker Maintenance', href: '/reach-stacker-maintenance' },
      { label: 'Industries We Serve', href: '/industries-we-serve' },
    ],
    schemaType: 'Service',
  },
  {
    path: '/gallery',
    title: 'Service Gallery',
    metaTitle: 'Gallery | Sunrise Heavy Machine Service',
    metaDescription: 'Explore service visuals, machinery support snapshots and heavy equipment maintenance showcases.',
    heroDescription: 'A visual showcase of service capabilities, machinery support, and industrial maintenance work.',
    image: '/images/team.jpg',
    imageAlt: 'Gallery of heavy equipment service visuals',
    overview: 'Representative visuals from field service, workshop operations, and equipment maintenance support.',
    sections: [
      { title: 'Service Visuals', points: ['Reach stacker support', 'Forklift service workflows', 'Hydraulic repair activities'] },
      { title: 'Project Highlights', points: ['Industrial maintenance projects', 'Breakdown response snapshots', 'Parts and workshop support'] },
      { title: 'Why This Matters', text: 'Visual records help illustrate our practical service experience across equipment categories.' },
    ],
    links: [
      { label: 'About Us', href: '/about-us' },
      { label: 'Contact Us', href: '/contact-us' },
    ],
    schemaType: 'WebPage',
  },
  {
    path: '/faq',
    title: 'Frequently Asked Questions',
    metaTitle: 'FAQ | Sunrise Heavy Machine Service',
    metaDescription: 'Answers about heavy equipment maintenance, spare parts, AMC, service coverage and emergency support.',
    heroDescription: 'Common questions about our services, support model, and maintenance coverage.',
    image: '/images/service-spare-parts.jpg',
    imageAlt: 'FAQ for heavy equipment service and support',
    overview: 'Find quick answers to frequent service, coverage, and maintenance planning questions.',
    sections: [
      { title: 'Service Questions', points: ['Do you provide on-site support? Yes, based on service location and urgency.', 'Can we request scheduled maintenance plans? Yes, including preventive and AMC options.'] },
      { title: 'Support Questions', points: ['Do you support emergency breakdowns? Yes, with rapid troubleshooting assistance.', 'Do you supply spare parts? Yes, for key heavy equipment categories.'] },
      { title: 'Coverage Questions', points: ['Do you serve multiple industries? Yes, ports, logistics parks, warehouses, and industrial operations.', 'Do you operate across India? Yes, coverage is available across major hubs.'] },
    ],
    links: [
      { label: 'Breakdown Support', href: '/breakdown-support' },
      { label: 'Contact Us', href: '/contact-us' },
    ],
    schemaType: 'FAQPage',
    faq: [
      { question: 'Do you provide emergency breakdown support?', answer: 'Yes, we provide emergency on-site breakdown troubleshooting and urgent repairs based on service availability.' },
      { question: 'Do you offer AMC and preventive maintenance plans?', answer: 'Yes, we provide annual maintenance contracts and preventive maintenance plans for heavy equipment.' },
      { question: 'Which industries do you serve?', answer: 'We serve ports, container yards, logistics parks, warehouses, industrial plants, and construction operations.' },
      { question: 'Can we source spare parts through your team?', answer: 'Yes, we support spare parts sourcing and replacement for major equipment categories.' },
    ],
  },
  {
    path: '/industries-we-serve',
    title: 'Industries We Serve',
    metaTitle: 'Industries We Serve | Sunrise Heavy Machine Service',
    metaDescription: 'Service support for ports, logistics parks, container yards, warehouses, industrial plants and construction sites.',
    heroDescription: 'Industry-focused heavy equipment support tailored to operational and uptime needs.',
    image: '/images/operations-bg.jpg',
    imageAlt: 'Industries served by heavy equipment maintenance team',
    overview: 'We deliver flexible maintenance support for diverse industrial and logistics environments.',
    sections: [
      { title: 'Primary Sectors', points: ['Ports and container terminals', 'Logistics parks and container yards', 'Warehouses and distribution centers'] },
      { title: 'Industrial Support', points: ['Manufacturing and industrial plants', 'Construction and infrastructure projects', 'Material handling operations'] },
      { title: 'Why Choose Us', points: ['Cross-industry service expertise', 'Responsive support planning', 'Focus on uptime and reliability'] },
      { title: 'Service Coverage', text: 'Coverage available for clients across India based on equipment and support scope.' },
    ],
    links: [
      { label: 'Industrial Equipment Maintenance', href: '/industrial-equipment-maintenance' },
      { label: 'Contact Us', href: '/contact-us' },
    ],
    schemaType: 'WebPage',

    metaDescription:
      'Supply of reliable spare parts for reach stackers, forklifts, hydra cranes and hydraulic systems.',
    heroDescription:
      'Trusted spare parts supply for heavy equipment maintenance, repair and uptime improvement.',
    image: '/images/vector-parts.png',
    imageAlt: 'Vector illustration of heavy equipment spare parts',
    servicesOffered: [
      'Reach stacker spare parts',
      'Forklift service spares',
      'Hydra crane components',
      'Hydraulic seals, hoses and kits',
    ],
    industriesServed: ['Container Handling', 'Warehousing', 'Industrial Operations', 'Logistics'],
    whyChooseUs: ['Consistent part quality', 'Fast sourcing support', 'Service-backed recommendations'],
    coverage: 'Parts supply and dispatch support for clients across India.',
    links: [
      { label: 'Reach Stacker Maintenance', href: '/reach-stacker-maintenance' },
      { label: 'Forklift Repair Service', href: '/forklift-repair' },
    ],
  },
];

function setMeta(name: string, content: string, property = false) {
  const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
  let tag = document.head.querySelector(selector) as HTMLMetaElement | null;
  if (!tag) {
    tag = document.createElement('meta');
    if (property) tag.setAttribute('property', name);
    else tag.setAttribute('name', name);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}

function setCanonical(url: string) {
  let tag = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!tag) {
    tag = document.createElement('link');
    tag.setAttribute('rel', 'canonical');
    document.head.appendChild(tag);
  }
  tag.setAttribute('href', url);
}

function setSchema(page: SitePage) {
  const scriptId = 'route-schema';
  const existing = document.getElementById(scriptId);
  if (existing) existing.remove();

  const graph: Record<string, unknown>[] = [orgSchema];
  if (page.schemaType === 'Service') {
    graph.push({
      '@type': 'Service',
      name: page.title,
      serviceType: page.title,
      provider: { '@type': 'Organization', name: 'Sunrise Heavy Machine Service', url: 'https://sunriseheavymachine.com' },
      areaServed: 'India',
      description: page.metaDescription,
      url: `https://sunriseheavymachine.com${page.path}`,
    });
  } else if (page.schemaType === 'FAQPage' && page.faq) {
    graph.push({
      '@type': 'FAQPage',
      mainEntity: page.faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })),
    });
  } else {
    graph.push({ '@type': 'WebPage', name: page.title, description: page.metaDescription, url: `https://sunriseheavymachine.com${page.path}` });
  }

  const script = document.createElement('script');
  script.id = scriptId;
  script.type = 'application/ld+json';
  script.text = JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }, null, 2);
  document.head.appendChild(script);
}

function SitePageView({ page }: { page: SitePage }) {

function setSchema(page: ServiceConfig) {
  const scriptId = 'service-schema';
  const existing = document.getElementById(scriptId);
  if (existing) existing.remove();

  const script = document.createElement('script');
  script.id = scriptId;
  script.type = 'application/ld+json';
  script.text = JSON.stringify(
    {
      '@context': 'https://schema.org',
      '@graph': [
        orgSchema,
        {
          '@type': 'Service',
          name: page.title,
          serviceType: page.title,
          provider: {
            '@type': 'Organization',
            name: 'Sunrise Heavy Machine Service',
            url: 'https://sunriseheavymachine.com',
          },
          areaServed: 'India',
          description: page.metaDescription,
          url: `https://sunriseheavymachine.com${page.path}`,
        },
      ],
    },
    null,
    2,
  );
  document.head.appendChild(script);
}

function ServicePage({ page }: { page: ServiceConfig }) {
  useEffect(() => {
    document.title = page.metaTitle;
    setMeta('description', page.metaDescription);
    setMeta('og:title', page.metaTitle, true);
    setMeta('og:description', page.metaDescription, true);
    setMeta('og:type', 'website', true);
    setMeta('og:url', `https://sunriseheavymachine.com${page.path}`, true);
    setMeta('twitter:card', 'summary_large_image', true);
    setMeta('twitter:title', page.metaTitle, true);
    setMeta('twitter:description', page.metaDescription, true);
    setMeta('twitter:url', `https://sunriseheavymachine.com${page.path}`, true);
    setCanonical(`https://sunriseheavymachine.com${page.path}`);
    setSchema(page);
  }, [page]);

  return (
    <div className="min-h-screen bg-industrial-dark text-white overflow-x-hidden">
      <Navigation />
      <main className="pt-28 md:pt-32">
        <section className="container-padding pb-10">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold leading-tight mb-5">{page.title}</h1>
              <p className="text-lg text-white/70 leading-relaxed mb-8">{page.heroDescription}</p>

              <a href="/contact-us">

              <a href="/contact">

                <Button className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-white font-medium px-8 py-6 text-lg shadow-glow">
                  Request a Quote
                </Button>
              </a>
            </div>
            <div className="glass rounded-2xl p-8 border border-white/10">
              <img src={page.image} alt={page.imageAlt} className="w-full h-auto max-h-80 object-contain" loading="lazy" />
            </div>
          </div>
        </section>

        <section className="container-padding pb-8">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="glass rounded-xl p-6 border border-white/10">
              <h2 className="text-2xl font-display font-semibold mb-4">Overview</h2>

              <p className="text-white/70">{page.overview}</p>
            </div>

            {page.sections.map((section) => (
              <div key={section.title} className="glass rounded-xl p-6 border border-white/10">
                <h2 className="text-2xl font-display font-semibold mb-4">{section.title}</h2>
                {section.text && <p className="text-white/70">{section.text}</p>}
                {section.points && (
                  <ul className="space-y-2 text-white/70 list-disc list-inside">
                    {section.points.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            <div className="glass rounded-xl p-6 border border-white/10 md:col-span-2">
              <h2 className="text-2xl font-display font-semibold mb-4">Explore Related Pages</h2>

              <p className="text-white/70">{page.metaDescription}</p>
            </div>
            <div className="glass rounded-xl p-6 border border-white/10">
              <h2 className="text-2xl font-display font-semibold mb-4">Services Offered</h2>
              <ul className="space-y-2 text-white/70 list-disc list-inside">
                {page.servicesOffered.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="glass rounded-xl p-6 border border-white/10">
              <h2 className="text-2xl font-display font-semibold mb-4">Industries Served</h2>
              <ul className="space-y-2 text-white/70 list-disc list-inside">
                {page.industriesServed.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="glass rounded-xl p-6 border border-white/10">
              <h2 className="text-2xl font-display font-semibold mb-4">Why Choose Us</h2>
              <ul className="space-y-2 text-white/70 list-disc list-inside">
                {page.whyChooseUs.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="glass rounded-xl p-6 border border-white/10 md:col-span-2">
              <h2 className="text-2xl font-display font-semibold mb-4">Service Coverage</h2>
              <p className="text-white/70">{page.coverage}</p>
            </div>
            <div className="glass rounded-xl p-6 border border-white/10 md:col-span-2">
              <h2 className="text-2xl font-display font-semibold mb-4">Explore Related Services</h2>

              <div className="flex flex-wrap gap-3 mb-4">
                {page.links.map((link) => (
                  <a key={link.href} href={link.href} className="text-amber-400 hover:text-amber-300 underline underline-offset-4">
                    {link.label}
                  </a>
                ))}
              </div>
              <h2 className="text-2xl font-display font-semibold mb-4">Call to Action</h2>

              <p className="text-white/70 mb-4">Need fast and reliable heavy equipment support? Contact Sunrise Heavy Machine Service today.</p>
              <div className="flex flex-wrap gap-3">
                <a href="/contact-us">
                  <Button className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-white font-medium px-7">
                    Contact Service Team
                  </Button>
                </a>
                <a
                  href="https://wa.me/919717900209"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center px-7 py-2 rounded-md bg-green-500 hover:bg-green-400 text-white font-medium transition-all duration-300"
                >
                  Chat on WhatsApp
                </a>
              </div>

              <p className="text-white/70 mb-4">Need fast and reliable heavy equipment service support? Contact Sunrise Heavy Machine Service today.</p>
              <a href="/#contact">
                <Button className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-white font-medium px-7">
                  Contact Service Team
                </Button>
              </a>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export function renderServiceRoute(pathname: string) {
  const page = pages.find((item) => item.path === pathname);
  if (!page) return null;

  return <SitePageView page={page} />;
}

  return <ServicePage page={page} />;
}


