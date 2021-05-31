import axios from "axios";
import SearchBar from "./SearchBar";
import "semantic-ui-css/semantic.min.css";
// require('dotenv').config()

// access key = ""

function App() {
  const onSearchSubmit = (e) => {
    axios.get("https://api.unsplash.com/search/photos", {
      params: { query: e },
      headers: {
        Authorization: `Client-ID ${process.env.REACT_APP_API_KEY}`,
      },
    });
    console.log(e);
  };
  return (
    <div className="ui container" style={{ marginTop: "10px" }}>
      <SearchBar onSearchSubmit={onSearchSubmit} />
    </div>
  );
}

export default App;
