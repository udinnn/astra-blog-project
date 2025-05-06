"use client";

import React, { useState, useEffect } from "react";

const List = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [filter, setFilter] = useState("all");
  const [articles, setArticles] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredArticles, setFilteredArticles] = useState([]);

  // Load articles from localStorage on component mount
  useEffect(() => {
    const loadedArticles = JSON.parse(localStorage.getItem("articles") || "[]");
    setArticles(loadedArticles);
  }, []);

  // Apply filtering and search
  useEffect(() => {
    let result = articles;
    
    // Apply type filter
    if (filter !== "all") {
      result = result.filter(article => article.publishType === filter);
    }
    
    // Apply search filter if there's a query
    if (searchQuery.trim() !== "") {
      const query = searchQuery.toLowerCase();
      result = result.filter(article => 
        article.title.toLowerCase().includes(query) || 
        article.id.toLowerCase().includes(query)
      );
    }
    
    // Sort by date (newest first)
    result = result.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    
    setFilteredArticles(result);
  }, [articles, filter, searchQuery]);

  const handleActionClick = (article) => {
    setSelectedArticle(article);
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
    setSelectedArticle(null);
  };

  const handleDelete = () => {
    if (!selectedArticle) return;
    
    // Filter out the selected article
    const updatedArticles = articles.filter(article => article.id !== selectedArticle.id);
    
    // Update state and localStorage with error handling
    try {
      setArticles(updatedArticles);
      localStorage.setItem("articles", JSON.stringify(updatedArticles));
      
      handleCloseModal();
      alert("Article deleted successfully!");
    } catch (error) {
      console.error("Storage error:", error);
      alert("Could not delete article. Storage error occurred.");
    }
  };

  const handleEdit = () => {
    // For edit functionality, you could:
    // 1. Store the selected article in localStorage
    // 2. Redirect to a different page or show a modal with the edit form
    // 3. Update the article in localStorage when changes are submitted
    
    localStorage.setItem("articleToEdit", JSON.stringify(selectedArticle));
    alert("Edit functionality would open an edit form. Article stored for editing.");
    handleCloseModal();
  };

  const handleSearch = () => {
    // Search is already handled by the useEffect
  };

  return (
    <div>
      <div className="flex flex-row justify-between items-center mb-4 w-auto">
        <h1 className="font-bold text-4xl">ARTICLE LIST</h1>
        <div className="flex flex-row justify-between items-center">
          <select
            className="text-sm border border-gray-300 p-2 rounded-lg mr-2"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="all">All Articles</option>
            <option value="chapter">Chapter</option>
            <option value="kolaboraksi">KolaborAksi</option>
          </select>
          <input
            type="text"
            placeholder="Search..."
            className="text-sm border border-gray-300 p-1 rounded-lg"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
          />
          <button 
            className="text-sm bg-blue-500 text-white p-1 rounded-lg ml-2"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>

      {/* Header Row */}
      <div className="w-auto flex flex-row mt-10 mx-20 border-b-2 border-black p-2 text-center text-sm">
        <div className="w-full flex flex-row md:w-3/4">
          <label className="mx-2 md:w-1/4">Article ID</label>
          <label className="mx-2 md:w-3/4">Title</label>
        </div>
        <div className="w-full flex flex-row md:w-1/4">
          <label className="mx-2 md:w-3/4">Date</label>
          <label className="mx-2 md:w-1/4">Action</label>
        </div>
      </div>

      {/* Content Rows */}
      {filteredArticles.length > 0 ? (
        filteredArticles.map((article, index) => (
          <div
            key={index}
            className="w-auto flex flex-row mx-20 border-b-2 border-black-75 p-2 text-center text-sm"
          >
            <div className="w-full flex flex-row md:w-3/4 items-center">
              <p className="mx-2 md:w-1/4 flex justify-center items-center">
                {article.id}
              </p>
              <p className="mx-2 md:w-3/4 flex justify-center items-center">
                {article.title}
              </p>
            </div>
            <div className="w-full flex flex-row md:w-1/4 items-center">
              <p className="mx-2 md:w-3/4 flex justify-center items-center">
                {article.date}
              </p>
              <div
                className="mx-2 md:w-1/4 flex justify-center items-center cursor-pointer"
                onClick={() => handleActionClick(article)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-three-dots-vertical"
                  viewBox="0 0 16 16"
                >
                  <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                </svg>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="mx-20 py-4 text-center text-gray-500">
          No articles found.
        </div>
      )}

      {/* Modal */}
      {isModalVisible && selectedArticle && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-4 rounded-lg shadow-lg w-96">
            <h2 className="text-lg font-bold mb-4">
              What would you like to do with this article?
            </h2>
            <div className="flex justify-between">
              <button
                className="text-sm bg-blue-500 text-white p-2 rounded-lg"
                onClick={handleEdit}
              >
                Edit Article
              </button>
              <button
                className="text-sm bg-red-500 text-white p-2 rounded-lg"
                onClick={handleDelete}
              >
                Delete Article
              </button>
            </div>
            <button
              className="text-sm mt-4 bg-gray-300 text-black p-2 rounded-lg w-full"
              onClick={handleCloseModal}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default List;