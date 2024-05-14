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
        source: '/api/map/seoul_API',
        destination: `http://openAPI.seoul.go.kr:8088/${process.env.NEXT_PUBLIC_ANIMAL_HOSPITAL}/json/:slug*`,
      },
      {
        source: '/api/map/seoul_API',
        destination: `http://openapi.seoul.go.kr:8088/${process.env.NEXT_PUBLIC_ANIMAL_PHARAMCY}/json/:slug*`,
      },
    ];
  },
};

export default nextConfig;
