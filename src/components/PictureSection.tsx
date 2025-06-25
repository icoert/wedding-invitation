import { motion } from "framer-motion";
import couplePhoto2 from "../assets/couple-photo2.jpg";

const PictureSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full h-[450px] sm:h-[400px] flex flex-col justify-center items-center text-center text-white relative"
      style={{
        backgroundImage: `url(${couplePhoto2})`,
        backgroundSize: "cover",
        backgroundPosition:
          window.innerWidth < 640 ? "right center" : "center center",
        backgroundRepeat: "no-repeat",
      }}
    />
  );
};
export default PictureSection;
