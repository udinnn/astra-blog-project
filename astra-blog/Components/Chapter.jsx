"use client";

import React, { useState, useEffect } from "react";

const Chapter = () => {
  const [image, setImage] = useState(null);
  const [cityName, setCityName] = useState("");
  const [chapterDate, setChapterDate] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  
  // Retrieve existing chapters from localStorage on component mount
  useEffect(() => {
    const savedChapters = localStorage.getItem("chapters");
    if (!savedChapters) {
      localStorage.setItem("chapters", JSON.stringify([]));
    }
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Create an object URL instead of base64 for display only
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
      
      // Store file name instead of the full image data
      // In a real app, you would upload this to a server
    }
  };

  const handleSave = () => {
    if (!cityName || !chapterDate) {
      alert("Please fill all required fields!");
      return;
    }
    setIsModalVisible(true);
  };

  const confirmSave = () => {
    // Create chapter data object without storing the full image
    const chapterData = {
      id: generateId(),
      // For a real app, this would be an image URL or ID from your server
      imageReference: "chapter_image_" + Date.now(),
      name: cityName, // Use "name" for consistency with New.jsx component
      chapterDate,
      createdAt: new Date().toISOString(),
    };

    // Get existing chapters
    const savedChapters = JSON.parse(localStorage.getItem("chapters") || "[]");
    
    // Add new chapter
    const updatedChapters = [...savedChapters, chapterData];
    
    // Save to localStorage with error handling
    try {
      localStorage.setItem("chapters", JSON.stringify(updatedChapters));

    // Reset form
    setImage(null);
    setCityName("");
    setChapterDate("");
    setIsModalVisible(false);
    
    alert("Chapter saved successfully!");
    } catch (error) {
      console.error("Storage error:", error);
      alert("Could not save data. Storage quota might be exceeded. Try using fewer or smaller images.");
    }
  };

  const generateId = () => {
    // Get existing chapters to determine next ID
    const savedChapters = JSON.parse(localStorage.getItem("chapters") || "[]");
    const nextNumber = savedChapters.length + 1;
    return `CHAP${String(nextNumber).padStart(3, "0")}`;
  };

  const cancelSave = () => {
    setIsModalVisible(false);
  };

  return (
    <div>
      <div className="flex flex-row justify-between items-center mb-4 w-auto">
        <h1 className="font-bold text-4xl">NEW CHAPTER</h1>
      </div>

      <div className="flex flex-col justify-start items-start mx-20 mt-10">
        {/* Input Gambar */}
        <div className="flex flex-col mb-4">
          <label className="text-lg font-bold">Add Image</label>
          <input
            type="file"
            accept="image/*"
            className="text-sm border border-gray-300 p-1 rounded-lg"
            onChange={handleImageChange}
          />
          {image && (
            <div className="mt-4">
              <img
                src={image}
                alt="Preview"
                className="w-62 h-64 object-cover rounded-lg my-2"
              />
            </div>
          )}
        </div>

        {/* Input Nama Kota */}
        <div className="flex flex-col mb-4 w-full">
          <label className="font-bold text-lg">City Name</label>
          <input
            type="text"
            placeholder="Enter City Name"
            className="text-sm border border-gray-300 p-1 rounded-lg"
            value={cityName}
            onChange={(e) => setCityName(e.target.value)}
            required
          />
        </div>

        {/* Input Tanggal Chapter */}
        <div className="flex flex-col mb-4">
          <label className="font-bold text-lg">Chapter Date</label>
          <input
            type="date"
            className="text-sm border border-gray-300 p-1 rounded-lg"
            value={chapterDate}
            onChange={(e) => setChapterDate(e.target.value)}
            required
          />
        </div>
      </div>

      <div className="flex flex-row justify-end items-end mb-4 mx-20">
        <button
          className="bg-blue-500 text-white p-2 rounded-lg mx-2"
          onClick={handleSave}
        >
          Save
        </button>
      </div>

      {/* Modal Konfirmasi */}
      {isModalVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-4 rounded-lg shadow-lg w-96">
            <h2 className="text-lg font-bold mb-4">Confirm Save</h2>
            <p className="mb-4">Are you sure you want to save this data?</p>
            <div className="flex justify-between">
              <button
                className="text-sm bg-blue-500 text-white p-2 rounded-lg"
                onClick={confirmSave}
              >
                Yes, Save
              </button>
              <button
                className="text-sm bg-red-500 text-white p-2 rounded-lg"
                onClick={cancelSave}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chapter;