import { useContext } from "react";
import SearchBar from "./SearchBar";
import "semantic-ui-css/semantic.min.css";
// import api from "./api";
import Gallery from "./Gallery";
import { ImageContext } from "./ImageProvider";
import axios from "axios";
require("dotenv").config();

function App() {
  const {setImages} = useContext(ImageContext);
  const onSearchSubmit = async (e) => {
    const res = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: e },
      headers: {
        Authorization: "Client-ID nweoVxPQdGa-w6qfhXvzt2CQh5SH71OzWpReN77Zb7I",
      },
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
