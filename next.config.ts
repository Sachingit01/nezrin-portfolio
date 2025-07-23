import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  images: {
    domains: [
      "avatars.githubusercontent.com",
      "img.freepik.com",
      "images.ctfassets.net",
      "e7.pngegg.com",
      "www.shutterstock.com",
    ],
  },
};

export default nextConfig;

