import { motion } from "framer-motion";

const blobVariants = {
  animate: {
    x: ["-50%", "50%", "-50%"],
    y: ["-50%", "50%", "-50%"],
    rotate: [0, 360],
    transition: {
      duration: 20,
      ease: "linear",
      repeat: Infinity,
    },
  },
};

export default function BackgroundBlobs() {
  return (
    <>
      <motion.div
        className="absolute w-96 h-96 bg-purple-600 rounded-full blur-[150px] opacity-30"
        variants={blobVariants}
        animate="animate"
      ></motion.div>

      <motion.div
        className="absolute w-96 h-96 bg-pink-600 rounded-full blur-[150px] opacity-30"
        variants={blobVariants}
        animate="animate"
        style={{ top: "40%", right: "-30%" }}
      ></motion.div>
    </>
  );
}