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
          <h1 className="text-4xl font-extrabold text-center p-2 text-gray-700">
            Kegiatan AORTA
          </h1>

          <div className="flex flex-wrap gap-4 justify-center mt-6">
            {activities.length > 0 ? (
              activities.map((activity) => (
                <div
                  key={activity.id}
                  className="p-4 border border-gray-300 rounded-lg shadow-md w-full sm:w-64 md:w-72 lg:w-80 hover:scale-105 transition-transform duration-300">
                  <div
                    className="relative h-36 w-full cursor-pointer rounded-lg overflow-hidden"
                    onClick={() => openModal(activity.image_url)}>
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
              <p className="text-gray-500">
                Belum ada kegiatan yang ditambahkan.
              </p>
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
