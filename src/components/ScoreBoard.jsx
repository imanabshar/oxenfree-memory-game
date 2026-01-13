import InfoButton from "./InfoButton";
import SoundToggle from "./SoundToggle";

function Scoreboard({ currentScore, bestScore }) {
  return (
    <div className="w-full max-w-5xl mx-auto mt-5 mb-7 px-4 sm:px-6">
      <div
        className="flex flex-col md:flex-row items-center justify-between 
      px-4 sm:px-7 oxenfree-text scoreboard gap-3 md:gap-0"
      >
        {/* Current Score */}
        <div className="flex items-center justify-center gap-2 text-lg sm:text-xl md:text-2xl flex-1 md:flex-none">
          <span className="font-bold lowercase tracking-wide sm:tracking-wider">
            Current Score:
          </span>
          <span className="font-bold">{currentScore}</span>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-2 md:gap-4 flex-1 md:flex-none">
          {/* Best Score */}
          <div className="flex items-center gap-2 text-lg sm:text-xl md:text-2xl flex-1 sm:flex-none">
            <span className="font-bold lowercase tracking-wide sm:tracking-wider">
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
