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

  const closeMenu = () => {
    setIsMenuOpen(false); // Menutup menu
  };

  if (!isMenuOpen) return null; // Jangan render menu jika isMenuOpen bernilai false

  return (
    <div>
      {/* Menu dengan tombol close */}
      <div className="fixed top-0 right-0 bg-slate-600 shadow-md shadow-black rounded-lg p-4 z-50">
        <div className="flex flex-col justify-center items-center relative">
          <Image
            src="/assets/menu.png"
            width={30}
            height={30}
            alt="menu"
            className="my-4 cursor-pointer filter invert"
            title="Close"
            onClick={closeMenu}
          />

          {/* Konten Menu */}
          <div
            className={`w-full p-2 rounded-lg cursor-pointer ${
              activePage === "/" ? "bg-gray-700" : ""
            }`}
            onClick={toggleHome}
          >
            <Image
              src="/assets/home.png"
              width={30}
              height={30}
              alt="home"
              className="my-4 cursor-pointer filter invert"
              title="Home"
            />
          </div>

          <div
            className={`w-full p-2 rounded-lg cursor-pointer ${
              activePage === "/about" ? "bg-gray-700" : ""
            }`}
            onClick={toggleAbout}
          >
            <Image
              src="/assets/about.png"
              width={30}
              height={30}
              alt="about"
              className="my-4 cursor-pointer filter invert"
              title="About"
            />
          </div>

          <div
            className={`w-full p-2 rounded-lg cursor-pointer ${
              activePage === "/article" ? "bg-gray-700" : ""
            }`}
            onClick={toggleArticles}
          >
            <Image
              src="/assets/articles.png"
              width={30}
              height={30}
              alt="articles"
              className="my-4 cursor-pointer filter invert"
              title="Articles"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;