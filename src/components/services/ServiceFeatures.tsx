import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";
import { CheckCircle2 } from "lucide-react";
import SectionTitle from "@/components/common/SectionTitle";

/**
 * Service features that are common across all services
 */
const serviceFeatures = [
  "Custom solutions tailored to your business needs",
  "Scalable architecture for future growth",
  "Modern technology stack and best practices",
  "Dedicated support and maintenance",
  "Quality assurance and testing included",
  "Timely delivery and project management",
];

/**
 * ServiceFeatures component - Grid of common service features
 */
const ServiceFeatures = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="w-full flex justify-center">
        <div className="w-full max-w-6xl px-2 sm:px-4">
          <SectionTitle 
            title="What You Get With Every Service"
            description="Our commitment to excellence ensures you receive the best value for your investment"
          />
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-50px" }}
          >
            {serviceFeatures.map((feature, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className="flex" // ensures cards are consistent in height
              >
                <Card className="w-full flex flex-col justify-center text-center hover:shadow-lg transition-shadow flex-1 hover:border-orange-500 hover:shadow-orange-200">
                  <CardContent className="pt-6">
                    <CheckCircle2 className="h-8 w-8 text-primary mx-auto mb-4" />
                    <p className="text-base font-medium">{feature}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServiceFeatures;

