import { ReactChild } from "react";
import SearchButton from "../../../../Components/Buttons/SearchButton";

const SearchInputWrapper = ({ children }: { children: ReactChild }) => {
  return <div className="px-2 py-4">{children}</div>;
};

export default SearchInputWrapper;
