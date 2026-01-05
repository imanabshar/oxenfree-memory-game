import { useNavigate } from "react-router-dom";
import Logo from "../components/Logo";

function IntroPage() {
  const navigate = useNavigate();

  const handleStart = (level) => {
    navigate("/game", { state: { difficulty: level } });
  };

  return (
    <div className="flex flex-col justify-center items-center py-16 gap-10">
      <Logo variant="intro" />

      <div className="flex gap-6">
        <button
          onClick={() => handleStart("easy")}
          className="oxenfree-btn oxenfree-btn-secondary px-8 py-4"
        >
          Easy
        </button>
        <button
          onClick={() => handleStart("medium")}
          className="oxenfree-btn oxenfree-btn-secondary px-6 py-4"
        >
          Medium
        </button>
        <button
          onClick={() => handleStart("hard")}
          className="oxenfree-btn oxenfree-btn-secondary px-6 py-4"
        >
          Hard
        </button>
      </div>
    </div>
  );
}

export default IntroPage;
