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
    <div className="flex flex-col min-h-screen">
      {/* Header and Content */}
      <div className="flex-grow">
        <Header />
        <Maskot />
        <div className="flex flex-col mt-10 p-8">
          <h1 className="text-4xl font-bold text-center p-2">Chapter AORTA</h1>

          {/* Chapter cards */}
          <div className="flex flex-wrap gap-4 justify-center mt-4">
            {chapters.map((chapter, index) => (
              <div
                key={chapter.id || index}
                className="relative cursor-pointer hover:scale-105"
                onClick={() =>
                  router.push(`/chapter/${encodeURIComponent(chapter.name)}`)
                }>
                {/* Image */}
                <div className="h-36 w-48 rounded-lg overflow-hidden">
                  {/* Use placeholder image since we're not storing actual images */}
                  <img
                    src="/api/placeholder/192/144"
                    alt={`Chapter ${chapter.name}`}
                    className="h-full w-full object-cover object-center"
                  />
                </div>

                {/* Overlay with text */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-lg">
                  <p className="text-white font-bold text-lg">{chapter.name}</p>
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
