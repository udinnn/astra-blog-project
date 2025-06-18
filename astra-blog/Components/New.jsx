"use client";

import React, { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import { createClient } from "@/utils/supabase/client";
import Card from "./ui/Card";
import Input from "./ui/Input";
import Button from "./ui/Button";
import ImageUploader from "./ui/ImageUploader";
import RichTextEditor from "./RichTextEditor";
import ConfirmationModal from "./ui/ConfirmationModal";

const New = ({ setActivePage }) => {
  const supabase = createClient();

  // State untuk form
  const [imageUrl, setImageUrl] = useState(null);
  const [publishType, setPublishType] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [content, setContent] = useState("");

  // State untuk data dropdown
  const [chapters, setChapters] = useState([]);
  const [collaborations, setCollaborations] = useState([]);

  // State untuk UI
  const [isLoading, setIsLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  // Mengambil data untuk dropdown (Chapters & Kolaborasi) dari Supabase
  useEffect(() => {
    const fetchDropdownData = async () => {
      const { data: chapterData } = await supabase
        .from("chapters")
        .select("name")
        .order("name");
      const { data: collabData } = await supabase
        .from("collaborations")
        .select("partner_name")
        .order("partner_name");

      if (chapterData) setChapters(chapterData);
      if (collabData)
        setCollaborations(collabData.map((c) => ({ name: c.partner_name }))); // Menyamakan format objek
    };
    fetchDropdownData();
  }, [supabase]);

  const resetForm = () => {
    setImageUrl(null);
    setPublishType("");
    setSelectedOption("");
    setTitle("");
    setDate("");
    setContent("");
    // TODO: Tambahkan fungsi reset untuk RichTextEditor dan ImageUploader jika ada
  };

  const handleSave = () => {
    if (
      !publishType ||
      !selectedOption ||
      !title ||
      !date ||
      !content ||
      content === "<p><br></p>"
    ) {
      toast.error("Please fill all required fields, including content!");
      return;
    }
    setIsModalVisible(true);
  };

  const confirmSave = async () => {
    setIsLoading(true);

    // Data yang akan disimpan ke tabel 'articles'
    const articleData = {
      title: title,
      content: content,
      image_url: imageUrl,
      publish_date: date,
      publish_type:
        publishType === "kolaboraksi" ? "collaboration" : publishType,
      target_name: selectedOption,
    };

    const { error } = await supabase.from("articles").insert(articleData);

    setIsLoading(false);
    setIsModalVisible(false);

    if (error) {
      toast.error(`Failed to publish article: ${error.message}`);
    } else {
      toast.success("Article published successfully!");
      resetForm();
      setActivePage("list");
    }
  };

  const optionsForType = publishType === "chapter" ? chapters : collaborations;
  const optionLabel =
    publishType === "chapter" ? "Chapter City" : "Collaboration Partner";

  return (
    <>
      <Card>
        <h1 className="text-2xl font-bold mb-6 text-gray-800">NEW ARTICLE</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Publish To
            </label>
            <select
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={publishType}
              onChange={(e) => {
                setPublishType(e.target.value);
                setSelectedOption("");
              }}>
              <option value="" disabled>
                Select Publish Type
              </option>
              <option value="chapter">Chapter</option>
              <option value="kolaboraksi">KolaborAksi</option>
            </select>
          </div>

          {publishType && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select {optionLabel}
              </label>
              <select
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={selectedOption}
                onChange={(e) => setSelectedOption(e.target.value)}
                disabled={optionsForType.length === 0}>
                <option value="" disabled>
                  Select a {optionLabel}
                </option>
                {optionsForType.map((item, index) => (
                  <option key={index} value={item.name}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Article Header Image
            </label>
            <ImageUploader onImageChange={setImageUrl} folderPath="articles" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Title
            </label>
            <Input
              type="text"
              placeholder="Enter article title"
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
          <Button variant="secondary" onClick={resetForm} disabled={isLoading}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSave} disabled={isLoading}>
            {isLoading ? "Publishing..." : "Publish Article"}
          </Button>
        </div>
      </Card>

      <ConfirmationModal
        isOpen={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        onConfirm={confirmSave}
        title="Confirm Publication">
        Are you sure you want to publish this article?
      </ConfirmationModal>
    </>
  );
};

export default New;
