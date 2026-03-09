import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/sections/Footer';

type ServiceConfig = {
  path: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  heroDescription: string;
  image: string;
  imageAlt: string;
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
  return <ServicePage page={page} />;
}

