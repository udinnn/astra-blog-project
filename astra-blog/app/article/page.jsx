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
      <div className="flex flex-col justify-center text-center border-b-2 border-black p-2">
        <Image
          src="/assets/menu.png"
          alt="menu"
          width={30}
          height={30}
          className="absolute right-2 top-2 overflow-hidden"
          onClick={toggleMenu}
        />
        <h1 className="text-4xl font-bold p-2">Articles</h1>
      </div>

      {isMenuOpen && <Menu />}

      <div className="flex flex-row flex-wrap justify-around items-center mt-10 mx-20 mb-20">
        <div className="w-auto flex flex-col h-min-content border border-black rounded-lg shadow-black shadow-lg p-4">
          <h1 className="font-bold text-xl py-2">Article Title</h1>
          <img
            src="/assets/building.jpg"
            alt="Article Image"
            width={200}
            height={50}
            className="rounded-lg"
          />
          <p className="text-sm py-2">Article Description</p>
          <button className="inline-block p-2 border border-black rounded-lg hover:bg-blue-300">
            <a href="/article">Read More</a>
          </button>
        </div>

        <div className="w-auto flex flex-col h-min-content border border-black rounded-lg shadow-black shadow-lg p-4">
          <h1 className="font-bold text-xl py-2">Article Title</h1>
          <img
            src="/assets/building.jpg"
            alt="Article Image"
            width={200}
            height={50}
            className="rounded-lg"
          />
          <p className="text-sm py-2">Article Description</p>
          <button className="inline-block p-2 border border-black rounded-lg hover:bg-blue-300">
            <a href="/article">Read More</a>
          </button>
        </div>

        <div className="w-auto flex flex-col h-min-content border border-black rounded-lg shadow-black shadow-lg p-4">
          <h1 className="font-bold text-xl py-2">Article Title</h1>
          <img
            src="/assets/building.jpg"
            alt="Article Image"
            width={200}
            height={50}
            className="rounded-lg"
          />
          <p className="text-sm py-2">Article Description</p>
          <button className="inline-block p-2 border border-black rounded-lg hover:bg-blue-300">
            <a href="/article">Read More</a>
          </button>
        </div>

        <div className="w-auto flex flex-col h-min-content border border-black rounded-lg shadow-black shadow-lg p-4">
          <h1 className="font-bold text-xl py-2">Article Title</h1>
          <img
            src="/assets/building.jpg"
            alt="Article Image"
            width={200}
            height={50}
            className="rounded-lg"
          />
          <p className="text-sm py-2">Article Description</p>
          <button className="inline-block p-2 border border-black rounded-lg hover:bg-blue-300">
            <a href="/article">Read More</a>
          </button>
        </div>
      </div>

      <div className="flex flex-row justify-between items-center p-2 my-2 mx-20">
        <div className="flex flex-row justify-around items-center mx-2">
          <Image
            src="/assets/back-button.png"
            alt="Previous"
            width={15}
            height={15}
          />
          <button className="cursor-pointer text-black bg-transparent underline rounded-lg hover:text-blue-300 mx-2">
            Previous
          </button>
        </div>

        <div className="flex flex-row justify-around items-center mx-2">
          <button className="cursor-pointer text-black bg-transparent underline rounded-lg hover:text-blue-300 mx-2">
            Next
          </button>
          <Image
            src="/assets/right.png"
            alt="Previous"
            width={15}
            height={15}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
