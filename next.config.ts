import type { NextConfig } from 'next';

const repoName = 'ShawkyDev';
const isGithubPages =
  process.env.GITHUB_ACTIONS === 'true' ||
  process.env.DEPLOY_TARGET === 'github';

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_BASE_PATH: isGithubPages ? `/${repoName}` : '',
  },

  typescript: {
    ignoreBuildErrors: true,
  },

  eslint: {
    ignoreDuringBuilds: true,
  },

  images: {
    // Keep image URLs static so they work on GitHub Pages (no Next image server).
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'drive.google.com',
        pathname: '/**',
      },
    ],
  },
};

if (isGithubPages) {
  nextConfig.output = 'export';
  nextConfig.basePath = `/${repoName}`;
  nextConfig.assetPrefix = `/${repoName}/`;
  nextConfig.trailingSlash = true;
}

export default nextConfig;
