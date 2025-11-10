# Image Assets Guide

## 📁 Folder Structure

```
public/image/
├── projects/          # Project cover images
├── main-logo/         # Logo files
├── aidil.jpg          # Profile photo
└── [other images]     # Company logos, awards, etc.
```

## 📸 Adding Your Own Photos

### For About Page & Projects Page

**Location:** `public/image/`

**Recommended naming:**
- Profile photo: `aidil.jpg` or `aidil.webp`
- Awards: `award-[name]-[number].jpg` (e.g., `award-bpi-1.jpg`)
- Certificates: `cert-[name].jpg`

### For Project Covers

**Location:** `public/image/projects/`

**Recommended naming:**
- `[project-name]-cover.jpg` or `.webp`
- Example: `bioinformatics-cover.webp`

## 🎨 Image Format Recommendations

### WebP vs JPG/PNG

**WebP (Recommended):**
- ✅ 25-35% smaller file size than JPG
- ✅ Better compression with same quality
- ✅ Supported by all modern browsers
- ✅ Next.js automatically optimizes WebP
- 🎯 **Best for:** All photos, especially large images

**JPG:**
- ✅ Universal compatibility
- ✅ Good for photos
- ⚠️ Larger file size than WebP
- 🎯 **Best for:** Fallback option

**PNG:**
- ✅ Supports transparency
- ✅ Lossless compression
- ⚠️ Much larger file size
- 🎯 **Best for:** Logos, icons with transparency

**SVG:**
- ✅ Scalable without quality loss
- ✅ Very small file size
- ✅ Perfect for logos
- 🎯 **Best for:** Logos, icons, illustrations

## 🔧 How to Convert to WebP

### Option 1: Online Tools (Easiest)
- https://squoosh.app/ (Google's tool)
- https://cloudconvert.com/jpg-to-webp
- Drag & drop your image, adjust quality (80-90%), download

### Option 2: Using Command Line
```bash
# Install cwebp (one time)
# Windows: Download from https://developers.google.com/speed/webp/download
# Mac: brew install webp
# Linux: sudo apt-get install webp

# Convert single image
cwebp -q 85 input.jpg -o output.webp

# Convert all JPG in folder
for file in *.jpg; do cwebp -q 85 "$file" -o "${file%.jpg}.webp"; done
```

### Option 3: Using Photoshop/GIMP
- Export as WebP format
- Quality: 80-90%

## 📏 Recommended Image Sizes

### Profile Photos
- **Size:** 500x500px (square)
- **Format:** WebP or JPG
- **Quality:** 85-90%
- **Max file size:** < 100KB

### Project Covers
- **Size:** 1920x1080px (16:9 ratio)
- **Format:** WebP or JPG
- **Quality:** 80-85%
- **Max file size:** < 300KB

### Award/Certificate Photos
- **Size:** 1200x800px or original
- **Format:** WebP or JPG
- **Quality:** 80-85%
- **Max file size:** < 200KB

### Company Logos
- **Size:** 400x400px (or original)
- **Format:** SVG (preferred) or PNG
- **Background:** Transparent if possible

## 🚀 Next.js Image Optimization

Next.js automatically optimizes images when you use the `<Image>` component:

```tsx
import Image from "next/image";

<Image
  src="/image/aidil.webp"
  alt="Aidil Baihaqi"
  width={500}
  height={500}
  priority // Use for above-the-fold images
/>
```

**Benefits:**
- Automatic lazy loading
- Responsive images
- Modern format conversion
- Blur placeholder

## 📝 Current Image Usage

### About Page
- Profile: `/image/aidil.jpg`
- Company logos: `/image/logo-*.svg|png`
- Awards: Need to add to `/image/award-*.jpg`

### Projects Page
- Project covers: Currently using Unsplash URLs
- Can replace with: `/image/projects/[project-name]-cover.webp`

### Contact Page
- No images currently

## ✅ Best Practices

1. **Always optimize images before uploading**
   - Use WebP when possible
   - Compress to 80-90% quality
   - Resize to appropriate dimensions

2. **Use descriptive filenames**
   - ✅ `bioinformatics-project-cover.webp`
   - ❌ `IMG_1234.jpg`

3. **Organize by category**
   - Projects → `projects/` folder
   - Awards → `award-` prefix
   - Logos → `logo-` prefix

4. **Keep file sizes small**
   - Profile photos: < 100KB
   - Project covers: < 300KB
   - Awards: < 200KB

5. **Use Next.js Image component**
   - Automatic optimization
   - Better performance
   - Lazy loading

## 🔄 Replacing Current Images

### To replace profile photo:
1. Convert your photo to WebP (500x500px)
2. Save as `public/image/aidil.webp`
3. Update code: `src="/image/aidil.webp"`

### To add award photos:
1. Convert photos to WebP
2. Save as `public/image/award-[name]-[number].webp`
3. Update `AwardCarousel` images array in `about/page.tsx`

### To add project covers:
1. Convert to WebP (1920x1080px)
2. Save to `public/image/projects/[project-name]-cover.webp`
3. Update `cover` field in `data/projects.ts`

## 📞 Need Help?

If you need help with image optimization or have questions, feel free to ask!
