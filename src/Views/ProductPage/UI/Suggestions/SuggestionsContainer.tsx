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
    <div className="col-span-1 xs:px-4 py-6 relative z-30">
      <h3 className="text-3xl xs:text-4xl font-headings font-semibold text-tertiary-200 mb-4">
        You might also like
      </h3>
      <Suggestions data={suggestions} />
    </div>
  );
};

export default SuggestionsContainer;
