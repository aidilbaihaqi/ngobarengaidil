import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['skillicons.dev'],
    dangerouslyAllowSVG: true,
  }
};

export default nextConfig;
