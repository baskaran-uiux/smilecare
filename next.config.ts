import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/smilecare",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
