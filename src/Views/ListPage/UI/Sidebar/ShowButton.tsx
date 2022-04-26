import React from "react";

type Props = {
  show: boolean;
  children: React.ReactChild;
  handleClick: () => void;
};

const ShowButton = ({ show, children, handleClick }: Props) => {
  return (
    <button
      className={`text-lg text-tertiary-100 hover:text-gray-700 transition-all easy-in-out relative py-2 ${
        !show &&
        "after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-1/2 after:z-10 after:-translate-y-[90%] after:bg-gradient-to-t after:from-primary-100"
      }`}
      type="button"
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default ShowButton;
