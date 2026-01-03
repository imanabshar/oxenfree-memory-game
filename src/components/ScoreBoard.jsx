import InfoButton from "./InfoButton";
import SoundToggle from "./SoundToggle";

function Scoreboard({currentScore, bestScore}) {
  return (
    <div className="w-full max-w-5xl mx-auto mt-5 mb-7 px-6">
      <div
        className="flex items-center justify-between px-7
       oxenfree-text scoreboard">
        {/* Current Score */}
        <div className="flex items-center justify-center gap-2 text-2xl">
          <span className="font-bold lowercase tracking-wider">
            Current Score:
          </span>
          <span className="font-bold">{currentScore}</span>
        </div>

        <div className="flex items-center gap-4">
          {/* Best Score */}
          <div className="flex items-center gap-2 text-2xl">
            <span className="font-bold lowercase tracking-wider">
              Best Score:
            </span>
            <span className="font-bold">{bestScore}</span>
          </div>

          {/* Controls */}
          <div className="flex items-center">
            <InfoButton />
            <SoundToggle />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Scoreboard;
