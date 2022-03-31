import React, { useState } from "react";
import SearchButton from "../../Buttons/SearchButton";

type Props = {
  label: string;
  handleSubmit: (query: string) => void;
};

const TextInput = ({ label, handleSubmit }: Props) => {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className="flex flex-col flex-1 relative pt-4 mt-3">
      <label
        htmlFor="text-input"
        className="absolute top-0 block duration-200 text-base text-gray-800"
      >
        {label}
      </label>
      <div className="flex">
        <input
          type="text"
          id="text-input"
          value={value}
          onChange={handleChange}
          className="w-full border-0 border-b-2 border-solid border-secondary-100 outline-none text-xl text-neutral-dark py-2 bg-transparent transition-colors duration-200 placeholder::text-transparent peer"
        />
        <SearchButton handleClick={() => handleSubmit(value)} />
      </div>
    </div>
  );
};

export default TextInput;
