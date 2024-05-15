const nextConfig = {
  swcMinify: true,
  // output: 'export',
  images: {
    unoptimized: true,
    domains: ['localhost', '*'],
  },
  webpack: config => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  async rewrites() {
    return [
      {
        source: '/api/seoul/',
        destination: `${process.env.NEXT_PUBLIC_ANIMAL_HOSPITAL}:path*`,
      },
      {
        source: '/api/seoul/',
        destination: `${process.env.NEXT_PUBLIC_ANIMAL_PHARAMCY}:path*`,
      },
      {
        source: '/api/serverReq/:path*',
        destination: `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/:path*`,
      },
    ];
  },
};

export default nextConfig;
