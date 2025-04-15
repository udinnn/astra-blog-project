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

      <div className="flex flex-col items-center mt-10">
        <Image
          src="/assets/building.jpg"
          alt="Article Image"
          width={1000}
          height={100}
          className="shadow-black shadow-[4px_4px_10px_rgba(0,0,0,0.5)]"
        />
      </div>
      <div className="flex flex-col items-start w-max-screen mx-20 my-10 gap-x-12">
        <p className="text-sm text-justify py-2">
          Picture Description: Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </p>
        <h1 className="text-4xl text-justify font-bold py-2">Article Title</h1>
        <p className="text-sm text-justify py-2">December 12, 2025</p>
        <p className="text-sm text-justify py-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Sed ut
          perspiciatis unde omnis iste natus error sit voluptatem accusantium
          doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
          inventore veritatis et quasi architecto beatae vitae dicta sunt
          explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
          odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
          voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
          quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
          eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
          voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem
          ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
          consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate
          velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum
          fugiat quo voluptas nulla pariatur?
        </p>
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
