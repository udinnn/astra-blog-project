"use client";

import React, { useState, useCallback, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { toast } from "react-hot-toast";
import { createClient } from "@/utils/supabase/client";
import { UploadCloud, X, Loader2 } from "lucide-react";
import Image from "next/image";

const ImageUploader = ({
  onImageChange,
  folderPath,
  initialPreview = null,
}) => {
  const [preview, setPreview] = useState(initialPreview);
  const [isLoading, setIsLoading] = useState(false);
  const supabase = createClient();

  useEffect(() => {
    setPreview(initialPreview);
  }, [initialPreview]);

  const onDrop = useCallback(
    async (acceptedFiles) => {
      const file = acceptedFiles[0];
      if (!file) return;

      setIsLoading(true);

      // Buat nama file yang unik untuk menghindari tumpang tindih
      const fileName = `${folderPath}/${Date.now()}-${file.name.replace(
        /\s/g,
        "_"
      )}`;

      // Unggah file ke Supabase Storage
      const { error } = await supabase.storage
        .from("aorta-public-images") // Pastikan ini nama bucket Anda
        .upload(fileName, file, {
          cacheControl: "3600",
          upsert: false,
        });

      if (error) {
        toast.error(`Upload failed: ${error.message}`);
        setIsLoading(false);
        return;
      }

      // Dapatkan URL publik dari file yang baru diunggah
      const { data } = supabase.storage
        .from("aorta-public-images") // Pastikan ini nama bucket Anda
        .getPublicUrl(fileName);

      if (data.publicUrl) {
        toast.success("Image uploaded successfully!");
        setPreview(data.publicUrl); // Tampilkan preview dari URL Supabase
        onImageChange(data.publicUrl); // Kirim URL kembali ke form utama
      }

      setIsLoading(false);
    },
    [onImageChange, folderPath, supabase.storage]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
    multiple: false,
  });

  const removeImage = () => {
    // Di aplikasi nyata, Anda mungkin ingin menghapus file dari storage juga
    setPreview(null);
    onImageChange(null);
  };

  return (
    <div className="w-full">
      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors ${
          isDragActive
            ? "border-blue-500 bg-blue-50"
            : "border-gray-300 hover:border-blue-400"
        }`}>
        <input {...getInputProps()} />
        {isLoading ? (
          <div className="flex flex-col items-center justify-center text-gray-500">
            <Loader2 className="animate-spin h-8 w-8 mb-2" />
            <p>Uploading...</p>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center text-gray-500">
            <UploadCloud className="h-8 w-8 mb-2" />
            <p>Drag & drop an image here, or click to select</p>
          </div>
        )}
      </div>
      {preview && (
        <div className="mt-4 relative w-48 h-48 border rounded-lg p-2 bg-slate-50">
          <Image
            src={preview}
            alt="Image Preview"
            layout="fill"
            objectFit="contain"
          />
          <button
            onClick={removeImage}
            className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 shadow-lg hover:bg-red-600 transition-transform hover:scale-110">
            <X size={16} />
          </button>
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
