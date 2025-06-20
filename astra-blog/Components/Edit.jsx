"use client";

import React, { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import { createClient } from "@/utils/supabase/client";
import Card from "./ui/Card";
import Input from "./ui/Input";
import Button from "./ui/Button";
import ImageUploader from "./ui/ImageUploader";
import ConfirmationModal from "./ui/ConfirmationModal";
import { ArrowLeft } from "lucide-react";
import RichTextEditor from "./RichTextEditor";

// 1. Terima 'articleData' sebagai prop
const Edit = ({ setActivePage, articleData }) => {
  const supabase = createClient();

  // 2. State 'article' diisi dari prop yang diberikan oleh parent
  const [article, setArticle] = useState(articleData);

  const [isSaveModalVisible, setSaveModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // 3. useEffect yang lama dihapus. Logika ini untuk menangani jika halaman di-refresh.
  useEffect(() => {
    if (!articleData) {
      toast.error("No article data provided. Returning to list.");
      setActivePage("list");
    }
    // Update state jika prop berubah (misal user mengklik edit pada artikel lain)
    setArticle(articleData);
  }, [articleData, setActivePage]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setArticle((prev) => ({ ...prev, [name]: value }));
  };
  const handleImageChange = (imageUrl) => {
    setArticle((prev) => ({ ...prev, image_url: imageUrl }));
  };
  const handleContentChange = (htmlString) => {
    setArticle((prev) => ({ ...prev, content: htmlString }));
  };
  const handleSave = () => {
    if (!article.title || !article.publish_date || !article.content) {
      toast.error("Title, Date, and Content cannot be empty.");
      return;
    }
    setSaveModalVisible(true);
  };

  const confirmSave = async () => {
    setIsLoading(true);
    const { error } = await supabase
      .from("articles")
      .update({
        title: article.title,
        content: article.content,
        image_url: article.image_url,
        publish_date: article.publish_date,
      })
      .eq("id", article.id);

    setIsLoading(false);
    setSaveModalVisible(false);

    if (error) {
      toast.error("Failed to save article: " + error.message);
    } else {
      toast.success("Article saved successfully!");
      setActivePage("list");
    }
  };

  if (!article) {
    return <div>Loading...</div>;
  }

  // Tidak ada perubahan pada JSX di bawah ini
  return (
    <>
      <Card>
        <div className="flex items-center gap-4 mb-6">
          <Button
            variant="secondary"
            onClick={() => setActivePage("list")}
            className="p-2 h-10 w-10 !rounded-full">
            <ArrowLeft size={20} />
          </Button>
          <h1 className="text-2xl font-bold text-gray-800">EDIT ARTICLE</h1>
        </div>
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Article ID
            </label>
            <Input
              type="text"
              value={article.id}
              readOnly
              className="bg-gray-100"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Article Image
            </label>
            <ImageUploader
              onImageChange={handleImageChange}
              initialPreview={article.image_url}
              folderPath="articles"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Title
            </label>
            <Input
              type="text"
              name="title"
              value={article.title}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Date
            </label>
            <Input
              type="date"
              name="publish_date"
              value={new Date(article.publish_date).toISOString().split("T")[0]}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Content
            </label>
            <RichTextEditor
              initialContent={article.content}
              onContentChange={handleContentChange}
            />
          </div>
        </div>
        <div className="flex justify-end mt-8 gap-3">
          <Button
            variant="secondary"
            onClick={() => setActivePage("list")}
            disabled={isLoading}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSave} disabled={isLoading}>
            {isLoading ? "Saving..." : "Save Changes"}
          </Button>
        </div>
      </Card>
      <ConfirmationModal
        isOpen={isSaveModalVisible}
        onClose={() => setSaveModalVisible(false)}
        onConfirm={confirmSave}
        title="Confirm Save">
        Are you sure you want to save the changes?
      </ConfirmationModal>
    </>
  );
};
export default Edit;
