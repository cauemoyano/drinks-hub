import React, { createContext, useState } from "react";

export type CategoryType = {
  drinks: { strCategory: string }[];
};

export type IngredientType = {
  drinks: { strIngredient1: string }[];
};

export type InitialStateType = {
  categories: CategoryType;
  ingredients: IngredientType;
};

export type AppContextType = {
  state: InitialStateType;
  setIngredients: (payload: IngredientType) => void;
  setCategories: (payload: CategoryType) => void;
};

const initialState = {
  categories: { drinks: [] } as CategoryType,
  ingredients: { drinks: [] } as IngredientType,
};

const AppContext = createContext<AppContextType | null>(null);

/* const mainReducer = (
  { categories, ingredients }: InitialStateType,
  action: CategoryAction | IngredientAction
) => ({
  categories: categoryReducer(categories, action),
  ingredients: ingredientReducer(ingredients, action),
}); */

const AppProvider: React.FC = ({ children }) => {
  const [state, setState] = useState(initialState);

  const setIngredients = (payload: IngredientType) => {
    setState((state) => ({ ...state, ingredients: payload }));
  };
  const setCategories = (payload: CategoryType) => {
    console.log(payload);
    setState((state) => ({ ...state, categories: payload }));
  };

  return (
    <AppContext.Provider value={{ state, setIngredients, setCategories }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
