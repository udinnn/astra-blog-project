"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Sidebar = ({ setActivePage }) => {
  const router = useRouter();
  const [activeItem, setActiveItem] = useState("dashboard"); // State untuk melacak item aktif

  const handleLogout = () => {
    // Hapus status login dari localStorage
    localStorage.removeItem("isLoggedIn");

    // Redirect ke halaman login atau halaman utama
    router.push("/");

    console.log("User logged out");
  };

  const handleItemClick = (item) => {
    setActiveItem(item); // Set item aktif
    setActivePage(item); // Panggil fungsi untuk mengubah halaman aktif
  };

  return (
    <div>
      <div className="fixed top-0 left-0 inline-flex flex-col p-4 h-screen bg-slate-600 shadow-md shadow-black">
        <div className="font-bold text-3xl mt-10 mb-5">Logo</div>
        <div className="flex flex-col">
          {/* Dashboard */}
          <div
            className={` inline-flex items-center p-1 rounded-lg cursor-pointer ${
              activeItem === "dashboard" ? "bg-gray-700" : ""
            }`}
            onClick={() => handleItemClick("dashboard")}
          >
            <Image
              src="/assets/dashboard.png"
              width={25}
              height={25}
              alt="dashboard"
              className="m-2 filter invert"
            />
            <p className="text-lg text-white">Dashboard</p>
          </div>

          {/* New Article */}
          <div
            className={`inline-flex items-center p-1 rounded-lg cursor-pointer ${
              activeItem === "new" ? "bg-gray-700" : ""
            }`}
            onClick={() => handleItemClick("new")}
          >
            <Image
              src="/assets/new.png"
              width={25}
              height={25}
              alt="new"
              className="m-2 filter invert"
            />
            <p className="text-lg text-white">New Article</p>
          </div>

          {/* Article List */}
          <div
            className={`inline-flex items-center p-1 rounded-lg cursor-pointer ${
              activeItem === "list" ? "bg-gray-700" : ""
            }`}
            onClick={() => handleItemClick("list")}
          >
            <Image
              src="/assets/article.png"
              width={25}
              height={25}
              alt="List"
              className="m-2 filter invert"
            />
            <p className="text-lg text-white">Article List</p>
          </div>
        </div>
        <div className="flex-grow"></div>
        <div className="flex flex-col bg-slate-300 h-min-content rounded-lg p-2 mt-auto">
          <div className="flex flex-row justify-between w-full items-center mb-4">
            <Image
              src="/assets/admin.png"
              width={30}
              height={30}
              alt="admin"
              className="m-2"
            />
            <Image
              src="/assets/logout.png"
              width={25}
              height={25}
              alt="logout"
              className="m-2 cursor-pointer"
              onClick={handleLogout} // Panggil fungsi logout
            />
          </div>
          <div className="flex flex-col w-full items-star text-sm text-black">
            <p>Admin</p>
            <p>admin@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;