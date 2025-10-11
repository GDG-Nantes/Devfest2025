import type { NextConfig } from 'next';
import createMDX from '@next/mdx';

const nextConfig: NextConfig = {
  // output: 'export',
  output: process.env.NODE_ENV === 'development' ? undefined : 'standalone',
  pageExtensions: ['md', 'mdx', 'ts', 'tsx'],
  turbopack: {
    rules: {
      '*.yml': {
        loaders: ['yaml-loader'],
        as: 'ts',
      },
    },
  },
  webpack: (config) => {
    config.module?.rules.push({
      test: /\.ya?ml$/,
      use: 'yaml-loader',
    });
    return config;
  },
  images: {
    remotePatterns: [new URL('https://www.lecarredesdelices.com/**')],
  },
};

const withMDX = createMDX({
  options: {},
  // Add markdown plugins here, as desired
});

export default withMDX(nextConfig);
