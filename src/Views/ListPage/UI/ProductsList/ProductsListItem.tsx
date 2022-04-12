import React from "react";
import { Link } from "react-router-dom";

type Props = {
  img: string;
  name: string;
};

const ProductsListItem = ({ img, name }: Props) => {
  return (
    <li className="block relative after:content[''] after:w-full after:h-3/4 after:absolute after:z-10 after:bottom-0 after:left-0 after:bg-primary-100">
      <Link to="#">
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
