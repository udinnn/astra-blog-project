"use client";

import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import Maskot from "@/Components/Maskot";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter(); // Inisialisasi router

  return (
    <div className="relative min-h-screen">
      <Header />

      {/* Background Batik
      <div
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: "url('/assets/batik.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.8,
          pointerEvents: "none",
        }}
        aria-hidden="true"
      /> */}

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
                &ldquo;Empower the Future: Youth Collaboration for a Resilient
                Indonesia&rdquo;
              </h1>
            </div>
            <div className="flex justify-start mt-8">
              <button
                onClick={() => router.push("/about")}
                className="bg-white rounded-lg text-astraColor-100 px-6 py-3 text-sm sm:text-base font-semibold inline-block hover:scale-105 duration-300 ease-in-out shadow-lg hover:shadow-xl transform transition-all"
              >
                Kenalan Lebih Dekat Dengan AORTA
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-full">
        <div className="absolute right-0 bottom-0 z-[60] -translate-x-16 -translate-y-8">
          <Image
            src="/assets/aryo.png"
            width={300}
            height={300}
            alt="maskot"
            draggable={false}
            priority
            className="w-32 h-32 sm:w-40 sm:h-40 md:w-60 md:h-60 lg:w-72 lg:h-72 xl:w-80 xl:h-80 object-contain"
          />
        </div>
        <div className="absolute right-20 bottom-32 sm:right-28 sm:bottom-40 md:right-40 md:bottom-48 lg:right-48 lg:bottom-56 xl:right-72 xl:bottom-64 z-[65]">
          <div className="rounded-lg shadow-lg p-2 md:p-3">
            <iframe
              width="120"
              height="68"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="AORTA Program Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded md:w-32 md:h-18 lg:w-40 lg:h-24 xl:w-48 xl:h-28"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Testimoni Section dengan Rounded Top dan Background Batik */}
      <div className="relative z-10">
        {/* Container Testimoni dengan Rounded Top dan Background Batik */}
        <div
          className="relative rounded-t-[3rem] sm:rounded-t-[4rem] md:rounded-t-[5rem] z-20 -mt-16 sm:-mt-20 md:-mt-24 overflow-hidden"
          // style={{
          //   backgroundImage: "url('/assets/batik2.jpg')",
          //   backgroundSize: "cover",
          //   backgroundPosition: "center",
          // }}
        >
          {/* Overlay untuk background batik */}
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
                    mengembangkan potensi diri dan networking dengan sesama
                    remaja Indonesia.
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
