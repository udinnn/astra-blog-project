import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header />
      <h1 className="flex justify-center font-bold text-4xl mt-40 mb-10">
        PROGRAM HIGHLIGHTS
      </h1>

      {/* 1st Program */}
      <div className="flex flex-row flex-wrap justify-around items-start mb-20 mx-20">
        {/* Embed YouTube Video with iframe */}
        <iframe
          width="350"
          height="200"
          src="https://www.youtube.com/embed/r5TJ0f5EbDA"
          title="Company Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <div className="flex flex-col flex-wrap max-w-md">
          <h1 className="font-bold text-xl">Program Title</h1>
          <p className="text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>

      {/* 2nd Program */}
      <div className="flex flex-row flex-wrap justify-around items-start mt-40 mx-20">
        <div className="flex flex-col flex-wrap max-w-md">
          <h1 className="font-bold text-xl">Program Title</h1>
          <p className="text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        {/* Embed YouTube Video with iframe */}
        <iframe
          width="350"
          height="200"
          src="https://www.youtube.com/embed/r5TJ0f5EbDA"
          title="Company Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* 3rd Program */}
      <div className="flex flex-row flex-wrap justify-around items-start mt-40 mx-20">
        {/* Embed YouTube Video with iframe */}
        <iframe
          width="350"
          height="200"
          src="https://www.youtube.com/embed/KelwkRHOqf0"
          title="Company Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <div className="flex flex-col flex-wrap max-w-md">
          <h1 className="font-bold text-xl">Program Title</h1>
          <p className="text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>

      {/* 4th Program */}
      <div className="flex flex-row flex-wrap justify-around items-start mt-40 mx-20">
        <div className="flex flex-col flex-wrap max-w-md">
          <h1 className="font-bold text-xl">Program Title</h1>
          <p className="text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        {/* Embed YouTube Video with iframe */}
        <iframe
          width="350"
          height="200"
          src="https://www.youtube.com/embed/Dh4PlGiK4j0"
          title="Company Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* Latest Article */}
      <h1 className="flex justify-center font-bold text-4xl mt-40 mb-5">
        LATEST ARTICLE
      </h1>
      <div className="flex flex-row flex-wrap justify-around items-center mt-10 mx-20 mb-40">
        <div className="w-auto flex flex-col h-min-content border border-black rounded-lg shadow-black shadow-lg p-4">
          <h1 className="font-bold text-xl py-2">Article Title</h1>
          <Image
            src="/assets/building.jpg"
            alt="Article Image"
            width={300}
            height={100}
            className="rounded-lg"
          />
          <p className="text-sm py-2">Article Description</p>
          <button className="inline-block p-2 border border-black rounded-lg hover:bg-blue-300">
            <a href="/article">Read More</a>
          </button>
        </div>

        <div className="w-auto flex flex-col h-min-content border border-black rounded-lg shadow-black shadow-lg p-4">
          <h1 className="font-bold text-xl py-2">Article Title</h1>
          <Image
            src="/assets/building.jpg"
            alt="Article Image"
            width={300}
            height={100}
            className="rounded-lg"
          />
          <p className="text-sm py-2">Article Description</p>
          <button className="inline-block p-2 border border-black rounded-lg hover:bg-blue-300">
            <a href="/article">Read More</a>
          </button>
        </div>

        <div className="w-auto flex flex-col h-min-content border border-black rounded-lg shadow-black shadow-lg p-4">
          <h1 className="font-bold text-xl py-2">Article Title</h1>
          <Image
            src="/assets/building.jpg"
            alt="Article Image"
            width={300}
            height={100}
            className="rounded-lg"
          />
          <p className="text-sm py-2">Article Description</p>
          <button className="inline-block p-2 border border-black rounded-lg hover:bg-blue-300">
            <a href="/article">Read More</a>
          </button>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}