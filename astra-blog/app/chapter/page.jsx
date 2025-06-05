"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Header from "@/Components/Header";
import Maskot from "@/Components/Maskot";
import Footer from "@/Components/Footer";

const Page = () => {
  const router = useRouter();
  const [chapters, setChapters] = useState([]);

  // Load chapters from localStorage on component mount
  useEffect(() => {
    const loadChapters = () => {
      const savedChapters = JSON.parse(
        localStorage.getItem("chapters") || "[]"
      );
      setChapters(savedChapters);
    };

    loadChapters();

    // Add event listener to refresh data when localStorage changes
    window.addEventListener("storage", loadChapters);

    return () => {
      window.removeEventListener("storage", loadChapters);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Header and Content */}
      <div className="flex-grow">
        <Header />
        <Maskot />
        <div className="flex flex-col mt-10 p-6 md:p-8">
          <h1 className="text-4xl font-extrabold text-center text-gray-700 p-4">Chapter AORTA</h1>

          {/* Chapter cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center mt-6">
            {chapters.map((chapter, index) => (
              <div
                key={chapter.id || index}
                className="relative cursor-pointer group hover:scale-105 transform transition-all duration-300 ease-in-out"
                onClick={() =>
                  router.push(`/chapter/${encodeURIComponent(chapter.name)}`)
                }
              >
                {/* Image */}
                <div className="h-36 sm:h-40 md:h-48 w-full rounded-lg overflow-hidden">
                  {/* Placeholder Image */}
                  <img
                    src="/api/placeholder/192/144"
                    alt={`Chapter ${chapter.name}`}
                    className="h-full w-full object-cover object-center"
                  />
                </div>

                {/* Overlay with text */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-lg group-hover:bg-black/70 transition-all duration-300 ease-in-out">
                  <p className="text-white font-semibold text-sm sm:text-base md:text-lg text-center">{chapter.name}</p>
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

export default Page;
