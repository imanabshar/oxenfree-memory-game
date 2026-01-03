import { useState } from "react";
import Logo from "../components/Logo";
import CardGrid from "../components/CardGrid";
import ScoreBoard from "../components/ScoreBoard";

function GamePage() {
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
        bestScore={bestScore}
        setBestScore={setBestScore}
      />
    </div>
  );
}

export default GamePage;
