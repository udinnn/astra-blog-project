"use client";

import React, { useState, useMemo, useEffect } from "react";
import clsx from "clsx";
import { Toaster } from "react-hot-toast";

// Hooks & Komponen yang sudah dioptimalkan
import { useAuth } from "@/hooks/useAuth";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import Sidebar from "@/Components/Sidebar";

// Komponen Halaman Konten
import List from "@/Components/List";
import New from "@/Components/New";
import Edit from "@/Components/Edit";
import KolaborAksi from "@/Components/KolaborAksi";
import Chapter from "@/Components/Chapter";
import Kegiatan from "@/Components/Kegiatan";

// Konstanta untuk kemudahan maintenance
const SIDEBAR_WIDTH_PX = 260;

const Page = () => {
  const { isLoading } = useAuth();
 const [isMobile, setIsMobile] = useState(false);
  const [activePage, setActivePage] = useState("list"); // Halaman default adalah list
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSidebarPinned, setIsSidebarPinned] = useState(false); // Untuk UX desktop

  // Handler untuk klik menu, sekarang lebih sederhana
  const handleMenuItemClick = (page) => {
    setActivePage(page);
    if (isMobile) {
      setIsSidebarOpen(false); // Selalu tutup sidebar di mobile setelah klik
    }
  };

  // Render konten halaman menggunakan useMemo untuk optimisasi
  const contentComponent = useMemo(() => {
    switch (activePage) {
      case "new":
        return <New setActivePage={setActivePage} />;
      case "list":
        return <List setActivePage={setActivePage} />;
      case "kolaboraksi":
        return <KolaborAksi setActivePage={setActivePage} />;
      case "chapter":
        return <Chapter setActivePage={setActivePage} />;
      case "edit":
        return <Edit setActivePage={setActivePage} />;
      case "kegiatan":
        return <Kegiatan setActivePage={setActivePage} />;
      default:
        // Default ke 'list' untuk menghindari halaman kosong
        return <List setActivePage={setActivePage} />;
    }
  }, [activePage]);

  // Tentukan apakah sidebar harus terlihat
  // Di mobile: tergantung state `isSidebarOpen`
  // Di desktop: terlihat jika di-hover (`isSidebarOpen`) atau di-pin (`isSidebarPinned`)
  const isSidebarCurrentlyVisible = isMobile
    ? isSidebarOpen
    : isSidebarOpen || isSidebarPinned;

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  // Tambahkan toggle button untuk sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <>
      {/* Container untuk notifikasi toast, harus ada di level atas */}
      <Toaster position="top-right" reverseOrder={false} />

      {/* Toggle Button - Selalu Visible */}
      <button
        className="fixed top-4 left-4 z-50 p-2 bg-white rounded-md shadow-md hover:bg-gray-100"
        onClick={toggleSidebar}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      <div className="flex h-screen bg-gray-100">
        {/* Overlay untuk mobile saat sidebar terbuka */}
        {isMobile && isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black/60 z-40"
            onClick={() => setIsSidebarOpen(false)}
            aria-hidden="true"
          />
        )}

        {/* Sidebar */}
        <div
          className={clsx(
            "fixed top-0 left-0 h-full bg-white z-50 transition-transform duration-300 ease-in-out",
            {
              "translate-x-0": isSidebarCurrentlyVisible,
              "-translate-x-full": !isSidebarCurrentlyVisible,
            }
          )}
          style={{ width: `${SIDEBAR_WIDTH_PX}px` }}
          // Logika hover hanya untuk desktop
          onMouseEnter={() => !isMobile && setIsSidebarOpen(true)}
          onMouseLeave={() => !isMobile && setIsSidebarOpen(false)}
        >
          {/* Menggunakan komponen Sidebar yang sudah dioptimalkan */}
          <Sidebar
            activePage={activePage}
            setActivePage={handleMenuItemClick}
            isPinned={isSidebarPinned}
            setIsPinned={setIsSidebarPinned}
            isMobile={isMobile}
          />
        </div>

        {/* Konten Utama */}
        <main
          className={clsx(
            "flex-1 flex flex-col w-full transition-all duration-300 ease-in-out",
            {
              // Geser konten hanya jika sidebar di-pin pada mode desktop
              "ml-0": isMobile || !isSidebarPinned,
              [`md:ml-[${SIDEBAR_WIDTH_PX}px]`]: !isMobile && isSidebarPinned,
            }
          )}
        >
          {/* Area Konten dengan scroll */}
          <div className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
            <div className="w-full max-w-7xl mx-auto">{contentComponent}</div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Page;
