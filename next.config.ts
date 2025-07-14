import type { NextConfig } from "next";

module.exports = {
  webpack(config: any) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });
    return config;
  },
};

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
