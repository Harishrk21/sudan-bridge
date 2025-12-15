# Vercel Deployment Guide for SudInd Smart Portal

## Prerequisites
- GitHub account (or GitLab/Bitbucket)
- Vercel account (free tier available)
- Your project code pushed to a Git repository

## Step-by-Step Deployment

### 1. Prepare Your Repository
```bash
# Make sure all changes are committed
git add .
git commit -m "Prepare for Vercel deployment"
git push origin main
```

### 2. Deploy to Vercel

#### Option A: Via Vercel Dashboard (Recommended)
1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "Add New Project"
3. Import your Git repository
4. Vercel will auto-detect the project settings:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
5. Click "Deploy"

#### Option B: Via Vercel CLI
```bash
# Install Vercel CLI globally
npm i -g vercel

# Login to Vercel
vercel login

# Deploy (from project root)
vercel

# For production deployment
vercel --prod
```

### 3. Environment Variables (if needed)
If you have any environment variables:
1. Go to Project Settings → Environment Variables
2. Add your variables:
   - `VITE_API_URL` (if you have an API)
   - `VITE_SITE_URL` (your domain URL)

### 4. Update Domain Settings
1. Go to Project Settings → Domains
2. Add your custom domain (e.g., `sudind.com`)
3. Follow DNS configuration instructions

### 5. Update SEO Configuration
After deployment, update these files with your actual domain:

1. **Update `src/components/SEO.tsx`**:
   - Change `siteUrl` from `'https://sudind.com'` to your actual domain

2. **Update `public/sitemap.xml`**:
   - Replace all instances of `https://sudind.com` with your actual domain

3. **Update `index.html`**:
   - Replace `https://sudind.com` with your actual domain in canonical and og:image URLs

### 6. Verify Deployment
After deployment, verify:
- ✅ Homepage loads correctly
- ✅ All routes work (SPA routing)
- ✅ SEO meta tags are present (check page source)
- ✅ Images load correctly
- ✅ Language toggle works
- ✅ Mobile responsiveness

## Post-Deployment Checklist

### SEO Verification
- [ ] Test with Google Search Console
- [ ] Submit sitemap: `https://yourdomain.com/sitemap.xml`
- [ ] Verify robots.txt: `https://yourdomain.com/robots.txt`
- [ ] Check Open Graph tags with [Facebook Debugger](https://developers.facebook.com/tools/debug/)
- [ ] Test Twitter Card with [Twitter Card Validator](https://cards-dev.twitter.com/validator)

### Performance
- [ ] Run Lighthouse audit
- [ ] Check Core Web Vitals
- [ ] Verify image optimization
- [ ] Test loading speed

### Functionality
- [ ] Test all navigation links
- [ ] Verify language toggle
- [ ] Test contact form
- [ ] Check mobile menu
- [ ] Verify all pages load correctly

## Configuration Files Included

### `vercel.json`
- Configured for Vite/React SPA
- Proper rewrites for client-side routing
- Security headers
- Cache control for static assets

### `public/robots.txt`
- Allows all search engines
- Disallows login/register pages
- Includes sitemap reference

### `public/sitemap.xml`
- All main pages included
- Proper priority and changefreq settings
- Update lastmod dates after major changes

## Troubleshooting

### Issue: 404 on page refresh
**Solution**: The `vercel.json` rewrite rules should handle this. If not, ensure the rewrite rule is correct.

### Issue: Images not loading
**Solution**: Check that image paths use `/` (absolute) not `./` (relative)

### Issue: SEO tags not updating
**Solution**: Clear browser cache and check that SEO component is properly imported in each page

### Issue: Build fails
**Solution**: 
- Check Node.js version (Vercel uses Node 18+ by default)
- Verify all dependencies are in `package.json`
- Check build logs in Vercel dashboard

## Continuous Deployment
Vercel automatically deploys on every push to your main branch. For production:
- Use `main` or `master` branch for production
- Create preview deployments for other branches

## Support
For issues:
1. Check Vercel deployment logs
2. Review browser console for errors
3. Verify all environment variables are set
4. Check Vercel documentation: https://vercel.com/docs

