"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Maskot from "@/components/Maskot";
import React, { useState, useEffect, useRef } from "react";

const Page = () => {
  const [loading, setLoading] = useState(true);
  const iframeRef = useRef(null);

  const formUrl =
    "https://docs.google.com/forms/d/e/1FAIpQLScxQBjPOKJJjXANl2w4MqvuPYpiqd4oKmLGAHbisgS3Kdtdxg/viewform?embedded=true";

  // Fungsi untuk menyesuaikan tinggi iframe agar pas dengan kontennya
  const adjustIframeHeight = () => {
    if (iframeRef.current) {
      try {
        // Atur tinggi ke 'auto' dulu untuk mendapatkan nilai scrollHeight yang akurat
        iframeRef.current.style.height = "auto";
        const contentHeight =
          iframeRef.current.contentWindow.document.body.scrollHeight;
        // Set tinggi iframe sesuai tinggi konten + sedikit ruang ekstra
        iframeRef.current.style.height = `${contentHeight + 20}px`;
      } catch (e) {
        console.warn(
          "Gagal mengakses konten iframe. Menggunakan tinggi fallback.",
          e
        );
        // Fallback jika terjadi error CORS
        iframeRef.current.style.height = "1200px";
      }
    }
  };

  useEffect(() => {
    const handleFormLoaded = () => setLoading(false);
    const iframeElement = iframeRef.current;
    if (iframeElement) {
      iframeElement.addEventListener("load", handleFormLoaded);
    }
    const loadingTimeout = setTimeout(() => setLoading(false), 3500); // Sedikit lebih lama
    return () => {
      clearTimeout(loadingTimeout);
      if (iframeElement) {
        iframeElement.removeEventListener("load", handleFormLoaded);
      }
    };
  }, []);

  useEffect(() => {
    if (!loading) {
      // Panggil fungsi penyesuaian tinggi secara berkala
      const heightCheckInterval = setInterval(adjustIframeHeight, 1000); // Lebih sering untuk responsivitas
      window.addEventListener("resize", adjustIframeHeight);

      // Panggil sekali di awal setelah loading selesai
      adjustIframeHeight();

      return () => {
        clearInterval(heightCheckInterval);
        window.removeEventListener("resize", adjustIframeHeight);
      };
    }
  }, [loading]);

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Background Decorations */}
      <div className="absolute inset-0 opacity-5 -z-10">
        <div className="absolute top-10 left-10 h-32 w-32 animate-pulse rounded-full border-2 border-blue-300"></div>
        <div className="absolute top-32 right-20 h-24 w-24 rotate-45 animate-bounce rounded-lg border-2 border-purple-300"></div>
        <div className="absolute bottom-20 left-20 h-40 w-40 animate-pulse rounded-full border-2 border-indigo-300 delay-1000"></div>
        <div className="absolute bottom-40 right-10 h-20 w-20 rotate-12 animate-bounce rounded-lg border-2 border-pink-300 delay-500"></div>
      </div>
      <div className="absolute top-1/4 left-1/4 h-3 w-3 animate-float rounded-full bg-blue-300 -z-10"></div>
      <div className="absolute top-1/3 right-1/3 h-2 w-2 animate-float rounded-full bg-purple-300 delay-700 -z-10"></div>
      <div className="absolute bottom-1/4 left-1/3 h-4 w-4 animate-float rounded-full bg-indigo-300 delay-1000 -z-10"></div>

      <div className="relative z-10 flex min-h-screen flex-col">
        <Header />
        <Maskot />

        {/* Perbaikan: Padding utama dikurangi sedikit di mobile untuk memberi ruang pada card */}
        <main className="flex flex-grow items-center justify-center px-3 py-4 sm:px-6 sm:py-8 lg:px-8">
          {loading ? (
            <div className="flex flex-col items-center text-center">
              <div className="relative">
                <div className="h-12 w-12 animate-spin rounded-full border-b-2 border-t-2 border-blue-500"></div>
                <div className="absolute inset-0 h-12 w-12 animate-ping rounded-full border border-blue-300 opacity-75"></div>
              </div>
              <p className="mt-4 font-medium text-gray-700 sm:text-base">
                Memuat formulir pendaftaran...
              </p>
            </div>
          ) : (
            <div className="mt-16 w-full sm:mt-12 sm:max-w-xl lg:max-w-4xl">
              <div className="transform-gpu overflow-hidden rounded-2xl border border-white/20 bg-white/80 shadow-2xl backdrop-blur-sm transition-all duration-300 hover:shadow-3xl">
                {/* Perbaikan: Padding dikembalikan di mobile (p-3), cukup untuk estetika tanpa menyebabkan scroll */}
                <div className="p-3 sm:p-4 lg:p-6">
                  <iframe
                    ref={iframeRef}
                    src={formUrl}
                    className="w-full border-0 transition-all duration-300 ease-in-out"
                    title="Formulir Pendaftaran"
                    // Perbaikan: Tinggi diatur oleh JS, diberi min-height untuk UX saat loading
                    style={{ minHeight: "500px" }}
                  >
                    Memuat…
                  </iframe>
                </div>
              </div>

              <div className="mt-4 text-center sm:mt-6">
                <div className="rounded-xl border border-white/30 bg-white/60 p-4 shadow-lg backdrop-blur-sm sm:p-6">
                  <p className="text-sm leading-relaxed text-gray-700 sm:text-base">
                    Silakan isi formulir di atas dan klik tombol "Submit" atau
                    "Kirim".
                  </p>
                  <p className="mt-3 text-xs leading-relaxed text-gray-600 sm:text-sm">
                    Jika formulir tidak muncul, silakan{" "}
                    <a
                      href={formUrl}
                      className="font-semibold text-blue-600 transition-colors duration-200 hover:text-blue-800 hover:underline decoration-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      klik di sini
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>
          )}
        </main>

        <Footer />
      </div>
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .delay-500 {
          animation-delay: 0.5s;
        }
        .delay-700 {
          animation-delay: 0.7s;
        }
        .delay-1000 {
          animation-delay: 1s;
        }
        .shadow-3xl {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </div>
  );
};

export default Page;
