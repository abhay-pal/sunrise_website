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
    overview: 'We provide dependable heavy equipment service solutions focused on uptime and safety.',
    sections: [{ title: 'Mission & Values', points: ['Safety-first execution', 'Transparent communication', 'Long-term customer support'] }],
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
    overview: 'Reach out for maintenance plans, emergency support, and spare parts requirements.',
    sections: [{ title: 'Contact Details', points: ['Phone: +91 97179 00209', 'Email: Sunrise7480@rediffmail.com', 'Location: Greater Noida, India'] }],
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
    overview: 'Representative visuals from field service, workshop operations, and maintenance support.',
    sections: [{ title: 'Project Highlights', points: ['Industrial maintenance projects', 'Breakdown response snapshots', 'Workshop support'] }],
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
    overview: 'We support diverse industrial sectors with tailored service plans and rapid response.',
    sections: [{ title: 'Industries', points: ['Ports and Terminals', 'Warehousing and Logistics', 'Manufacturing and Plants'] }],
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
    overview: 'Find quick answers to frequent service, coverage, and maintenance planning questions.',
    sections: [{ title: 'Service Questions', points: ['Do you provide on-site support? Yes.', 'Can we request scheduled maintenance plans? Yes, including preventive and AMC options.'] }],
    links: [{ label: 'Contact Us', href: '/contact-us' }],
    schemaType: 'FAQPage',
    faq: [
      { question: 'Do you provide on-site support?', answer: 'Yes, on-site support is available based on location and urgency.' },
      { question: 'Do you offer preventive and AMC plans?', answer: 'Yes, we provide both preventive maintenance and AMC options.' },
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
