export type ServiceCard = {
  title: string;
  description: string;
  capacity: string;
  materials: string[];
  applications: string[];
  cta: string;
};

export type ProductCard = {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  useCase: string;
};

export type PortfolioCard = {
  id: string;
  title: string;
  category: string;
  before: string;
  after: string;
  summary: string;
  image: string;
};

export const companyProfile = {
  name: "Laser Tech",
  location: "Mawanella, Sri Lanka",
  tagline: "The Art of Engraving, Uniquely Yours.",
  intro:
    "Laser Tech is a professional laser cutting, laser engraving, fiber laser marking, and CNC machining company dedicated to precision-crafted products and customized services for businesses, organizations, and individual customers across Sri Lanka.",
  about:
    "With advanced technology, modern equipment, and a commitment to excellence, we transform creative concepts into high-quality finished products with accuracy, consistency, and reliable turnaround times.",
  ceo:
    "At Laser Tech, every project gets exceptional attention to detail. We combine modern technology with skilled craftsmanship to create durable, professionally finished products that exceed expectations.",
  ceoName: "Mohamed Afraz",
  ceoTitle: "Chief Executive Officer",
};

export const keyStats = [
  { label: "Founded", value: "2019" },
  { label: "Base", value: "Mawanella" },
  { label: "Core Services", value: "5+" },
  { label: "Machine Types", value: "4" },
];

export const machineCapabilities = [
  { label: "Laser Cutting", value: "3ft × 3ft to 8ft × 4ft" },
  { label: "CNC Routing", value: "8ft × 4ft" },
  { label: "Laser Marking", value: "2ft × 2ft" },
  { label: "Fiber Laser", value: "8ft × 4ft" },
];

export const services: ServiceCard[] = [
  {
    title: "Laser Cutting Services",
    description:
      "High-precision cutting for clean edges, intricate shapes, and repeatable production runs.",
    capacity: "3ft × 3ft, 4ft × 4ft, 4ft × 6ft, 6ft × 4ft, 8ft × 4ft",
    materials: ["Acrylic", "MDF", "Plywood", "Wood", "Leather", "Cardboard"],
    applications: [
      "Sign boards",
      "Name boards",
      "Wedding invitations",
      "Decorative panels",
      "Promotional products",
      "Industrial components",
    ],
    cta: "/quote",
  },
  {
    title: "CNC Routing & Machining",
    description:
      "Structural carving, shaping, engraving, and machining for large-format production and architectural work.",
    capacity: "8ft × 4ft router bed",
    materials: ["Wood", "MDF", "Plywood", "Acrylic", "Composite boards"],
    applications: [
      "Furniture components",
      "Decorative carvings",
      "Wall art",
      "Architectural designs",
      "Custom manufacturing",
      "Industrial projects",
    ],
    cta: "/quote",
  },
  {
    title: "Laser Marking Services",
    description:
      "Permanent, high-contrast marking for identification, branding, and traceability.",
    capacity: "2ft × 2ft marking field",
    materials: ["Metal", "Brass", "Steel", "Anodized surfaces", "Promotional items"],
    applications: [
      "Logo marking",
      "Serial numbers",
      "QR codes",
      "Product identification",
      "Corporate branding",
    ],
    cta: "/contact",
  },
  {
    title: "Fiber Laser Services",
    description:
      "Durable metal marking and cutting for industrial applications and precision part identification.",
    capacity: "8ft × 4ft production area",
    materials: ["Stainless steel", "Aluminum", "Brass", "Copper"],
    applications: [
      "Name plates",
      "Equipment identification",
      "Custom metal products",
      "Industrial parts",
      "Brand tags",
    ],
    cta: "/contact",
  },
  {
    title: "Custom Design & Production",
    description:
      "End-to-end product development for one-off pieces and large production runs.",
    capacity: "Concept to production workflow",
    materials: ["Acrylic", "Wood", "MDF", "Metal", "Paper", "Mixed media"],
    applications: [
      "Business signage",
      "Trophies & awards",
      "Wedding invitations",
      "Personalized gifts",
      "Corporate gifts",
      "Promotional products",
    ],
    cta: "/contact",
  },
];

export const timeline = [
  {
    year: "2019",
    title: "Company founded in Mawanella",
    detail:
      "Laser Tech began as the first laser cutting and engraving company in the area, serving local customers and businesses.",
  },
  {
    year: "2020–2022",
    title: "Service expansion",
    detail:
      "The team increased production capacity and delivered signage, personalized gifts, and custom laser-cut products.",
  },
  {
    year: "2023–2024",
    title: "Technology growth",
    detail:
      "CNC machining and fiber laser marking were added to support advanced cutting, carving, and traceability work.",
  },
  {
    year: "2025–2026",
    title: "Nationwide ambitions",
    detail:
      "Laser Tech continues to grow with improved efficiency, stronger customer service, and larger commercial and industrial projects.",
  },
];

export const mission = {
  mission:
    "To provide innovative, precise, and high-quality laser cutting, laser engraving, fiber laser marking, and CNC machining solutions that exceed customer expectations.",
  vision:
    "To be Sri Lanka's leading laser cutting and precision manufacturing company, recognized for innovation, quality, and customer satisfaction.",
};

