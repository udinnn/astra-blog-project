// services/localStorageService.js
const getItems = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key) || "[]");
  } catch (error) {
    console.error(`Error loading items from localStorage with key "${key}":`, error);
    return [];
  }
};

const saveItems = (key, data) => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
    // Dispatch storage event to notify other components like List.js
    window.dispatchEvent(new Event("storage"));
    return true;
  } catch (error) {
    console.error(`Error saving items to localStorage with key "${key}":`, error);
    return false;
  }
};

const getItemById = (key, id) => {
  const items = getItems(key);
  return items.find(item => item.id === id);
};

const setItemToEdit = (item) => {
  try {
    localStorage.setItem("articleToEdit", JSON.stringify(item));
    return true;
  } catch (error) {
    console.error("Error storing article for edit:", error);
    return false;
  }
};

const getItemToEdit = () => {
  try {
    return JSON.parse(localStorage.getItem("articleToEdit"));
  } catch (error) {
    console.error("Error getting article to edit:", error);
    return null;
  }
};

export const storageService = {
  getItems,
  saveItems,
  getItemById,
  setItemToEdit,
  getItemToEdit,
};