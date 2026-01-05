import { useNavigate } from "react-router-dom";
import Logo from "../components/Logo";

function IntroPage() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center items-center py-16">
      <Logo variant="intro" />
      <button
        onClick={() => navigate("/game")}
        className="oxenfree-btn mt-14 px-10 py-4"
      >
        START
      </button>
    </div>
  );
}

export default IntroPage;
