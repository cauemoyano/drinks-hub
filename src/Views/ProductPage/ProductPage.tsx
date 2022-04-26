import React, { useEffect, useLayoutEffect } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

import { DrinkType } from "../../Types/DrinkType";
import { DRINKS_API_ROOT } from "../../Utils/constants";
import { useDataApi } from "../../Utils/Hooks/useDataApi/useDataApi";
import DrinkMainContainer from "./UI/DrinkMainContainer";
import HowMakeContainer from "./UI/HowMakeContainer";
import SuggestionsContainer from "./UI/Suggestions/SuggestionsContainer";
import { LocationStateType } from "../../Types/LocationStateType";

const ProductPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();

  const id = searchParams.get("id");
  const url = `${DRINKS_API_ROOT}/lookup.php?i=${id}`;

  const { data, callApi, fetched } = useDataApi(false);

  useLayoutEffect(() => {
    callApi(url);
  }, [id]);

  const locationState = location.state as LocationStateType;

  const { drinks } = data || {};
  const drink: DrinkType | null = drinks ? drinks[0] : null;

  return (
    <article className="container px-4 sm:py-4 mx-auto max-w-6xl page">
      <div className="flex py-4">
        <button
          className="ml-4 text-tertiary-100 text-xl transition-all hover:text-tertiary-200"
          onClick={() => {
            if (drink) {
              navigate(-1 - locationState.sequence);
            } else {
              navigate("/");
            }
          }}
        >
          <FontAwesomeIcon icon={faAngleLeft} className="mr-2" />
          Back to Results
        </button>
      </div>

      {drink && (
        <>
          <h1 className="font-headings text-center text-3xl xs:text-4xl sm:text-5xl font-semibold text-secondary-200 mb-6 xs:mb-12">
            {drink.strDrink}
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2">
            <DrinkMainContainer drink={drink} />
            {drink.strDrinkThumb && (
              <div className="col-span-1 grid grid-cols-7 sm:grid-cols-5 order-first sm:order-last mb-6 sm:mb-0">
                <div className="col-start-2 col-span-5 sm:col-start-1 sm:col-span-4 pr-8 flex items-center">
                  <div className="relative z-20 after:content[''] after:absolute after:bottom-3 xs:after:bottom-6 after:left-3 xs:after:left-6 after:h-full after:w-full after:-z-10 after:bg-primary-200">
                    <img src={drink.strDrinkThumb} alt={drink.strDrink} />
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2">
            <HowMakeContainer instructions={drink.strInstructions} />
            <SuggestionsContainer category={drink.strCategory} />
          </div>
        </>
      )}
      {fetched && !drink && (
        <>
          <h1 className="font-headings text-3xl font-semibold text-secondary-200 mb-6">
            Sorry, no matching drink was found.
          </h1>
          <p className="text-gray-800 text-lg mb-4">
            Go back to our drinks page and try again.
          </p>
        </>
      )}
    </article>
  );
};

export default ProductPage;
