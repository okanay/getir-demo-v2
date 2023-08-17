/** @type {import('next').NextConfig} */

const nextConfig = {
   reactStrictMode: true,
   async rewrites() {
      return [
         {
            source: '/api/:path*',
            destination: 'https://localhost:7088/api/:path*',
         },
      ]
   },
}

const withNextIntl = require('next-intl/plugin')('./i18n.js')

module.exports = withNextIntl(nextConfig)
