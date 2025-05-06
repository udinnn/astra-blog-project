"use client";

import Image from "next/image";
import { useRouter } from "next/navigation"; // Import useRouter dari Next.js
import React from "react";

const Hero = () => {
  const router = useRouter(); // Inisialisasi router

  return (
    <div>
      <div className="relative w-full h-screen flex justify-center z-0">
        {/* Gambar */}
        <Image
          src="/assets/teenagers.jpg"
          fill
          alt="Teenagers"
          className="object-cover"
          priority
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-blue-500 bg-opacity-50"></div>
        {/* Konten di atas overlay */}
        <div className="absolute inset-0 flex flex-row justify-start items-center space-x-4 m-2">
          <div className="flex flex-col w-1/2 text-left text-white p-4 space-y-4">
            <section className="font-bold text-3xl">
              <h1 className="my-2">
                Remaja SMART: Sehat, Mandiri, Aktif, Resilien, Peduli Gizi
              </h1>
              <h1>
                "Empower the Future: Youth Collaboration for a Resilient
                Indonesia"
              </h1>
            </section>
            <div className="flex">
              <button
                onClick={() => router.push("/about")} // Navigasi ke halaman About
                className="my-2 bg-white rounded-lg text-black p-2 text-sm inline-block"
              >
                Kenalan Lebih Dekat Dengan AORTA
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;