

import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <div className="logo"><Link to="/">Test Spallian</Link></div>
            <ul className="nav-links">
                <li>
                    <Link to="/people">People</Link>
                </li>
                <li>
                    <Link to="/planet">Planet</Link>
                </li>
                <li>
                    <Link to="/starship">Starship</Link>
                </li>
            </ul>
        </nav>

    );
}

export default Navbar;