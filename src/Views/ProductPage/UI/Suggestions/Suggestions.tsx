import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

import { DrinkType } from "../../../../Types/DrinkType";
import useCarousel from "../../../../Utils/Hooks/useCarousel/useCarousel";
import ProductsListItem from "../../../ListPage/UI/ProductsList/ProductsListItem";

const Suggestions = ({ data }: { data: DrinkType[] }) => {
  const sliderRef = useRef(null);
  const { showBtnLeft, showBtnRight, slideRight, slideLeft } = useCarousel(
    sliderRef.current,
    10
  );

  return (
    <section aria-label="Carousel" className="flex">
      <button
        aria-label="Previous"
        onClick={slideLeft}
        className={`${
          showBtnLeft ? "visible" : "invisible"
        } text-2xl text-tertiary-100 pr-3 transition-all hover:text-tertiary-200`}
      >
        <FontAwesomeIcon icon={faAngleLeft} />
      </button>

      <div className="flex-1 overflow-x-scroll no-scrollbar" ref={sliderRef}>
        <ul className="flex gap-2 px-2 ">
          {data.map((drink: DrinkType) => (
            <ProductsListItem
              key={drink.idDrink}
              img={drink.strDrinkThumb}
              name={drink.strDrink}
              id={drink.idDrink}
              animated={false}
            />
          ))}
        </ul>
      </div>

      <button
        aria-label="Next"
        onClick={slideRight}
        className={`${
          showBtnRight ? "visible" : "invisible"
        } text-2xl text-tertiary-100 pl-3 transition-all hover:text-tertiary-200`}
      >
        <FontAwesomeIcon icon={faAngleRight} />
      </button>
    </section>
  );
};

export default Suggestions;
