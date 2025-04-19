"use client";

import React, { useState } from "react";

const Edit = () => {
  const [imagePreview, setImagePreview] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false); // State untuk modal
  const [modalType, setModalType] = useState(""); // State untuk menentukan jenis modal (Save/Cancel)

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImagePreview(imageUrl);
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
      console.log("Article saved!");
    } else if (modalType === "cancel") {
      console.log("Action canceled!");
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

        <div className="flex flex-col justify-start items-start mx-20 mt-10">
          <div className="flex flex-col mb-4">
            <label className="font-bold text-lg">Article ID</label>
            <input
              type="text"
              placeholder="Enter Title"
              className="border border-gray-300 p-1 rounded-lg"
            />
          </div>

          <div className="flex flex-col mb-4">
            <label className="text-lg font-bold">Add Image</label>
            <input
              type="file"
              accept="image/*"
              className="border border-gray-300 p-1 rounded-lg"
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
              placeholder="Enter Title"
              className="border border-gray-300 p-1 rounded-lg"
            />
          </div>

          <div className="flex flex-col mb-4 w-full">
            <label className="font-bold text-lg">Image Description</label>
            <input
              type="text"
              placeholder="Enter Image Description"
              className="border border-gray-300 p-1 rounded-lg"
            />
          </div>

          <div className="flex flex-col mb-4">
            <label className="font-bold text-lg">Date</label>
            <input
              type="date"
              placeholder="Enter Date"
              className="border border-gray-300 p-1 rounded-lg"
            />
          </div>

          <div className="flex flex-col mb-4 w-full">
            <label className="font-bold text-lg">Content</label>
            <textarea
              placeholder="Enter Content"
              className="border border-gray-300 p-1 rounded-lg resize-none overflow-y-auto"
              rows="10"
            ></textarea>
          </div>
        </div>

        <div className="flex flex-row justify-end items-end mb-4 mx-20">
          <button
            className="bg-blue-500 text-white p-2 rounded-lg mx-2"
            onClick={handleSave}
          >
            Save
          </button>
          <button
            className="bg-red-500 text-white p-2 rounded-lg"
            onClick={handleCancel}
          >
            Cancel
          </button>
        </div>

        {/* Modal */}
        {isModalVisible && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-4 rounded-lg shadow-lg w-96">
              <h2 className="text-xl font-bold mb-4">
                {modalType === "save"
                  ? "Are you sure you want to save this article?"
                  : "Your article will be deleted if you cancel the action."}
              </h2>
              <div className="flex justify-end">
                <button
                  className="bg-gray-300 text-black p-2 rounded-lg mx-2"
                  onClick={handleCloseModal}
                >
                  Close
                </button>
                <button
                  className={`${
                    modalType === "save"
                      ? "bg-blue-500 text-white"
                      : "bg-red-500 text-white"
                  } p-2 rounded-lg`}
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
