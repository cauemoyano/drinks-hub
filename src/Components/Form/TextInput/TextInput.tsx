import React, { useState } from "react";

type Props = {
  label: string;
  handleSubmit: (value: string) => void;
};

const TextInput = ({ label }: Props) => {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <label htmlFor="text-input">{label}</label>
      <input
        type="text"
        id="text-input"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default TextInput;
