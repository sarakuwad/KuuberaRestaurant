/**
 * Zero-dependency static build script for Vercel / Netlify / CI.
 * Ensures that if Vercel uses the cached "Vite" framework preset (which serves `dist/`),
 * all static files (`index.html`, `data/`, `components/`, `assets/`) are copied into `dist/`.
 */
import fs from "fs";
import path from "path";

const rootDir = process.cwd();
const distDir = path.join(rootDir, "dist");

function copyRecursive(src, dest) {
  const stat = fs.statSync(src);
  if (stat.isDirectory()) {
    fs.mkdirSync(dest, { recursive: true });
    for (const entry of fs.readdirSync(src)) {
      copyRecursive(path.join(src, entry), path.join(dest, entry));
    }
  } else {
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.copyFileSync(src, dest);
  }
}

fs.mkdirSync(distDir, { recursive: true });

const itemsToCopy = ["index.html", "README.md", "data", "components", "assets"];
for (const item of itemsToCopy) {
  const srcPath = path.join(rootDir, item);
  if (fs.existsSync(srcPath)) {
    copyRecursive(srcPath, path.join(distDir, item));
  }
}

console.log("Successfully prepared static build in ./dist for Vercel deployment.");
