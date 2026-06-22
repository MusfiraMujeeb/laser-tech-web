export interface PortfolioItem {
  id: string;
  category: 'Industrial' | 'Signage' | 'Creative' | 'CNC Routing';
  title: string;
  material: string;
  desc: string;
  badge: string;
  img: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: 'industrial-marking',
    category: 'Industrial',
    title: 'High-Speed Fiber Laser Metal Part Serialization',
    material: '304 Industrial Stainless Steel / Brass',
    desc: 'High-precision micro-engraving of sequential serial numbers and asset tracking QR codes on durable metal plates.',
    badge: 'Industrial Core',
    img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 'shop-signboard',
    category: 'Signage',
    title: '3D Floating Mirror Gold Acrylic Corporate Signboard',
    material: '8mm Cast Acrylic / Dark Mahogany Frame Base',
    desc: 'Premium architectural commercial signage boards utilizing deep high-contrast polished reflective overlays.',
    badge: 'Premium Craft',
    img: 'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 'nikah-frame',
    category: 'Creative',
    title: 'Bespoke Multi-Layered Royal Wedding Invitation Plaque',
    material: 'Cherry Wood Veneer & Gold Acrylic Monograms',
    desc: 'Artisan three-dimensional calendar clock commemorative plaques customized with intricate precision laser filigree stencils.',
    badge: 'Wedding Special',
    img: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 'notebook',
    category: 'Creative',
    title: 'A5 Premium Laser-Engraved Wooden Notebook Cover',
    material: 'Solid Mahogany Binder Board Panels',
    desc: 'Bespoke personalized stationery book covers etched with unique geometric typography profiles.',
    badge: 'Bestseller',
    img: 'https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 'architectural-screen',
    category: 'CNC Routing',
    title: 'Intricate Architectural MDF Screen Divider Wall Panel',
    material: '16mm Premium Moisture-Resistant MDF',
    desc: 'Heavy-duty large-format CNC router carvings executing repeating geometric patterns for luxury commercial interior spaces.',
    badge: 'CNC Project',
    img: 'https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?auto=format&fit=crop&w=500&q=80'
  }
];