import { ReactChild } from "react";

const SearchInputWrapper = ({ children }: { children: ReactChild }) => {
  return <div className="px-2 py-2 xl:py-4">{children}</div>;
};

export default SearchInputWrapper;
