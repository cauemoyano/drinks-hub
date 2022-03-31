const ListItem = ({
  text,
  active,
  handleClick,
}: {
  text: string;
  active: boolean;
  handleClick: () => void;
}) => {
  return (
    <li
      className={`tab-item text-neutral-dark cursor-pointer py-2 relative ${
        active &&
        "after:content-[''] after:w-full after:h-1 after:absolute after:bottom-0 after:left-0 after:bg-secondary-100"
      }`}
      role="none"
    >
      <button
        role="menuitem"
        data-testid="suggestion-item-list"
        onClick={handleClick}
      >
        {text}
      </button>
    </li>
  );
};

export default ListItem;
