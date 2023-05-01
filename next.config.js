/** @type {import('next').NextConfig} */
const NextConfig = {
  reactStrictMode: false,
  api: {
    bodyParser: false,
  },
  compiler: {
    styledComponents: {
      ssr: true,
    },
  },
}

const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  // scope: '/app',
  sw: 'service-worker.js',
  //...
})

module.exports = withPWA({
  ...NextConfig
})
