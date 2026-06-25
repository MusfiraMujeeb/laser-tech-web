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
  image: string;
  priceLkr: number;
  discountPercent: number;
  featured: boolean;
  available: boolean;
  tags: string[];
}

export const productItems: ProductItem[] = [
  {
    id: "heart-keychains",
    slug: "heart-keychains",
    title: "Heart-Shaped Keychains",
    category: "Keychains",
    subcategory: "Personalized Gift",
    description: "Custom engraved heart keychains for couples and gifting.",
    material: "Metal / Acrylic",
    image: "/products/heart-keychains.jpg",
    priceLkr: 950,
    discountPercent: 10,
    featured: true,
    available: true,
    tags: ["keychain", "gift", "personalized"],
  },
  {
    id: "metal-tags",
    slug: "metal-tags",
    title: "Custom Metal Tags",
    category: "Name Plates",
    subcategory: "Asset / Product Tag",
    description: "Engraved metal tags for branding, labeling, or product identification.",
    material: "Metal",
    image: "/products/metal-tags.jpg",
    priceLkr: 1200,
    discountPercent: 0,
    featured: true,
    available: true,
    tags: ["tag", "metal", "engraving"],
  },
  {
    id: "personalized-wallet-tags",
    slug: "personalized-wallet-tags",
    title: "Personalized Wallet Tags",
    category: "Personalized Gifts",
    subcategory: "Custom Gift",
    description: "Custom wallet tags for personal gifting and branding.",
    material: "Metal / Acrylic",
    image: "/products/personalized-wallet-tags.jpg",
    priceLkr: 1400,
    discountPercent: 0,
    featured: false,
    available: true,
    tags: ["wallet", "gift", "custom"],
  },
  {
    id: "award-set",
    slug: "award-set",
    title: "Custom Award Set",
    category: "Awards",
    subcategory: "Recognition",
    description: "Custom award plaques and trophies for events and recognition ceremonies.",
    material: "Acrylic / Wood / Metal Finish",
    image: "/products/award-set.jpg",
    priceLkr: 3800,
    discountPercent: 5,
    featured: true,
    available: true,
    tags: ["award", "trophy", "recognition"],
  },
  {
    id: "award-plaque",
    slug: "award-plaque",
    title: "Award Plaque",
    category: "Awards",
    subcategory: "Recognition",
    description: "Wooden award plaque for ceremonies and recognition.",
    material: "Wood / Acrylic",
    image: "/products/award-plaque.jpg",
    priceLkr: 2500,
    discountPercent: 0,
    featured: false,
    available: true,
    tags: ["award", "plaque", "recognition"],
  },
  {
    id: "veloura-signboard",
    slug: "veloura-signboard",
    title: "Veloura Business Signboard",
    category: "Signage",
    subcategory: "Corporate Branding",
    description: "Premium storefront logo board for elegant commercial presentation.",
    material: "Acrylic / Printed Board",
    image: "/products/veloura-signboard.jpg",
    priceLkr: 9500,
    discountPercent: 0,
    featured: true,
    available: true,
    tags: ["branding", "storefront", "logo"],
  },
  {
    id: "runner-neon-sign",
    slug: "runner-neon-sign",
    title: "Runner Neon Wall Sign",
    category: "Illuminated Signs",
    subcategory: "Fitness / Lifestyle",
    description: "Illuminated neon-style sign designed for gyms and modern interiors.",
    material: "LED Neon Acrylic",
    image: "/products/runner-neon-sign.jpg",
    priceLkr: 14500,
    discountPercent: 8,
    featured: true,
    available: true,
    tags: ["neon", "led", "gym"],
  },
  {
    id: "planet-fitness-board",
    slug: "planet-fitness-board",
    title: "Planet Fitness Signboard",
    category: "Signage",
    subcategory: "Fitness Branding",
    description: "Commercial signboard with strong visibility and clean presentation.",
    material: "Acrylic / LED",
    image: "/products/planet-fitness-board.jpg",
    priceLkr: 16500,
    discountPercent: 0,
    featured: true,
    available: true,
    tags: ["fitness", "signage", "brand"],
  },
  {
    id: "peacock-neon-sign",
    slug: "peacock-neon-sign",
    title: "Peacock Neon Art Sign",
    category: "Illuminated Signs",
    subcategory: "Decorative Art",
    description: "Decorative peacock-themed illuminated sign for feature walls.",
    material: "LED Acrylic",
    image: "/products/peacock-neon-sign.jpg",
    priceLkr: 12500,
    discountPercent: 6,
    featured: false,
    available: true,
    tags: ["art", "decor", "neon"],
  },
  {
    id: "green-circle-wall-sign",
    slug: "green-circle-wall-sign",
    title: "Circular Illuminated Wall Sign",
    category: "Illuminated Signs",
    subcategory: "Brand Logo Board",
    description: "Round illuminated logo sign for premium wall branding.",
    material: "Acrylic / LED",
    image: "/products/green-circle-wall-sign.jpg",
    priceLkr: 9800,
    discountPercent: 0,
    featured: false,
    available: true,
    tags: ["circle", "brand", "led"],
  },
];