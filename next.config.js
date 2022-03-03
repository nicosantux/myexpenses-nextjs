/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    reactRemoveProperties: { properties: ['data-test-id'] },
  },
}

module.exports = nextConfig
