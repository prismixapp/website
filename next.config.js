/** @type {import('next').NextConfig} */
module.exports = {
  swcMinify: true,
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/app",
        destination: "https://orbit.prismix.app",
        permanent: true,
      },
      {
        source: "/status",
        destination: "https://status.prismix.app",
        permanent: true,
      },
    ];
  },
};
