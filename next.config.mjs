/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['i.ibb.co', 'i.ibb.co.com'], // added your additional domain
  },
};

export default nextConfig;
