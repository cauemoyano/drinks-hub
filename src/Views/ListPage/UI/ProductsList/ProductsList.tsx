import React, { useEffect } from "react";
import { DrinkType } from "../../../../Types/DrinkType";
import { DRINKS_API_ROOT } from "../../../../Utils/constants";
import { useDataApi } from "../../../../Utils/Hooks/useDataApi/useDataApi";

const ProductsList = ({
  type,
  title,
}: {
  type: string | null;
  title: string | null;
}) => {
  const byName = `${DRINKS_API_ROOT}/search.php?s=${title}`;
  const byCategory = `${DRINKS_API_ROOT}/filter.php?c=${title}`;
  const byIngredient = `${DRINKS_API_ROOT}/filter.php?i=${title}`;

  const { data, callApi, fetched } = useDataApi(false);

  useEffect(() => {
    let url;

    switch (type) {
      case "name":
        url = byName;
        break;
      case "category":
        url = byCategory;
        break;
      case "ingredient":
        url = byIngredient;
        break;
      default:
        url = null;
    }

    if (!url) return;
    callApi(url);
  }, [type, title]);

  return (
    <section className="col-span-4">
      {((fetched && !data) || !data.drinks) && (
        <h2>We could not find any results for "{title}"</h2>
      )}
      {fetched && data && (
        <>
          {data.drinks && <h3>{data.drinks.length} items</h3>}
          <ul data-testid="item-list-wrapper">
            {data.drinks &&
              data.drinks.map((drink: DrinkType) => (
                <li key={drink.idDrink}>{drink.strDrink}</li>
              ))}
          </ul>
        </>
      )}
    </section>
  );
};

export default ProductsList;
