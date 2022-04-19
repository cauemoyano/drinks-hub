import React, { Dispatch, SetStateAction } from "react";

const Pagination = ({
  pages,
  setPage,
}: {
  pages: number;
  setPage: Dispatch<SetStateAction<number>>;
}) => {
  if (pages < 2) return null;
  return (
    <nav>
      <ul className="flex justify-center">
        {Array.from(Array(pages).keys()).map((i) => (
          <li key={i}>
            <button
              aria-label={`go to page ${i + 1}`}
              onClick={() => setPage(i)}
              className="bg-secondary-100 transition-all hover:bg-secondary-200 text-gray-900 px-4 text-lg mx-1"
            >
              {i + 1}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
