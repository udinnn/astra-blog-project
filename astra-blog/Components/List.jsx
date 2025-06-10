"use client";

import React, { useState, useEffect, useMemo } from "react";
import { toast } from "react-hot-toast";
import { storageService } from "./services/localStorageService";
import Card from "./ui/Card";
import Button from "./ui/Button";
import Input from "./ui/Input";
import ConfirmationModal from "./ui/ConfirmationModal";
import { MoreVertical, Edit, Trash2, FileText, Search } from "lucide-react";

const List = ({ setActivePage }) => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  
  // State for modal
  const [isDeleteModalVisible, setDeleteModalVisible] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);

  const loadArticles = () => {
    setIsLoading(true);
    const loadedArticles = storageService.getItems("articles");
    setArticles(loadedArticles);
    setIsLoading(false);
  };

  useEffect(() => {
    loadArticles();
    // Listen for storage changes from other components
    window.addEventListener('storage', loadArticles);
    return () => window.removeEventListener('storage', loadArticles);
  }, []);

  const filteredArticles = useMemo(() => {
    return articles
      .filter(article => 
        (filter === "all" || article.publishType === filter) &&
        (searchQuery.trim() === "" || 
         article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
         article.id.toLowerCase().includes(searchQuery.toLowerCase()))
      )
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  }, [articles, filter, searchQuery]);

  const handleEdit = (article) => {
    if(storageService.setItemToEdit(article)) {
        setActivePage("edit");
    } else {
        toast.error("Could not prepare article for editing.");
    }
  };
  
  const handleDeleteClick = (article) => {
    setSelectedArticle(article);
    setDeleteModalVisible(true);
  };
  
  const confirmDelete = () => {
    if (!selectedArticle) return;
    const updatedArticles = articles.filter(article => article.id !== selectedArticle.id);
    if(storageService.saveItems("articles", updatedArticles)) {
        toast.success("Article deleted successfully!");
        setArticles(updatedArticles);
    } else {
        toast.error("Could not delete article.");
    }
    setDeleteModalVisible(false);
    setSelectedArticle(null);
  };

  if (isLoading) {
    return <div>Loading articles...</div>;
  }

  return (
    <>
      <Card>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
          <h1 className="text-2xl font-bold text-gray-800">ARTICLE LIST</h1>
          <div className="flex flex-col md:flex-row gap-3 w-full md:w-auto">
            <select
              className="px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full md:w-auto"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value="all">All Types</option>
              <option value="chapter">Chapter</option>
              <option value="kolaboraksi">KolaborAksi</option>
            </select>
            <div className="relative w-full md:w-64">
                <Input
                    type="text"
                    placeholder="Search title or ID..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                />
                <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"/>
            </div>
          </div>
        </div>

        <p className="text-sm text-gray-500 mb-4">
          Showing {filteredArticles.length} of {articles.length} results.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3">Article ID</th>
                <th scope="col" className="px-6 py-3">Title</th>
                <th scope="col" className="px-6 py-3">Type</th>
                <th scope="col" className="px-6 py-3">Date</th>
                <th scope="col" className="px-6 py-3 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredArticles.length > 0 ? (
                filteredArticles.map(article => (
                  <tr key={article.id} className="bg-white border-b hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">{article.id}</td>
                    <td className="px-6 py-4">{article.title}</td>
                    <td className="px-6 py-4">
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${article.publishType === 'chapter' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'}`}>
                            {article.publishType}
                        </span>
                    </td>
                    <td className="px-6 py-4">{article.date}</td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex justify-center gap-2">
                          <button onClick={() => handleEdit(article)} className="p-2 text-gray-500 hover:text-blue-600 hover:bg-gray-100 rounded-full"><Edit size={16} /></button>
                          <button onClick={() => handleDeleteClick(article)} className="p-2 text-gray-500 hover:text-red-600 hover:bg-gray-100 rounded-full"><Trash2 size={16} /></button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center py-10">
                    <FileText size={40} className="mx-auto text-gray-300 mb-2"/>
                    <p className="font-semibold">No Articles Found</p>
                    <p className="text-gray-500">Try adjusting your filters or search.</p>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </Card>
      
      <ConfirmationModal
        isOpen={isDeleteModalVisible}
        onClose={() => setDeleteModalVisible(false)}
        onConfirm={confirmDelete}
        title="Confirm Deletion"
      >
        Are you sure you want to delete the article titled "<strong>{selectedArticle?.title}</strong>"? This action cannot be undone.
      </ConfirmationModal>
    </>
  );
};

export default List;