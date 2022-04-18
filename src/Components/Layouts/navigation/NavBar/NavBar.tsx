import { Link } from "react-router-dom";
import StatefulLink from "../../../../Utils/StatefulLink";

const NavBar = () => {
  return (
    <header className="border-b" aria-label="site header">
      <nav className="flex" aria-label="main navigation">
        <StatefulLink
          to="/"
          aria-label="Home"
          className="mx-auto"
          dataTestid="home-link"
        >
          <img
            src="./drinks-hub-icon.svg"
            alt="Drinks Hub icon"
            className="p-3"
          />
        </StatefulLink>
      </nav>
    </header>
  );
};

export default NavBar;
