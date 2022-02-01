/** @type {import('next').NextConfig} */
module.exports = {
  swcMinify: true,
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/app",
        destination: "https://orbit.twistyapp.org",
        permanent: true,
      },
      {
        source: "/status",
        destination: "https://status.twistyapp.org",
        permanent: true,
      },
    ];
  },
};
