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

function CardGrid({ incrementScore, currentScore, bestScore, setBestScore }) {
  const [clickedCards, setClickedCards] = useState([]);
  const [shuffledCards, setShuffledCards] = useState(() => {
    const copy = [...cards];
    shuffleCard(copy);
    return copy;
  });
  const [allFlipped, setAllFlipped] = useState(false);

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

      // flip cards to back as soon any card clicked
      setAllFlipped(true);

      // shuffle is being done while hidden
      setTimeout(() => {
        reshuffleCards();
      }, 600);

      // flip cards back to front
      setTimeout(() => {
        setAllFlipped(false);
      }, 1000);

      //increment the current score
      incrementScore();

      //compare current score with best score and update bestscore if needed
      if (currentScore + 1 > bestScore) {
        setBestScore(currentScore + 1);
        localStorage.setItem("bestScore", currentScore + 1);
      }
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
          flipped={allFlipped}
          onClick={() => handleCardClick(card.id)}
        />
      ))}
    </div>
  );
}

export default CardGrid;
