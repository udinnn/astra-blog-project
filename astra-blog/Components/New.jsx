"use client";

import React, { useState, useEffect } from "react";

const New = () => {
  const [imagePreview, setImagePreview] = useState(null);
  const [publishType, setPublishType] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [content, setContent] = useState("");
  
  // State for chapters and collaborations data
  const [chapters, setChapters] = useState([]);
  const [collaborations, setCollaborations] = useState([]);

  // Load chapters and collaborations data from localStorage on component mount
  useEffect(() => {
    const loadedChapters = JSON.parse(localStorage.getItem("chapters") || "[]");
    const loadedCollaborations = JSON.parse(localStorage.getItem("collaborations") || "[]");
    
    setChapters(loadedChapters);
    setCollaborations(loadedCollaborations);
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Create an object URL instead of base64 for display only
      const imageUrl = URL.createObjectURL(file);
      setImagePreview(imageUrl);
      
      // In a real app, you would upload this to a server and get back a URL
    }
  };

  const generateArticleId = (type) => {
    // Get existing articles
    const existingArticles = JSON.parse(localStorage.getItem("articles") || "[]");
    
    // Filter articles by type
    const typeArticles = existingArticles.filter(article => 
      article.publishType === type
    );
    
    // Determine next number in sequence
    const nextNumber = typeArticles.length + 1;
    
    // Create ID with prefix C or K based on type
    const prefix = type === "chapter" ? "C" : "K";
    return `${prefix}${String(nextNumber).padStart(3, "0")}`;
  };

  const handlePublish = () => {
    // Validate input
    if (!publishType || !selectedOption || !title || !date || !content) {
      alert("Please fill all required fields!");
      return;
    }

    // Create article data object without storing the full image
    const articleData = {
      id: generateArticleId(publishType),
      // For a real app, this would be an image URL from your server
      imageReference: "article_image_" + Date.now(),
      title,
      date,
      content,
      publishType,
      target: selectedOption,
      createdAt: new Date().toISOString(),
      type: publishType // Add type field for filtering in List component
    };

    // Get existing articles
    const existingArticles = JSON.parse(localStorage.getItem("articles") || "[]");
    
    // Add new article
    const updatedArticles = [...existingArticles, articleData];
    
    // Save to localStorage with error handling
    try {
      localStorage.setItem("articles", JSON.stringify(updatedArticles));

    // Reset form
    setImagePreview(null);
    setPublishType("");
    setSelectedOption("");
    setTitle("");
    setDate("");
    setContent("");

    alert("Article published successfully!");
    } catch (error) {
      console.error("Storage error:", error);
      alert("Could not save article. Storage quota might be exceeded. Try using less content or clearing some existing articles.");
    }
  };

  return (
    <div>
      <div className="flex flex-row justify-between items-center mb-4 w-auto">
        <h1 className="font-bold text-4xl">NEW ARTICLE</h1>
      </div>

      {/* Pilihan Publish */}
      <div className="flex flex-col mx-20 mt-4">
        <label className="font-bold text-lg mb-2">Publish To</label>
        <select
          className="text-sm border border-gray-300 p-2 rounded-lg mb-4"
          value={publishType}
          onChange={(e) => {
            setPublishType(e.target.value);
            setSelectedOption(""); // Reset selection when changing type
          }}
        >
          <option value="">Select Publish Type</option>
          <option value="chapter">Chapter</option>
          <option value="kolaboraksi">KolaborAksi</option>
        </select>

        {/* Dropdown Nama Mitra/Nama Kota */}
        {publishType && (
          <div className="flex flex-col mb-4">
            <label className="font-bold text-lg mb-2">
              {publishType === "chapter" ? "Select City" : "Select Partner"}
            </label>
            <select
              className="text-sm border border-gray-300 p-2 rounded-lg"
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}
            >
              <option value="">
                {publishType === "chapter"
                  ? "Select a City"
                  : "Select a Partner"}
              </option>
              {(publishType === "chapter" ? chapters : collaborations).map(
                (item, index) => (
                  <option key={index} value={item.name || item.partnerName}>
                    {item.name || item.partnerName}
                  </option>
                )
              )}
            </select>
          </div>
        )}
      </div>

      {/* Input Artikel */}
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
          {imagePreview && (
            <div className="mt-4">
              <img
                src={imagePreview}
                alt="Preview"
                className="w-62 h-64 object-cover rounded-lg my-2"
              />
            </div>
          )}
        </div>

        {/* Input Judul */}
        <div className="flex flex-col mb-4 w-full">
          <label className="font-bold text-lg">Title</label>
          <input
            type="text"
            placeholder="Enter Title"
            className="text-sm border border-gray-300 p-1 rounded-lg"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        {/* Input Tanggal */}
        <div className="flex flex-col mb-4">
          <label className="font-bold text-lg">Date</label>
          <input
            type="date"
            className="text-sm border border-gray-300 p-1 rounded-lg"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>

        {/* Input Isi Artikel */}
        <div className="flex flex-col mb-4 w-full">
          <label className="font-bold text-lg">Content</label>
          <textarea
            placeholder="Enter Content"
            className="text-sm border border-gray-300 p-1 rounded-lg resize-none overflow-y-auto"
            rows="10"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          ></textarea>
        </div>
      </div>

      {/* Tombol Publish dan Cancel */}
      <div className="flex flex-row justify-end items-end mb-4 mx-20">
        <button
          className="bg-blue-500 text-white p-2 rounded-lg mx-2"
          onClick={handlePublish}
        >
          Publish
        </button>
        <button
          className="bg-red-500 text-white p-2 rounded-lg"
          onClick={() => {
            setImagePreview(null);
            setPublishType("");
            setSelectedOption("");
            setTitle("");
            setDate("");
            setContent("");
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default New;