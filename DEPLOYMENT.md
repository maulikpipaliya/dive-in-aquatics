# Deployment Guide

## Quick Start

The website is ready to deploy! Here are your options:

### Option 1: Vercel (Recommended - Free)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will auto-detect Next.js and deploy

### Option 2: Netlify

1. Push your code to GitHub
2. Visit [netlify.com](https://netlify.com)
3. Import your repository
4. Build command: `npm run build`
5. Publish directory: `.next`

### Option 3: Self-Hosted

```bash
npm run build
npm start
```

Runs on port 3000 by default.

## Environment Variables

When you're ready to connect a database for lead storage:

1. Copy `.env.example` to `.env.local`
2. Add your database connection string
3. Update `lib/actions.ts` to save leads to your database

## Domain Setup

Once deployed, update your domain DNS:
- Point `www.diveinaquatics.in` to your deployment
- Add A/CNAME records as per your hosting provider

## Post-Deployment Checklist

- [ ] Test all forms (Contact & Trial booking)
- [ ] Verify all pages load correctly
- [ ] Check mobile responsiveness
- [ ] Test WhatsApp button functionality
- [ ] Verify SEO metadata (use tools like [metatags.io](https://metatags.io))
- [ ] Submit sitemap to Google Search Console
- [ ] Set up Google Analytics (optional)

## Contact Information

All contact details are configured in `lib/constants.ts`:
- Phone: +91-9971114557, +91-8527050620
- Email: divein.aquatics2713@gmail.com
- Address: 112-A/2, St. No.7, Krishna Nagar, Safdarjung Enclave, New Delhi-110029
