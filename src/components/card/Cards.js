import Card from "./Card.js";
import { Link } from "react-router-dom";

function Cards(props) {
  const { cards, theme, currentPage } = props;
  const resultsParPage = 10;

  return (
    <div className="cards-container">
      {cards.map((item, localIndex) => {
        const globalIndex = (currentPage - 1) * resultsParPage + localIndex + 1;
        return (
          <Link to={`/${theme}/${globalIndex}`} key={globalIndex}>
            <Card info={item} theme={theme} />
          </Link>
        );
      })}
    </div>
  );
}

export default Cards;
