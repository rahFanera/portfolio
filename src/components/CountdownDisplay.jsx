import { motion } from "framer-motion";

export default function CountdownDisplay({ timeLeft }) {
  const countdownItems = [
    { label: "jours", value: timeLeft.days },
    { label: "heures", value: timeLeft.hours },
    { label: "minutes", value: timeLeft.minutes },
    { label: "secondes", value: timeLeft.seconds },
  ];

  return (
    <div className="grid grid-flow-col gap-3 md:gap-5 text-center auto-cols-max justify-center mb-10">
      {countdownItems.map((item, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 + idx * 0.1, duration: 0.5 }}
          className="flex flex-col p-3 md:p-4 rounded-xl md:rounded-2xl min-w-[70px] backdrop-blur-md bg-white/10 border border-white/20 shadow-lg"
        >
          <span className="font-mono text-3xl md:text-5xl font-bold text-purple-300">
            {String(item.value).padStart(2, "0")}
          </span>
          <span className="text-xs mt-1 uppercase opacity-75 tracking-widest">
            {item.label}
          </span>
        </motion.div>
      ))}
    </div>
  );
}