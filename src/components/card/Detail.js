import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import Spinner from "../Spinner";
import imgDetail from "../../img/1200x400.png";
import { useNavigate } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const { theme } = useParams();
  const navigate = useNavigate();

  // Fetcher function
  const getFacts = async () => {
    const res = await fetch("https://swapi.dev/api/" + theme + "/" + id);
    return res.json();
  };

  // Using the hook
  const { data, error, isLoading } = useQuery(["data", theme, id], getFacts);
  // Error and Loading states
  if (error) return <div>Request Failed</div>;
  if (isLoading)
    return (
      <div className="loader-container">
        <Spinner />
      </div>
    );
  // Show the response if everything is fine

  function returnBack() {
    navigate(-1);
  }

  if (theme === "people" && data.name) {
    console.log(data);
    return (
      <>
        <div className="back-return">
          <svg
            onClick={returnBack}
            width="12"
            height="23"
            viewBox="0 0 12 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.00312428 11.5735C0.0176068 11.8063 0.109559 12.0275 0.264338 12.202L9.66802 22.6506C9.76008 22.7534 9.87153 22.8371 9.99599 22.8968C10.1204 22.9565 10.2555 22.9911 10.3933 22.9985C10.5311 23.0059 10.6691 22.9861 10.7992 22.9401C10.9294 22.8941 11.0492 22.8229 11.1517 22.7305C11.2543 22.6381 11.3376 22.5264 11.397 22.4018C11.4563 22.2772 11.4904 22.142 11.4974 22.0042C11.5044 21.8663 11.4842 21.7284 11.4378 21.5984C11.3914 21.4684 11.3198 21.3488 11.2271 21.2465L2.452 11.5L11.2271 1.75346C11.3198 1.65116 11.3914 1.5316 11.4378 1.40159C11.4842 1.27158 11.5044 1.13369 11.4974 0.995834C11.4904 0.857979 11.4563 0.722847 11.397 0.598209C11.3376 0.473574 11.2543 0.361862 11.1517 0.269493C11.0492 0.177122 10.9294 0.105921 10.7992 0.0599346C10.6691 0.0139484 10.5311 -0.00590524 10.3933 0.00151815C10.2555 0.00894345 10.1204 0.0435027 9.99599 0.103205C9.87153 0.162905 9.76008 0.246578 9.66803 0.349432L0.264339 10.798C0.170864 10.903 0.0995475 11.0258 0.0546637 11.1591C0.00977905 11.2924 -0.0077495 11.4333 0.00312428 11.5735Z"
              fill="black"
            />
          </svg>
        </div>
        <div className="detail-container">
          <div className="detail">
            <div className="detail-image">
              <img src={imgDetail} alt="" />
            </div>
            <div className="detail-description">
              <h3>{data.name}</h3>
              <ul>
                <li>
                  <span>Taille :</span> {data.height}
                </li>
                <li>
                  <span>Poids :</span> {data.mass}
                </li>
                <li>
                  <span>Couleur de cheveux :</span> {data.hair_color}
                </li>
                <li>
                  <span>Couleur de peau :</span> {data.skin_color}
                </li>
                <li>
                  <span>Couleur des yeux :</span> {data.eye_color}
                </li>
                <li>
                  <span>Date de naissance :</span> {data.birth_year}
                </li>
                <li>
                  <span>Genre :</span> {data.gender}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  } else if (theme === "planets" && data.name) {
    return (
      <>
        <div className="back-return">
          <svg
            onClick={returnBack}
            width="12"
            height="23"
            viewBox="0 0 12 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.00312428 11.5735C0.0176068 11.8063 0.109559 12.0275 0.264338 12.202L9.66802 22.6506C9.76008 22.7534 9.87153 22.8371 9.99599 22.8968C10.1204 22.9565 10.2555 22.9911 10.3933 22.9985C10.5311 23.0059 10.6691 22.9861 10.7992 22.9401C10.9294 22.8941 11.0492 22.8229 11.1517 22.7305C11.2543 22.6381 11.3376 22.5264 11.397 22.4018C11.4563 22.2772 11.4904 22.142 11.4974 22.0042C11.5044 21.8663 11.4842 21.7284 11.4378 21.5984C11.3914 21.4684 11.3198 21.3488 11.2271 21.2465L2.452 11.5L11.2271 1.75346C11.3198 1.65116 11.3914 1.5316 11.4378 1.40159C11.4842 1.27158 11.5044 1.13369 11.4974 0.995834C11.4904 0.857979 11.4563 0.722847 11.397 0.598209C11.3376 0.473574 11.2543 0.361862 11.1517 0.269493C11.0492 0.177122 10.9294 0.105921 10.7992 0.0599346C10.6691 0.0139484 10.5311 -0.00590524 10.3933 0.00151815C10.2555 0.00894345 10.1204 0.0435027 9.99599 0.103205C9.87153 0.162905 9.76008 0.246578 9.66803 0.349432L0.264339 10.798C0.170864 10.903 0.0995475 11.0258 0.0546637 11.1591C0.00977905 11.2924 -0.0077495 11.4333 0.00312428 11.5735Z"
              fill="black"
            />
          </svg>
        </div>
        <div className="detail-container">
          <div className="detail">
            <div className="detail-image">
              <img src={imgDetail} alt="" />
            </div>
            <div className="detail-description">
              <h3>{data.name}</h3>
              <ul>
                <li>
                  <span>Période de rotation :</span> {data.rotation_period}
                </li>
                <li>
                  <span>Période orbitale :</span> {data.orbital_period}
                </li>
                <li>
                  <span>Diamètre :</span> {data.diameter}
                </li>
                <li>
                  <span>Climat :</span> {data.climate}
                </li>
                <li>
                  <span>Gravité :</span> {data.gravity}
                </li>
                <li>
                  <span>Terrain :</span> {data.terrain}
                </li>
                <li>
                  <span>Surface d'eau :</span> {data.surface_water}
                </li>
                <li>
                  <span>Population :</span> {data.population}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  } else if (theme === "starships" && data.name) {
    return (
      <>
        <div className="back-return">
          <svg
            onClick={returnBack}
            width="12"
            height="23"
            viewBox="0 0 12 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.00312428 11.5735C0.0176068 11.8063 0.109559 12.0275 0.264338 12.202L9.66802 22.6506C9.76008 22.7534 9.87153 22.8371 9.99599 22.8968C10.1204 22.9565 10.2555 22.9911 10.3933 22.9985C10.5311 23.0059 10.6691 22.9861 10.7992 22.9401C10.9294 22.8941 11.0492 22.8229 11.1517 22.7305C11.2543 22.6381 11.3376 22.5264 11.397 22.4018C11.4563 22.2772 11.4904 22.142 11.4974 22.0042C11.5044 21.8663 11.4842 21.7284 11.4378 21.5984C11.3914 21.4684 11.3198 21.3488 11.2271 21.2465L2.452 11.5L11.2271 1.75346C11.3198 1.65116 11.3914 1.5316 11.4378 1.40159C11.4842 1.27158 11.5044 1.13369 11.4974 0.995834C11.4904 0.857979 11.4563 0.722847 11.397 0.598209C11.3376 0.473574 11.2543 0.361862 11.1517 0.269493C11.0492 0.177122 10.9294 0.105921 10.7992 0.0599346C10.6691 0.0139484 10.5311 -0.00590524 10.3933 0.00151815C10.2555 0.00894345 10.1204 0.0435027 9.99599 0.103205C9.87153 0.162905 9.76008 0.246578 9.66803 0.349432L0.264339 10.798C0.170864 10.903 0.0995475 11.0258 0.0546637 11.1591C0.00977905 11.2924 -0.0077495 11.4333 0.00312428 11.5735Z"
              fill="black"
            />
          </svg>
        </div>
        <div className="detail-container">
          <div className="detail">
            <div className="detail-image">
              <img src={imgDetail} alt="" />
            </div>
            <div className="detail-description">
              <h3>{data.name}</h3>
              <ul>
                <li>
                  <span>Modèle :</span> {data.model}
                </li>
                <li>
                  <span>Fabriquant :</span> {data.manufacturer}
                </li>
                <li>
                  <span>Coût :</span> {data.cost_in_credits}
                </li>
                <li>
                  <span>Taille :</span> {data.length}
                </li>
                <li>
                  <span>Vitesse atmosphérique maximale :</span>{" "}
                  {data.max_atmosphering_speed}
                </li>
                <li>
                  <span>Equipage :</span> {data.crew}
                </li>
                <li>
                  <span>Passagers :</span> {data.passengers}
                </li>
                <li>
                  <span>Capacité de chargement :</span> {data.cargo_capacity}
                </li>
                <li>
                  <span>Consommables :</span> {data.consumables}
                </li>
                <li>
                  <span>Note hyperdrive :</span> {data.hyperdrive_rating}
                </li>
                <li>
                  <span>MGLT :</span> {data.MGLT}
                </li>
                <li>
                  <span>Classe de vaisseau :</span> {data.starship_class}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  } else if (theme === "species" && data.name) {
    return (
      <>
        <div className="back-return">
          <svg
            onClick={returnBack}
            width="12"
            height="23"
            viewBox="0 0 12 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.00312428 11.5735C0.0176068 11.8063 0.109559 12.0275 0.264338 12.202L9.66802 22.6506C9.76008 22.7534 9.87153 22.8371 9.99599 22.8968C10.1204 22.9565 10.2555 22.9911 10.3933 22.9985C10.5311 23.0059 10.6691 22.9861 10.7992 22.9401C10.9294 22.8941 11.0492 22.8229 11.1517 22.7305C11.2543 22.6381 11.3376 22.5264 11.397 22.4018C11.4563 22.2772 11.4904 22.142 11.4974 22.0042C11.5044 21.8663 11.4842 21.7284 11.4378 21.5984C11.3914 21.4684 11.3198 21.3488 11.2271 21.2465L2.452 11.5L11.2271 1.75346C11.3198 1.65116 11.3914 1.5316 11.4378 1.40159C11.4842 1.27158 11.5044 1.13369 11.4974 0.995834C11.4904 0.857979 11.4563 0.722847 11.397 0.598209C11.3376 0.473574 11.2543 0.361862 11.1517 0.269493C11.0492 0.177122 10.9294 0.105921 10.7992 0.0599346C10.6691 0.0139484 10.5311 -0.00590524 10.3933 0.00151815C10.2555 0.00894345 10.1204 0.0435027 9.99599 0.103205C9.87153 0.162905 9.76008 0.246578 9.66803 0.349432L0.264339 10.798C0.170864 10.903 0.0995475 11.0258 0.0546637 11.1591C0.00977905 11.2924 -0.0077495 11.4333 0.00312428 11.5735Z"
              fill="black"
            />
          </svg>
        </div>
        <div className="detail-container">
          <div className="detail">
            <div className="detail-image">
              <img src={imgDetail} alt="" />
            </div>
            <div className="detail-description">
              <h3>{data.name}</h3>
              <ul>
                <li>
                  <span>Classification :</span> {data.classification}
                </li>
                <li>
                  <span>Désignation :</span> {data.designation}
                </li>
                <li>
                  <span>Taille moyenne :</span> {data.average_height}
                </li>
                <li>
                  <span>Couleur de peau :</span> {data.skin_colors}
                </li>
                <li>
                  <span>Couleur de cheveux :</span> {data.hair_colors}
                </li>
                <li>
                  <span>Couleur des yeux :</span> {data.eye_colors}
                </li>
                <li>
                  <span>Temps de vie moyen :</span> {data.average_lifespan}
                </li>
                <li>
                  <span>Monde :</span> {data.homeworld}
                </li>
                <li>
                  <span>Langue :</span> {data.language}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  } else if (theme === "films" && data.title) {
    return (
      <>
        <div className="back-return">
          <svg
            onClick={returnBack}
            width="12"
            height="23"
            viewBox="0 0 12 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.00312428 11.5735C0.0176068 11.8063 0.109559 12.0275 0.264338 12.202L9.66802 22.6506C9.76008 22.7534 9.87153 22.8371 9.99599 22.8968C10.1204 22.9565 10.2555 22.9911 10.3933 22.9985C10.5311 23.0059 10.6691 22.9861 10.7992 22.9401C10.9294 22.8941 11.0492 22.8229 11.1517 22.7305C11.2543 22.6381 11.3376 22.5264 11.397 22.4018C11.4563 22.2772 11.4904 22.142 11.4974 22.0042C11.5044 21.8663 11.4842 21.7284 11.4378 21.5984C11.3914 21.4684 11.3198 21.3488 11.2271 21.2465L2.452 11.5L11.2271 1.75346C11.3198 1.65116 11.3914 1.5316 11.4378 1.40159C11.4842 1.27158 11.5044 1.13369 11.4974 0.995834C11.4904 0.857979 11.4563 0.722847 11.397 0.598209C11.3376 0.473574 11.2543 0.361862 11.1517 0.269493C11.0492 0.177122 10.9294 0.105921 10.7992 0.0599346C10.6691 0.0139484 10.5311 -0.00590524 10.3933 0.00151815C10.2555 0.00894345 10.1204 0.0435027 9.99599 0.103205C9.87153 0.162905 9.76008 0.246578 9.66803 0.349432L0.264339 10.798C0.170864 10.903 0.0995475 11.0258 0.0546637 11.1591C0.00977905 11.2924 -0.0077495 11.4333 0.00312428 11.5735Z"
              fill="black"
            />
          </svg>
        </div>
        <div className="detail-container">
          <div className="detail">
            <div className="detail-image">
              <img src={imgDetail} alt="" />
            </div>
            <div className="detail-description">
              <h3>{data.title}</h3>
              <ul>
                <li>
                  <span>Episode :</span> {data.episode_id}
                </li>
                <li>
                  <span>Ouverture :</span> {data.opening_crawl}
                </li>
                <li>
                  <span>Directeur :</span> {data.director}
                </li>
                <li>
                  <span>Producteur :</span> {data.producer}
                </li>
                <li>
                  <span>Date de sortie :</span> {data.release_date}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  } else if (theme === "vehicles" && data.name) {
    return (
      <>
        <div className="back-return">
          <svg
            onClick={returnBack}
            width="12"
            height="23"
            viewBox="0 0 12 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.00312428 11.5735C0.0176068 11.8063 0.109559 12.0275 0.264338 12.202L9.66802 22.6506C9.76008 22.7534 9.87153 22.8371 9.99599 22.8968C10.1204 22.9565 10.2555 22.9911 10.3933 22.9985C10.5311 23.0059 10.6691 22.9861 10.7992 22.9401C10.9294 22.8941 11.0492 22.8229 11.1517 22.7305C11.2543 22.6381 11.3376 22.5264 11.397 22.4018C11.4563 22.2772 11.4904 22.142 11.4974 22.0042C11.5044 21.8663 11.4842 21.7284 11.4378 21.5984C11.3914 21.4684 11.3198 21.3488 11.2271 21.2465L2.452 11.5L11.2271 1.75346C11.3198 1.65116 11.3914 1.5316 11.4378 1.40159C11.4842 1.27158 11.5044 1.13369 11.4974 0.995834C11.4904 0.857979 11.4563 0.722847 11.397 0.598209C11.3376 0.473574 11.2543 0.361862 11.1517 0.269493C11.0492 0.177122 10.9294 0.105921 10.7992 0.0599346C10.6691 0.0139484 10.5311 -0.00590524 10.3933 0.00151815C10.2555 0.00894345 10.1204 0.0435027 9.99599 0.103205C9.87153 0.162905 9.76008 0.246578 9.66803 0.349432L0.264339 10.798C0.170864 10.903 0.0995475 11.0258 0.0546637 11.1591C0.00977905 11.2924 -0.0077495 11.4333 0.00312428 11.5735Z"
              fill="black"
            />
          </svg>
        </div>
        <div className="detail-container">
          <div className="detail">
            <div className="detail-image">
              <img src={imgDetail} alt="" />
            </div>
            <div className="detail-description">
              <h3>{data.name}</h3>
              <ul>
                <li>
                  <span>Modèle :</span> {data.model}
                </li>
                <li>
                  <span>Constructeur :</span> {data.manufacturer}
                </li>
                <li>
                  <span>Coût :</span> {data.cost_in_credits}
                </li>
                <li>
                  <span>Taille :</span> {data.length}
                </li>
                <li>
                  <span>Vitesse atmosphérique maximale :</span>{" "}
                  {data.max_atmosphering_speed}
                </li>
                <li>
                  <span>Equipage :</span> {data.crew}
                </li>
                <li>
                  <span>Passagers :</span> {data.passengers}
                </li>
                <li>
                  <span>Capacité de chargement :</span> {data.cargo_capacity}
                </li>
                <li>
                  <span>Consommables :</span> {data.consumables}
                </li>
                <li>
                  <span>Classe de véhicule :</span> {data.vehicle_class}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="back-return">
          <svg
            onClick={returnBack}
            width="12"
            height="23"
            viewBox="0 0 12 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.00312428 11.5735C0.0176068 11.8063 0.109559 12.0275 0.264338 12.202L9.66802 22.6506C9.76008 22.7534 9.87153 22.8371 9.99599 22.8968C10.1204 22.9565 10.2555 22.9911 10.3933 22.9985C10.5311 23.0059 10.6691 22.9861 10.7992 22.9401C10.9294 22.8941 11.0492 22.8229 11.1517 22.7305C11.2543 22.6381 11.3376 22.5264 11.397 22.4018C11.4563 22.2772 11.4904 22.142 11.4974 22.0042C11.5044 21.8663 11.4842 21.7284 11.4378 21.5984C11.3914 21.4684 11.3198 21.3488 11.2271 21.2465L2.452 11.5L11.2271 1.75346C11.3198 1.65116 11.3914 1.5316 11.4378 1.40159C11.4842 1.27158 11.5044 1.13369 11.4974 0.995834C11.4904 0.857979 11.4563 0.722847 11.397 0.598209C11.3376 0.473574 11.2543 0.361862 11.1517 0.269493C11.0492 0.177122 10.9294 0.105921 10.7992 0.0599346C10.6691 0.0139484 10.5311 -0.00590524 10.3933 0.00151815C10.2555 0.00894345 10.1204 0.0435027 9.99599 0.103205C9.87153 0.162905 9.76008 0.246578 9.66803 0.349432L0.264339 10.798C0.170864 10.903 0.0995475 11.0258 0.0546637 11.1591C0.00977905 11.2924 -0.0077495 11.4333 0.00312428 11.5735Z"
              fill="black"
            />
          </svg>
        </div>
        <div className="data-not-found">
          <h3>La donnée n'existe pas</h3>
        </div>
      </>
    );
  }
}

export default Detail;
