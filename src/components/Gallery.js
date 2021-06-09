import Card from "./Card";
import { ImageProp } from "./GalleryStyle";

const Gallery = ({ images }) => {
  return (
    <ImageProp>
      {images.map((image) => {
        return <Card key={image.id} image={image} />;
      })}
    </ImageProp>
  );
};

export default Gallery;
