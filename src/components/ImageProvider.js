// import React, { useState, createContext } from "react";

// export const ImageContext = createContext();

// const ImageProvider = (props) => {
//   const [images, setImages] = useState([]);

//   return (
//     <ImageContext.Provider value={[images, setImages]}>
//       {props.children}
//     </ImageContext.Provider>
//   );
// };

// export default ImageProvider;

import React, { createContext, useState } from "react";
export const ImageContext = createContext();
const ImageProvider = ({ children }) => {
  const [images, setImages] = useState([]);
  const context = {
    setImages,
    images,
  };
  return <ImageContext.Provider value={context}>{children}</ImageContext.Provider>;
};
export default ImageProvider;
