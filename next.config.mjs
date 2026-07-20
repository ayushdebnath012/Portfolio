import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // There's an unrelated package-lock.json in the home directory, which makes
  // Turbopack guess the wrong workspace root. Pin it to this folder.
  turbopack: { root: dirname(fileURLToPath(import.meta.url)) },

  // Static export: `npm run build` emits a plain ./out folder you can host
  // anywhere (GitHub Pages, Netlify, Cloudflare Pages) with no Node server.
  output: "export",

  // GitHub Pages serves project sites from /<repo-name>. If you deploy there,
  // set BASE_PATH=/your-repo-name at build time. Leave unset for a custom
  // domain, Vercel, or Netlify.
  basePath: process.env.BASE_PATH || "",

  images: { unoptimized: true },

  // Emits /openings/index.html instead of /openings.html — friendlier to
  // static hosts that don't rewrite extensionless URLs.
  trailingSlash: true,
};

export default nextConfig;
