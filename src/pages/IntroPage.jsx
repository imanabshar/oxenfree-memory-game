import { useNavigate } from "react-router-dom";
import Logo from "../components/Logo";

function IntroPage() {
  const navigate = useNavigate();

  const handleStart = (level) => {
    navigate("/game", { state: { difficulty: level } });
  };

  return (
    <div className="flex flex-col justify-center items-center px-4 gap-10 h-screen">
      <Logo variant="intro" />

      <div className="flex gap-4 sm:gap-6">
        <button
          onClick={() => handleStart("easy")}
          className="oxenfree-btn p-3 sm:px-8 sm:py-4 
          sm:text-xl md:text-2xl"
        >
          Easy
        </button>
        <button
          onClick={() => handleStart("medium")}
          className="oxenfree-btn p-3 sm:px-8 sm:py-4
          sm:text-xl md:text-2xl"
        >
          Medium
        </button>
        <button
          onClick={() => handleStart("hard")}
          className="oxenfree-btn p-3 sm:px-8 sm:py-4 
          sm:text-xl md:text-2xl"
        >
          Hard
        </button>
      </div>
    </div>
  );
}

export default IntroPage;
