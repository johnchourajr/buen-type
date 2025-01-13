"use client";

import { motion } from "framer-motion";
import { logotype } from "./logotype";

type SvgHeaderProps = {
  className?: string;
};

const SvgHeader = ({ className }: SvgHeaderProps) => (
  <motion.svg
    viewBox="0 0 208 79"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d={logotype}
      fill="none"
      stroke="currentColor"
      strokeWidth={0.5}
      strokeDasharray={1}
    />
  </motion.svg>
);
export default SvgHeader;
