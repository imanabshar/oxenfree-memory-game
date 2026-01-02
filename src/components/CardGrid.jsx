import { useState } from "react";
import cards from "../data/cards";
import Card from "./Card";

//shuffling cards through Fisher-Yates Algorithm
function shuffleCard(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const random = Math.floor(Math.random() * (i + 1));

    [array[i], array[random]] = [array[random], array[i]];
  }
}

function CardGrid() {
  const [clickedCards, setClickedCards] = useState([]);
  const [shuffledCards, setShuffledCards] = useState(() => {
    const copy = [...cards];
    shuffleCard(copy);
    return copy;
  });

  function reshuffleCards() {
    const copy = [...shuffledCards];
    shuffleCard(copy);
    setShuffledCards(copy);
  }

  function handleCardClick(cardId) {
    if (!clickedCards.includes(cardId)) {
      const newClickedCards = [...clickedCards, cardId];
      setClickedCards(newClickedCards);
      console.log(newClickedCards);
      reshuffleCards();
      //score will be incremented here passed as a prop from parent
    } else {
      //game over logic display here will make a component of that
      console.log("duplicate card selected");
    }
  }
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
      {shuffledCards.map((card) => (
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
