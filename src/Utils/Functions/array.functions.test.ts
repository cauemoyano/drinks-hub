import {
  decreaseAndShuffle,
  sortDrinkListAscending,
  sortDrinkListDescending,
} from "./array.functions";
import { generateDrinkItems } from "./general.functions";

let items = generateDrinkItems(10);

describe("test sorting items list", () => {
  beforeEach(() => {
    items = items
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
  });
  test("sort drink list ascending", () => {
    items = sortDrinkListAscending(items);

    expect(items[0].idDrink).toBe("1");
  });
  test("sort drink list descending", () => {
    items = sortDrinkListDescending(items);

    expect(items[0].idDrink).toBe("10");
  });
});

test("test decreasing and sorting the size of an array", () => {
  const data = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l"];

  const res = decreaseAndShuffle(data, 6);

  expect(res.length).toEqual(6);

  const isArrayUnique = new Set(res).size === res.length;

  expect(isArrayUnique).toBeTruthy();
});
