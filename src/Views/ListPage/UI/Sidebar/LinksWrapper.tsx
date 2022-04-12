import React, { useState } from "react";
import ShowButton from "./ShowButton";

const LinksWrapper = ({
  children,
  testid,
}: {
  testid: string;
  children: React.ReactChild;
}) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <ul
        data-testid={testid}
        className={`overflow-hidden transition-all ${
          show ? "max-h-[200rem]" : "max-h-40"
        }`}
      >
        {children}
      </ul>
      <ShowButton show={show} handleClick={() => setShow(!show)}>
        {show ? "Show Less" : "Show More"}
      </ShowButton>
    </>
  );
};

export default LinksWrapper;
