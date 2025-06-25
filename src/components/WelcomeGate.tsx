import { motion } from "framer-motion";

type WelcomeGateProps = {
  onEnter: () => void;
};

const WelcomeGate = ({ onEnter }: WelcomeGateProps) => {
  return (
    // We've removed the `exit` prop from this motion.div
    <motion.div
      initial={{ opacity: 1 }}
      className="bg-zinc-100 fixed inset-0 bg-secondary flex flex-col justify-center items-center z-50 text-center p-4"
    >
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="font-heading text-4xl md:text-7xl text-primary mb-4"
      >
        Cătălina și Silviu
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="font-body text-lg md:text-xl text-text-light mb-8"
      >
        vă invită să le fiți alături la celebrarea căsătoriei lor
      </motion.p>
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          default: { duration: 1, delay: 1.5, ease: "easeInOut" },

          scale: {
            duration: 1.5,
            delay: 2, // Start pulsing after the initial animation (1.5s delay + 1s duration + a small buffer)
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          },
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={onEnter}
        className="bg-accent text-black font-body py-3 px-12 rounded-full text-lg shadow-lg cursor-pointer"
      >
        Deschide invitația
      </motion.button>
    </motion.div>
  );
};

export default WelcomeGate;
