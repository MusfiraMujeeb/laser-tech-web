export type ProductCategory =
  | "Signage"
  | "Illuminated Signs"
  | "Decorative Panels"
  | "Awards"
  | "Personalized Gifts"
  | "Keychains"
  | "Name Plates"
  | "Brand Display";

export interface ProductItem {
  id: string;
  slug: string;
  title: string;
  category: ProductCategory;
  subcategory: string;
  description: string;
  material: string;
  price?: string;
  image: string;
  featured?: boolean;
  tags: string[];
}

export const productItems: ProductItem[] = [
  {
    id: "veloura-signboard",
    slug: "veloura-signboard",
    title: "Veloura Business Signboard",
    category: "Signage",
    subcategory: "Corporate Branding",
    description: "Premium storefront logo board for business identity and elegant commercial presentation.",
    material: "Acrylic / Printed Board",
    price: "On request",
    image: "/products/veloura-signboard.jpg",
    featured: true,
    tags: ["branding", "storefront", "logo"],
  },
  {
    id: "runner-neon-sign",
    slug: "runner-neon-sign",
    title: "Runner Neon Wall Sign",
    category: "Illuminated Signs",
    subcategory: "Fitness / Lifestyle",
    description: "Illuminated neon-style sign designed for gyms, clubs, and modern interiors.",
    material: "LED Neon Acrylic",
    price: "On request",
    image: "/products/runner-neon-sign.jpg",
    featured: true,
    tags: ["neon", "led", "gym"],
  },
  {
    id: "planet-fitness-board",
    slug: "planet-fitness-board",
    title: "Planet Fitness Signboard",
    category: "Signage",
    subcategory: "Fitness Branding",
    description: "Commercial signboard for a fitness brand with strong visibility and clean presentation.",
    material: "Acrylic / LED",
    price: "On request",
    image: "/products/planet-fitness-board.jpg",
    tags: ["fitness", "signage", "brand"],
  },
  {
    id: "peacock-neon-sign",
    slug: "peacock-neon-sign",
    title: "Peacock Neon Art Sign",
    category: "Illuminated Signs",
    subcategory: "Decorative Art",
    description: "Decorative peacock-themed illuminated sign for feature walls and display spaces.",
    material: "LED Acrylic",
    price: "On request",
    image: "/products/peacock-neon-sign.jpg",
    tags: ["art", "decor", "neon"],
  },
  {
    id: "green-circle-wall-sign",
    slug: "green-circle-wall-sign",
    title: "Circular Illuminated Wall Sign",
    category: "Illuminated Signs",
    subcategory: "Brand Logo Board",
    description: "Round illuminated logo sign for premium wall branding and interiors.",
    material: "Acrylic / LED",
    price: "On request",
    image: "/products/green-circle-wall-sign.jpg",
    tags: ["circle", "brand", "led"],
  },
  {
    id: "nova-bridal-signboard",
    slug: "nova-bridal-signboard",
    title: "Nova Bridal Beauty Parlour Board",
    category: "Signage",
    subcategory: "Retail Branding",
    description: "Custom retail signboard created for beauty parlour and bridal business branding.",
    material: "Printed Board / Acrylic",
    price: "On request",
    image: "/products/nova-bridal-signboard.jpg",
    tags: ["retail", "beauty", "branding"],
  },
  {
    id: "new-kandy-bakehouse",
    slug: "new-kandy-bakehouse",
    title: "New Kandy Bakehouse Sign",
    category: "Signage",
    subcategory: "Food Branding",
    description: "Storefront signboard designed for bakery and food retail use.",
    material: "Acrylic / Printed Board",
    price: "On request",
    image: "/products/new-kandy-bakehouse.jpg",
    tags: ["bakery", "food", "sign"],
  },
  {
    id: "nurora-academy-sign",
    slug: "nurora-academy-sign",
    title: "Nurora Academy Signboard",
    category: "Signage",
    subcategory: "Educational Branding",
    description: "Professional signboard for academy and institute identity.",
    material: "Acrylic / Printed Board",
    price: "On request",
    image: "/products/nurora-academy-sign.jpg",
    tags: ["academy", "education", "signage"],
  },
  {
    id: "filip-deals-sign",
    slug: "filip-deals-sign",
    title: "Filip Deals Promo Board",
    category: "Brand Display",
    subcategory: "Promotional Display",
    description: "Bright promotional board for retail advertising and store visibility.",
    material: "Printed Display Board",
    price: "On request",
    image: "/products/filip-deals-sign.jpg",
    tags: ["promo", "display", "retail"],
  },
  {
    id: "dg-logo-board",
    slug: "dg-logo-board",
    title: "DG Logo Sign",
    category: "Signage",
    subcategory: "Brand Identity",
    description: "Minimal premium logo board for brand or storefront display.",
    material: "Metal Finish / Acrylic",
    price: "On request",
    image: "/products/dg-logo-board.jpg",
    tags: ["logo", "premium", "brand"],
  },
];