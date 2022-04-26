import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import SearchWrapper from "./SearchWrapper";

const setup = () => {
  const utils = render(
    <BrowserRouter>
      <SearchWrapper />
    </BrowserRouter>
  );
  const tabs = screen.getAllByTestId("suggestion-item-list");

  return { tabs, ...utils, screen };
};

describe("search tabs functionality", () => {
  test("Inputs By Name is displayed when component is first rendered", async () => {
    setup();

    const input = screen.getByLabelText("Name");
    expect(input).toBeVisible();
  });
  test("Category tab selected", async () => {
    const { tabs } = setup();

    const tabByCategory = tabs.find((tab) => tab.textContent === "Category");
    if (tabByCategory) {
      fireEvent.click(tabByCategory);
    }

    let input = screen.getByLabelText("Enter a category");
    expect(input).toBeVisible();
  });
  test("By Ingredient tab selected", async () => {
    const { tabs } = setup();

    const tabByIngredient = tabs.find(
      (tab) => tab.textContent === "Ingredient"
    );
    if (tabByIngredient) {
      fireEvent.click(tabByIngredient);
    }

    let input = screen.getByLabelText("Enter an ingredient");
    expect(input).toBeVisible();
  });
});
