import React, { useEffect, useMemo } from "react";
import { DRINKS_API_ROOT } from "../../../../Utils/constants";
import { decreaseAndShuffle } from "../../../../Utils/Functions/array.functions";
import { useDataApi } from "../../../../Utils/Hooks/useDataApi/useDataApi";
import Suggestions from "./Suggestions";

const SuggestionsContainer = ({
  category,
}: {
  category: string | undefined;
}) => {
  const url = `${DRINKS_API_ROOT}/filter.php?c=${category}`;
  const { data, callApi } = useDataApi(null);

  useEffect(() => {
    callApi(url);
  }, []);

  const suggestions = useMemo(() => {
    if (!data) return [];
    const { drinks } = data;
    if (drinks.length < 11) return drinks;
    return decreaseAndShuffle(drinks, 10);
  }, [data]);

  if (!data) return null;

  return (
    <div className="col-span-1 p-4">
      <h2 className="text-4xl font-semibold text-gray-700 mb-2">
        You might also like
      </h2>
      <Suggestions data={suggestions} />
    </div>
  );
};

export default SuggestionsContainer;
