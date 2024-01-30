/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["unsplash.com"],
  },
  redirects: async () => {
    return [
      {
        source: "/users",
        destination: "/",
        permanent: false,
      },

      {
        source: "/users/:userid",
        destination: "/",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
