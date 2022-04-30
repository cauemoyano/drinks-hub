import { useContext, useEffect } from "react";

import NavBar from "../Components/Layouts/navigation/NavBar/NavBar";
import { AppContext, AppContextType } from "../Context/context";
import { useDataApi } from "../Utils/Hooks/useDataApi/useDataApi";
import AnimatedRoutes from "./AnimatedRoutes";

function App() {
  const { setCategories, setIngredients } = useContext(
    AppContext
  ) as AppContextType;
  const { data: categories, callApi: callCategories } = useDataApi(null);
  const { data: ingredients, callApi: callIngredients } = useDataApi(null);

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
