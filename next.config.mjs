const withPWA = require('next-pwa')({
  dest: 'public',
});
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
        source: '/api/map/seoul',
        destination: `${process.env.NEXT_PUBLIC_ANIMAL_HOSPITAL}`,
      },
      {
        source: '/api/map/seoul',
        destination: `${process.env.NEXT_PUBLIC_ANIMAL_PHARAMCY}`,
      },
    ];
  },
};

export default withPWA(nextConfig);
