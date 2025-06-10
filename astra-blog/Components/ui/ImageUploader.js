// components/ui/ImageUploader.js
import React, { useState } from 'react';
import { UploadCloud, X } from 'lucide-react';
import Image from 'next/image';

const ImageUploader = ({ onImageChange, initialPreview = null }) => {
  const [preview, setPreview] = useState(initialPreview);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreview(imageUrl);
      onImageChange(imageUrl); // Pass the URL up
    }
  };

  const removeImage = () => {
    setPreview(null);
    onImageChange(null);
  };

  return (
    <div className="w-full">
      {preview ? (
        <div className="relative w-64 h-64 border rounded-lg overflow-hidden group">
          <Image src={preview} alt="Preview" layout="fill" objectFit="cover" />
          <button
            onClick={removeImage}
            className="absolute top-2 right-2 bg-black/50 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <X size={18} />
          </button>
        </div>
      ) : (
        <label className="flex flex-col items-center justify-center w-64 h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
          <div className="flex flex-col items-center justify-center pt-5 pb-6 text-gray-500">
            <UploadCloud size={40} className="mb-3" />
            <p className="mb-2 text-sm">
              <span className="font-semibold">Click to upload</span> or drag and drop
            </p>
            <p className="text-xs">PNG, JPG, or GIF</p>
          </div>
          <input type="file" className="hidden" accept="image/*" onChange={handleFileChange} />
        </label>
      )}
    </div>
  );
};

export default ImageUploader;