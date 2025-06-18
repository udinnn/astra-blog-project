"use client";

import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { createClient } from "@/utils/supabase/client";
import Card from "./ui/Card";
import Input from "./ui/Input";
import Button from "./ui/Button";
import ImageUploader from "./ui/ImageUploader";
import ConfirmationModal from "./ui/ConfirmationModal";

const Chapter = () => {
  const supabase = createClient();
  const [imageUrl, setImageUrl] = useState(null);
  const [cityName, setCityName] = useState("");
  const [chapterDate, setChapterDate] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const resetForm = () => {
    setImageUrl(null);
    setCityName("");
    setChapterDate("");
  };

  const handleSave = () => {
    if (!cityName || !chapterDate || !imageUrl) {
      toast.error("Please fill all fields and upload an image.");
      return;
    }
    setIsModalVisible(true);
  };

  const confirmSave = async () => {
    setIsLoading(true);

    // PERBAIKAN: Biarkan database yang membuat ID.
    const { error } = await supabase.from("chapters").insert([
      {
        name: cityName,
        chapter_date: chapterDate,
        image_url: imageUrl,
      },
    ]);

    setIsLoading(false);
    setIsModalVisible(false);

    if (error) {
      if (error.code === "23505") {
        toast.error("A chapter with this city name already exists!");
      } else {
        toast.error(`Could not save chapter: ${error.message}`);
      }
    } else {
      toast.success("Chapter saved successfully!");
      resetForm();
    }
  };

  return (
    <>
      <Card>
        <h1 className="text-2xl font-bold mb-6 text-gray-800">NEW CHAPTER</h1>
        <div className="space-y-6">
          <div className="form-group">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Chapter Image
            </label>
            <ImageUploader onImageChange={setImageUrl} folderPath="chapters" />
          </div>
          <div className="form-group">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              City Name
            </label>
            <Input
              type="text"
              placeholder="Enter City Name"
              value={cityName}
              onChange={(e) => setCityName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Chapter Date
            </label>
            <Input
              type="date"
              value={chapterDate}
              onChange={(e) => setChapterDate(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="flex justify-end mt-8 gap-3">
          <Button variant="secondary" onClick={resetForm} disabled={isLoading}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSave} disabled={isLoading}>
            {isLoading ? "Saving..." : "Save Chapter"}
          </Button>
        </div>
      </Card>
      <ConfirmationModal
        isOpen={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        onConfirm={confirmSave}
        title="Confirm Save">
        Are you sure you want to save this new chapter?
      </ConfirmationModal>
    </>
  );
};

export default Chapter;
