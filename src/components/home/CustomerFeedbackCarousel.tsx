import FeedbackCarousel from "@/components/feedbacks/FeedbackCarousel";

/**
 * CustomerFeedbackCarousel component - Carousel of customer feedbacks on home page
 * Wrapper component that uses the reusable FeedbackCarousel with home page specific props
 */
const CustomerFeedbackCarousel = () => {
  return (
    <FeedbackCarousel
      title="What Our Clients Say"
      description="Trusted by businesses worldwide for delivering exceptional results"
      sectionClassName="py-10"
    />
  );
};

export default CustomerFeedbackCarousel;

