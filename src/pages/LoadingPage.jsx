import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function LoadingPage() {
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  // navigate to intro page as soon as loading completes
  useEffect(() => {
    if (progress === 100) {
      const timeout = setTimeout(() => {
        navigate("/intro");
      }, 500); // small pause feels nicer

      return () => clearTimeout(timeout);
    }
  }, [progress, navigate]);

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <h1 className="mb-10 text-5xl tracking-[0.2em] oxenfree-spectral font-semibold">
        LOADING...
      </h1>

      <div className=" w-96 h-2 rounded overflow-hidden bg-[#1f2a2a] glow">
        <div
          className="h-full bg-[#baf2e5]"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}

export default LoadingPage;
