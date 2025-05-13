"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Header from "@/Components/Header";
import Maskot from "@/Components/Maskot";
import Footer from "@/Components/Footer";

const Page = () => {
  const router = useRouter();
  const [collaborations, setCollaborations] = useState([]);
  const [visibleCount, setVisibleCount] = useState(10);

  // Load collaborations from localStorage on component mount
  useEffect(() => {
    const loadCollaborations = () => {
      const savedCollaborations = JSON.parse(
        localStorage.getItem("collaborations") || "[]"
      );
      setCollaborations(savedCollaborations);
    };

    loadCollaborations();

    // Add event listener to refresh data when localStorage changes
    window.addEventListener("storage", loadCollaborations);

    return () => {
      window.removeEventListener("storage", loadCollaborations);
    };
  }, []);

  const showMore = () => {
    setVisibleCount((prev) => prev + 10);
  };

  return (
    <div>
      <div className="flex flex-col min-h-screen">
        {/* Header and Content */}
        <div className="flex-grow">
          <Header />
          <Maskot />

          <div className="flex flex-col mt-10 p-8">
            <h1 className="text-4xl font-bold text-center p-2">
              KolaborAksi AORTA
            </h1>

            {/* Collaboration cards */}
            <div className="flex flex-wrap gap-4 justify-center mt-4">
              {collaborations.slice(0, visibleCount).map((collab, index) => (
                <div
                  key={collab.id || index}
                  className="relative cursor-pointer hover:scale-105"
                  onClick={() =>
                    router.push(
                      `/kolaboraksi/${encodeURIComponent(collab.partnerName)}`
                    )
                  }>
                  {/* Image */}
                  <div className="h-36 w-48 rounded-lg overflow-hidden">
                    {/* Use placeholder image since we're not storing actual images */}
                    <img
                      src="/api/placeholder/192/144"
                      alt={`Collaboration with ${collab.partnerName}`}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>

                  {/* Overlay with text */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-lg">
                    <p className="text-white font-bold text-lg">
                      {collab.partnerName}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Show More and Show Less buttons */}
            <div className="flex justify-start items-start mt-4 gap-4 px-8">
              {visibleCount < collaborations.length && (
                <button
                  onClick={showMore}
                  className="flex items-center gap-2 text-black px-4 py-2 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="black"
                    className="h-5 w-5">
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
                  className="flex items-center gap-2 text-black px-4 py-2 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="black"
                    className="h-5 w-5">
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
      </div>

      <div className="relative z-0 w-full h-[360px]">
        <div className="flex flex-col justify-center items-start h-3/4 p-8 w-full text-white bg-blue-800">
          <h1 className="text-5xl font-bold py-2">COLLABORATION</h1>
          <h3 className="text-xl font-semibold">
            Let's collaborate for better future
          </h3>
          <button className="text-black rounded-lg bg-white px-4 py-2 my-4">
            Ajukan Kolaborasi
          </button>
        </div>
        <img
          src="/assets/maskot.png"
          alt="maskot"
          className="absolute right-0 bottom-0 w-[300px] h-[300px] z-10 mx-8"
        />
      </div>
      <Footer />
    </div>
  );
};

export default Page;
