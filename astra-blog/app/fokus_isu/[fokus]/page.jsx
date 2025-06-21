// page.jsx

"use client";

import React from "react";
import { useParams } from "next/navigation";
import Image from "next/image";

import Header from "@/components/Header"; // Pastikan path ini juga benar
import Maskot from "@/components/Maskot"; // Pastikan path ini juga benar
import Footer from "@/components/Footer"; // Pastikan path ini juga benar

// Impor data artikel dari lokasi yang sudah benar
import { articles } from "@/app/data/articles"; // Path ini sekarang akan berfungsi

// Fungsi helper untuk format tanggal
const formatDate = (dateString) => {
  if (!dateString) return "";
  return new Date(dateString).toLocaleDateString("id-ID", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const FokusIsuPage = () => {
  const { fokus } = useParams();

  const article = articles.find((a) => a.slug === fokus);

  // Membersihkan dan memformat slug untuk judul halaman
  const decodedFokus = decodeURIComponent(fokus || "")
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (l) => l.toUpperCase());

  // Tampilkan pesan jika artikel tidak ditemukan
  if (!article) {
    return (
      <div className="bg-white">
        <Header />
        <main className="flex flex-col items-center justify-center min-h-screen text-center px-4">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            404 - Artikel Tidak Ditemukan
          </h1>
          <p className="text-lg text-gray-600">
            Maaf, kami tidak dapat menemukan artikel untuk "{decodedFokus}".
          </p>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-white">
      <Header />
      <Maskot />

      <main className="flex flex-col min-h-screen mt-12">
        {/* Hero Banner dinamis berdasarkan artikel */}
        <div className="relative w-full h-[50vh] md:h-[60vh]">
          <Image
            src={article.imageUrl} // Gunakan gambar dari data artikel
            alt={`Fokus Isu ${decodedFokus}`}
            layout="fill"
            objectFit="cover"
            className="absolute inset-0"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 flex flex-col items-center justify-center p-8 text-center">
            <p className="text-white text-lg font-semibold tracking-widest uppercase">
              Fokus Isu
            </p>
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold drop-shadow-lg mt-2">
              {decodedFokus}
            </h1>
          </div>
        </div>

        {/* Konten Artikel Dinamis */}
        <div className="w-full max-w-4xl mx-auto px-8 sm:px-6 lg:px-8 py-8 md:py-12">
          <article>
            <header className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                {article.title} {/* Gunakan judul dari data artikel */}
              </h2>
              <div className="flex items-center justify-center gap-x-4 mt-4 text-sm text-gray-500">
                <p>Published on: {formatDate(article.date)}</p>{" "}
                {/* Gunakan tanggal dari data artikel */}
              </div>
            </header>

            {/* Konten Artikel dengan styling 'prose' */}
            <div
              className="prose prose-lg max-w-none prose-img:rounded-xl prose-headings:text-gray-800 text-justify"
              dangerouslySetInnerHTML={{ __html: article.content }} // Gunakan konten dari data artikel
            />
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FokusIsuPage;
