export const bookmarkData = {};
export const handleBookmarkChange = (itemId, isBookmarked) => {
  bookmarkData[itemId] = isBookmarked;
};

export const getBookmarkData = () => {
  try {
    const storedData = localStorage.getItem("bookmarkData");
    return storedData ? JSON.parse(storedData) : {};
  } catch (error) {
    console.error("Error while parsing data from Local Storage:", error);
    return {};
  }
};

export const saveBookmarkData = (data) => {
  localStorage.setItem("bookmarkData", JSON.stringify(data));
};
