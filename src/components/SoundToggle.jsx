import { useState, useEffect, useRef } from "react";
import sound from "../assets/sound.png";
import muteSound from "../assets/muteSound.png";
import bgMusic from "../assets/bg-music.mp3";

function SoundToggle() {
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current = new Audio(bgMusic);
    audioRef.current.loop = true;
    audioRef.current.volume = 0.3;

    return () => {
      audioRef.current.pause();
    };
  }, []);

  const toggleSound = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <button onClick={toggleSound}>
      <img
        src={isPlaying ? sound : muteSound}
        alt={isPlaying ? "Sound On" : "Sound Off"}
        className="w-20 h-16"
      />
    </button>
  );
}

export default SoundToggle;
