import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header className="border-b">
      <nav className="flex">
        <Link to="/" aria-label="Home" className="mx-auto">
          <img
            src="./drinks-hub-icon.svg"
            alt="Drinks Hub icon"
            role="anchor"
            className="p-3"
          />
        </Link>
      </nav>
    </header>
  );
};

export default NavBar;
