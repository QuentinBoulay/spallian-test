import { useParams } from "react-router-dom";
import React, { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";
import { useQuery } from "react-query";
import Spinner from "../Spinner";
import imgDetail from '../../img/img_400x400.png';

function Detail() {
  const { userId } = useParams();
  const { theme } = useContext(ThemeContext);

  // Fetcher function
  const getFacts = async () => {
    const res = await fetch("https://swapi.dev/api/" + theme + "/" + userId);
    return res.json();
  };
  // Using the hook
  const { data, error, isLoading } = useQuery(
    ["data", theme, userId],
    getFacts
  );
  // Error and Loading states
  if (error) return <div>Request Failed</div>;
  if (isLoading)
    return (
      <div className="loader-container">
        <Spinner />
      </div>
    );
  // Show the response if everything is fine

  console.log(data);

  if (theme === "people") {
    return (
      <>
          <div class="detail-container">
            <div class="detail">
              <div class="detail-image">
                <img src={imgDetail} alt="" />
              </div>
              <div class="detail-description">
                <h3>{data.name}</h3>
                <ul>
                    <li>{data.height}</li>
                    <li>{data.mass}</li>
                    <li>{data.hair_color}</li>
                    <li>{data.skin_color}</li>
                    <li>{data.eye_color}</li>
                    <li>{data.birth_year}</li>
                    <li>{data.gender}</li>
                </ul>
              </div>
            </div>
        </div>
      </>
    );
  } else if (theme === "planets") {
    // "name": "Tatooine",
    // 	"rotation_period": "23",
    // 	"orbital_period": "304",
    // 	"diameter": "10465",
    // 	"climate": "arid",
    // 	"gravity": "1 standard",
    // 	"terrain": "desert",
    // 	"surface_water": "1",
    // 	"population": "200000",
    // 	"residents": [
    // 		"https://swapi.dev/api/people/1/",
    // 		"https://swapi.dev/api/people/2/",
    // 		"https://swapi.dev/api/people/4/",
    // 		"https://swapi.dev/api/people/6/",
    // 		"https://swapi.dev/api/people/7/",
    // 		"https://swapi.dev/api/people/8/",
    // 		"https://swapi.dev/api/people/9/",
    // 		"https://swapi.dev/api/people/11/",
    // 		"https://swapi.dev/api/people/43/",
    // 		"https://swapi.dev/api/people/62/"
    // 	],
    // 	"films": [
    // 		"https://swapi.dev/api/films/1/",
    // 		"https://swapi.dev/api/films/3/",
    // 		"https://swapi.dev/api/films/4/",
    // 		"https://swapi.dev/api/films/5/",
    // 		"https://swapi.dev/api/films/6/"
    // 	],

    return (
      <>
          <div class="detail-container">
            <div class="detail">
              <div class="detail-image">
                <img src="https://www.w3schools.com/howto/img_avatar.png" alt="" />
              </div>
              <div class="detail-description">
                <h3>{data.name}</h3>
                <ul>
                  <li>{data.rotation_period}</li>
                  <li>{data.orbital_period}</li>
                  <li>{data.diameter}</li>
                  <li>{data.climate}</li>
                  <li>{data.gravity}</li>
                  <li>{data.terrain}</li>
                  <li>{data.surface_water}</li>
                  <li>{data.population}</li>
                </ul>
              </div>
            </div>
        </div>
      </>
    );
  } else if (theme === "starships") {
    // 		"name": "CR90 corvette",
    // "model": "CR90 corvette",
    // "manufacturer": "Corellian Engineering Corporation",
    // "cost_in_credits": "3500000",
    // "length": "150",
    // "max_atmosphering_speed": "950",
    // "crew": "30-165",
    // "passengers": "600",
    // "cargo_capacity": "3000000",
    // "consumables": "1 year",
    // "hyperdrive_rating": "2.0",
    // "MGLT": "60",
    // "starship_class": "corvette",
    // "pilots": [],
    // "films": [
    // 	"https://swapi.dev/api/films/1/",
    // 	"https://swapi.dev/api/films/3/",
    // 	"https://swapi.dev/api/films/6/"
    // ],
    return (
            <>
          <div class="detail-container">
            <div class="detail">
              <div class="detail-image">
                <img src="https://www.w3schools.com/howto/img_avatar.png" alt="" />
              </div>
              <div class="detail-description">
                <h3>{data.name}</h3>
                <ul>
                  <li>{data.model}</li>
                  <li>{data.manufacturer}</li>
                  <li>{data.cost_in_credits}</li>
                  <li>{data.length}</li>
                  <li>{data.max_atmosphering_speed}</li>
                  <li>{data.crew}</li>
                  <li>{data.passengers}</li>
                  <li>{data.cargo_capacity}</li>
                  <li>{data.consumables}</li>
                  <li>{data.hyperdrive_rating}</li>
                  <li>{data.MGLT}</li>
                  <li>{data.starship_class}</li>
                </ul>
              </div>
            </div>
        </div>
      </>
    );
  } else if (theme === "species") {
    return (
      <>
        <div className="card-content">
          <h3>{data.name}</h3>
          <ul>
            <li>{data.model}</li>
            <li>{data.manufacturer}</li>
            <li>{data.cost_in_credits}</li>
            <li>{data.length}</li>
            <li>{data.max_atmosphering_speed}</li>
            <li>{data.crew}</li>
            <li>{data.passengers}</li>
            <li>{data.cargo_capacity}</li>
            <li>{data.consumables}</li>
            <li>{data.hyperdrive_rating}</li>
            <li>{data.MGLT}</li>
            <li>{data.starship_class}</li>
          </ul>
        </div>
      </>
    );
  }
}

export default Detail;
