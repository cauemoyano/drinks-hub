import React from "react";
import ListItem from "./Components/ListItem";

const SearchWrapper = () => {
  const listData = ["By Name", "By Category", "By Ingredient"];
  return (
    <div className="max-w-xs mx-auto">
      <header>
        <h4 className="text-lg text-tertiary-100 font-medium tracking-wide">
          Search
        </h4>
        <nav>
          <ul className="flex space-x-3">
            {listData.map((item, index) => (
              <ListItem key={index} text={item} />
            ))}
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default SearchWrapper;
