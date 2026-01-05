import { useState } from "react";
import { useLocation } from "react-router-dom";
import Logo from "../components/Logo";
import CardGrid from "../components/CardGrid";
import ScoreBoard from "../components/ScoreBoard";

function GamePage() {
  const location = useLocation();

  // getting difficulty from IntroPage
  const difficulty = location.state?.difficulty || "easy";

  // no of rounds based on difficulty
  const rounds = {
    easy: 6,
    medium: 9,
    hard: 12,
  }[difficulty];

  const [currentScore, setCurrentScore] = useState(0);
  function incrementScore() {
    setCurrentScore((prevScore) => prevScore + 1);
  }

  const [bestScore, setBestScore] = useState(() => {
    return Number(localStorage.getItem("bestScore")) || 0;
  });

  return (
    <div className="px-10 py-5">
      <Logo variant="game" />
      <ScoreBoard currentScore={currentScore} bestScore={bestScore} />

      <CardGrid
        incrementScore={incrementScore}
        currentScore={currentScore}
        setCurrentScore={setCurrentScore}
        bestScore={bestScore}
        setBestScore={setBestScore}
        totalRounds={rounds}
      />
    </div>
  );
}

export default GamePage;
