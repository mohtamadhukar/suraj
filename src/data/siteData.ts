// ── Company Information ──────────────────────────────────────────────────────

export const company = {
  name: 'Suraj Industries',
  tagline: 'Precision Plastic Manufacturing for India\'s Leading Brands',
  description: 'Established manufacturer of high-quality plastic components for fan industry and custom OEM solutions. Trusted by leading brands for over 25 years.',
  foundedYear: 1998,
  phone: '+91-XXXXX-XXXXX',
  email: 'info@surajindustries.com',
  whatsapp: '91XXXXXXXXXX',
  address: {
    line1: 'Plot No. XX, Industrial Area',
    line2: 'Phase II, Sector XX',
    city: 'City',
    state: 'State',
    pin: 'XXXXXX',
    country: 'India',
  },
  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000!2d77.0!3d28.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDMwJzAwLjAiTiA3N8KwMDAnMDAuMCJF!5e0!3m2!1sen!2sin!4v1700000000000',
  stats: [
    { label: 'Years of Experience', value: '25+' },
    { label: 'Products Manufactured', value: '500+' },
    { label: 'Clients Served', value: '100+' },
    { label: 'Monthly Capacity', value: '50,000+' },
  ],
  whyChooseUs: [
    {
      title: 'Decades of Experience',
      description: 'Over 25 years of expertise in precision plastic manufacturing for the fan industry.',
      icon: 'experience',
    },
    {
      title: 'Uncompromising Quality',
      description: 'ISO-certified processes with rigorous quality control at every stage of production.',
      icon: 'quality',
    },
    {
      title: 'Large-Scale Capacity',
      description: 'State-of-the-art facility capable of producing 50,000+ units per month.',
      icon: 'capacity',
    },
    {
      title: 'Custom OEM Solutions',
      description: 'End-to-end custom manufacturing from design to delivery for your unique requirements.',
      icon: 'custom',
    },
  ],
};

// ── Products ─────────────────────────────────────────────────────────────────

export interface Product {
  id: string;
  name: string;
  specs: string;
  image: string;
  category: string;
}

export interface ProductCategory {
  id: string;
  title: string;
  description: string;
  products: Product[];
}

export const productCategories: ProductCategory[] = [
  {
    id: 'plastic-parts',
    title: 'Plastic Parts for Fans',
    description: 'High-precision injection-moulded components designed for durability, perfect fit, and consistent performance across all major fan brands.',
    products: [
      { id: 'fan-blade', name: 'Fan Blades', specs: 'PP/ABS, 16"–24" sizes, custom pitch angles', image: '/images/products/fan-blade.jpg', category: 'plastic-parts' },
      { id: 'motor-housing', name: 'Motor Housings', specs: 'ABS/PP, precision-moulded, heat-resistant', image: '/images/products/motor-housing.jpg', category: 'plastic-parts' },
      { id: 'guard', name: 'Safety Guards', specs: 'PP, front & rear, finger-safe spacing', image: '/images/products/guard.jpg', category: 'plastic-parts' },
      { id: 'base-plate', name: 'Base Components', specs: 'ABS, weighted bases, anti-vibration design', image: '/images/products/base-plate.jpg', category: 'plastic-parts' },
    ],
  },
  {
    id: 'table-fans',
    title: 'Table Fans',
    description: 'Complete assembled table fans ready for retail or B2B distribution, manufactured with in-house components for superior quality control.',
    products: [
      { id: 'table-fan-16', name: '16" Table Fan', specs: '3-speed, oscillating, 55W motor', image: '/images/products/table-fan-16.jpg', category: 'table-fans' },
      { id: 'table-fan-18', name: '18" Table Fan', specs: '3-speed, oscillating, 65W motor, wide sweep', image: '/images/products/table-fan-18.jpg', category: 'table-fans' },
      { id: 'table-fan-24', name: '24" Industrial Table Fan', specs: 'Heavy-duty, metal guard, 100W motor', image: '/images/products/table-fan-24.jpg', category: 'table-fans' },
    ],
  },
  {
    id: 'custom-oem',
    title: 'Custom OEM Manufacturing',
    description: 'End-to-end custom plastic manufacturing — from design consultation to bulk production. We partner with brands to create components tailored to their exact specifications.',
    products: [
      { id: 'custom-part', name: 'Custom Moulded Parts', specs: 'Any shape, PP/ABS/Nylon, MOQ: 5,000 pcs', image: '/images/products/custom-part.jpg', category: 'custom-oem' },
      { id: 'custom-housing', name: 'Custom Enclosures', specs: 'Appliance housings, custom colour matching', image: '/images/products/custom-housing.jpg', category: 'custom-oem' },
      { id: 'custom-assembly', name: 'Assembly Services', specs: 'Full sub-assembly with QC, packaging, labelling', image: '/images/products/custom-assembly.jpg', category: 'custom-oem' },
    ],
  },
];

