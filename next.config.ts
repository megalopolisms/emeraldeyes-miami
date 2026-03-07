import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Emerald Eyes Miami — Next.js 15 config */
  output: "export",
  images: { unoptimized: true },
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
};

export default nextConfig;
