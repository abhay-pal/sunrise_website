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
  {
    path: '/reach-stacker-maintenance',
    title: 'Reach Stacker Maintenance Services',
    metaTitle: 'Reach Stacker Maintenance Service | Sunrise Heavy Machine',
    metaDescription: 'Professional reach stacker maintenance and repair support for container handling equipment.',
    heroDescription: 'Expert reach stacker maintenance and repair solutions for ports and logistics companies.',
    image: '/images/vector-reach-stacker.png',
    imageAlt: 'Vector illustration of reach stacker maintenance service',
    overview: 'Specialized service support for reach stackers to maximize uptime and safe container operations.',
    sections: [
      { title: 'Services Offered', points: ['Preventive maintenance programs', 'Engine and hydraulic diagnostics', 'On-site breakdown repairs'] },
      { title: 'Industries Served', points: ['Ports', 'Container Yards', 'Freight Terminals'] },
    ],
    links: [{ label: 'Forklift Repair', href: '/forklift-repair' }],
    schemaType: 'Service',
  },
  {
    path: '/forklift-repair',
    title: 'Forklift Repair Services',
    metaTitle: 'Forklift Repair Service | Sunrise Heavy Machine',
    metaDescription: 'Reliable forklift repair and maintenance support for industrial operations.',
    heroDescription: 'Keep warehouse and plant operations running with dependable forklift support.',
    image: '/images/vector-forklift.png',
    imageAlt: 'Vector illustration of forklift repair service',
    overview: 'Routine and emergency forklift support designed to reduce downtime and improve productivity.',
    sections: [{ title: 'What We Offer', points: ['Periodic servicing', 'Brake, mast and steering repairs', 'Electrical troubleshooting'] }],
    links: [{ label: 'Hydraulic System Repair', href: '/hydraulic-system-repair' }],
    schemaType: 'Service',
  },
  {
    path: '/hydra-crane-service',
    title: 'Hydra Crane Service',
    metaTitle: 'Hydra Crane Service & Repair | Sunrise Heavy Machine',
    metaDescription: 'Hydra crane maintenance, inspection and repair support for heavy lifting operations.',
    heroDescription: 'Specialized hydra crane maintenance and repair for safe, efficient lifting operations.',
    image: '/images/vector-crane.png',
    imageAlt: 'Vector illustration of hydra crane service',
    overview: 'Comprehensive hydra crane service support to improve reliability and lifting safety.',
    sections: [{ title: 'Services Offered', points: ['Boom and hoist servicing', 'Hydraulic line checks', 'Load safety checks'] }],
    links: [{ label: 'Breakdown Support', href: '/breakdown-support' }],
    schemaType: 'Service',
  },
  {
    path: '/hydraulic-system-repair',
    title: 'Hydraulic System Repair',
    metaTitle: 'Hydraulic System Repair Service | Sunrise Heavy Machine',
    metaDescription: 'Hydraulic diagnostics, leak detection and repair services for heavy equipment.',
    heroDescription: 'End-to-end hydraulic system troubleshooting, repair, and preventive maintenance support.',
    image: '/images/vector-hydraulic.png',
    imageAlt: 'Vector illustration of hydraulic system repair',
    overview: 'Precise hydraulic servicing that helps maintain performance and reduce unplanned failure.',
    sections: [{ title: 'What We Offer', points: ['Pump and valve servicing', 'Leak detection and pressure testing', 'Seal and hose replacement'] }],
    links: [{ label: 'Spare Parts', href: '/spare-parts' }],
    schemaType: 'Service',
  },
  {
    path: '/spare-parts',
    title: 'Spare Parts Supply',
    metaTitle: 'Heavy Equipment Spare Parts | Sunrise Heavy Machine',
    metaDescription: 'Supply of reliable spare parts for reach stackers, forklifts and hydra cranes.',
    heroDescription: 'Trusted spare parts supply for heavy equipment maintenance and uptime improvement.',
    image: '/images/vector-parts.png',
    imageAlt: 'Vector illustration of heavy equipment spare parts',
    overview: 'Service-oriented spare parts support for fast replacement and stable machine performance.',
    sections: [{ title: 'Parts Availability', points: ['Reach stacker parts', 'Forklift spares', 'Hydraulic kits and components'] }],
    links: [{ label: 'Forklift Repair', href: '/forklift-repair' }],
    schemaType: 'Service',
  },
  {
    path: '/amc-services',
    title: 'Annual Maintenance Contract (AMC) Services',
    metaTitle: 'AMC Services for Heavy Equipment | Sunrise Heavy Machine',
    metaDescription: 'Annual maintenance contract services for heavy equipment.',
    heroDescription: 'Structured AMC plans for consistent uptime and reduced breakdown risk.',
    image: '/images/service-maintenance.jpg',
    imageAlt: 'Annual maintenance contract heavy equipment service',
    overview: 'AMC services designed to reduce downtime through planned inspections and periodic servicing.',
    sections: [{ title: 'What We Offer', points: ['Scheduled preventive checks', 'Priority response support', 'Maintenance documentation'] }],
    links: [{ label: 'Preventive Maintenance', href: '/preventive-maintenance' }],
    schemaType: 'Service',
  },
  {
    path: '/breakdown-support',
    title: 'Emergency Breakdown Support',
    metaTitle: 'Emergency Breakdown Support | Sunrise Heavy Machine',
    metaDescription: 'Urgent on-site troubleshooting and breakdown repair support for heavy equipment.',
    heroDescription: 'Rapid emergency breakdown support to restore equipment and keep operations moving.',
    image: '/images/service-hydra-crane.jpg',
    imageAlt: 'Emergency heavy equipment breakdown support',
    overview: 'On-site troubleshooting and urgent repairs aimed at reducing downtime during critical failures.',
    sections: [{ title: 'Services Offered', points: ['Emergency call-out support', 'On-site diagnostics', 'Urgent component replacement'] }],
    links: [{ label: 'Contact Us', href: '/contact-us' }],
    schemaType: 'Service',
  },
  {
    path: '/preventive-maintenance',
    title: 'Preventive Maintenance Services',
    metaTitle: 'Preventive Maintenance for Heavy Equipment | Sunrise Heavy Machine',
    metaDescription: 'Planned preventive maintenance services to reduce downtime and improve reliability.',
    heroDescription: 'Scheduled preventive maintenance plans to improve operational efficiency.',
    image: '/images/service-reach-stacker.jpg',
    imageAlt: 'Preventive maintenance for industrial equipment',
    overview: 'Preventive maintenance programs that minimize unexpected failures and improve operating life.',
    sections: [{ title: 'What We Offer', points: ['Inspection checklists', 'Planned servicing cycles', 'Performance and safety reviews'] }],
    links: [{ label: 'AMC Services', href: '/amc-services' }],
    schemaType: 'Service',
  },
  {
    path: '/industrial-equipment-maintenance',
    title: 'Industrial Equipment Maintenance',
    metaTitle: 'Industrial Equipment Maintenance India | Sunrise Heavy Machine',
    metaDescription: 'Heavy equipment maintenance services for logistics, warehouses and plants in India.',
    heroDescription: 'Comprehensive maintenance support for heavy industrial machinery.',
    image: '/images/service-forklift.jpg',
    imageAlt: 'Industrial equipment maintenance and support',
    overview: 'Broad heavy equipment maintenance support tailored for industrial uptime.',
    sections: [{ title: 'What We Offer', points: ['Periodic maintenance', 'Repair and troubleshooting', 'Service planning and parts support'] }],
    links: [{ label: 'Container Handling Equipment', href: '/container-handling-equipment' }],
    schemaType: 'Service',
  },
  {
    path: '/container-handling-equipment',
    title: 'Container Handling Equipment Service',
    metaTitle: 'Container Handling Equipment Service | Sunrise Heavy Machine',
    metaDescription: 'Maintenance and repair support for container handling equipment.',
    heroDescription: 'Specialized service support for container handling equipment in ports and logistics operations.',
    image: '/images/vector-reach-stacker.png',
    imageAlt: 'Container handling equipment service',
    overview: 'Dedicated service programs for container handling machinery used in high-demand operations.',
    sections: [{ title: 'Services Offered', points: ['Reach stacker maintenance', 'Hydraulic repair support', 'Critical part replacement'] }],
    links: [{ label: 'Reach Stacker Maintenance', href: '/reach-stacker-maintenance' }],
    schemaType: 'Service',
  },
  {
    path: '/about-us',
    title: 'About Sunrise Heavy Machine Service',
    metaTitle: 'About Us | Sunrise Heavy Machine Service India',
    metaDescription: 'Learn about Sunrise Heavy Machine Service and our heavy equipment expertise across India.',
    heroDescription: 'Trusted heavy equipment maintenance partner for industrial and logistics businesses across India.',
    image: '/images/about-workshop.jpg',
    imageAlt: 'Sunrise heavy equipment workshop and field support',
    overview:
      'Sunrise Heavy Machine Service is a trusted heavy equipment maintenance company supporting logistics, warehousing, port, and industrial operations across India. Our team combines workshop capability with responsive on-site support to keep critical equipment performing safely in demanding environments.',
    sections: [
      {
        title: 'Who We Are',
        text:
          'We are a service-focused technical partner for businesses that depend on reach stackers, forklifts, hydra cranes, and hydraulic-powered machinery. From planned servicing to urgent breakdown response, our goal is to deliver dependable support that protects uptime and operational continuity.',
      },
      {
        title: 'Our Experience & Field Expertise',
        points: [
          'Hands-on support for container handling equipment and warehouse fleets',
          'Hydraulic system troubleshooting, leak rectification, and pressure performance checks',
          'Mechanical, electrical, and safety inspection support for heavy machines',
          'Integrated workshop repairs with field diagnostics and site restoration support',
        ],
      },
      {
        title: 'What Makes Sunrise Different',
        points: [
          'Fast-response service mindset for uptime-critical operations',
          'Clear diagnosis and practical recommendations before major component replacement',
          'Preventive maintenance planning to reduce repetitive failures',
          'Service + spare parts support from one coordinated team',
        ],
      },
      {
        title: 'Industries & Equipment We Support',
        points: [
          'Ports, terminals, and container yards handling high-volume movement',
          'Warehousing and logistics hubs running daily forklift operations',
          'Construction and infrastructure sites using hydra cranes and support equipment',
          'Industrial plants requiring hydraulic reliability and safe machine performance',
        ],
      },
      {
        title: 'Mission, Vision & Core Values',
        points: [
          'Mission: Deliver reliable heavy equipment maintenance services with safety and accountability.',
          'Vision: Be the preferred industrial equipment service partner for uptime-focused businesses in India.',
          'Values: Technical integrity, responsive support, transparent communication, and long-term service commitment.',
        ],
      },
      {
        title: 'Why Clients Trust Us',
        points: [
          'Consistent service quality aligned with real site conditions',
          'Structured inspections and maintenance records for better planning',
          'Respect for safety processes and operating timelines',
          'Professional coordination with operations, maintenance, and fleet teams',
        ],
      },
      {
        title: 'Service Commitment, Safety & Uptime Philosophy',
        text:
          'Our approach is built on preventive maintenance, accurate fault finding, and disciplined execution. We focus on reducing unplanned downtime, extending equipment life, and supporting safer machine operation through regular inspection, timely intervention, and responsible service practices.',
      },
      {
        title: 'Let’s Support Your Equipment Performance',
        text:
          'If your business depends on heavy equipment reliability, Sunrise Heavy Machine Service is ready to support your team with routine maintenance, emergency breakdown assistance, and dependable spare parts coordination.',
      },
    ],
    links: [{ label: 'Contact Us', href: '/contact-us' }],
    schemaType: 'WebPage',
  },
  {
    path: '/contact-us',
    title: 'Contact Sunrise Heavy Machine Service',
    metaTitle: 'Contact Us | Sunrise Heavy Machine Service',
    metaDescription: 'Contact us for heavy equipment maintenance, spare parts, and emergency support.',
    heroDescription: 'Connect with our team for service inquiries, urgent support, and maintenance planning.',
    image: '/images/operations-bg.jpg',
    imageAlt: 'Industrial operations contact and support',
    overview:
      'Connect with Sunrise Heavy Machine Service for heavy equipment maintenance services, hydraulic troubleshooting, forklift and reach stacker support, spare parts assistance, and breakdown response planning.',
    sections: [
      {
        title: 'Service Inquiry Support',
        text:
          'Our team supports new and existing clients with technical discussions, maintenance planning, inspection schedules, and service coordination for industrial equipment in demanding operating environments.',
      },
      {
        title: 'Emergency Breakdown Note',
        text:
          'If your reach stacker, forklift, hydra crane, or hydraulic system has an urgent issue, call or WhatsApp us with machine details, current symptoms, and location so we can prioritize support quickly.',
      },
      {
        title: 'Contact Details',
        points: ['Phone: +91 97179 00209', 'WhatsApp: +91 97179 00209', 'Email: Sunrise7480@rediffmail.com', 'Location: Greater Noida, India'],
      },
      {
        title: 'Business & Service Hours',
        points: [
          'Monday to Saturday: Service coordination and workshop support',
          'On-site visits: Scheduled based on location, urgency, and machine condition',
          'Urgent cases: Prioritized response for breakdown-critical situations',
        ],
      },
      {
        title: 'Request a Quote Guidance',
        points: [
          'Share machine type, model, and issue summary',
          'Mention site location and preferred service timing',
          'Specify whether you need one-time repair, preventive maintenance, or AMC support',
          'Add spare parts requirements if known to speed up planning',
        ],
      },
      {
        title: 'Types of Inquiries We Handle',
        points: [
          'Reach stacker maintenance and inspection support',
          'Forklift repair services and periodic maintenance',
          'Hydra crane maintenance and operational checks',
          'Hydraulic system troubleshooting and component replacement',
          'Spare parts sourcing and fitment planning',
          'Annual maintenance contracts and preventive service schedules',
        ],
      },
      {
        title: 'Why Contact Sunrise Heavy Machine Service',
        text:
          'We combine technical experience, practical field response, and professional communication to help logistics and industrial teams reduce downtime and maintain safe equipment performance.',
      },
      {
        title: 'Talk to Our Team Today',
        text:
          'Whether you need immediate support or long-term maintenance planning, our team is ready to help you keep operations moving with dependable heavy equipment service.',
      },
    ],
    links: [{ label: 'AMC Services', href: '/amc-services' }],
    schemaType: 'WebPage',
  },
  {
    path: '/gallery',
    title: 'Service Gallery',
    metaTitle: 'Gallery | Sunrise Heavy Machine Service',
    metaDescription: 'Explore service visuals and heavy equipment maintenance showcases.',
    heroDescription: 'A visual showcase of service capabilities and industrial maintenance work.',
    image: '/images/team.jpg',
    imageAlt: 'Gallery of heavy equipment service visuals',
    overview:
      'This gallery highlights the type of heavy equipment maintenance and industrial service work delivered by our team across workshops, logistics yards, warehouses, and field locations.',
    sections: [
      {
        title: 'Project Highlights',
        points: [
          'Reach stacker preventive maintenance and operational readiness checks',
          'Forklift restoration work for safer and smoother warehouse performance',
          'Hydra crane service activities focused on lifting reliability and safety',
        ],
      },
      {
        title: 'Field Service Snapshots',
        points: [
          'On-site diagnostics for hydraulic pressure loss and leakage conditions',
          'Emergency breakdown attendance at logistics and container handling locations',
          'Inspection-based interventions to reduce repeat failures in active fleets',
        ],
      },
      {
        title: 'Workshop Maintenance Highlights',
        points: [
          'Component disassembly, cleaning, and fitment checks under controlled workshop conditions',
          'Seal kits, hose lines, and hydraulic sub-assembly replacement work',
          'Post-service testing to confirm machine readiness before handover',
        ],
      },
      {
        title: 'Spare Parts & Component Support',
        points: [
          'Critical replacement parts coordinated to reduce downtime windows',
          'Service-aligned part recommendations based on machine condition',
          'Support for both scheduled maintenance parts and urgent replacements',
        ],
      },
      {
        title: 'Breakdown Response & Inspection Work',
        points: [
          'Fault isolation and practical corrective action planning',
          'Safety-focused checks before equipment returns to duty',
          'Documentation support for maintenance follow-up and planning',
        ],
      },
      {
        title: 'Equipment Categories Covered',
        points: ['Reach stackers', 'Forklifts', 'Hydra cranes', 'Hydraulic systems and industrial support equipment'],
      },
      {
        title: 'Before & After Service Outcomes',
        points: [
          'From unstable hydraulic response to controlled, reliable operation',
          'From recurring forklift issues to smoother daily handling cycles',
          'From unexpected stoppages to planned maintenance confidence',
        ],
      },
      {
        title: 'Gallery Notes',
        text:
          'Each visual represents practical industrial service activity, including inspections, troubleshooting, maintenance execution, and equipment readiness validation for uptime-focused operations.',
      },
      {
        title: 'Need Similar Support for Your Fleet?',
        text:
          'Contact Sunrise Heavy Machine Service to discuss your machine condition, service goals, and maintenance priorities. We can help you build a reliable support plan tailored to your operations.',
      },
    ],
    links: [{ label: 'About Us', href: '/about-us' }],
    schemaType: 'WebPage',
  },
  {
    path: '/industries-we-serve',
    title: 'Industries We Serve',
    metaTitle: 'Industries We Serve | Sunrise Heavy Machine Service',
    metaDescription: 'Heavy equipment support for ports, warehouses, logistics and industrial operations.',
    heroDescription: 'Industry-focused maintenance and repair support for high-demand operations.',
    image: '/images/operations-bg.jpg',
    imageAlt: 'Industries we serve',
    overview:
      'Sunrise Heavy Machine Service provides industry-specific heavy equipment support for businesses where uptime, safety, and machine reliability directly impact productivity and revenue.',
    sections: [
      {
        title: 'Industries We Support',
        text:
          'Our service model is built for sectors that operate forklifts, reach stackers, hydra cranes, and hydraulic systems in high-demand environments. We align maintenance strategy with your operating realities, shift patterns, and service urgency.',
      },
      {
        title: 'Logistics & Warehousing',
        points: [
          'Common challenge: High daily forklift utilization causes wear, steering issues, and unexpected downtime.',
          'Our support: Periodic inspection, preventive maintenance services, and targeted forklift repair services.',
          'Value delivered: Better handling reliability, safer movement cycles, and reduced operational disruption.',
        ],
      },
      {
        title: 'Ports & Container Terminals',
        points: [
          'Common challenge: Reach stacker downtime can immediately affect container turnaround timelines.',
          'Our support: Reach stacker maintenance, hydraulic system troubleshooting, and quick breakdown response.',
          'Value delivered: Improved equipment availability for time-sensitive container operations.',
        ],
      },
      {
        title: 'Construction & Infrastructure',
        points: [
          'Common challenge: Hydra crane and support equipment face heavy load cycles and variable site conditions.',
          'Our support: Hydra crane maintenance, lifting-system checks, and on-site repair coordination.',
          'Value delivered: Safer lifting performance and fewer delays in project-critical workflows.',
        ],
      },
      {
        title: 'Manufacturing Plants',
        points: [
          'Common challenge: Equipment stoppage can interrupt production flow and material movement.',
          'Our support: Preventive maintenance planning, hydraulic diagnostics, and workshop-backed repairs.',
          'Value delivered: Consistent machine performance and more predictable maintenance windows.',
        ],
      },
      {
        title: 'Industrial Yards & Fleet Environments',
        points: [
          'Common challenge: Mixed equipment fleets require coordinated service and spare parts support.',
          'Our support: Multi-machine maintenance scheduling, inspection routines, and parts planning assistance.',
          'Value delivered: Better fleet readiness with reduced repeat faults across equipment categories.',
        ],
      },
      {
        title: 'Container Handling Operations',
        points: [
          'Common challenge: Repetitive heavy-duty cycles increase hydraulic and mechanical stress.',
          'Our support: Condition-based service interventions, hose and seal management, and performance checks.',
          'Value delivered: Reliable handling capacity and stronger uptime confidence during peak operations.',
        ],
      },
      {
        title: 'Why an Industry-Specific Service Approach Matters',
        text:
          'Different industries face different equipment risks. Our team does not apply generic maintenance routines; we build practical service priorities based on machine load profile, operating hours, environmental demands, and business continuity requirements.',
      },
      {
        title: 'Build the Right Support Plan',
        text:
          'If your operations rely on industrial equipment performance, Sunrise Heavy Machine Service can help you create a maintenance strategy that improves reliability, supports safety, and protects uptime.',
      },
    ],
    links: [{ label: 'Contact Us', href: '/contact-us' }],
    schemaType: 'WebPage',
  },
  {
    path: '/faq',
    title: 'Frequently Asked Questions',
    metaTitle: 'FAQ | Sunrise Heavy Machine Service',
    metaDescription: 'Answers about maintenance, spare parts, AMC services and breakdown support.',
    heroDescription: 'Common questions about our services, support model, and maintenance coverage.',
    image: '/images/service-spare-parts.jpg',
    imageAlt: 'FAQ for heavy equipment service and support',
    overview:
      'Find practical answers about reach stacker maintenance, forklift repair services, hydra crane support, hydraulic troubleshooting, preventive maintenance, and emergency breakdown assistance.',
    sections: [
      {
        title: 'Service Coverage FAQs',
        points: [
          'We support workshop and site-based service requirements depending on machine condition and urgency.',
          'Our team coordinates maintenance for logistics, ports, industrial yards, manufacturing plants, and warehouses.',
          'Preventive plans and annual maintenance contracts are available for uptime-focused operations.',
        ],
      },
      {
        title: 'When to Contact Our Team',
        points: [
          'Frequent hydraulic leaks, pressure drops, or overheating symptoms',
          'Recurring forklift faults affecting shift productivity',
          'Reach stacker or hydra crane performance instability during operations',
          'Need for planned inspections before peak workload periods',
        ],
      },
    ],
    links: [{ label: 'Contact Us', href: '/contact-us' }],
    schemaType: 'FAQPage',
    faq: [
      {
        question: 'Do you provide reach stacker maintenance services for container handling operations?',
        answer:
          'Yes. We provide reach stacker maintenance, inspection support, hydraulic troubleshooting, and breakdown assistance for operations where container movement uptime is critical.',
      },
      {
        question: 'What types of forklift repair services do you handle?',
        answer:
          'We support preventive servicing, fault diagnosis, steering and braking checks, hydraulic corrections, and practical repairs based on machine condition and workload demands.',
      },
      {
        question: 'Can Sunrise Heavy Machine Service support hydra crane maintenance?',
        answer:
          'Yes. Our hydra crane service includes maintenance checks, hydraulic line and lifting-system inspection, and corrective actions to improve safe operating reliability.',
      },
      {
        question: 'Do you troubleshoot hydraulic system issues on heavy equipment?',
        answer:
          'Absolutely. We diagnose hydraulic pressure loss, leakage issues, performance instability, and component wear, then recommend suitable repair or replacement support.',
      },
      {
        question: 'Do you offer preventive maintenance services?',
        answer:
          'Yes. Preventive maintenance plans are available to reduce unplanned downtime, extend equipment life, and improve operational predictability for fleets and industrial machines.',
      },
      {
        question: 'Is emergency equipment breakdown support available?',
        answer:
          'Yes. We provide urgent breakdown response support and prioritize equipment that directly affects active logistics, yard, or production operations.',
      },
      {
        question: 'Can you help with spare parts availability and replacement planning?',
        answer:
          'Yes. We assist with heavy equipment spare parts coordination, including service-critical components required for maintenance and urgent corrective work.',
      },
      {
        question: 'Which locations and industries do you typically serve?',
        answer:
          'We support clients in India across logistics hubs, warehouses, ports, terminals, industrial yards, and manufacturing environments, depending on service scope and scheduling.',
      },
      {
        question: 'Do you provide both workshop and on-site service support?',
        answer:
          'Yes. We offer workshop-based maintenance and field service support. The mode is chosen based on fault complexity, safety, and turnaround requirements.',
      },
      {
        question: 'How quickly can your team respond to service requests?',
        answer:
          'Response time depends on machine location, issue severity, and current service load, but urgent breakdown cases are prioritized for the earliest practical attendance.',
      },
      {
        question: 'Are annual maintenance contracts (AMC) available for industrial equipment?',
        answer:
          'Yes. Our AMC services include scheduled inspections, planned maintenance routines, and structured support to improve uptime and reduce recurring failures.',
      },
      {
        question: 'How often should heavy equipment be inspected and serviced?',
        answer:
          'Service frequency should align with machine usage intensity, operating environment, and OEM guidance. We help clients define practical schedules for each equipment category.',
      },
      {
        question: 'What are common signs that equipment needs immediate service?',
        answer:
          'Warning signs include unusual noise, hydraulic leakage, overheating, reduced lifting performance, delayed response, frequent alarms, and repeated stoppages during operation.',
      },
      {
        question: 'How does your service approach improve uptime and safety?',
        answer:
          'We focus on preventive maintenance, accurate diagnosis, quality service execution, and safety-conscious checks so equipment returns to operation with better reliability.',
      },
    ],
  },
];

