import React, { useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { DrinkType } from "../../Types/DrinkType";
import { DRINKS_API_ROOT } from "../../Utils/constants";
import { useDataApi } from "../../Utils/Hooks/useDataApi/useDataApi";
import DrinkMainContainer from "./UI/DrinkMainContainer";
import HowMakeContainer from "./UI/HowMakeContainer";

const ProductPage = () => {
  const [searchParams] = useSearchParams();

  const id = searchParams.get("id");
  const url = `${DRINKS_API_ROOT}/lookup.php?i=${id}`;

  const { data, callApi, fetched } = useDataApi(false);

  useEffect(() => {
    callApi(url);
  }, []);

  const { drinks } = data || {};
  const drink: DrinkType | null = drinks ? drinks[0] : null;
  return (
    <article className="container p-4 mx-auto max-w-6xl">
      {drink && (
        <>
          <div className="flex py-4">
            <Link to="#">back</Link>
          </div>
          <div className="grid grid-cols-2">
            <DrinkMainContainer drink={drink} />
            <div className="col-span-1 grid grid-cols-5">
              <div className="col-span-4 pr-8 flex items-end relative z-20 after:content[''] after:absolute after:bottom-0 after:left-1/2 after:h-[200rem] after:w-[200rem] after:-z-10 after:bg-secondary-100">
                <img src={drink.strDrinkThumb} alt={drink.strDrink} />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2">
            <HowMakeContainer instructions={drink.strInstructions} />
            <div className="col-span-1"></div>
          </div>
        </>
      )}
    </article>
  );
};

export default ProductPage;
