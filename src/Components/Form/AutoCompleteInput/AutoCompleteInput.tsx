import React, { useState } from "react";
import { handleSubmit } from "../../../Views/Home/UI/SearchWrapper/Logic/Handlers";
import SearchButton from "../../Buttons/SearchButton";
import SuggestionsList from "./SuggestionsList";

const items = [
  "Alabama",
  "Alaska",
  "American Samoa",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "District of Columbia",
  "Federated States of Micronesia",
  "Florida",
  "Georgia",
  "Guam",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Marshall Islands",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Northern Mariana Islands",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Palau",
  "Pennsylvania",
  "Puerto Rico",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virgin Island",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
];

const AutoCompleteInput = () => {
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [input, setInput] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const userInput = e.target.value;

    const linked = items.filter(
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
    setInput(itemClicked.innerText);
    setActiveSuggestionIndex(0);
    setShowSuggestions(false);
  };

  return (
    <div className="flex flex-col flex-1 relative pt-4 mt-3">
      <label className="absolute top-0 block duration-200 text-base text-gray-800">
        Enter a state
      </label>
      <div className="flex">
        <input
          onChange={onChange}
          value={input}
          className="w-full border-0 border-b-2 border-solid border-secondary-100 outline-none text-xl text-neutral-dark py-2 bg-transparent transition-colors duration-200 placeholder::text-transparent"
        />
        <SearchButton handleClick={handleSubmit} />
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
