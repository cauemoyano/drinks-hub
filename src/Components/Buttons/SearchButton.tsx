import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const SearchButton = ({
  handleClick,
  textColor,
}: {
  handleClick: () => void;
  textColor: string;
}) => {
  return (
    <button
      onClick={handleClick}
      type="button"
      aria-label="Search"
      className={`p-2 text-xl transition hover:scale-110 ${textColor}`}
      data-testid="search-button"
    >
      <FontAwesomeIcon icon={faMagnifyingGlass} />
    </button>
  );
};

export default SearchButton;
