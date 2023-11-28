/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'undfcbmldjkujposixvn\\.supabase\\.co',
        pathname: '/storage/v1/object/public/images/**',
      },
    ],
  },
};

module.exports = nextConfig;
