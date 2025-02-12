/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/products',
        destination: '/',
        permanent: true,
      }]}
}

module.exports = nextConfig