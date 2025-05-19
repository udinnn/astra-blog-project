"use client";

import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import Maskot from "@/Components/Maskot";
import React, { useState, useEffect, useRef } from "react";

const Page = () => {
  const [loading, setLoading] = useState(true);
  const iframeRef = useRef(null);
  
  // URL Google Form dengan parameter yang tepat untuk memastikan semua pertanyaan muncul
  const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSdIzi3_hjoH4eYfEGQT0F69FUquMhc2yfMS-5NctiKekZbK_w/viewform?embedded=true&usp=pp_url";
  
  // Fungsi untuk menangani pesan dari iframe
  const handleIframeMessage = (event) => {
    // Memeriksa jika pesan berasal dari Google Forms
    if (event.origin.includes('google.com')) {
      // Formulir telah selesai dimuat
      setLoading(false);
    }
  };

  useEffect(() => {
    // Menambahkan event listener untuk mendengarkan pesan dari iframe
    window.addEventListener('message', handleIframeMessage);
    
    // Menambahkan timeout sebagai fallback jika tidak ada pesan dari iframe
    const loadingTimeout = setTimeout(() => {
      setLoading(false);
    }, 3000);
    
    return () => {
      window.removeEventListener('message', handleIframeMessage);
      clearTimeout(loadingTimeout);
    };
  }, []);

  // Fungsi untuk menyesuaikan tinggi iframe secara dinamis berdasarkan konten
  const adjustIframeHeight = () => {
    if (iframeRef.current) {
      try {
        // Mencoba mendapatkan tinggi konten iframe
        const height = iframeRef.current.contentWindow.document.body.scrollHeight;
        iframeRef.current.style.height = `${height + 50}px`;
      } catch (e) {
        // Fallback jika terjadi error CORS
        iframeRef.current.style.height = '1200px';
      }
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Maskot />
      
      <div className="flex-grow flex justify-center items-center px-4 py-8">
        {loading ? (
          <div className="flex flex-col items-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            <p className="mt-4 text-gray-600">Memuat formulir...</p>
          </div>
        ) : (
          <div className="w-full max-w-5xl mt-10">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <iframe
                ref={iframeRef}
                src={formUrl}
                width="100%"
                height="1000"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
                allowFullScreen
                title="Google Form"
                onLoad={() => {
                  setLoading(false);
                  setTimeout(adjustIframeHeight, 500);
                }}
                className="w-full"
              >
                Memuat...
              </iframe>
            </div>
            
            <div className="mt-4 text-center">
              <p className="text-gray-600">
                Silakan isi formulir di atas dan klik tombol "Submit" untuk mengirimkannya
              </p>
              <p className="text-gray-500 text-sm mt-2">
                Jika ada masalah dengan formulir, silakan <a 
                  href={formUrl}
                  className="text-blue-500 hover:text-blue-700 font-medium"
                >
                  coba lagi
                </a>
              </p>
            </div>
          </div>
        )}
      </div>
      
      <Footer />
    </div>
  );
};

export default Page;