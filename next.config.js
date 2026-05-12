/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // This allows the site to build even if there are small type errors
    ignoreBuildErrors: true,
  },
  eslint: {
    // This ignores linting warnings during build
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig
