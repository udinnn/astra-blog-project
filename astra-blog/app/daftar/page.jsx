"use client";

import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import Maskot from "@/Components/Maskot";
import React, { useState, useEffect, useRef } from "react";

const Page = () => {
  const [loading, setLoading] = useState(true);
  const [iframeHeight, setIframeHeight] = useState(600);
  const iframeRef = useRef(null);

  // URL Google Form dengan parameter yang tepat untuk memastikan semua pertanyaan muncul
  const formUrl =
    "https://docs.google.com/forms/d/e/1FAIpQLSdIzi3_hjoH4eYfEGQT0F69FUquMhc2yfMS-5NctiKekZbK_w/viewform?embedded=true&usp=pp_url";

  // Fungsi untuk menangani pesan dari iframe
  const handleIframeMessage = (event) => {
    // Memeriksa jika pesan berasal dari Google Forms
    if (event.origin.includes("google.com")) {
      // Formulir telah selesai dimuat
      setLoading(false);
    }
  };
  const handleWindowResize = () => {
    adjustIframeHeight();
  };

  useEffect(() => {
    // Menambahkan event listener untuk mendengarkan pesan dari iframe
    window.addEventListener("message", handleIframeMessage);

    // Menambahkan event listener untuk resize window
    window.addEventListener("resize", handleWindowResize);

    // Menambahkan timeout sebagai fallback jika tidak ada pesan dari iframe
    const loadingTimeout = setTimeout(() => {
      setLoading(false);
      adjustIframeHeight();
    }, 3000);

    // Interval untuk check tinggi iframe secara berkala (untuk form yang dynamic)
    const heightCheckInterval = setInterval(() => {
      if (!loading) {
        adjustIframeHeight();
      }
    }, 2000);

    return () => {
      window.removeEventListener("message", handleIframeMessage);
      window.removeEventListener("resize", handleWindowResize);
      clearTimeout(loadingTimeout);
      clearInterval(heightCheckInterval);
    };
  }, [loading]);

  // Fungsi untuk menyesuaikan tinggi iframe secara dinamis berdasarkan konten
  const adjustIframeHeight = () => {
    if (iframeRef.current) {
      try {
        // Mencoba mendapatkan tinggi konten iframe
        const height =
          iframeRef.current.contentWindow.document.body.scrollHeight;
        iframeRef.current.style.height = `${height + 50}px`;
      } catch (e) {
        // Fallback jika terjadi error CORS
        iframeRef.current.style.height = "1200px";
      }
    }
  };

  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden">
      {/* Background dengan gradien dan pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        {/* Geometric pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-32 h-32 border-2 border-blue-300 rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-20 w-24 h-24 border-2 border-purple-300 rounded-lg rotate-45 animate-bounce"></div>
          <div className="absolute bottom-20 left-20 w-40 h-40 border-2 border-indigo-300 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-40 right-10 w-20 h-20 border-2 border-pink-300 rounded-lg rotate-12 animate-bounce delay-500"></div>
        </div>

        {/* Floating circles */}
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-blue-300 rounded-full animate-float"></div>
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-purple-300 rounded-full animate-float delay-700"></div>
        <div className="absolute bottom-1/4 left-1/3 w-4 h-4 bg-indigo-300 rounded-full animate-float delay-1000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Header />
        <Maskot />

        <div className="flex-grow flex justify-center items-center px-3 sm:px-6 lg:px-8 py-4 sm:py-8">
          {loading ? (
            <div className="flex flex-col items-center">
              <div className="relative">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
                <div className="absolute inset-0 animate-ping rounded-full h-12 w-12 border border-blue-300 opacity-75"></div>
              </div>
              <p className="mt-4 text-gray-700 font-medium text-sm sm:text-base">
                Memuat formulir...
              </p>
            </div>
          ) : (
            <div className="w-full max-w-xs sm:max-w-2xl lg:max-w-5xl mt-6 sm:mt-10">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/20 overflow-hidden hover:shadow-3xl transition-all duration-300">
                <div className="p-2 sm:p-4 lg:p-6">
                  <iframe
                    ref={iframeRef}
                    src="https://docs.google.com/forms/d/e/1FAIpQLScxQBjPOKJJjXANl2w4MqvuPYpiqd4oKmLGAHbisgS3Kdtdxg/viewform?embedded=true"
                    className="w-full border-0 rounded-lg transition-all duration-500 ease-in-out"
                    style={{ height: `${iframeHeight}px` }}
                    frameBorder="0"
                    marginHeight="0"
                    marginWidth="0"
                    onLoad={adjustIframeHeight}
                  >
                    Memuat…
                  </iframe>
                </div>
              </div>

              <div className="mt-4 sm:mt-6 text-center px-4">
                <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 sm:p-6 shadow-lg border border-white/30">
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                    Silakan isi formulir di atas dan klik tombol "Submit" atau "kirim" untuk mengirimkan formulir Anda.
                  </p>
                  <p className="text-gray-600 text-xs sm:text-sm mt-3 leading-relaxed">
                    Jika ada masalah dengan formulir, silakan{" "}
                    <a
                      href={formUrl}
                      className="text-blue-600 hover:text-astraColor-100 font-semibold transition-colors duration-200 hover:underline decoration-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      coba lagi
                    </a>
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

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

        .animate-float.delay-500 {
          animation-delay: 0.5s;
        }

        .animate-float.delay-700 {
          animation-delay: 0.7s;
        }

        .animate-float.delay-1000 {
          animation-delay: 1s;
        }

        .delay-1000 {
          animation-delay: 1s;
        }

        .delay-500 {
          animation-delay: 0.5s;
        }

        .shadow-3xl {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </div>
  );
};

export default Page;
