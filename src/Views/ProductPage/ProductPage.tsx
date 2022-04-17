import React, { useEffect } from "react";
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

  const { data, callApi } = useDataApi(false);

  useEffect(() => {
    callApi(url);
  }, [id]);

  const locationState = location.state as LocationStateType;

  const { drinks } = data || {};
  const drink: DrinkType | null = drinks ? drinks[0] : null;
  return (
    <article className="container p-4 mx-auto max-w-6xl">
      <div className="flex py-4">
        <button
          className="ml-4 text-tertiary-100 text-xl"
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
      {drink ? (
        <>
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
            <SuggestionsContainer category={drink.strCategory} />
          </div>
        </>
      ) : (
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
