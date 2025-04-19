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
        <h1 className="text-4xl font-bold p-2 flex-grow text-center">About</h1>
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

      <div className="flex flex-row justify-between items-start mx-20 my-10 gap-x-12">
        {/* Parent pertama dengan lebar setengah layar */}
        <div className="relative group flex">
          <Image
            src="/assets/building.jpg"
            alt="Company building"
            width={500}
            height={500}
          />
          <div className="absolute bottom-0 right-0 w-auto bg-black bg-opacity-50 text-white text-right p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-sm">This is the description of the image.</p>
          </div>
        </div>

        {/* Parent kedua dengan lebar setengah layar */}
        <div className="flex flex-col justify-center items-start space-y-8 w-1/2">
          <div className="w-full inline-flex flex-col justify-center items-center p-4 bg-slate-800 text-white border border-black rounded-lg hover:scale-105 transition-transform duration-300 shadow-black shadow-lg">
            <div className="flex flex-col text-justify">
              <h1 className="text-2xl font-bold pb-2">Company Name</h1>
              <p className="text- pb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>

          <div className="w-full inline-flex justify-center items-center p-4 bg-slate-800 text-white border border-black rounded-lg hover:scale-105 transition-transform duration-300 shadow-black shadow-lg">
            <div className="flex flex-col text-justify">
              <h1 className="text-2xl font-bold py-2">Vision</h1>
              <p className="text-sm pb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>

          <div className="w-full inline-flex text-left p-4 bg-slate-800 text-white border border-black rounded-lg hover:scale-105 transition-transform duration-300 shadow-black shadow-lg">
            <div className="flex flex-col text-justify">
              <h1 className="text-2xl font-bold py-2">Mission</h1>
              <ul className="text-sm list-disc list-inside pb-2">
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-between items-center pb-8 mx-20">
        <div className="flex flex-row justify-around items-center">
          <button className="cursor-pointer text-black bg-transparent hover:underline rounded-lg hover:text-blue-600 mx-2">
            Home
          </button>
        </div>

        <div className="flex flex-row justify-around items-center">
          <button className="cursor-pointer text-black bg-transparent hover:underline rounded-lg hover:text-blue-600 mx-2">
            Articles
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
