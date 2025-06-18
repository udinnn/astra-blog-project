"use client";

import React, { useState, useEffect, useMemo, useCallback } from "react";
import { toast } from "react-hot-toast";
import { createClient } from "@/utils/supabase/client";
import Card from "./ui/Card";
import Input from "./ui/Input";
import ConfirmationModal from "./ui/ConfirmationModal";
import { Edit, Trash2, FileText, Search } from "lucide-react";

// Helper function untuk menyimpan item yang akan diedit di sessionStorage
const setItemToEditInSession = (item) => {
  try {
    sessionStorage.setItem("article_to_edit", JSON.stringify(item));
    return true;
  } catch (error) {
    console.error("Error saving to sessionStorage", error);
    return false;
  }
};

const List = ({ setActivePage }) => {
  const supabase = createClient();
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  const [isDeleteModalVisible, setDeleteModalVisible] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);

  const loadArticles = useCallback(async () => {
    setIsLoading(true);
    let query = supabase
      .from("articles")
      .select("*")
      .order("created_at", { ascending: false });

    // Sesuaikan filter dengan nama tipe di database
    const typeFilter = filter === "kolaboraksi" ? "collaboration" : filter;
    if (filter !== "all") {
      query = query.eq("publish_type", typeFilter);
    }

    const { data, error } = await query;

    if (error) {
      toast.error(`Failed to load articles: ${error.message}`);
      setArticles([]);
    } else {
      setArticles(data || []);
    }
    setIsLoading(false);
  }, [supabase, filter]);

  useEffect(() => {
    loadArticles();
  }, [loadArticles]);

  useEffect(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth < 768);
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const filteredArticles = useMemo(() => {
    return articles.filter(
      (article) =>
        searchQuery.trim() === "" ||
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.id.toString().toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [articles, searchQuery]);

  const handleEdit = (article) => {
    if (setItemToEditInSession(article)) {
      setActivePage("edit");
    } else {
      toast.error("Could not prepare article for editing.");
    }
  };

  const handleDeleteClick = (article) => {
    setSelectedArticle(article);
    setDeleteModalVisible(true);
  };

  const confirmDelete = async () => {
    if (!selectedArticle) return;
    const { error } = await supabase
      .from("articles")
      .delete()
      .eq("id", selectedArticle.id);

    setDeleteModalVisible(false);
    setSelectedArticle(null);

    if (error) {
      toast.error(`Failed to delete: ${error.message}`);
    } else {
      toast.success("Article deleted successfully!");
      loadArticles(); // Muat ulang data setelah berhasil hapus
    }
  };

  return (
    <>
      <Card>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
          <h1 className="text-2xl font-bold text-gray-800">ARTICLE LIST</h1>
          <div className="flex flex-col md:flex-row gap-3 w-full md:w-auto">
            <select
              className="px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full md:w-auto"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}>
              <option value="all">All Types</option>
              <option value="chapter">Chapter</option>
              <option value="kolaboraksi">KolaborAksi</option>
            </select>
            <div className="relative w-full md:w-64">
              <Input
                type="text"
                placeholder="Search by title or ID..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
              <Search
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              />
            </div>
          </div>
        </div>

        <p className="text-sm text-gray-500 mb-4">
          Showing {filteredArticles.length} of {articles.length} total articles.
        </p>

        {!isMobile ? (
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    ID
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Title
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Type
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Target
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Date
                  </th>
                  <th scope="col" className="px-6 py-3 text-center">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {isLoading ? (
                  <tr>
                    <td colSpan="6" className="text-center py-10">
                      Loading...
                    </td>
                  </tr>
                ) : filteredArticles.length > 0 ? (
                  filteredArticles.map((article) => (
                    <tr
                      key={article.id}
                      className="bg-white border-b hover:bg-gray-50">
                      <td className="px-6 py-4 font-mono text-xs text-gray-900">
                        {article.id}
                      </td>
                      <td className="px-6 py-4 font-medium">{article.title}</td>
                      <td className="px-6 py-4">
                        <span
                          className={`px-2 py-1 text-xs font-medium rounded-full ${
                            article.publish_type === "chapter"
                              ? "bg-blue-100 text-blue-800"
                              : "bg-green-100 text-green-800"
                          }`}>
                          {article.publish_type}
                        </span>
                      </td>
                      <td className="px-6 py-4">{article.target_name}</td>
                      <td className="px-6 py-4">
                        {new Date(article.publish_date).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex justify-center gap-2">
                          <button
                            onClick={() => handleEdit(article)}
                            className="p-2 text-gray-500 hover:text-blue-600 hover:bg-gray-100 rounded-full">
                            <Edit size={16} />
                          </button>
                          <button
                            onClick={() => handleDeleteClick(article)}
                            className="p-2 text-gray-500 hover:text-red-600 hover:bg-gray-100 rounded-full">
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="text-center py-10">
                      <FileText
                        size={40}
                        className="mx-auto text-gray-300 mb-2"
                      />
                      <p className="font-semibold">No Articles Found</p>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredArticles.length > 0 ? (
              filteredArticles.map((article) => (
                <div
                  key={article.id}
                  className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex-1">
                      <p className="font-medium text-gray-900 text-sm mb-1">
                        {article.id}
                      </p>
                      <h3 className="font-semibold text-gray-800 text-base leading-tight">
                        {article.title}
                      </h3>
                    </div>
                    <div className="flex gap-1 ml-3">
                      <button
                        onClick={() => handleEdit(article)}
                        className="p-2 text-gray-500 hover:text-blue-600 hover:bg-gray-100 rounded-full">
                        <Edit size={16} />
                      </button>
                      <button
                        onClick={() => handleDeleteClick(article)}
                        className="p-2 text-gray-500 hover:text-red-600 hover:bg-gray-100 rounded-full">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span
                      className={`px-2 py-1 text-xs font-medium rounded-full ${
                        article.publish_type === "chapter"
                          ? "bg-blue-100 text-blue-800"
                          : "bg-green-100 text-green-800"
                      }`}>
                      {article.publish_type}
                    </span>
                    <span className="text-sm text-gray-500">
                      {new Date(article.publish_date).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-10">
                <FileText size={40} className="mx-auto text-gray-300 mb-2" />
                <p className="font-semibold">No Articles Found</p>
              </div>
            )}
          </div>
        )}
      </Card>
      <ConfirmationModal
        isOpen={isDeleteModalVisible}
        onClose={() => setDeleteModalVisible(false)}
        onConfirm={confirmDelete}
        title="Confirm Deletion">
        Are you sure you want to delete the article titled "
        <strong>{selectedArticle?.title}</strong>"?
      </ConfirmationModal>
    </>
  );
};

export default List;
