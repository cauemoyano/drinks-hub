import React, { useState } from "react";
import { setTextRange } from "typescript";
import SearchButton from "../../Buttons/SearchButton";
import SuggestionsList from "./SuggestionsList";

type ColorsProps = {
  label: string;
  border: string;
  buttonTextColor: string;
};

type Props = {
  label: string;
  data: Array<string>;
  handleSubmit: (query: string) => void;
  colors?: ColorsProps;
};

const defaultColors = {
  buttonTextColor: "text-tertiary-100",
  label: "text-gray-800",
  border: "border-secondary-100",
};

const AutoCompleteInput = ({
  label,
  data,
  handleSubmit,
  colors = defaultColors,
}: Props) => {
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [input, setInput] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const userInput = e.target.value;

    const linked = data.filter(
      (suggestion) =>
        suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );

    setInput(e.target.value);
    setFilteredSuggestions(linked);
    setActiveSuggestionIndex(0);
    setShowSuggestions(true);
  };

  const onClick = (e: React.MouseEvent<HTMLElement>) => {
    setFilteredSuggestions([]);
    const itemClicked = e.target as HTMLElement;
    handleSubmit(itemClicked.innerText);
    /* setInput(itemClicked.innerText);
    setActiveSuggestionIndex(0);
    setShowSuggestions(false); */
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key === "Enter") {
      setActiveSuggestionIndex(0);
      setShowSuggestions(false);
      setInput(filteredSuggestions[activeSuggestionIndex]);
    } else if (e.key === "ArrowUp") {
      if (activeSuggestionIndex === 0) {
        return;
      }
      setActiveSuggestionIndex(
        (activeSuggestionIndex) => activeSuggestionIndex - 1
      );
    } else if (e.key === "ArrowDown") {
      if (activeSuggestionIndex - 1 === filteredSuggestions.length) {
        return;
      }
      setActiveSuggestionIndex(
        (activeSuggestionIndex) => activeSuggestionIndex + 1
      );
    }
  };

  return (
    <div className="flex flex-col flex-1 relative pt-4 mt-3">
      <label
        htmlFor="search-input"
        className={`absolute top-0 block duration-200 text-base ${colors.label}`}
      >
        {label}
      </label>
      <div className="flex">
        <input
          id="search-input"
          autoComplete="off"
          onChange={onChange}
          value={input}
          onKeyDown={onKeyDown}
          className={`w-full border-0 border-b-2 border-solid ${colors.border} outline-none text-xl text-neutral-dark py-2 bg-transparent transition-colors duration-200 placeholder::text-transparent`}
        />
        <SearchButton
          handleClick={() => handleSubmit(input)}
          textColor={colors.buttonTextColor}
        />
      </div>
      {showSuggestions && input && (
        <SuggestionsList
          onClick={onClick}
          filteredSuggestions={filteredSuggestions}
          activeSuggestionIndex={activeSuggestionIndex}
        />
      )}
    </div>
  );
};

export default AutoCompleteInput;
