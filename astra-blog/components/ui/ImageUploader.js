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
  initialPreview = [], // Default ke array kosong
}) => {
  const [previews, setPreviews] = useState(initialPreview);
  const [isLoading, setIsLoading] = useState(false);
  const supabase = createClient();

  useEffect(() => {
    setPreviews(initialPreview);
  }, [initialPreview]);

  const onDrop = useCallback(
    async (acceptedFiles) => {
      if (!acceptedFiles?.length) return;

      setIsLoading(true);

      const uploadPromises = acceptedFiles.map((file) => {
        const fileName = `${folderPath}/${Date.now()}-${file.name.replace(
          /\s/g,
          "_"
        )}`;
        return supabase.storage
          .from("aorta-public-images")
          .upload(fileName, file, { cacheControl: "3600", upsert: false })
          .then(({ error }) => {
            if (error) throw error;
            const { data } = supabase.storage
              .from("aorta-public-images")
              .getPublicUrl(fileName);
            return data.publicUrl;
          });
      });

      try {
        const newUrls = await Promise.all(uploadPromises);
        const updatedUrls = [...previews, ...newUrls];
        setPreviews(updatedUrls);
        onImageChange(updatedUrls);
        toast.success(`${newUrls.length} gambar berhasil diunggah!`);
      } catch (error) {
        toast.error(`Upload gagal: ${error.message}`);
      } finally {
        setIsLoading(false);
      }
    },
    [onImageChange, folderPath, supabase.storage, previews]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
    multiple: true, // Izinkan multiple file
  });

  const removeImage = (indexToRemove) => {
    const updatedPreviews = previews.filter(
      (_, index) => index !== indexToRemove
    );
    setPreviews(updatedPreviews);
    onImageChange(updatedPreviews);
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
            <p>Mengunggah...</p>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center text-gray-500">
            <UploadCloud className="h-8 w-8 mb-2" />
            <p>Seret & lepas gambar di sini, atau klik untuk memilih</p>
            <p className="text-xs text-gray-400 mt-1">
              Anda bisa memilih beberapa gambar sekaligus
            </p>
          </div>
        )}
      </div>

      {previews.length > 0 && (
        <div className="mt-4 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
          {previews.map((previewUrl, index) => (
            <div
              key={index}
              className="relative w-full aspect-square border rounded-lg p-1 bg-slate-50">
              <Image
                src={previewUrl}
                alt={`Preview ${index + 1}`}
                fill
                className="object-contain"
              />
              <button
                onClick={() => removeImage(index)}
                className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 shadow-lg hover:bg-red-600 transition-transform hover:scale-110"
                aria-label="Hapus gambar">
                <X size={16} />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
