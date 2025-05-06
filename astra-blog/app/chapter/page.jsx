"use client";

import React from "react";
import { useRouter } from "next/navigation"; // Import useRouter untuk navigasi
import Header from "@/Components/Header";
import Maskot from "@/Components/Maskot";
import Footer from "@/Components/Footer";

const page = () => {
  const router = useRouter(); // Inisialisasi useRouter

  const data = [
    {
      imgelink:
        "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      articleLink: "/chapter/Bandung", // Link ke artikel Bandung
      city: "Bandung",
    },
    {
      imgelink:
        "https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      articleLink: "/chapter/Jakarta", // Link ke artikel Jakarta
      city: "Jakarta",
    },
    {
      imgelink:
        "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
      articleLink: "/chapter/Semarang", // Link ke artikel Semarang
      city: "Semarang",
    },
    {
      imgelink:
        "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
      articleLink: "/chapter/Medan", // Link ke artikel Medan
      city: "Medan",
    },
    {
      imgelink:
        "https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
      articleLink: "/chapter/Pontianak", // Link ke artikel Pontianak
      city: "Pontianak",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header dan Konten */}
      <div className="flex-grow">
        <Header />
        <Maskot />

        <div className="flex flex-col mt-10 p-8">
          <h1 className="text-4xl font-bold text-center p-2">Chapter AORTA</h1>

          {/* Gambar kecil */}
          <div className="flex flex-wrap gap-4 justify-center mt-4">
            {data.map(({ imgelink, articleLink, city }, index) => (
              <div
                key={index}
                className="relative cursor-pointer  hover:scale-105"
                onClick={() => router.push(articleLink)} // Navigasi ke halaman artikel
              >
                {/* Gambar kecil */}
                <img
                  src={imgelink}
                  className="h-36 w-48 rounded-lg object-cover object-center"
                  alt={`gallery-image-${city}`}
                />
                {/* Overlay dengan teks */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-lg">
                  <p className="text-white font-bold text-lg">{city}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default page;