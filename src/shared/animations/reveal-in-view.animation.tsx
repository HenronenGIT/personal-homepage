import { motion } from "framer-motion";

interface RevealInViewProps {
  children: React.ReactNode;
  duration?: number;
}

export const RevealInView = ({ children, duration = 1 }: RevealInViewProps) => {
  return (
    <motion.div
      whileInView={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration }}
    >
      <div>{children}</div>
    </motion.div>
  );
};
