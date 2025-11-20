import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { fadeInUp } from "@/lib/animations";

/**
 * MissionVision component - Mission and Vision cards
 */
const MissionVision = () => {
  return (
    <section className="py-10 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 w-full"
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.div variants={staggerItem} className="flex">
            <Card className="h-full w-full flex flex-col">
              <CardHeader className="flex-shrink-0">
                <CardTitle className="text-4xl text-primary">Mission</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription className="text-lg leading-relaxed">
                  Deliver exceptional IT solutions that empower businesses to succeed, combining technology, creativity, and strategy to achieve measurable results.
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div variants={staggerItem} className="flex">
            <Card className="h-full w-full flex flex-col">
              <CardHeader className="flex-shrink-0">
                <CardTitle className="text-4xl text-primary">Vision</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription className="text-lg leading-relaxed">
                  To be a leading global technology provider, recognized for transforming businesses through innovation and sustainable growth.
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionVision;

