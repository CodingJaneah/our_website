import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
}

/**
 * PageTransition component that provides smooth page transition animations
 * Uses framer-motion for fade and slide effects suitable for a professional company website
 * 
 * @param children - The page content to animate
 * @returns Animated page wrapper with fade and slide transitions
 */
const PageTransition = ({ children }: PageTransitionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1], // Custom easing for smooth animation
      }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;


