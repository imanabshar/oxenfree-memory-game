import win from "../assets/win.jpg";
import lose from "../assets/lose.jpg";

function GameOverPage({ condition, onRestart, onBack }) {
  const isWin = condition === "win";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{
        backgroundImage: `url(${isWin ? win : lose})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* content */}
      <div className="relative z-10 p-8 rounded-xl text-center">
        <h1
          className={`text-4xl sm:text-6xl md:text-7xl font-bold mb-4 oxenfree-text ${
            !isWin && "oxenfree-text-red"
          }`}
        >
          Game over
        </h1>

        <h1
          className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-3 ${
            isWin ? "text-teal-100" : "text-red-400"
          }`}
        >
          {isWin ? "You Win!" : "You Lose!"}
        </h1>

        <p className="text-[#dceef2] text-base sm:text-lg md:text-xl mb-8 tracking-wide">
          {isWin
            ? "You remembered every signal."
            : "You selected the same card twice."}
        </p>

        <div className="flex justify-center gap-4">
          <button
            onClick={onRestart}
            className="oxenfree-btn p-3 sm:px-8 sm:py-4
          sm:text-xl md:text-2xl"
          >
            Restart
          </button>

          <button
            onClick={onBack}
            className="oxenfree-btn p-3 sm:px-8 sm:py-4
          sm:text-xl md:text-2xl"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
}

export default GameOverPage;
