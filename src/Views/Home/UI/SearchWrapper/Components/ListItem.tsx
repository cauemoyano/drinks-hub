import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ListItem = ({
  text,
  active,
  handleClick,
  icon,
}: {
  text: string;
  active: boolean;
  handleClick: () => void;
  icon: IconDefinition;
}) => {
  return (
    <li
      className={`tab-item cursor-pointer py-2 relative sm:text-lg ${
        active
          ? "text-opacity-100 text-secondary-200 after:content-[''] after:w-full after:h-1 after:absolute after:bottom-0 after:left-0 after:bg-secondary-100"
          : "text-gray-800 text-opacity-80"
      }`}
      role="none"
    >
      <FontAwesomeIcon icon={icon} className="mr-2" />
      <button
        role="menuitem"
        data-testid="suggestion-item-list"
        onClick={handleClick}
        className="font-medium"
      >
        {text}
      </button>
    </li>
  );
};

export default ListItem;
