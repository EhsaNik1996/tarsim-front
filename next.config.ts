import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    localPatterns: [
      {
        pathname: "/api/screenshot",
        search: "?url=*",
      },
      {
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
