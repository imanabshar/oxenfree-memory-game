import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoadingPage from "./pages/LoadingPage";
import IntroPage from "./pages/IntroPage";
import GamePage from "./pages/GamePage";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-game bg-cover bg-center bg-fixed">
        <Routes>
          <Route path="/" element={<LoadingPage />} />
          <Route path="/intro" element={<IntroPage />} />
          <Route path="/game" element={<GamePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

