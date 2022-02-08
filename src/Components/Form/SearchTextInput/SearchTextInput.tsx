import React, { FormEvent, useState } from "react";

type SearchText = {
  label: string;
  handleSubmit: (value: string) => void;
};

const SearchTextInput = ({ label }: SearchText) => {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <label htmlFor="search-text-input">{label}</label>
      <input
        type="text"
        id="search-text-input"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchTextInput;
