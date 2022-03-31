import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header className="border-b" aria-label="site header">
      <nav className="flex" aria-label="main navigation">
        <Link to="/" aria-label="Home" className="mx-auto">
          <img
            src="./drinks-hub-icon.svg"
            alt="Drinks Hub icon"
            className="p-3"
          />
        </Link>
      </nav>
    </header>
  );
};

export default NavBar;
