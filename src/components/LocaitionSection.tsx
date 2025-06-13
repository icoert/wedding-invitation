import { motion } from "framer-motion";

const LocationSection = () => {
  return (
    <motion.section
      className="py-20 bg-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-heading text-primary mb-12">
          Unde?
        </h2>

        {/* Container for the map with shadow and rounded corners */}
        <div className="max-w-5xl mx-auto rounded-lg shadow-xl overflow-hidden">
          {/* 
            ▼▼▼ LIPIȚI CODUL IFRAME DE LA GOOGLE MAPS AICI ▼▼▼ 
            - Asigură-te că adaugi `className` la iframe-ul tău pentru a-l face responsiv.
            - Poți ajusta înălțimea (de ex. h-[500px]) după cum este necesar.
          */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.9143430641407!2d25.66562457679298!3d45.71881857107919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b358d268d8b111%3A0xefebedc3ee23310d!2sYaz%20Events%20Center!5e1!3m2!1sen!2sro!4v1749709352715!5m2!1sen!2sro"
            className="w-full h-[450px] border-0"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </motion.section>
  );
};

export default LocationSection;
