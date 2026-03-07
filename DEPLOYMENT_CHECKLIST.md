# 🚀 Deployment Checklist for diveinaquatics.in

Use this checklist to deploy your website step by step.

## ✅ Pre-Deployment Checklist

- [x] Code is on GitHub ✓
- [x] All pages are working locally ✓
- [x] Mobile menu is fixed ✓
- [x] Deployment files added ✓

## 📋 Deployment Steps

### 1. Vercel Setup (5 minutes)

- [ ] Go to https://vercel.com/signup
- [ ] Click "Continue with GitHub"
- [ ] Authorize Vercel to access GitHub
- [ ] Click "Add New..." → "Project"
- [ ] Select `dive-in-aquatics` repository
- [ ] Click "Import"
- [ ] Click "Deploy" (leave all settings as default)
- [ ] Wait for deployment to complete (2-3 minutes)
- [ ] Copy your Vercel URL: `___________________.vercel.app`
- [ ] Test the Vercel URL - does it work? [ ]

### 2. Domain Configuration (10-30 minutes)

- [ ] In Vercel: Go to Project Settings → Domains
- [ ] Add domain: `diveinaquatics.in`
- [ ] Add domain: `www.diveinaquatics.in`
- [ ] Note the DNS records Vercel provides

### 3. DNS Setup (at your domain registrar)

Where did you buy diveinaquatics.in? _________________

Login to your domain registrar and add these records:

**Record 1:**
- [ ] Type: `A`
- [ ] Name: `@` (or leave blank)
- [ ] Value: `76.76.21.21`
- [ ] TTL: `3600` (or Auto)

**Record 2:**
- [ ] Type: `CNAME`
- [ ] Name: `www`
- [ ] Value: `cname.vercel-dns.com`
- [ ] TTL: `3600` (or Auto)

### 4. Wait for DNS Propagation

- [ ] Wait 10-30 minutes
- [ ] Check https://dnschecker.org/#A/diveinaquatics.in
- [ ] Green checkmarks appearing? Keep waiting if not

### 5. Verify Deployment

Test these URLs:

- [ ] https://diveinaquatics.in - Loads correctly?
- [ ] https://www.diveinaquatics.in - Redirects to main domain?
- [ ] HTTPS is working (green padlock in browser)?

Test all pages:

- [ ] Home page: https://diveinaquatics.in/
- [ ] Programs: https://diveinaquatics.in/programs
- [ ] Schedule: https://diveinaquatics.in/schedule
- [ ] Coaches: https://diveinaquatics.in/coaches
- [ ] Gallery: https://diveinaquatics.in/gallery
- [ ] Contact: https://diveinaquatics.in/contact

Test functionality:

- [ ] Mobile menu opens and closes
- [ ] Mobile menu navigation works
- [ ] All images load
- [ ] Contact form works
- [ ] WhatsApp button works
- [ ] All links work

Test on devices:

- [ ] Desktop/Laptop
- [ ] Mobile phone
- [ ] Tablet

## 🎉 Post-Deployment

- [ ] Share the website with friends/family
- [ ] Test contact form by submitting a test inquiry
- [ ] Bookmark Vercel dashboard for future updates
- [ ] Save this checklist for reference

## 🔄 Making Updates Later

When you want to update the website:

```bash
# 1. Make your changes
# 2. Test locally: npm run dev
# 3. Commit and push
git add .
git commit -m "Describe your changes"
git push origin main

# 4. Vercel automatically deploys in 2 minutes!
```

## 📞 Support

**Vercel Issues:**
- Dashboard: https://vercel.com/dashboard
- Docs: https://vercel.com/docs
- Support: https://vercel.com/support

**DNS Issues:**
- Check propagation: https://dnschecker.org
- Contact your domain registrar support

**Website Issues:**
- Check Vercel deployment logs
- Test locally first: `npm run dev`

---

## 🎯 Quick Reference

**Your Details:**
- GitHub Repo: https://github.com/YOUR_USERNAME/dive-in-aquatics
- Vercel URL: ___________________.vercel.app
- Live Domain: https://diveinaquatics.in
- Domain Registrar: ___________________

**Important Links:**
- Vercel Dashboard: https://vercel.com/dashboard
- GitHub Repo: (fill in above)
- DNS Checker: https://dnschecker.org

---

**Deployment Date:** ___________________

**Deployed By:** ___________________

**Notes:**
_______________________________________________
_______________________________________________
_______________________________________________
