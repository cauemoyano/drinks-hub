import { ReactChild } from "react";
import SearchButton from "../../../../Components/Buttons/SearchButton";

const SearchInputWrapper = ({
  children,
  handleClick,
}: {
  children: ReactChild;
  handleClick: () => void;
}) => {
  return (
    <div className="px-2 py-4 flex items-end">
      {children}
      <SearchButton handleClick={handleClick} />
    </div>
  );
};

export default SearchInputWrapper;
