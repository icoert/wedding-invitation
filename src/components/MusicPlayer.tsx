import { useState, useRef, useEffect } from "react";
import { FaVolumeUp, FaVolumeMute } from "react-icons/fa";
import song from "../assets/song.mp3";

// We pass in a prop `shouldStartPlaying`
interface MusicPlayerProps {
  shouldStartPlaying: boolean;
}

const MusicPlayer = ({ shouldStartPlaying }: MusicPlayerProps) => {
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(new Audio(song));

  // This effect will run ONLY when shouldStartPlaying becomes true
  useEffect(() => {
    if (shouldStartPlaying) {
      audioRef.current.play().catch((error) => {
        // Autoplay was prevented.
        console.error("Audio autoplay was prevented:", error);
      });
      audioRef.current.loop = true;
    }
  }, [shouldStartPlaying]);

  const toggleMute = () => {
    audioRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  // Don't render the button until the experience has started
  if (!shouldStartPlaying) {
    return null;
  }

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <button
        onClick={toggleMute}
        className="bg-gray-800 text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 focus:outline-none cursor-pointer"
        aria-label="Activează / Dezactivează muzica"
      >
        {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
      </button>
    </div>
  );
};

export default MusicPlayer;
