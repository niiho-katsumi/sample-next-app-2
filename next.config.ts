import type { NextConfig } from "next";
import { env } from "process";

const nextConfig: NextConfig = {
  images: {
    dangerouslyAllowLocalIP: process.env.NODE_ENV === "development",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.jp",
        port: "",
        pathname: "/**",
      },
      { protocol: "https", hostname: "images.microcms-assets.io" },
      {
        protocol: "https",
        hostname: process.env.NEXT_PUBLIC_SUPABASE_URL_HOSTNAME!,
        pathname: process.env.NEXT_PUBLIC_SUPABASE_URL_PATHNAME!,
      },
    ],
  },
};

export default nextConfig;
