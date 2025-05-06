"use client";

import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import Maskot from "@/Components/Maskot";
import {
  Card,
  CardBody,
  CardHeader,
  Carousel,
  IconButton,
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
      fokusLink: "/fokus_isu/kesehatan_reproduksi",
    },
    {
      title: "Kesehatan Mental",
      fokusLink: "/fokus_isu/kesehatan_mental",
    },
    {
      title: "PHBS",
      fokusLink: "/fokus_isu/PHBS",
    },
    {
      title: "Gizi Remaja",
      fokusLink: "/fokus_isu/gizi_remaja",
    },
  ];

  return (
    <div>
      {/* Header tetap fixed */}
      <Header />
      <Maskot />

      {/* Tambahkan padding-top untuk menghindari konten tertutup header */}
      <div className="relative w-full h-screen flex justify-center z-0">
        <Image
          src="/assets/about.jpg"
          fill
          alt="Tentang Aorta"
          className="object-cover"
          priority
        />
      </div>
      <div className="absolute inset-x-0 top-3/4 bg-white rounded-3xl mt-8">
        <h1 className="text-4xl font-bold text-center mt-10">Tentang Aorta</h1>
        <div className="flex flex-row flex-grow justify-around items-start space-x-2 p-8">
          <div className="inline-flex flex-col justify-center items-center text-center p-2">
            <p className="text-sm">
              Aksi Solidaritas Remaja Kesehatan Astra atau yang dikenal dengan
              AORTA Community merupakan suatu komunitas binaan PT. Astra
              Internasional Tbk yang memiliki kepedulian terhadap isu-isu
              kesehatan remaja di Indonesia. AORTA dikukuhkan untuk pertama
              kalinya pada tanggal 21 November 2019 di Belitung oleh Chief of
              Corporate Affair Astra Bapak Riza Deliansyah didampingi oleh
              Deputi Pencegahan BNN Bapak Drs. Anjan Pramuka Putra, SH. M. Hum
              dan Sekretaris utama BKKBN Bapak H. Nofrizal, S. P, MA.
            </p>
            {/* Carousel */}
            <div className="relative w-[1200px] h-min-content flex flex-wrap justify-center items-center">
              <Carousel
                className="rounded-xl"
                prevArrow={({ handlePrev }) => (
                  <IconButton
                    variant="text"
                    color="black"
                    size="lg"
                    onClick={handlePrev}
                    className="!absolute top-2/4 left-4 -translate-y-2/4"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="black"
                      className="h-6 w-6"
                    >
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
                    className="!absolute top-2/4 !right-4 -translate-y-2/4"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="black"
                      className="h-6 w-6"
                    >
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
                          activeIndex === i ? "w-8 bg-black" : "w-4 bg-black/50"
                        }`}
                        onClick={() => setActiveIndex(i)}
                      />
                    ))}
                  </div>
                )}
              >
                <div className="relative h-full w-full">
                  <img
                    src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
                    alt="image 1"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 flex h-full w-full place-items-center bg-white">
                    <div className="flex flex-row mr-16 ml-2 justify-center">
                      <Image
                        src="/assets/maskot.png"
                        alt="maskot"
                        width={400}
                        height={400}
                      />
                      <div className="flex flex-col w-full p-2 justify-center text-left">
                        <h1 className="text-4xl font-bold mb-2">
                          Mixue Gembrot
                        </h1>
                        <p className="text-sm">
                          Mixue Gembrot merupakan maskot ternama dari project
                          ini. Ia memiliki warna putih yang menggambarkan
                          kesucian dan warna merah yang melambangkan keberanian,
                          sama seperti bendera negara tercinta kita, Indonesia.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative h-full w-full">
                  <img
                    src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
                    alt="image 1"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 flex flex-col h-full w-full justify-center items-center bg-white">
                    <div className="w-3/4 text-center md:w-2/4 mt-10">
                      <h1 className="text-4xl font-bold mb-8">Fokus Isu</h1>
                    </div>
                    <div className="flex flex-row space-x-8 p-2">
                      {data.map((item, index) => (
                        <Card
                          key={index}
                          shadow={false}
                          className={`relative flex h-[20rem] w-full max-w-[15rem] items-center justify-center overflow-hidden text-center transition-all duration-300 cursor-pointer ${
                            hoveredCard !== null && hoveredCard !== index
                              ? "blur-sm"
                              : "blur-none scale-105"
                          }`}
                          onClick={() => router.push(item.fokusLink)}
                          onMouseEnter={() => setHoveredCard(index)}
                          onMouseLeave={() => setHoveredCard(null)}
                        >
                          <CardHeader
                            floated={false}
                            shadow={false}
                            color="transparent"
                            className="absolute inset-0 m-0 h-full w-full rounded-none bg-light-blue-900"
                          >
                            <div className="absolute inset-0 h-full w-full" />
                          </CardHeader>
                          <CardBody className="relative flex items-center justify-center py-14 px-6 md:px-12">
                            <h1 className="font-bold text-black">
                              {item.title}
                            </h1>
                          </CardBody>
                        </Card>
                      ))}
                    </div>
                  </div>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default page;