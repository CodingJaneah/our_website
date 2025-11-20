import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";
import { customerFeedback } from "@/data/home-data";
import { Quote } from "lucide-react";
import SectionTitle from "@/components/common/SectionTitle";

/**
 * AllFeedbacksGrid component - Grid of all customer feedbacks
 * Displays all customer feedback items from the customerFeedback data array
 */
const AllFeedbacksGrid = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="All Client Testimonials"
          description="Browse through all our client feedbacks and success stories"
        />
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-50px" }}
        >
          {customerFeedback.map((feedback, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
            >
              <Card className="h-full hover:shadow-lg transition-shadow flex flex-col hover:border-orange-500 hover:shadow-orange-200">
                <CardHeader className="p-0">
                  <div className="w-full h-64 flex items-center justify-center bg-muted/30 p-4 rounded-t-lg overflow-hidden">
                    <img 
                      src={feedback.image} 
                      className="max-w-full max-h-full w-auto h-auto rounded-lg object-contain"
                    />
                  </div>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col p-6">
                  <div className="flex items-start mb-4">
                    <Quote className="h-6 w-6 flex-shrink-0 mt-1 text-primary" />
                    <CardDescription className="text-base leading-relaxed ml-2">
                      {feedback.feedback}
                    </CardDescription>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AllFeedbacksGrid;

