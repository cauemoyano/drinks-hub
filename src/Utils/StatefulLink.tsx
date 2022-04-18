import React from "react";
import { Link, useLocation } from "react-router-dom";

type Props = {
  children?: React.ReactChild;
  to: string;
  className?: string;
  dataTestid?: string;
  state?: { prevPath: string; sequence?: number };
};

const StatefulLink = ({
  children,
  to,
  className,
  dataTestid,
  state,
}: Props) => {
  const location = useLocation();
  return (
    <Link
      to={to}
      state={state || { prevPath: location.pathname }}
      className={className}
      data-testid={dataTestid}
    >
      {children}
    </Link>
  );
};

export default StatefulLink;
