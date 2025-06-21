"use client";

import React, { useState, useEffect } from "react";
import { createClient } from "@/utils/supabase/client";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Maskot from "@/components/Maskot";
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Button,
} from "@material-tailwind/react";

const KegiatanPage = () => {
  const [activities, setActivities] = useState([]);
  const [activeImage, setActiveImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchActivities = async () => {
      const supabase = createClient();
      const { data, error } = await supabase
        .from("kegiatan")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching activities:", error);
      } else {
        setActivities(data || []);
      }
    };
    fetchActivities();
  }, []);

  const openModal = (imgUrl) => {
    if (imgUrl) {
      setActiveImage(imgUrl);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setActiveImage(null);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <div className="flex-grow">
        <Header />
        <Maskot />

        <div className="flex flex-col mt-10 p-6 md:p-8">
          <h1 className="text-4xl font-extrabold text-center p-4 text-gray-800">
            Kegiatan AORTA
          </h1>
          <p className="text-center text-gray-500 max-w-2xl mx-auto">
            Galeri kegiatan yang telah dilaksanakan oleh AORTA Community di
            berbagai kota dan bersama para mitra
          </p>

          <div className="flex flex-wrap gap-4 justify-center mt-10">
            {activities.length > 0 ? (
              activities.map((activity) => (
                <div
                  key={activity.id}
                  className="p-4 border border-gray-300 rounded-lg shadow-md w-full sm:w-64 md:w-72 lg:w-80 hover:scale-105 transition-transform duration-300"
                >
                  <div
                    className="relative h-36 w-full cursor-pointer rounded-lg overflow-hidden"
                    onClick={() => openModal(activity.image_url)}
                  >
                    <Image
                      src={activity.image_url || "/assets/placeholder.jpg"}
                      alt={activity.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      style={{ objectFit: "cover" }}
                      className="hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <p className="mt-2 text-center text-lg font-semibold">
                    {activity.title}
                  </p>
                </div>
              ))
            ) : (
              <div className="flex flex-col items-center justify-center space-y-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50px"
                  height="50px"
                  viewBox="0 0 24 24"
                  fill="none"
                  opacity={0.5}
                >
                  <path
                    d="M16.5 2.5L21.5 7.5M21.5 2.5L16.5 7.5M12.5 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21H17C17.93 21 18.395 21 18.7765 20.8978C19.8117 20.6204 20.6204 19.8117 20.8978 18.7765C21 18.395 21 17.93 21 17M10.5 8.5C10.5 9.60457 9.60457 10.5 8.5 10.5C7.39543 10.5 6.5 9.60457 6.5 8.5C6.5 7.39543 7.39543 6.5 8.5 6.5C9.60457 6.5 10.5 7.39543 10.5 8.5ZM14.99 11.9181L6.53115 19.608C6.05536 20.0406 5.81747 20.2568 5.79643 20.4442C5.77819 20.6066 5.84045 20.7676 5.96319 20.8755C6.10478 21 6.42628 21 7.06929 21H16.456C17.8951 21 18.6147 21 19.1799 20.7582C19.8894 20.4547 20.4547 19.8894 20.7582 19.1799C21 18.6147 21 17.8951 21 16.456C21 15.9717 21 15.7296 20.9471 15.5042C20.8805 15.2208 20.753 14.9554 20.5733 14.7264C20.4303 14.5442 20.2412 14.3929 19.8631 14.0905L17.0658 11.8527C16.6874 11.5499 16.4982 11.3985 16.2898 11.3451C16.1061 11.298 15.9129 11.3041 15.7325 11.3627C15.5279 11.4291 15.3486 11.5921 14.99 11.9181Z"
                    stroke="#4A5568"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className="text-gray-500">
                  Belum ada kegiatan yang ditambahkan.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <Dialog size="md" open={isModalOpen} handler={closeModal}>
        <DialogHeader>
          <h1 className="text-left text-xl font-semibold">Pratinjau Gambar</h1>
        </DialogHeader>
        <DialogBody>
          {activeImage && (
            <img
              className="h-auto w-full max-h-[70vh] rounded-lg object-contain"
              src={activeImage}
              alt="Pratinjau Kegiatan"
            />
          )}
        </DialogBody>
        <DialogFooter>
          <Button variant="outlined" color="blue-gray" onClick={closeModal}>
            Tutup
          </Button>
        </DialogFooter>
      </Dialog>

      <Footer />
    </div>
  );
};

export default KegiatanPage;
