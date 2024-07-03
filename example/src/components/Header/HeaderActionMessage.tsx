import { motion } from "framer-motion";

export function HeaderActionMessage({ text }: { text: string }) {
  const animationProps = {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 20 },
  };

  return (
    <motion.span
      className="absolute flex items-center justify-end top-0 bottom-0 right-0 px-3 bg-gradient-to-l from-black to-transparent pointer-events-none w-1/2 text-end"
      {...animationProps}
    >
      <pre className="!font-mono text-caption">{text}</pre>
    </motion.span>
  );
}
