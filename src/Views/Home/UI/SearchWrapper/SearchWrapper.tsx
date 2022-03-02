import { useEffect, useState } from "react";
import axios from "axios";
import AutoCompleteInput from "../../../../Components/Form/AutoCompleteInput/AutoCompleteInput";
import TextInput from "../../../../Components/Form/TextInput/TextInput";
import ListItem from "./Components/ListItem";
import SearchInputWrapper from "./SearchInputWrapper";

const SearchWrapper = () => {
  const [activeTab, setActiveTab] = useState("By Name");
  const [categories, setCategories] = useState([]);
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list")
      .then((res) => setCategories(res.data.drinks))
      .catch((err) => console.log(err));
    axios
      .get("https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list")
      .then((res) => setIngredients(res.data.drinks))
      .catch((err) => console.log(err));
  }, []);

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
        <SearchInputWrapper>
          {activeTab === "By Name" ? (
            <TextInput label={"Name"} />
          ) : activeTab === "By Category" ? (
            <AutoCompleteInput
              label="Enter a category"
              data={categories.map(
                (category: { strCategory: string }) => category.strCategory
              )}
            />
          ) : (
            <AutoCompleteInput
              label="Enter an ingredient"
              data={ingredients.map(
                (ingredient: { strIngredient1: string }) =>
                  ingredient.strIngredient1
              )}
            />
          )}
        </SearchInputWrapper>
      </main>
    </div>
  );
};

export default SearchWrapper;
