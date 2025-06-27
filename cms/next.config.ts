import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "xeyyoeltdmpqifbirdsi.supabase.co",
        pathname: "/storage/v1/object/public/katalog-images/**",
      },
    ],
  },
};

export default nextConfig;
