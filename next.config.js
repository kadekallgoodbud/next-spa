// Import the necessary packages
const withPWA = require('next-pwa');
const { withPolyfills } = require('next-polyfill');

// Define your Next.js configuration
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
};

// Add polyfills for necessary browser APIs
const polyfills = ['Promise', 'fetch'];

// Define HTTP/3 headers
const http3Headers = async () => {
  return [
    {
      source: '/',
      headers: [
        {
          key: 'Alt-Svc',
          value: 'h3-29=":443"; ma=3600',
        },
      ],
    },
  ];
};

// Export your Next.js configuration with PWA and polyfill support
module.exports = withPWA(
  withPolyfills({
    polyfills,
    http3Headers,
    ...NextConfig,
  })
);
