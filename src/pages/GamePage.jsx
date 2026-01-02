import Logo from "../components/Logo";
import SoundToggle from "../components/SoundToggle";
import InfoButton from "../components/InfoButton";
import CardGrid from "../components/CardGrid";

function GamePage() {
  return (
    <div className="p-10">
      <Logo variant="game" />
      <InfoButton />
      <SoundToggle />
      <CardGrid />
    </div>
  );
}

export default GamePage;
