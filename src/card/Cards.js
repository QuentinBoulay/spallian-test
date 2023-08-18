import Card from './Card.js';
import { Link } from "react-router-dom";

function Cards(props) {
    return (
        <div className="cards-container">
            {props.cards.map((item, index) => (
                <Link to={`/${props.theme}/${index+1}`}>
                    <Card key={index} info={item} theme={props.theme} />
                </Link>
            ))}
        </div>
    );
}

export default Cards;