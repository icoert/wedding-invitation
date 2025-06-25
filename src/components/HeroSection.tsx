import { motion } from "framer-motion";
import couplePhoto from "../assets/couple-photo.jpg";

const HeroSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="h-screen flex flex-col p-10 justify-top items-center text-center text-white relative bg-cover bg-no-repeat md:bg-center sm:bg-left-center"
      style={{
        backgroundImage: `url(${couplePhoto})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          style={{
            fontFamily: "'Great Vibes', cursive",
          }}
          className="font-body text-2xl md:text-4xl tracking-widest"
        >
          Ne căsătorim!
        </motion.h2>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          style={{
            fontFamily: "'Great Vibes', cursive",
          }}
          className="font-heading text-[56px] md:text-9xl my-4"
        >
          Cătălina și Silviu
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{
            fontFamily: "'Great Vibes', cursive",
          }}
          transition={{ duration: 1, delay: 1.8 }}
          className="font-body text-xl md:text-2xl"
        >
          20 Septembrie 2025
        </motion.p>
      </div>
    </motion.section>
  );
};

export default HeroSection;
