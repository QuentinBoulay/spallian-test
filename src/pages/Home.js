import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import Navbar from "./templates/Navbar.js";
import Footer from "./templates/Footer.js";
import ThemeContext from "../context/ThemeContext";

function Home() {
  const [selectedOption, setSelectedOption] = useState("people");
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();
  const { setTheme } = useContext(ThemeContext);

  const handleSearch = () => {
    if (isNaN(searchValue)) {
      alert("Veuillez entrer un chiffre");
    } else {
      setTheme(selectedOption);
      navigate(selectedOption + "/" + searchValue);
    }
  };

  return (
    <>
      <Navbar />
      <div className="home-container">
        <h1>
          Bienvenue sur une restitution de l'API SWAPI, inspiré de l'Univers
          Star Wars.
        </h1>
        <h3>
          Vous pouvez accéder aux données, en choisissant un thème suivi d'un
          incrémental (1, 2, 3, 4...)
        </h3>
        <div className="form-container">
          <div className="select-container">
            <select
              className="select"
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}
            >
              <option value="people">People</option>
              <option value="planets">Planets</option>
              <option value="starships">Starships</option>
              <option value="films">Films</option>
              <option value="species">Species</option>
              <option value="vehicles">Vehicles</option>
            </select>
          </div>
          <input
            className="search-input"
            type="text"
            placeholder="Rechercher..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <div className="button-container">
            <button className="validate-button" onClick={handleSearch}>
              Valider
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
