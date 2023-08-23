import { NavLink, Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <div className="logo">
        <Link to="/">Test Spallian</Link>
      </div>
      <ul className="nav-links">
        <li>
          <NavLink to="/people" activeClassName="active">
            People
          </NavLink>
        </li>
        <li>
          <NavLink to="/planets" activeClassName="active">
            Planets
          </NavLink>
        </li>
        <li>
          <NavLink to="/starships" activeClassName="active">
            Starships
          </NavLink>
        </li>
        <li>
          <NavLink to="/films" activeClassName="active">
            Films
          </NavLink>
        </li>
        <li>
          <NavLink to="/species" activeClassName="active">
            Species
          </NavLink>
        </li>
        <li>
          <NavLink to="/vehicles" activeClassName="active">
            Vehicles
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
