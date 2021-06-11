import { useContext } from "react";
import SearchBar from "./SearchBar";
import "semantic-ui-css/semantic.min.css";
import Gallery from "./Gallery";
import api from "./api";
import { ImageContext } from "./ImageProvider";
require("dotenv").config();

function App() {
  const { setImages } = useContext(ImageContext);
  const onSearchSubmit = async (e) => {
    const res = await api.get("/search/photos", {
      params: { query: e },
    });
    setImages(res.data.results);
  };
  return (
    <div className="ui container" style={{ marginTop: "10px" }}>
      <SearchBar onSearchSubmit={onSearchSubmit} />
      <Gallery />
    </div>
  );
}

export default App;
