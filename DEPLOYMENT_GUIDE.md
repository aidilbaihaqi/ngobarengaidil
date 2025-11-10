# 🚀 Panduan Deployment & Testing

## Persiapan Sebelum Deploy

### 1. Verifikasi Semua Perubahan
```bash
# Check status git
git status

# Review perubahan
git diff
```

### 2. Test Build Lokal
```bash
# Install dependencies (jika belum)
npm install

# Build production
npm run build

# Test production build
npm start
```

### 3. Test Lighthouse Lokal
```bash
# Buka browser ke http://localhost:3000
# Tekan F12 untuk DevTools
# Pilih tab "Lighthouse"
# Klik "Analyze page load"
```

## Deployment ke Production

### Vercel (Recommended untuk Next.js)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy production
vercel --prod
```

### Netlify
```bash
# Install Netlify CLI
npm i -g netlify-cli

# Build
npm run build

# Deploy
netlify deploy --prod --dir=.next
```

### Manual Deployment
```bash
# Build
npm run build

# Upload folder .next, public, dan package.json ke server
# Jalankan: npm start
```

## Testing Setelah Deploy

### 1. PageSpeed Insights
- Kunjungi: https://pagespeed.web.dev/
- Masukkan URL production
- Tunggu hasil analisis
- Screenshot hasil untuk dokumentasi

### 2. Lighthouse CI
```bash
# Install
npm install -g @lhci/cli

# Run
lhci autorun --collect.url=https://your-domain.com
```

### 3. WebPageTest
- Kunjungi: https://www.webpagetest.org/
- Masukkan URL production
- Pilih lokasi test terdekat
- Jalankan test

## Monitoring Performance

### Google Search Console
1. Tambahkan property website
2. Verifikasi ownership
3. Monitor Core Web Vitals di "Experience" section

### Vercel Analytics (jika deploy di Vercel)
```bash
# Install
npm install @vercel/analytics

# Tambahkan di app/layout.tsx
import { Analytics } from '@vercel/analytics/react';

// Di dalam <body>
<Analytics />
```

## Troubleshooting

### Jika Performance Masih Rendah

1. **Check Image Optimization**
   - Pastikan semua gambar sudah compressed
   - Gunakan format WebP/AVIF
   - Verifikasi sizes attribute sudah benar

2. **Check Third-Party Scripts**
   - Review semua external scripts
   - Gunakan defer atau async
   - Pertimbangkan self-hosting

3. **Check Bundle Size**
   ```bash
   # Analyze bundle
   npm run build
   # Check .next/analyze/
   ```

### Jika Accessibility Masih Rendah

1. **Test dengan Screen Reader**
   - Windows: NVDA (gratis)
   - Mac: VoiceOver (built-in)

2. **Test Keyboard Navigation**
   - Tab through semua interactive elements
   - Pastikan focus indicators visible

3. **Check Color Contrast**
   - Gunakan: https://webaim.org/resources/contrastchecker/

### Jika CLS Masih Tinggi

1. **Identify Layout Shifts**
   - Chrome DevTools → Performance
   - Record page load
   - Look for "Layout Shift" events

2. **Fix Common Issues**
   - Tambahkan dimensions pada images
   - Reserve space untuk ads/embeds
   - Avoid inserting content above existing content

## Checklist Pre-Launch

- [ ] Test di Chrome, Firefox, Safari
- [ ] Test di Mobile (iOS & Android)
- [ ] Test di berbagai screen sizes
- [ ] Verifikasi semua links berfungsi
- [ ] Test form submissions (jika ada)
- [ ] Verifikasi meta tags (Open Graph, Twitter Card)
- [ ] Test sharing di social media
- [ ] Verifikasi robots.txt accessible
- [ ] Verifikasi sitemap.xml accessible
- [ ] Setup Google Analytics (opsional)
- [ ] Setup error monitoring (Sentry, etc.)

## Post-Launch

### Week 1
- [ ] Monitor Lighthouse scores daily
- [ ] Check Google Search Console untuk errors
- [ ] Monitor server logs untuk 404s
- [ ] Collect user feedback

### Month 1
- [ ] Review Core Web Vitals trends
- [ ] Analyze user behavior (Analytics)
- [ ] Identify slow pages
- [ ] Plan next optimizations

## Resources

- [Next.js Performance](https://nextjs.org/docs/app/building-your-application/optimizing)
- [Web.dev Performance](https://web.dev/performance/)
- [Core Web Vitals](https://web.dev/vitals/)
- [Lighthouse Scoring](https://developer.chrome.com/docs/lighthouse/performance/performance-scoring/)

## Support

Jika ada pertanyaan atau issue:
1. Check dokumentasi Next.js
2. Search di Stack Overflow
3. Buka issue di GitHub repository
4. Konsultasi dengan developer community
