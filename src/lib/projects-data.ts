export interface Project {
  slug: string;
  title: string;
  category: string;
  date: string;
  client: string;
  description: string;
  heroImage: string;
  images: string[];
  challenge: string;
  solution: string;
  results: string[];
  tags: string[];
}

export const projects: Project[] = [
  {
    slug: 'infographic-design',
    title: 'Infographic & Data Design',
    category: 'Graphic Design',
    date: 'December 2026',
    client: 'Kaviya Boutique',
    description: 'A comprehensive infographic and data visualization design project aimed at making complex datasets visually appealing and easy to digest.',
    heroImage: '/assets/graph.png',
    images: [
      '/assets/graph.png',
    ],
    challenge: 'The client needed to present heavy statistical data to their investors without overwhelming them with boring, dense spreadsheets.',
    solution: 'We designed a series of engaging infographics and custom graphical charts that highlight key metrics through compelling visual storytelling and modern aesthetic principles.',
    results: [
      '100% positive investor feedback on clarity',
      'Adopted as the standard for annual reports',
      'Enhanced overall brand credibility and trust',
    ],
    tags: ['Graphic Design', 'Infographics', 'Visual Identity', 'Illustration'],
  },
  {
    slug: 'corporate-web-platform',
    title: 'Corporate Web Platform',
    category: 'Web Development',
    date: 'November 2026',
    client: 'Liro Studios',
    description: 'A robust, high-performance web platform designed to handle heavy traffic and deliver a flawless user experience across all devices.',
    heroImage: '/assets/web.png',
    images: [
      '/assets/web.png',
    ],
    challenge: 'The client needed a complete overhaul of their legacy website, requiring a scalable architecture capable of supporting international traffic spikes while maintaining sub-second load times.',
    solution: 'We architected a modern tech stack utilizing Next.js and optimized static generation, combined with a custom design system that perfectly aligns with their brand identity.',
    results: [
      '200% improvement in page load speeds',
      '45% increase in lead generation',
      'Seamless migration of 10,000+ legacy pages',
    ],
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind'],
  },
  {
    slug: 'nurma-ecommerce',
    title: 'Modern E-Commerce Store',
    category: 'E-Commerce Platform',
    date: 'February 2027',
    client: 'Nurma',
    description: 'A premium, high-conversion e-commerce platform built for a seamless shopping experience across all devices.',
    heroImage: '/assets/ecomm.png',
    images: [
      '/assets/ecomm.png',
    ],
    challenge: 'The client needed an elegant digital storefront that could handle high traffic volumes during product drops without compromising on aesthetic quality.',
    solution: 'We developed a headless e-commerce solution using Next.js and Shopify, ensuring lightning-fast page loads, fluid cart interactions, and a beautiful UI.',
    results: [
      'Increased conversion rate by 42%',
      'Achieved sub-second product page loads',
      'Zero downtime during peak sales events',
    ],
    tags: ['E-Commerce', 'Next.js', 'Shopify', 'Tailwind'],
  },
  {
    slug: 'thirupathi-steels-erp',
    title: 'Enterprise ERP System',
    category: 'Enterprise System',
    date: 'January 2027',
    client: 'Thirupathi Steels',
    description: 'A comprehensive, cloud-based ERP solution designed to streamline manufacturing, inventory, and supply chain operations.',
    heroImage: '/assets/erp.png',
    images: [
      '/assets/erp.png',
    ],
    challenge: 'The client faced operational bottlenecks due to fragmented legacy systems that could not track raw materials and production output in real time.',
    solution: 'We developed a unified ERP platform that integrates inventory management, automated billing, and live production tracking through a secure centralized database.',
    results: [
      '60% reduction in inventory discrepancies',
      'Saved 40+ hours per week in manual data entry',
      'End-to-end visibility across 5 manufacturing units',
    ],
    tags: ['ERP', 'Enterprise', 'Node.js', 'React'],
  },
  {
    slug: 'brand-logo-identity',
    title: 'Brand Logo Identity',
    category: 'Graphic Design',
    date: 'March 2027',
    client: 'Weaver`s wisdom',
    description: 'A striking logo and visual identity system created to elevate the brand presence of an emerging tech startup.',
    heroImage: '/assets/logo.png',
    images: [
      '/assets/logo.png',
    ],
    challenge: 'The client needed a versatile, scalable logo that communicates innovation and trust across both digital platforms and physical print.',
    solution: 'We developed a minimalist logo mark combined with a custom typographic treatment and a vibrant, modern color palette.',
    results: [
      'Successfully rolled out across 50+ touchpoints',
      'Increased brand recognition by 80%',
      'Nominated for Best Startup Identity 2027',
    ],
    tags: ['Logo Design', 'Branding', 'Visual Identity', 'Typography'],
  },
];
