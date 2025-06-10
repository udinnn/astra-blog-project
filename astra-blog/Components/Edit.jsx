"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { storageService } from "./services/localStorageService";
import Card from "./ui/Card";
import Input from "./ui/Input";
import Button from "./ui/Button";
import ImageUploader from "./ui/ImageUploader";
import ConfirmationModal from "./ui/ConfirmationModal";
import { ArrowLeft } from "lucide-react";

const Edit = ({ setActivePage }) => {
  const router = useRouter();
  const [article, setArticle] = useState(null);
  const [isSaveModalVisible, setSaveModalVisible] = useState(false);
  
  useEffect(() => {
    const articleToEdit = storageService.getItemToEdit();
    if (articleToEdit) {
      setArticle(articleToEdit);
    } else {
      toast.error("No article selected for editing.");
      setActivePage("list"); // Redirect back if no article
    }
  }, [setActivePage]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setArticle(prev => ({ ...prev, [name]: value }));
  };
  
  const handleImageChange = (imageUrl) => {
    setArticle(prev => ({ ...prev, imageReference: imageUrl }));
  };

  const confirmSave = () => {
    const articles = storageService.getItems("articles");
    const updatedArticles = articles.map((item) =>
      item.id === article.id ? article : item
    );
    
    if (storageService.saveItems("articles", updatedArticles)) {
      toast.success("Article saved successfully!");
      setActivePage("list");
    } else {
      toast.error("Failed to save article.");
    }
    
    setSaveModalVisible(false);
  };
  
  if (!article) {
    return <div>Loading article...</div>; // or a proper spinner
  }

  return (
    <>
      <Card>
        <div className="flex items-center gap-4 mb-6">
           <Button variant="secondary" onClick={() => setActivePage('list')} className="p-2 h-10 w-10 !rounded-full">
             <ArrowLeft size={20} />
           </Button>
           <h1 className="text-2xl font-bold text-gray-800">EDIT ARTICLE</h1>
        </div>
        
        <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Article ID</label>
              <Input type="text" value={article.id} readOnly className="bg-gray-100"/>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Article Image</label>
              <ImageUploader 
                onImageChange={handleImageChange} 
                initialPreview={article.imageReference} 
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
              <Input
                type="text"
                name="title"
                value={article.title}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
              <Input
                type="date"
                name="date"
                value={article.date}
                onChange={handleInputChange}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Content</label>
              <textarea
                name="content"
                rows="10"
                value={article.content}
                onChange={handleInputChange}
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
        </div>

        <div className="flex justify-end mt-8 gap-3">
           <Button variant="secondary" onClick={() => setActivePage('list')}>Cancel</Button>
           <Button variant="primary" onClick={() => setSaveModalVisible(true)}>Save Changes</Button>
        </div>
      </Card>
      
      <ConfirmationModal
        isOpen={isSaveModalVisible}
        onClose={() => setSaveModalVisible(false)}
        onConfirm={confirmSave}
        title="Confirm Save"
      >
        Are you sure you want to save the changes to this article?
      </ConfirmationModal>
    </>
  );
};

export default Edit;