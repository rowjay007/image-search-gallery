import SearchBar from "./SearchBar";
import "semantic-ui-css/semantic.min.css";


function App() {
  const onSearchSubmit = (e) => {
    console.log(e)
  }
  return (
    <div className="ui container" style={{ marginTop: "10px" }}>
      <SearchBar onSearchSubmit={onSearchSubmit} />
    </div>
  );
}

export default App;
