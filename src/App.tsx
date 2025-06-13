import { useState } from "react";
import { AnimatePresence } from "framer-motion";

// Import all your components
import HeroSection from "./components/HeroSection";
import CronologySection from "./components/CronologySection";
import RsvpSection from "./components/RsvpSection";
import MusicPlayer from "./components/MusicPlayer";
import WelcomeGate from "./components/WelcomeGate";
import LocationSection from "./components/LocationSection";
import PictureSection from "./components/PictureSection";

function App() {
  const [invitationOpened, setInvitationOpened] = useState(false);

  const handleEnter = () => {
    setInvitationOpened(true);
  };

  return (
    <div className="App">
      {/* The MusicPlayer is always here, but it waits for the signal */}
      <MusicPlayer shouldStartPlaying={invitationOpened} />

      <AnimatePresence>
        {!invitationOpened && <WelcomeGate onEnter={handleEnter} />}
      </AnimatePresence>

      {/* The main content is only rendered after the invitation is opened */}
      {invitationOpened && (
        <>
          <main>
            <HeroSection />
            <CronologySection />
            <LocationSection />
            <PictureSection />
            <RsvpSection />
          </main>
          <footer className="text-center py-6 bg-primary text-secondary font-body">
            <p
              style={{
                fontFamily: "'Great Vibes', cursive",
                fontSize: "1.8rem",
                textAlign: "center",
                marginTop: "2rem",
              }}
            >
              Cu dragoste, Silviu și Cătălina
            </p>
          </footer>
        </>
      )}
    </div>
  );
}

export default App;
