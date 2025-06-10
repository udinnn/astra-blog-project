"use client";

import React, { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import { storageService } from "./services/localStorageService";
import Card from "./ui/Card";
import Input from "./ui/Input";
import Button from "./ui/Button";
import ImageUploader from "./ui/ImageUploader";
import RichTextEditor from "./RichTextEditor"; // Import editor baru

const New = () => {
  const [image, setImage] = useState(null);
  const [publishType, setPublishType] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [content, setContent] = useState("");

  const [chapters, setChapters] = useState([]);
  const [collaborations, setCollaborations] = useState([]);

  useEffect(() => {
    setChapters(storageService.getItems("chapters"));
    setCollaborations(storageService.getItems("collaborations"));
  }, []);

  const generateArticleId = (type) => {
    const articles = storageService.getItems("articles");
    const typeArticles = articles.filter(
      (article) => article.publishType === type
    );
    const prefix = type === "chapter" ? "C" : "K";
    return `${prefix}${String(typeArticles.length + 1).padStart(3, "0")}`;
  };

  const handlePublish = () => {
    if (!publishType || !selectedOption || !title || !date || !content) {
      toast.error("Please fill all required fields!");
      return;
    }

    const articleData = {
      id: generateArticleId(publishType),
      imageReference: image,
      title,
      date,
      content,
      publishType,
      target: selectedOption,
      createdAt: new Date().toISOString(),
    };

    const articles = storageService.getItems("articles");
    const updatedArticles = [...articles, articleData];

    if (storageService.saveItems("articles", updatedArticles)) {
      toast.success("Article published successfully!");
      // Reset form state
    } else {
      toast.error("Could not save article.");
    }
  };

  return (
    <Card>
      <h1 className="text-2xl font-bold mb-6 text-gray-800">NEW ARTICLE</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Publish To
          </label>
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
        </div>
        {publishType && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {/* ... */}
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

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Article Image
          </label>
          <ImageUploader onImageChange={setImage} />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Title
          </label>
          <Input
            type="text"
            placeholder="Enter Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Date
          </label>
          <Input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Content
          </label>
          <RichTextEditor onContentChange={setContent} />
        </div>
      </div>

      <div className="flex justify-end mt-8 gap-3">
        <Button variant="secondary">Cancel</Button>
        <Button variant="primary" onClick={handlePublish}>
          Publish Article
        </Button>
      </div>
    </Card>
  );
};

export default New;
