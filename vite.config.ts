import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Vite plugin: resize + compress public/assets images into dist/assets at build time.
// This keeps all <img src="/assets/..."> references intact.
function imageOptimizePlugin() {
  return {
    name: 'image-optimize',
    apply: 'build' as const,
    async closeBundle() {
      const sharp = (await import('sharp')).default;
      const distAssets = path.resolve(__dirname, 'dist/assets');
      if (!fs.existsSync(distAssets)) return;

      const jobs: Array<{ src: string; dest: string; width: number; quality: number }> = [
        {
          src: path.resolve(__dirname, 'public/assets/le_tiger.png'),
          dest: path.join(distAssets, 'le_tiger.png'),
          width: 100,   // max display size is 40px; 100px covers 2.5× retina
          quality: 85,
        },
        {
          src: path.resolve(__dirname, 'public/assets/Screenshot (13).png'),
          dest: path.join(distAssets, 'Screenshot (13).png'),
          width: 600,   // portfolio thumbnail max display ~300px; 600px = 2×
          quality: 80,
        },
      ];

      for (const { src, dest, width, quality } of jobs) {
        if (!fs.existsSync(src)) continue;
        const before = fs.statSync(src).size;
        await sharp(src)
          .resize({ width, withoutEnlargement: true })
          .png({ quality, compressionLevel: 9 })
          .toFile(dest + '.tmp');
        fs.renameSync(dest + '.tmp', dest);
        const after = fs.statSync(dest).size;
        console.log(
          `[image-optimize] ${path.basename(src)}: ${(before / 1024).toFixed(0)}KB → ${(after / 1024).toFixed(0)}KB`
        );
      }
    },
  };
}

export default defineConfig({
  plugins: [react(), imageOptimizePlugin()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
