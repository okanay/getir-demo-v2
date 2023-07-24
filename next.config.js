/** @type {import('next').NextConfig} */
const nextConfig = {
   reactStrictMode: false,
   async rewrites() {
      return [
         {
            source: '/api/:path*',
            destination: 'https://localhost:7088/api/:path*',
         },
      ]
   },
}

const withNextIntl = require('next-intl/plugin')(
   // This is the default (also the `src` folder is supported out of the box)
   './i18n.js',
)

module.exports = withNextIntl(nextConfig)
