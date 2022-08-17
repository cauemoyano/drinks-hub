import { useContext, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import TextInput from "../../../../Components/Form/TextInput/TextInput";
import { AppContext, AppContextType } from "../../../../Context/context";
import { replaceSpaceByUnderline } from "../../../../Utils/Functions/string.functions";
import StatefulLink from "../../../../Utils/StatefulLink";
import LinksWrapper from "./LinksWrapper";

const Sidebar = ({
  type,
  title,
  handleClose = () => {},
}: {
  type: string | null;
  title: string | null;
  handleClose?: { (): void };
}) => {
  const { state } = useContext(AppContext) || ({} as AppContextType);
  const { categories, ingredients } = state || {};
  const navigate = useNavigate();
  const location = useLocation();

  const searchSubmit = (input: string) => {
    navigate(`/list?type=name&name=${replaceSpaceByUnderline(input)}`, {
      state: { prevPath: location.pathname },
    });
    if (handleClose) {
      handleClose();
    }
  };

  const categoriesLinks = useMemo(() => {
    if (type !== "category") return categories.drinks;

    return categories.drinks.filter(
      (category) => category.strCategory !== title
    );
  }, [categories, title]);
  const ingredientsLinks = useMemo(() => {
    if (type !== "ingredient") return ingredients.drinks;

    return ingredients.drinks.filter(
      (category) => category.strIngredient1 !== title
    );
  }, [ingredients, title]);
  return (
    <>
      <h2 className="text-2xl text-neutral-dark font-headings font-semibold text-tertiary-200">
        Search
      </h2>
      <div className="mb-4 max-w-xs">
        <TextInput
          label={"Name"}
          handleSubmit={searchSubmit}
          id={`sidebar-text-input-${Math.floor(Math.random() * 100)}`}
          colors={{
            buttonTextColor: "text-gray-700",
            label: "text-gray-800",
            border: "border-neutral-dark",
          }}
        />
      </div>
      <div className="mb-4 flex flex-col">
        <h3 className="text-xl mb-2 font-headings font-semibold text-secondary-300">
          Category
        </h3>

        <LinksWrapper testid="category-links-wrapper">
          <>
            {categories &&
              categoriesLinks.map((category, i) => (
                <li
                  key={i}
                  className="text-gray-700 hover:text-gray-600 transition-all easy-in-out"
                  onClick={handleClose}
                >
                  <StatefulLink
                    to={`/list?type=category&name=${replaceSpaceByUnderline(
                      category.strCategory
                    )}`}
                  >
                    {category.strCategory}
                  </StatefulLink>
                </li>
              ))}
          </>
        </LinksWrapper>
      </div>
      <div className="mb-4 flex flex-col">
        <h3 className="text-xl text-gray-800 mb-2 font-headings font-semibold text-secondary-300">
          Ingredient
        </h3>
        <LinksWrapper testid="ingredient-links-wrapper">
          <>
            {ingredients &&
              ingredientsLinks.map((ingredient, i) => (
                <li
                  key={i}
                  className="text-gray-700 hover:text-gray-600 transition-all easy-in-out"
                  onClick={handleClose}
                >
                  <StatefulLink
                    to={`/list?type=ingredient&name=${replaceSpaceByUnderline(
                      ingredient.strIngredient1
                    )}`}
                  >
                    {ingredient.strIngredient1}
                  </StatefulLink>
                </li>
              ))}
          </>
        </LinksWrapper>
      </div>
    </>
  );
};

export default Sidebar;
