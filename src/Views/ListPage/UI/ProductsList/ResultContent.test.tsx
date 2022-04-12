import { fireEvent, render, screen } from "@testing-library/react";
import {
  sortDrinkListAscending,
  sortDrinkListDescending,
} from "../../../../Utils/Functions/array.functions";
import { generateDrinkItems } from "../../../../Utils/Functions/general.functions";
import ResultContent from "./ResultContent";
import { BrowserRouter as Router } from "react-router-dom";

describe("sort fitems alphabetically", () => {
  test("should alphabetically sort items a to z", () => {
    const items = generateDrinkItems(10);
    render(
      <Router>
        <ResultContent data={items} offset={10} type="" title="" />
      </Router>
    );

    let wrapper = screen.getByTestId("item-list-wrapper");
    let listItems = wrapper.querySelectorAll("li");

    const ascSortedItems = sortDrinkListAscending(items);
    expect(listItems[0].textContent).toBe(ascSortedItems[0].strDrink);
    expect(listItems[listItems.length - 1].textContent).toBe(
      ascSortedItems[ascSortedItems.length - 1].strDrink
    );
  });
  test("should alphabetically sort items a to z", () => {
    const items = generateDrinkItems(10);
    render(
      <Router>
        <ResultContent data={items} offset={10} type="" title="" />
      </Router>
    );

    const sortButton = screen.getByRole("button", { name: /sort/i });

    fireEvent.click(sortButton);
    const descOption = screen.getByRole("option", { name: /z to a/i });
    fireEvent.click(descOption);

    const wrapper = screen.getByTestId("item-list-wrapper");
    const listItems = wrapper.querySelectorAll("li");

    const descSortedItems = sortDrinkListDescending(items);
    expect(listItems[0].textContent).toBe(descSortedItems[0].strDrink);
    expect(listItems[listItems.length - 1].textContent).toBe(
      descSortedItems[descSortedItems.length - 1].strDrink
    );
  });
});
