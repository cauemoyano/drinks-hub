import React, { useContext, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import TextInput from "../../../../Components/Form/TextInput/TextInput";
import { AppContext, AppContextType } from "../../../../Context/context";
import { replaceSpaceByUnderline } from "../../../../Utils/Functions/string.functions";

const Sidebar = ({
  type,
  title,
}: {
  type: string | null;
  title: string | null;
}) => {
  const { state } = useContext(AppContext) || ({} as AppContextType);
  const { categories, ingredients } = state || {};
  const navigate = useNavigate();

  const searchSubmit = (input: string) => {
    navigate(`/list?type=name&name=${replaceSpaceByUnderline(input)}`);
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
    <aside className="col-span-1 p-4 relative z-10 before:content-[''] before:absolute before:top-0 before:bottom-0 before:right-0 before:h-full before:w-[50vw] before:bg-secondary-200 before:z-[-1]">
      <h2 className="text-2xl text-white">Search</h2>
      <div className="mb-4">
        <TextInput
          label={"Name"}
          handleSubmit={searchSubmit}
          colors={{
            buttonTextColor: "text-tertiary-100",
            label: "text-gray-200",
            border: "border-primary-100",
          }}
        />
      </div>
      <div className="mb-4">
        <h3 className="text-xl text-primary-100 mb-2">Category</h3>
        <ul data-testid="category-links-wrapper">
          {categories &&
            categoriesLinks.map((category, i) => (
              <li key={i} className="text-gray-50">
                <Link
                  to={`/list?type=category&name=${replaceSpaceByUnderline(
                    category.strCategory
                  )}`}
                >
                  {category.strCategory}
                </Link>
              </li>
            ))}
        </ul>
      </div>
      <div className="mb-4">
        <h3 className="text-xl text-primary-100 mb-2">Ingredient</h3>
        <ul data-testid="ingredient-links-wrapper">
          {ingredients &&
            ingredientsLinks.map((ingredient, i) => (
              <li key={i} className="text-gray-50">
                <Link
                  to={`/list?type=ingredient&name=${replaceSpaceByUnderline(
                    ingredient.strIngredient1
                  )}`}
                >
                  {ingredient.strIngredient1}
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
