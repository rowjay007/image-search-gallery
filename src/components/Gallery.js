import Card from "./Card";
import "./Gallery.css";

const Gallery = ({ images }) => {
  return (
    <div className="image-list">
      {images.map((image) => {
        return <Card key={image.id} image={image} />;
      })}
    </div>
  );
};

export default Gallery;
