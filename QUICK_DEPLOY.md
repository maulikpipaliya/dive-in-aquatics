# Quick Deploy to diveinaquatics.in

## 🚀 Fast Track Deployment (5 minutes)

### Step 1: Push to GitHub (Already Done ✓)
Your code is already on GitHub! Skip to Step 2.

### Step 2: Deploy to Vercel

1. **Go to Vercel**: https://vercel.com/signup
   
2. **Sign in with GitHub**:
   - Click "Continue with GitHub"
   - Authorize Vercel

3. **Import Project**:
   - Click "Add New..." → "Project"
   - Find `dive-in-aquatics` repository
   - Click "Import"

4. **Deploy**:
   - Leave all settings as default (Next.js auto-detected)
   - Click "Deploy"
   - Wait 2 minutes ⏱️
   - Copy your deployment URL (e.g., `dive-in-aquatics-xyz.vercel.app`)

### Step 3: Connect Your Domain

1. **In Vercel Dashboard**:
   - Go to Project Settings → Domains
   - Add `diveinaquatics.in`
   - Add `www.diveinaquatics.in`

2. **Update DNS** (at your domain registrar):
   
   Add these 2 records:
   
   ```
   Type: A
   Name: @
   Value: 76.76.21.21
   ```
   
   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

3. **Wait 10-30 minutes** for DNS to propagate

4. **Done!** Visit https://diveinaquatics.in 🎉

---

## 📱 Test Your Site

After deployment, test:
- ✅ Home page loads
- ✅ All navigation links work
- ✅ Mobile menu works
- ✅ Contact form works
- ✅ Images load correctly
- ✅ Site works on mobile

---

## 🔄 Future Updates

To update your live site:

```bash
# 1. Make changes to your code
# 2. Commit and push
git add .
git commit -m "Update website"
git push origin main

# 3. Vercel automatically deploys in 2 minutes!
```

---

## ❓ Need Help?

See full guide: [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)

Vercel Support: https://vercel.com/support
