"use client";

import Dashboard from "@/Components/Dashboard";
import List from "@/Components/List";
import New from "@/Components/New";
import Sidebar from "@/Components/Sidebar";
import React, { useState } from "react";
import Image from "next/image";

const Page = () => {
  const [activePage, setActivePage] = useState("dashboard");
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const renderContent = () => {
    switch (activePage) {
      case "dashboard":
        return <Dashboard />;
      case "new":
        return <New />;
      case "list":
        return <List />;
      case "edit":
        return <Edit />; // Assuming the edit page is the same as the new article page
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="relative flex flex-col md:flex-row">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full text-white transition-transform duration-300 ${
          isSidebarVisible ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ width: "250px" }} // Lebar sidebar
        onMouseEnter={() => setIsSidebarVisible(true)} // Tampilkan sidebar saat kursor masuk
        onMouseLeave={() => setIsSidebarVisible(false)} // Sembunyikan sidebar saat kursor keluar
      >
        <Sidebar setActivePage={setActivePage} />
      </div>

      {/* Icon untuk menampilkan sidebar */}
      <div
        className={`fixed top-1/2 transform -translate-y-1/2 cursor-pointer z-40 transition-transform duration-300 ${
          isSidebarVisible ? "-translate-x-[250px]" : "translate-x-0"
        }`}
        onMouseEnter={() => setIsSidebarVisible(true)} // Tampilkan sidebar saat kursor diarahkan ke icon
      >
        <Image
          src="/assets/vertical.png" // Ganti dengan path gambar Anda
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
