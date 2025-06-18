/** @type {import('next').NextConfig} */
const nextConfig = {
  // Mungkin sudah ada konfigurasi lain di sini, biarkan saja.

  // TAMBAHKAN ATAU MODIFIKASI BAGIAN INI:
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
        // Ganti 'xxxxxxxxxxxxxxxxxxxx' dengan ID Proyek Supabase Anda
        hostname: "lyvxlwhfbeqmtgvfvlzy.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/**",
      },
    ],
  },
};
export default nextConfig;
