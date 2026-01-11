# Vercel Deployment Guide for Next.js

This project is now configured to deploy on Vercel with Next.js instead of static HTML.

## 🚀 Deployment Steps

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Go to Vercel Dashboard**
    - Visit [https://vercel.com/dashboard](https://vercel.com/dashboard)
    - Sign in with your GitHub account

2. **Import Your Repository**
    - Click "Add New..." → "Project"
    - Select `gabibag/gabibag.github.io` repository
    - Click "Import"

3. **Configure Project Settings**
    - **Framework Preset**: Next.js (should be auto-detected)
    - **Root Directory**: `./` (leave as default)
    - **Build Command**: `npm run build` (auto-detected)
    - **Output Directory**: `.next` (auto-detected)
    - **Install Command**: `npm install` (auto-detected)
    - **Development Command**: `npm run dev` (auto-detected)

4. **Environment Variables** (if needed)
    - Add any `.env` variables in the dashboard
    - Click "Deploy" when ready

5. **Deploy**
    - Click "Deploy"
    - Your site will be live at `your-project.vercel.app`

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI globally (if not already installed)
npm i -g vercel

# Login to Vercel
vercel login

# Deploy to preview
vercel

# Deploy to production
vercel --prod
```

## 📝 Configuration Files

### `vercel.json`

Configures Vercel to use Next.js framework:

- ✅ Automatic Next.js detection
- ✅ Optimized build process
- ✅ Serverless functions support
- ✅ Edge middleware support

### `next.config.ts`

Next.js configuration with:

- ✅ Standalone output mode for optimal deployment
- ✅ Image optimization (AVIF & WebP)
- ✅ Compression enabled
- ✅ React Strict Mode enabled

### `.vercelignore`

Excludes unnecessary files from deployment:

- ✅ node_modules
- ✅ Development logs
- ✅ IDE files
- ✅ Local environment variables

## 🔄 Updating from Static HTML to Next.js

### What Changed:

1. **Removed static HTML setup** - No longer serving `index.html`
2. **Added Next.js App Router** - Dynamic routing and SSR capabilities
3. **Vercel Configuration** - Now using Next.js framework preset
4. **Build Process** - Uses `next build` instead of static file serving

### Custom Domain Setup:

1. In Vercel Dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add your custom domain (e.g., `gabibag.github.io`)
4. Follow DNS configuration instructions

### GitHub Pages vs Vercel:

- **GitHub Pages**: Static files only
- **Vercel**: Full Next.js support with SSR, API routes, and serverless functions

## 🛠️ Development Workflow

```bash
# Start development server
npm run dev

# Build for production (test locally)
npm run build

# Start production server locally
npm start

# Run linting
npm run lint

# Fix linting issues
npm run lint:fix

# Type check
npm run type-check
```

## 📊 Post-Deployment

After deployment, Vercel will:

- ✅ Automatically deploy on every push to main branch
- ✅ Create preview deployments for pull requests
- ✅ Provide analytics and performance insights
- ✅ Enable instant rollbacks if needed

## 🔗 Useful Links

- [Vercel Dashboard](https://vercel.com/dashboard)
- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Documentation](https://vercel.com/docs)
- [Next.js on Vercel](https://vercel.com/docs/frameworks/nextjs)

## ⚙️ Advanced Configuration

### Adding Environment Variables:

1. Go to Vercel Dashboard → Your Project → Settings → Environment Variables
2. Add variables for Production, Preview, and Development
3. Redeploy to apply changes

### Custom Build Configuration:

Edit `next.config.ts` to customize:

- Image domains
- Redirects and rewrites
- Headers and CORS
- Internationalization (i18n)

### Performance Monitoring:

- Enable Vercel Analytics in project settings
- Monitor Core Web Vitals
- Track real user metrics

