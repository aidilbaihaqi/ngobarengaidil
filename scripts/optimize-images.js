/**
 * Image Optimization Script
 * 
 * This script converts images to WebP format and resizes them for optimal web performance.
 * 
 * Prerequisites:
 * npm install sharp glob
 * 
 * Usage:
 * node scripts/optimize-images.js
 */

const sharp = require('sharp');
const { glob } = require('glob');
const path = require('path');
const fs = require('fs');

const INPUT_DIR = 'public/image';
const OUTPUT_DIR = 'public/image-optimized';
const MAX_WIDTH = 1920;
const QUALITY = 80;

async function optimizeImages() {
  // Create output directory if it doesn't exist
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  // Find all images
  const images = await glob(`${INPUT_DIR}/**/*.{jpg,jpeg,png,JPG,JPEG,PNG}`, {
    ignore: ['**/node_modules/**']
  });

  console.log(`Found ${images.length} images to optimize\n`);

  let totalOriginalSize = 0;
  let totalOptimizedSize = 0;

  for (const imagePath of images) {
    try {
      const relativePath = path.relative(INPUT_DIR, imagePath);
      const outputPath = path.join(OUTPUT_DIR, relativePath.replace(/\.(jpg|jpeg|png)$/i, '.webp'));
      const outputDir = path.dirname(outputPath);

      // Create subdirectory if needed
      if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
      }

      // Get original file size
      const originalStats = fs.statSync(imagePath);
      totalOriginalSize += originalStats.size;

      // Optimize image
      await sharp(imagePath)
        .resize(MAX_WIDTH, null, {
          withoutEnlargement: true,
          fit: 'inside'
        })
        .webp({ quality: QUALITY })
        .toFile(outputPath);

      // Get optimized file size
      const optimizedStats = fs.statSync(outputPath);
      totalOptimizedSize += optimizedStats.size;

      const savings = ((1 - optimizedStats.size / originalStats.size) * 100).toFixed(1);
      console.log(`✓ ${relativePath} -> ${path.basename(outputPath)} (${savings}% smaller)`);
    } catch (error) {
      console.error(`✗ Error processing ${imagePath}:`, error.message);
    }
  }

  console.log('\n--- Summary ---');
  console.log(`Original total: ${(totalOriginalSize / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Optimized total: ${(totalOptimizedSize / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Total savings: ${((1 - totalOptimizedSize / totalOriginalSize) * 100).toFixed(1)}%`);
}

optimizeImages().catch(console.error);
