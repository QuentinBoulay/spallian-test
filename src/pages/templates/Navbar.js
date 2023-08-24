import { NavLink, Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <div className="logo">
        <Link to="/">Test Spallian</Link>
      </div>
      <ul className="nav-links">
        <li>
          <NavLink
            to="/people"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            People
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/planets"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Planets
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/starships"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Starships
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/films"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Films
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/species"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Species
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/vehicles"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Vehicles
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
