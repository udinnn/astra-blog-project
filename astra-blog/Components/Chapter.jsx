"use client";

import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { storageService } from "./services/localStorageService";
import Card from "./ui/Card";
import Input from "./ui/Input";
import Button from "./ui/Button";
import ImageUploader from "./ui/ImageUploader";
import ConfirmationModal from "./ui/ConfirmationModal";

const Chapter = () => {
  const [image, setImage] = useState(null);
  const [cityName, setCityName] = useState("");
  const [chapterDate, setChapterDate] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);

  const generateId = () => {
    const savedChapters = storageService.getItems("chapters");
    return `CHAP${String(savedChapters.length + 1).padStart(3, "0")}`;
  };
  
  const resetForm = () => {
    setImage(null);
    setCityName("");
    setChapterDate("");
  };

  const handleSave = () => {
    if (!cityName || !chapterDate || !image) {
      toast.error("Please fill all fields and add an image.");
      return;
    }

    const savedChapters = storageService.getItems("chapters");
    const existingChapter = savedChapters.find(
      (chapter) => chapter.name.toLowerCase() === cityName.toLowerCase()
    );

    if (existingChapter) {
      toast.error("A chapter with this city name already exists!");
      return;
    }
    
    setIsModalVisible(true);
  };

  const confirmSave = () => {
    const chapterData = {
      id: generateId(),
      imageReference: image, // In real app, this would be a URL from server
      name: cityName,
      chapterDate,
      createdAt: new Date().toISOString(),
    };

    const savedChapters = storageService.getItems("chapters");
    const updatedChapters = [...savedChapters, chapterData];
    
    if (storageService.saveItems("chapters", updatedChapters)) {
      toast.success("Chapter saved successfully!");
      resetForm();
    } else {
      toast.error("Could not save chapter. Storage might be full.");
    }
    
    setIsModalVisible(false);
  };

  return (
    <>
      <Card>
        <h1 className="text-2xl font-bold mb-6 text-gray-800">NEW CHAPTER</h1>
        
        <div className="space-y-6">
          <div className="form-group">
            <label className="block text-sm font-medium text-gray-700 mb-2">Chapter Image</label>
            <ImageUploader onImageChange={setImage} />
          </div>

          <div className="form-group">
            <label className="block text-sm font-medium text-gray-700 mb-2">City Name</label>
            <Input
              type="text"
              placeholder="Enter City Name"
              value={cityName}
              onChange={(e) => setCityName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label className="block text-sm font-medium text-gray-700 mb-2">Chapter Date</label>
            <Input
              type="date"
              value={chapterDate}
              onChange={(e) => setChapterDate(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="flex justify-end mt-8 gap-3">
           <Button variant="secondary" onClick={resetForm}>Cancel</Button>
           <Button variant="primary" onClick={handleSave}>Save Chapter</Button>
        </div>
      </Card>

      <ConfirmationModal
        isOpen={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        onConfirm={confirmSave}
        title="Confirm Save"
      >
        Are you sure you want to save this new chapter?
      </ConfirmationModal>
    </>
  );
};

export default Chapter;