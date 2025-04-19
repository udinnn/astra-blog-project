"use client";

import Footer from "@/Components/Footer";
import Menu from "@/Components/Menu";
import Image from "next/image";
import React, { useState } from "react";

const page = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div>
      <div className="flex flex-row justify-between items-center border-b-2 border-black p-2">
        <h1 className="text-4xl font-bold p-2 flex-grow text-center">
          Article
        </h1>
        <Image
          src="/assets/menu.png"
          alt="menu"
          width={30}
          height={30}
          onClick={toggleMenu}
          className="ml-auto cursor-pointer"
        />
      </div>

      {isMenuOpen && <Menu />}

      {/* Parent dengan konten di tengah */}
      <div className="flex justify-center items-center min-h-screen max-w-6xl my-10 mx-auto"
        style={{
          boxShadow: "10px 10px 0px rgba(0, 0, 0, 1)",
          borderRadius: "8px",
        }}>
        {/* Konten di dalam parent */}
        <div className="inline-flex flex-col justify-center items-center text-left p-8 border border-black rounded-lg relative">
          {/* Gambar dengan overlay */}
          <div className="relative w-full group">
            <Image
              src="/assets/business.jpg"
              alt="Building"
              width={1920 * 0.5}
              height={1080 * 0.5}
              className="object-cover w-full h-full"
              style={{
                clipPath: "inset(0 0% 25% 0)",
              }}
            />
            {/* Overlay di bagian bawah gambar */}
            <div className="absolute bottom-1/4 right-0 w-auto bg-black bg-opacity-50 text-white text-right p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-sm">This is the description of the image.</p>
            </div>
          </div>

          {/* Elemen berada di sebelah kiri */}
          <h1 className="text-5xl font-bold mt-4 self-start">Article Title</h1>
          <p className="text-md italic py-2 self-start">December 12, 2024</p>
          <p className="text-sm py-2 text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            ullamcorper, nunc et bibendum facilisis, nunc nisl aliquet nunc,
            eget aliquam nisl nunc eget nunc. Sed euismod, nisl eget aliquam
            ullamcorper, nisl nunc aliquet nunc, eget aliquam nisl nunc eget
            nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            ullamcorper, nunc et bibendum facilisis, nunc nisl aliquet nunc,
            eget aliquam nisl nunc eget nunc. Sed euismod, nisl eget aliquam
            ullamcorper, nisl nunc aliquet nunc, eget aliquam nisl nunc eget
            nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            ullamcorper, nunc et bibendum facilisis, nunc nisl aliquet nunc,
            eget aliquam nisl nunc eget nunc. Sed euismod, nisl eget aliquam
            ullamcorper, nisl nunc aliquet nunc, eget aliquam nisl nunc eget
            nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            ullamcorper, nunc et bibendum facilisis, nunc nisl aliquet nunc,
            eget aliquam nisl nunc eget nunc. Sed euismod, nisl eget aliquam
            ullamcorper, nisl nunc aliquet nunc, eget aliquam nisl nunc eget
            nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            ullamcorper, nunc et bibendum facilisis, nunc nisl aliquet nunc,
            eget aliquam nisl nunc eget nunc. Sed euismod, nisl eget aliquam
            ullamcorper, nisl nunc aliquet nunc, eget aliquam nisl nunc eget
            nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            ullamcorper, nunc et bibendum facilisis, nunc nisl aliquet nunc,
            eget aliquam nisl nunc eget nunc. Sed euismod, nisl eget aliquam
            ullamcorper, nisl nunc aliquet nunc, eget aliquam nisl nunc eget
            nunc.
          </p>

          {/* Tombol Previous dan Next */}
          <div className="flex flex-row justify-between items-center w-full py-2">
            {/* Tombol Previous di ujung kiri */}
            <div className="flex flex-row items-center">
              <button className="cursor-pointer text-black bg-transparent hover:underline rounded-lg hover:text-blue-600">
                Previous...
              </button>
            </div>

            {/* Tombol Next di ujung kanan */}
            <div className="flex flex-row items-center">
              <button className="cursor-pointer text-black bg-transparent hover:underline rounded-lg hover:text-blue-600">
                ...Next
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;