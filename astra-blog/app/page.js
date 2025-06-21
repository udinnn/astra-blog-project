"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Maskot from "@/components/Maskot";
import Image from "next/image";
import { useRouter } from "next/navigation";

// Data testimoni (tidak berubah)
const testimonialsData = [
  { imageSrc: "/assets/teenagers.jpg", text: "Menurut saya program ini sangat membantu...", name: "Sarah", role: "Peserta AORTA" },
  { imageSrc: "/assets/teenagers.jpg", text: "Program AORTA memberikan pengalaman luar biasa...", name: "Ahmad", role: "Peserta AORTA" },
  { imageSrc: "/assets/teenagers.jpg", text: "Bergabung dengan AORTA adalah keputusan terbaik!...", name: "Maya", role: "Peserta AORTA" },
  { imageSrc: "/assets/teenagers.jpg", text: "Saya belajar banyak tentang kesehatan remaja...", name: "Budi", role: "Peserta AORTA" },
  { imageSrc: "/assets/teenagers.jpg", text: "AORTA mengajarkan saya arti penting kolaborasi...", name: "Dewi", role: "Peserta AORTA" },
  { imageSrc: "/assets/teenagers.jpg", text: "Saya merasa lebih percaya diri setelah mengikuti program ini...", name: "Rudi", role: "Peserta AORTA" },
  { imageSrc: "/assets/teenagers.jpg", text: "Program ini sangat inspiratif dan mendidik...", name: "Lina", role: "Peserta AORTA" },
  { imageSrc: "/assets/teenagers.jpg", text: "Saya bangga menjadi bagian dari AORTA Community...", name: "Tono", role: "Peserta AORTA" },
];

const TestimonialCard = ({ imageSrc, text, name, role }) => (
  <div className="flex flex-col items-center text-center w-full max-w-sm mx-auto">
    <div className="relative overflow-hidden rounded-t-3xl shadow-lg w-full">
      <Image src={imageSrc} alt={`Testimoni dari ${name}`} width={300} height={200} className="w-full h-48 object-cover" />
    </div>
    <div className="bg-white p-6 rounded-b-3xl shadow-lg w-full flex-grow flex flex-col">
      <p className="text-base text-gray-700 leading-relaxed flex-grow">“{text}”</p>
      <div className="mt-4 pt-4 border-t border-gray-200">
        <p className="text-sm font-semibold text-astraColor-100">- {name}, {role}</p>
      </div>
    </div>
  </div>
);

export default function Home() {
  const router = useRouter();

  return (
    <div className="bg-gray-100">
      <Header />

      <main className="relative w-full overflow-hidden">
        {/* Lapis 1: Background & Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/teenagers.jpg"
            fill
            alt="Teenagers collaboration"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-astraColor-100/70"></div>
        </div>

        {/* Lapis 2 & 3: Konten Foreground */}
        <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[85vh] md:min-h-screen pt-24 pb-12">
            
            {/* KOLOM KIRI: TEKS & CTA */}
            {/* PERBAIKAN 1: z-index dinaikkan agar di atas lengkungan testimoni */}
            <div className="relative z-20 flex flex-col items-center text-center lg:items-start lg:text-left">
              <div className="font-bold text-white leading-tight drop-shadow-lg space-y-4">
                <h1 className="text-3xl sm:text-4xl xl:text-5xl">
                  Remaja SMART: Sehat, Mandiri, Aktif, Resilien, Peduli Gizi
                </h1>
                <h2 className="text-xl sm:text-2xl xl:text-3xl font-semibold opacity-90">
                  “Empower the Future: Youth Collaboration for a Resilient Indonesia”
                </h2>
              </div>
              <div className="mt-10">
                <button
                  onClick={() => router.push("/about")}
                  className="bg-white rounded-lg text-astraColor-100 px-8 py-3 font-semibold hover:scale-105 duration-300 ease-in-out shadow-xl hover:shadow-2xl transform transition-all"
                >
                  Kenalan Lebih Dekat Dengan AORTA
                </button>
              </div>
            </div>

            {/* KOLOM KANAN: MASKOT & VIDEO */}
            {/* PERBAIKAN 2: z-index dinaikkan ke level tertinggi */}
            <div className="relative z-30 w-full h-64 sm:h-80 lg:h-full flex items-center justify-center lg:justify-end lg:items-end 2xl:items-end 2xl:justify-end">
              <div className="absolute w-[175px] h-[175px] sm:w-[250px] sm:h-[250px] lg:w-[350px] lg:h-[350px] 2xl:w-[450px] 2xl:h-[450px] top-[30%] left-[50%] lg:top-[20%] lg:left-[40%] 2xl:top-[15%] 2xl:left-[40%]">
                <Image
                  src="/assets/aryo.png"
                  fill
                  alt="Maskot Aryo"
                  className="object-contain"
                />
                <div className="absolute top-[-30%] left-[-70%] w-[160px] h-[90px] sm:w-[240px] sm:h-[135px] lg:top-[-25%] lg:left-[-70%] lg:w-[320px] lg:h-[180px] 2xl:w-[320px] 2xl:h-[180px] 2xl:top-[-20%] 2xl:left-[-50%]">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    title="AORTA Program Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="rounded-lg shadow-2xl"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>

      {/* TESTIMONI SECTION */}
      {/* PERBAIKAN 3: z-index diatur agar berada di antara background dan konten hero */}
      <section className="relative bg-gray-100 rounded-t-[3rem] -mt-16 py-16 px-8 sm:py-20 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-12 text-astraColor-100">
            TESTIMONI
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 justify-center group">
            {testimonialsData.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <Maskot /> 
    </div>
  );
}