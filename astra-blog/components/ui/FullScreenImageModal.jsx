"use client";

import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

const FullscreenImageModal = ({ isOpen, onClose, kegiatan }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(0);
    }
  }, [isOpen, kegiatan]);

  if (
    !isOpen ||
    !kegiatan ||
    !kegiatan.image_url ||
    !Array.isArray(kegiatan.image_url) ||
    kegiatan.image_url.length === 0
  ) {
    return null;
  }

  const { image_url, title, activity_date } = kegiatan;

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % image_url.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + image_url.length) % image_url.length
    );
  };

  return (
    // PERUBAHAN: Kembali ke background hitam solid
    <div
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
      onClick={onClose}>
      <div
        className="relative w-full h-full max-w-5xl max-h-[90vh] bg-blue-900 rounded-lg shadow-xl flex flex-col"
        onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="absolute -top-4 -right-4 z-20 bg-white text-black rounded-full p-2 shadow-lg hover:bg-gray-200 transition-transform hover:scale-110"
          aria-label="Tutup">
          <X size={24} />
        </button>

        <div className="relative flex-grow w-full h-full flex items-center justify-center">
          {image_url.length > 1 && (
            <button
              onClick={handlePrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 text-black rounded-full p-2 hover:bg-white transition"
              aria-label="Gambar sebelumnya">
              <ChevronLeft size={32} />
            </button>
          )}

          <div className="relative w-full h-full">
            <Image
              key={currentIndex}
              src={image_url[currentIndex]}
              alt={title}
              fill
              className="object-contain animate-fade-in"
            />
          </div>

          {image_url.length > 1 && (
            <button
              onClick={handleNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 text-black rounded-full p-2 hover:bg-white transition"
              aria-label="Gambar selanjutnya">
              <ChevronRight size={32} />
            </button>
          )}
        </div>

        <div className="p-4 bg-black/60 text-white rounded-b-lg text-center">
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-sm text-white/90 mt-1">
            {new Date(activity_date).toLocaleDateString("id-ID", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          {image_url.length > 1 && (
            <p className="text-xs text-white/70 mt-2">
              Gambar {currentIndex + 1} dari {image_url.length}
            </p>
          )}
        </div>
      </div>
      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 0.3s ease-in-out;
        }
        @keyframes fadeIn {
          from {
            opacity: 0.5;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default FullscreenImageModal;
