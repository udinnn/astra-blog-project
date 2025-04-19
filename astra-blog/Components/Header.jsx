import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div>
      {/* Wrapper untuk gambar dan overlay */}
      <div className="relative w-full h-screen z-0">
        {/* Gambar */}
        <Image
          src="/assets/business.jpg" // Path relatif ke folder public
          alt="Building"
          width={1920} // Lebar gambar
          height={1080} // Tinggi gambar
          className="object-cover w-full h-full" // Menjaga proporsi gambar
          style={{
            clipPath: "inset(0 0% 25% 0)",
            backgroundColor: "black", // Warna latar belakang jika gambar tidak dimuat
            filter: "brightness(0.25)", // Menggelapkan gambar
            zIndex: -1, // Menempatkan gambar di belakang overlay
          }}
        />
      </div>
      {/* Heading berada di atas overlay */}
      <div className="absolute top-0 w-full flex flex-col justify-center items-center text-center text-white mt-10 z-10">
        <h1 className="text-4xl font-bold">COMPANY NAME</h1>
        <h2 className="text-2xl p-2">
          Pertama, Terbaik, Salam Telekomunikasi #PTST
        </h2>
        <p className="text-sm p-2">Write your company vision here</p>
        <div className="flex flex-row justify-center items-center p-2 mt-10">
          <button className="hover:bg-blue-700 text-white font-bold p-2 mx-2 rounded-lg border border-white">
            Articles
          </button>
          <button className="hover:bg-blue-700 text-white font-bold p-2 mx-2 rounded-lg border border-white">
            About
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
