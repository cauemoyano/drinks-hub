import { fireEvent, render, screen } from "@testing-library/react";
import IngredientsContainer from "./IngredientsContainer";
const ingredientsData = ["rum", "vodka"];
test("On ingredient name hover display image", () => {
  render(<IngredientsContainer ingredients={ingredientsData} measures={[]} />);

  const vodkaItem = screen
    .getAllByRole("listitem")
    .find((listitem) => listitem.textContent === "vodka");

  if (vodkaItem) fireEvent.mouseEnter(vodkaItem);

  const thumbnail = screen.getByTestId(
    "ingredient-thumbnail"
  ) as HTMLImageElement;
  const url = "www.thecocktaildb.com/images/ingredients/vodka-Medium.png";

  expect(thumbnail.src).toContain(url);
});
