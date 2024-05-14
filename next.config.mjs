/** @type {import('next').NextConfig} */
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
        source: '/api/map/seoulApi/json/:location/:start/:end/',
        destination: `${process.env.NEXT_PUBLIC_ANIMAL_HOSPITAL}/:location/:start/:end/`,
      },
      {
        source: '/api/map/seoulApi/json/:location/:start/:end/',
        destination: `${process.env.NEXT_PUBLIC_ANIMAL_PHARAMCY}/:location/:start/:end/`,
      },
    ];
  },
};

export default nextConfig;
