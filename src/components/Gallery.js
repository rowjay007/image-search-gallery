import { useContext } from "react";
import Card from "./Card";
import { ImageProp } from "./GalleryStyle";
import { ImageContext } from "./ImageProvider";

const Gallery = () => {
  const { images } = useContext(ImageContext);

  return (
    <ImageProp>
      {images.map((image) => {
        return <Card key={image.id} image={image} />;
      })}
    </ImageProp>
  );
};

export default Gallery;
