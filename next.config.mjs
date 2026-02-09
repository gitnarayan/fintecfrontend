/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://15.207.25.109:5000/api/:path*",
      },
    ];
  },
};

export default nextConfig;
