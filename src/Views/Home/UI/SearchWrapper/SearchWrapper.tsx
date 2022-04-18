import { useContext, useMemo, useState } from "react";
import AutoCompleteInput from "../../../../Components/Form/AutoCompleteInput/AutoCompleteInput";
import TextInput from "../../../../Components/Form/TextInput/TextInput";
import ListItem from "./Components/ListItem";
import SearchInputWrapper from "./SearchInputWrapper";
import { useLocation, useNavigate } from "react-router-dom";
import {
  AppContext,
  AppContextType,
  InitialStateType,
} from "../../../../Context/context";
import { replaceSpaceByUnderline } from "../../../../Utils/Functions/string.functions";

const SearchWrapper = () => {
  const [activeTab, setActiveTab] = useState<string>("name");
  const { state } = useContext(AppContext) || ({} as AppContextType);
  const { ingredients, categories } = state || ({} as InitialStateType);

  const navigate = useNavigate();
  const location = useLocation();

  const listData = ["name", "category", "ingredient"];

  const categoriesData = useMemo(() => {
    if (!categories) return [];
    let data: Array<string> = [];
    if (categories.drinks.length) {
      data =
        categories.drinks?.map(
          (category: { strCategory: string }) => category.strCategory
        ) || [];
    }
    return data;
  }, [categories]);

  const ingredientsData = useMemo(() => {
    if (!ingredients) return [];
    let data: Array<string> = [];
    if (ingredients.drinks.length) {
      data =
        ingredients.drinks?.map(
          (ingredient: { strIngredient1: string }) => ingredient.strIngredient1
        ) || [];
    }
    return data;
  }, [ingredients]);

  const searchSubmit = (query: string) => {
    navigate(`/list?type=${activeTab}&name=${replaceSpaceByUnderline(query)}`, {
      state: { prevPath: location.pathname },
    });
  };

  return (
    <section className="max-w-xs mx-auto flex-grow">
      <div>
        {/*  <h2 className="text-lg text-tertiary-100 font-medium tracking-wide">
          Search
        </h2> */}
        <nav aria-label="search tabs">
          <ul className="flex space-x-3" role="menu" aria-label="search tabs">
            {listData.map((item, index) => (
              <ListItem
                text={`By ${item.charAt(0).toUpperCase() + item.slice(1)}`}
                key={index}
                active={activeTab === item ? true : false}
                handleClick={() => setActiveTab(item)}
              />
            ))}
          </ul>
        </nav>
      </div>
      <div>
        <SearchInputWrapper>
          {activeTab === "name" ? (
            <TextInput label={"Name"} handleSubmit={searchSubmit} />
          ) : activeTab === "category" ? (
            <AutoCompleteInput
              label="Enter a category"
              data={categoriesData}
              handleSubmit={searchSubmit}
            />
          ) : (
            <AutoCompleteInput
              label="Enter an ingredient"
              data={ingredientsData}
              handleSubmit={searchSubmit}
            />
          )}
        </SearchInputWrapper>
      </div>
    </section>
  );
};

export default SearchWrapper;
