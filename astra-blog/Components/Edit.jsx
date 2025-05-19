"use client";

import React, { useState, useEffect } from "react";

const Edit = () => {
  const [article, setArticle] = useState(null); // State untuk menyimpan artikel yang akan diedit
  const [imagePreview, setImagePreview] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false); // State untuk modal
  const [modalType, setModalType] = useState(""); // State untuk menentukan jenis modal (Save/Cancel)

  useEffect(() => {
    // Ambil artikel dari localStorage
    const articleToEdit = JSON.parse(localStorage.getItem("articleToEdit"));
    if (articleToEdit) {
      setArticle(articleToEdit);
      setImagePreview(articleToEdit.imageReference); // Tampilkan gambar jika ada
    }
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImagePreview(imageUrl);
      setArticle({ ...article, imageReference: imageUrl }); // Perbarui referensi gambar di artikel
    }
  };

  const handleSave = () => {
    setModalType("save");
    setIsModalVisible(true); // Tampilkan modal untuk konfirmasi save
  };

  const handleCancel = () => {
    setModalType("cancel");
    setIsModalVisible(true); // Tampilkan modal untuk konfirmasi cancel
  };

  const handleConfirm = () => {
    if (modalType === "save") {
      // Simpan perubahan artikel ke localStorage
      const articles = JSON.parse(localStorage.getItem("articles") || "[]");
      const updatedArticles = articles.map((item) =>
        item.id === article.id ? article : item
      );
      localStorage.setItem("articles", JSON.stringify(updatedArticles));
      alert("Article saved successfully!");
    } else if (modalType === "cancel") {
      alert("Action canceled!");
    }
    setIsModalVisible(false); // Tutup modal setelah konfirmasi
  };

  const handleCloseModal = () => {
    setIsModalVisible(false); // Tutup modal tanpa melakukan tindakan
  };

  return (
    <div>
      <div>
        <div className="flex flex-row justify-between items-center mb-4 w-auto">
          <h1 className="font-bold text-4xl">EDIT ARTICLE</h1>
        </div>

        {article ? (
          <div className="flex flex-col justify-start items-start mx-20 mt-10">
            <div className="flex flex-col mb-4">
              <label className="font-bold text-lg">Article ID</label>
              <input
                type="text"
                className="text-sm border border-gray-300 p-1 rounded-lg"
                value={article.id}
                readOnly // ID tidak dapat diedit
              />
            </div>

            <div className="flex flex-col mb-4">
              <label className="text-lg font-bold">Add Image</label>
              <input
                type="file"
                accept="image/*"
                className="text-sm border border-gray-300 p-1 rounded-lg"
                onChange={handleImageChange}
              />
              {imagePreview && (
                <div className="mt-4">
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="w-62 h-64 object-cover rounded-lg my-2"
                  />
                </div>
              )}
            </div>

            <div className="flex flex-col mb-4 w-full">
              <label className="font-bold text-lg">Title</label>
              <input
                type="text"
                className="text-sm border border-gray-300 p-1 rounded-lg"
                value={article.title}
                onChange={(e) =>
                  setArticle({ ...article, title: e.target.value })
                }
              />
            </div>

            <div className="flex flex-col mb-4 w-full">
              <label className="font-bold text-lg">Image Description</label>
              <input
                type="text"
                className="text-sm border border-gray-300 p-1 rounded-lg"
                value={article.imageDescription || ""}
                onChange={(e) =>
                  setArticle({ ...article, imageDescription: e.target.value })
                }
              />
            </div>

            <div className="flex flex-col mb-4">
              <label className="font-bold text-lg">Date</label>
              <input
                type="date"
                className="text-sm border border-gray-300 p-1 rounded-lg"
                value={article.date}
                onChange={(e) =>
                  setArticle({ ...article, date: e.target.value })
                }
              />
            </div>

            <div className="flex flex-col mb-4 w-full">
              <label className="font-bold text-lg">Content</label>
              <textarea
                className="text-sm border border-gray-300 p-1 rounded-lg resize-none overflow-y-auto"
                rows="10"
                value={article.content}
                onChange={(e) =>
                  setArticle({ ...article, content: e.target.value })
                }
              ></textarea>
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-500">Loading article...</p>
        )}

        <div className="flex flex-row justify-end items-end mb-4 mx-20">
          <button
            className="text-sm bg-blue-500 text-white p-2 rounded-lg mx-2"
            onClick={handleSave}
          >
            Save
          </button>
          <button
            className="text-sm bg-red-500 text-white p-2 rounded-lg"
            onClick={handleCancel}
          >
            Cancel
          </button>
        </div>

        {/* Modal */}
        {isModalVisible && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-4 rounded-lg shadow-lg w-96">
              <h2 className="text-lg font-bold mb-4">
                {modalType === "save"
                  ? "Are you sure you want to save this edited article?"
                  : "Your article will be deleted if you cancel the action."}
              </h2>
              <div className="flex justify-end">
                <button
                  className="text-sm bg-gray-300 text-black p-2 rounded-lg mx-2"
                  onClick={handleCloseModal}
                >
                  Close
                </button>
                <button
                  className={`${
                    modalType === "save"
                      ? "bg-blue-500 text-white"
                      : "bg-red-500 text-white"
                  } text-sm p-2 rounded-lg`}
                  onClick={handleConfirm}
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Edit;