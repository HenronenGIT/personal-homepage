import { motion } from "framer-motion";
import { TAnimationTypes } from "../types/animation.types";

interface RevealProps extends TAnimationTypes {
  children: React.ReactNode;
}

export const RevealFromTopAnimation = ({ children, duration }: RevealProps) => {
  return (
    <motion.div
      animate={{ x: 100 }}
      transition={{ ease: "easeOut", duration: 2 }}
      initial
    >
      <div>{children}</div>
    </motion.div>
  );
};
