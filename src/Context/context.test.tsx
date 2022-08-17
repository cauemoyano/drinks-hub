import { fireEvent, render, screen } from "@testing-library/react";
import { useContext } from "react";
import { AppContext, AppContextType, AppProvider } from "./context";

const categoriesData = {
  drinks: [
    { strCategory: "Cocoa" },
    { strCategory: "Coffee" },
    { strCategory: "Banana" },
  ],
};

const TestComponent = () => {
  const { state, setCategories } = useContext(AppContext) as AppContextType;
  const { categories } = state;

  return (
    <div>
      <ul>
        {categories.drinks.map((drink, i) => (
          <li key={i}>{drink.strCategory}</li>
        ))}
      </ul>
      <button onClick={() => setCategories(categoriesData)}>Update</button>
    </div>
  );
};

describe("Context provider is accessible and editable", () => {
  test("Categories drinks is empty on first render", () => {
    render(
      <AppProvider>
        <TestComponent />
      </AppProvider>
    );

    const items = screen.queryAllByRole("listitem");

    expect(items.length).toBe(0);
  });
  test("Categories is set and context updates", () => {
    render(
      <AppProvider>
        <TestComponent />
      </AppProvider>
    );

    const button = screen.getByText("Update");
    fireEvent.click(button);

    const items = screen.queryAllByRole("listitem");

    expect(items.length).toBe(3);
  });
});
