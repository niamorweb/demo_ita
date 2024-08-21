/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "intheair.co",
        port: "",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
