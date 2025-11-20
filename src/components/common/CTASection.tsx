import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { ArrowRight } from "lucide-react";

/**
 * CTAButton interface for CTA section buttons
 */
interface CTAButton {
  label: string;
  path: string;
  variant?: "default" | "secondary" | "outline";
}

/**
 * CTASection component - Reusable call-to-action section
 * @param {string} title - The CTA heading text
 * @param {string} description - The description text below the title
 * @param {CTAButton[]} buttons - Array of button configurations
 */
interface CTASectionProps {
  title: string;
  description: string;
  buttons: CTAButton[];
}

const CTASection = ({ title, description, buttons }: CTASectionProps) => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div 
          {...fadeInUp}
          viewport={{ once: true, margin: "-50px" }}
        >
          <Card className="bg-gradient-primary text-primary-foreground border-0 shadow-xl">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                {title}
              </h2>
              <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
                {description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {buttons.map((button, index) => (
                  <Link key={index} to={button.path}>
                    <Button 
                      variant={button.variant || "secondary"} 
                      size="lg" 
                      className={`shadow-md ${button.variant === "secondary" ? "group" : "bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"}`}
                    >
                      {button.label}
                      {button.variant === "secondary" && (
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      )}
                    </Button>
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;

