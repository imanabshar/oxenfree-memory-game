import { useState } from "react";
import cards from "../data/cards"
import Card from "./Card";


function CardGrid() {
  const [clickedCards, setClickedCards] = useState([]);

  function handleCardClick(cardId) {
    if (!clickedCards.includes(cardId)) {
      const newClickedCards = [...clickedCards, cardId];
      setClickedCards(newClickedCards);
      //score will be incremented here passed as a prop from parent
      console.log(newClickedCards);
    } else {
      //game over logic display here will make a component of that
      console.log("duplicate card selected");
    }
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
      {cards.map((card) => (
        <Card
          key={card.id}
          image={card.image}
          name={card.name}
          onClick={() => handleCardClick(card.id)}
        />
      ))}
    </div>
  );
}

export default CardGrid;
