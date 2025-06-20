"use client";

import React, { useState, useMemo, useEffect } from "react";
import { useRouter } from "next/navigation";
import clsx from "clsx";
import { Toaster } from "react-hot-toast";

import { useMediaQuery } from "@/hooks/useMediaQuery";
import Sidebar from "@/components/Sidebar";
import List from "@/components/List";
import New from "@/components/New";
import Edit from "@/components/Edit";
import KolaborAksi from "@/components/KolaborAksi";
import Chapter from "@/components/Chapter";
import Kegiatan from "@/components/Kegiatan";

const SIDEBAR_WIDTH_PX = 260;

const Page = () => {
  const router = useRouter();
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [activePage, setActivePage] = useState("list");

  // 1. State baru untuk menyimpan data artikel yang akan diedit
  const [articleToEdit, setArticleToEdit] = useState(null);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSidebarPinned, setIsSidebarPinned] = useState(false);
  const isMobile = useMediaQuery(`(max-width: 768px)`);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
      router.push("/unauthorized");
    } else {
      setIsAuthorized(true);
    }
  }, [router]);

  // 2. Fungsi baru untuk menangani saat tombol Edit di List diklik
  const handleSelectArticleToEdit = (article) => {
    setArticleToEdit(article); // Simpan data artikel
    setActivePage("edit"); // Pindah ke halaman Edit
  };

  const handleMenuItemClick = (page) => {
    setActivePage(page);
    if (isMobile) setIsSidebarOpen(false);
  };

  const contentComponent = useMemo(() => {
    switch (activePage) {
      case "new":
        return <New setActivePage={setActivePage} />;
      case "list":
        // 3. Kirim fungsi handleSelectArticleToEdit sebagai prop ke List
        return (
          <List
            setActivePage={setActivePage}
            onEditClick={handleSelectArticleToEdit}
          />
        );
      case "edit":
        // 4. Kirim data articleToEdit sebagai prop ke Edit
        return (
          <Edit setActivePage={setActivePage} articleData={articleToEdit} />
        );
      case "kolaboraksi":
        return <KolaborAksi setActivePage={setActivePage} />;
      case "chapter":
        return <Chapter setActivePage={setActivePage} />;
      case "kegiatan":
        return <Kegiatan setActivePage={setActivePage} />;
      default:
        return (
          <List
            setActivePage={setActivePage}
            onEditClick={handleSelectArticleToEdit}
          />
        );
    }
  }, [activePage, articleToEdit]);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  if (!isAuthorized) return null;

  // Tidak ada perubahan pada JSX di bawah ini
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
            className="fixed inset-0 bg-black/60 z-[55]"
            onClick={() => setIsSidebarOpen(false)}
            aria-hidden="true"
          />
        )}
        <div
          className={clsx(
            "fixed top-0 left-0 h-full bg-white z-[60] transition-transform duration-300 ease-in-out",
            {
              "translate-x-0": isSidebarOpen || isSidebarPinned,
              "-translate-x-full": !(isSidebarOpen || isSidebarPinned),
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