// ── Clients ──────────────────────────────────────────────────────────────────

export const clients = [
  { name: 'Client 1', logo: '/images/clients/client-1.jpg' },
  { name: 'Client 2', logo: '/images/clients/client-2.jpg' },
  { name: 'Client 3', logo: '/images/clients/client-3.jpg' },
  { name: 'Client 4', logo: '/images/clients/client-4.jpg' },
  { name: 'Client 5', logo: '/images/clients/client-5.jpg' },
  { name: 'Client 6', logo: '/images/clients/client-6.jpg' },
  { name: 'Client 7', logo: '/images/clients/client-7.jpg' },
  { name: 'Client 8', logo: '/images/clients/client-8.jpg' },
  { name: 'Client 9', logo: '/images/clients/client-9.jpg' },
  { name: 'Client 10', logo: '/images/clients/client-10.jpg' },
];

export const testimonials = [
  {
    quote: 'Suraj Industries has been our trusted supplier for over a decade. Their consistency in quality and on-time delivery is unmatched in the industry.',
    author: 'Rajesh Kumar',
    designation: 'Head of Procurement',
    company: 'Leading Fan Manufacturer',
  },
  {
    quote: 'We switched to Suraj Industries for our OEM requirements and saw a 30% improvement in component consistency. Highly recommended for precision parts.',
    author: 'Priya Sharma',
    designation: 'Operations Director',
    company: 'National Appliance Brand',
  },
  {
    quote: 'Their ability to scale production while maintaining quality has made them an invaluable partner for our growing business.',
    author: 'Amit Patel',
    designation: 'Supply Chain Manager',
    company: 'Regional Electronics Company',
  },
];

// ── About / Manufacturing ────────────────────────────────────────────────────

export const about = {
  story: [
    'Founded in 1998, Suraj Industries began as a small workshop with a single injection moulding machine and a vision to deliver world-class plastic components to India\'s fan industry. What started as a family enterprise has grown into one of the region\'s most trusted manufacturing partners.',
    'Over 25 years, we have invested steadily in technology, talent, and processes — expanding from basic component manufacturing to full-service OEM solutions. Today, our state-of-the-art facility houses over 20 advanced machines and employs a skilled team of 150+ professionals.',
    'Our client relationships, some spanning two decades, are built on a simple promise: consistent quality, competitive pricing, and reliable delivery. We are proud to supply to some of India\'s most recognized consumer brands.',
  ],
  mission: 'To be India\'s most reliable manufacturer of precision plastic components, delivering consistent quality and innovation that helps our clients build better products.',
  vision: 'To become the preferred OEM partner for plastic manufacturing across South Asia, setting industry benchmarks for quality, sustainability, and operational excellence.',
  founder: {
    name: 'Mr. Suraj Gupta',
    title: 'Founder & Managing Director',
    image: '/images/team/founder.jpg',
    bio: 'With over 30 years in the plastics manufacturing industry, Mr. Suraj Gupta founded the company with a commitment to precision engineering and customer-first values. Under his leadership, the company has grown from a single-machine workshop to a full-scale manufacturing facility serving India\'s top brands.',
  },
};

export const certifications = [
  { name: 'ISO 9001:2015', description: 'Quality Management System certified', icon: 'iso' },
  { name: 'BIS Certified', description: 'Bureau of Indian Standards compliant products', icon: 'bis' },
  { name: 'ISO 14001:2015', description: 'Environmental Management System certified', icon: 'iso-env' },
];

