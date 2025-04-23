import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";

const Menu = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(true); // State untuk mengontrol apakah menu terbuka
  const [activePage, setActivePage] = useState(""); // State untuk melacak halaman aktif

  // Sinkronkan state activePage dengan URL saat ini
  useEffect(() => {
    const currentPath = window.location.pathname; // Ambil path URL saat ini
    setActivePage(currentPath); // Set activePage berdasarkan URL
  }, [router.pathname]); // Jalankan setiap kali URL berubah

  const toggleHome = () => {
    router.push("/"); // Navigasi ke halaman Home
  };

  const toggleAbout = () => {
    router.push("/about"); // Navigasi ke halaman About
  };

  const toggleArticles = () => {
    router.push("/article"); // Navigasi ke halaman Articles
  };

  if (!isMenuOpen) return null; // Jangan render menu jika isMenuOpen bernilai false

  return (
    <div>
      {/* Menu dengan tombol close */}
      <div className="fixed top-0 right-0 h-3/4 flex justify-center items-center bg-slate-600 shadow-md shadow-black rounded-b-full p-4 z-50">
        <div className="flex flex-col justify-center items-center relative">
          {/* Konten Menu */}
          <div
            className={`relative group w-full my-4 p-2 rounded-lg cursor-pointer ${
              activePage === "/" ? "bg-gray-700" : ""
            }`}
            onClick={toggleHome}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="cursor-pointer filter invert"
            >
              <path d="M 19.469 12.594 l 3.625 3.313 c 0.438 0.406 0.313 0.719 -0.281 0.719 h -2.719 v 8.656 c 0 0.594 -0.5 1.125 -1.094 1.125 h -4.719 v -6.063 c 0 -0.594 -0.531 -1.125 -1.125 -1.125 h -2.969 c -0.594 0 -1.125 0.531 -1.125 1.125 v 6.063 h -4.719 c -0.594 0 -1.125 -0.531 -1.125 -1.125 v -8.656 h -2.688 c -0.594 0 -0.719 -0.313 -0.281 -0.719 l 10.594 -9.625 c 0.438 -0.406 1.188 -0.406 1.656 0 l 2.406 2.156 v -1.719 c 0 -0.594 0.531 -1.125 1.125 -1.125 h 2.344 c 0.594 0 1.094 0.531 1.094 1.125 v 5.875 Z" />
            </svg>
            <div className="absolute top-1/2 -left-16 transform -translate-y-1/2 w-auto bg-gray-700 rounded-full text-white text-left p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[4px_4px_6px_rgba(0,0,0,0.5)]">
              <p className="text-sm">Home</p>
            </div>
          </div>

          <div
            className={`relative group w-full p-2 rounded-lg cursor-pointer ${
              activePage === "/about" ? "bg-gray-700" : ""
            }`}
            onClick={toggleAbout}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 50 50"
              fill="currentColor"
              className="cursor-pointer filter invert"
            >
              <path d="M 8 2 L 8 6 L 4 6 L 4 48 L 15 48 L 15 39 L 19 39 L 19 48 L 30 48 L 30 6 L 26 6 L 26 2 Z M 10 10 L 12 10 L 12 12 L 10 12 Z M 14 10 L 16 10 L 16 12 L 14 12 Z M 18 10 L 20 10 L 20 12 L 18 12 Z M 22 10 L 24 10 L 24 12 L 22 12 Z M 32 14 L 32 18 L 34 18 L 34 20 L 32 20 L 32 22 L 34 22 L 34 24 L 32 24 L 32 26 L 34 26 L 34 28 L 32 28 L 32 30 L 34 30 L 34 32 L 32 32 L 32 34 L 34 34 L 34 36 L 32 36 L 32 38 L 34 38 L 34 40 L 32 40 L 32 42 L 34 42 L 34 44 L 32 44 L 32 48 L 46 48 L 46 14 Z M 10 15 L 12 15 L 12 19 L 10 19 Z M 14 15 L 16 15 L 16 19 L 14 19 Z M 18 15 L 20 15 L 20 19 L 18 19 Z M 22 15 L 24 15 L 24 19 L 22 19 Z M 36 18 L 38 18 L 38 20 L 36 20 Z M 40 18 L 42 18 L 42 20 L 40 20 Z M 10 21 L 12 21 L 12 25 L 10 25 Z M 14 21 L 16 21 L 16 25 L 14 25 Z M 18 21 L 20 21 L 20 25 L 18 25 Z M 22 21 L 24 21 L 24 25 L 22 25 Z M 36 22 L 38 22 L 38 24 L 36 24 Z M 40 22 L 42 22 L 42 24 L 40 24 Z M 36 26 L 38 26 L 38 28 L 36 28 Z M 40 26 L 42 26 L 42 28 L 40 28 Z M 10 27 L 12 27 L 12 31 L 10 31 Z M 14 27 L 16 27 L 16 31 L 14 31 Z M 18 27 L 20 27 L 20 31 L 18 31 Z M 22 27 L 24 27 L 24 31 L 22 31 Z M 36 30 L 38 30 L 38 32 L 36 32 Z M 40 30 L 42 30 L 42 32 L 40 32 Z M 10 33 L 12 33 L 12 37 L 10 37 Z M 14 33 L 16 33 L 16 37 L 14 37 Z M 18 33 L 20 33 L 20 37 L 18 37 Z M 22 33 L 24 33 L 24 37 L 22 37 Z M 36 34 L 38 34 L 38 36 L 36 36 Z M 40 34 L 42 34 L 42 36 L 40 36 Z M 36 38 L 38 38 L 38 40 L 36 40 Z M 40 38 L 42 38 L 42 40 L 40 40 Z M 10 39 L 12 39 L 12 44 L 10 44 Z M 22 39 L 24 39 L 24 44 L 22 44 Z M 36 42 L 38 42 L 38 44 L 36 44 Z M 40 42 L 42 42 L 42 44 L 40 44 Z" />
            </svg>
            <div className="absolute top-1/2 -left-16 transform -translate-y-1/2 w-auto bg-gray-700 rounded-full text-white text-left p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[4px_4px_6px_rgba(0,0,0,0.5)]">
              <p className="text-sm">About</p>
            </div>
          </div>

          <div
            className={`relative group w-full p-2 my-4 rounded-lg cursor-pointer ${
              activePage === "/article" ? "bg-gray-700" : ""
            }`}
            onClick={toggleArticles}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 512 512"
              fill="currentColor"
              className="cursor-pointer filter invert"
            >
              <path d="M 445.31 11.72 c 0 -6.468 -5.248 -11.72 -11.72 -11.72 H 66.406 c -6.472 0 -11.72 5.248 -11.72 11.72 v 476.56 c 0 6.468 5.248 11.72 11.72 11.72 h 367.188 c 6.472 0 11.72 -5.248 11.72 -11.72 V 11.72 H 445.31 Z M 89.842 50.78 c 0 -4.312 3.5 -7.812 7.812 -7.812 h 304.688 c 4.312 0 7.812 3.5 7.812 7.812 v 85.94 c 0 4.312 -3.5 7.812 -7.812 7.812 H 97.654 c -4.312 0 -7.812 -3.5 -7.812 -7.812 V 50.78 Z M 306.038 261.716 H 98.17 c -4.312 0 -7.812 -3.496 -7.812 -7.812 c 0 -4.312 3.5 -7.812 7.812 -7.812 h 207.868 c 4.312 0 7.812 3.5 7.812 7.812 C 313.85 258.22 310.35 261.716 306.038 261.716 Z M 313.85 292.968 c 0 4.316 -3.5 7.812 -7.812 7.812 H 98.17 c -4.312 0 -7.812 -3.496 -7.812 -7.812 c 0 -4.312 3.5 -7.812 7.812 -7.812 h 207.868 C 310.35 285.156 313.85 288.656 313.85 292.968 Z M 306.038 222.656 H 98.17 c -4.312 0 -7.812 -3.496 -7.812 -7.812 c 0 -4.312 3.5 -7.812 7.812 -7.812 h 207.868 c 4.312 0 7.812 3.5 7.812 7.812 C 313.85 219.16 310.35 222.656 306.038 222.656 Z M 306.038 183.592 H 98.17 c -4.312 0 -7.812 -3.496 -7.812 -7.812 c 0 -4.312 3.5 -7.812 7.812 -7.812 h 207.868 c 4.312 0 7.812 3.5 7.812 7.812 C 313.85 180.096 310.35 183.592 306.038 183.592 Z M 222.654 449.22 c 0 4.312 -3.5 7.812 -7.812 7.812 H 97.654 c -4.312 0 -7.812 -3.5 -7.812 -7.812 V 332.032 c 0 -4.312 3.5 -7.812 7.812 -7.812 h 117.188 c 4.312 0 7.812 3.5 7.812 7.812 V 449.22 Z M 403.134 457.032 H 259.046 c -4.312 0 -7.812 -3.5 -7.812 -7.812 c 0 -4.316 3.5 -7.812 7.812 -7.812 h 144.088 c 4.316 0 7.812 3.496 7.812 7.812 C 410.946 453.532 407.45 457.032 403.134 457.032 Z M 251.234 410.156 c 0 -4.316 3.5 -7.812 7.812 -7.812 H 403.13 c 4.316 0 7.812 3.496 7.812 7.812 c 0 4.312 -3.496 7.812 -7.812 7.812 H 259.046 C 254.734 417.968 251.234 414.468 251.234 410.156 Z M 403.134 378.908 H 259.046 c -4.312 0 -7.812 -3.5 -7.812 -7.812 c 0 -4.316 3.5 -7.812 7.812 -7.812 h 144.088 c 4.316 0 7.812 3.496 7.812 7.812 C 410.946 375.408 407.45 378.908 403.134 378.908 Z M 403.134 339.844 H 259.046 c -4.312 0 -7.812 -3.5 -7.812 -7.812 c 0 -4.316 3.5 -7.812 7.812 -7.812 h 144.088 c 4.316 0 7.812 3.496 7.812 7.812 C 410.946 336.344 407.45 339.844 403.134 339.844 Z M 403.458 300.78 h -62.436 c -4.316 0 -7.812 -3.496 -7.812 -7.812 c 0 -4.312 3.496 -7.812 7.812 -7.812 h 62.436 c 4.316 0 7.812 3.5 7.812 7.812 C 411.27 297.284 407.774 300.78 403.458 300.78 Z M 403.458 261.72 h -62.436 c -4.316 0 -7.812 -3.496 -7.812 -7.812 c 0 -4.312 3.496 -7.812 7.812 -7.812 h 62.436 c 4.316 0 7.812 3.5 7.812 7.812 C 411.27 258.224 407.774 261.72 403.458 261.72 Z M 403.458 222.656 h -62.436 c -4.316 0 -7.812 -3.496 -7.812 -7.812 c 0 -4.312 3.496 -7.812 7.812 -7.812 h 62.436 c 4.316 0 7.812 3.5 7.812 7.812 C 411.27 219.16 407.774 222.656 403.458 222.656 Z M 403.458 183.592 h -62.436 c -4.316 0 -7.812 -3.496 -7.812 -7.812 c 0 -4.312 3.496 -7.812 7.812 -7.812 h 62.436 c 4.316 0 7.812 3.5 7.812 7.812 C 411.27 180.096 407.774 183.592 403.458 183.592 Z" />
            </svg>
            <div className="absolute top-1/2 -left-16 transform -translate-y-1/2 w-auto bg-gray-700 rounded-full text-white text-left p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[4px_4px_6px_rgba(0,0,0,0.5)]">
              <p className="text-sm">Articles</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
