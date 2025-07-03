import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const RsvpForm = () => {
  const [name, setName] = useState("");
  const [attending, setAttending] = useState("");
  const [numGuests, setNumGuests] = useState(2);
  const [numChildren, setNumChildren] = useState(0);
  const [menu, setMenu] = useState("normal");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("name", name);
    formData.append("attending", attending);
    formData.append("numGuests", attending === "da" ? String(numGuests) : "");
    formData.append(
      "numChildren",
      attending === "da" ? String(numChildren) : ""
    );
    formData.append("menu", attending === "da" ? menu : "");
    formData.append("notes", attending === "da" ? notes : "");

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycby0Szx75oWFLCiK0LMfMXxpRQ4KMYtOVaRzdVOaLZDCb2noYfffd2Gy5S_31Ei1hANm/exec",
        {
          method: "POST",
          body: formData,
        }
      );

      setSubmitted(true);
    } catch (error) {
      alert("A apărut o eroare. Vă rugăm încercați din nou.");
      console.error("Submit error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-white shadow-2xl rounded-3xl p-8 max-w-2xl mx-auto space-y-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            🎉 Confirmarea Participării
          </h2>
          <p className="text-sm text-gray-500">
            Locație: Yaz Events Center, DJ112A, Hărman <br />
            Contact: Silviu - 0762606448, Cătălina - 0787661792
          </p>

          <AnimatePresence>
            {!submitted ? (
              <motion.form
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-6 text-left"
              >
                <div>
                  <label className="block font-medium">Nume complet *</label>
                  <input
                    type="text"
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div>
                  <label className="block font-medium">
                    Veți fi alături de noi? *
                  </label>
                  <div className="flex gap-6 mt-2">
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        value="da"
                        checked={attending === "da"}
                        onChange={() => setAttending("da")}
                      />
                      Da
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        value="nu"
                        checked={attending === "nu"}
                        onChange={() => setAttending("nu")}
                      />
                      Nu
                    </label>
                  </div>
                </div>

                <AnimatePresence>
                  {attending === "da" && (
                    <motion.div
                      key="extended-section"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                      className="space-y-6 overflow-hidden"
                    >
                      <div>
                        <label className="block font-medium">
                          Numărul total de persoane (inclusiv dvs.) *
                        </label>
                        <div className="flex flex-wrap gap-4 mt-2">
                          {Array.from({ length: 10 }, (_, i) => (
                            <label key={i} className="flex items-center gap-1">
                              <input
                                type="radio"
                                value={i + 1}
                                checked={numGuests === i + 1}
                                onChange={() => setNumGuests(i + 1)}
                              />
                              {i + 1}
                            </label>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="block font-medium">
                          Dintre aceștia, câți sunt copii? *
                        </label>
                        <div className="flex flex-wrap gap-4 mt-2">
                          {Array.from({ length: 5 }, (_, i) => (
                            <label key={i} className="flex items-center gap-1">
                              <input
                                type="radio"
                                value={i}
                                checked={numChildren === i}
                                onChange={() => setNumChildren(i)}
                              />
                              {i}
                            </label>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="block font-medium">
                          Preferințe de meniu *
                        </label>
                        <div className="flex gap-6 mt-2">
                          <label className="flex items-center gap-2">
                            <input
                              type="radio"
                              value="vegetarian"
                              checked={menu === "vegetarian"}
                              onChange={() => setMenu("vegetarian")}
                            />
                            Vegetarian
                          </label>
                          <label className="flex items-center gap-2">
                            <input
                              type="radio"
                              value="normal"
                              checked={menu === "normal"}
                              onChange={() => setMenu("normal")}
                            />
                            Normal
                          </label>
                        </div>
                      </div>

                      <div>
                        <label className="block font-medium">
                          Observații speciale
                        </label>
                        <textarea
                          className="w-full p-3 border border-gray-300 rounded-lg"
                          rows={3}
                          placeholder="Alergii, intoleranțe, nevoi speciale..."
                          value={notes}
                          onChange={(e) => setNotes(e.target.value)}
                        />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="text-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    disabled={loading}
                    className={`bg-accent text-black px-8 py-3 rounded-full font-medium shadow-md cursor-pointer transition-all ${
                      loading ? "animate-pulse" : ""
                    }`}
                  >
                    {loading ? "Se trimite..." : "Trimite"}
                  </motion.button>
                </div>
              </motion.form>
            ) : (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-lg text-green-600 font-semibold"
              >
                Mulțumim pentru confirmare! 💌
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default RsvpForm;
