"use client";

import Dashboard from "@/Components/Dashboard";
import List from "@/Components/List";
import New from "@/Components/New";
import Sidebar from "@/Components/Sidebar";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Edit from "@/Components/Edit";
import { useRouter } from "next/navigation"; // Import useRouter untuk navigasi

const Page = () => {
  const [activePage, setActivePage] = useState("dashboard"); // State untuk halaman aktif
  const [isSidebarVisible, setIsSidebarVisible] = useState(false); // State untuk visibilitas sidebar
  const [isLoading, setIsLoading] = useState(true); // State untuk menampilkan halaman loading
  const router = useRouter(); // Inisialisasi router

  useEffect(() => {
    // Periksa apakah user sudah login
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
      router.push("/unauthorized"); // Redirect ke halaman unauthorized jika belum login
    } else {
      setIsLoading(false); // Hentikan loading jika user sudah login
    }
  }, [router]);

  const renderContent = () => {
    switch (activePage) {
      case "dashboard":
        return <Dashboard />;
      case "new":
        return <New />;
      case "list":
        return <List setActivePage={setActivePage} />; // Kirim setActivePage ke komponen List
      case "edit":
        return <Edit />; // Gunakan komponen New untuk halaman edit
      default:
        return <Dashboard />;
    }
  };

  if (isLoading) {
    // Tampilkan halaman loading jika sedang memeriksa login
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <h1 className="text-2xl font-bold text-gray-700">Loading...</h1>
      </div>
    );
  }

  return (
    <div className="relative flex flex-col md:flex-row">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full text-white transition-transform duration-300 ${
          isSidebarVisible ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ width: "250px" }}
        onMouseEnter={() => setIsSidebarVisible(true)}
        onMouseLeave={() => setIsSidebarVisible(false)}
      >
        <Sidebar setActivePage={setActivePage} />
      </div>

      {/* Icon untuk menampilkan sidebar */}
      <div
        className={`fixed top-1/2 transform -translate-y-1/2 cursor-pointer z-40 transition-transform duration-300 ${
          isSidebarVisible ? "-translate-x-[250px]" : "translate-x-0"
        }`}
        onMouseEnter={() => setIsSidebarVisible(true)}
      >
        <Image
          src="/assets/vertical.png"
          alt="Show Sidebar"
          width={35}
          height={35}
        />
      </div>

      {/* Content */}
      <div
        className={`flex-1 transition-all duration-300 ${
          isSidebarVisible ? "ml-[250px]" : "ml-0"
        }`}
      >
        <div className="w-auto mx-10 mt-10 flex flex-col justify-start">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default Page;