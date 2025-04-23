"use client";

import Footer from "@/Components/Footer";
import Menu from "@/Components/Menu";
import Image from "next/image";
import { useState } from "react";

const page = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isImageMoved, setIsImageMoved] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsImageMoved(!isImageMoved); // Mengontrol posisi gambar
  };

  return (
    <div>
      <div className="flex flex-row justify-between items-center border-b-2 border-black p-2">
        <h1 className="text-4xl font-bold p-2 flex-grow text-center">
          Articles
        </h1>
      </div>
      <div className="absolute top-0 right-0 p-4 z-50 transition-all duration-300">
        <button
          className="flex flex-col justify-center items-center relative p-2"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 -2 32 32"
            fill="none"
            className={`cursor-pointer transition-colors duration-300 ${
              isMenuOpen ? "fill-white" : "fill-black"
            }`}
          >
            <g
              id="Page-1"
              stroke="none"
              strokeWidth="1"
              fill="none"
              fillRule="evenodd"
            >
              <g
                id="Icon-Set"
                transform="translate(-308.000000, -1037.000000)"
                className={isMenuOpen ? "fill-white" : "fill-black"}
              >
                <path
                  d="M336,1063 L312,1063 C310.896,1063 310,1062.1 310,1061 C310,1059.9 310.896,1059 312,1059 L336,1059 C337.104,1059 338,1059.9 338,1061 C338,1062.1 337.104,1063 336,1063 L336,1063 Z M336,1057 L312,1057 C309.791,1057 308,1058.79 308,1061 C308,1063.21 309.791,1065 312,1065 L336,1065 C338.209,1065 340,1063.21 340,1061 C340,1058.79 338.209,1057 336,1057 L336,1057 Z M336,1053 L312,1053 C310.896,1053 310,1052.1 310,1051 C310,1049.9 310.896,1049 312,1049 L336,1049 C337.104,1049 338,1049.9 338,1051 C338,1052.1 337.104,1053 336,1053 L336,1053 Z M336,1047 L312,1047 C309.791,1047 308,1048.79 308,1051 C308,1053.21 309.791,1055 312,1055 L336,1055 C338.209,1055 340,1053.21 340,1051 C340,1048.79 338.209,1047 336,1047 L336,1047 Z M312,1039 L336,1039 C337.104,1039 338,1039.9 338,1041 C338,1042.1 337.104,1043 336,1043 L312,1043 C310.896,1043 310,1042.1 310,1041 C310,1039.9 310.896,1039 312,1039 L312,1039 Z M312,1045 L336,1045 C338.209,1045 340,1043.21 340,1041 C340,1038.79 338.209,1037 336,1037 L312,1037 C309.791,1037 308,1038.79 308,1041 C308,1043.21 309.791,1045 312,1045 L312,1045 Z"
                  id="hamburger-2"
                ></path>
              </g>
            </g>
          </svg>
        </button>
      </div>

      <div
        className={`absolute top-0 left-0 w-full h-screen z-20 transform ${
          isMenuOpen ? "translate-y-0 fill-white" : "-translate-y-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <Menu />
      </div>
      <div className="flex flex-col justify-center items-center min-h-screen mb-10 mx-auto">
        <div className="inline-flex flex-row flex-wrap justify-around items-center p-4">
          <div className="w-auto flex flex-col h-min-content p-4">
            <div className="relative w-auto flex flex-col h-min-content group">
              <Image
                src="/assets/building.jpg"
                alt="Article Image"
                width={300}
                height={100}
                className="rounded-t-3xl"
              />
              <div className="absolute bottom-0 right-0 w-auto bg-black bg-opacity-50 text-white text-right p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm">This is the description of the image.</p>
              </div>
            </div>
            <h1 className="font-bold text-xl mt-2">Article Title</h1>
            <p className="text-sm py-2">Lorem ipsum dolor sit amet...</p>
            <a
              className="text-sm hover:text-blue-600 hover:underline"
              href="/read"
            >
              read more
            </a>
          </div>

          <div className="w-auto flex flex-col h-min-content p-4">
            <div className="relative w-auto flex flex-col h-min-content group">
              <Image
                src="/assets/building.jpg"
                alt="Article Image"
                width={300}
                height={100}
                className="rounded-t-3xl"
              />
              <div className="absolute bottom-0 right-0 w-auto bg-black bg-opacity-50 text-white text-right p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm">This is the description of the image.</p>
              </div>
            </div>
            <h1 className="font-bold text-xl mt-2">Article Title</h1>
            <p className="text-sm py-2">Lorem ipsum dolor sit amet...</p>
            <a
              className="text-sm hover:text-blue-600 hover:underline"
              href="/read"
            >
              read more
            </a>
          </div>

          <div className="w-auto flex flex-col h-min-content p-4">
            <div className="relative w-auto flex flex-col h-min-content group">
              <Image
                src="/assets/building.jpg"
                alt="Article Image"
                width={300}
                height={100}
                className="rounded-t-3xl"
              />
              <div className="absolute bottom-0 right-0 w-auto bg-black bg-opacity-50 text-white text-right p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm">This is the description of the image.</p>
              </div>
            </div>
            <h1 className="font-bold text-xl mt-2">Article Title</h1>
            <p className="text-sm py-2">Lorem ipsum dolor sit amet...</p>
            <a
              className="text-sm hover:text-blue-600 hover:underline"
              href="/read"
            >
              read more
            </a>
          </div>

          <div className="w-auto flex flex-col h-min-content p-4">
            <div className="relative w-auto flex flex-col h-min-content group">
              <Image
                src="/assets/building.jpg"
                alt="Article Image"
                width={300}
                height={100}
                className="rounded-t-3xl"
              />
              <div className="absolute bottom-0 right-0 w-auto bg-black bg-opacity-50 text-white text-right p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm">This is the description of the image.</p>
              </div>
            </div>
            <h1 className="font-bold text-xl mt-2">Article Title</h1>
            <p className="text-sm py-2">Lorem ipsum dolor sit amet...</p>
            <a
              className="text-sm hover:text-blue-600 hover:underline"
              href="/read"
            >
              read more
            </a>
          </div>

          <div className="w-auto flex flex-col h-min-content p-4">
            <div className="relative w-auto flex flex-col h-min-content group">
              <Image
                src="/assets/building.jpg"
                alt="Article Image"
                width={300}
                height={100}
                className="rounded-t-3xl"
              />
              <div className="absolute bottom-0 right-0 w-auto bg-black bg-opacity-50 text-white text-right p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm">This is the description of the image.</p>
              </div>
            </div>
            <h1 className="font-bold text-xl mt-2">Article Title</h1>
            <p className="text-sm py-2">Lorem ipsum dolor sit amet...</p>
            <a
              className="text-sm hover:text-blue-600 hover:underline"
              href="/read"
            >
              read more
            </a>
          </div>

          <div className="w-auto flex flex-col h-min-content p-4">
            <div className="relative w-auto flex flex-col h-min-content group">
              <Image
                src="/assets/building.jpg"
                alt="Article Image"
                width={300}
                height={100}
                className="rounded-t-3xl"
              />
              <div className="absolute bottom-0 right-0 w-auto bg-black bg-opacity-50 text-white text-right p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm">This is the description of the image.</p>
              </div>
            </div>
            <h1 className="font-bold text-xl mt-2">Article Title</h1>
            <p className="text-sm py-2">Lorem ipsum dolor sit amet...</p>
            <a
              className="text-sm hover:text-blue-600 hover:underline"
              href="/read"
            >
              read more
            </a>
          </div>
        </div>
        <div className="flex flex-row justify-between items-center w-full px-20">
          {/* Tombol Previous di ujung kiri */}
          <button className="flex justify-center text-center cursor-pointer text-black bg-transparent hover:underline rounded-lg hover:text-blue-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2"
            >
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
            Previous...
          </button>

          {/* Tombol Next di ujung kanan */}
          <button className="flex justify-center text-center cursor-pointer text-black bg-transparent hover:underline rounded-lg hover:text-blue-600">
            ...Next
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="ml-2"
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default page;
