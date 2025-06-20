/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "lyvxlwhfbeqmtgvfvlzy.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/**",
      },
    ],
    minimumCacheTTL: 2678400,
    formats: ["image/webp"],
    qualities: [25, 50, 75],
  },
};
export default nextConfig;
