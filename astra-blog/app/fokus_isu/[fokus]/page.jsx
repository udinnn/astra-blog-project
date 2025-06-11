"use client";

import React from "react";
import { useParams } from "next/navigation";
import Image from "next/image";

// Komponen standar
import Header from "@/components/Header";
import Maskot from "@/components/Maskot";
import Footer from "@/components/Footer";

// Data Hardcoded untuk UI
// Kita bisa memperluas ini nanti jika ada data artikel sungguhan
const hardcodedArticle = {
  title: "Memajukan Pendidikan di Era Digital",
  date: "2025-06-11",
  // Konten ditulis sebagai string HTML agar bisa diproses oleh 'prose'
  content: `
    <p>Pendidikan merupakan pilar utama dalam membangun masa depan bangsa. Di tengah pesatnya perkembangan teknologi, AORTA berkomitmen untuk memastikan bahwa setiap anak Indonesia mendapatkan akses terhadap pendidikan berkualitas yang relevan dengan tuntutan zaman.</p>
    <img src="" alt="Siswa belajar dengan laptop" class="rounded-xl shadow-lg my-8" />
    <h2>Inisiatif Kami</h2>
    <p>Melalui berbagai program, kami fokus pada tiga area utama:</p>
    <ul>
      <li><strong>Literasi Digital:</strong> Mengajarkan keterampilan digital dasar kepada siswa dan guru di daerah terpencil.</li>
      <li><strong>Akses Teknologi:</strong> Menyediakan perangkat belajar seperti laptop dan tablet untuk sekolah-sekolah yang membutuhkan.</li>
      <li><strong>Pengembangan Kurikulum:</strong> Bekerja sama dengan para ahli untuk mengembangkan materi ajar yang interaktif dan menarik.</li>
    </ul>
    <p>Kami percaya bahwa dengan sinergi dan kolaborasi, kita dapat menciptakan ekosistem pendidikan yang inovatif dan inklusif, membuka jalan bagi generasi penerus untuk meraih potensi terbaik mereka.</p>
  `,
};

// Fungsi helper bisa diletakkan di sini atau di file terpisah
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
  
  // Membersihkan dan memformat parameter URL untuk judul
  const decodedFokus = decodeURIComponent(fokus || "")
    .replace(/[-_]/g, ' ') // Ganti tanda hubung dengan spasi
    .replace(/\b\w/g, l => l.toUpperCase()); // Jadikan setiap kata huruf kapital

  return (
    <div className="bg-white">
      <Header />
      <Maskot />

      <main className="flex flex-col min-h-screen mt-12">
        {/* Hero Banner yang Responsif, meniru CityPage */}
        <div className="relative w-full h-[50vh] md:h-[60vh]">
          <Image
            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070"
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

        {/* Konten Artikel Hardcoded */}
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          <article>
            <header className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                {hardcodedArticle.title}
              </h2>
              <div className="flex items-center justify-center gap-x-4 mt-4 text-sm text-gray-500">
                <p>Published on: {formatDate(hardcodedArticle.date)}</p>
              </div>
            </header>

            {/* Konten Artikel dengan styling 'prose' */}
            <div
              className="prose prose-lg max-w-none prose-img:rounded-xl prose-headings:text-gray-800"
              dangerouslySetInnerHTML={{ __html: hardcodedArticle.content }}
            />
          </article>
        </div>
        
        {/* Bagian "More Articles" sengaja tidak ditampilkan karena konten masih hardcoded */}

      </main>

      <Footer />
    </div>
  );
};

export default FokusIsuPage;