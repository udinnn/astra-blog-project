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
      <div className="flex flex-col flex-wrap justify-center items-center border-t border-black pt-4">
        <h1 className="text-lg font-bold mt-2">Company Logo</h1>
        <div className="flex flex-row justify-around items-center p-2">
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
        <div className="flex flex-row justify-around items-center p-2">
          <Image
            src="/assets/email.png"
            alt="Email"
            width={20}
            height={20}
            className="mx-2"
          />
          <Image
            src="/assets/telephone-call.png"
            alt="Telephone"
            width={20}
            height={20}
            className="mx-2"
          />
          <Image
            src="/assets/facebook.png"
            alt="Facebook"
            width={20}
            height={20}
            className="mx-2"
          />
          <Image
            src="/assets/instagram.png"
            alt="Instagram"
            width={20}
            height={20}
            className="mx-2"
          />
          <Image
            src="/assets/tiktok.png"
            alt="Tiktok"
            width={20}
            height={20}
            className="mx-2"
          />
          <Image
            src="/assets/youtube.png"
            alt="Youtube"
            width={20}
            height={20}
            className="mx-2"
          />
        </div>
        <div className="w-full flex flex-wrap justify-center items-center h-min-content bg-black">
          <p className="text-white">
            © 2021 Company Name. All Rights Reserved.
          </p>
        </div>
      </div>
      {showLogin && <Login onClose={() => setShowLogin(false)} />}
    </div>
  );
};

export default Footer;