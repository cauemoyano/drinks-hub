import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const SearchButton = ({ handleClick }: { handleClick: () => void }) => {
  return (
    <button
      onClick={handleClick}
      type="button"
      aria-label="Search"
      className="p-2 text-xl text-tertiary-100 transition hover:scale-110"
    >
      <FontAwesomeIcon icon={faMagnifyingGlass} />
    </button>
  );
};

export default SearchButton;
