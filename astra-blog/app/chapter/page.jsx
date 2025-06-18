"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/utils/supabase/client";
import Header from "@/components/Header";
import Maskot from "@/components/Maskot";
import Footer from "@/components/Footer";

const Page = () => {
  const router = useRouter();
  const [chapters, setChapters] = useState([]);

  useEffect(() => {
    const loadChapters = async () => {
      const supabase = createClient();
      const { data } = await supabase
        .from("chapters")
        .select("*")
        .order("name", { ascending: true });
      if (data) setChapters(data);
    };
    loadChapters();
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <div className="flex-grow">
        <Header />
        <Maskot />
        <div className="flex flex-col mt-10 p-6 md:p-8">
          <h1 className="text-4xl font-extrabold text-center text-gray-700 p-4">
            Chapter AORTA
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center mt-6">
            {chapters.map((chapter, index) => (
              <div
                key={chapter.id || index}
                className="relative cursor-pointer group hover:scale-105 transform transition-all duration-300 ease-in-out"
                onClick={() =>
                  router.push(`/chapter/${encodeURIComponent(chapter.name)}`)
                }>
                <div className="h-36 sm:h-40 md:h-48 w-full rounded-lg overflow-hidden">
                  <img
                    src={chapter.image_url || "/assets/placeholder.jpg"}
                    alt={`Chapter ${chapter.name}`}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-lg group-hover:bg-black/70 transition-all duration-300 ease-in-out">
                  <p className="text-white font-semibold text-sm sm:text-base md:text-lg text-center">
                    {chapter.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
