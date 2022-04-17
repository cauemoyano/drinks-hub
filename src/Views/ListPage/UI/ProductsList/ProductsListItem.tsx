import React from "react";
import { Link, useLocation } from "react-router-dom";
import { LocationStateType } from "../../../../Types/LocationStateType";

type Props = {
  img: string;
  name: string;
  id: string;
};

const ProductsListItem = ({ img, name, id }: Props) => {
  const location = useLocation();

  const state = location.state as LocationStateType;

  return (
    <li className="block relative min-w-[160px] after:content[''] after:w-full after:h-3/4 after:absolute after:z-10 after:bottom-0 after:left-0 after:bg-primary-100">
      <Link
        to={`/drink?id=${id}`}
        state={{
          from: location.pathname,
          sequence: location.pathname === "/drink" ? state.sequence + 1 : 0,
        }}
      >
        <div className="flex flex-col px-3 h-full relative z-20">
          <img src={img} alt={name}></img>
          <div className="flex-1 flex items-center justify-center py-2">
            <h4 className="font-headings text-lg text-center font-semibold my-auto leading-none">
              {name}
            </h4>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default ProductsListItem;
