import type { NextConfig } from 'next';

const repoName = 'ShawkyDev';

// const nextConfig: NextConfig = {
//   output: 'export',

//   basePath: `/${repoName}`,
//   assetPrefix: `/${repoName}/`,

//   typescript: {
//     ignoreBuildErrors: true,
//   },

//   eslint: {
//     ignoreDuringBuilds: true,
//   },

//   images: {
//     unoptimized: true, // REQUIRED for GitHub Pages
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'placehold.co',
//         pathname: '/**',
//       },
//       {
//         protocol: 'https',
//         hostname: 'images.unsplash.com',
//         pathname: '/**',
//       },
//       {
//         protocol: 'https',
//         hostname: 'picsum.photos',
//         pathname: '/**',
//       },
//       {
//         protocol: 'https',
//         hostname: 'drive.google.com',
//         pathname: '/**',
//       },
//     ],
//   },
// };


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
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'drive.google.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;