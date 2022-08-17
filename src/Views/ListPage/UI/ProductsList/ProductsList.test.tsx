import { render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import ProductsList from "./ProductsList";

describe("Drink list container", () => {
  test("should render a list of drinks given a category", async () => {
    render(
      <Router>
        <ProductsList type="name" title="marg" />
      </Router>
    );

    await waitFor(() => {
      expect(screen.queryByTestId("item-list-wrapper")).toBeInTheDocument();
      expect(
        screen.queryByText(/could not find any results/i)
      ).not.toBeInTheDocument();
    });
  });

  test("display the total amount of drinks found", async () => {
    render(
      <Router>
        <ProductsList type="name" title="marg" />
      </Router>
    );

    await waitFor(() => {
      const drinks = screen.queryAllByRole("listitem");
      expect(drinks.length).toBeGreaterThan(0);

      expect(screen.getByText(/results for/i)).toBeInTheDocument();
    });
  });
  test("display a message if no drinks were found", async () => {
    render(
      <Router>
        <ProductsList type="category" title="xyz" />
      </Router>
    );

    await waitFor(() => {
      expect(
        screen.queryByText(/could not find any results/i)
      ).toBeInTheDocument();
    });
  });
});
