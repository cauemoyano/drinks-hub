import React, { useEffect, useRef, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "../../../../../Views/ListPage/UI/Sidebar/Sidebar";
import SearchButton from "../../../../Buttons/SearchButton";

const Menu = () => {
  const [searchParams] = useSearchParams();
  const [show, setShow] = useState(false);

  const title = searchParams.get("name");
  const type = searchParams.get("type");
  return (
    <nav
      className={`sm:hidden flex transition-all bg-primary-100 ${
        show ? "max-h-[200rem] min-h-[100vh]" : "max-h-0"
      }`}
      aria-label="main navigation"
    >
      <div className="absolute top-2 right-2">
        <SearchButton
          handleClick={() => setShow((show) => !show)}
          textColor="text-tertiary-200"
          icon={show ? faXmark : null}
          ariaExpanded={show}
        />
      </div>
      <div className={`${show ? "block" : "hidden"} w-full p-4`}>
        <Sidebar type={type} title={title} handleClose={() => setShow(false)} />
      </div>
    </nav>
  );
};

export default Menu;
