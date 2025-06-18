"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import Header from "@/components/Header";
import Maskot from "@/components/Maskot";
import Footer from "@/components/Footer";
import { createClient } from "@/utils/supabase/client";

const KolaboraksiPage = () => {
  const router = useRouter();
  const [collaborations, setCollaborations] = useState([]);
  const [visibleCount, setVisibleCount] = useState(8); // Mengembalikan state untuk "Show More"
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadCollaborations = async () => {
      const supabase = createClient();
      const { data, error } = await supabase
        .from("collaborations")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching collaborations:", error);
      } else {
        setCollaborations(data);
      }
      setIsLoading(false);
    };

    loadCollaborations();
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
            Bersama para mitra, kami berkolaborasi untuk menciptakan dampak
            positif yang lebih luas bagi masyarakat.
          </p>

          {/* Kartu Kolaborasi */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mt-10">
            {collaborations.slice(0, visibleCount).map((collab) => (
              <article
                key={collab.id}
                className="relative cursor-pointer group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                onClick={() =>
                  router.push(
                    `/kolaboraksi/${encodeURIComponent(collab.partner_name)}`
                  )
                }>
                <div className="relative h-48 w-full">
                  <Image
                    src={collab.image_url || "/assets/placeholder.jpg"}
                    alt={`Collaboration with ${collab.partner_name}`}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-lg group-hover:bg-black/70 transition-all duration-300 ease-in-out">
                  <p className="text-white font-semibold text-sm sm:text-base md:text-lg text-center">
                    {collab.partner_name}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {/* Tombol Show More */}
          <div className="flex justify-center mt-10">
            {visibleCount < collaborations.length && (
              <button
                onClick={showMore}
                className="flex items-center gap-2 text-blue-600 font-semibold px-6 py-3 rounded-full bg-white shadow hover:bg-gray-100 transition">
                <ChevronDown size={20} />
                Tampilkan Lebih Banyak
              </button>
            )}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative z-0 w-full h-[400px]">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center h-3/4 p-6 sm:p-8 w-full text-white bg-blue-800">
          <div className="flex flex-col items-start text-left space-y-2">
            <h1 className="text-3xl sm:text-4xl font-bold">COLLABORATION</h1>
            <h3 className="text-lg sm:text-xl font-semibold">
              Let's collaborate for better future
            </h3>
            <button className="text-astraColor-100 rounded-lg bg-white px-4 py-2 mt-4 hover:scale-105 transition duration-300 ease-in-out">
              <Link href="/daftar">Ajukan Kolaboraksi</Link>
            </button>
          </div>

          <div className="lg:hidden mt-4 w-full flex justify-center">
            <img
              src="/assets/alya-aryo.png"
              alt="maskot"
              className="w-[200px] h-[200px] object-contain"
            />
          </div>
        </div>
        <img
          src="/assets/alya-aryo.png"
          alt="maskot"
          className="hidden lg:block absolute right-0 bottom-0 w-[400px] h-[400px] z-10 mx-8 -translate-y-8"
        />
      </div>

      <Footer />
    </div>
  );
};

export default KolaboraksiPage;
