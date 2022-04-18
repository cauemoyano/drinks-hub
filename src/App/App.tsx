import { useContext, useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import NavBar from "../Components/Layouts/navigation/NavBar/NavBar";
import { AppContext, AppContextType } from "../Context/context";
import { useDataApi } from "../Utils/Hooks/useDataApi/useDataApi";
import Home from "../Views/Home/Home";
import ListPage from "../Views/ListPage/ListPage";
import NotFound from "../Views/NotFound/NotFound";
import ProductPage from "../Views/ProductPage/ProductPage";
import AnimatedRoutes from "./AnimatedRoutes";

function App() {
  const { setCategories, setIngredients } = useContext(
    AppContext
  ) as AppContextType;
  const {
    data: categories,
    callApi: callCategories,
    error: categoriesError,
  } = useDataApi(null);
  const {
    data: ingredients,
    callApi: callIngredients,
    error: ingredientsError,
  } = useDataApi(null);

  useEffect(() => {
    callCategories(
      "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list"
    );
    callIngredients(
      "https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list"
    );
  }, []);

  useEffect(() => {
    if (categories) setCategories(categories);
    if (ingredients) setIngredients(ingredients);
  }, [ingredients, categories]);

  return (
    <div className="bg-neutral-light min-h-screen flex flex-col">
      <NavBar />
      <main
        aria-labelledby="home-presentation"
        className="flex-1 flex flex-col overflow-hidden relative"
      >
        <AnimatedRoutes />
      </main>
    </div>
  );
}

export default App;
