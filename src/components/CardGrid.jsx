import { useState } from "react";
import { useNavigate } from "react-router-dom";
import cards from "../data/cards";
import Card from "./Card";
import GameOverPage from "../pages/GameOverPage";
import flip from "../assets/sounds/flip.mp3";

//shuffling cards through Fisher-Yates Algorithm
function shuffleCard(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const random = Math.floor(Math.random() * (i + 1));
    [array[i], array[random]] = [array[random], array[i]];
  }
}

function CardGrid({
  incrementScore,
  currentScore,
  setCurrentScore,
  bestScore,
  setBestScore,
  totalRounds,
}) {
  const navigate = useNavigate();

  const [round, setRound] = useState(0);
  const [clickedCards, setClickedCards] = useState([]);
  const [allFlipped, setAllFlipped] = useState(false);
  const [gameOver, setGameOver] = useState({
    status: false,
    condition: null,
  });
  const [isAnimating, setIsAnimating] = useState(false);

  // getting 4 random cards
  function getRandomCards() {
    const copy = [...cards];
    shuffleCard(copy);
    return copy.slice(0, 4);
  }

  const [visibleCards, setVisibleCards] = useState(getRandomCards);

  function handleCardClick(cardId) {
    if (isAnimating) return;
    setIsAnimating(true);

    //checking if duplicate card clicked then setting condition to lose
    if (clickedCards.includes(cardId)) {
      setGameOver({ status: true, condition: "lose" });
      setIsAnimating(false);
      return;
    }

    const flipSound = new Audio(flip);
    flipSound.volume = 0.1;
    flipSound.currentTime = 0;
    flipSound.play();

    const newClickedCards = [...clickedCards, cardId];
    setClickedCards(newClickedCards);

    // flip cards to back as soon any card clicked
    setAllFlipped(true);

    // shuffle is being done while hidden
    setTimeout(() => {
      setVisibleCards(getRandomCards());

      // flip cards back to front
      setTimeout(() => {
        setAllFlipped(false);

        // increment round
        const nextRound = round + 1;
        setRound(nextRound);

        // check win after round increment
        if (nextRound > totalRounds) {
          setGameOver({ status: true, condition: "win" });
        }

        setIsAnimating(false);
      }, 300);
    }, 500);

    incrementScore();
    //compare current score with best score and update bestscore if needed
    if (currentScore + 1 > bestScore) {
      setBestScore(currentScore + 1);
      localStorage.setItem("bestScore", currentScore + 1);
    }
  }

  function handleRestart() {
    setClickedCards([]);
    setRound(0);
    setVisibleCards(getRandomCards());
    setAllFlipped(false);
    setGameOver({ status: false, condition: null });
    setCurrentScore(0);
    setIsAnimating(false);
  }

  function handleBack() {
    navigate("/intro");
  }

  return (
    <>
      {gameOver.status && (
        <GameOverPage
          condition={gameOver.condition}
          onRestart={handleRestart}
          onBack={handleBack}
        />
      )}

      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {visibleCards.map((card) => (
            <Card
              key={card.id}
              image={card.image}
              name={card.name}
              flipped={allFlipped}
              onClick={() => handleCardClick(card.id)}
            />
          ))}
        </div>
      </div>

      <div className="text-center mt-4 font-bold text-xl text-teal-100">
        {Math.min(round, totalRounds)} / {totalRounds}
      </div>
    </>
  );
}

export default CardGrid;
