# Dive-In Aquatics

Professional swimming classes website for Dive-In Aquatics, New Delhi. Built with Next.js 15, TypeScript, and Tailwind CSS.

**Location**: 112-A/2, St. No.7, Krishna Nagar, Safdarjung Enclave, New Delhi-110029  
**Contact**: +91-9971114557, +91-8527050620  
**Website**: www.diveinaquatics.in

## Features

- **Modern Stack**: Next.js 15 App Router, TypeScript, Tailwind CSS, shadcn/ui
- **SEO Optimized**: Metadata, OpenGraph, sitemap, robots.txt
- **Responsive Design**: Mobile-first design with sticky header
- **Lead Management**: Contact and trial booking forms with validation
- **Brand Consistency**: Color scheme matching the Dive-In Aquatics brand

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with Header/Footer
│   ├── page.tsx           # Home page
│   ├── programs/          # Programs page
│   ├── schedule/          # Schedule & Fees page
│   ├── coaches/           # Coaches page
│   ├── gallery/           # Gallery page
│   └── contact/           # Contact page
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── header.tsx        # Sticky header with navigation
│   ├── footer.tsx        # Footer with contact info
│   ├── whatsapp-button.tsx # Floating WhatsApp button
│   ├── contact-form.tsx  # Contact form with validation
│   └── trial-form.tsx    # Trial booking form
├── lib/                   # Utilities and configurations
│   ├── constants.ts      # Site config, programs, schedules
│   ├── db-schema.ts      # Database schema types
│   ├── validations.ts    # Zod schemas for forms
│   ├── actions.ts        # Server actions
│   └── utils.ts          # Utility functions
└── public/               # Static assets
    └── assets/           # Logo images
```

## Pages

- **Home**: Hero section, features, programs overview, CTA
- **Programs**: Detailed program information for all age groups
- **Schedule & Fees**: Class timings and pricing table
- **Coaches**: Meet the coaching team
- **Gallery**: Photo gallery (placeholder images)
- **Contact**: Contact form and trial booking form

## Database Schema

The lead schema is defined in `lib/db-schema.ts` and ready for database integration. Currently, form submissions are logged to the console. To connect a database:

1. Add your database client (e.g., Prisma, Drizzle)
2. Update `lib/actions.ts` to save leads to your database
3. Add environment variables for database connection

## Deployment

Build for production:
```bash
npm run build
npm start
```

Deploy to Vercel:
```bash
vercel
```

## Configuration

Update site configuration in `lib/constants.ts`:
- Contact information
- Social media links
- Programs and schedules
- Opening hours

## License

Copyright © 2026 Dive-In Aquatics. All rights reserved.
