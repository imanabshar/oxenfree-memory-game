import Logo from "../components/Logo";
import SoundToggle from "../components/SoundToggle";
import InfoButton from "../components/InfoButton";

function GamePage() {
  return (
    <div className="p-10">
      <Logo variant="game" />
      <InfoButton />
      <SoundToggle />
    </div>
  );
}

export default GamePage;
