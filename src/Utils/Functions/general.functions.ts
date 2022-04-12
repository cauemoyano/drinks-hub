import { DrinkType } from "../../Types/DrinkType";

export const generateDrinkItems = (number: number) => {
  const array = [];
  for (let i = 0; i < number; i++) {
    const item: DrinkType = {
      idDrink: (i + 1).toString(),
      strDrink: `name-${i + 1}`,
      strDrinkThumb: `url-${i + 1}`,
    };

    array.push(item);
  }
  return array;
};
