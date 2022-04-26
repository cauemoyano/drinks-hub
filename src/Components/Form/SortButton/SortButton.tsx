import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

type Props = {
  options: string[];
  activeOption: number;
  setActiveoption: (i: number) => void;
};

const SortButton = ({ options, activeOption, setActiveoption }: Props) => {
  const [showOptions, toggleShowOptions] = useState(false);

  return (
    <div className="flex justify-end">
      <div className="relative">
        <button
          type="button"
          aria-haspopup="listbox"
          aria-expanded={showOptions}
          onClick={() => toggleShowOptions(!showOptions)}
          className="bg-secondary-100 px-3 py-1"
        >
          Sort: {options[activeOption]} <FontAwesomeIcon icon={faAngleDown} />
        </button>
        <ul
          tabIndex={-1}
          role="listbox"
          aria-activedescendant={options[activeOption]}
          className={`${
            showOptions ? "block" : "hidden"
          } absolute bottom-0 left-0 translate-y-full bg-primary-200 w-full`}
        >
          {options.map((option, i) => (
            <li
              key={i}
              tabIndex={0}
              id={option}
              role="option"
              aria-selected={activeOption == i}
              onClick={() => {
                setActiveoption(i);
                toggleShowOptions(false);
              }}
              className="cursor-pointer hover:bg-primary-100 transition-all px-2 py-1"
            >
              {option}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SortButton;
