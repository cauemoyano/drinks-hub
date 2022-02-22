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
    <ul className="rounded bg-gray-100 overflow-auto max-h-36">
      {filteredSuggestions.map((suggestion, index) => {
        const className = `py-2 px-2 ${
          index === activeSuggestionIndex ? "bg-white font-bold" : "bg-gray-100"
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
