import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { services } from "@/data/services-data";
import { CheckCircle2 } from "lucide-react";
import { serviceDetails } from "@/data/services-data";

/**
 * ServicesGrid component - Grid of detailed service cards
 */
const ServicesGrid = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-50px" }}
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            const details = serviceDetails[index];
            
            return (
              <motion.div
                key={index}
                variants={staggerItem}
              >
                <Card className="h-full hover:shadow-lg transition-shadow hover:border-orange-500 hover:shadow-orange-200">
                  <CardHeader>
                    <div className="flex items-start gap-4 mb-4">
                      <div className="h-16 w-16 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                        <CardDescription className="text-base">
                          {service.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <h3 className="font-semibold text-lg mb-3">Key Features:</h3>
                      <ul className="space-y-2">
                        {details.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
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

export default ServicesGrid;

