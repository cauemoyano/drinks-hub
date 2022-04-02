import { findByTestId, render, screen, waitFor } from "@testing-library/react";
import ProductsList from "./ProductsList";

describe("Drink list container", () => {
  test("should render a list of drinks given a category", async () => {
    render(<ProductsList type="name" title="marg" />);

    await waitFor(() => {
      expect(
        screen.queryByTestId("item-list-wrapper")
      ).not.toBeEmptyDOMElement();
      expect(
        screen.queryByText(/could not find any results/i)
      ).not.toBeInTheDocument();
    });
  });

  test("display the total amount of drinks found", async () => {
    render(<ProductsList type="name" title="marg" />);

    await waitFor(() => {
      const drinks = screen.queryAllByRole("listitem");
      expect(drinks.length).toBeGreaterThan(0);

      expect(screen.getByText(`${drinks.length} items`)).toBeInTheDocument();
    });
  });
  test("display a message if no drinks were found", async () => {
    render(<ProductsList type="category" title="xyz" />);

    await waitFor(() => {
      expect(
        screen.queryByText(/could not find any results/i)
      ).toBeInTheDocument();
    });
  });
});
