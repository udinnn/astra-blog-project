"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Fungsi untuk memeriksa ukuran layar dan mengatur state isMobile
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Periksa ukuran layar saat komponen dimuat
    checkScreenSize();

    // Tambahkan event listener untuk merespons perubahan ukuran layar
    window.addEventListener("resize", checkScreenSize);

    // Bersihkan event listener saat komponen unmount
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Toggle menu mobile
  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <div>
      <div className="fixed top-0 w-full z-50 flex flex-row flex-wrap items-center justify-between p-2 bg-astraColor-100">
        <Image
          src="/assets/aorta.png"
          width={100}
          height={100}
          alt="Logo Aorta"
          className="mx-4 md:mx-8 filter invert"
        />

        {/* Hamburger menu untuk layar mobile */}
        {isMobile ? (
          <div className="mr-4">
            <button
              onClick={toggleMobileMenu}
              className="text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            {/* Menu navigasi mobile yang muncul saat hamburger menu diklik */}
            {showMobileMenu && (
              <div className="absolute right-0 mt-2 w-auto bg-astraColor-100 shadow-lg rounded-md py-1 z-50">
                <nav className="inline-flex flex-col space-y-2 text-white text-sm">
                  <Link href="/" className="hover:underline px-4 py-2 hover:bg-astraColor-200 rounded shadow-lg">
                    Beranda
                  </Link>
                  <Link href="/about" className="hover:underline px-4 py-2 hover:bg-astraColor-200 rounded shadow-lg">
                    Tentang Kami
                  </Link>
                  <Link href="/kegiatan" className="hover:underline px-4 py-2 hover:bg-astraColor-200 rounded shadow-lg">
                    Kegiatan
                  </Link>
                  <Link href="/chapter" className="hover:underline px-4 py-2 hover:bg-astraColor-200 rounded shadow-lg">
                    Chapter
                  </Link>
                  <Link href="/kolaboraksi" className="hover:underline px-4 py-2 hover:bg-astraColor-200 rounded shadow-lg">
                    KolaborAksi
                  </Link>
                  <Link href="/daftar" className="hover:underline px-4 py-2 hover:bg-astraColor-200 rounded">
                    Daftar
                  </Link>
                </nav>
              </div>
            )}
          </div>
        ) : (
          /* Menu navigasi desktop */
          <div className="flex flex-row space-x-4 text-sm mx-8 text-white">
            <button className="hover:underline hover:scale-105">
              <Link href="/">Beranda</Link>
            </button>
            <button className="hover:underline hover:scale-105">
              <Link href="/about">Tentang Kami</Link>
            </button>
            <button className="hover:underline hover:scale-105">
              <Link href="/kegiatan">Kegiatan</Link>
            </button>
            <button className="hover:underline hover:scale-105">
              <Link href="/chapter">Chapter</Link>
            </button>
            <button className="hover:underline hover:scale-105">
              <Link href="/kolaboraksi">KolaborAksi</Link>
            </button>
            <button className="hover:underline hover:scale-105">
              <Link href="/daftar">Daftar</Link>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;