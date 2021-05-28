import React from "react";

import { useForm } from "react-hook-form";

const SearchBar = () => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={handleSubmit(onSubmit)}>
        <div className="field">
          <label> Image Search</label>
          <input
            {...register("searchImage", { required: true })}
            type="text"
            placeholder="search image"
          />

          {errors.searchImage && <span>This field is required</span>}
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
