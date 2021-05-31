import React from "react";

import { useForm } from "react-hook-form";

const SearchBar = () => {
  const {
    register,
    handleSubmit,

    // formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  // const handleChange = (e) => {
  //   console.log(e.target.value);
  // };
  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={handleSubmit(onSubmit)}>
        <div className="field">
          <label> Image Search</label>
          <input
            // onChange={handleChange}
            {...register("searchImage", {
              required: true,
            })}
            type="text"
            placeholder="search image"
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
