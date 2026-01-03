import win from "../assets/win.jpg";
import lose from "../assets/lose.jpg";

function GameOverPage({ condition }) {
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
          className={`text-7xl font-bold mb-4 oxenfree-text ${
            !isWin && "oxenfree-text-red"
          }`}
        >
          Game over
        </h1>

        <h1
          className={`text-5xl font-bold mb-3 ${
            isWin ? "text-teal-100" : "text-red-400"
          }`}
        >
          {isWin ? "You Win!" : "You Lose!"}
        </h1>

        <p className="text-[#dceef2] text-xl mb-8 tracking-wide">
          {isWin
            ? "You remembered every signal."
            : "You selected the same card twice."}
        </p>

        <div className="flex justify-center gap-4">
          <button
            className="oxenfree-btn oxenfree-btn-secondary px-3 py-2"
          >
            Restart
          </button>

          <button
            className="oxenfree-btn oxenfree-btn-secondary px-4 py-2"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
}

export default GameOverPage;
