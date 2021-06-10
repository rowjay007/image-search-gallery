import React, { createContext, useState } from "react";
export const ImageContext = createContext();
const ImageProvider = ({ children }) => {
  const [images, setImages] = useState([]);
  const context = {
    setImages,
    images,
  };
  return (
    <ImageContext.Provider value={context}>{children}</ImageContext.Provider>
  );
};
export default ImageProvider;
