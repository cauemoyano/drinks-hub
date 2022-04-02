import { render, screen, waitFor } from "@testing-library/react";
import { useContext, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import {
  AppContext,
  AppContextType,
  AppProvider,
} from "../../../../Context/context";
import Sidebar from "./Sidebar";

const initialState = {
  categories: {
    drinks: [{ strCategory: "Cocktail" }, { strCategory: "Shake" }],
  },
  ingredients: {
    drinks: [{ strIngredient1: "Gin" }, { strIngredient1: "Brandy" }],
  },
};

const Container: React.FC = ({ children }) => {
  const { setCategories, setIngredients } = useContext(
    AppContext
  ) as AppContextType;

  useEffect(() => {
    setCategories(initialState.categories);
    setIngredients(initialState.ingredients);
  }, []);
  return <>{children}</>;
};

const setup = (props = { title: "", type: "" }) => {
  return render(
    <AppProvider>
      <Container>
        <Router>
          <Sidebar {...props} />
        </Router>
      </Container>
    </AppProvider>
  );
};

test("render links to ingredients and categories", async () => {
  setup();

  const categoriesWrapper = screen.getByTestId("category-links-wrapper");
  await waitFor(() => {
    expect(categoriesWrapper).not.toBeEmptyDOMElement();
  });

  const ingredientsWrapper = screen.getByTestId("ingredient-links-wrapper");
  await waitFor(() => expect(ingredientsWrapper).not.toBeEmptyDOMElement());
});

test("do not render links passed as props", async () => {
  const title = "Cocktail";
  setup({ type: "category", title: title });

  const categoriesWrapper = screen.getByTestId("category-links-wrapper");
  await waitFor(() => {
    expect(categoriesWrapper).not.toBeEmptyDOMElement();
  });
  await waitFor(() => {
    expect(screen.queryByText(title)).toBeNull();
  });
});
