// import Card from "./Card";
import "./Gallery.css";

const Gallery = ({ images }) => {
  return (
    <div className="image-list">
      {images.map(({ description, id, urls }) => {
        return <img key={id} src={urls.regular} alt={description} />;
      })}
    </div>
  );
};

export default Gallery;
