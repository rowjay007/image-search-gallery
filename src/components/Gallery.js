import React from "react";

const Gallery = ({ images }) => {
  const Images = images.map(({ description, id, urls }) => {
    return <img alt={description} key={id} src={urls.regular} />;
  });
  return <div>{Images}</div>;
};

export default Gallery;
