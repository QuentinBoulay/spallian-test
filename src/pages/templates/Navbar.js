import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <div className="logo">
        <Link to="/">Test Spallian</Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/people">People</Link>
        </li>
        <li>
          <Link to="/planets">Planet</Link>
        </li>
        <li>
          <Link to="/starships">Starship</Link>
        </li>
        <li>
          <Link to="/films">Films</Link>
        </li>
        <li>
          <Link to="/species">Species</Link>
        </li>
        <li>
          <Link to="/vehicles">Vehicles</Link>
        </li>
      </ul>
    </nav>
  );
}

// "films": "https://swapi.dev/api/films/",
// "species": "https://swapi.dev/api/species/",
// "vehicles": "https://swapi.dev/api/vehicles/",

export default Navbar;
