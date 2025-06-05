"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Header from "@/Components/Header";
import Maskot from "@/Components/Maskot";
import Footer from "@/Components/Footer";
import Link from "next/link";

const Page = () => {
  const router = useRouter();
  const [collaborations, setCollaborations] = useState([]);
  const [visibleCount, setVisibleCount] = useState(10);

  useEffect(() => {
    const loadCollaborations = () => {
      const savedCollaborations = JSON.parse(
        localStorage.getItem("collaborations") || "[]"
      );
      setCollaborations(savedCollaborations);
    };

    loadCollaborations();
    window.addEventListener("storage", loadCollaborations);
    return () => window.removeEventListener("storage", loadCollaborations);
  }, []);

  const showMore = () => setVisibleCount((prev) => prev + 10);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <div className="flex-grow">
        <Header />
        <Maskot />

        <div className="flex flex-col mt-10 p-6 md:p-8">
          <h1 className="text-4xl font-extrabold text-center text-gray-700 p-4">
            KolaborAksi AORTA
          </h1>

          {/* Collaboration Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center">
            {collaborations.slice(0, visibleCount).map((collab, index) => (
              <div
                key={collab.id || index}
                className="relative cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out"
                onClick={() =>
                  router.push(
                    `/kolaboraksi/${encodeURIComponent(collab.partnerName)}`
                  )
                }
              >
                <div className="h-36 sm:h-40 w-full rounded-lg overflow-hidden shadow-md">
                  <img
                    src="/api/placeholder/192/144"
                    alt={`Collaboration with ${collab.partnerName}`}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-lg hover:bg-black/70 transition duration-300">
                  <p className="text-white font-semibold text-center text-sm sm:text-base md:text-lg">
                    {collab.partnerName}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 justify-center mt-6">
            {visibleCount < collaborations.length && (
              <button
                onClick={showMore}
                className="flex items-center gap-2 text-black px-4 py-2 rounded-lg bg-white shadow hover:bg-gray-200 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="black"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
                Show More
              </button>
            )}
            {visibleCount > 10 && collaborations.length > 10 && (
              <button
                onClick={() => setVisibleCount(10)}
                className="flex items-center gap-2 text-black px-4 py-2 rounded-lg bg-white shadow hover:bg-gray-200 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="black"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 15l7-7 7 7"
                  />
                </svg>
                Show Less
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

          {/* Maskot image untuk mobile: tampil di kolom yang sama */}
          <div className="lg:hidden mt-4 w-full flex justify-center">
            <img
              src="/assets/alya-aryo.png"
              alt="maskot"
              className="w-[200px] h-[200px] object-contain"
            />
          </div>
        </div>

        {/* Maskot image untuk desktop: tetap terpisah dan di luar background biru */}
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

export default Page;
