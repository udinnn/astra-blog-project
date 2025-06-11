"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, ChevronUp } from "lucide-react";

// Komponen standar
import Header from "@/components/Header";
import Maskot from "@/components/Maskot";
import Footer from "@/components/Footer";
import { storageService } from "@/Components/services/localStorageService"; // Sesuaikan path jika perlu

const KolaboraksiPage = () => {
  const router = useRouter();
  const [collaborations, setCollaborations] = useState([]);
  const [visibleCount, setVisibleCount] = useState(8); // Tampilkan 8 item pertama

  useEffect(() => {
    const loadCollaborations = () => {
      // Menggunakan service terpusat
      const savedCollaborations = storageService.getItems("collaborations");
      setCollaborations(savedCollaborations);
    };

    loadCollaborations();
    window.addEventListener("storage", loadCollaborations);
    return () => window.removeEventListener("storage", loadCollaborations);
  }, []);

  const showMore = () => setVisibleCount((prev) => prev + 8);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <div className="flex-grow">
        <Header />
        <Maskot />

        <div className="flex flex-col mt-10 p-6 md:p-8">
          <h1 className="text-4xl font-extrabold text-center text-gray-800 p-4">
            KolaborAksi AORTA
          </h1>
          <p className="text-center text-gray-500 max-w-2xl mx-auto">
            Bersama para mitra, kami berkolaborasi untuk menciptakan dampak positif yang lebih luas bagi masyarakat.
          </p>

          {/* Kartu Kolaborasi */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mt-10">
            {collaborations.slice(0, visibleCount).map((collab) => (
              <article
                key={collab.id}
                className="relative cursor-pointer group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                onClick={() =>
                  router.push(`/kolaboraksi/${encodeURIComponent(collab.partnerName)}`)
                }
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={collab.imageReference || "/api/placeholder/400/300"}
                    alt={`Collaboration with ${collab.partnerName}`}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300 flex items-end p-4">
                  <h3 className="text-white font-bold text-lg leading-tight drop-shadow-md">
                    {collab.partnerName}
                  </h3>
                </div>
              </article>
            ))}
          </div>

          {/* Tombol Show More */}
          <div className="flex justify-center mt-10">
            {visibleCount < collaborations.length && (
              <button
                onClick={showMore}
                className="flex items-center gap-2 text-blue-600 font-semibold px-6 py-3 rounded-full bg-white shadow hover:bg-gray-100 transition"
              >
                <ChevronDown size={20} />
                Tampilkan Lebih Banyak
              </button>
            )}
          </div>
        </div>
      </div>

       {/* CTA Section */}
       <div className="relative z-0 w-full mt-12">
         {/* ... (Kode CTA section Anda bisa diletakkan di sini, tidak perlu diubah) ... */}
       </div>

      <Footer />
    </div>
  );
};

export default KolaboraksiPage;