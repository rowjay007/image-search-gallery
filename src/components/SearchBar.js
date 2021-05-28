import React from "react";

import { useForm } from "react-hook-form";

const SearchBar = () => {
  const { register, handleSubmit } = useForm();
  //   const onSubmit = (data) => alert(JSON.stringify(data));
  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="field">
          <label> Image Search</label>
          {/* <input {...register("search image")} placeholder="search image" /> */}
 
          <input type="text" />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
