"use client";

import Footer from "@/Components/Footer";
import Menu from "@/Components/Menu";
import Image from "next/image";
import { useState } from "react";

const page = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div className="flex flex-row justify-between items-center border-b-2 border-black p-2">
        <h1 className="text-4xl font-bold p-2 flex-grow text-center">
          Articles
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
      <div className="flex flex-col justify-center items-center min-h-screen mb-10 mx-auto">
        <div className="inline-flex flex-row flex-wrap justify-around items-center p-4">
          <div className="w-auto flex flex-col h-min-content p-4">
            <div className="relative w-auto flex flex-col h-min-content group">
              <Image
                src="/assets/building.jpg"
                alt="Article Image"
                width={300}
                height={100}
              />
              <div className="absolute bottom-0 right-0 w-auto bg-black bg-opacity-50 text-white text-right p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm">This is the description of the image.</p>
              </div>
            </div>
            <h1 className="font-bold text-xl mt-2">Article Title</h1>
            <p className="text-sm py-2">
              Lorem ipsum dolor sit amet...
              <span className="hover:text-blue-500">
                <a href="/read">read more</a>
              </span>
            </p>
          </div>

          <div className="w-auto flex flex-col h-min-content p-4">
            <div className="relative w-auto flex flex-col h-min-content group">
              <Image
                src="/assets/building.jpg"
                alt="Article Image"
                width={300}
                height={100}
              />
              <div className="absolute bottom-0 right-0 w-auto bg-black bg-opacity-50 text-white text-right p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm">This is the description of the image.</p>
              </div>
            </div>
            <h1 className="font-bold text-xl mt-2">Article Title</h1>
            <p className="text-sm py-2">
              Lorem ipsum dolor sit amet...
              <span className="hover:text-blue-500">
                <a href="/read">read more</a>
              </span>
            </p>
          </div>

          <div className="w-auto flex flex-col h-min-content p-4">
            <div className="relative w-auto flex flex-col h-min-content group">
              <Image
                src="/assets/building.jpg"
                alt="Article Image"
                width={300}
                height={100}
              />
              <div className="absolute bottom-0 right-0 w-auto bg-black bg-opacity-50 text-white text-right p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm">This is the description of the image.</p>
              </div>
            </div>
            <h1 className="font-bold text-xl mt-2">Article Title</h1>
            <p className="text-sm py-2">
              Lorem ipsum dolor sit amet...
              <span className="hover:text-blue-500">
                <a href="/read">read more</a>
              </span>
            </p>
          </div>

          <div className="w-auto flex flex-col h-min-content p-4">
            <div className="relative w-auto flex flex-col h-min-content group">
              <Image
                src="/assets/building.jpg"
                alt="Article Image"
                width={300}
                height={100}
              />
              <div className="absolute bottom-0 right-0 w-auto bg-black bg-opacity-50 text-white text-right p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm">This is the description of the image.</p>
              </div>
            </div>
            <h1 className="font-bold text-xl mt-2">Article Title</h1>
            <p className="text-sm py-2">
              Lorem ipsum dolor sit amet...
              <span className="hover:text-blue-500">
                <a href="/read">read more</a>
              </span>
            </p>
          </div>

          <div className="w-auto flex flex-col h-min-content p-4">
            <div className="relative w-auto flex flex-col h-min-content group">
              <Image
                src="/assets/building.jpg"
                alt="Article Image"
                width={300}
                height={100}
              />
              <div className="absolute bottom-0 right-0 w-auto bg-black bg-opacity-50 text-white text-right p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm">This is the description of the image.</p>
              </div>
            </div>
            <h1 className="font-bold text-xl mt-2">Article Title</h1>
            <p className="text-sm py-2">
              Lorem ipsum dolor sit amet...
              <span className="hover:text-blue-500">
                <a href="/read">read more</a>
              </span>
            </p>
          </div>

          <div className="w-auto flex flex-col h-min-content p-4">
            <div className="relative w-auto flex flex-col h-min-content group">
              <Image
                src="/assets/building.jpg"
                alt="Article Image"
                width={300}
                height={100}
              />
              <div className="absolute bottom-0 right-0 w-auto bg-black bg-opacity-50 text-white text-right p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm">This is the description of the image.</p>
              </div>
            </div>
            <h1 className="font-bold text-xl mt-2">Article Title</h1>
            <p className="text-sm py-2">
              Lorem ipsum dolor sit amet...
              <span className="hover:text-blue-500">
                <a href="/read">read more</a>
              </span>
            </p>
          </div>
        </div>
        <div className="flex flex-row justify-between items-center w-full px-20">
          {/* Tombol Previous di ujung kiri */}
          <button className="cursor-pointer text-black bg-transparent hover:underline rounded-lg hover:text-blue-600">
            Previous...
          </button>

          {/* Tombol Next di ujung kanan */}
          <button className="cursor-pointer text-black bg-transparent hover:underline rounded-lg hover:text-blue-600">
            ...Next
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default page;
