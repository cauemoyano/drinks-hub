import { useEffect, useMemo, useState } from "react";
import AutoCompleteInput from "../../../../Components/Form/AutoCompleteInput/AutoCompleteInput";
import TextInput from "../../../../Components/Form/TextInput/TextInput";
import ListItem from "./Components/ListItem";
import SearchInputWrapper from "./SearchInputWrapper";
import { useDataApi } from "../../../../Utils/Hooks/useDataApi/useDataApi";

const SearchWrapper = () => {
  const [activeTab, setActiveTab] = useState("By Name");
  const {
    data: categories,
    callApi: callCategories,
    error: categoriesError,
  } = useDataApi([]);
  const {
    data: ingredients,
    callApi: callIngredients,
    error: ingredientsError,
  } = useDataApi([]);

  useEffect(() => {
    callCategories(
      "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list"
    );
    callIngredients(
      "https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list"
    );
  }, []);

  const listData = ["By Name", "By Category", "By Ingredient"];

  const categoriesData = useMemo(() => {
    let data: Array<string> = [];
    if (typeof categories === "object") {
      data = categories.drinks.map(
        (category: { strCategory: string }) => category.strCategory
      );
    }
    return data;
  }, [categories]);

  const ingredientsData = useMemo(() => {
    let data: Array<string> = [];
    if (typeof ingredients === "object") {
      data = ingredients.drinks.map(
        (ingredient: { strIngredient1: string }) => ingredient.strIngredient1
      );
    }
    return data;
  }, [ingredients]);

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
            <AutoCompleteInput label="Enter a category" data={categoriesData} />
          ) : (
            <AutoCompleteInput
              label="Enter an ingredient"
              data={ingredientsData}
            />
          )}
        </SearchInputWrapper>
      </main>
    </div>
  );
};

export default SearchWrapper;
