"use client";

import React, { useState } from "react";
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
      articleLink: "/kolaboraksi/anaksekolah",
      kolaboraksi: "Anak Sekolah",
    },
    {
      imgelink:
        "https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      articleLink: "/kolaboraksi/company",
      kolaboraksi: "Company",
    },
    {
      imgelink:
        "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
      articleLink: "/kolaboraksi/pantiasuhan",
      kolaboraksi: "Panti Asuhan",
    },
    {
      imgelink:
        "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
      articleLink: "/kolaboraksi/kaunduafa",
      kolaboraksi: "Kaum Duafa",
    },
    {
      imgelink:
        "https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
      articleLink: "/kolaboraksi/remajajompo",
      kolaboraksi: "Remaja Jompo",
    },
    {
      imgelink:
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      articleLink: "/kolaboraksi/volunteer",
      kolaboraksi: "Volunteer",
    },
    {
      imgelink:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      articleLink: "/kolaboraksi/teacher",
      kolaboraksi: "Teacher",
    },
    {
      imgelink:
        "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      articleLink: "/kolaboraksi/healthcare",
      kolaboraksi: "Healthcare",
    },
    {
      imgelink:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      articleLink: "/kolaboraksi/education",
      kolaboraksi: "Education",
    },
    {
      imgelink:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      articleLink: "/kolaboraksi/environment",
      kolaboraksi: "Environment",
    },
    // Tambahkan lebih banyak data
    {
      imgelink:
        "https://images.unsplash.com/photo-1556740749-887f6717d7e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      articleLink: "/kolaboraksi/technology",
      kolaboraksi: "Technology",
    },
    {
      imgelink:
        "https://images.unsplash.com/photo-1512446733611-9099a758e63e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      articleLink: "/kolaboraksi/science",
      kolaboraksi: "Science",
    },
    {
      imgelink:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      articleLink: "/kolaboraksi/arts",
      kolaboraksi: "Arts",
    },
    {
      imgelink:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      articleLink: "/kolaboraksi/sports",
      kolaboraksi: "Sports",
    },
  ];

  const [visibleCount, setVisibleCount] = useState(10); // Jumlah gambar yang terlihat

  const showMore = () => {
    setVisibleCount((prev) => prev + 10); // Tambahkan 10 gambar lagi
  };

  return (
    <div>
      <div className="flex flex-col min-h-screen">
        {/* Header dan Konten */}
        <div className="flex-grow">
          <Header />
          <Maskot />

          <div className="flex flex-col mt-10 p-8">
            <h1 className="text-4xl font-bold text-center p-2">
              KolaborAksi AORTA
            </h1>

            {/* Gambar kecil */}
            <div className="flex flex-wrap gap-4 justify-center mt-4">
              {data
                .slice(0, visibleCount)
                .map(({ imgelink, articleLink, kolaboraksi }, index) => (
                  <div
                    key={index}
                    className="relative cursor-pointer hover:scale-105"
                    onClick={() => router.push(articleLink)} // Navigasi ke halaman artikel
                  >
                    {/* Gambar kecil */}
                    <img
                      src={imgelink}
                      className="h-36 w-48 rounded-lg object-cover object-center"
                      alt={`gallery-image-${kolaboraksi}`}
                    />
                    {/* Overlay dengan teks */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-lg">
                      <p className="text-white font-bold text-lg">
                        {kolaboraksi}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
            {/* Tombol Show More dan Show Less */}
            <div className="flex justify-start items-start mt-4 gap-4 px-8">
              {visibleCount < data.length && (
                <button
                  onClick={showMore}
                  className="flex items-center gap-2 text-black px-4 py-2 rounded-lg"
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
              {visibleCount > 10 && (
                <button
                  onClick={() => setVisibleCount(10)} // Reset jumlah gambar ke 10
                  className="flex items-center gap-2  text-black px-4 py-2 rounded-lg"
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

export default page;
