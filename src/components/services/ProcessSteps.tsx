import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";
import SectionTitle from "@/components/common/SectionTitle";

/**
 * Process steps data
 */
const processSteps = [
  { step: "01", title: "Discovery", description: "We understand your business needs and goals" },
  { step: "02", title: "Planning", description: "We create a detailed roadmap and strategy" },
  { step: "03", title: "Development", description: "We build your solution with best practices" },
  { step: "04", title: "Delivery", description: "We launch and support your solution" },
  { step: "05", title: "Support & Maintenance", description: "We provide ongoing support and updates" },
];

/**
 * ProcessSteps component - Grid of process step cards
 */
const ProcessSteps = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Our Process"
          description="A streamlined approach to delivering exceptional results"
        />
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-8xl mx-auto"
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-50px" }}
        >
          {processSteps.map((process, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
            >
              <Card className="text-center hover:shadow-lg transition-shadow h-full hover:border-orange-500 hover:shadow-orange-200">
                <CardHeader>
                  <Badge variant="secondary" className="text-2xl font-bold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-[#FFF4E6] text-primary">
                    {process.step}
                  </Badge>
                  <CardTitle className="text-xl">{process.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {process.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSteps;