export const manufacturing = {
  factoryDescription: 'Our 20,000 sq. ft. manufacturing facility is equipped with modern injection moulding machines, automated quality inspection systems, and dedicated assembly lines. Located in a well-connected industrial zone, we ensure efficient logistics for clients across India.',
  factoryImage: '/images/factory/factory-overview.jpg',
  machinery: [
    { name: 'Injection Moulding Machines', description: 'Fleet of 20+ machines, 80-ton to 650-ton capacity, for components of all sizes.', icon: 'machine' },
    { name: 'CNC Tool Room', description: 'In-house mould design and maintenance for rapid prototyping and tooling.', icon: 'cnc' },
    { name: 'Automated Assembly Line', description: 'Semi-automated lines for fan assembly with integrated quality checkpoints.', icon: 'assembly' },
    { name: 'Quality Testing Lab', description: 'Comprehensive testing for dimensional accuracy, material strength, and finish quality.', icon: 'testing' },
    { name: 'Colour Matching System', description: 'Computerised colour matching for precise, consistent colour across production runs.', icon: 'colour' },
    { name: 'Packaging Unit', description: 'In-house packaging with custom branding and labelling for ready-to-ship products.', icon: 'packaging' },
  ],
  capacityStats: [
    { label: 'Production Floor', value: '20,000 sq. ft.' },
    { label: 'Machines', value: '20+' },
    { label: 'Monthly Output', value: '50,000+ units' },
    { label: 'Team Size', value: '150+' },
  ],
  qualityProcess: [
    { step: 1, title: 'Raw Material Inspection', description: 'Every batch of raw material is tested for grade, purity, and consistency before entering production.' },
    { step: 2, title: 'In-Process Quality Checks', description: 'Dedicated QC staff monitor critical parameters — weight, dimensions, surface finish — during production runs.' },
    { step: 3, title: 'Automated Visual Inspection', description: 'Camera-based systems detect surface defects, flash, and colour variations in real-time.' },
    { step: 4, title: 'Final Product Testing', description: 'Finished products undergo functional testing, load testing, and dimensional verification before dispatch.' },
    { step: 5, title: 'Packaging & Dispatch QC', description: 'Final audit of packaging integrity, labelling accuracy, and shipment quantities before release.' },
  ],
};

// ── Navigation ───────────────────────────────────────────────────────────────

export const navigation = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Products', href: '/products' },
  { label: 'Manufacturing', href: '/manufacturing' },
  { label: 'Clients', href: '/clients' },
  { label: 'Contact', href: '/contact' },
];

// ── SEO Meta ─────────────────────────────────────────────────────────────────

export const seoMeta: Record<string, { title: string; description: string }> = {
  home: {
    title: 'Suraj Industries — Precision Plastic Manufacturing for Fan Industry & OEM',
    description: 'Leading manufacturer of plastic fan components, table fans, and custom OEM parts. 25+ years of trusted quality. Request a quote today.',
  },
  about: {
    title: 'About Us — Suraj Industries | 25+ Years of Manufacturing Excellence',
    description: 'Learn about Suraj Industries — our story, mission, leadership, and ISO-certified quality processes that make us a trusted manufacturing partner.',
  },
  products: {
    title: 'Products — Fan Components, Table Fans & Custom OEM | Suraj Industries',
    description: 'Explore our range of precision plastic fan components, assembled table fans, and custom OEM manufacturing services. Enquire now for bulk pricing.',
  },
  manufacturing: {
    title: 'Manufacturing & Infrastructure — Suraj Industries',
    description: 'State-of-the-art 20,000 sq. ft. facility with 20+ injection moulding machines. Learn about our manufacturing capabilities and quality control process.',
  },
  clients: {
    title: 'Our Clients — Trusted by India\'s Leading Brands | Suraj Industries',
    description: 'Suraj Industries is a trusted supplier to top fan manufacturers and consumer brands across India. See our client partnerships and testimonials.',
  },
  contact: {
    title: 'Contact Us — Request a Quote | Suraj Industries',
    description: 'Get in touch for bulk orders, custom manufacturing quotes, or partnership enquiries. Reach us by phone, email, or WhatsApp.',
  },
};

// ── Form Config ──────────────────────────────────────────────────────────────

export const formConfig = {
  web3formsAccessKey: 'YOUR_WEB3FORMS_ACCESS_KEY',
  whatsappMessage: 'Hello! I am interested in your products and would like to know more.',
};
