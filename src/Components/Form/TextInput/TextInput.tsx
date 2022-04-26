import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import SearchButton from "../../Buttons/SearchButton";

type ColorsProps = {
  label: string;
  border: string;
  buttonTextColor: string;
};

type Props = {
  label: string;
  handleSubmit: (query: string) => void;
  colors?: ColorsProps;
  buttonTestId?: string | null;
};

const defaultColors = {
  buttonTextColor: "text-tertiary-100",
  label: "text-gray-800",
  border: "border-secondary-100",
};

const TextInput = ({
  label,
  handleSubmit,
  colors = defaultColors,
  buttonTestId = null,
}: Props) => {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className="flex flex-col flex-1 relative pt-4 mt-3">
      <label
        htmlFor="text-input"
        className={`absolute top-0 block duration-200 text-base ${colors.label}`}
      >
        {label}
      </label>
      <div className="flex">
        <input
          type="text"
          id="text-input"
          value={value}
          onChange={handleChange}
          className={`w-full border-0 border-b-2 border-solid ${colors.border} outline-none text-xl text-neutral-dark py-2 bg-transparent transition-colors duration-200 placeholder::text-transparent peer`}
        />
        <CSSTransition classNames="slide-left-fade" timeout={300}>
          <SearchButton
            textColor={colors.buttonTextColor}
            handleClick={() => handleSubmit(value)}
            dataTestId={buttonTestId}
          />
        </CSSTransition>
      </div>
    </div>
  );
};

export default TextInput;
