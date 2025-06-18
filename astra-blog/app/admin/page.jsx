"use client";

import React, { useState, useMemo, useEffect } from "react";
import { useRouter } from "next/navigation"; // Pastikan useRouter diimpor
import clsx from "clsx";
import { Toaster } from "react-hot-toast";

// Hooks & Komponen
// Impor useAuth tidak lagi digunakan untuk proteksi di sini, tapi mungkin masih berguna untuk mendapatkan data user
// import { useAuth } from "@/hooks/useAuth";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import Sidebar from "@/components/Sidebar";

// Komponen Halaman Konten
import List from "@/components/List";
import New from "@/components/New";
import Edit from "@/components/Edit";
import KolaborAksi from "@/components/KolaborAksi";
import Chapter from "@/components/Chapter";
import Kegiatan from "@/components/Kegiatan";

// Konstanta
const SIDEBAR_WIDTH_PX = 260;

const Page = () => {
  const router = useRouter();

  // 1. Tambahkan state untuk memeriksa otorisasi
  const [isAuthorized, setIsAuthorized] = useState(false);

  const [activePage, setActivePage] = useState("list");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSidebarPinned, setIsSidebarPinned] = useState(false);

  // Hook useMediaQuery bisa tetap digunakan jika ada
  const isMobile = useMediaQuery(`(max-width: 768px)`);

  // 2. useEffect bertindak sebagai "Penjaga" Halaman
  useEffect(() => {
    // Periksa status login dari localStorage saat komponen dimuat
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (!isLoggedIn) {
      // Jika tidak ada status login, arahkan ke halaman unauthorized
      router.push("/unauthorized");
    } else {
      // Jika ada, izinkan komponen untuk dirender
      setIsAuthorized(true);
    }
  }, [router]);

  const handleMenuItemClick = (page) => {
    setActivePage(page);
    if (isMobile) {
      setIsSidebarOpen(false);
    }
  };

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
        return <List setActivePage={setActivePage} />;
    }
  }, [activePage]);

  const isSidebarCurrentlyVisible = isMobile
    ? isSidebarOpen
    : isSidebarOpen || isSidebarPinned;

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // 3. Jangan render apapun sampai otorisasi selesai diperiksa
  //    Ini untuk mencegah "flash" konten admin sebelum redirect
  if (!isAuthorized) {
    return null; // atau tampilkan komponen loading
  }

  // Jika sudah terotorisasi, tampilkan halaman admin
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />

      <button
        className="fixed top-4 left-4 z-50 p-2 bg-white rounded-md shadow-md hover:bg-gray-100"
        onClick={toggleSidebar}>
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      <div className="flex h-screen bg-gray-100">
        {isMobile && isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black/60 z-40"
            onClick={() => setIsSidebarOpen(false)}
            aria-hidden="true"
          />
        )}

        <div
          className={clsx(
            "fixed top-0 left-0 h-full bg-white z-50 transition-transform duration-300 ease-in-out",
            {
              "translate-x-0": isSidebarCurrentlyVisible,
              "-translate-x-full": !isSidebarCurrentlyVisible,
            }
          )}
          style={{ width: `${SIDEBAR_WIDTH_PX}px` }}
          onMouseEnter={() =>
            !isMobile && !isSidebarPinned && setIsSidebarOpen(true)
          }
          onMouseLeave={() =>
            !isMobile && !isSidebarPinned && setIsSidebarOpen(false)
          }>
          <Sidebar
            activePage={activePage}
            setActivePage={handleMenuItemClick}
            isPinned={isSidebarPinned}
            setIsPinned={setIsSidebarPinned}
            isMobile={isMobile}
          />
        </div>

        <main
          className={clsx(
            "flex-1 flex flex-col w-full transition-all duration-300 ease-in-out",
            {
              "ml-0": isMobile || !isSidebarPinned,
              [`md:ml-[${SIDEBAR_WIDTH_PX}px]`]: !isMobile && isSidebarPinned,
            }
          )}>
          <div className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8 pt-20">
            <div className="w-full max-w-7xl mx-auto">{contentComponent}</div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Page;
