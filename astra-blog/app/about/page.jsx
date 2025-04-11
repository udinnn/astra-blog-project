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
        <Image
          src="/assets/building.jpg"
          alt="Company building"
          width={500}
          height={500}
          className="shadow-black shadow-[4px_4px_10px_rgba(0,0,0,0.5)]"
        />
        <div className="flex flex-col text-justify">
          <h1 className="text-2xl font-bold pb-2">Company Name</h1>
          <p className="text- pb-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <h1 className="text-2xl font-bold py-2">Vision</h1>
          <p className="text-sm pb-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <h1 className="text-2xl font-bold py-2">Mission</h1>
          <ul className="text-sm list-disc list-inside pb-2">
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-row justify-between items-center pb-8 mx-20">
        <div className="flex flex-row justify-around items-center mx-2">
          <Image
            src="/assets/back-button.png"
            alt="Previous"
            width={15}
            height={15}
          />
          <button className="cursor-pointer text-black bg-transparent underline rounded-lg hover:text-blue-300 mx-2">
            Home
          </button>
        </div>

        <div className="flex flex-row justify-around items-center mx-2">
          <button className="cursor-pointer text-black bg-transparent underline rounded-lg hover:text-blue-300 mx-2">
            Articles
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
