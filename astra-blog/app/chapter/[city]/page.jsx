"use client";

import React, { useState, useEffect, useMemo } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";

// Ganti dengan path yang sesuai ke komponen Anda
import Header from "@/components/Header";
import Maskot from "@/components/Maskot";
import Footer from "@/components/Footer";
import { storageService } from "@/Components/services/localStorageService";

// Impor Ikon untuk Tombol Share
import { Twitter, Facebook, Linkedin, Link2 } from "lucide-react";

// Komponen untuk Loading Skeleton
const LoadingSkeleton = () => (
  <div className="animate-pulse">
    <div className="h-[50vh] bg-gray-300"></div>
    <div className="max-w-4xl mx-auto p-8 space-y-8">
      <div className="h-10 bg-gray-300 rounded w-3/4 mx-auto"></div>
      <div className="h-4 bg-gray-300 rounded w-1/4 mx-auto"></div>
      <div className="space-y-4">
        <div className="h-6 bg-gray-300 rounded"></div>
        <div className="h-6 bg-gray-300 rounded w-5/6"></div>
        <div className="h-6 bg-gray-300 rounded w-full"></div>
        <div className="h-6 bg-gray-300 rounded w-3/4"></div>
      </div>
    </div>
  </div>
);

// Komponen untuk Tombol Share
const ShareButtons = ({ title, url }) => {
  const text = `Check out this article: ${title}`;
  const encodedUrl = encodeURIComponent(url);
  const encodedText = encodeURIComponent(text);

  return (
    <div className="flex items-center gap-4">
      <p className="text-sm font-semibold text-gray-700">Share:</p>
      <a
        href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedText}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-500 hover:text-blue-500"
      >
        <Twitter size={20} />
      </a>
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-500 hover:text-blue-700"
      >
        <Facebook size={20} />
      </a>
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-500 hover:text-blue-600"
      >
        <Linkedin size={20} />
      </a>
      <button
        onClick={() => navigator.clipboard.writeText(url)}
        className="text-gray-500 hover:text-green-600"
      >
        <Link2 size={20} />
      </button>
    </div>
  );
};

const CityPage = () => {
  const { city } = useParams();
  const decodedCity = useMemo(() => decodeURIComponent(city || ""), [city]);

  const [allArticles, setAllArticles] = useState([]);
  const [allChapters, setAllChapters] = useState([]);
  const [currentArticle, setCurrentArticle] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Menggunakan useMemo untuk mengkalkulasi data yang relevan
  const cityArticles = useMemo(() => {
    return allArticles
      .filter(
        (article) =>
          article.publishType === "chapter" && article.target === decodedCity
      )
      .sort((a, b) => new Date(b.date) - new Date(a.date));
  }, [allArticles, decodedCity]);

  const chapterDetails = useMemo(() => {
    return allChapters.find((chapter) => chapter.name === decodedCity);
  }, [allChapters, decodedCity]);

  // Efek untuk memuat data dari localStorage
  useEffect(() => {
    const loadData = () => {
      setIsLoading(true);
      // PERBAIKAN 1: Salah ketik pada key localStorage. Seharusnya "articles".
      const savedArticles = storageService.getItems("articles");
      const savedChapters = storageService.getItems("chapters");

      setAllArticles(savedArticles);
      setAllChapters(savedChapters);
      setIsLoading(false);
    };

    loadData();
    window.addEventListener("storage", loadData);
    return () => window.removeEventListener("storage", loadData);
  }, []);

  // Efek untuk mengatur artikel utama saat data berubah
  useEffect(() => {
    if (cityArticles.length > 0) {
      setCurrentArticle(cityArticles[0]);
    } else {
      setCurrentArticle(null);
    }
  }, [cityArticles]);

  // --- Helper Functions ---
  const formatDate = (dateString) => {
    if (!dateString) return "";
    return new Date(dateString).toLocaleDateString("id-ID", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const calculateReadingTime = (htmlContent) => {
    // PERBAIKAN: Tambahkan pengecekan ini
    // Jika htmlContent bukan string atau kosong, langsung kembalikan 0.
    if (typeof htmlContent !== "string" || !htmlContent) {
      return 0;
    }

    const text = htmlContent.replace(/<[^>]+>/g, ""); // Baris ini sekarang aman
    const wordsPerMinute = 200;
    const noOfWords = text.split(/\s/g).length;
    const minutes = Math.ceil(noOfWords / wordsPerMinute);
    return minutes;
  };

  // Tampilkan loading skeleton saat data dimuat
  if (isLoading) {
    return (
      <div className="bg-white">
        <Header />
        <LoadingSkeleton />
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-white">
      <Header />
      <Maskot />

      <main className="flex flex-col min-h-screen mt-12">
        {/* Hero Banner yang Responsif */}
        <div className="relative w-full h-[50vh] md:h-[60vh]">
          <Image
            src={chapterDetails?.imageReference || "/api/placeholder/1920/1080"}
            alt={`Chapter ${decodedCity}`}
            layout="fill"
            objectFit="cover"
            className="absolute inset-0"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 flex flex-col items-center justify-center p-8 text-center">
            <p className="text-white text-lg font-semibold tracking-widest uppercase">
              Chapter
            </p>
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold drop-shadow-lg mt-2">
              {decodedCity}
            </h1>
          </div>
        </div>

        {/* Konten Artikel atau Empty State */}
        {currentArticle ? (
          <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
            <article>
              <header className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                  {currentArticle.title}
                </h2>
                <div className="flex items-center justify-center gap-x-4 mt-4 text-sm text-gray-500">
                  <p>Published on: {formatDate(currentArticle.date)}</p>
                  <span aria-hidden="true">&middot;</span>
                  <p>{calculateReadingTime(currentArticle.content)} min read</p>
                </div>
              </header>

              <div
                className="prose prose-lg max-w-none prose-img:rounded-xl prose-headings:text-gray-800"
                dangerouslySetInnerHTML={{ __html: currentArticle.content }}
              />

              <footer className="mt-12 pt-8 border-t">
                <ShareButtons
                  title={currentArticle.title}
                  url={
                    typeof window !== "undefined" ? window.location.href : ""
                  }
                />
              </footer>
            </article>
          </div>
        ) : (
          <div className="text-center py-20 px-4">
            <h2 className="text-2xl font-bold text-gray-800">
              No Articles Yet
            </h2>
            <p className="mt-2 text-gray-500">
              There are no published articles for this chapter. Check back
              later!
            </p>
          </div>
        )}

        {/* PERBAIKAN 2: Menggunakan variabel yang benar, yaitu 'cityArticles'. */}
        {cityArticles.length > 1 && (
          <aside className="w-full bg-gray-50 py-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">
                More Articles
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {cityArticles
                  .filter((article) => article.id !== currentArticle?.id)
                  .map((article) => (
                    <div
                      key={article.id}
                      className="bg-white border p-4 rounded-lg cursor-pointer transition-transform duration-200 hover:scale-105 hover:shadow-md"
                      onClick={() => setCurrentArticle(article)}
                    >
                      <h4 className="font-bold text-lg text-gray-800 line-clamp-2">
                        {article.title}
                      </h4>
                      <div className="flex items-center gap-x-2 mt-2 text-xs text-gray-500">
                        <p>{formatDate(article.date)}</p>
                        <span>&middot;</span>
                        <p>{calculateReadingTime(article.content)} min read</p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </aside>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default CityPage;
