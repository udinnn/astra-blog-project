"use client";

import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import Login from "@/Components/Login"; // Pastikan path ke komponen Login benar
import { useRouter } from "next/navigation"; // Import useRouter untuk navigasi

const Footer = () => {
  const [showLogin, setShowLogin] = useState(false);
  const router = useRouter(); // Inisialisasi router

  const handleAdminClick = () => {
    const isLoggedIn = localStorage.getItem("isLoggedIn"); // Periksa status login di localStorage
    if (isLoggedIn) {
      router.push("/admin"); // Arahkan ke halaman admin jika sudah login
    } else {
      setShowLogin(true); // Tampilkan modal login jika belum login
    }
  };

  return (
    <div>
      <div className="flex flex-col flex-wrap justify-center items-center border-t border-black">
        <h1 className="text-lg font-bold p-2 mt-2">Company Logo</h1>
        <div className="flex flex-row justify-around items-center text-sm">
          <p className="mx-2 hover:text-blue-600 hover:underline">
            <Link href="/">Home</Link>
          </p>
          <p className="mx-2 hover:text-blue-600 hover:underline">
            <Link href="/about">About</Link>
          </p>
          <p className="mx-2 hover:text-blue-600 hover:underline">
            <Link href="/article">Articles</Link>
          </p>
          <p
            className="mx-2 hover:text-blue-600 cursor-pointer hover:underline"
            onClick={handleAdminClick} // Panggil fungsi handleAdminClick
          >
            Admin
          </p>
        </div>
        <div className="flex flex-row justify-around items-center p-2 mb-2">
          {/* email */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mx-2"
          >
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>
          {/* telephone */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mx-2"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.1 4.18 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.72 12.05 12.05 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.28-1.28a2 2 0 0 1 2.11-.45 12.05 12.05 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
          </svg>
          {/* facebook */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="mx-2"
          >
            <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24h-1.918c-1.504 0-1.796.715-1.796 1.763v2.31h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.324-.593 1.324-1.324V1.325C24 .593 23.407 0 22.675 0z" />
          </svg>
          {/* instagram */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="mx-2"
          >
            <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 2A3.75 3.75 0 0 0 4 7.75v8.5A3.75 3.75 0 0 0 7.75 20h8.5A3.75 3.75 0 0 0 20 16.25v-8.5A3.75 3.75 0 0 0 16.25 4h-8.5zM12 7.25a4.75 4.75 0 1 1 0 9.5 4.75 4.75 0 0 1 0-9.5zm0 2a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5zM17.5 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
          </svg>
          {/* tiktok */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="mx-2"
          >
            <path d="M 19.589 6.686 a 4.793 4.793 0 0 1 -3.77 -4.245 V 2 h -3.445 v 13.672 a 2.896 2.896 0 0 1 -5.201 1.743 l -0.002 -0.001 l 0.002 0.001 a 2.895 2.895 0 0 1 3.183 -4.51 v -3.5 a 6.329 6.329 0 0 0 -5.394 10.692 a 6.33 6.33 0 0 0 10.857 -4.424 V 8.687 a 8.182 8.182 0 0 0 4.773 1.526 V 6.79 a 4.831 4.831 0 0 1 -1.003 -0.104 Z" />
          </svg>
          {/* youtube */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="16"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="mx-2"
          >
            <path d="M23.498 6.186a2.835 2.835 0 0 0-1.993-2.006C19.775 3.5 12 3.5 12 3.5s-7.775 0-9.505.68A2.835 2.835 0 0 0 .502 6.186 29.94 29.94 0 0 0 0 12a29.94 29.94 0 0 0 .502 5.814 2.835 2.835 0 0 0 1.993 2.006C4.225 20.5 12 20.5 12 20.5s7.775 0 9.505-.68a2.835 2.835 0 0 0 1.993-2.006A29.94 29.94 0 0 0 24 12a29.94 29.94 0 0 0-.502-5.814ZM9.75 15.02V8.98L15.5 12l-5.75 3.02Z" />
          </svg>
        </div>
        <div className="w-full flex flex-wrap justify-center items-center h-min-content bg-black">
          <p className="text-white text-sm p-1">
            © 2021 Company Name. All Rights Reserved.
          </p>
        </div>
      </div>
      {showLogin && <Login onClose={() => setShowLogin(false)} />}
    </div>
  );
};

export default Footer;
