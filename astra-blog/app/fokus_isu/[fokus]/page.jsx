"use client";

import Footer from '@/Components/Footer'
import Header from '@/Components/Header'
import Maskot from '@/Components/Maskot'
import { useParams } from 'next/navigation'
import React from 'react'

const page = () => {
    const { fokus } = useParams();
  return (
    <div>
      <Header />
      <Maskot />
        {/* Kota pertama */}
        <div className="flex flex-col min-h-screen mt-12">
          {/* Gambar Full Screen */}
          <div className="relative w-full h-[75vh]">
            <img
              src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
              alt="Article Image"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <h1 className="text-white text-5xl font-bold text-center">
                Fokus Isu {fokus.charAt(0).toUpperCase() + fokus.slice(1)}
              </h1>
            </div>
          </div>

          {/* Konten Artikel */}
          <div className="flex flex-col items-center p-8 space-y-8">
            {/* Tanggal Artikel */}
            <p
              className="text-sm font-medium text-center"
            >
              Published on: 20 July 2022
            </p>

            {/* Isi Artikel */}
            <div className="max-w-4xl text-justify space-y-6">
              <p
                className="text-lg"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                euismod, nunc ut tincidunt tincidunt, nisi nisl aliquam nunc,
                eget aliquam nisl nunc eget nisl. Fusce euismod, nunc ut
                tincidunt tincidunt, nisi nisl aliquam nunc, eget aliquam nisl
                nunc eget nisl.
              </p>
              <p
                className="text-lg"
              >
                Curabitur non nulla sit amet nisl tempus convallis quis ac
                lectus. Curabitur arcu erat, accumsan id imperdiet et, porttitor
                at sem. Nulla porttitor accumsan tincidunt. Vivamus suscipit
                tortor eget felis porttitor volutpat.
              </p>
            </div>

            {/* Embed Video YouTube */}
            <div className="w-full max-w-4xl aspect-video">
              <iframe
                className="w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      <Footer />
    </div>
  )
}

export default page
