import Card from "./Card";
import styled from "styled-components";

const ImageProp = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 0 10px;
  grid-auto-rows: 10px;
`;

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
