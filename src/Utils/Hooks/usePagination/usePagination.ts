import { useEffect, useMemo, useState } from "react";
import { DrinkType } from "../../../Types/DrinkType";

type Props = {
  initialItems: DrinkType[];
  offset: number;
};

const usePagination = ({ initialItems, offset }: Props) => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState<DrinkType[][]>([]);
  const [pageData, setPageData] = useState<DrinkType[]>([]);
  const [items, setItems] = useState(initialItems);

  const pages = useMemo(() => {
    return data.length;
  }, [data]);

  useEffect(() => {
    if (!items || !items.length) return;

    const createTwoLevelArray = () => {
      const tempArray = [];
      for (let i = 0; i < items.length; i += offset) {
        tempArray.push(items.slice(i, i + offset));
      }
      return tempArray;
    };

    setData(createTwoLevelArray());
  }, [items, offset]);

  useEffect(() => {
    if (!data.length) return;
    setPageData(data[page - 1]);
  }, [page, data]);

  return { pageData, setPage, pages, setItems, page };
};

export default usePagination;
