"use client";

import React, { useState, useEffect } from "react";
import Header from "@/Components/Header";
import Maskot from "@/Components/Maskot";
import Footer from "@/Components/Footer";
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Button,
} from "@material-tailwind/react";

const Page = () => {
  const [activities, setActivities] = useState([]); // State untuk menyimpan data kegiatan
  const [activeImage, setActiveImage] = useState(null); // Gambar aktif untuk modal
  const [isModalOpen, setIsModalOpen] = useState(false); // State untuk mengontrol visibilitas modal

  // Ambil data dari localStorage saat komponen dimuat
  useEffect(() => {
    const savedActivities = JSON.parse(localStorage.getItem("activity") || "[]");
    setActivities(savedActivities);
  }, []);

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

          {/* Daftar Kegiatan */}
          <div className="flex flex-wrap gap-4 justify-center mt-4">
            {activities.length > 0 ? (
              activities.map((activity, index) => (
                <div
                  key={index}
                  className="p-4 border border-gray-300 rounded-lg shadow-md w-64"
                >
                  <img
                    onClick={() => openModal(activity.imageReference)} // Buka modal saat gambar diklik
                    src={activity.imageReference}
                    className="h-36 w-full cursor-pointer rounded-lg object-cover object-center hover:scale-110 transition-transform duration-300"
                    alt={`activity-${index}`}
                  />
                </div>
              ))
            ) : (
              <p className="text-gray-500">Belum ada kegiatan yang ditambahkan.</p>
            )}
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
            src={activeImage} // Tampilkan gambar aktif
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

export default Page;