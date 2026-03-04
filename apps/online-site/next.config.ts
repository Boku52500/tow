import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  turbopack: {
    // Force Turbopack to treat this subfolder as the project root
    // to ensure local PostCSS/Tailwind config is picked up in monorepos
    root: __dirname,
  },
};

export default nextConfig;
