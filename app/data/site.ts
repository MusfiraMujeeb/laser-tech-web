// app/data/site.ts

export type Service = {
  title: string;
  description: string;
  capacity: string;
  materials: string[];
};

export type Product = {
  id: string;
  title: string;
  category: string;
  description: string;
};

// 1. Company Profile Data
export const companyProfile = {
  name: "Laser Tech",
  about: "Laser Tech is a professional laser cutting, engraving, and CNC machining company founded in 2019 in Mawanella, Sri Lanka.",
  ceoName: "Mohamed Afraz",
  ceoTitle: "CEO",
};

// 2. Services Data
export const services: Service[] = [
  {
    title: "Laser Cutting",
    description: "High-precision cutting for acrylic, wood, and MDF.",
    capacity: "Up to 8ft x 4ft",
    materials: ["Acrylic", "MDF", "Wood", "Leather"],
  },
  {
    title: "CNC Routing",
    description: "Structural carving and shaping for large-format projects.",
    capacity: "8ft x 4ft bed",
    materials: ["Wood", "MDF", "Plywood"],
  }
];

// 3. Timeline Data (Added this for the About page)
export const timeline = [
  { year: "2019", title: "Pioneer Founded" },
  { year: "2023", title: "Heavy CNC Router Addition" },
  { year: "2024", title: "Fiber Laser Integration" },
  { year: "Today", title: "Serving Enterprise Islandwide" },
];

// 4. Contact Info
export const contactInfo = {
  phone: "+94 75 799 1141",
  email: "lasertech0024@gmail.com",
  address: "33/1 Kandy - Colombo Rd, Mawanella",
  whatsapp: "+94757991141",
};