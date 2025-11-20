import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

/**
 * SectionTitle component - Reusable section title with description
 * @param {string} title - The section heading text
 * @param {string} description - The description text below the title
 */
interface SectionTitleProps {
  title: string;
  description: string;
}

const SectionTitle = ({ title, description }: SectionTitleProps) => {
  return (
    <motion.div 
      className="text-center mb-12"
      {...fadeInUp}
      viewport={{ once: true, margin: "-50px" }}
    >
      <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-primary">{title}</h2>
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
        {description}
      </p>
    </motion.div>
  );
};

export default SectionTitle;

