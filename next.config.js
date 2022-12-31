/** @type {import('next').NextConfig} */
const NextConfig = {
  reactStrictMode: true,
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },
}
module.exports = NextConfig