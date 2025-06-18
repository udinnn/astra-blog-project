"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Maskot from "@/components/Maskot";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Carousel,
  IconButton,
  Tooltip,
  Typography,
} from "@material-tailwind/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const page = () => {
  const [hoveredCard, setHoveredCard] = useState(null); // State untuk melacak card yang di-hover

  const [currentIndex, setCurrentIndex] = useState(0);

  const maskotImages = ["/assets/maskot.png", "/assets/mixue.png"];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % maskotImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? maskotImages.length - 1 : prevIndex - 1
    );
  };

  // Router initialization
  const router = useRouter();

  // Data untuk fokus isu
  const data = [
    {
      title: "Kesehatan Reproduksi",
      fokusLink: "/fokus_isu/kesehatan_reproduksi", // Sesuai dengan slug
      logo: "/assets/kespro.png",
    },
    {
      title: "Kesehatan Mental",
      fokusLink: "/fokus_isu/kesehatan_mental", // Sesuai dengan slug
      logo: "/assets/kesmen.png",
    },
    {
      title: "PHBS",
      fokusLink: "/fokus_isu/PHBS", // Sesuai dengan slug
      logo: "/assets/phbs.png",
    },
    {
      title: "Gizi Remaja",
      fokusLink: "/fokus_isu/gizi_remaja", // Sesuai dengan slug
      logo: "/assets/gizi.png",
    },
  ];

  return (
    <div className="relative min-h-screen">
      {/* Header tetap fixed */}
      <Header />
      <Maskot />

      {/* Hero Image Section - Responsive */}
      <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-screen flex items-center justify-center pt-[72px] sm:pt-[90px] md:pt-[110px] z-10 overflow-hidden">
        <Image
          src="/assets/about.jpg"
          fill
          alt="Tentang Aorta"
          className="object-cover"
          priority
          sizes="100vw"
          style={{ zIndex: 1 }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
          <h1 className="text-white font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
            TENTANG AORTA
          </h1>
        </div>
      </div>

      {/* Main Content Section dengan Rounded Top */}
      <div className="relative z-20 -mt-16 sm:-mt-20 md:-mt-24">
        <div className="p-8 bg-white rounded-t-[3rem] sm:rounded-t-[4rem] md:rounded-t-[5rem] overflow-hidden">
          {/* About Content */}
          <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-7xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="w-full text-center mb-8 sm:mb-12 md:mb-16">
                <p className="text-gray-700 text-sm sm:text-sm md:text-md lg:text-lg leading-relaxed max-w-max mx-auto px-4">
                  Aksi Solidaritas Remaja Kesehatan Astra atau yang dikenal
                  dengan AORTA Community merupakan suatu komunitas binaan PT.
                  Astra Internasional Tbk yang memiliki kepedulian terhadap
                  isu-isu kesehatan remaja di Indonesia. AORTA dikukuhkan untuk
                  pertama kalinya pada tanggal 21 November 2019 di Belitung oleh
                  Chief of Corporate Affair Astra Bapak Riza Deliansyah
                  didampingi oleh Deputi Pencegahan BNN Bapak Drs. Anjan Pramuka
                  Putra, SH. M. Hum dan Sekretaris utama BKKBN Bapak H.
                  Nofrizal, S. P, MA.
                </p>
              </div>

              {/* Responsive Carousel */}
              <div className="w-full max-w-6xl mx-auto mb-8 sm:mb-12 md:mb-16">
                <Carousel
                  className="rounded-xl shadow-[0px_0px_30px_rgba(0,0,0,0.3)]"
                  prevArrow={({ handlePrev }) => (
                    <IconButton
                      variant="text"
                      color="black"
                      size="lg"
                      onClick={handlePrev}
                      className="!absolute top-2/4 left-2 sm:left-4 -translate-y-2/4 z-50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="black"
                        className="h-4 w-4 sm:h-6 sm:w-6">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                        />
                      </svg>
                    </IconButton>
                  )}
                  nextArrow={({ handleNext }) => (
                    <IconButton
                      variant="text"
                      color="black"
                      size="lg"
                      onClick={handleNext}
                      className="!absolute top-2/4 !right-2 sm:!right-4 -translate-y-2/4 z-50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="black"
                        className="h-4 w-4 sm:h-6 sm:w-6">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                        />
                      </svg>
                    </IconButton>
                  )}
                  navigation={({ setActiveIndex, activeIndex, length }) => (
                    <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                      {new Array(length).fill("").map((_, i) => (
                        <span
                          key={i}
                          className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                            activeIndex === i
                              ? "w-8 bg-black"
                              : "w-4 bg-black/50"
                          }`}
                          onClick={() => setActiveIndex(i)}
                        />
                      ))}
                    </div>
                  )}>
                  {/* Slide 1 - ALYA */}
                  <div className="relative h-[400px] sm:h-[500px] md:h-[600px] w-full">
                    <div className="absolute inset-0 flex h-full w-full items-center justify-center bg-white">
                      <div className="flex flex-col md:flex-row items-center justify-center px-4 sm:px-8 md:px-16 gap-4 md:gap-8">
                        {/* Image */}
                        <div className="flex-shrink-0">
                          <Image
                            src="/assets/alya.png"
                            alt="maskot alya"
                            width={300}
                            height={300}
                            className="w-32 h-32 sm:w-40 sm:h-40 md:w-60 md:h-60 lg:w-80 lg:h-80 object-contain"
                            style={{
                              filter: "drop-shadow(0 0 4px rgb(245 127 13))",
                            }}
                          />
                        </div>
                        {/* Text Content */}
                        <div className="flex flex-col text-center md:text-left max-w-md lg:max-w-lg">
                          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-4">
                            Hi! Aku{" "}
                            <span className="text-yellow-900">ALYA</span>
                          </h1>
                          <p className="text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed text-gray-700">
                            Aku kakaknya Aryo. Hobiku adalah membaca buku.
                            Seperti arti namaku, yaitu "cahaya", kalian bakal
                            sering ketemu aku di postingan-postingan AORTA
                            Community seputar tips-tips kesehatan untuk
                            memberikan pencerahan kepada kalian seputar
                            kesehatan. Ayo bertemu adikku!
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Slide 2 - ARYO */}
                  <div className="relative h-[400px] sm:h-[500px] md:h-[600px] w-full">
                    <div className="absolute inset-0 flex h-full w-full items-center justify-center bg-white">
                      <div className="flex flex-col md:flex-row-reverse items-center justify-center px-4 sm:px-8 md:px-16 gap-4 md:gap-8">
                        {/* Image */}
                        <div className="flex-shrink-0">
                          <Image
                            src="/assets/aryo.png"
                            alt="maskot aryo"
                            width={300}
                            height={300}
                            className="w-32 h-32 sm:w-40 sm:h-40 md:w-60 md:h-60 lg:w-80 lg:h-80 object-contain"
                            style={{
                              filter: "drop-shadow(0 0 4px rgb(13 71 161))",
                            }}
                          />
                        </div>
                        {/* Text Content */}
                        <div className="flex flex-col text-center md:text-left max-w-md lg:max-w-lg">
                          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-4">
                            Hi! Aku <span className="text-blue-900">ARYO</span>
                          </h1>
                          <p className="text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed text-gray-700">
                            Aku Si Bungsu, adik dari Kak Alya. Cita-citaku mau
                            jadi Superman supaya bisa bantu orang banyak! Sama
                            seperti namaku yang berarti "ksatria", aku ini
                            berani dan kuat walau lebih muda dari Kak Alya.
                            Jadi, aku akan memandu kalian dalam setiap challenge
                            yang ada di AORTA Community agar kalian jadi berani
                            dan kuat sepertiku!
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Carousel>
              </div>
            </div>
          </div>

          {/* Fokus Isu Section */}
          <div className="relative w-full py-8 sm:py-12 md:py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              <div className="text-center mb-8 sm:mb-12">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                  Fokus Isu
                </h1>
              </div>

              {/* Responsive Grid untuk Cards */}
              <div className="flex flex-col"></div>
              <div className="flex flex-wrap gap-6 sm:gap-8 md:gap-10 justify-center">
                {data.map((item, index) => (
                  <div
                    key={index}
                    className={`relative flex flex-col items-center justify-center overflow-hidden text-center transition-all duration-300 cursor-pointer rounded-xl ${
                      hoveredCard !== null && hoveredCard !== index
                        ? "blur-sm scale-95"
                        : "blur-none scale-100 hover:scale-105"
                    }`}
                    onClick={() => router.push(item.fokusLink)}
                    onMouseEnter={() => setHoveredCard(index)}
                    onMouseLeave={() => setHoveredCard(null)}>
                    <Card className="w-full sm:w-[220px] lg:w-[250px]">
                      {" "}
                      {/* Responsif untuk lebar card */}
                      <CardHeader
                        floated={false}
                        className="h-[180px] sm:h-[200px] lg:h-[250px]">
                        <img
                          src={item.logo}
                          alt={item.title}
                          className="h-fit w-fit object-cover rounded-t-xl"
                        />
                      </CardHeader>
                      <CardBody className="text-center py-4 px-2">
                        <p className="mb-2 font-bold text-gray-700">
                          {item.title}
                        </p>
                      </CardBody>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer */}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default page;
