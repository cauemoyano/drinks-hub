import { useState } from "react";
import TextInput from "../../../../Components/Form/TextInput/TextInput";
import ListItem from "./Components/ListItem";
import SearchInputWrapper from "./SearchInputWrapper";

const SearchWrapper = () => {
  const [activeTab, setActiveTab] = useState("By Name");

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
              <ListItem
                text={item}
                key={index}
                active={activeTab === item ? true : false}
                handleClick={() => setActiveTab(item)}
              />
            ))}
          </ul>
        </nav>
      </header>
      <main>
        <SearchInputWrapper handleClick={() => {}}>
          <TextInput label={"Name"} />
        </SearchInputWrapper>
      </main>
    </div>
  );
};

export default SearchWrapper;
