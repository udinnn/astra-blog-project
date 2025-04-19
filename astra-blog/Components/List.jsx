import Image from "next/image";
import React, { useState } from "react";

const List = ({setActivePage}) => {
  const [isModalVisible, setIsModalVisible] = useState(false); // State untuk mengontrol visibilitas modal
  const [selectedArticle, setSelectedArticle] = useState(null); // State untuk menyimpan artikel yang dipilih

  const handleActionClick = (articleId) => {
    setSelectedArticle(articleId); // Simpan ID artikel yang dipilih
    setIsModalVisible(true); // Tampilkan modal
  };

  const handleCloseModal = () => {
    setIsModalVisible(false); // Tutup modal
    setSelectedArticle(null); // Reset artikel yang dipilih
  };

  const handleDelete = () => {
    console.log(`Deleting article with ID: ${selectedArticle}`);
    handleCloseModal();
  };

  return (
    <div>
      <div className="flex flex-row justify-between items-center mb-4 w-auto">
        <h1 className="font-bold text-4xl">ARTICLE LIST</h1>
        <div className="flex flex-row justify-between items-center">
          <input
            type="text"
            placeholder="Search..."
            className="border border-gray-300 p-1 rounded-lg"
          />
          <button className="bg-blue-500 text-white p-1 rounded-lg ml-2">
            Search
          </button>
        </div>
      </div>

      {/* Header Row */}
      <div className="w-auto flex flex-row mt-10 mx-20 border-b-2 border-black p-2 text-center">
        <div className="w-full flex flex-row md:w-3/4">
          <label className="mx-2 md:w-1/4">Article ID</label>
          <label className="mx-2 md:w-3/4">Title</label>
        </div>
        <div className="w-full flex flex-row md:w-1/4">
          <label className="mx-2 md:w-3/4">Date</label>
          <label className="mx-2 md:w-1/4">Action</label>
        </div>
      </div>

      {/* Content Row */}
      <div className="w-auto flex flex-row mx-20 border-b-2 border-black-75 p-2 text-center">
        <div className="w-full flex flex-row md:w-3/4 items-center">
          <p className="mx-2 md:w-1/4 flex justify-center items-center">001</p>
          <p className="mx-2 md:w-3/4 flex justify-center items-center">
            Today's Article : Lorem Ipsum dolor sit amet!
          </p>
        </div>
        <div className="w-full flex flex-row md:w-1/4 items-center">
          <p className="mx-2 md:w-3/4 flex justify-center items-center">
            02/02/2025
          </p>
          <div
            className="mx-2 md:w-1/4 flex justify-center items-center cursor-pointer"
            onClick={() => handleActionClick("001")} // Klik gambar untuk membuka modal
          >
            <Image
              src="/assets/action.png"
              width={25}
              height={25}
              alt="action"
              className="w-auto h-auto"
            />
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-4 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">
              What would you like to do with this article?
            </h2>
            <div className="flex justify-between">
              <button
                className="bg-blue-500 text-white p-2 rounded-lg"
                onClick={() => setActivePage("edit")}
              >
                Edit Article
              </button>
              <button
                className="bg-red-500 text-white p-2 rounded-lg"
                onClick={handleDelete}
              >
                Delete Article
              </button>
            </div>
            <button
              className="mt-4 bg-gray-300 text-black p-2 rounded-lg w-full"
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