import { React, useState } from "react";

const SearchBar = ({ onSearchSubmit }) => {
  const [search, setSearch] = useState("");

  const onHandleSubmit = (e) => {
    e.preventDefault();
    onSearchSubmit(search);
  };
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={onHandleSubmit}>
        <div className="field">
          <label> Image Search</label>
          <input
            value={search}
            onChange={handleChange}
            type="text"
            placeholder="search image"
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
