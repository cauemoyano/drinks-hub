import React from "react";
import { Link, useLocation } from "react-router-dom";
import { LocationStateType } from "../../../../Types/LocationStateType";
import StatefulLink from "../../../../Utils/StatefulLink";

type Props = {
  img: string;
  name: string;
  id: string;
  index?: number;
  animated?: boolean;
};

const ProductsListItem = ({ img, name, id, index, animated = true }: Props) => {
  const location = useLocation();

  const state = location.state as LocationStateType;

  const duration = 300; // ms
  const delay = 100; // ms

  const animStr = (index: number | undefined) => {
    if (index === undefined) return;
    //considering 4 cols
    const COLS = 4;
    const getCol = (n: number) => n % COLS;
    const getRow = (n: number) => Math.floor(n / COLS);

    return `fadeIn ${duration}ms ease-out ${
      delay * (getCol(index) + getRow(index))
    }ms forwards`;
  };

  return (
    <li
      style={{ animation: animStr(index) }}
      className={`${
        animated && "opacity-0"
      } block relative min-w-[160px] after:content[''] after:w-full after:h-3/4 after:absolute after:z-10 after:bottom-0 after:left-0 after:bg-primary-100`}
    >
      <StatefulLink
        to={`/drink?id=${id}`}
        state={{
          prevPath: location.pathname,
          sequence: location.pathname === "/drink" ? state.sequence + 1 : 0,
        }}
      >
        <div className="group flex flex-col px-3 h-full relative z-20">
          <div className="overflow-hidden">
            <img
              loading="lazy"
              src={img}
              alt={`illustration image for ${name}`}
              className="group-hover:scale-110 transition-all"
            ></img>
          </div>
          <div className="flex-1 flex items-center justify-center py-2">
            <h4 className="font-headings group-hover:text-gray-800 transition-all text-lg text-center font-semibold my-auto leading-none">
              {name}
            </h4>
          </div>
        </div>
      </StatefulLink>
    </li>
  );
};

export default ProductsListItem;
