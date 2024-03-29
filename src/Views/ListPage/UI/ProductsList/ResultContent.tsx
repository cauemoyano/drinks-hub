import { useEffect, useState } from "react";
import { DrinkType } from "../../../../Types/DrinkType";
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
  const { pageData, setPage, pages, setItems, page } = usePagination({
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
        className="p-4 grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 relative z-10"
      >
        {pageData.map((drink: DrinkType, i: number) => (
          <ProductsListItem
            key={drink.idDrink}
            img={drink.strDrinkThumb}
            name={drink.strDrink}
            id={drink.idDrink}
            index={i}
          />
        ))}
      </ul>
      {pages >= 2 && <Pagination pages={pages} page={page} setPage={setPage} />}
    </>
  );
};

export default ResultContent;
