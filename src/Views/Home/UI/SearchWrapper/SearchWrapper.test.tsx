import { fireEvent, render, screen } from "@testing-library/react";

import SearchWrapper from "./SearchWrapper";

const setup = () => {
  const utils = render(<SearchWrapper />);
  const tabs = screen.getAllByRole("listitem");

  return { tabs, ...utils, screen };
};

describe("search tabs functionality", () => {
  test("Inputs By Name is display when component is first rendered", async () => {
    setup();

    const input = screen.getByLabelText("Name");
    expect(input).toBeVisible();
  });
  test("By Category tab selected", async () => {
    const { tabs } = setup();

    const tabByCategory = tabs.find((tab) => tab.textContent === "By Category");
    if (tabByCategory) {
      fireEvent.click(tabByCategory);
    }

    let input = screen.getByLabelText("Enter a category");
    expect(input).toBeVisible();
  });
  test("By Ingredient tab selected", async () => {
    const { tabs } = setup();

    const tabByIngredient = tabs.find(
      (tab) => tab.textContent === "By Ingredient"
    );
    if (tabByIngredient) {
      fireEvent.click(tabByIngredient);
    }

    let input = screen.getByLabelText("Enter an ingredient");
    expect(input).toBeVisible();
  });
});