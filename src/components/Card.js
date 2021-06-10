import React, { useEffect, useState, useRef } from "react";
import { CardList } from "./CardStyled";

const Card = ({ image, urls, description }) => {
  const imageRef = useRef();
  const [span, setSpans] = useState(0);

  useEffect(() => {
    const ImageHandle = () => {
      const height = imageRef.current.clientHeight;
      const spans = Math.ceil(height / 10);
      setSpans(spans);
    };

    imageRef.current.addEventListener("load", ImageHandle);
  }, []);

  return (
    <div style={{ gridRow: `span ${span}` }}>
      <CardList
        ref={imageRef}
        src={image.urls.regular}
        alt={image.description}
        
      />
    </div>
  );
};

export default Card;

