import { useState } from "react";
import { motion } from "framer-motion";
import { FiMail } from "react-icons/fi";

export default function EmailButton({ email }) {
  const [isCopied, setIsCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="mb-8 flex items-center justify-center"
    >
      <button
        onClick={copyEmail}
        className="px-6 py-3 rounded-full text-sm md:text-lg font-medium flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-yellow-400 text-white transition-all duration-300 shadow-lg hover:shadow-pink-500/50"
      >
        <FiMail /> {isCopied ? "Email Copié" : email}
      </button>
    </motion.div>
  );
}
