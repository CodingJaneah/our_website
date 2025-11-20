/**
 * Animation variants for Framer Motion
 * Note: viewport config should be set on the motion component, not in the variant
 * This prevents animations from re-triggering when scrolling
 */

/**
 * Fade in up animation variant
 * Use with viewport={{ once: true }} to prevent re-triggering
 */
export const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }
};

/**
 * Stagger container animation variant
 * Use with viewport={{ once: true, margin: "-50px" }} to prevent re-triggering
 */
export const staggerContainer = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  transition: { staggerChildren: 0.1, duration: 0.3 }
};

/**
 * Stagger item animation variant
 * Used as child of staggerContainer
 */
export const staggerItem = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }
};

