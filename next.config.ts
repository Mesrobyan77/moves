import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      new URL("https://image.tmdb.org/t/p/w500/*"),
      new URL("https://image.tmdb.org/t/p/w300/*"),
      new URL("https://vidsrc.to/embed/movie/*"),
      {
        protocol: 'https',
        hostname: 'image.tmdb.org',
        pathname: '/t/p/**',
      },
    ],
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
};

export default nextConfig;
