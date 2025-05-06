"use client";

import React, { useState } from "react";
import Header from "@/Components/Header";
import Maskot from "@/Components/Maskot";
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Button,
} from "@material-tailwind/react";
import Footer from "@/Components/Footer";

const page = () => {
  const data = [
    {
      imgelink:
        "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
    {
      imgelink:
        "https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    },
    {
      imgelink:
        "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
    },
    {
      imgelink:
        "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
    },
    {
      imgelink:
        "https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
    },
  ];

  const [activeImage, setActiveImage] = useState(null); // Nilai awal diatur ke null
  const [isModalOpen, setIsModalOpen] = useState(false); // State untuk mengontrol visibilitas modal

  const openModal = (imgelink) => {
    setActiveImage(imgelink); // Set gambar aktif
    setIsModalOpen(true); // Tampilkan modal
  };

  const closeModal = () => {
    setIsModalOpen(false); // Sembunyikan modal
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header dan Konten */}
      <div className="flex-grow">
        <Header />
        <Maskot />

        <div className="flex flex-col mt-10 p-8">
          <h1 className="text-4xl font-bold text-center p-2">Kegiatan AORTA</h1>

          {/* Gambar kecil */}
          <div className="flex flex-wrap gap-4 justify-center mt-4">
            {data.map(({ imgelink }, index) => (
              <div key={index} className="p-2">
                <img
                  onClick={() => openModal(imgelink)} // Buka modal saat gambar kecil diklik
                  src={imgelink}
                  className={`h-36 w-48 cursor-pointer rounded-lg object-cover object-center hover:scale-110 transition-transform duration-300 ${
                    activeImage === imgelink ? "ring-4 ring-blue-500" : ""
                  }`} // Tambahkan efek highlight jika aktif
                  alt={`gallery-image-${index}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      <Dialog size="md" open={isModalOpen} handler={closeModal}>
        <DialogHeader>
          <h1 className="text-left text-xl">Kegiatan AORTA</h1>
        </DialogHeader>
        <DialogBody>
          <img
            className="h-[360px] w-full rounded-lg object-cover object-center"
            src={activeImage || data[0].imgelink} // Tampilkan gambar default jika activeImage null
            alt="active-gallery-image"
          />
        </DialogBody>
        <DialogFooter>
          <Button variant="outlined" color="blue-gray" onClick={closeModal}>
            Close
          </Button>
        </DialogFooter>
      </Dialog>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default page;