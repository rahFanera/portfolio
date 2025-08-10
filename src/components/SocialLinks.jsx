import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function SocialLinks({ socialLinks }) {
  const getIcon = (name) => {
    switch (name) {
      case "github":
        return FaGithub;
      case "linkedin":
        return FaLinkedin;
      case "twitter":
        return FaXTwitter;
      default:
        return null;
    }
  };

  return (
    <motion.div
      className="flex gap-4 justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2, duration: 0.5 }}
    >
      {Object.entries(socialLinks).map(([name, url]) => {
        const Icon = getIcon(name);
        return (
          Icon && (
            <a
              key={name}
              href={url}
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 transition-colors duration-300"
            >
              <Icon className="text-2xl" />
            </a>
          )
        );
      })}
    </motion.div>
  );
}