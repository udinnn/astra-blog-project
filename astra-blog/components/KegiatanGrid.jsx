"use client";

import { useState } from "react";
import Image from "next/image";
import FullscreenImageModal from "./ui/FullScreenImageModal";

export default function KegiatanGrid({ kegiatan }) {
  const [selectedKegiatan, setSelectedKegiatan] = useState(null);

  const openModal = (kegiatanItem) => {
    // Pastikan image_url selalu menjadi array sebelum dikirim ke modal
    const itemWithArrayImages = {
      ...kegiatanItem,
      image_url: Array.isArray(kegiatanItem.image_url)
        ? kegiatanItem.image_url
        : [kegiatanItem.image_url],
    };
    setSelectedKegiatan(itemWithArrayImages);
  };

  const closeModal = () => {
    setSelectedKegiatan(null);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
        {kegiatan.map((item) => {
          const thumbnailUrl = Array.isArray(item.image_url)
            ? item.image_url[0]
            : item.image_url;

          if (
            !thumbnailUrl ||
            typeof thumbnailUrl !== "string" ||
            !thumbnailUrl.startsWith("http")
          ) {
            return null;
          }

          return (
            <div
              key={item.id}
              className="relative w-full h-80 rounded-2xl overflow-hidden group shadow-lg cursor-pointer"
              onClick={() => openModal(item)}>
              <Image
                src={thumbnailUrl}
                alt={item.title}
                fill
                className="object-cover w-full h-full transition-all duration-500 group-hover:scale-110 group-hover:brightness-75"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white font-bold text-lg drop-shadow-md">
                  Lihat Galeri
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <FullscreenImageModal
        isOpen={!!selectedKegiatan}
        onClose={closeModal}
        kegiatan={selectedKegiatan}
      />
    </>
  );
}
