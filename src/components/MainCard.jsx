import { motion } from "framer-motion";
import { useMemo } from "react";
import { useCountdown } from "../hooks/useCountdown";
import CountdownDisplay from "./CountdownDisplay";
import EmailButton from "./EmailButton";
import SocialLinks from "./SocialLinks";

const variants = {
  hidden: { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0 },
};

export default function MainCard() {
  const targetDate = useMemo(
    () => new Date("2025-10-31T23:59:59").getTime(),
    []
  );

  const timeLeft = useCountdown(targetDate);

  const email = "faneraeugeneraherindrainy@gmail.com";
  const socialLinks = {
    github: "https://github.com/rahFanera",
    linkedin: "https://www.linkedin.com/in/faneraeugene/",
    twitter: "https://twitter.com/tonprofil",
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ duration: 0.8 }}
      className="relative z-10 p-6 md:p-8 text-white max-w-sm md:max-w-lg mx-auto backdrop-blur-sm bg-white/5 rounded-3xl border border-white/10 shadow-2xl"
    >
      <motion.h1
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
        className="text-4xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400"
      >
        Portfolio en construction
      </motion.h1>

      <p className="mb-8 text-sm md:text-lg font-light text-gray-300">
        Restez connectés pour découvrir mon travail
      </p>

      <CountdownDisplay timeLeft={timeLeft} />
      <EmailButton email={email} />
      <SocialLinks socialLinks={socialLinks} />
    </motion.div>
  );
}