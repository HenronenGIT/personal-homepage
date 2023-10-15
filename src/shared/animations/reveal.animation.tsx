import { motion } from "framer-motion";
import { AnimationProps } from "../types/animation.types";

interface RevealAnimationProps extends AnimationProps {
  children: React.ReactNode;
}

export const RevealAnimation = ({
  children,
  duration = 2, // Duration of the animation
  initial = 0, // Initial opacity of the element
  transition = 1,
  animate = 1, // Opacity of the element when it's visible
}: RevealAnimationProps) => {
  return (
    <motion.div
      initial={{ opacity: initial }}
      transition={{ duration }}
      animate={{ opacity: 1 }}
    >
      <div>{children}</div>
    </motion.div>
  );
};
