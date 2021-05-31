import { React, useState } from "react";

// import { useForm } from "react-hook-form";

const SearchBar = ({ onSearchSubmit }) => {
  // const {
  //   register,
  //   handleSubmit,

  //   formState: { errors },
  // } = useForm();
  // const onSubmit = (data) => console.log(data);
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
            // {...register("searchImage", {
            //   required: true,
            // })}
            type="text"
            placeholder="search image"
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
