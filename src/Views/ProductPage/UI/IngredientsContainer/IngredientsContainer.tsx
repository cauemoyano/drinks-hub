import React, { useLayoutEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
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
    <div className="grid grid-cols-1 xs:grid-cols-2 flex-1 mb-4 xs:mb-0">
      <ul className="col-span-1 mb-4 flex flex-col justify-center">
        {ingredients.map((ingredient, i) => (
          <li
            className="xs:text-lg text-gray-700 font-medium py-1 cursor-pointer transition-all hover:text-tertiary-200"
            key={i}
            onMouseEnter={() => setIngredientToShow(ingredient)}
          >
            {measures[i]}
            <span className="ml-1">{ingredient}</span>
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
          alt={`illustration for ingredient ${ingredientToShow}`}
          className="max-w-[50vw]"
        ></img>
      </div>
    </div>
  );
};

export default IngredientsContainer;
