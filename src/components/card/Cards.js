import Card from "./Card.js";
import { Link } from "react-router-dom";

export function splitUrl(url) {
  if (!url) return "";

  const parts = url.split("/");
  const id = parts[parts.length - 2];
  return id;
}

function Cards(props) {
  const { cards, theme } = props;

  return (
    <div className="cards-container">
      {cards.map((item) => {
        return (
          <Link to={`/${theme}/${splitUrl(item.url)}`} key={splitUrl(item.url)}>
            <Card info={item} theme={theme} />
          </Link>
        );
      })}
    </div>
  );
}

export default Cards;
