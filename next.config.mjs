/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Enables static export for GitHub Pages
  basePath: "/ComTruise", // Set to your GitHub repo name
  images: {
    domains: ["hebbkx1anhila5yf.public.blob.vercel-storage.com"],
    unoptimized: true, // Required for static deployments
  },
  trailingSlash: true, // Ensures correct routing on GitHub Pages
  assetPrefix: "/ComTruise/", // Ensures assets load correctly
  distDir: "out", // Ensures correct build output
};

export default nextConfig;
