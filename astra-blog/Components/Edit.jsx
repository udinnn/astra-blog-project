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

const Edit = ({ setActivePage }) => {
  const supabase = createClient();
  const [article, setArticle] = useState(null);
  const [isSaveModalVisible, setSaveModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Mengambil data artikel dari sessionStorage
    const itemJson = sessionStorage.getItem("article_to_edit");
    if (itemJson) {
      setArticle(JSON.parse(itemJson));
    } else {
      toast.error("No article selected for editing.");
      setActivePage("list");
    }
    // Membersihkan sessionStorage setelah data diambil
    return () => {
      sessionStorage.removeItem("article_to_edit");
    };
  }, [setActivePage]);

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
    if (
      !article.title ||
      !article.publish_date ||
      !article.content ||
      article.content === "<p><br></p>"
    ) {
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

  if (!article) return <div>Loading article...</div>;

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
