import React, { useEffect, useState } from "react";
import { DrinkType } from "../../../../Types/DrinkType";
import { sortDrinkListAscending } from "../../../../Utils/Functions/array.functions";
import usePagination from "../../../../Utils/Hooks/usePagination/usePagination";
import Pagination from "../Pagination/Pagination";
import ProductsListItem from "./ProductsListItem";
import ResultHeader from "./ResultHeader";

type Props = {
  data: DrinkType[];
  offset: number;
  title: string | null;
  type: string | null;
};

const ResultContent = ({ data, offset, title, type }: Props) => {
  const [dataSorted, setDataSorted] = useState<DrinkType[]>([]);
  const { pageData, setPage, pages, setItems } = usePagination({
    initialItems: dataSorted,
    offset: offset,
  });

  useEffect(() => {
    setItems(dataSorted);
  }, [dataSorted]);

  return (
    <>
      {data && (
        <ResultHeader
          length={data.length}
          title={title}
          type={type}
          data={data}
          setDataSorted={setDataSorted}
        />
      )}
      <ul
        data-testid="item-list-wrapper"
        className="p-4 grid grid-cols-4 gap-4 relative z-10"
      >
        {pageData.map((drink: DrinkType) => (
          <ProductsListItem
            key={drink.idDrink}
            img={drink.strDrinkThumb}
            name={drink.strDrink}
          />
        ))}
      </ul>
      <Pagination pages={pages} setPage={setPage} />
    </>
  );
};

export default ResultContent;
