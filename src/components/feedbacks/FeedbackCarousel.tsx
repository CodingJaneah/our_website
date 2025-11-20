import { Card, CardDescription, CardHeader } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { carouselFeedbacks } from "@/data/home-data";
import { Quote } from "lucide-react";
import SectionTitle from "@/components/common/SectionTitle";

/**
 * FeedbackCarousel component props interface
 */
interface FeedbackCarouselProps {
  title: string;
  description: string;
  sectionClassName?: string;
}

/**
 * FeedbackCarousel component - Reusable carousel of customer feedbacks
 * @param title - The title text for the section
 * @param description - The description text for the section
 * @param sectionClassName - Optional custom className for the section element
 */
const FeedbackCarousel = ({ title, description, sectionClassName = "py-16 bg-muted/30" }: FeedbackCarouselProps) => {
  return (
    <section className={sectionClassName}>
      <div className="container mx-auto px-4">
        <SectionTitle 
          title={title}
          description={description}
        />
        <motion.div
          {...fadeInUp}
          viewport={{ once: true, margin: "-50px" }}
          className="max-w-6xl mx-auto relative"
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {carouselFeedbacks.map((feedback, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2">
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-4">
                        <Quote className="h-8 w-8 text-primary" />
                      </div>
                      <CardDescription className="text-base leading-relaxed">
                        {feedback.feedback}
                      </CardDescription>
                      {feedback.role && (
                        <div className="mt-3">
                          <span className="text-sm text-muted-foreground italic">{feedback.role}</span>
                        </div>
                      )}
                    </CardHeader>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-4 md:-left-12" />
            <CarouselNext className="-right-4 md:-right-12" />
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
};

export default FeedbackCarousel;

