import React, { useLayoutEffect, useState } from "react";
import { encodeSpaceForUrl } from "../../../../Utils/Functions/string.functions";

type Props = {
  ingredients: (string | undefined)[];
  measures: (string | undefined)[];
};

const IngredientsContainer = ({ ingredients, measures }: Props) => {
  const [ingredientToShow, setIngredientToShow] = useState<string | undefined>(
    ingredients[0]
  );

  return (
    <div className="grid grid-cols-2 flex-1">
      <ul className="col-span-1 mb-4 flex flex-col justify-center">
        {ingredients.map((ingredient, i) => (
          <li
            className="text-lg text-gray-600 py-1 cursor-pointer"
            key={i}
            onMouseEnter={() => setIngredientToShow(ingredient)}
          >
            {measures[i]}
            {ingredient}
          </li>
        ))}
      </ul>
      <div className="col-span-1 flex justify-center items-center">
        <img
          data-testid="ingredient-thumbnail"
          src={`https://www.thecocktaildb.com/images/ingredients/${encodeSpaceForUrl(
            ingredientToShow
          )}-Medium.png`}
          onError={(e: any) => (e.target.src = "/images/img-placeholder.png")}
        ></img>
      </div>
    </div>
  );
};

export default IngredientsContainer;
