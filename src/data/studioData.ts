import heroDesignerImg from '../assets/images/hero_designer_desk_1790094294753.jpg';
import bloomStudioImg from '../assets/images/bloom_studio_project_1790094310022.jpg';
import maisonDigitalImg from '../assets/images/maison_digital_project_1790094322825.jpg';
import novaDashboardImg from '../assets/images/nova_dashboard_project_1790094335866.jpg';
import clientPortraitImg from '../assets/images/client_portrait_sophia_1790094348436.jpg';
import studioSwatchImg from '../assets/images/studio_detail_swatch_1790094362156.jpg';

export interface Project {
  id: string;
  number: string;
  title: string;
  tagline: string;
  category: string;
  tags: string[];
  description: string;
  fullOverview: string;
  deliverables: string[];
  timeline: string;
  year: string;
  image: string;
  palette: string[];
  results: string;
}

export interface Service {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  deliverables: string[];
  iconName: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  timeline: string;
}

export const studioImages = {
  hero: heroDesignerImg,
  bloomStudio: bloomStudioImg,
  maisonDigital: maisonDigitalImg,
  novaDashboard: novaDashboardImg,
  clientPortrait: clientPortraitImg,
  studioSwatch: studioSwatchImg,
};

export const navigationLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Work', href: '#work' },
  { name: 'Process', href: '#process' },
  { name: 'Why Us', href: '#why-us' },
  { name: 'Contact', href: '#contact' },
];

export const servicesData: Service[] = [
  {
    id: 'web-design',
    number: '01',
    title: 'Web Design',
    shortDesc: 'Modern, responsive websites designed around your brand and audience.',
    fullDesc: 'We craft immersive digital spaces that blend editorial elegance with seamless usability. Every layout is intentionally constructed to engage visitors and turn casual readers into loyal advocates.',
    deliverables: ['Custom Layout Systems', 'Responsive Mobile Design', 'Interactive Prototypes', 'Design Systems & UI Kits'],
    iconName: 'Layout',
  },
  {
    id: 'ui-ux',
    number: '02',
    title: 'UI/UX Design',
    shortDesc: 'Clear and thoughtful interfaces that make digital products easier to use.',
    fullDesc: 'We balance human psychology with sleek digital aesthetics. Through user journey mapping and wireframing, we eliminate friction to create effortless digital experiences.',
    deliverables: ['User Flow Mapping', 'Wireframing & Prototyping', 'Accessibility Audits (WCAG)', 'Micro-Interactions'],
    iconName: 'Sparkles',
  },
  {
    id: 'branding',
    number: '03',
    title: 'Branding',
    shortDesc: 'Visual identities that give your business a distinctive and memorable presence.',
    fullDesc: 'From bespoke wordmarks and typography pairings to curated color palettes and brand voice guidelines, we create timeless identities that stand out in crowded markets.',
    deliverables: ['Logo & Wordmark Design', 'Color & Type Systems', 'Brand Style Guidelines', 'Social & Print Collateral'],
    iconName: 'Palette',
  },
  {
    id: 'creative-dev',
    number: '04',
    title: 'Creative Development',
    shortDesc: 'Fast, responsive and polished digital experiences built with modern technology.',
    fullDesc: 'Bringing designs to life with clean, modular code, fluid micro-interactions, and blazing performance that ranks well on search engines and delights users on every device.',
    deliverables: ['Modern Frontend (React/TypeScript)', 'Tailwind CSS Styling', 'SEO Optimization', 'Smooth Scroll Animations'],
    iconName: 'Code',
  },
];

