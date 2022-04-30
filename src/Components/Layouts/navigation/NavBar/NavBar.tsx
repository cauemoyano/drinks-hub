import StatefulLink from "../../../../Utils/StatefulLink";
import Menu from "./UI/Menu";

const NavBar = () => {
  return (
    <header
      className="border-b sticky top-0 left-0 z-50 bg-neutral-light sm:relative flex flex-col sm:flex-row sm:justify-center"
      aria-label="site header"
    >
      <h1 aria-label="Home" className="w-max ">
        <StatefulLink to="/" className="mx-auto" dataTestid="home-link">
          <img
            src="./drinks-hub-icon.svg"
            alt="Drinks Hub icon"
            className="p-2 sm:p-3 max-w-[10rem] sm:max-w-full"
          />
        </StatefulLink>
      </h1>
      <Menu />
    </header>
  );
};

export default NavBar;