export const products: ProductCard[] = [
  {
    id: "business-signage",
    title: "Business Signage",
    category: "Signage",
    description: "Indoor and outdoor signage solutions for offices, shops, and commercial spaces.",
    image: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=900&q=80",
    useCase: "Storefronts, office reception, brand launches",
  },
  {
    id: "name-boards",
    title: "Name Boards",
    category: "Signage",
    description: "Custom name boards for businesses, institutions, offices, and residences.",
    image: "https://images.unsplash.com/photo-1519985176271-adb1088fa94c?auto=format&fit=crop&w=900&q=80",
    useCase: "Office identification and wayfinding",
  },
  {
    id: "trophies",
    title: "Trophies & Awards",
    category: "Awards",
    description: "Customized trophies, plaques, medals, and recognition awards.",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=900&q=80",
    useCase: "Competitions, corporate recognition, ceremonies",
  },
  {
    id: "wedding-invitations",
    title: "Wedding Invitations",
    category: "Wedding",
    description: "Elegant laser-cut wedding invitations and event stationery.",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=900&q=80",
    useCase: "Weddings, engagements, milestone events",
  },
  {
    id: "personalized-gifts",
    title: "Personalized Gifts",
    category: "Gifts",
    description: "Unique custom-made gifts designed for special occasions.",
    image: "https://images.unsplash.com/photo-1607344645866-009c320b63e0?auto=format&fit=crop&w=900&q=80",
    useCase: "Birthdays, anniversaries, celebrations",
  },
  {
    id: "corporate-gifts",
    title: "Corporate Gifts",
    category: "Gifts",
    description: "Branded gifts and promotional sets tailored for corporate clients.",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=900&q=80",
    useCase: "Employee gifts, client gifting, brand promotions",
  },
  {
    id: "promotional-products",
    title: "Promotional Products",
    category: "Promotional",
    description: "Marketing products designed to strengthen brand visibility.",
    image: "https://images.unsplash.com/photo-1518081461904-9d8f2ecf7bc6?auto=format&fit=crop&w=900&q=80",
    useCase: "Exhibitions, campaigns, trade shows",
  },
  {
    id: "decorative-items",
    title: "Decorative Items",
    category: "Decor",
    description: "Creative decorative products for homes, offices, and events.",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
    useCase: "Interiors, events, feature displays",
  },
  {
    id: "industrial-components",
    title: "Industrial Components",
    category: "Industrial",
    description: "Precision-cut and engraved components for industrial applications.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=900&q=80",
    useCase: "Engineering, manufacturing, asset marking",
  },
  {
    id: "custom-made-products",
    title: "Custom-Made Products",
    category: "Custom",
    description: "Specialized products manufactured to your design and specification.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80",
    useCase: "One-off commissions and bespoke projects",
  },
  {
    id: "photo-frames",
    title: "Personalized Photo Frames",
    category: "Gifts",
    description: "Layered keepsake frames with names, dates, and custom wording.",
    image: "/branding-print.jpg",
    useCase: "Memorable gifts and home décor",
  },
  {
    id: "acrylic-desks",
    title: "Acrylic Desk Signs",
    category: "Signage",
    description: "Minimal acrylic desk plates for reception counters and office desks.",
    image: "/acrylic-engraving.jpg",
    useCase: "Workspaces, reception desks, meeting rooms",
  },
  {
    id: "machine-tags",
    title: "Asset & Machine Tags",
    category: "Industrial",
    description: "Serialized metal tags for traceability and production management.",
    image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&w=900&q=80",
    useCase: "Factory assets, equipment IDs, serial numbers",
  },
];

export const featuredProducts = products.slice(0, 4);

export const portfolioProjects: PortfolioCard[] = [
  {
    id: "before-after-signboard",
    title: "3D Floating Gold Signboard",
    category: "Signage",
    before: "Plain shopfront fascia",
    after: "Premium layered acrylic brand wall",
    summary: "A clean retail frontage transformed into a high-visibility signature sign.",
    image: "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "before-after-marking",
    title: "Fiber Laser Serial Plates",
    category: "Industrial",
    before: "Unmarked steel plates",
    after: "Traceable QR and serial tags",
    summary: "Permanent industrial marking for inventory and equipment control.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "before-after-wedding",
    title: "Wedding Invitation Suite",
    category: "Creative",
    before: "Standard paper invite",
    after: "Layered laser-cut keepsake card",
    summary: "Event stationery upgraded into a premium presentation piece.",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "before-after-router",
    title: "Architectural CNC Panel",
    category: "CNC Routing",
    before: "Flat MDF board",
    after: "Detailed decorative carved screen",
    summary: "A structural wall panel finished with precise router detailing.",
    image: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "before-after-award",
    title: "Recognition Trophy Series",
    category: "Creative",
    before: "Generic award stock",
    after: "Custom branded recognition trophy",
    summary: "Corporate awards shaped to match the event identity and message.",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "before-after-woodcover",
    title: "Engraved Wooden Notebook",
    category: "Creative",
    before: "Plain notebook cover",
    after: "Personalized engraved journal",
    summary: "A simple stationery item elevated into a premium gift piece.",
    image: "/branding-print.jpg",
  },
];

export const contactInfo = {
  phone: "+94 75 799 1141",
  email: "lasertech0024@gmail.com",
  website: "www.lasertech.lk",
  address: "33/1 Kandy - Colombo Rd, Mawanella, Sri Lanka",
  whatsapp: "94757991141",
  hours: ["Mon - Fri: 8:30 AM - 6:00 PM", "Sat: 9:00 AM - 4:00 PM", "Sun: By appointment"],
};