function setMeta(name: string, content: string, isProperty = false) {
  const selector = isProperty ? `meta[property="${name}"]` : `meta[name="${name}"]`;
  let tag = document.head.querySelector(selector) as HTMLMetaElement | null;
  if (!tag) {
    tag = document.createElement('meta');
    if (isProperty) tag.setAttribute('property', name);
    else tag.setAttribute('name', name);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}

function setCanonical(url: string) {
  let link = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  link.setAttribute('href', url);
}

function setSchema(page: SitePage) {
  const scriptId = 'service-schema';
  const existing = document.getElementById(scriptId);
  if (existing) existing.remove();

  const graph: Record<string, unknown>[] = [orgSchema];
  if (page.schemaType === 'FAQPage' && page.faq) {
    graph.push({ '@type': 'FAQPage', mainEntity: page.faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) });
  } else {
    graph.push({ '@type': page.schemaType === 'Service' ? 'Service' : 'WebPage', name: page.title, description: page.metaDescription, url: `https://sunriseheavymachine.com${page.path}` });
  }

  const script = document.createElement('script');
  script.id = scriptId;
  script.type = 'application/ld+json';
  script.text = JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }, null, 2);
  document.head.appendChild(script);
}

function SitePageView({ page }: { page: SitePage }) {
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
            <div className="glass rounded-xl p-6 border border-white/10 md:col-span-2">
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
              <div className="flex flex-wrap gap-3">
                {page.links.map((link) => (
                  <a key={link.href} href={link.href} className="text-amber-400 hover:text-amber-300 underline underline-offset-4">
                    {link.label}
                  </a>
                ))}
              </div>
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
