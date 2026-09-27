# Laser Tech — Business Platform

> **The Art of Engraving, Uniquely Yours.**

A complete e-commerce and business management platform for **Laser Tech**, a Sri Lankan precision manufacturing company specializing in laser cutting, engraving, CNC routing, laser marking, fiber laser services, signage, personalized gifts, and custom production.

---

## 🌐 Live Site

| Environment | URL |
|-------------|-----|
| **Production** | [lasertech-mw.vercel.app](https://lasertech-mw.vercel.app) |
| **Repository** | [github.com/MusfiraMujeeb/laser-tech-web](https://github.com/MusfiraMujeeb/laser-tech-web) |

---

## 🎯 What This Platform Does

- **Public storefront** — 60+ real products with category filters, product detail pages, quote request forms
- **Admin dashboard** — full CRUD for products, orders, quotations, offers, and manual orders
- **Quotation builder** — generate professional quotations with line items, discounts, PDF/print output, and WhatsApp delivery
- **Manual order tracking** — record orders from WhatsApp/phone/walk-in with payment tracking and printable invoices
- **AI social media captions** — generate Instagram, Facebook, hashtag, and Sinhala captions for products and offers
- **Image uploads** — powered by Cloudinary with auto-optimization
- **Order tracking** — customers can track orders by reference number
- **SEO** — sitemap, robots.txt, JSON-LD structured data, OpenGraph, Twitter cards

---

## 🛠️ Technology Stack

### Frontend

| Technology | Purpose |
|-----------|---------|
| **Next.js 16** (App Router) | React framework with server components |
| **React 19** | UI library |
| **TypeScript** | Type safety |
| **Tailwind CSS v4** | Styling (custom theme via `@theme`) |
| **Cormorant Garamond** | Serif headings (via `@fontsource`) |
| **Manrope** | Sans-serif body (via `@fontsource`) |
| **`next/image`** | Optimized images |

### Backend (Full-Stack via Next.js)

| Technology | Purpose |
|-----------|---------|
| **Next.js Route Handlers** | REST API endpoints (`/app/api/*`) |
| **Server Components** | Server-side data fetching for pages |
| **MongoDB** | Primary database (NoSQL document store) |
| **Mongoose 8** | MongoDB ODM — schemas, validation, queries |

> **Note:** There is no separate backend server. All backend logic lives inside the Next.js application using **Route Handlers** and **Server Components**. This is a modern full-stack approach — one codebase, one deployment.

### Database Schema (MongoDB Collections)

| Collection | Purpose |
|-----------|---------|
| `products` | Product catalog (60+ items) |
| `offers` | Discounts, coupons, promotions |
| `manualorders` | Orders taken outside the website (WhatsApp, phone, walk-in) |
| `socialposts` | AI-generated social media captions and drafts |

**Note:** Customer inquiries and quotations are currently stored in `localStorage` (prototype). Migration to MongoDB is planned.

### Third-Party Services

| Service | Purpose |
|---------|---------|
| **MongoDB Atlas** | Cloud-hosted MongoDB (Free M0 tier) |
| **Cloudinary** | Image upload and optimization (free tier) |
| **Google Gemini API** | AI caption generation (`gemini-flash-latest`) |
| **WhatsApp Business** | Customer communication, order intake |
| **Vercel** | Hosting + deployment |

### DevOps

| Tool | Purpose |
|------|---------|
| **Git + GitHub** | Version control |
| **Vercel** | CI/CD (auto-deploy on push to `main`) |
| **npm** | Package management |

---

## 📁 Project Structure

```text
laser-tech-web/
├── app/
│   ├── api/                        # Backend API routes
│   │   ├── admin/
│   │   │   ├── manual-orders/      # Manual order CRUD
│   │   │   ├── offers/             # Offer CRUD
│   │   │   ├── products/           # Product CRUD
│   │   │   ├── social-posts/       # Social post CRUD
│   │   │   │   └── generate/       # AI caption generation
│   │   │   └── upload/             # Cloudinary image upload
│   │   ├── offers/active/          # Public: active offers
│   │   └── products/               # Public: product list + detail
│   ├── admin/                      # Admin dashboard pages
│   │   ├── manual-orders/          # Order entry + invoice
│   │   ├── offers/                 # Offers manager UI
│   │   ├── products/               # Product manager UI
│   │   ├── quotations/             # Quotation builder
│   │   ├── social/                 # AI caption generator UI
│   │   └── page.tsx                # Admin overview
│   ├── products/                   # Public product catalog
│   │   └── [slug]/                 # Individual product page
│   ├── quote/                      # Customer quote request form
│   ├── layout.tsx                  # Root layout, metadata, JSON-LD
│   ├── page.tsx                    # Homepage
│   ├── robots.ts                   # SEO robots.txt
│   └── sitemap.ts                  # Dynamic sitemap
├── components/
│   ├── Footer.tsx                  # Global footer + floating WhatsApp
│   ├── Navbar.tsx                  # Sticky navigation
│   └── QuotationPrintTemplate.tsx  # Printable quotation layout
├── lib/
│   ├── mongodb.ts                  # MongoDB connection singleton
│   └── quotationUtils.ts           # Quotation calculations + helpers
├── models/
│   ├── ManualOrder.ts              # Manual order schema
│   ├── Offer.ts                    # Offer schema
│   ├── Product.ts                  # Product schema
│   └── SocialPost.ts               # Social post schema
├── public/
│   ├── brand/                      # Logo
│   └── products/                   # 60+ product images (legacy)
├── scripts/
│   └── seed-products.ts            # One-time DB seed script
├── tailwind.config.ts
├── next.config.ts
└── package.json
```

---

## 🚀 Getting Started (Local Development)

### 1. Clone the repository

```bash
git clone https://github.com/MusfiraMujeeb/laser-tech-web.git
cd laser-tech-web
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env.local` file at the root:

```env
# MongoDB
MONGODB_URI=mongodb+srv://<user>:<password>@cluster0.xxxxx.mongodb.net/laser-tech?retryWrites=true&w=majority
MONGODB_DB=laser-tech

# Site
NEXT_PUBLIC_SITE_URL=http://localhost:3001

# Cloudinary (image uploads)
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# Google Gemini (AI captions)
GEMINI_API_KEY=your_gemini_key
```

**Where to get each:**

- **MongoDB:** [MongoDB Atlas](https://cloud.mongodb.com) → free M0 cluster
- **Cloudinary:** [cloudinary.com](https://cloudinary.com) → free account → Settings → API Keys
- **Gemini:** [aistudio.google.com/app/apikey](https://aistudio.google.com/app/apikey) → free API key

### 4. Seed the database (first time only)

```bash
npm run seed
```

This loads the 60 default products into MongoDB. **Run once.** Subsequent runs will overwrite.

### 5. Start the development server

```bash
npm run dev
```

Visit [http://localhost:3001](http://localhost:3001).

**Admin access:** `/admin` — password: `lasertech2026`

---

## 📜 Available Scripts

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run start` | Run production build locally |
| `npm run lint` | Run ESLint |
| `npm run seed` | Seed MongoDB with default products |

---

## 🎨 Design System

| Element | Value |
|---------|-------|
| **Primary dark** | `#2B1A12` (walnut) |
| **Darkest** | `#1A100C` (espresso) |
| **Copper accent** | `#B86632` |
| **Copper hover** | `#954A24` |
| **Ivory background** | `#FBF8F2` |
| **Warm sand** | `#F1E5D3` |
| **Olive hero text** | `#9DA960` |
| **Success/WhatsApp** | `#198754` |
| **Error** | `#B42318` |

**Typography:**

- **Headings:** Cormorant Garamond (serif)
- **Body/UI:** Manrope (sans-serif)

---

## 🔐 Admin Routes

| Route | Purpose |
|-------|---------|
| `/admin` | Dashboard overview |
| `/admin/products` | Add/edit/delete products |
| `/admin/offers` | Create/manage discounts and coupons |
| `/admin/quotations` | Build quotations from inquiries |
| `/admin/manual-orders` | Record WhatsApp/phone/walk-in orders |
| `/admin/social` | AI social media caption generator |

**Admin password:** Set in `app/admin/page.tsx` (change before production launch).

---

## 🗺️ Roadmap

### ✅ Completed

- [x] Premium design system (walnut/copper/ivory)
- [x] Homepage with hero, featured products, services, about
- [x] Public product catalog with 60+ products
- [x] Product detail pages
- [x] Customer quote request form
- [x] Admin authentication gate
- [x] Admin product manager (CRUD)
- [x] Admin offers manager
- [x] Admin quotation builder with print/WhatsApp
- [x] Admin manual order entry with invoices
- [x] AI social media caption generator
- [x] Image upload via Cloudinary
- [x] SEO foundation (sitemap, robots, JSON-LD)
- [x] Production deployment on Vercel

### 🚧 In Progress

- [ ] Domain connection (`lasertech.lk`)
- [ ] Migrate quotations and inquiries to MongoDB
- [ ] Order tracking (customer + admin views)

### 📅 Planned

- [ ] Customer accounts (login, order history)
- [ ] Payment gateway integration (PayHere / WebXPay)
- [ ] Auto-post to Instagram/Facebook (via Meta API or Buffer)
- [ ] SMS notifications
- [ ] Analytics dashboard (revenue, top products)
- [ ] Multi-user admin with roles

---

## 🤝 Contributing

This is a private repository for the Laser Tech business. For questions or issues, contact the owner.

---

## 📄 License

All rights reserved © Laser Tech 2026.

---

## 🧑‍💻 Credits

**Built by:** [Musfira Mujeeb](https://github.com/MusfiraMujeeb)

**Business:** Laser Tech — 33/1 Kandy-Colombo Road, Mawanella, Sri Lanka  
**Phone:** +94 75 799 1141  
**Email:** lasertech0024@gmail.com
