import React from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Home from "../Views/Home/Home";
import ListPage from "../Views/ListPage/ListPage";
import NotFound from "../Views/NotFound/NotFound";
import ProductPage from "../Views/ProductPage/ProductPage";

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <TransitionGroup className="flex-1 flex flex-col" component={null}>
      <CSSTransition
        key={location.key}
        classNames="fade"
        timeout={10000}
        unmountOnExit
      >
        <Routes location={location}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/list" element={<ListPage />}></Route>
          <Route path="/drink" element={<ProductPage />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default AnimatedRoutes;
