import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header />
      <h1 className="flex justify-center m-20">
        <span
          className="font-bold text-5xl"
          style={{
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", // Shadow pada huruf
          }}
        >
          PROGRAM HIGHLIGHTS
        </span>
      </h1>

      <div className="flex justify-center items-center min-h-screen">
        <div
          className="inline-flex flex-col justify-center items-center p-8 border border-black rounded-lg transform transition-transform duration-300 hover:-translate-y-2 hover:translate-x-2 hover:scale-105"
          style={{
            boxShadow: "10px 10px 8px rgba(0, 0, 0, 0.5)", // Shadow hitam penuh di kanan bawah
          }}
        >
          {/* 1st Program */}
          <div className="flex flex-row flex-wrap justify-around items-start mb-10 space-x-8">
            {/* Embed YouTube Video with iframe */}
            <div className="inline-flex border border-black p-4  bg-white">
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

            <div className="flex flex-col flex-wrap max-w-md space-y-2">
              <h1 className="font-bold text-2xl">Program Title</h1>
              <p className="text-justify text-sm">
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

          {/* 2nd Program */}
          <div className="flex flex-row flex-wrap justify-around items-start mt-20 space-x-8">
            <div className="flex flex-col flex-wrap max-w-md space-y-2">
              <h1 className="font-bold text-2xl">Program Title</h1>
              <p className="text-justify text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            {/* Embed YouTube Video with iframe */}
            <div className="inline-flex border border-black p-4  bg-white">
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
          </div>

          {/* 3rd Program */}
          <div className="flex flex-row flex-wrap justify-around items-start mt-20 space-x-8">
            {/* Embed YouTube Video with iframe */}
            <div className="inline-flex border border-black p-4  bg-white">
              <iframe
                width="350"
                height="200"
                src="https://www.youtube.com/embed/KelwkRHOqf0"
                title="Company Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="flex flex-col flex-wrap max-w-md space-y-2">
              <h1 className="font-bold text-2xl">Program Title</h1>
              <p className="text-justify text-sm">
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

          {/* 4th Program */}
          <div className="flex flex-row flex-wrap justify-around items-start mt-20 space-x-8">
            <div className="flex flex-col flex-wrap max-w-md space-y-2">
              <h1 className="font-bold text-2xl">Program Title</h1>
              <p className="text-justify text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            {/* Embed YouTube Video with iframe */}
            <div className="inline-flex border border-black p-4  bg-white">
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
          </div>
        </div>
      </div>

      {/* Latest Article */}
      <h1 className="flex justify-center mt-40">
        <span
          className="font-bold text-5xl"
          style={{
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", // Shadow pada huruf
          }}
        >
          LATEST ARTICLE
        </span>
      </h1>
      <div className="flex flex-row flex-wrap justify-around items-center mt-10 mx-20 mb-20">
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
          <p className="text-sm py-2">
            Lorem ipsum dolor sit amet...
          </p>
          <a className="text-sm hover:text-blue-600 hover:underline" href="/read">read more</a>
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
          <p className="text-sm py-2">
            Lorem ipsum dolor sit amet...
          </p>
          <a className="text-sm hover:text-blue-600 hover:underline" href="/read">read more</a>
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
          <p className="text-sm py-2">
            Lorem ipsum dolor sit amet...
          </p>
          <a className="text-sm hover:text-blue-600 hover:underline" href="/read">read more</a>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
