import LoadingPage from "./pages/LoadingPage";
import IntroPage from "./pages/IntroPage";
import GamePage from "./pages/GamePage";

function App() {
  return (
    <div className="min-h-screen bg-game bg-cover bg-center bg-fixed">
      {/* <LoadingPage /> */}
      {/* <IntroPage /> */}
      <GamePage />
    </div>
  );
}

export default App;
