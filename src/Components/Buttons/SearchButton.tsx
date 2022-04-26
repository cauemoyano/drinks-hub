import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";

const SearchButton = ({
  handleClick,
  textColor,
  icon = null,
  ariaExpanded = null,
  dataTestId = "",
}: {
  handleClick: () => void;
  textColor: string;
  icon?: IconDefinition | null;
  ariaExpanded?: boolean | null;
  dataTestId?: string | null;
}) => {
  return (
    <button
      onClick={handleClick}
      type="button"
      aria-label="Search"
      className={`p-2 text-xl transition hover:scale-110 ${textColor}`}
      data-testid={dataTestId}
      aria-expanded={ariaExpanded || false}
    >
      <FontAwesomeIcon icon={icon || faMagnifyingGlass} />
    </button>
  );
};

export default SearchButton;
