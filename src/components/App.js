import { useState } from "react";
import SearchBar from "./SearchBar";
import "semantic-ui-css/semantic.min.css";
import api from "../Data/api";
import Gallery from "./Gallery";

function App() {
  const [images, setImages] = useState([]);
  const onSearchSubmit = async (e) => {
    const response = await api.get("/search/photos", {
      params: { query: e },
    });
    setImages(response.data.results);
  };
  return (
    <div className="ui container" style={{ marginTop: "10px" }}>
      <SearchBar onSearchSubmit={onSearchSubmit} />
      <Gallery images={images} />
    </div>
  );
}

export default App;
