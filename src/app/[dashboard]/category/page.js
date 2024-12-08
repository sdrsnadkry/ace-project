"use client";

import React, { useEffect, useState } from "react";

import axios from "axios";

const CategoryManager = () => {
  const [categories, setCategories] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentCategory, setCurrentCategory] = useState({});
  const [isEditMode, setIsEditMode] = useState(false);

  const handleFetchCategories = async () => {
    try {
      const response = await axios.get("https://tp.api.internal.webpoint.io/api/categories");

      setCategories(response?.data?.categories);
    } catch (error) {}
  };

  useEffect(() => {
    handleFetchCategories();
  }, []);

  const handleOpenModal = (category) => {
    if (category) {
      setCurrentCategory(category);
      setIsEditMode(true);
    } else {
      setCurrentCategory({});
      setIsEditMode(false);
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setCurrentCategory({});
  };

  const handleSaveCategory = async () => {
    try {
      if (isEditMode) {
        const response = await axios.put(
          "https://tp.api.internal.webpoint.io/api/categories/" + currentCategory?._id,
          currentCategory
        );
      } else {
        const response = await axios.post(
          "https://tp.api.internal.webpoint.io/api/categories",
          currentCategory
        );
      }
      handleFetchCategories();

      console.log(response);
    } catch (error) {}

    handleCloseModal();
  };

  const handleDeleteCategory = async (category) => {
    try {
      await axios.delete(
        "https://tp.api.internal.webpoint.io/api/categories/" + category._id
      );
      handleFetchCategories();
    } catch (error) {}
  };

  return (
    <div className="p-6">
      <h1 className="mb-4 text-2xl font-bold">Category Manager</h1>
      <button
        className="px-4 py-2 text-white bg-blue-500 rounded"
        onClick={() => handleOpenModal()}
      >
        Add Category
      </button>
      <div className="grid grid-cols-1 gap-4 mt-6 md:grid-cols-3">
        {categories.map((category) => (
          <div
            key={category._id}
            className="p-4 border rounded shadow hover:shadow-lg"
          >
            <img
              src={category.image}
              alt={category.name}
              className="object-cover w-full h-32 mb-4 rounded"
            />
            <h2 className="text-lg font-semibold">{category.name}</h2>
            <p className="text-gray-600">{category.description}</p>
            <div className="flex justify-between mt-4">
              <button
                className="px-3 py-1 text-white bg-yellow-500 rounded"
                onClick={() => handleOpenModal(category)}
              >
                Edit
              </button>
              <button
                className="px-3 py-1 text-white bg-red-500 rounded"
                onClick={() => handleDeleteCategory(category)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="fixed z-[9999] inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="p-6 bg-white rounded w-96">
            <h2 className="mb-4 text-xl font-semibold">
              {isEditMode ? "Edit Category" : "Add Category"}
            </h2>
            <div className="mb-4">
              <label className="block text-gray-700">Slug</label>
              <input
                type="text"
                className="w-full px-3 py-2 mt-1 border rounded"
                value={currentCategory.slug || ""}
                onChange={(e) =>
                  setCurrentCategory((prev) => ({
                    ...prev,
                    slug: e.target.value,
                  }))
                }
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                className="w-full px-3 py-2 mt-1 border rounded"
                value={currentCategory.name || ""}
                onChange={(e) =>
                  setCurrentCategory((prev) => ({
                    ...prev,
                    name: e.target.value,
                  }))
                }
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Description</label>
              <textarea
                className="w-full px-3 py-2 mt-1 border rounded"
                value={currentCategory.description || ""}
                onChange={(e) =>
                  setCurrentCategory((prev) => ({
                    ...prev,
                    description: e.target.value,
                  }))
                }
              ></textarea>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Image URL</label>
              <input
                type="text"
                className="w-full px-3 py-2 mt-1 border rounded"
                value={currentCategory.image || ""}
                onChange={(e) =>
                  setCurrentCategory((prev) => ({
                    ...prev,
                    image: e.target.value,
                  }))
                }
              />
            </div>
            <div className="flex justify-end">
              <button
                className="px-4 py-2 mr-2 text-white bg-gray-400 rounded"
                onClick={handleCloseModal}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 text-white bg-blue-500 rounded"
                onClick={handleSaveCategory}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryManager;
