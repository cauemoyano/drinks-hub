import React, { useEffect } from "react";
import { DRINKS_API_ROOT } from "../../../../Utils/constants";
import { useDataApi } from "../../../../Utils/Hooks/useDataApi/useDataApi";
import ResultContent from "./ResultContent";
import ResultHeader from "./ResultHeader";

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

  const { data, callApi, fetched, loading } = useDataApi(false);

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
    <section className="col-span-4 lg:pl-4 pb-4">
      {!loading && !data?.drinks && (
        <h2>We could not find any results for "{title}"</h2>
      )}
      {!loading && data && (
        <>
          <ResultContent
            title={title}
            type={type}
            data={data.drinks}
            offset={12}
          />
        </>
      )}
    </section>
  );
};

export default ProductsList;
