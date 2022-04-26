import React, { useEffect, useState } from "react";
import SortButton from "../../../../Components/Form/SortButton/SortButton";
import { DrinkType } from "../../../../Types/DrinkType";
import {
  sortDrinkListAscending,
  sortDrinkListDescending,
} from "../../../../Utils/Functions/array.functions";
import { replaceUnderlineBySpace } from "../../../../Utils/Functions/string.functions";

type Props = {
  length: number;
  type: string | null;
  title: string | null;
  data: DrinkType[];
  setDataSorted: (data: DrinkType[]) => void;
};

const ResultHeader = ({ length, type, title, data, setDataSorted }: Props) => {
  const [activeOption, setActiveoption] = useState(0);

  const options: string[] = ["A to Z", "Z to A"];

  useEffect(() => {
    if (activeOption === 0) {
      setDataSorted([...sortDrinkListAscending(data)]);
    }
    if (activeOption === 1) {
      setDataSorted([...sortDrinkListDescending(data)]);
    }
  }, [data, activeOption]);

  return (
    <div className="p-4 xs:flex border-b justify-between align-center relative z-20">
      <h3 className="mr-8 xs:text-lg text-gray-700 mb-2 xs:mb-0">
        {length} results for{" "}
        {`${type && type.charAt(0).toUpperCase() + type.slice(1)}: `}
        <span className="text-secondary-200 font-semibold">
          {title && replaceUnderlineBySpace(title)}
        </span>
      </h3>
      <SortButton
        options={options}
        activeOption={activeOption}
        setActiveoption={setActiveoption}
      />
    </div>
  );
};

export default ResultHeader;
