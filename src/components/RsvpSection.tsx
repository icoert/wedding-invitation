import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const RsvpSection = () => {
  // State to control the visibility of the form
  const [isFormVisible, setIsFormVisible] = useState(false);

  // Function to reveal the form
  const handleRsvpClick = () => {
    setIsFormVisible(true);
  };

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-heading text-primary mb-4">
          Ne veți onora cu prezența?
        </h2>
        <p className="font-body text-text-light mb-8 max-w-2xl mx-auto">
          Prezența voastră ar însemna enorm pentru noi. Vă rugăm să confirmați
          participarea până la data de 1 August 2025, pentru a putea face
          pregătirile necesare.
        </p>

        {/* This button will only show when the form is NOT visible */}
        {!isFormVisible && (
          <motion.button
            onClick={handleRsvpClick}
            whileHover={{ scale: 1.25 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-accent text-black font-body py-3 px-12 rounded-full text-lg shadow-lg transition-colors cursor-pointer"
          >
            Confirmă prezența
          </motion.button>
        )}

        {/* AnimatePresence handles the smooth entrance of the form */}
        <AnimatePresence>
          {isFormVisible && (
            <motion.div
              // This is the container for your form
              className="mt-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }} // Animates to the natural height
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
            >
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSffhqep70gIkbgqf3QfYvmuv_W-dNfVJFYBiTmXJPTxp2gEvw/viewform?embedded=true
"
                className="w-full h-[1600px] sm:h-[1600px] md:h-[1600px] lg:h-[1600px] xl:h-[1600px] border-none rounded-lg shadow-xl"
              >
                Încărcare…
              </iframe>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default RsvpSection;
