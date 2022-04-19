import { useLayoutEffect, useRef } from "react";

const SuggestionsList = ({
  filteredSuggestions,
  activeSuggestionIndex,
  onClick,
}: {
  filteredSuggestions: string[];
  activeSuggestionIndex: number;
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
}) => {
  return filteredSuggestions.length ? (
    <ul
      className="rounded bg-primary-200 overflow-auto max-h-36 suggestions-autocomplete"
      role="presentation"
    >
      {filteredSuggestions.map((suggestion, index) => {
        const className = `py-2 px-2 cursor-pointer ${
          index === activeSuggestionIndex
            ? "bg-secondary-100 text-white font-bold"
            : "bg-primary-100 text-tertiary-100"
        }`;
        return (
          <li className={className} key={suggestion} onClick={onClick}>
            {suggestion}
          </li>
        );
      })}
    </ul>
  ) : (
    <div className="no-suggestions">
      <em>No suggestions, you're on your own!</em>
    </div>
  );
};

export default SuggestionsList;
