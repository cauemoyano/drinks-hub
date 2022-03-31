import { useContext, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import NavBar from "../Components/Layouts/navigation/NavBar/NavBar";
import { AppContext, AppContextType } from "../Context/context";
import { useDataApi } from "../Utils/Hooks/useDataApi/useDataApi";
import Home from "../Views/Home/Home";
import ListPage from "../Views/ListPage/ListPage";

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
    console.log(categories, ingredients);
    if (categories) setCategories(categories);
    if (ingredients) setIngredients(ingredients);
  }, [ingredients, categories]);

  return (
    <div className="bg-neutral-light w-screen min-h-screen flex flex-col">
      <BrowserRouter>
        <NavBar />
        <main
          aria-labelledby="home-presentation"
          className="flex-1 flex flex-col"
        >
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/list" element={<ListPage />}></Route>
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