export const projectsData: Project[] = [
  {
    id: 'bloom-studio',
    number: '01',
    title: 'Bloom Studio',
    tagline: 'Creative Brand & Floral Atelier Website',
    category: 'Web Design & Brand Identity',
    tags: ['Web Design', 'Branding', 'Editorial Layout'],
    description: 'A serene, editorial digital flagship with custom e-commerce storytelling and botanical animations.',
    fullOverview: 'Bloom Studio needed a digital flagship that echoed the calm, organic beauty of their botanical arrangements. We developed an editorial layout characterized by generous white space, delicate serif headlines, and fluid transition animations that elevate the purchase experience.',
    deliverables: ['Digital Brand Guidelines', 'Custom Responsive E-Commerce', 'Art Direction & Photography Curation', 'Micro-Interaction Suite'],
    timeline: '5 Weeks',
    year: '2026',
    image: bloomStudioImg,
    palette: ['#FFF9F8', '#F7C8D3', '#D96B84', '#292326'],
    results: '+140% Time spent on product pages, featured on site design awards.',
  },
  {
    id: 'maison-digital',
    number: '02',
    title: 'Maison Digital',
    tagline: 'Luxury Lifestyle & E-Commerce Concept',
    category: 'UI/UX & E-Commerce',
    tags: ['UI/UX Design', 'E-Commerce', 'Creative Direction'],
    description: 'Elevated digital shopping experience highlighting bespoke craftsmanship with tactile typography and fluid lookbooks.',
    fullOverview: 'For Maison Digital, an artisanal fashion and lifestyle boutique, the objective was to replicate the tactile intimacy of visiting a private Paris showroom. We designed an interactive lookbook, minimalist filtering system, and quick checkout flow that feels frictionless.',
    deliverables: ['Full Design Token Library', 'Interactive Seasonal Lookbook', 'Mobile-First Checkout Flow', 'Customer Account Dashboard'],
    timeline: '6 Weeks',
    year: '2026',
    image: maisonDigitalImg,
    palette: ['#FFFBF9', '#FCE5E9', '#B64761', '#3A3236'],
    results: '2.4x Conversion uplift on mobile devices, seamless launch experience.',
  },
  {
    id: 'nova-dashboard',
    number: '03',
    title: 'Nova Dashboard',
    tagline: 'Modern Digital Product & Analytics Platform',
    category: 'Product Design & Design System',
    tags: ['Product UI', 'Dashboard', 'Design System'],
    description: 'Clean, calming SaaS interface designed for creative agencies to visualize growth metrics and client pipelines without visual noise.',
    fullOverview: 'Nova wanted to challenge the chaotic, cluttered norm of enterprise dashboards. We designed an airy, intuitive data workspace with soft blush indicators, human-readable insight summaries, and modular widget cards that users love spending their mornings in.',
    deliverables: ['End-to-End Product Design', 'Component Library in Figma', 'Data Visualization Hierarchy', 'Light Theme Polish'],
    timeline: '8 Weeks',
    year: '2025',
    image: novaDashboardImg,
    palette: ['#FFFFFF', '#F7C8D3', '#756B70', '#292326'],
    results: '98% Client satisfaction rating, 40% reduction in customer support onboarding tickets.',
  },
];

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Discover',
    subtitle: 'Vision & Insights',
    description: 'We dive into your business goals, target audience, competitive landscape, and aesthetic aspirations through structured discovery sessions.',
    timeline: 'Week 1',
  },
  {
    number: '02',
    title: 'Plan',
    subtitle: 'Strategy & Wireframes',
    description: 'We map user journeys, define information architecture, and create interactive wireframes to establish a bulletproof structural foundation.',
    timeline: 'Week 2',
  },
  {
    number: '03',
    title: 'Design',
    subtitle: 'Visuals & Prototypes',
    description: 'We turn strategy into an elevated visual identity with tactile typography, bespoke color harmonies, responsive layouts, and interactive prototypes.',
    timeline: 'Weeks 3–4',
  },
  {
    number: '04',
    title: 'Launch',
    subtitle: 'Code, Polish & Deliver',
    description: 'We develop the experience with clean code, fine-tune micro-interactions, audit performance and accessibility, and launch smoothly.',
    timeline: 'Weeks 5–6',
  },
];

export const whyUsPoints = [
  {
    title: 'Thoughtful Strategy',
    description: 'We design with intention. Every layout decision, typographic scale, and interactive gesture directly supports your business goals.',
    iconName: 'Compass',
  },
  {
    title: 'Clean Visual Design',
    description: 'Minimalism with personality. We balance generous whitespace, warm blush tones, and editorial typography to create unforgettable impressions.',
    iconName: 'Feather',
  },
  {
    title: 'Responsive Experiences',
    description: 'From 320px mobile screens to 4K ultra-wide monitors, your digital presence adapts gracefully with fast, accessible web standards.',
    iconName: 'Smartphone',
  },
  {
    title: 'Attention to Detail',
    description: 'We obsess over the micro-details that make a brand feel premium—crisp typography kerning, tactile hover states, and smooth transitions.',
    iconName: 'Eye',
  },
];

export const studioStats = [
  { value: '30+', label: 'Creative Projects Completed' },
  { value: '12+', label: 'Digital Experiences Launched' },
  { value: '100%', label: 'Design & Craft Focused' },
];

export const primaryTestimonial = {
  quote:
    'Working with the studio made the whole process feel simple. The final website looks beautiful, feels easy to use, and finally represents our brand properly.',
  author: 'Sophia Laurent',
  role: 'Founder & Creative Director',
  company: "Maison L'Art",
  rating: 5,
  impact: '185% Increase in qualified client inquiries',
  image: clientPortraitImg,
};
