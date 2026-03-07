# Deployment Guide for diveinaquatics.in

This guide will help you deploy your Dive-In Aquatics website to your custom domain using GitHub and Vercel.

## Prerequisites

- GitHub account
- Vercel account (free - sign up at https://vercel.com)
- Access to your domain registrar (where you purchased diveinaquatics.in)

## Step 1: Push Code to GitHub

1. **Initialize Git repository** (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Dive-In Aquatics website"
   ```

2. **Create a new repository on GitHub**:
   - Go to https://github.com/new
   - Name: `dive-in-aquatics`
   - Description: "Professional swimming classes website"
   - Keep it Private or Public (your choice)
   - Don't initialize with README (you already have one)
   - Click "Create repository"

3. **Push your code to GitHub**:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/dive-in-aquatics.git
   git branch -M main
   git push -u origin main
   ```

## Step 2: Deploy to Vercel

1. **Sign up/Login to Vercel**:
   - Go to https://vercel.com
   - Click "Sign Up" and use "Continue with GitHub"
   - Authorize Vercel to access your GitHub account

2. **Import your project**:
   - Click "Add New..." → "Project"
   - Select your `dive-in-aquatics` repository
   - Click "Import"

3. **Configure project**:
   - **Framework Preset**: Next.js (should be auto-detected)
   - **Root Directory**: `./` (leave as default)
   - **Build Command**: `npm run build` (auto-filled)
   - **Output Directory**: `.next` (auto-filled)
   - **Install Command**: `npm install` (auto-filled)

4. **Environment Variables** (if needed):
   - If you have any `.env` variables, add them here
   - For now, you can skip this step

5. **Deploy**:
   - Click "Deploy"
   - Wait 2-3 minutes for the build to complete
   - You'll get a URL like: `https://dive-in-aquatics-xyz.vercel.app`

## Step 3: Connect Custom Domain (diveinaquatics.in)

1. **Add domain in Vercel**:
   - Go to your project dashboard on Vercel
   - Click "Settings" → "Domains"
   - Enter `diveinaquatics.in` and click "Add"
   - Also add `www.diveinaquatics.in` (recommended)

2. **Configure DNS Records**:
   
   Vercel will show you DNS records to add. Go to your domain registrar (where you bought diveinaquatics.in) and add these records:

   **For root domain (diveinaquatics.in):**
   - Type: `A`
   - Name: `@`
   - Value: `76.76.21.21`
   - TTL: `3600` (or Auto)

   **For www subdomain (www.diveinaquatics.in):**
   - Type: `CNAME`
   - Name: `www`
   - Value: `cname.vercel-dns.com`
   - TTL: `3600` (or Auto)

3. **Wait for DNS propagation**:
   - DNS changes can take 5 minutes to 48 hours
   - Usually works within 15-30 minutes
   - Check status in Vercel dashboard

4. **SSL Certificate**:
   - Vercel automatically provisions SSL certificates
   - Your site will be accessible via HTTPS once DNS is configured

## Step 4: Verify Deployment

1. Visit `https://diveinaquatics.in`
2. Verify all pages work correctly:
   - Home page
   - Programs
   - Schedule & Fees
   - Coaches
   - Gallery
   - Contact form

3. Test on mobile devices

## Automatic Deployments

Once set up, Vercel will automatically deploy your site whenever you push to GitHub:

```bash
# Make changes to your code
git add .
git commit -m "Update website content"
git push origin main
```

Vercel will:
- Detect the push
- Build your site
- Deploy automatically
- Update your live site in 2-3 minutes

## Troubleshooting

### Build Fails
- Check the build logs in Vercel dashboard
- Ensure all dependencies are in `package.json`
- Run `npm run build` locally to test

### Domain Not Working
- Verify DNS records are correct
- Wait longer (DNS can take up to 48 hours)
- Use https://dnschecker.org to check propagation
- Ensure you're using the correct nameservers

### Images Not Loading
- Check that images are in `/public` folder
- Verify image paths start with `/` (e.g., `/assets/logo.png`)

## Support

- Vercel Documentation: https://vercel.com/docs
- Vercel Support: https://vercel.com/support
- Next.js Documentation: https://nextjs.org/docs

## Cost

- Vercel Free Tier includes:
  - Unlimited deployments
  - Automatic HTTPS
  - Custom domains
  - 100GB bandwidth/month
  - Perfect for this website!

---

**Need Help?** Contact Vercel support or check their documentation at https://vercel.com/docs
