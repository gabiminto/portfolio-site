# Gabi Minto - Personal Website

A modern Next.js portfolio website featuring photography and projects. Successfully converted from static HTML to a
component-based React application.

---

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

Static site will be generated in the `out/` directory, ready for deployment.

---

## ✨ Features

- **Next.js App Router** - Modern React framework with server and client components
- **View Transitions API** - Smooth page transitions using native browser API
- **TypeScript** - Type-safe development with full IDE support
- **Component-Based Architecture** - Reusable JSX components
- **Static Site Generation** - Fast, SEO-friendly pages
- **Responsive Design** - Mobile-friendly layout
- **Progressive Image Loading** - AVIF → WebP → JPEG fallbacks
- **Custom Fonts** - Optimized font loading

---

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout with metadata
│   ├── page.tsx                # Home page (converted from index.html)
│   └── photography/
│       ├── page.tsx            # Photography page (converted from photography.html)
│       └── photography.module.css
├── components/                  # Reusable JSX components
│   ├── Footer.tsx              # Navigation footer with hover effects
│   ├── InfoText.tsx            # Text sections with transitions
│   ├── PhotoContainer.tsx      # Photo display with multi-format support
│   ├── TransitionLink.tsx      # Links with View Transitions API
│   └── ViewTransitions.tsx     # View transitions wrapper
├── hooks/
│   └── useClientEffects.ts     # Custom hooks (favicon, mobile redirect)
└── styles/
    └── globals.css             # Global styles with view transitions

public/
├── images/                     # Image assets
└── fonts/                      # Custom font files

Configuration:
├── next.config.js              # Next.js configuration (static export)
├── tsconfig.json               # TypeScript configuration
├── .eslintrc.json              # ESLint rules
└── package.json                # Dependencies and scripts
```

---

## 📝 Conversion Summary

This project was converted from static HTML to Next.js with all features preserved:

| Original File                  | Next.js Equivalent             | Lines Reduced |
|--------------------------------|--------------------------------|---------------|
| `index.html` (218 lines)       | `src/app/page.tsx`             | 91% ↓         |
| `photography.html` (169 lines) | `src/app/photography/page.tsx` | 88% ↓         |
| `all.css` (143 lines)          | `src/styles/globals.css`       | Enhanced      |
| `all.js` (58 lines)            | Components + hooks             | Modularized   |

### Features Preserved ✅

- View transitions between pages
- Smooth animations (scale, slide, fade)
- Random favicon (10% chance of lucky pointer)
- Mobile redirect to Instagram
- Menu hover effects (show/hide sections)
- MouseDown to disable hover effects
- MinimizeMode (hides title on navigation)
- Responsive images (AVIF → WebP → JPEG)
- Custom fonts
- Sticky footer navigation

---

## 🧩 Components Guide

### Footer Component

Reusable navigation footer that appears on all pages.

```tsx
import Footer from '@/components/Footer';

// Default (shows title)
<Footer/>

// Hide title (for photography page)
<Footer hideTitle={true}/>
```

**Features:**

- Hover effects that highlight corresponding sections
- MouseDown removes hover effects
- MinimizeMode on navigation click

### InfoText Component

Display large section titles with view transitions.

```tsx
import InfoText from '@/components/InfoText';

<InfoText id="projects-info">PROJECTS</InfoText>
<InfoText id="photography-info">PHOTOGRAPHY</InfoText>
```

### PhotoContainer Component

Display photos with progressive image loading.

```tsx
import PhotoContainer from '@/components/PhotoContainer';

<PhotoContainer name="DSC_0094" displayName="DSC 0094"/>
```

**Image Requirements:**

- `/images/photography/avif/{name}.avif`
- `/images/photography/webp/{name}.webp`
- `/images/photography/jpeg/{name}.jpg`

### TransitionLink Component

Navigation with View Transitions API support.

```tsx
import TransitionLink from '@/components/TransitionLink';

<TransitionLink href="/photography">
    Photography
</TransitionLink>
```

---

## 🎨 View Transitions

This project uses the [View Transitions API](https://developer.mozilla.org/en-US/docs/Web/API/View_Transitions_API) for
smooth page transitions.

### Animations Defined

- **scale-in/scale-out** - Page fade and scale effects
- **slide-down/slide-up** - Footer animations
- **move-to-title** - Photography page title transformation
- **name-out** - Name title transitions

All transitions are defined in `src/styles/globals.css` and triggered automatically via the `TransitionLink` component.

### Browser Support

View Transitions API works in:

- Chrome 111+
- Edge 111+
- Opera 97+

For unsupported browsers, navigation works instantly (graceful degradation).

---

## 🛠️ Common Tasks

### Add a New Page

1. Create directory: `src/app/newpage/`
2. Create `src/app/newpage/page.tsx`:

```tsx
'use client';
import Footer from '@/components/Footer';

export default function NewPage() {
    return (
        <>
            <div>Your content here</div>
            <Footer/>
        </>
    );
}
```

3. Add to navigation in `src/components/Footer.tsx`

### Add More Photos

In `src/app/photography/page.tsx`:

```tsx
<PhotoContainer name="DSC_0104" displayName="DSC 0104"/>
<PhotoContainer name="DSC_0878" displayName="DSC 0878"/>
<PhotoContainer name="DSC_0923" displayName="DSC 0923"/>
```

### Update Styles

- **Global styles:** Edit `src/styles/globals.css`
- **Page-specific:** Create `{page}.module.css` in page directory
- **Inline styles:** Use React style prop

---

## 🚀 Deployment

### GitHub Pages

```bash
npm run build
# Upload the 'out' directory to your GitHub Pages repo
```

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically on push

### Netlify

1. Connect your repository
2. Build command: `npm run build`
3. Publish directory: `out`

---

## 📊 Build Stats

```
Route (app)                    Size     First Load JS
┌ ○ /                          1.16 kB  89 kB
└ ○ /photography               1.34 kB  89.2 kB

○ (Static) - Statically generated
```

Total bundle size: ~89 KB  
All pages are statically generated for optimal performance.

---

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Preview production build
- `npm run lint` - Run ESLint

---

## 📚 Additional Documentation

For more detailed information, see:

- **COMPONENT_GUIDE.md** - Detailed component usage examples
- **FINAL_VERIFICATION.md** - Complete feature checklist

---

## 🎯 What's Different from HTML Version

### Before (Static HTML)

- Repeated HTML on every page
- Manual event listener management
- No type safety
- No component reusability
- Manual build process

### After (Next.js)

- Reusable JSX components
- React hooks for state management
- TypeScript type safety
- Component-based architecture
- Optimized builds with code splitting
- Hot Module Replacement (HMR)

---

## 🐛 Troubleshooting

### Images not loading?

- Verify images are in `public/images/` directory
- Check paths start with `/images/` (not `./images/`)
- Ensure all three formats (AVIF, WebP, JPEG) exist

### Transitions not working?

- Use `TransitionLink` component for navigation
- Check browser supports View Transitions API
- Verify CSS transitions in `globals.css`

### Build errors?

- Run `npm install` to ensure dependencies installed
- Check TypeScript errors with `npm run build`
- Review terminal output for specific errors

---

## 📄 License

ISC

---

## 🎉 Ready to Go!

Your modern Next.js portfolio is ready. Run `npm run dev` to start developing!

