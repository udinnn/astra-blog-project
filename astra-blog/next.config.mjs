/** @type {import('next').NextConfig} */
const nextConfig = {
  // Mungkin sudah ada konfigurasi lain di sini, biarkan saja.
  
  // TAMBAHKAN ATAU MODIFIKASI BAGIAN INI:
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};
export default nextConfig;
