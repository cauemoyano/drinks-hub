import React, { useMemo } from "react";
import { DrinkType } from "../../../Types/DrinkType";
import IngredientsContainer from "./IngredientsContainer/IngredientsContainer";

const DrinkMainContainer = ({ drink }: { drink: DrinkType }) => {
  const { strDrink } = drink;

  const MAX_NUMBER_INGREDIENTS = 15;

  const ingredients = useMemo(() => {
    const data = [];
    for (let i = 1; i <= MAX_NUMBER_INGREDIENTS; i++) {
      const ingredient = "strIngredient" + i;

      if (drink[ingredient as keyof DrinkType])
        data.push(drink[ingredient as keyof DrinkType]);
    }
    return data;
  }, [drink]);
  const measures = useMemo(() => {
    const data = [];
    for (let i = 1; i <= MAX_NUMBER_INGREDIENTS; i++) {
      const measure = "strMeasure" + i;

      if (drink[measure as keyof DrinkType])
        data.push(drink[measure as keyof DrinkType]);
    }
    return data;
  }, [drink]);

  return (
    <div className="col-span-1 pl-4 flex flex-col">
      <h1 className="font-headings text-5xl font-semibold text-secondary-200 mb-4">
        {strDrink}
      </h1>
      <h2 className="text-4xl font-semibold text-gray-700 mb-2">Ingredients</h2>
      <IngredientsContainer ingredients={ingredients} measures={measures} />
    </div>
  );
};

export default DrinkMainContainer;
