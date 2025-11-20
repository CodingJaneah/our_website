import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";

/**
 * Interface for portfolio stat item
 */
interface PortfolioStatItem {
  value: string;
  label: string;
}

/**
 * Portfolio statistics data
 * Contains statistics information for the portfolio section
 * @returns {PortfolioStatItem[]} Array of portfolio stat objects with value and label
 */
const portfolioStats: PortfolioStatItem[] = [
  {
    value: "100+",
    label: "Projects Completed",
  },
  {
    value: "98%",
    label: "Client Satisfaction",
  },
  {
    value: "15",
    label: "Years Experience",
  },
];

/**
 * PortfolioStats component - Statistics section for portfolio
 * Uses semantic HTML for better SEO and accessibility
 */
const PortfolioStats = () => {
  return (
    <section className="py-16 bg-muted/30 mb-16" aria-label="Portfolio statistics">
      <div className="container mx-auto px-4">
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center"
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-50px" }}
          role="list"
        >
          {portfolioStats.map((stat, index) => (
            <motion.div 
              key={index} 
              variants={staggerItem}
              role="listitem"
            >
              <div className="text-4xl font-semibold text-primary mb-2" aria-label={`${stat.value} ${stat.label}`}>
                {stat.value}
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioStats;

