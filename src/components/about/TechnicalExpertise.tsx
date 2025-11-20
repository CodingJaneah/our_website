import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";
import { technicalExpertise } from "@/data/about-data";
import SectionTitle from "@/components/common/SectionTitle";

/**
 * TechnicalExpertise component - Technical expertise grid
 */
const TechnicalExpertise = () => {
  return (
    <section className="py-16 bg-muted/30 mb-16">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Technical Expertise"
          description=""
        />
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-50px" }}
        >
          {technicalExpertise.map((expertise, index) => {
            const Icon = expertise.icon;
            return (
              <motion.div 
                key={index} 
                variants={staggerItem}
                className="w-full"
              >
                <Card className="text-center w-full h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mx-auto h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{expertise.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{expertise.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default TechnicalExpertise;

