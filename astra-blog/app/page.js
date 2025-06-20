"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Maskot from "@/components/Maskot";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter(); // Inisialisasi router

  return (
    <div className="relative min-h-screen">
      <Header />

      {/* Hero section */}
      <div className="relative w-full h-screen flex items-center justify-center pt-[72px] sm:pt-[90px] md:pt-[110px] z-10 overflow-hidden">
        {/* Gambar Background */}
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
        <div className="absolute inset-0 bg-astraColor-100 bg-opacity-50 z-10"></div>

        {/* Konten di atas overlay - Dipusatkan */}
        <div className="absolute inset-0 flex flex-col items-start justify-center z-20">
          <div className="flex flex-col w-3/5 text-start p-4 ml-8 space-y-6">
            <div className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-white leading-tight drop-shadow-lg">
              <h1 className="mb-4">
                Remaja SMART: Sehat, Mandiri, Aktif, Resilien, Peduli Gizi
              </h1>
              <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
                “Empower the Future: Youth Collaboration for a Resilient
                Indonesia”
              </h1>
            </div>
            <div className="flex justify-start mt-8">
              <button
                onClick={() => router.push("/about")}
                className="bg-white rounded-lg text-astraColor-100 px-6 py-3 text-sm sm:text-base font-semibold inline-block hover:scale-105 duration-300 ease-in-out shadow-lg hover:shadow-xl transform transition-all">
                Kenalan Lebih Dekat Dengan AORTA
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ========== KODE YANG DIPERBAIKI - MIRIP ASLI ========== */}
      <div className="relative w-full">
        {/* Maskot Aryo dengan ukuran yang responsif */}
        <div className="absolute right-0 bottom-0 z-40 transform -translate-x-6 -translate-y-4 sm:-translate-x-8 sm:-translate-y-6 md:-translate-x-10 md:-translate-y-8 lg:-translate-x-12 lg:-translate-y-10 xl:-translate-x-16 xl:-translate-y-12">
          <Image
            src="/assets/aryo.png"
            width={384}
            height={384}
            alt="maskot"
            draggable={false}
            priority
            className="w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 lg:w-72 lg:h-72 xl:w-80 xl:h-80 2xl:w-90 2xl:h-90 object-contain"
          />
        </div>

        {/* Video YouTube dengan posisi yang disesuaikan - digeser ke kiri */}
        <div className="absolute right-24 bottom-28 sm:right-48 sm:bottom-32 md:right-32 md:bottom-56 lg:right-44 lg:bottom-72 xl:right-56 xl:bottom-52 2xl:right-64 2xl:bottom-80 z-40">
          <div className="rounded-lg p-1 sm:p-2 md:p-3">
            <iframe
              width="268"
              height="160"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="AORTA Program Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded w-40 h-24 sm:w-48 sm:h-28 md:w-48 md:h-28 lg:w-56 lg:h-32 xl:w-64 xl:h-36 2xl:w-72 2xl:h-40"
            />
          </div>
        </div>
      </div>
      {/* ========== AKHIR DARI KODE YANG DIPERBAIKI ========== */}

      {/* Testimoni Section dengan Rounded Top */}
      <div className="relative z-10">
        <div className="relative rounded-t-[3rem] sm:rounded-t-[4rem] md:rounded-t-[5rem] z-20 -mt-16 sm:-mt-20 md:-mt-24 overflow-hidden">
          {/* Overlay untuk background */}
          <div className="absolute inset-0 bg-gray-300 bg-opacity-100 backdrop-blur-sm"></div>
          <div className="relative flex flex-col flex-wrap justify-center items-center space-y-8 p-4 z-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center mt-8 text-astraColor-100">
              TESTIMONI
            </h2>

            {/* Container Testimoni */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto object-center justify-center">
              {/* Testimoni 1 */}
              <div className="flex flex-col justify-start items-center text-center w-full">
                <div className="relative overflow-hidden rounded-t-3xl shadow-lg w-full max-w-[280px]">
                  <Image
                    src="/assets/teenagers.jpg"
                    alt="testimoni"
                    width={300}
                    height={200}
                    className="w-full h-36 sm:h-40 md:h-44 lg:h-48 object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="bg-white p-3 sm:p-4 md:p-5 rounded-b-3xl shadow-lg w-full max-w-[280px]">
                  <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
                    Menurut saya program ini sangat membantu bagi kami para
                    remaja yang membutuhkan career review dan pengembangan diri.
                    Terima kasih AORTA!
                  </p>
                  <div className="mt-2 sm:mt-3 pt-2 sm:pt-3 border-t border-gray-200">
                    <p className="text-xs sm:text-sm font-semibold text-astraColor-100">
                      - Sarah, Peserta AORTA
                    </p>
                  </div>
                </div>
              </div>

              {/* Testimoni 2 */}
              <div className="flex flex-col justify-start items-center text-center w-full">
                <div className="relative overflow-hidden rounded-t-3xl shadow-lg w-full max-w-[280px]">
                  <Image
                    src="/assets/teenagers.jpg"
                    alt="testimoni"
                    width={300}
                    height={200}
                    className="w-full h-36 sm:h-40 md:h-44 lg:h-48 object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="bg-white p-3 sm:p-4 md:p-5 rounded-b-3xl shadow-lg w-full max-w-[280px]">
                  <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
                    Program AORTA memberikan pengalaman luar biasa dalam
                    mengembangkan potensi diri dan networking dengan remaja
                    Indonesia.
                  </p>
                  <div className="mt-2 sm:mt-3 pt-2 sm:pt-3 border-t border-gray-200">
                    <p className="text-xs sm:text-sm font-semibold text-astraColor-100">
                      - Ahmad, Peserta AORTA
                    </p>
                  </div>
                </div>
              </div>

              {/* Testimoni 3 */}
              <div className="flex flex-col justify-start items-center text-center w-full">
                <div className="relative overflow-hidden rounded-t-3xl shadow-lg w-full max-w-[280px]">
                  <Image
                    src="/assets/teenagers.jpg"
                    alt="testimoni"
                    width={300}
                    height={200}
                    className="w-full h-36 sm:h-40 md:h-44 lg:h-48 object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="bg-white p-3 sm:p-4 md:p-5 rounded-b-3xl shadow-lg w-full max-w-[280px]">
                  <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
                    Bergabung dengan AORTA adalah keputusan terbaik! Saya
                    mendapat banyak insight dan teman-teman hebat dari seluruh
                    Indonesia.
                  </p>
                  <div className="mt-2 sm:mt-3 pt-2 sm:pt-3 border-t border-gray-200">
                    <p className="text-xs sm:text-sm font-semibold text-astraColor-100">
                      - Maya, Peserta AORTA
                    </p>
                  </div>
                </div>
              </div>

              {/* Testimoni 4 */}
              <div className="flex flex-col justify-start items-center text-center w-full">
                <div className="relative overflow-hidden rounded-t-3xl shadow-lg w-full max-w-[280px]">
                  <Image
                    src="/assets/teenagers.jpg"
                    alt="testimoni"
                    width={300}
                    height={200}
                    className="w-full h-36 sm:h-40 md:h-44 lg:h-48 object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="bg-white p-3 sm:p-4 md:p-5 rounded-b-3xl shadow-lg w-full max-w-[280px]">
                  <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
                    Menurut saya program ini sangat membantu bagi kami para
                    remaja yang membutuhkan career review dan pengembangan diri.
                    Terima kasih AORTA!
                  </p>
                  <div className="mt-2 sm:mt-3 pt-2 sm:pt-3 border-t border-gray-200">
                    <p className="text-xs sm:text-sm font-semibold text-astraColor-100">
                      - Sarah, Peserta AORTA
                    </p>
                  </div>
                </div>
              </div>

              {/* Testimoni 5 */}
              <div className="flex flex-col justify-start items-center text-center w-full">
                <div className="relative overflow-hidden rounded-t-3xl shadow-lg w-full max-w-[280px]">
                  <Image
                    src="/assets/teenagers.jpg"
                    alt="testimoni"
                    width={300}
                    height={200}
                    className="w-full h-36 sm:h-40 md:h-44 lg:h-48 object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="bg-white p-3 sm:p-4 md:p-5 rounded-b-3xl shadow-lg w-full max-w-[280px]">
                  <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
                    Menurut saya program ini sangat membantu bagi kami para
                    remaja yang membutuhkan career review dan pengembangan diri.
                    Terima kasih AORTA!
                  </p>
                  <div className="mt-2 sm:mt-3 pt-2 sm:pt-3 border-t border-gray-200">
                    <p className="text-xs sm:text-sm font-semibold text-astraColor-100">
                      - Sarah, Peserta AORTA
                    </p>
                  </div>
                </div>
              </div>

              {/* Testimoni 6 - akan otomatis pindah ke row berikutnya */}
              <div className="flex flex-col justify-start items-center text-center w-full">
                <div className="relative overflow-hidden rounded-t-3xl shadow-lg w-full max-w-[280px]">
                  <Image
                    src="/assets/teenagers.jpg"
                    alt="testimoni"
                    width={300}
                    height={200}
                    className="w-full h-36 sm:h-40 md:h-44 lg:h-48 object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="bg-white p-3 sm:p-4 md:p-5 rounded-b-3xl shadow-lg w-full max-w-[280px]">
                  <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
                    Program ini benar-benar membuka wawasan saya tentang
                    berbagai peluang karir dan cara mengembangkan skill yang
                    dibutuhkan.
                  </p>
                  <div className="mt-2 sm:mt-3 pt-2 sm:pt-3 border-t border-gray-200">
                    <p className="text-xs sm:text-sm font-semibold text-astraColor-100">
                      - Rizki, Peserta AORTA
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="relative z-10">
            <Footer />
          </div>
        </div>
      </div>

      <Maskot />
    </div>
  );
}
