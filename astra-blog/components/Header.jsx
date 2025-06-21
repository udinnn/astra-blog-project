"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { href: "/", label: "Beranda" },
    { href: "/about", label: "Tentang Kami" },
    { href: "/kegiatan", label: "Kegiatan" },
    { href: "/chapter", label: "Chapter" },
    { href: "/kolaboraksi", label: "KolaborAksi" },
    { href: "/daftar", label: "Daftar" },
  ];

  return (
    <>
      {/* Header Utama */}
      <header className="fixed top-0 w-full z-50 flex items-center justify-between bg-astraColor-100 shadow-lg">
        <Link href="/" className="flex items-center ml-4">
          <Image
            src="/assets/aorta.png"
            width={120}
            height={40}
            alt="Logo Aorta"
            className="filter invert"
            />
        </Link>

        {/* Menu Navigasi Desktop */}
        <nav className="hidden md:flex items-center space-x-6 text-white mr-8">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              className="text-sm font-medium tracking-wide relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Tombol Hamburger Menu (Hanya Tampil di Mobile) */}
        <button
          onClick={toggleMenu}
          className="md:hidden z-50 flex flex-col items-center justify-center w-8 h-8 space-y-1.5 mr-4"
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-6 bg-white transform transition duration-300 ease-in-out ${
              isMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block h-0.5 w-6 bg-white transition duration-300 ease-in-out ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block h-0.5 w-6 bg-white transform transition duration-300 ease-in-out ${
              isMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>
      </header>

      {/* Panel Menu Mobile dengan Animasi Slide-down */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 ease-in-out md:hidden ${
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMenu} // Menutup menu saat mengklik backdrop
      ></div>
      <nav
        className={`fixed top-14 left-0 w-full bg-astraColor-100 shadow-xl z-40 transform transition-transform duration-500 ease-in-out md:hidden ${
          isMenuOpen ? "translate-y-0" : "-translate-y-[120%]"
        }`}
      >
        <div className="flex flex-col items-center space-y-2 p-4">
          {navLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={toggleMenu}
              className="w-full text-center text-white text-lg font-semibold py-3 bg-astraColor-100 border-b border-white/20 rounded-lg hover:bg-astraColor-200/30 transition-all duration-300 ease-in-out"
              style={{
                transform: isMenuOpen ? 'translateY(0)' : 'translateY(-20px)',
                opacity: isMenuOpen ? 1 : 0,
                transition: `transform 0.4s ease-in-out ${index * 0.05 + 0.2}s, opacity 0.4s ease-in-out ${index * 0.05 + 0.2}s`
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Header;
