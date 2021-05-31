import { useState } from "react";

import axios from "axios";
import SearchBar from "./SearchBar";
import "semantic-ui-css/semantic.min.css";

function App() {
  const [images, setImages] = useState([]);
  const onSearchSubmit = async (e) => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: e },
      headers: {
        Authorization: `Client-ID ${process.env.REACT_APP_API_KEY}`,
      },
    });
    setImages(response.data.results);
  };
  return (
    <div className="ui container" style={{ marginTop: "10px" }}>
      <SearchBar onSearchSubmit={onSearchSubmit} />
      Found: {images.length} images
    </div>
  );
}

export default App;
