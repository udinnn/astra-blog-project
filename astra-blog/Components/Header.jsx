import Link from "next/link";
import React from "react";

const Header = () => {

  return (
    <div>
      <div className="fixed top-0 w-full z-50 flex flex-row flex-wrap items-center justify-between space-x-4 p-4 bg-blue-500">
        <h1 className="font-bold text-xl text-left">AORTA LOGO</h1>
        <div className="flex flex-row space-x-4 text-sm">
          <button className="text-white"><Link href="/">Beranda</Link></button>
          <button className="text-white"><Link href="/about">Tentang Kami</Link></button>
          <button className="text-white"><Link href="/kegiatan">Kegiatan</Link></button>
          <button className="text-white"><Link href="/chapter">Chapter</Link></button>
          <button className="text-white"><Link href="/kolaboraksi">KolaborAksi</Link></button>
          <button className="text-white">Daftar</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
