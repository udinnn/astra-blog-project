"use client";

import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import Hero from "@/Components/Hero";
import Maskot from "@/Components/Maskot";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter(); // Inisialisasi router

  return (
    <div className="relative">
        <Header />

      {/* Background Batik */}
      <div
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: "url('/assets/batik.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.8, // atur transparansi sesuai kebutuhan
          pointerEvents: "none", // agar tidak mengganggu klik konten
        }}
        aria-hidden="true"
      />

      {/* Hero section */}
      <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-screen lg:h-screen flex items-center justify-center sm:justify-start pt-[72px] sm:pt-[90px] md:pt-[110px] z-10 overflow-hidden">
        {/* Gambar */}
        <Image
          src="/assets/teenagers.jpg"
          fill
          alt="Teenagers"
          className="object-cover"
          priority
          sizes="100vw"
          style={{ zIndex: 1 }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-blue-500 bg-opacity-50 z-10"></div>
        {/* Konten di atas overlay */}
        <div className="absolute inset-0 flex flex-col items-start justify-center px-4 z-20">
          <div className="flex flex-col w-full sm:w-1/2 p-2 sm:p-4 space-y-4">
            <div className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl text-white leading-tight drop-shadow-lg">
              <h1 className="my-2">
                Remaja SMART: Sehat, Mandiri, Aktif, Resilien, Peduli Gizi
              </h1>
              <h1>
                &ldquo;Empower the Future: Youth Collaboration for a Resilient
                Indonesia&ldquo;
              </h1>
            </div>
            <div className="flex justify-start">
              <button
                onClick={() => router.push("/about")}
                className="bg-white rounded-lg text-astraColor-100 px-4 py-2 text-sm font-semibold inline-block hover:scale-105 duration-300 ease-in-out shadow-md"
              >
                Kenalan Lebih Dekat Dengan AORTA
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 z-10 bg-white bg-opacity-80">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mt-4 sm:mt-6 md:mt-10">
          TESTIMONI
        </h2>

        {/* Flex container yang berubah menjadi column pada mobile */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-around items-center sm:items-center space-y-6 sm:space-y-0 sm:space-x-2 sm:py-6 md:py-8 sm:px-2 p-2">
          {/* Testimoni 1 */}
          <div className="inline-flex flex-col justify-center items-center text-left p-2 max-w-full">
            <Image
              src="/assets/teenagers.jpg"
              alt="testimoni"
              width={300}
              height={100}
              className="rounded-t-3xl w-[250px] sm:w-[270px] md:w-[300px] h-auto"
            />
            <div className="w-[250px] sm:w-[270px] md:w-[300px] text-justify mt-2">
              <p className="text-sm sm:text-base">
                menurut saya program ini sangat membantu bagi kami para remaja
                yang membutuhkan career review dan lain sebagainya oleh karena
                itu saya menulis testimoni ini
              </p>
            </div>
          </div>

          {/* Testimoni 2 */}
          <div className="inline-flex flex-col justify-center items-center text-left p-2 max-w-full">
            <Image
              src="/assets/teenagers.jpg"
              alt="testimoni"
              width={300}
              height={100}
              className="rounded-t-3xl w-[250px] sm:w-[270px] md:w-[300px] h-auto"
            />
            <div className="w-[250px] sm:w-[270px] md:w-[300px] text-justify mt-2">
              <p className="text-sm sm:text-base">
                menurut saya program ini sangat membantu bagi kami para remaja
                yang membutuhkan career review dan lain sebagainya oleh karena
                itu saya menulis testimoni ini
              </p>
            </div>
          </div>

          {/* Testimoni 3 */}
          <div className="inline-flex flex-col justify-center items-center text-left p-2 max-w-full">
            <Image
              src="/assets/teenagers.jpg"
              alt="testimoni"
              width={300}
              height={100}
              className="rounded-t-3xl w-[250px] sm:w-[270px] md:w-[300px] h-auto"
            />
            <div className="w-[250px] sm:w-[270px] md:w-[300px] text-justify mt-2">
              <p className="text-sm sm:text-base">
                menurut saya program ini sangat membantu bagi kami para remaja
                yang membutuhkan career review dan lain sebagainya oleh karena
                itu saya menulis testimoni ini
              </p>
            </div>
          </div>
        </div>

        <Footer />
      </div>
      <Maskot />
    </div>
  );
}
