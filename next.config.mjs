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
        source: '/api/map/seoulApi',
        destination: `http://openAPI.seoul.go.kr:8088/${process.env.NEXT_PUBLIC_ANIMAL_HOSPITAL}/json/:filter/:start/:end`,
      },
      {
        source: '/api/map/seoulApi',
        destination: `http://openapi.seoul.go.kr:8088/${process.env.NEXT_PUBLIC_ANIMAL_PHARAMCY}/json/:filter/:start/:end`,
      },
      {
        source: '/api/serverReq/:path*',
        destination: `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/:path*`,
      },
    ];
  },
};

export default nextConfig;
