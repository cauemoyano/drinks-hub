import { DrinkType } from "../../Types/DrinkType";

export const sortDrinkListAscending = (items: DrinkType[]) => {
  const sorted = items.sort((a, b) => {
    if (a.strDrink.localeCompare(b.strDrink, undefined, { numeric: true }) < 0)
      return -1;
    if (a.strDrink.localeCompare(b.strDrink, undefined, { numeric: true }) > 0)
      return 1;
    return 0;
  });

  return sorted;
};
export const sortDrinkListDescending = (items: DrinkType[]) => {
  const sorted = items.sort((a, b) => {
    if (a.strDrink.localeCompare(b.strDrink, undefined, { numeric: true }) > 0)
      return -1;
    if (a.strDrink.localeCompare(b.strDrink, undefined, { numeric: true }) < 0)
      return 1;
    return 0;
  });
  return sorted;
};

export const decreaseAndShuffle = (
  array: any[],
  maxItems: number,
  finalArray: any[] = []
): any[] => {
  if (finalArray.length === maxItems) return finalArray;

  const index = Math.floor(Math.random() * array.length);
  finalArray.push(array[index]);
  array.splice(index, 1);
  const newArr = decreaseAndShuffle(array, maxItems, finalArray);

  return newArr;
};
