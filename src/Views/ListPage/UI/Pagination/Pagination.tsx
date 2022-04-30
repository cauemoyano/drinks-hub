import React, { Dispatch, SetStateAction, useMemo } from "react";

const Pagination = ({
  pages,
  setPage,
  page,
}: {
  pages: number;
  setPage: Dispatch<SetStateAction<number>>;
  page: number;
}) => {
  const screenWidth = window.innerWidth - 32;
  const getButtonsToRender = useMemo(() => {
    const buttonWidth = 50; //pagination button width
    const isOverflowing = pages * buttonWidth > screenWidth;
    let array;
    if (isOverflowing) {
      array = Array.from(Array(5));
      const middleButton =
        page - 2 <= 1 ? 3 : page + 2 > pages ? pages - 2 : page;
      array[0] = 1;
      array[1] = middleButton - 1;
      array[2] = middleButton;
      array[3] = middleButton + 1;
      array[4] = pages;
    } else {
      array = Array.from(Array(pages));
      for (let i = 1; i <= pages; i++) {
        array[i - 1] = i;
      }
    }
    return array;
  }, [pages, page, screenWidth]);

  return (
    <nav>
      <ul className="flex justify-center">
        {getButtonsToRender.map((i, index) => (
          <li key={index}>
            <button
              aria-label={`go to page ${i}`}
              onClick={() => setPage(i)}
              className="bg-secondary-100 transition-all hover:bg-secondary-200 text-gray-900 px-4 text-lg mx-1"
            >
              {i}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
