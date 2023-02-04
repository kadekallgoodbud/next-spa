/** @type {import('next').NextConfig} */
const NextConfig = {
  reactStrictMode: false,
  compiler: {
    styledComponents: {
      ssr: true,
    }
  },
}
module.exports = NextConfig