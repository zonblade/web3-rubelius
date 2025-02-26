import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000', // Or your port number
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'rubelius.retas.dev',
        port: '', // Or your port number
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;