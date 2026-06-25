export type PortfolioCategory =
  | "Signage"
  | "Illuminated Signs"
  | "Decorative Panels"
  | "Awards"
  | "Personalized Gifts"
  | "Keychains"
  | "Name Plates"
  | "Brand Display"
  | "Other";

export interface PortfolioItem {
  id: string;
  slug: string;
  title: string;
  category: PortfolioCategory;
  subcategory: string;
  description: string;
  material: string;
  image: string;
  featured?: boolean;
  tags: string[];
}

export const portfolioItems: PortfolioItem[] = [
  { id: "veloura-signboard", slug: "veloura-signboard", title: "Veloura Business Signboard", category: "Signage", subcategory: "Corporate Branding", description: "Premium storefront logo board.", material: "Acrylic / Printed Board", image: "/products/veloura-signboard.jpg", featured: true, tags: ["branding"] },
  { id: "runner-neon-sign", slug: "runner-neon-sign", title: "Runner Neon Wall Sign", category: "Illuminated Signs", subcategory: "Fitness / Lifestyle", description: "Illuminated neon-style wall sign.", material: "LED Neon Acrylic", image: "/products/runner-neon-sign.jpg", featured: true, tags: ["neon"] },
  { id: "planet-fitness-board", slug: "planet-fitness-board", title: "Planet Fitness Signboard", category: "Signage", subcategory: "Fitness Branding", description: "Commercial fitness signboard.", material: "Acrylic / LED", image: "/products/planet-fitness-board.jpg", featured: true, tags: ["fitness"] },
  { id: "peacock-neon-sign", slug: "peacock-neon-sign", title: "Peacock Neon Art Sign", category: "Illuminated Signs", subcategory: "Decorative Art", description: "Peacock-themed illuminated sign.", material: "LED Acrylic", image: "/products/peacock-neon-sign.jpg", tags: ["decor"] },
  { id: "green-circle-wall-sign", slug: "green-circle-wall-sign", title: "Circular Illuminated Wall Sign", category: "Illuminated Signs", subcategory: "Brand Logo Board", description: "Round illuminated logo sign.", material: "Acrylic / LED", image: "/products/green-circle-wall-sign.jpg", tags: ["logo"] },
  { id: "nova-bridal-signboard", slug: "nova-bridal-signboard", title: "Nova Bridal Beauty Parlour Board", category: "Signage", subcategory: "Retail Branding", description: "Custom retail signboard.", material: "Printed Board / Acrylic", image: "/products/nova-bridal-signboard.jpg", tags: ["retail"] },
  { id: "new-kandy-bakehouse", slug: "new-kandy-bakehouse", title: "New Kandy Bakehouse Sign", category: "Signage", subcategory: "Food Branding", description: "Bakery storefront signboard.", material: "Acrylic / Printed Board", image: "/products/new-kandy-bakehouse.jpg", tags: ["food"] },
  { id: "nurora-academy-sign", slug: "nurora-academy-sign", title: "Nurora Academy Signboard", category: "Signage", subcategory: "Educational Branding", description: "Professional academy signboard.", material: "Acrylic / Printed Board", image: "/products/nurora-academy-sign.jpg", tags: ["education"] },
  { id: "filip-deals-sign", slug: "filip-deals-sign", title: "Filip Deals Promo Board", category: "Brand Display", subcategory: "Promotional Display", description: "Retail promotional display board.", material: "Printed Display Board", image: "/products/filip-deals-sign.jpg", tags: ["promo"] },
  { id: "dg-logo-board", slug: "dg-logo-board", title: "DG Logo Sign", category: "Signage", subcategory: "Brand Identity", description: "Minimal premium logo board.", material: "Metal Finish / Acrylic", image: "/products/dg-logo-board.jpg", tags: ["logo"] },
  { id: "decorative-panel", slug: "decorative-panel", title: "Decorative Laser-Cut Panel", category: "Decorative Panels", subcategory: "Interior Design", description: "Patterned decorative panel.", material: "Metal / Acrylic", image: "/products/decorative-panel.jpg", tags: ["panel"] },
  { id: "wooden-engraved-panel", slug: "wooden-engraved-panel", title: "Engraved Wooden Wall Panel", category: "Decorative Panels", subcategory: "Custom Engraving", description: "Custom engraved panel.", material: "Wood", image: "/products/wooden-engraved-panel.jpg", tags: ["wood"] },
  { id: "wooden-awards", slug: "wooden-awards", title: "Wooden Awards Set", category: "Awards", subcategory: "Recognition", description: "Set of wooden awards.", material: "Wood", image: "/products/wooden-awards.jpg", tags: ["award"] },
  { id: "heart-led-lamp", slug: "heart-led-lamp", title: "Heart LED Lamp", category: "Personalized Gifts", subcategory: "Couple Gift", description: "Personalized LED lamp.", material: "Acrylic / LED", image: "/products/heart-led-lamp.jpg", featured: true, tags: ["gift"] },
  { id: "award-set", slug: "award-set", title: "Custom Award Set", category: "Awards", subcategory: "Recognition", description: "Custom award plaques and trophies.", material: "Acrylic / Wood / Metal", image: "/products/award-set.jpg", tags: ["trophy"] },
  { id: "mahee-circle-sign", slug: "mahee-circle-sign", title: "Mahee Circle Sign", category: "Signage", subcategory: "Brand Identity", description: "Circular custom sign.", material: "Acrylic / LED", image: "/products/mahee-circle-sign.jpg", tags: ["circle"] },
  { id: "rav-lanka-sign", slug: "rav-lanka-sign", title: "RAV Lanka Travels Sign", category: "Signage", subcategory: "Travel Branding", description: "Travel company signboard.", material: "Printed Board / Acrylic", image: "/products/rav-lanka-sign.jpg", tags: ["travel"] },
  { id: "leorish-mart-sign", slug: "leorish-mart-sign", title: "Leorish Mart Sign", category: "Brand Display", subcategory: "Retail Display", description: "Retail storefront sign.", material: "Printed Display Board", image: "/products/leorish-mart-sign.jpg", tags: ["retail"] },
  { id: "wooden-thank-you-plaques", slug: "wooden-thank-you-plaques", title: "Wooden Thank You Plaques", category: "Awards", subcategory: "Appreciation", description: "Wooden appreciation plaques.", material: "Wood", image: "/products/wooden-thank-you-plaques.jpg", tags: ["plaque"] },
  { id: "indian-collection-sign", slug: "indian-collection-sign", title: "Indian Collection Sign", category: "Brand Display", subcategory: "Retail Display", description: "Retail collection signboard.", material: "Printed Display Board", image: "/products/indian-collection-sign.jpg", tags: ["display"] },
  { id: "heart-keychains", slug: "heart-keychains", title: "Heart-Shaped Keychains", category: "Keychains", subcategory: "Personalized Gift", description: "Engraved heart keychains.", material: "Metal / Acrylic", image: "/products/heart-keychains.jpg", tags: ["keychain"] },
  { id: "metal-tags", slug: "metal-tags", title: "Custom Metal Tags", category: "Name Plates", subcategory: "Asset / Product Tag", description: "Engraved metal tags.", material: "Metal", image: "/products/metal-tags.jpg", tags: ["tag"] },
  { id: "personalized-wallet-tags", slug: "personalized-wallet-tags", title: "Personalized Wallet Tags", category: "Personalized Gifts", subcategory: "Custom Gift", description: "Custom wallet tags.", material: "Metal / Acrylic", image: "/products/personalized-wallet-tags.jpg", tags: ["wallet"] },
  { id: "metal-industrial-panel", slug: "metal-industrial-panel", title: "Metal Industrial Panel", category: "Name Plates", subcategory: "Industrial Marking", description: "Industrial labeled plate.", material: "Metal", image: "/products/metal-industrial-panel.jpg", tags: ["industrial"] },
  { id: "radiant-roots-salon", slug: "radiant-roots-salon", title: "Radiant Roots Salon Sign", category: "Signage", subcategory: "Beauty Branding", description: "Salon signboard branding.", material: "Acrylic / Printed Board", image: "/products/radiant-roots-salon.jpg", tags: ["salon"] },
  { id: "high-zam-board", slug: "high-zam-board", title: "High Zam Board", category: "Signage", subcategory: "Commercial Branding", description: "Commercial signboard.", material: "Acrylic / Printed Board", image: "/products/high-zam-board.jpg", tags: ["commercial"] },
  { id: "award-plaque", slug: "award-plaque", title: "Award Plaque", category: "Awards", subcategory: "Recognition", description: "Wooden award plaque.", material: "Wood / Acrylic", image: "/products/award-plaque.jpg", tags: ["award"] },
  { id: "award-trophy-1", slug: "award-trophy-1", title: "Award Trophy 1", category: "Awards", subcategory: "Recognition", description: "Custom trophy.", material: "Acrylic / Metal", image: "/products/award-trophy-1.jpg", tags: ["trophy"] },
  { id: "award-trophy-2", slug: "award-trophy-2", title: "Award Trophy 2", category: "Awards", subcategory: "Recognition", description: "Custom trophy.", material: "Acrylic / Metal", image: "/products/award-trophy-2.jpg", tags: ["trophy"] },
  { id: "award-trophy-3", slug: "award-trophy-3", title: "Award Trophy 3", category: "Awards", subcategory: "Recognition", description: "Custom trophy.", material: "Acrylic / Metal", image: "/products/award-trophy-3.jpg", tags: ["trophy"] },
  { id: "clock-plaque", slug: "clock-plaque", title: "Clock Plaque", category: "Personalized Gifts", subcategory: "Decor Gift", description: "Decorative clock plaque.", material: "Wood / Acrylic", image: "/products/clock-plaque.jpg", tags: ["clock"] },
  { id: "family-tree-decor", slug: "family-tree-decor", title: "Family Tree Decor", category: "Decorative Panels", subcategory: "Home Decor", description: "Family tree wall decor.", material: "Wood / Acrylic", image: "/products/family-tree-decor.jpg", tags: ["home"] },
  { id: "personalized-phone-cases", slug: "personalized-phone-cases", title: "Personalized Phone Cases", category: "Personalized Gifts", subcategory: "Custom Gift", description: "Custom phone cases.", material: "Printed / Acrylic", image: "/products/personalized-phone-cases.jpg", tags: ["phone"] },
];