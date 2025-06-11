// components/New.jsx
"use client";

import React, { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import { storageService } from "@/Components/services/localStorageService"; // Sesuaikan path jika perlu
import Card from "./ui/Card";
import Input from "./ui/Input";
import Button from "./ui/Button";
import ImageUploader from "./ui/ImageUploader";
import RichTextEditor from "./RichTextEditor";

const New = ({ setActivePage }) => {
  const [image, setImage] = useState(null);
  const [publishType, setPublishType] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [content, setContent] = useState(""); // Ini akan menerima string HTML dari RichTextEditor

  const [chapters, setChapters] = useState([]);
  const [collaborations, setCollaborations] = useState([]);
  
  const resetForm = () => {
      // Fungsi untuk membersihkan form
      // ...
  };

  useEffect(() => {
    setChapters(storageService.getItems("chapters"));
    setCollaborations(storageService.getItems("collaborations"));
  }, []);

  const generateArticleId = (type) => {
    const articles = storageService.getItems("articles");
    const typeArticles = articles.filter((a) => a.publishType === type);
    const prefix = type === "chapter" ? "C" : "K";
    return `${prefix}${String(typeArticles.length + 1).padStart(3, "0")}`;
  };

  const handlePublish = () => {
    // Validasi sekarang langsung menggunakan state 'content' yang sudah berupa string
    if (!publishType || !selectedOption || !title || !date || content === "<p><br></p>" || !content) {
      toast.error("Please fill all required fields, including content!");
      return;
    }

    const articleData = {
      id: generateArticleId(publishType),
      imageReference: image,
      title,
      date,
      content: content, // 'content' dijamin sudah berupa string HTML
      publishType,
      target: selectedOption,
      createdAt: new Date().toISOString(),
    };

    const articles = storageService.getItems("articles");
    const updatedArticles = [...articles, articleData];

    if (storageService.saveItems("articles", updatedArticles)) {
      toast.success("Article published successfully!");
      resetForm();
      if(setActivePage) setActivePage("list");
    } else {
      toast.error("Could not save article.");
    }
  };

  const optionsForType = publishType === 'chapter' ? chapters : collaborations;
  const optionLabel = publishType === 'chapter' ? 'City' : 'Partner';

  return (
    <Card>
      <h1 className="text-2xl font-bold mb-6 text-gray-800">NEW ARTICLE</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Publish To</label>
          <select
            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg"
            value={publishType}
            onChange={(e) => {
              setPublishType(e.target.value);
              setSelectedOption("");
            }}
          >
            <option value="" disabled>Select Publish Type</option>
            <option value="chapter">Chapter</option>
            <option value="kolaboraksi">KolaborAksi</option>
          </select>
        </div>
        
        {publishType && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Select {optionLabel}</label>
            <select
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg"
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}
            >
              <option value="" disabled>Select a {optionLabel}</option>
              {optionsForType.map((item) => (
                <option key={item.id} value={item.name || item.partnerName}>
                  {item.name || item.partnerName}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Article Image</label>
          <ImageUploader onImageChange={setImage} />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
          <Input type="text" placeholder="Enter article title" value={title} onChange={e => setTitle(e.target.value)} />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
          <Input type="date" value={date} onChange={e => setDate(e.target.value)} />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Content</label>
          <RichTextEditor onContentChange={setContent} />
        </div>
      </div>
      
      <div className="flex justify-end mt-8 gap-3">
        <Button variant="secondary" onClick={resetForm}>Cancel</Button>
        <Button variant="primary" onClick={handlePublish}>Publish Article</Button>
      </div>
    </Card>
  );
};

export default New;