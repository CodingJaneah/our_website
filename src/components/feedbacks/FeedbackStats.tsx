import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";

/**
 * Static statistics data for feedbacks
 * Update these values with your custom statistics
 */
const feedbackStats = {
  totalReviews: 100,
  clientSatisfaction: 98,
};

/**
 * FeedbackStats component - Statistics cards for feedbacks
 * Displays custom statistics data
 */
const FeedbackStats = () => {
  const { totalReviews, clientSatisfaction } = feedbackStats;

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto w-full"
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.div variants={staggerItem} className="w-full">
            <Card className="text-center hover:shadow-lg transition-shadow w-full h-full hover:border-orange-500 hover:shadow-orange-200">
              <CardHeader>
                <div className="text-4xl font-semibold text-primary mb-4">{totalReviews}</div>
                <CardTitle className="text-xl">Total Reviews</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Client feedbacks and testimonials
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div variants={staggerItem} className="w-full">
            <Card className="text-center hover:shadow-lg transition-shadow w-full h-full hover:border-orange-500 hover:shadow-orange-200">
              <CardHeader>
                <div className="text-4xl font-semibold text-primary mb-4">{clientSatisfaction}%</div>
                <CardTitle className="text-xl">Client Satisfaction</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Satisfaction rate from our clients
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeedbackStats;

